import './App.css'
import s1 from './assets/S1.png'
import logo from './assets/playpaca_logo.svg'


const events = [
  { emoji: '🎲', name: 'Catan Night',  time: 'Fri 7pm · 4 spots left' },
  { emoji: '🃏', name: 'Poker & Bluff', time: 'Sat 6pm · 2 spots left' },
  { emoji: '♟️', name: 'Chess Club',   time: 'Sun 3pm · Open' },
]

const EventList = () => (
  <>
    <div className="phone-header">
      <div className="phone-title">This Week</div>
      <div className="phone-sub">3 events near you</div>
    </div>
    {events.map((e, i) => (
      <div className="phone-event" key={i}>
        <div className="phone-event-emoji">{e.emoji}</div>
        <div className="phone-event-info">
          <div className="phone-event-name">{e.name}</div>
          <div className="phone-event-time">{e.time}</div>
        </div>
        <div className="phone-event-join">Join</div>
      </div>
    ))}
  </>
)

const Devices = () => (
  <div className="devices-wrap">
    <div className="devices-glow" />
    <div className="orbit-dot orbit-dot-1" />
    <div className="orbit-dot orbit-dot-2" />

    <div className="phone phone-ios">
      {/* Left side buttons */}
      <div className="btn-action" />
      <div className="btn-vol-up" />
      <div className="btn-vol-down" />
      {/* Right side buttons */}
      <div className="btn-power" />
      <div className="btn-camera-ctrl" />

      {/* Screen */}
      <div className="phone-inner">
        <img src={s1} className="phone-screenshot" alt="App screenshot" />
        <div className="phone-shine" />
      </div>
    </div>
  </div>
)

export default function App() {
  return (
    <>
    <div className="hero-glow" />
    <main>

      <div className="hero-content">
        {/* LEFT */}
        <div className="hero-left">
          <img src={logo} className="logo" alt="PlayPaca" />

          <h1>
            Join the<br />
            board&nbsp;game&nbsp;night<br />
            <span>everyone's</span><br />
            talking about.
          </h1>

          <p className="hero-sub">
            We host weekly board game events open to everyone. Reserve your spot, show up, and play.
          </p>

          <div className="store-buttons">
            <a href="#" className="store-btn store-btn-ios">
              <svg className="store-btn-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <div className="store-btn-text">
                <span className="store-btn-sub">Download on the</span>
                <span className="store-btn-title">App Store</span>
              </div>
            </a>
            <a href="#" className="store-btn store-btn-android">
              <svg className="store-btn-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.18 23.76c.3.17.64.17.94 0l10.82-6.25-2.5-2.5-9.26 8.75zM.54 1.73C.2 2.03 0 2.5 0 3.13v17.74c0 .63.2 1.1.54 1.4l.07.07 9.93-9.93v-.23L.61 1.66l-.07.07zM20.46 10.37l-2.82-1.63-2.82 1.63 2.82 1.63 2.82-1.63zm-2.82-3.02L3.18.11c-.3-.17-.64-.17-.94 0L2.17.18l10.82 6.25 4.65-2.69-.07-.07-.93-.32z"/>
              </svg>
              <div className="store-btn-text">
                <span className="store-btn-sub">Get it on</span>
                <span className="store-btn-title">Google Play</span>
              </div>
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="hero-right">
          <Devices />
        </div>
      </div>
    </main>
    </>
  )
}
