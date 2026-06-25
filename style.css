/* ============================================
   RESET & BASE
   ============================================ */
*, *::before, *::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --white: #FFFFFF;
  --soft-gray: #F8FAFC;
  --deep-navy: #0F172A;
  --accent-blue: #0EA5E9;
  --accent-purple: #6366F1;
  --text-primary: #0F172A;
  --text-secondary: #64748B;
  --text-light: #94A3B8;
  --border: rgba(15, 23, 42, 0.08);
  --shadow-sm: 0 1px 2px rgba(15, 23, 42, 0.04);
  --shadow-md: 0 4px 12px rgba(15, 23, 42, 0.06);
  --shadow-lg: 0 20px 40px rgba(15, 23, 42, 0.08);
  --shadow-xl: 0 30px 60px rgba(15, 23, 42, 0.12);
  --radius-sm: 8px;
  --radius-md: 16px;
  --radius-lg: 24px;
  --radius-xl: 32px;
  --transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

html {
  scroll-behavior: smooth;
  font-size: 16px;
}

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  color: var(--text-primary);
  background: var(--white);
  line-height: 1.6;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;
}

img {
  max-width: 100%;
  height: auto;
  display: block;
}

a {
  text-decoration: none;
  color: inherit;
  transition: var(--transition);
}

button {
  font-family: inherit;
  cursor: pointer;
  border: none;
  background: none;
}

ul { list-style: none; }

::selection {
  background: var(--accent-blue);
  color: var(--white);
}

/* ============================================
   TYPOGRAPHY
   ============================================ */
h1, h2, h3, h4, h5, h6 {
  font-family: 'Playfair Display', serif;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.02em;
}

.section-tag {
  display: inline-block;
  font-family: 'Inter', sans-serif;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: var(--accent-blue);
  margin-bottom: 16px;
  padding: 8px 16px;
  background: rgba(14, 165, 233, 0.08);
  border-radius: 100px;
}

.section-title {
  font-size: clamp(2.5rem, 5vw, 4rem);
  color: var(--deep-navy);
  margin-bottom: 20px;
}

.section-subtitle {
  font-size: 1.125rem;
  color: var(--text-secondary);
  max-width: 640px;
  line-height: 1.7;
}

.section-header {
  text-align: center;
  margin-bottom: 80px;
}

.section-header .section-subtitle {
  margin: 0 auto;
}

.gradient-text {
  background: linear-gradient(135deg, var(--accent-blue) 0%, var(--accent-purple) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* ============================================
   BUTTONS
   ============================================ */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 16px 32px;
  border-radius: 100px;
  font-family: 'Inter', sans-serif;
  font-size: 0.95rem;
  font-weight: 600;
  transition: var(--transition);
  cursor: pointer;
  border: none;
  white-space: nowrap;
}

.btn svg {
  width: 18px;
  height: 18px;
  transition: transform 0.3s ease;
}

.btn-primary {
  background: var(--deep-navy);
  color: var(--white);
  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.2);
}

.btn-primary:hover {
  background: var(--accent-blue);
  transform: translateY(-2px);
  box-shadow: 0 15px 40px rgba(14, 165, 233, 0.3);
}

.btn-primary:hover svg {
  transform: translateX(4px);
}

.btn-ghost {
  background: rgba(255, 255, 255, 0.1);
  color: var(--white);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.btn-ghost:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
}

.btn-full {
  width: 100%;
}

/* ============================================
   GLASS EFFECT
   ============================================ */
.glass {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.3);
}

/* ============================================
   NAVBAR
   ============================================ */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 20px 0;
  transition: var(--transition);
}

.navbar.scrolled {
  padding: 12px 0;
  background: rgba(255, 255, 255, 0.95);
  box-shadow: var(--shadow-md);
}

.nav-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
}

.logo {
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: 700;
  font-size: 1.25rem;
  color: var(--deep-navy);
}

.logo-icon {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: linear-gradient(135deg, var(--accent-blue) 0%, var(--accent-purple) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white);
  transition: var(--transition);
  animation: logoFloat 3s ease-in-out infinite;
}

