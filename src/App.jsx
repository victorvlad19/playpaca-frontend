import { useState, useEffect } from 'react'
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

function TermsPage({ onBack }) {
  return (
    <div className="legal-page">
      <button className="back-btn" onClick={onBack}>← Back</button>
      <div className="legal-content">
        <h2>Terms of Service</h2>
        <p className="legal-date">Last updated: March 17, 2026</p>

        <p>These Terms of Service ("Terms") govern your use of the PlayPaca mobile application ("App") operated by PlayPaca ("we", "us", or "our"). By creating an account or using the App, you agree to be bound by these Terms.</p>

        <h3>1. Account Registration</h3>
        <p>1.1 You must create an account using a valid email address and password to access PlayPaca.</p>
        <p>1.2 You are responsible for maintaining the confidentiality of your login credentials.</p>
        <p>1.3 You must provide accurate information during registration and keep your profile details up to date.</p>
        <p>1.4 You must be at least 16 years of age to create an account.</p>
        <p>1.5 <strong>We reserve the right to suspend or terminate accounts.</strong></p>

        <h3>2. Dashboard &amp; Events</h3>
        <p>2.1 The Dashboard displays upcoming board game events organized through PlayPaca.</p>
        <p>2.2 Events include details such as event name, date, time, venue location, price, and the featured board game.</p>
        <p>2.3 Some events may have a limited number of available tickets. Once all tickets are sold, the event will be marked as "Sold Out" and no further purchases will be accepted.</p>
        <p>2.4 Event information, including dates and venues, may change. We will make reasonable efforts to notify attendees of any changes.</p>

        <h3>3. Ticket Purchases &amp; Payments</h3>
        <p>3.1 Tickets for paid events are purchased through Stripe, a third-party payment processor. By purchasing a ticket, you also agree to Stripe's terms of service.</p>
        <p>3.2 Each user may purchase one ticket per event.</p>
        <p>3.3 Ticket prices are displayed in Romanian Lei (RON) and include all applicable fees unless stated otherwise.</p>
        <p>3.4 A valid payment must be completed before a ticket is confirmed.</p>
        <p>3.5 Refunds may be issued at the discretion of the event organizers. Refunded tickets will be marked accordingly and the spot will become available again.</p>
        <p>3.6 We are not responsible for payment failures caused by your bank, card issuer, or Stripe.</p>

        <h3>4. Community &amp; Chat</h3>
        <p>4.1 PlayPaca includes a Community section where users can communicate via direct messages and group chats.</p>
        <p>4.2 You agree to use the chat features responsibly and respectfully. The following are prohibited:</p>
        <ul>
          <li>Harassment, hate speech, threats, or bullying</li>
          <li>Spam, advertising, or unsolicited promotions</li>
          <li>Sharing illegal, obscene, or harmful content</li>
          <li>Impersonating other users or public figures</li>
        </ul>
        <p>4.3 We reserve the right to monitor, review, and moderate chat content to enforce community standards.</p>
        <p>4.4 Group chats may be created by users. The creator and members share responsibility for the content posted within.</p>
        <p>4.5 Online presence indicators show when users are active. By using the App, you consent to your online status being visible to other users.</p>
        <p>4.6 We may delete messages or groups that violate these Terms without prior notice.</p>

        <h3>5. Leaderboard &amp; Scoring</h3>
        <p>5.1 PlayPaca includes a leaderboard that tracks scores from board game events.</p>
        <p>5.2 Scores are recorded by event organizers and aggregated across events.</p>
        <p>5.3 Medals (gold, silver, bronze) may be awarded based on performance. These are for in-app recognition only and carry no monetary value.</p>
        <p>5.4 We reserve the right to correct scores or rankings if errors are identified.</p>

        <h3>7. User Profile &amp; Personal Data</h3>
        <p>7.1 Your profile includes your display name, profile photo, email, and phone number.</p>
        <p>7.2 You may update your profile information, change your password, or upload a new profile photo at any time.</p>
        <p>7.3 Your attended events history and game ratings are visible on your profile.</p>
        <p>7.4 You may delete your account at any time through the Profile settings. Account deletion is permanent and cannot be undone. This will remove your authentication credentials and profile photo.</p>

        <h3>8. Push Notifications</h3>
        <p>8.1 PlayPaca may send push notifications for event reminders, chat messages, and other updates.</p>
        <p>8.2 You can manage notification preferences through your device settings.</p>

        <h3>9. Intellectual Property</h3>
        <p>9.1 The PlayPaca App, including its design, code, graphics, logos, and content, is owned by PlayPaca and is protected by intellectual property laws.</p>
        <p>9.2 Board game names, images, and descriptions displayed in the App belong to their respective owners and are used for informational purposes.</p>
        <p>9.3 You may not copy, modify, distribute, or reverse-engineer any part of the App.</p>

        <h3>10. Limitation of Liability</h3>
        <p>10.1 PlayPaca is provided "as is" without warranties of any kind, express or implied.</p>
        <p>10.2 We are not liable for any damages arising from your use of the App, including but not limited to lost data, service interruptions, or payment processing errors.</p>
        <p>10.3 Our total liability to you shall not exceed the amount you paid for services through the App in the 12 months preceding the claim.</p>

        <h3>11. Changes to These Terms</h3>
        <p>11.1 We may update these Terms from time to time. The updated version will be available within the App.</p>
        <p>11.2 Continued use of the App after changes constitutes acceptance of the revised Terms.</p>

        <h3>12. Contact</h3>
        <p>For questions about these Terms, please contact us through the App or at the contact details provided in your event venue information.</p>
      </div>
    </div>
  )
}

