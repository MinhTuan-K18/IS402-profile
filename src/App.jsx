import {
  ArrowDown,
  ArrowRight,
  Box,
  Braces,
  Cloud,
  Container,
  Github,
  Network,
  ServerCog,
  ShieldCheck,
  Sparkles,
  Terminal,
  UsersRound,
} from 'lucide-react';
import { stack, team, workflow } from './data/team.js';
import './App.css';

const infrastructure = [
  {
    label: 'IaaS',
    title: 'OpenStack',
    description: 'Cấp máy ảo, mạng, image và load balancer.',
    icon: Cloud,
  },
  {
    label: 'Cluster API',
    title: 'Magnum',
    description: 'Tạo và quản lý vòng đời Kubernetes cluster.',
    icon: ServerCog,
  },
  {
    label: 'Orchestration',
    title: 'Kubernetes',
    description: 'Giữ Pod hoạt động và đưa traffic đến đúng phiên bản.',
    icon: Network,
  },
  {
    label: 'Application',
    title: 'React + Nginx',
    description: 'Phục vụ giao diện nhóm từ container gọn nhẹ.',
    icon: Braces,
  },
];

function BrandMark() {
  return (
    <span className="brand-mark" aria-hidden="true">
      <span />
      <span />
      <span />
      <span />
    </span>
  );
}