@keyframes logoFloat {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-4px) rotate(-3deg); }
}

.logo-icon svg {
  width: 22px;
  height: 22px;
}

.logo-text-wrap {
  display: flex;
  flex-direction: column;
  line-height: 1;
}

.logo-text {
  font-family: 'Playfair Display', serif;
  font-size: 1.25rem;
  font-weight: 700;
}

.logo-sub {
  font-size: 0.7rem;
  color: var(--text-secondary);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-top: 2px;
}

.logo:hover .logo-icon {
  transform: rotate(-8deg) scale(1.05);
}

.nav-menu {
  display: flex;
  gap: 40px;
}

.nav-menu a {
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--text-secondary);
  position: relative;
  padding: 4px 0;
}

.nav-menu a::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--accent-blue);
  transition: width 0.3s ease;
}

.nav-menu a:hover {
  color: var(--deep-navy);
}

.nav-menu a:hover::after {
  width: 100%;
}

.nav-cta {
  padding: 10px 24px;
  background: var(--deep-navy);
  color: var(--white);
  border-radius: 100px;
  font-size: 0.9rem;
  font-weight: 600;
  transition: var(--transition);
}

.nav-cta:hover {
  background: var(--accent-blue);
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(14, 165, 233, 0.3);
}

.menu-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  padding: 8px;
}

.menu-toggle span {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--deep-navy);
  transition: var(--transition);
  border-radius: 2px;
}

.menu-toggle.active span:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}

.menu-toggle.active span:nth-child(2) {
  opacity: 0;
}

.menu-toggle.active span:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

/* ============================================
   HERO SECTION
   ============================================ */
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: var(--deep-navy);
}

.hero-video-wrap {
  position: absolute;
  inset: 0;
  z-index: 1;
}

.hero-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(15, 23, 42, 0.85) 0%, rgba(15, 23, 42, 0.6) 100%);
}

.hero-blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.4;
  z-index: 2;
  pointer-events: none;
}

.hero-blob-1 {
  width: 500px;
  height: 500px;
  background: var(--accent-blue);
  top: -100px;
  right: -100px;
  animation: float1 8s ease-in-out infinite;
}

.hero-blob-2 {
  width: 400px;
  height: 400px;
  background: var(--accent-purple);
  bottom: -100px;
  left: -100px;
  animation: float2 10s ease-in-out infinite;
}

.hero-blob-3 {
  width: 300px;
  height: 300px;
  background: #EC4899;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: float3 12s ease-in-out infinite;
  opacity: 0.2;
}

@keyframes float1 {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(30px, -30px); }
}

@keyframes float2 {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(-30px, 30px); }
}

@keyframes float3 {
  0%, 100% { transform: translate(-50%, -50%) scale(1); }
  50% { transform: translate(-50%, -50%) scale(1.2); }
}

.hero-content {
  position: relative;
  z-index: 3;
  text-align: center;
  color: var(--white);
  max-width: 1000px;
  padding: 120px 24px 80px;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 10px 20px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 100px;
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 32px;
  animation: fadeInDown 1s ease-out;
}

@keyframes fadeInDown {
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
}

.badge-dot {
  width: 8px;
  height: 8px;
  background: #10B981;
  border-radius: 50%;
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.6; transform: scale(1.2); }
}