function PrivacyPage({ onBack }) {
  return (
    <div className="legal-page">
      <button className="back-btn" onClick={onBack}>← Back</button>
      <div className="legal-content">
        <h2>Privacy Policy</h2>
        <p className="legal-date">Last updated: March 17, 2026</p>

        <p>PlayPaca ("we", "us", or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, store, and protect your personal information when you use the PlayPaca mobile application ("App").</p>

        <h3>1. Information We Collect</h3>
        <p>1.1 Account Information</p>
        <p>When you create an account, we collect:</p>
        <ul>
          <li>Email address</li>
          <li>Display name</li>
        </ul>
        <p>1.2 Profile Information</p>
        <p>You may optionally provide:</p>
        <ul>
          <li>Profile photo</li>
          <li>Phone number</li>
        </ul>
        <p>1.3 Event &amp; Activity Data</p>
        <p>When you use the App, we collect:</p>
        <ul>
          <li>Events you attend and tickets you purchase</li>
          <li>Board game scores and rankings</li>
          <li>Medals earned (gold, silver, bronze)</li>
          <li>Game ratings and play history</li>
        </ul>
        <p>1.4 Community &amp; Chat Data</p>
        <p>When you use the Community features, we collect:</p>
        <ul>
          <li>Direct messages you send and receive</li>
          <li>Group chat messages and group membership</li>
          <li>Online presence status (when you are active in the App)</li>
          <li>Pinned and muted conversation preferences</li>
        </ul>
        <p>1.5 Device Information</p>
        <p>We may collect:</p>
        <ul>
          <li>Device model and operating system</li>
          <li>Push notification tokens (for sending notifications)</li>
        </ul>

        <h3>2. How We Use Your Information</h3>
        <p>We use your information to:</p>
        <ul>
          <li>Provide and operate the App's features (events, chat, store, leaderboard)</li>
          <li>Process ticket and merchandise purchases via Stripe</li>
          <li>Display your profile, scores, and rankings to other users</li>
          <li>Send push notifications for events, messages, and updates</li>
          <li>Show online presence status to community members</li>
          <li>Enforce ticket limits and prevent duplicate purchases</li>
          <li>Maintain and improve the App</li>
          <li>Ensure community safety and enforce our Terms of Service</li>
        </ul>

        <h3>3. Information Sharing</h3>
        <p>3.1 We do not sell your personal information to third parties.</p>
        <p>3.2 We share limited data with:</p>
        <ul>
          <li>Stripe: Payment processing (transaction amounts, customer IDs). Stripe's privacy policy applies to data they process.</li>
        </ul>
        <p>3.3 Your display name, profile photo, and online status are visible to other App users.</p>
        <p>3.4 Your scores and leaderboard rankings are visible to other App users.</p>
        <p>3.5 We may disclose information if required by law or to protect the safety of our users.</p>

        <h3>4. Your Rights</h3>
        <p>You have the right to:</p>
        <ul>
          <li>Access your personal data through your Profile page</li>
          <li>Update your profile information, display name, phone number, and photo at any time</li>
          <li>Change your password through Profile settings</li>
          <li>Delete your account permanently through Profile settings — this removes your authentication data and profile photo</li>
          <li>Request additional information about the data we hold about you by contacting us</li>
        </ul>

        <h3>5. Data Retention</h3>
        <p>5.1 Your data is retained for as long as your account is active.</p>
        <p>5.2 Chat messages are stored in the Realtime Database for the duration of the conversation.</p>
        <p>5.3 Event and ticket records are retained for accounting and historical purposes.</p>
        <p>5.4 When you delete your account, your authentication credentials and profile photo are permanently removed. Chat messages and event attendance records may be retained in anonymized form.</p>

        <h3>6. Children's Privacy</h3>
        <p>PlayPaca is not intended for children under 16. We do not knowingly collect personal information from children under 16. If we become aware that we have collected data from a child under 16, we will take steps to delete it.</p>

        <h3>7. Changes to This Policy</h3>
        <p>We may update this Privacy Policy from time to time. The updated version will be made available within the App. Continued use of the App after changes constitutes acceptance of the revised policy.</p>

        <h3>8. Contact</h3>
        <p>For questions about this Privacy Policy or your personal data, please contact us through the App or at the contact details provided in your event venue information.</p>
      </div>
    </div>
  )
}

function SupportPage({ onBack }) {
  return (
    <div className="legal-page">
      <button className="back-btn" onClick={onBack}>← Back</button>
      <div className="legal-content">
        <h2>Support</h2>
        <p className="legal-date">We're here to help.</p>

        <h3>Contact Us</h3>
        <p>Have a question or running into an issue? Reach out to our support team and we'll get back to you as soon as possible.</p>
        <p><a href="mailto:support@playpaca.com">support@playpaca.com</a></p>

        <h3>Account & Login</h3>

        <div className="faq-item">
          <h4>How do I create an account?</h4>
          <p>Download the app and tap "Sign Up". You can register with your email and a password, or use Google, Facebook, or Apple. You'll need to verify your email before accessing the app.</p>
        </div>

        <div className="faq-item">
          <h4>What are the password requirements?</h4>
          <p>Your password must be at least 6 characters long and include at least one number and one special character.</p>
        </div>

        <div className="faq-item">
          <h4>I forgot my password. How do I reset it?</h4>
          <p>On the login screen, tap "Forgot Password" and enter your email address. You'll receive a reset link by email.</p>
        </div>

        <div className="faq-item">
          <h4>How do I change my password?</h4>
          <p>Go to your Profile, open Settings, and tap "Change Password". You'll need to enter your current password to confirm.</p>
        </div>

        <div className="faq-item">
          <h4>Can I change my display name?</h4>
          <p>Yes. Go to your Profile and tap your display name to edit it. Display names must be between 3 and 20 characters. Note that there is a rate limit — you can only change your username once every few hours.</p>
        </div>

        <h3>Events & Tickets</h3>

        <div className="faq-item">
          <h4>How do I buy a ticket for an event?</h4>
          <p>Open the Dashboard, select an upcoming event, and tap the buy button. Payment is processed securely through Stripe. Once confirmed, your ticket will appear in the app.</p>
        </div>

        <div className="faq-item">
          <h4>Can I buy more than one ticket per event?</h4>
          <p>No. Each account is limited to one ticket per event to keep spots fair for everyone.</p>
        </div>

        <div className="faq-item">
          <h4>What happens if an event is sold out?</h4>
          <p>The event will be marked as "Sold Out" and ticket purchases will be disabled. If a refund is issued by the organizer, the spot may become available again.</p>
        </div>

        <div className="faq-item">
          <h4>Can I get a refund?</h4>
          <p>Refunds are issued at the discretion of the event organizers. If a refund is approved, your ticket will be marked accordingly and the spot will open up for other attendees.</p>
        </div>

        <div className="faq-item">
          <h4>What is the loyalty program?</h4>
          <p>Attend 4 paid events and your 5th event is on us. Your attendance is tracked automatically in your profile.</p>
        </div>

        <h3>Events & Gameplay</h3>

        <div className="faq-item">
          <h4>How does scoring work during an event?</h4>
          <p>Events are played in multiple rounds. At the end of each round, you enter scores for your table. Scores are tracked in real time and a leaderboard is updated after each round. At the end of the event, the final rankings are displayed.</p>
        </div>

        <div className="faq-item">
          <h4>What are medals?</h4>
          <p>Gold, silver, and bronze medals are awarded based on your final ranking in an event. They are displayed on your profile and are for in-app recognition only — they carry no monetary value.</p>
        </div>

        <div className="faq-item">
          <h4>Where can I see my scores and rankings?</h4>
          <p>Your scores and medals are visible on your Profile page. You can also browse per-game leaderboards in the Leaderboard section to see how you rank against other players.</p>
        </div>

        <h3>Community & Chat</h3>

        <div className="faq-item">
          <h4>How do I start a conversation with another player?</h4>
          <p>Go to the Community tab, find the user you'd like to message, and tap on their name to open a direct message chat.</p>
        </div>

        <div className="faq-item">
          <h4>How do I create a group chat?</h4>
          <p>In the Community tab, tap the group icon to create a new group. Add members, set a group name, and optionally upload a group photo.</p>
        </div>

        <div className="faq-item">
          <h4>Can I share photos or my location in chat?</h4>
          <p>Yes. Inside any chat, you can send photos from your camera or gallery, share your current location, and use the emoji picker.</p>
        </div>

        <div className="faq-item">
          <h4>How do I mute or pin a conversation?</h4>
          <p>Long-press on a conversation in the Community tab to access options to pin, mute, or delete it.</p>
        </div>

        <div className="faq-item">
          <h4>How do I leave or delete a group?</h4>
          <p>Open the group chat, go to the group settings, and select "Leave Group". If you created the group, you'll have the option to delete it for all members.</p>
        </div>

        <h3>Profile & Settings</h3>

        <div className="faq-item">
          <h4>How do I change my profile photo?</h4>
          <p>Go to your Profile and tap your photo to upload a new one from your camera or gallery.</p>
        </div>

        <div className="faq-item">
          <h4>How do I change the app language?</h4>
          <p>Go to Profile → Settings and select your preferred language. The app supports English and Romanian.</p>
        </div>

        <div className="faq-item">
          <h4>How do I switch between light and dark mode?</h4>
          <p>Go to Profile → Settings and toggle the theme between Day and Night mode.</p>
        </div>

        <div className="faq-item">
          <h4>How do I delete my account?</h4>
          <p>Go to Profile → Settings → Delete Account. You'll be asked to confirm your password. Deletion is permanent and removes your authentication credentials and profile photo.</p>
        </div>

        <h3>Notifications</h3>

        <div className="faq-item">
          <h4>How do I manage push notifications?</h4>
          <p>Notification preferences can be managed through your device settings (iOS: Settings → Notifications → PlayPaca / Android: Settings → Apps → PlayPaca → Notifications).</p>
        </div>

        <h3>Troubleshooting</h3>

        <div className="faq-item">
          <h4>The app isn't working properly. What should I do?</h4>
          <p>Try closing and reopening the app. If the issue persists, check for updates in the App Store or Google Play. If you're still experiencing problems, contact us at <a href="mailto:support@playpaca.com">support@playpaca.com</a>.</p>
        </div>

        <div className="faq-item">
          <h4>My payment failed. What should I do?</h4>
          <p>Payment failures are usually caused by your bank or card issuer. Check that your card details are correct and that your bank hasn't blocked the transaction. If the problem continues, try a different payment method or contact your bank.</p>
        </div>
      </div>
    </div>
  )
}

function usePath() {
  const [path, setPath] = useState(window.location.pathname)
  useEffect(() => {
    const onPopState = () => setPath(window.location.pathname)
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])
  return path
}

export default function App() {
  const path = usePath()

  const navigate = (to) => {
    window.history.pushState(null, '', to)
    window.dispatchEvent(new PopStateEvent('popstate'))
  }

  if (path === '/terms-of-service') return <TermsPage onBack={() => navigate('/')} />
  if (path === '/privacy-policy') return <PrivacyPage onBack={() => navigate('/')} />
  if (path === '/support') return <SupportPage onBack={() => navigate('/')} />

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
            <a href="#" className="store-btn store-btn-web">
              <svg className="store-btn-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
              </svg>
              <div className="store-btn-text">
                <span className="store-btn-sub">Open in</span>
                <span className="store-btn-title">Browser</span>
              </div>
            </a>
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

          <div className="legal-links">
            <button className="legal-link" onClick={() => navigate('/terms-of-service')}>Terms of Service</button>
            <span className="legal-sep">·</span>
            <button className="legal-link" onClick={() => navigate('/privacy-policy')}>Privacy Policy</button>
            <span className="legal-sep">·</span>
            <button className="legal-link" onClick={() => navigate('/support')}>Support</button>
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