function App() {
  const year = new Date().getFullYear();

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">
        Đi tới nội dung chính
      </a>

      <header className="topbar">
        <a className="brand" href="#top" aria-label="Về đầu trang">
          <BrandMark />
          <span>
            <strong>IS402</strong>
            <small>Cloud Team</small>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Điều hướng chính">
          <a href="#about">Giới thiệu</a>
          <a href="#team">Thành viên</a>
          <a href="#architecture">Kiến trúc</a>
          <a href="#workflow">Quy trình</a>
        </nav>

        <a className="nav-cta" href="#team">
          Hồ sơ nhóm <ArrowRight size={16} aria-hidden="true" />
        </a>
      </header>

      <main id="main-content">
        <section className="hero section-shell" id="top">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="live-dot" />
              Phiên bản demo: {team.version}
            </div>
            <p className="hero-kicker">{team.course}</p>
            <h1>
              Một nhóm nhỏ.
              <span>Một cloud tự vận hành.</span>
            </h1>
            <p className="hero-lead">{team.intro}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#team">
                Gặp gỡ đội ngũ <UsersRound size={18} aria-hidden="true" />
              </a>
              <a className="button button-secondary" href="#architecture">
                Xem kiến trúc <ArrowDown size={18} aria-hidden="true" />
              </a>
            </div>

            <dl className="hero-stats" aria-label="Thông tin nhanh">
              <div>
                <dt>04</dt>
                <dd>vai trò cốt lõi</dd>
              </div>
              <div>
                <dt>06</dt>
                <dd>bước phát hành</dd>
              </div>
              <div>
                <dt>02</dt>
                <dd>replicas mục tiêu</dd>
              </div>
            </dl>
          </div>

          <div className="hero-visual" aria-label="Sơ đồ quy trình triển khai ứng dụng">
            <div className="visual-orbit visual-orbit-one" />
            <div className="visual-orbit visual-orbit-two" />
            <div className="terminal-card">
              <div className="terminal-bar">
                <div className="terminal-dots" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </div>
                <span>deploy.log</span>
                <span className="terminal-status">healthy</span>
              </div>
              <div className="terminal-body">
                <div className="terminal-command">
                  <span>$</span> git push origin main
                </div>
                <div className="log-line">
                  <span className="log-index">01</span>
                  <span className="log-icon"><Github size={15} /></span>
                  <span>Source committed</span>
                  <b>DONE</b>
                </div>
                <div className="log-line">
                  <span className="log-index">02</span>
                  <span className="log-icon"><Box size={15} /></span>
                  <span>Image published</span>
                  <b>DONE</b>
                </div>
                <div className="log-line is-running">
                  <span className="log-index">03</span>
                  <span className="log-icon"><Container size={15} /></span>
                  <span>Rolling update</span>
                  <b>SYNC</b>
                </div>
                <div className="digest-row">
                  <span>desired state</span>
                  <code>sha256:7f4c...9a2e</code>
                </div>
              </div>
            </div>
            <div className="floating-chip chip-left">
              <ShieldCheck size={18} aria-hidden="true" />
              <span><small>Readiness</small>200 OK</span>
            </div>
            <div className="floating-chip chip-right">
              <Sparkles size={18} aria-hidden="true" />
              <span><small>Strategy</small>GitOps</span>
            </div>
          </div>
        </section>

        <section className="marquee-band" aria-label="Công nghệ sử dụng">
          <div>
            <span>OPENSTACK</span><i />
            <span>MAGNUM</span><i />
            <span>KUBERNETES</span><i />
            <span>GITOPS</span><i />
            <span>ARGO CD</span>
          </div>
        </section>

        <section className="section-shell about-section" id="about">
          <div className="section-heading split-heading">
            <div>
              <span className="section-index">01 — Mục tiêu</span>
              <h2>Từ code đến cloud,<br />không cần thao tác tay.</h2>
            </div>
            <p>
              Chúng tôi đang xây dựng một prototype triển khai ứng dụng theo hướng PaaS. Người phát triển tập trung vào code và Git; nền tảng đảm nhiệm build, phân phối và giữ ứng dụng hoạt động.
            </p>
          </div>

          <div className="principles-grid">
            <article>
              <Terminal aria-hidden="true" />
              <span>01</span>
              <h3>Tái lập được</h3>
              <p>Lockfile, Dockerfile nhiều stage và image digest giúp mỗi bản phát hành có thể truy vết.</p>
            </article>
            <article>
              <ShieldCheck aria-hidden="true" />
              <span>02</span>
              <h3>An toàn khi cập nhật</h3>
              <p>Smoke test và readiness probe chặn phiên bản chưa sẵn sàng nhận traffic.</p>
            </article>
            <article>
              <Network aria-hidden="true" />
              <span>03</span>
              <h3>Khai báo bằng Git</h3>
              <p>Trạng thái mong muốn nằm trong GitOps repo; rollback là một commit có lịch sử rõ ràng.</p>
            </article>
          </div>
        </section>

        <section className="section-shell team-section" id="team">
          <div className="section-heading team-heading">
            <div>
              <span className="section-index">02 — Đội ngũ</span>
              <h2>Mỗi người một lớp.<br />Cùng vận hành một hệ thống.</h2>
            </div>
            <div className="team-note">
              <UsersRound size={20} aria-hidden="true" />
              <span>Dữ liệu thành viên được quản lý tập trung trong <code>src/data/team.js</code>.</span>
            </div>
          </div>

          <div className="member-grid">
            {team.members.map((member, index) => (
              <article className="member-card" key={member.name}>
                <div className="member-topline">
                  <span>MEMBER / {String(index + 1).padStart(2, '0')}</span>
                  <ArrowRight size={18} aria-hidden="true" />
                </div>
                <div className={`member-avatar avatar-${index + 1}`}>{member.initials}</div>
                <div className="member-copy">
                  <h3>{member.name}</h3>
                  <p className="member-role">{member.role}</p>
                  <p>{member.description}</p>
                </div>
                <div className="member-focus">{member.focus}</div>
              </article>
            ))}
          </div>
        </section>

        <section className="architecture-section" id="architecture">
          <div className="section-shell">
            <div className="section-heading split-heading architecture-heading">
              <div>
                <span className="section-index">03 — Kiến trúc</span>
                <h2>Bốn lớp.<br />Một luồng xuyên suốt.</h2>
              </div>
              <p>
                OpenStack không trực tiếp chạy React. Nó cấp hạ tầng để Magnum tạo cluster; Kubernetes mới điều phối container Nginx phục vụ giao diện.
              </p>
            </div>

            <div className="architecture-flow">
              {infrastructure.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div className="architecture-step" key={item.title}>
                    <div className="step-number">0{index + 1}</div>
                    <div className="step-icon"><Icon aria-hidden="true" /></div>
                    <span>{item.label}</span>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    {index < infrastructure.length - 1 && (
                      <ArrowRight className="step-arrow" aria-hidden="true" />
                    )}
                  </div>
                );
              })}
            </div>

            <div className="stack-panel">
              <div className="stack-title">
                <span>TECH STACK</span>
                <p>Các công cụ chính được phân vai rõ ràng trong pipeline.</p>
              </div>
              <div className="stack-list">
                {stack.map((item) => (
                  <div className="stack-item" key={item.name}>
                    <i className={`tone-${item.tone}`} />
                    <strong>{item.name}</strong>
                    <span>{item.detail}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section-shell workflow-section" id="workflow">
          <div className="section-heading workflow-heading">
            <div>
              <span className="section-index">04 — Delivery pipeline</span>
              <h2>Một lần push.<br />Sáu bước tự động.</h2>
            </div>
            <div className="workflow-badge">
              <span className="pulse-ring" />
              Pull-based delivery
            </div>
          </div>

          <ol className="workflow-list">
            {workflow.map((item) => (
              <li key={item.id}>
                <span className="workflow-id">{item.id}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                </div>
                <ArrowRight aria-hidden="true" />
              </li>
            ))}
          </ol>

          <div className="closing-panel">
            <div>
              <span className="closing-label">READY TO SHIP</span>
              <h2>Code là đầu vào.<br />Cloud là nơi nó sống.</h2>
            </div>
            <div className="closing-copy">
              <p>
                Repo ứng dụng này là điểm bắt đầu cho phần GitOps và CI/CD tiếp theo của nhóm.
              </p>
              <a href="#top">Về đầu trang <ArrowRight size={17} aria-hidden="true" /></a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-brand">
          <BrandMark />
          <span>{team.name}</span>
        </div>
        <p>{team.classCode} · Group profile · {year}</p>
        <p>React · Docker · OpenStack Magnum</p>
      </footer>
    </div>
  );
}

export default App;