.hero-title {
  font-size: clamp(3rem, 8vw, 6rem);
  line-height: 1.05;
  margin-bottom: 24px;
  letter-spacing: -0.03em;
  animation: fadeInUp 1s ease-out 0.2s backwards;
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

.hero-subtitle {
  font-size: clamp(1rem, 2vw, 1.25rem);
  color: rgba(255, 255, 255, 0.8);
  max-width: 640px;
  margin: 0 auto 48px;
  line-height: 1.7;
  animation: fadeInUp 1s ease-out 0.4s backwards;
}

.hero-cta {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
  animation: fadeInUp 1s ease-out 0.6s backwards;
}

.hero-stats {
  margin-top: 80px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  animation: fadeInUp 1s ease-out 0.8s backwards;
}

.hero-stat {
  text-align: center;
}

.hero-stat .stat-number {
  font-family: 'Playfair Display', serif;
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  background: linear-gradient(135deg, var(--white) 0%, var(--accent-blue) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 4px;
}

.hero-stat .stat-label {
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.6);
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.scroll-indicator {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.75rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
}

.scroll-line {
  width: 1px;
  height: 60px;
  background: linear-gradient(to bottom, transparent, rgba(255, 255, 255, 0.6));
  animation: scrollDown 2s ease-in-out infinite;
}

@keyframes scrollDown {
  0% { transform: scaleY(0); transform-origin: top; }
  50% { transform: scaleY(1); transform-origin: top; }
  50.01% { transform-origin: bottom; }
  100% { transform: scaleY(0); transform-origin: bottom; }
}

/* ============================================
   SERVICES
   ============================================ */
.services {
  padding: 120px 0;
  background: var(--soft-gray);
  position: relative;
  overflow: hidden;
}

.services::before {
  content: '';
  position: absolute;
  top: -200px;
  right: -200px;
  width: 500px;
  height: 500px;
  background: var(--accent-blue);
  border-radius: 50%;
  opacity: 0.05;
  filter: blur(80px);
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
}

.service-card {
  background: var(--white);
  padding: 48px 36px;
  border-radius: var(--radius-lg);
  border: 1px solid var(--border);
  transition: var(--transition);
  position: relative;
  overflow: hidden;
}

.service-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--accent-blue), var(--accent-purple));
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.4s ease;
}

.service-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-xl);
  border-color: transparent;
}

.service-card:hover::before {
  transform: scaleX(1);
}

.service-icon {
  width: 64px;
  height: 64px;
  border-radius: 16px;
  background: linear-gradient(135deg, rgba(14, 165, 233, 0.1), rgba(99, 102, 241, 0.1));
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent-blue);
  margin-bottom: 24px;
  transition: var(--transition);
}

.service-icon svg {
  width: 32px;
  height: 32px;
}

.service-card:hover .service-icon {
  transform: scale(1.1) rotate(-5deg);
  background: linear-gradient(135deg, var(--accent-blue), var(--accent-purple));
  color: var(--white);
}

.service-card h3 {
  font-size: 1.5rem;
  margin-bottom: 12px;
  color: var(--deep-navy);
}

.service-card p {
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 20px;
}

.service-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--accent-blue);
  font-weight: 600;
  font-size: 0.9rem;
}

.service-link::after {
  content: '→';
  transition: transform 0.3s ease;
}

.service-card:hover .service-link::after {
  transform: translateX(4px);
}

/* ============================================
   PORTFOLIO
   ============================================ */
.portfolio {
  padding: 120px 0;
  background: var(--white);
}

.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 280px;
  gap: 24px;
}

.portfolio-item {
  position: relative;
  border-radius: var(--radius-lg);
  overflow: hidden;
  cursor: pointer;
  box-shadow: var(--shadow-md);
}

.portfolio-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.portfolio-large {
  grid-column: span 2;
  grid-row: span 2;
}

.portfolio-wide {
  grid-column: span 2;
}

.portfolio-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(15, 23, 42, 0.95) 0%, rgba(15, 23, 42, 0.4) 50%, transparent 100%);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 32px;
  color: var(--white);
  opacity: 0;
  transition: opacity 0.4s ease;
}

.portfolio-item:hover .portfolio-overlay {
  opacity: 1;
}

.portfolio-item:hover img {
  transform: scale(1.1);
}

.portfolio-category {
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: var(--accent-blue);
  margin-bottom: 8px;
}

.portfolio-overlay h3 {
  font-size: 1.5rem;
  margin-bottom: 8px;
}

.portfolio-overlay p {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.8);
}

/* ============================================
   WHY CHOOSE US
   ============================================ */
.why-us {
  padding: 120px 0;
  background: var(--soft-gray);
}

.why-us-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}

