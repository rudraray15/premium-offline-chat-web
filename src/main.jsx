* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Inter', sans-serif;
}

:root {
  color-scheme: dark;
  --bg: #030712;
  --bg-soft: #0f172a;
  --panel: rgba(15, 23, 42, 0.72);
  --panel-strong: rgba(15, 23, 42, 0.92);
  --panel-border: rgba(148, 163, 184, 0.18);
  --primary: #8b5cf6;
  --primary-strong: #7c3aed;
  --primary-soft: rgba(139, 92, 246, 0.14);
  --text: #f8fafc;
  --muted: #94a3b8;
  --success: #34d399;
  --warning: #fbbf24;
  --danger: #ef4444;
}

html, body, #root {
  min-height: 100%;
  height: 100%;
}

body {
  margin: 0;
  min-height: 100vh;
  background:
    radial-gradient(circle at top left, rgba(139, 92, 246, 0.18), transparent 28%),
    radial-gradient(circle at bottom right, rgba(52, 211, 153, 0.12), transparent 26%),
    linear-gradient(135deg, #020817, #0b1120 46%, #111827 100%);
  color: var(--text);
}

button, input {
  font: inherit;
}

button {
  cursor: pointer;
  border: none;
}

.auth-shell {
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: 24px;
}

.auth-card {
  width: min(100%, 480px);
  background: rgba(15, 23, 42, 0.8);
  border: 1px solid var(--panel-border);
  border-radius: 32px;
  padding: 32px 28px;
  backdrop-filter: blur(18px);
  box-shadow: 0 25px 80px rgba(2, 6, 23, 0.65);
}

.brand-row {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 22px;
}

.brand-badge {
  width: 32px;
  height: 32px;
  border-radius: 12px;
  background: linear-gradient(135deg, var(--primary), #a78bfa);
  display: grid;
  place-items: center;
  font-weight: 800;
  color: white;
}

.brand-name {
  font-size: 0.82rem;
  font-weight: 800;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #ddd6fe;
}

.eyebrow {
  display: inline-block;
  margin-bottom: 6px;
  font-size: 0.72rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #a5b4fc;
}

.auth-card h1 {
  font-size: clamp(2.2rem, 4vw, 3rem);
  line-height: 1.08;
  margin-bottom: 10px;
}

.auth-card p {
  color: var(--muted);
  line-height: 1.65;
  margin-bottom: 22px;
}

.auth-card label {
  display: block;
  margin: 16px 0 8px;
  color: #dbeafe;
  font-weight: 600;
}

.auth-card input,
.contact-form input,
.composer input {
  width: 100%;
  padding: 14px 16px;
  border-radius: 14px;
  border: 1px solid rgba(148, 163, 184, 0.18);
  background: rgba(15, 23, 42, 0.72);
  color: var(--text);
  outline: none;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.auth-card input:focus,
.contact-form input:focus,
.composer input:focus {
  border-color: rgba(139, 92, 246, 0.8);
  box-shadow: 0 0 0 4px rgba(139, 92, 246, 0.14);
}

button.primary,
button.secondary,
button.ghost,
.contact-form button,
.composer button {
  width: 100%;
  border-radius: 14px;
  padding: 14px 16px;
  font-weight: 700;
  transition: transform 0.15s ease, opacity 0.15s ease;
}

button:hover {
  transform: translateY(-1px);
}

button.primary,
.contact-form button,
.composer button {
  background: linear-gradient(135deg, var(--primary), var(--primary-strong));
  color: white;
  box-shadow: 0 16px 32px rgba(124, 58, 237, 0.35);
}

button.secondary {
  background: rgba(148, 163, 184, 0.08);
  border: 1px solid rgba(148, 163, 184, 0.2);
  color: white;
  margin-top: 10px;
}

.demo-box {
  margin: 14px 0 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 16px;
  border-radius: 14px;
  background: var(--primary-soft);
  border: 1px solid rgba(167, 139, 250, 0.28);
}

.demo-box span {
  text-transform: uppercase;
  color: #ddd6fe;
  letter-spacing: 0.08em;
  font-size: 0.7rem;
}

.demo-box strong {
  letter-spacing: 0.24em;
  font-size: 1.7rem;
}

.app-shell {
  max-width: 1200px;
  margin: 0 auto;
  padding: 28px 18px 30px;
}

.topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  gap: 16px;
}

.topbar small {
  display: block;
  margin-bottom: 6px;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: var(--muted);
}

.topbar h3 {
  font-size: clamp(1.4rem, 2vw, 2rem);
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.status-pill {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 82px;
  padding: 8px 12px;
  border-radius: 999px;
  background: rgba(52, 211, 153, 0.12);
  border: 1px solid rgba(52, 211, 153, 0.4);
  color: #a7f3d0;
  font-weight: 700;
  font-size: 0.8rem;
}

.ghost {
  width: auto;
  padding: 10px 18px;
  background: rgba(148, 163, 184, 0.06);
  border: 1px solid rgba(148, 163, 184, 0.18);
  color: white;
}

.panel {
  background: rgba(15, 23, 42, 0.76);
  border: 1px solid var(--panel-border);
  border-radius: 24px;
  padding: 18px;
  backdrop-filter: blur(18px);
  box-shadow: 0 18px 50px rgba(15, 23, 42, 0.4);
}

.contact-panel {
  margin-bottom: 18px;
}

.panel-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 14px;
}

.panel-head h2 {
  font-size: 1.25rem;
}

.mini-badge {
  min-width: 30px;
  height: 30px;
  border-radius: 999px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: rgba(139, 92, 246, 0.14);
  color: #ddd6fe;
  border: 1px solid rgba(167, 139, 250, 0.3);
  font-weight: 700;
}

.contact-form {
  display: grid;
  grid-template-columns: 1fr 1fr auto;
  gap: 12px;
  margin-bottom: 18px;
}

.contact-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 12px;
}

.contact-card {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 14px;
  border-radius: 18px;
  background: rgba(148, 163, 184, 0.06);
  border: 1px solid transparent;
  color: var(--text);
  text-align: left;
}

.contact-card.active {
  background: rgba(139, 92, 246, 0.12);
  border-color: rgba(139, 92, 246, 0.7);
}

.contact-card strong {
  display: block;
  margin-bottom: 2px;
}

.contact-card span {
  color: var(--muted);
  font-size: 0.72rem;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 12px;
  background: linear-gradient(135deg, var(--primary), #a78bfa);
  display: grid;
  place-items: center;
  font-weight: 800;
}

.avatar.large {
  width: 42px;
  height: 42px;
}

.chat-panel {
  min-height: 560px;
  display: flex;
  flex-direction: column;
}

.chat-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding-bottom: 14px;
  border-bottom: 1px solid rgba(148, 163, 184, 0.12);
}

.chat-user {
  display: flex;
  align-items: center;
  gap: 12px;
}

.chat-user strong {
  display: block;
  margin-bottom: 3px;
}

.chat-user small {
  color: var(--muted);
  font-size: 0.72rem;
}

.chat-status {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #d1fae5;
  font-size: 0.8rem;
  font-weight: 600;
}

.online-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--success);
  box-shadow: 0 0 0 6px rgba(52, 211, 153, 0.14);
}

