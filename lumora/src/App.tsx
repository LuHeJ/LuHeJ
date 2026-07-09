import { useState, useCallback } from 'react';
import { Menu, X } from 'lucide-react';

/* ── Video data ─────────────────────────────────────────────── */
const VIDEOS = [
  {
    url: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260702_081127_0992a171-d3c6-4978-8213-0ec5df8b6d63.mp4',
    label: 'Golden Hour',
  },
  {
    url: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260702_092026_dd05b805-ea0f-40b2-8c52-332b88502592.mp4',
    label: 'Still Water',
  },
  {
    url: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260702_081042_df7202bf-bd80-4b2b-bbc6-1f09ba2870e9.mp4',
    label: 'Deep Woods',
  },
  {
    url: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260702_080959_4cac5234-3573-464e-a5b7-76b94b8a7d61.mp4',
    label: 'Quiet Dawn',
  },
] as const;

const NAV_LINKS = ['How It Works', 'Features', 'Pricing', 'Community'];
const STATS = [
  '60+ Deep Sessions',
  '12,000+ Creators',
  '4.8 User Satisfaction',
  'Intentional-First Design',
];

const OVERLAY_PNG =
  'https://soft-zoom-63098134.figma.site/_assets/v11/0b4a435b2df2747593c43d7a1c9b4578f7d8d90c.png';