.feature-list {
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.feature-item {
  display: flex;
  gap: 20px;
  align-items: flex-start;
}

.feature-icon {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: rgba(14, 165, 233, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent-blue);
  flex-shrink: 0;
}

.feature-icon svg {
  width: 22px;
  height: 22px;
}

.feature-item h4 {
  font-family: 'Inter', sans-serif;
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 4px;
  color: var(--deep-navy);
}

.feature-item p {
  color: var(--text-secondary);
  font-size: 0.95rem;
  line-height: 1.6;
}

.why-us-visual {
  position: relative;
}

.visual-card {
  position: relative;
  border-radius: var(--radius-xl);
  overflow: hidden;
  box-shadow: var(--shadow-xl);
}

.visual-card img {
  width: 100%;
  height: 500px;
  object-fit: cover;
  transition: transform 0.6s ease;
}

.visual-card:hover img {
  transform: scale(1.05);
}

.visual-badge {
  position: absolute;
  bottom: 24px;
  left: 24px;
  right: 24px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  padding: 20px;
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  gap: 16px;
  box-shadow: var(--shadow-lg);
}

.badge-icon {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: linear-gradient(135deg, #FBBF24, #F59E0B);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white);
}

.badge-icon svg {
  width: 24px;
  height: 24px;
}

.badge-number {
  font-family: 'Playfair Display', serif;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--deep-navy);
  line-height: 1;
}

.badge-text {
  font-size: 0.85rem;
  color: var(--text-secondary);
}

/* ============================================
   PROCESS TIMELINE
   ============================================ */
.process {
  padding: 120px 0;
  background: var(--white);
}

.timeline {
  max-width: 800px;
  margin: 0 auto;
  position: relative;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 40px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(to bottom, var(--accent-blue), var(--accent-purple));
}

.timeline-item {
  position: relative;
  padding-left: 100px;
  padding-bottom: 60px;
}

.timeline-item:last-child {
  padding-bottom: 0;
}

.timeline-marker {
  position: absolute;
  left: 0;
  top: 0;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: var(--white);
  border: 2px solid var(--accent-blue);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Playfair Display', serif;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--accent-blue);
  box-shadow: 0 0 0 8px rgba(14, 165, 233, 0.1);
  transition: var(--transition);
}

.timeline-item:hover .timeline-marker {
  background: var(--accent-blue);
  color: var(--white);
  transform: scale(1.1);
}

.timeline-content {
  background: var(--soft-gray);
  padding: 32px;
  border-radius: var(--radius-md);
  transition: var(--transition);
}

.timeline-item:hover .timeline-content {
  background: var(--white);
  box-shadow: var(--shadow-lg);
  transform: translateX(8px);
}

.timeline-content h3 {
  font-size: 1.5rem;
  margin-bottom: 12px;
  color: var(--deep-navy);
}

.timeline-content p {
  color: var(--text-secondary);
  line-height: 1.7;
}

/* ============================================
   TESTIMONIALS
   ============================================ */
.testimonials {
  padding: 120px 0;
  background: var(--deep-navy);
  color: var(--white);
  position: relative;
  overflow: hidden;
}

.testimonials::before {
  content: '';
  position: absolute;
  top: -200px;
  right: -200px;
  width: 500px;
  height: 500px;
  background: var(--accent-blue);
  border-radius: 50%;
  opacity: 0.1;
  filter: blur(80px);
}

.testimonials::after {
  content: '';
  position: absolute;
  bottom: -200px;
  left: -200px;
  width: 500px;
  height: 500px;
  background: var(--accent-purple);
  border-radius: 50%;
  opacity: 0.1;
  filter: blur(80px);
}

.testimonials .section-title {
  color: var(--white);
}

.testimonials .section-subtitle {
  color: rgba(255, 255, 255, 0.7);
}

.testimonial-slider {
  position: relative;
  max-width: 900px;
  margin: 0 auto;
  overflow: hidden;
}

.testimonial-track {
  display: flex;
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.testimonial-card {
  min-width: 100%;
  padding: 48px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-xl);
}

.testimonial-rating {
  display: flex;
  gap: 4px;
  color: #FBBF24;
  margin-bottom: 24px;
}

.testimonial-rating svg {
  width: 20px;
  height: 20px;
}

.testimonial-text {
  font-size: 1.25rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 32px;
  font-style: italic;
}

.testimonial-author {
  display: flex;
  align-items: center;
  gap: 16px;
}

.author-avatar {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--accent-blue), var(--accent-purple));
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  color: var(--white);
  font-size: 1.125rem;
}