.messages {
  flex: 1;
  padding: 18px 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.message-row {
  display: flex;
}

.message-row.mine {
  justify-content: flex-end;
}

.bubble {
  max-width: 74%;
  padding: 12px 14px;
  border-radius: 18px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.bubble.theirs {
  background: rgba(148, 163, 184, 0.08);
  border-bottom-left-radius: 5px;
}

.bubble.mine {
  background: linear-gradient(135deg, var(--primary), var(--primary-strong));
  border-bottom-right-radius: 5px;
}

.bubble span {
  line-height: 1.55;
}

.bubble small {
  opacity: 0.8;
  font-size: 0.68rem;
}

.composer {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 10px;
  align-items: center;
  padding-top: 12px;
  border-top: 1px solid rgba(148, 163, 184, 0.12);
}

.loading-shell {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  background: radial-gradient(circle at center, rgba(139, 92, 246, 0.12), transparent 30%), linear-gradient(135deg, #020817, #0f172a);
  color: var(--text);
}

.loading-ring {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  border: 3px solid rgba(255, 255, 255, 0.12);
  border-top-color: var(--primary);
  animation: spin 0.9s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

@media (max-width: 720px) {
  .contact-form,
  .composer {
    grid-template-columns: 1fr;
  }

  .topbar {
    flex-direction: column;
    align-items: flex-start;
  }

  .header-actions {
    width: 100%;
    justify-content: space-between;
  }
}



