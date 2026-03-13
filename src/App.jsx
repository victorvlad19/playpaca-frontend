import { useState, useEffect } from 'react'
import './App.css'
import s1 from './assets/S1.png'
import logo from './assets/playpaca_logo.svg'

function getNextMonday() {
  const now = new Date()
  const day = now.getDay() // 0 = Sun, 1 = Mon, ...
  const daysUntilMonday = day === 1 ? 7 : (8 - day) % 7
  const next = new Date(now)
  next.setDate(now.getDate() + daysUntilMonday)
  next.setHours(0, 0, 0, 0)
  return next
}

function useCountdown(target) {
  const calc = () => {
    const diff = Math.max(0, target - Date.now())
    return {
      days:    Math.floor(diff / 86400000),
      hours:   Math.floor((diff % 86400000) / 3600000),
      minutes: Math.floor((diff % 3600000)  / 60000),
      seconds: Math.floor((diff % 60000)    / 1000),
    }
  }
  const [time, setTime] = useState(calc)
  useEffect(() => {
    const id = setInterval(() => setTime(calc()), 1000)
    return () => clearInterval(id)
  }, [target])
  return time
}


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
        <div className="phone-island" />
        <img src={s1} className="phone-screenshot" alt="App screenshot" />
        <div className="phone-shine" />
      </div>
    </div>
  </div>
)

export default function App() {
  const { days, hours, minutes, seconds } = useCountdown(getNextMonday())
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) setSubmitted(true)
  }

  return (
    <main>
      <div className="hero-glow" />

      <div className="hero-content">
        {/* LEFT */}
        <div className="hero-left">
          <img src={logo} className="logo" alt="PlayPaca" />

          <h1>
            Join the board game<br />
            night <span>everyone's</span><br />
            talking about.
          </h1>

          <p className="hero-sub">
            We host weekly board game events open to everyone. Reserve your spot, show up, and play.
          </p>

          <div className="countdown">
            {[['Days', days], ['Hours', hours], ['Mins', minutes], ['Secs', seconds]].map(([label, val]) => (
              <div className="countdown-unit" key={label}>
                <span className="countdown-num" key={val}>{String(val).padStart(2, '0')}</span>
                <span className="countdown-label">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="hero-right">
          <Devices />
        </div>

        {/* SIGNUP — below phone on mobile */}
        <div className="hero-signup">
          {!submitted ? (
            <form className="signup-form" onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
              <button type="submit">Notify me</button>
            </form>
          ) : (
            <div className="signup-success">
              <span>🎉</span> You're on the list — we'll ping you at launch!
            </div>
          )}
          <p className="signup-note">iOS & Android · Free to join · No spam, ever.</p>
        </div>
      </div>
    </main>
  )
}