.author-name {
  font-weight: 600;
  font-size: 1rem;
  margin-bottom: 4px;
}

.author-role {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.6);
}

.slider-controls {
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-top: 40px;
}

.slider-btn {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  color: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: var(--transition);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.slider-btn:hover {
  background: var(--accent-blue);
  transform: scale(1.1);
}

.slider-btn svg {
  width: 20px;
  height: 20px;
}

/* ============================================
   FAQ
   ============================================ */
.faq {
  padding: 120px 0;
  background: var(--white);
}

.faq-grid {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 80px;
  align-items: start;
}

.faq-items {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.faq-item {
  background: var(--soft-gray);
  border-radius: var(--radius-md);
  overflow: hidden;
  transition: var(--transition);
}

.faq-item.active {
  background: var(--white);
  box-shadow: var(--shadow-lg);
}

.faq-question {
  width: 100%;
  padding: 24px 28px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--deep-navy);
  transition: var(--transition);
}

.faq-question svg {
  width: 20px;
  height: 20px;
  transition: transform 0.3s ease;
  flex-shrink: 0;
  margin-left: 16px;
}

.faq-item.active .faq-question svg {
  transform: rotate(180deg);
}

.faq-answer {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.4s ease;
}

.faq-answer p {
  padding: 0 28px 24px;
  color: var(--text-secondary);
  line-height: 1.7;
}

/* ============================================
   CONTACT
   ============================================ */
.contact {
  padding: 120px 0;
  background: var(--soft-gray);
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 80px;
  margin-bottom: 80px;
}

.contact-details {
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.contact-item {
  display: flex;
  gap: 20px;
  align-items: flex-start;
}

.contact-icon {
  width: 56px;
  height: 56px;
  border-radius: 16px;
  background: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent-blue);
  flex-shrink: 0;
  box-shadow: var(--shadow-sm);
  transition: var(--transition);
}

.contact-icon svg {
  width: 24px;
  height: 24px;
}

.contact-item:hover .contact-icon {
  background: var(--accent-blue);
  color: var(--white);
  transform: translateY(-4px);
}

.contact-label {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: var(--text-light);
  margin-bottom: 4px;
}

.contact-value {
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--deep-navy);
  line-height: 1.5;
}

a.contact-value:hover {
  color: var(--accent-blue);
}

.contact-form-wrap {
  background: var(--white);
  padding: 48px;
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-lg);
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form-group label {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--deep-navy);
}

.form-group input,
.form-group select,
.form-group textarea {
  padding: 14px 18px;
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  font-family: inherit;
  font-size: 0.95rem;
  color: var(--text-primary);
  background: var(--soft-gray);
  transition: var(--transition);
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--accent-blue);
  background: var(--white);
  box-shadow: 0 0 0 4px rgba(14, 165, 233, 0.1);
}

.form-group textarea {
  resize: vertical;
  min-height: 120px;
}

.map-container {
  border-radius: var(--radius-xl);
  overflow: hidden;
  box-shadow: var(--shadow-lg);
  height: 400px;
}

.map-container iframe {
  width: 100%;
  height: 100%;
}

/* ============================================
   FOOTER
   ============================================ */
.footer {
  background: var(--deep-navy);
  color: rgba(255, 255, 255, 0.7);
  padding: 80px 0 32px;
}

.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 60px;
  margin-bottom: 60px;
}

.footer-brand p {
  margin-top: 20px;
  line-height: 1.7;
  font-size: 0.95rem;
}

.footer .logo {
  color: var(--white);
}

