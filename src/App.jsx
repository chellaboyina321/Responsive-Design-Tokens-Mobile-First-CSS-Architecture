import { useState } from "react";
import "./App.css";

const services = [
  {
    name: "Digital Identity",
    description: "Secure identity verification services.",
    status: "Active",
    usage: "92%",
  },
  {
    name: "Document Services",
    description: "Online document storage and verification.",
    status: "Active",
    usage: "84%",
  },
  {
    name: "Citizen Payments",
    description: "Fast and secure digital payment services.",
    status: "Active",
    usage: "76%",
  },
  {
    name: "Public Records",
    description: "Access government records online.",
    status: "Maintenance",
    usage: "61%",
  },
];

const stats = [
  { label: "Active Services", value: "24" },
  { label: "Daily Users", value: "18.4K" },
  { label: "System Uptime", value: "99.9%" },
  { label: "Accessibility", value: "96%" },
];

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`app-shell ${darkMode ? "dark-theme" : "light-theme"}`}>
      <header className="site-header">
        <div className="brand">
          <div className="brand-mark">DS</div>

          <div>
            <p className="eyebrow">Enterprise Platform</p>
            <h1>Digital Services Dashboard</h1>
          </div>
        </div>

        <button
          className="theme-button"
          type="button"
          onClick={() => setDarkMode((current) => !current)}
          aria-label={darkMode ? "Switch to light theme" : "Switch to dark theme"}
        >
          {darkMode ? "☀ Light" : "◐ Dark"}
        </button>
      </header>

      <div className="dashboard-layout">
        <aside className="sidebar">
          <nav aria-label="Dashboard navigation">
            <a className="nav-link active" href="#overview">
              Overview
            </a>

            <a className="nav-link" href="#services">
              Services
            </a>

            <a className="nav-link" href="#analytics">
              Analytics
            </a>

            <a className="nav-link" href="#settings">
              Settings
            </a>
          </nav>
        </aside>

        <main className="main-content">
          <section id="overview" className="hero-section">
            <div>
              <p className="eyebrow">Responsive Design System</p>

              <h2>Modern public service management</h2>

              <p>
                A mobile-first dashboard built with CSS design tokens,
                Grid, Flexbox, and responsive breakpoints.
              </p>
            </div>

            <button className="primary-button" type="button">
              View Reports
            </button>
          </section>

          <section
            className="stats-grid"
            aria-label="Dashboard statistics"
          >
            {stats.map((stat) => (
              <article className="stat-card" key={stat.label}>
                <span>{stat.label}</span>
                <strong>{stat.value}</strong>
                <small>Updated today</small>
              </article>
            ))}
          </section>

          <section id="services" className="content-section">
            <div className="section-heading">
              <div>
                <p className="eyebrow">Service Directory</p>
                <h2>Government digital services</h2>
              </div>

              <button className="secondary-button" type="button">
                Add Service
              </button>
            </div>

            <div className="service-grid">
              {services.map((service) => (
                <article className="service-card" key={service.name}>
                  <div className="service-card-header">
                    <div className="service-icon">
                      {service.name.charAt(0)}
                    </div>

                    <span
                      className={`status ${
                        service.status === "Active"
                          ? "status-active"
                          : "status-maintenance"
                      }`}
                    >
                      {service.status}
                    </span>
                  </div>

                  <h3>{service.name}</h3>

                  <p>{service.description}</p>

                  <div className="usage-row">
                    <span>Usage</span>
                    <strong>{service.usage}</strong>
                  </div>

                  <div className="progress-track">
                    <div
                      className="progress-bar"
                      style={{ width: service.usage }}
                    />
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section id="analytics" className="content-section">
            <div className="section-heading">
              <div>
                <p className="eyebrow">Analytics</p>
                <h2>Platform performance</h2>
              </div>
            </div>

            <div className="analytics-grid">
              <article className="glass-card large-card">
                <span>Monthly engagement</span>

                <strong>84.6%</strong>

                <p>
                  Engagement continues to grow across users.
                </p>

                <div className="chart">
                  <span style={{ height: "42%" }} />
                  <span style={{ height: "58%" }} />
                  <span style={{ height: "50%" }} />
                  <span style={{ height: "72%" }} />
                  <span style={{ height: "64%" }} />
                  <span style={{ height: "86%" }} />
                  <span style={{ height: "78%" }} />
                  <span style={{ height: "94%" }} />
                </div>
              </article>

              <article className="glass-card">
                <span>Accessibility score</span>

                <strong>96 / 100</strong>

                <p>
                  WCAG-focused interface monitoring.
                </p>
              </article>

              <article className="glass-card">
                <span>Mobile traffic</span>

                <strong>68%</strong>

                <p>
                  Responsive layouts support smaller screens.
                </p>
              </article>
            </div>
          </section>

          <section
            id="settings"
            className="content-section settings-card"
          >
            <div>
              <p className="eyebrow">Design System</p>

              <h2>Responsive by default</h2>

              <p>
                The interface uses custom properties for color, spacing,
                typography, shadows, and border radii.
              </p>
            </div>

            <div className="breakpoint-list">
              <span>320px Mobile</span>
              <span>768px Tablet</span>
              <span>1024px Desktop</span>
              <span>1440px Large Desktop</span>
            </div>
          </section>
        </main>
      </div>

      <footer className="site-footer">
        <span>Digital Services Platform</span>
        <span>Responsive Design System · 2026</span>
      </footer>
    </div>
  );
}

export default App;
