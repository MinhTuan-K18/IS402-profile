# IS402 Profile — Cloud Team

Trang profile nhóm viết bằng React + Vite, được đóng gói bằng Docker multi-stage và phục vụ bằng Nginx trên cổng `8080`. Cấu trúc bám theo mục 11 của tài liệu hướng dẫn OpenStack Magnum và GitOps của môn IS402.

## Yêu cầu

- Node.js 22
- npm
- Docker Desktop hoặc Docker Engine (chỉ cần cho bước kiểm tra container)

## Chạy khi phát triển

```bash
npm ci
npm run dev
```

Vite sẽ in địa chỉ local ra terminal, thường là `http://localhost:5173`.

## Thay thông tin nhóm

Toàn bộ tên nhóm, phiên bản và thành viên nằm trong `src/data/team.js`. Thay các nhãn `Thành viên 01`... bằng thông tin thật, sau đó chạy:

```bash
npm run build
```

Không đưa password, token, kubeconfig hoặc thông tin nhạy cảm vào frontend; mọi nội dung bundle đều có thể được người dùng xem.

## Build và smoke test Docker

```bash
docker build -t is402-profile:local .
docker run -d --name is402-profile-local -p 127.0.0.1:8080:8080 is402-profile:local
curl -f http://127.0.0.1:8080/healthz
node scripts/smoke.mjs
```

Mở `http://localhost:8080`. Sau khi kiểm tra:

```bash
docker stop is402-profile-local
docker rm is402-profile-local
```

## Đưa repo lên GitHub

1. Trên GitHub, tạo repository trống tên `IS402-profile`; không tạo README, `.gitignore` hay license tự động.
2. Trong thư mục dự án này, chạy:

```bash
git init -b main
git add .
git commit -m "Build IS402 group profile frontend"
git remote add origin https://github.com/THAY_OWNER/IS402-profile.git
git push -u origin main
```

Thay `THAY_OWNER` bằng username hoặc organization thật. Nếu repo local đã có remote, không chạy lại `git remote add`; kiểm tra bằng `git remote -v`.

3. Trên GitHub, vào **Settings → Collaborators and teams → Add people**, mời các thành viên cần làm tiếp. Quyền `Write` đủ để họ tạo branch và push; nên dùng pull request để ghép thay đổi vào `main`.

4. Mỗi thành viên clone app repo và làm trên branch riêng:

```bash
git clone https://github.com/THAY_OWNER/IS402-profile.git
cd IS402-profile
git switch -c feature/ci-gitops
```

## Bàn giao cho phần 12 và 13

Thành viên làm **phần 12** tạo repo riêng `IS402-profile-gitops` chứa:

```text
apps/profile/deployment.yaml
apps/profile/service.yaml
apps/profile/kustomization.yaml
```

Deployment phải dùng container port `8080` và probe path `/healthz` để khớp với Nginx trong repo này. Image ban đầu là placeholder; workflow phần 13 sẽ thay bằng `ghcr.io/<owner>/is402-profile@sha256:<digest-thật>`. Tên image GHCR phải viết thường dù tên GitHub repository dùng `IS402` viết hoa.

Quy ước tên khi viết manifest:

- GitHub app repository: `IS402-profile`.
- GitHub GitOps repository: `IS402-profile-gitops`.
- GHCR image: `ghcr.io/<owner-viết-thường>/is402-profile`.
- Kubernetes namespace: `is402-profile`.
- Tên Deployment và Service có thể giữ là `profile` như tài liệu mẫu.

Repo GitOps cần tồn tại, có nhánh `main` và đã commit ba manifest trước khi chạy workflow phần 13 lần đầu.

Thành viên làm **phần 13** thêm `.github/workflows/ci-gitops.yml` vào repo ứng dụng này. Workflow cần:

1. Chạy `npm ci` và `npm run build`.
2. Build image `linux/amd64`.
3. Chạy container và `node scripts/smoke.mjs`.
4. Chỉ trên nhánh `main`: push image lên GHCR.
5. Lấy digest bất biến và cập nhật đúng một dòng `image:` trong repo GitOps.

Thiết lập trong app repo:

- Actions variable `GITOPS_REPOSITORY=THAY_OWNER/IS402-profile-gitops`.
- Actions secret `GITOPS_TOKEN`: fine-grained PAT chỉ có quyền `Contents: Read and write` trên repo GitOps.
- Workflow permission `packages: write` để `GITHUB_TOKEN` publish GHCR.

Không lưu PAT trong code, remote URL hoặc manifest. Với bài lab, nên để GitOps repo public nhưng tuyệt đối không chứa secret; sau lần CI đầu, kiểm tra quyền pull của package GHCR theo đúng quyết định public/private của nhóm.

Thứ tự bàn giao an toàn là: **push app repo → mời collaborator → hoàn thành repo GitOps phần 12 → cấu hình variable/secret → thêm workflow phần 13 → merge vào `main` → theo dõi Actions chạy lần đầu**.