.social-links {
  display: flex;
  gap: 12px;
  margin-top: 24px;
}

.social-links a {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.7);
  transition: var(--transition);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.social-links a:hover {
  background: var(--accent-blue);
  color: var(--white);
  transform: translateY(-4px);
}

.social-links svg {
  width: 18px;
  height: 18px;
}

.footer-links h4 {
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  color: var(--white);
  margin-bottom: 20px;
}

.footer-links ul {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.footer-links a {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.6);
  transition: var(--transition);
}

.footer-links a:hover {
  color: var(--accent-blue);
  padding-left: 4px;
}

.footer-bottom {
  padding-top: 32px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: space-between;
  font-size: 0.85rem;
}

/* ============================================
   WHATSAPP BUTTON
   ============================================ */
.whatsapp-btn {
  position: fixed;
  bottom: 32px;
  right: 32px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: #25D366;
  color: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 30px rgba(37, 211, 102, 0.4);
  z-index: 999;
  transition: var(--transition);
}

.whatsapp-btn:hover {
  transform: scale(1.1);
  box-shadow: 0 15px 40px rgba(37, 211, 102, 0.5);
}

.whatsapp-btn svg {
  width: 32px;
  height: 32px;
}

.whatsapp-pulse {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: #25D366;
  animation: whatsappPulse 2s ease-out infinite;
  z-index: -1;
}

@keyframes whatsappPulse {
  0% { transform: scale(1); opacity: 0.7; }
  100% { transform: scale(1.8); opacity: 0; }
}

/* ============================================
   ANIMATIONS
   ============================================ */
.reveal {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}

.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}

/* ============================================
   RESPONSIVE
   ============================================ */
@media (max-width: 1024px) {
  .services-grid { grid-template-columns: repeat(2, 1fr); }
  .portfolio-grid { grid-template-columns: repeat(2, 1fr); grid-auto-rows: 240px; }
  .portfolio-large { grid-column: span 2; grid-row: span 1; }
  .portfolio-wide { grid-column: span 2; }
  .footer-grid { grid-template-columns: 1fr 1fr; gap: 40px; }
}

@media (max-width: 768px) {
  .nav-menu, .nav-cta { display: none; }
  .menu-toggle { display: flex; }
  
  .nav-menu.active {
    display: flex;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    flex-direction: column;
    background: var(--white);
    padding: 24px;
    gap: 16px;
    box-shadow: var(--shadow-lg);
  }
  
  .hero-content { padding: 100px 24px 60px; }
  .hero-cta { flex-direction: column; width: 100%; }
  .hero-cta .btn { width: 100%; }
  .hero-stats { grid-template-columns: 1fr; gap: 24px; margin-top: 48px; }
  
  .services-grid,
  .why-us-grid,
  .faq-grid,
  .contact-grid { grid-template-columns: 1fr; gap: 48px; }
  
  .portfolio-grid { grid-template-columns: 1fr; grid-auto-rows: 240px; }
  .portfolio-large, .portfolio-wide { grid-column: span 1; }
  
  .timeline::before { left: 30px; }
  .timeline-marker { width: 60px; height: 60px; font-size: 1.125rem; }
  .timeline-item { padding-left: 80px; }
  
  .form-row { grid-template-columns: 1fr; }
  
  .footer-grid { grid-template-columns: 1fr; gap: 40px; }
  .footer-bottom { flex-direction: column; gap: 8px; text-align: center; }
  
  .testimonial-card { padding: 32px 24px; }
  .testimonial-text { font-size: 1.05rem; }
  
  .contact-form-wrap { padding: 32px 24px; }
  
  .whatsapp-btn { width: 54px; height: 54px; bottom: 24px; right: 24px; }
  .whatsapp-btn svg { width: 28px; height: 28px; }
  
  .section-header { margin-bottom: 56px; }
  .services, .why-us, .portfolio, .process, .testimonials, .faq, .contact { padding: 80px 0; }
}

@media (max-width: 480px) {
  .hero-title { font-size: 2.5rem; }
  .section-title { font-size: 2rem; }
}
