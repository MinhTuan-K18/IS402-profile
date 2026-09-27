// Thay nội dung trong file này bằng thông tin thật của nhóm trước khi public repo.
export const team = {
  name: 'Cloud Native Crew',
  course: 'IS402 — Cloud Computing',
  classCode: 'IS402',
  version: 'v1.3 — Cloud Native Crew',
  intro:
    'Nhóm chúng em xây dựng một quy trình triển khai frontend có thể lặp lại: từ một commit React đến container chạy trên Kubernetes được cấp phát bởi OpenStack Magnum.',
  members: [
    {
      name: 'Phạm Hoàng Vinh',
      initials: '01',
      role: 'Cloud Infrastructure',
      focus: 'OpenStack · DevStack · Networking',
      description: 'Phụ trách nền tảng IaaS, mạng dự án và tài nguyên máy ảo cho toàn bộ hệ thống.',
    },
    {
      name: 'Trần Minh Hoài Tâm',
      initials: '02',
      role: 'Container Platform',
      focus: 'Magnum · Kubernetes · Octavia',
      description: 'Xây dựng workload cluster và kết nối dịch vụ Kubernetes với hạ tầng OpenStack.',
    },
    {
      name: 'Nguyễn Minh Tuấn',
      initials: '03',
      role: 'Frontend Engineer',
      focus: 'React · Vite · Nginx',
      description: 'Thiết kế trải nghiệm nhóm, tối ưu bundle và đóng gói ứng dụng web tĩnh.',
    },
    {
      name: 'Nguyễn Quốc Trung',
      initials: '04',
      role: 'GitOps & Automation',
      focus: 'GitHub Actions · GHCR · Argo CD',
      description: 'Tự động hóa kiểm thử, xuất bản image và đồng bộ trạng thái triển khai.',
    },
  ],
};

export const stack = [
  { name: 'React + Vite', detail: 'Giao diện và quy trình build', tone: 'cyan' },
  { name: 'Docker + Nginx', detail: 'Đóng gói và phục vụ web', tone: 'blue' },
  { name: 'OpenStack Magnum', detail: 'Cấp phát Kubernetes cluster', tone: 'violet' },
  { name: 'Kubernetes', detail: 'Điều phối container và traffic', tone: 'cyan' },
  { name: 'GitHub Actions', detail: 'Build, test và publish image', tone: 'blue' },
  { name: 'Argo CD', detail: 'Đồng bộ desired state từ Git', tone: 'violet' },
];

export const workflow = [
  { id: '01', title: 'Push code', detail: 'Commit React lên nhánh main' },
  { id: '02', title: 'Build & test', detail: 'Vite build và smoke test qua HTTP' },
  { id: '03', title: 'Publish image', detail: 'Đẩy image bất biến lên GHCR' },
  { id: '04', title: 'Update GitOps', detail: 'Ghi digest mới vào manifest' },
  { id: '05', title: 'Argo sync', detail: 'Argo CD phát hiện desired state mới' },
  { id: '06', title: 'Rolling update', detail: 'Kubernetes thay Pod an toàn' },
];