/* ── App ────────────────────────────────────────────────────── */
export default function App() {
  const [activeVideo, setActiveVideo] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [email, setEmail] = useState('');

  const isDark = activeVideo === 2; // Deep Woods
  const textColor = isDark ? '#182C41' : '#ffffff';

  /* Cooldown-protected video switch */
  const switchVideo = useCallback(
    (index: number) => {
      if (index === activeVideo || isTransitioning) return;
      setIsTransitioning(true);
      setActiveVideo(index);
      setTimeout(() => setIsTransitioning(false), 1000);
    },
    [activeVideo, isTransitioning],
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder — wire to your own signup flow
  };

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      {/* ── Background Videos ──────────────────────────────── */}
      {VIDEOS.map((v, i) => (
        <video
          key={v.url}
          autoPlay
          muted
          loop
          playsInline
          className={`absolute inset-0 w-full h-full object-cover transition-opacity ${
            i === activeVideo ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ transitionDuration: '1000ms', transitionTimingFunction: 'ease-in-out' }}
        >
          <source src={v.url} type="video/mp4" />
        </video>
      ))}

      {/* ── PNG Overlay (z-10) ──────────────────────────────── */}
      <img
        src={OVERLAY_PNG}
        alt=""
        className="absolute inset-0 w-full h-full object-cover z-10 pointer-events-none animate-train-bob"
      />

      {/* ── Content Layer (z-20) ────────────────────────────── */}
      <div className="relative z-20 flex flex-col h-full">
        {/* ── Nav ───────────────────────────────────────────── */}
        <nav className="flex items-center justify-between px-6 sm:px-10 lg:px-14 pt-8">
          {/* Logo */}
          <span className="text-white italic text-xl sm:text-2xl" style={{ fontFamily: "'Instrument Serif', serif" }}>
            Lumora
          </span>

          {/* Desktop nav pill */}
          <div className="hidden md:flex items-center gap-1 liquid-glass rounded-full px-2 py-1.5">
            {NAV_LINKS.map((link) => (
              <button
                key={link}
                className="text-white/90 hover:text-white text-sm px-4 py-1.5 rounded-full transition-colors"
                style={{ fontFamily: 'system-ui, sans-serif' }}
              >
                {link}
              </button>
            ))}
            <button
              className="bg-white text-black text-sm px-5 py-2 rounded-full font-medium ml-2 hover:bg-white/90 transition-colors"
              style={{ fontFamily: 'system-ui, sans-serif' }}
            >
              Get Started
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden liquid-glass rounded-full p-2.5 text-white"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <div className="relative w-5 h-5">
              <Menu
                size={20}
                className={`absolute inset-0 transition-all duration-300 ${
                  mobileMenuOpen ? 'opacity-0 rotate-90 scale-75' : 'opacity-100 rotate-0 scale-100'
                }`}
              />
              <X
                size={20}
                className={`absolute inset-0 transition-all duration-300 ${
                  mobileMenuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-75'
                }`}
              />
            </div>
          </button>
        </nav>

        {/* ── Spacer ────────────────────────────────────────── */}
        <div className="flex-1" />

        {/* ── Hero Content ──────────────────────────────────── */}
        <div
          className={`px-6 sm:px-10 lg:px-14 flex flex-col items-center text-center ${
            isDark ? 'dark' : ''
          }`}
        >
          {/* Badge */}
          <div className="liquid-glass rounded-full inline-flex px-5 py-2 mb-8">
            <span
              className="text-sm tracking-wide hero-content"
              style={{ color: textColor, fontFamily: 'system-ui, sans-serif' }}
            >
              Over 10,000 minds already finding their clarity
            </span>
          </div>

          {/* Heading */}
          <h1
            className="text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.1] max-w-4xl font-normal hero-content tracking-tight"
            style={{ color: textColor }}
          >
            Clarity in an Endlessly{' '}
            <br className="sm:hidden" />
            <span className="hidden sm:inline"><br /></span>
            Noisy Universe
          </h1>

          {/* Subtext */}
          <p
            className="max-w-xl leading-relaxed mt-6 mb-8 text-base sm:text-lg hero-content"
            style={{ color: textColor, fontFamily: 'system-ui, sans-serif', opacity: isDark ? 0.8 : 0.85 }}
          >
            Rise above the chaos of pings, infinite scrolling, and relentless
            demands. Discover how to protect your presence and create with
            intention.
          </p>

          {/* Email input pill */}
          <form
            onSubmit={handleSubmit}
            className="liquid-glass rounded-full flex items-center w-full max-w-[320px] sm:max-w-sm mb-10 p-0.5"
          >
            <input
              type="email"
              placeholder="Your Best Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-transparent border-none outline-none px-5 py-3 text-sm hero-content placeholder:opacity-50"
              style={{
                color: textColor,
                fontFamily: 'system-ui, sans-serif',
              }}
            />
            <button
              type="submit"
              className="rounded-full px-6 py-3 text-sm font-medium transition-opacity hover:opacity-90 shrink-0"
              style={{
                backgroundColor: textColor,
                color: isDark ? '#ffffff' : '#000000',
                fontFamily: 'system-ui, sans-serif',
              }}
            >
              Get Early Access
            </button>
          </form>

          {/* Video Switcher */}
          <div
            className="flex items-center gap-6 sm:gap-8 mb-8"
            style={{ fontFamily: 'system-ui, sans-serif' }}
          >
            {VIDEOS.map((v, i) => (
              <button
                key={v.label}
                onClick={() => switchVideo(i)}
                disabled={isTransitioning}
                className={`video-switch-btn text-sm tracking-wide pb-1 ${
                  i === activeVideo ? 'active' : 'inactive'
                }`}
                style={{ color: textColor }}
              >
                {v.label}
              </button>
            ))}
          </div>
        </div>

        {/* ── Spacer ────────────────────────────────────────── */}
        <div className="flex-1" />

        {/* ── Bottom Stats ──────────────────────────────────── */}
        <div
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-0 px-6 pb-6 text-white/70 text-xs sm:text-sm"
          style={{ fontFamily: 'system-ui, sans-serif' }}
        >
          {STATS.map((stat, i) => (
            <span key={stat} className="flex items-center gap-2">
              {i > 0 && (
                <span className="hidden sm:inline text-white/30 mx-1">|</span>
              )}
              <span>{stat}</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── Mobile Menu Overlay (z-50) ──────────────────────── */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="flex flex-col items-center gap-6 py-16"
            onClick={(e) => e.stopPropagation()}
          >
            {NAV_LINKS.map((link, i) => (
              <button
                key={link}
                className="text-white text-3xl tracking-wide transition-all duration-500"
                style={{
                  fontFamily: 'system-ui, sans-serif',
                  transitionDelay: `${100 + i * 50}ms`,
                  transitionTimingFunction: 'cubic-bezier(0.4,0,0.2,1)',
                  transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(1rem)',
                  opacity: mobileMenuOpen ? 1 : 0,
                }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link}
              </button>
            ))}
            <button
              className="mt-4 bg-white text-black px-8 py-3 rounded-full text-lg font-medium transition-all duration-500"
              style={{
                fontFamily: 'system-ui, sans-serif',
                transitionDelay: '300ms',
                transitionTimingFunction: 'cubic-bezier(0.4,0,0.2,1)',
                transform: mobileMenuOpen ? 'scale(1)' : 'scale(0.95)',
                opacity: mobileMenuOpen ? 1 : 0,
              }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
