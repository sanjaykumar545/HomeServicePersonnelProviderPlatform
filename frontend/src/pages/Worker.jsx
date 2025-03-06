import {
  Star,
  Clock,
  DollarSign,
  Bell,
  Settings,
  Home,
  User,
  LogOut,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Briefcase,
} from "lucide-react"
import "./WorkerDashboard.css"

export default function WorkerDashboard() {
  return (
    <div className="page-container">
      <nav className="top-navbar">
        <div className="nav-left">
          <Home className="nav-icon" />
          <span className="brand-name">ServicePro</span>
        </div>

        <div className="nav-middle">
          <button className="nav-btn">
            <Home className="icon-sm" /> Home
          </button>
          <button className="nav-btn">
            <Briefcase className="icon-sm" /> Jobs
          </button>
          <button className="nav-btn">
            <Mail className="icon-sm" /> Messages
          </button>
        </div>

        <div className="nav-right">
          <button className="notification-btn">
            <Bell className="icon-sm" />
            <span className="notification-badge">3</span>
          </button>
          <div className="nav-avatar">
            <img src="/placeholder.svg?height=32&width=32" alt="Worker" />
          </div>
        </div>
      </nav>

      <div className="dashboard-container">
        <aside className="sidebar">
          <div className="profile-section">
            <div className="profile-image-container">
              <img src="/placeholder.svg?height=120&width=120" alt="Worker" className="worker-avatar" />
              <span className="status-badge">Available</span>
            </div>

            <div className="worker-info">
              <h2>John Smith</h2>
              <p className="worker-title">Professional Plumber</p>

              <div className="info-grid">
                <div className="info-item">
                  <Phone className="info-icon" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="info-item">
                  <Mail className="info-icon" />
                  <span>john.smith@email.com</span>
                </div>
                <div className="info-item">
                  <MapPin className="info-icon" />
                  <span>123 Service St, NY 10001</span>
                </div>
                <div className="info-item">
                  <Calendar className="info-icon" />
                  <span>Joined: Jan 2023</span>
                </div>
              </div>

              <div className="skill-tags">
                <span className="skill-tag">Plumbing</span>
                <span className="skill-tag">Repairs</span>
                <span className="skill-tag">Installation</span>
              </div>
            </div>
          </div>

          <nav className="sidebar-nav">
            <button className="nav-item active">
              <Bell className="icon" /> Requests
            </button>
            <button className="nav-item">
              <DollarSign className="icon" /> Payments
            </button>
            <button className="nav-item">
              <User className="icon" /> Profile
            </button>
            <button className="nav-item">
              <Settings className="icon" /> Settings
            </button>
            <button className="nav-item logout">
              <LogOut className="icon" /> Logout
            </button>
          </nav>
        </aside>

        <main className="main-content">
          <section className="stats-section">
            <div className="stat-card">
              <h3>Rating</h3>
              <div className="rating">
                <Star className="star-icon" />
                <span className="rating-value">4.8</span>
              </div>
            </div>

            <div className="stat-card">
              <h3>Completed Jobs</h3>
              <div className="completed-jobs">
                <span className="job-count">127</span>
                <div className="progress-bar">
                  <div className="progress" style={{ width: "85%" }}></div>
                </div>
              </div>
            </div>

            <div className="stat-card">
              <h3>Earnings</h3>
              <div className="earnings">
                <DollarSign className="dollar-icon" />
                <span className="amount">2,547</span>
              </div>
            </div>
          </section>

          <section className="pending-requests">
            <h3>Pending Requests</h3>
            <div className="request-cards">
              {[1, 2, 3].map((request) => (
                <div key={request} className="request-card">
                  <div className="request-header">
                    <div className="client-info">
                      <div className="client-avatar">
                        <img src="/placeholder.svg" alt="Client" />
                      </div>
                      <div>
                        <h4>Home Cleaning Service</h4>
                        <p className="client-name">Client #{request}</p>
                      </div>
                    </div>
                    <span className="request-status">
                      <Clock className="icon-sm" /> Pending
                    </span>
                  </div>
                  <div className="request-details">
                    <p>Location: 123 Main St</p>
                    <p>Date: 2024-02-24</p>
                    <p>Time: 10:00 AM</p>
                  </div>
                  <div className="request-actions">
                    <button className="accept-btn">Accept</button>
                    <button className="decline-btn">Decline</button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="reviews-section">
            <h3>Recent Reviews</h3>
            <div className="review-cards">
              {[1, 2, 3].map((review) => (
                <div key={review} className="review-card">
                  <div className="review-header">
                    <div className="reviewer-avatar">
                      <img src="/placeholder.svg" alt="Reviewer" />
                    </div>
                    <div className="reviewer-info">
                      <h4>Client #{review}</h4>
                      <div className="stars">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`star ${i < 4 ? "filled" : ""}`} />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="review-text">"Great service! Very professional and thorough with the work."</p>
                  <span className="review-date">2 days ago</span>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

