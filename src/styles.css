import { useEffect, useMemo, useState } from 'react';

const initialContacts = [
  { id: 'c1', name: 'Alicia', phone: '+1 415 203 7462', status: 'Online', avatar: 'A' },
  { id: 'c2', name: 'Nora', phone: '+44 20 7946 0958', status: 'Offline', avatar: 'N' },
  { id: 'c3', name: 'Milo', phone: '+61 2 5550 1111', status: 'Available', avatar: 'M' },
];

const initialMessages = {
  c1: [
    { id: 'm1', sender: 'them', text: 'Hey! Your offline draft is ready.', time: Date.now() - 60000 },
    { id: 'm2', sender: 'me', text: 'Perfect. I will review it now.', time: Date.now() - 30000 },
  ],
  c2: [
    { id: 'm3', sender: 'them', text: 'Can you send the final notes?', time: Date.now() - 3600000 },
  ],
  c3: [
    { id: 'm4', sender: 'them', text: 'I have uploaded the package details.', time: Date.now() - 900000 },
  ],
};

const storageKey = 'lumachat-web-state';

function formatTime(ts) {
  return new Date(ts).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

function createId(prefix) {
  return `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [generatedOtp, setGeneratedOtp] = useState('');
  const [contacts, setContacts] = useState(initialContacts);
  const [selectedContactId, setSelectedContactId] = useState('c1');
  const [messages, setMessages] = useState(initialMessages);
  const [draft, setDraft] = useState('');
  const [newName, setNewName] = useState('');
  const [newPhone, setNewPhone] = useState('');

  useEffect(() => {
    try {
      const saved = localStorage.getItem(storageKey);
      if (!saved) return;
      const parsed = JSON.parse(saved);
      if (parsed.phone) setPhone(parsed.phone);
      if (parsed.loggedIn) setLoggedIn(parsed.loggedIn);
      if (parsed.contacts?.length) setContacts(parsed.contacts);
      if (parsed.selectedContactId) setSelectedContactId(parsed.selectedContactId);
      if (parsed.messages) setMessages(parsed.messages);
    } catch (error) {
      console.log('Load failed', error);
    }
  }, []);

  useEffect(() => {
    const payload = { loggedIn, phone, contacts, selectedContactId, messages };
    localStorage.setItem(storageKey, JSON.stringify(payload));
  }, [loggedIn, phone, contacts, selectedContactId, messages]);

  const selectedContact = useMemo(
    () => contacts.find((c) => c.id === selectedContactId) || contacts[0],
    [contacts, selectedContactId]
  );

  const selectedMessages = messages[selectedContact?.id] || [];

  const requestOtp = () => {
    const digits = phone.replace(/\D/g, '');
    if (!digits) return alert('Enter a valid phone number');
    const code = String(Math.floor(100000 + Math.random() * 900000));
    setGeneratedOtp(code);
    alert(`Demo OTP: ${code}`);
  };

  const verifyLogin = () => {
    const digits = phone.replace(/\D/g, '');
    if (!digits) return alert('Enter a valid phone number');
    if (!generatedOtp || otp !== generatedOtp) return alert('Incorrect OTP');
    setLoggedIn(true);
  };

  const addContact = () => {
    const cleanName = newName.trim();
    const cleanPhone = newPhone.replace(/\D/g, '');
    if (!cleanName || !cleanPhone) return alert('Add name and phone');

    const contact = {
      id: createId('contact'),
      name: cleanName,
      phone: `+${cleanPhone}`,
      status: 'Available',
      avatar: cleanName.charAt(0).toUpperCase(),
    };

    setContacts((prev) => [contact, ...prev]);
    setMessages((prev) => ({
      ...prev,
      [contact.id]: [{ id: createId('welcome'), sender: 'them', text: 'New contact added securely.', time: Date.now() }],
    }));
    setSelectedContactId(contact.id);
    setNewName('');
    setNewPhone('');
  };

  const sendMessage = () => {
    if (!selectedContact || !draft.trim()) return;
    const newMsg = {
      id: createId('msg'),
      sender: 'me',
      text: draft.trim(),
      time: Date.now(),
    };

    setMessages((prev) => ({
      ...prev,
      [selectedContact.id]: [...(prev[selectedContact.id] || []), newMsg],
    }));
    setDraft('');

    setTimeout(() => {
      setMessages((prev) => ({
        ...prev,
        [selectedContact.id]: [
          ...(prev[selectedContact.id] || []),
          {
            id: createId('reply'),
            sender: 'them',
            text: 'Offline message synced successfully.',
            time: Date.now(),
          },
        ],
      }));
    }, 900);
  };

  const logout = () => {
    setLoggedIn(false);
    setOtp('');
    setGeneratedOtp('');
    setPhone('');
  };

  if (!loggedIn) {
    return (
      <div className="auth-shell">
        <div className="auth-card">
          <div className="brand-row">
            <span className="brand-badge">L</span>
            <span className="brand-name">LumaChat</span>
          </div>

          <h1>Premium secure login</h1>
          <p>Offline-first messaging with phone verification.</p>

          <label>Phone number</label>
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+1 415 123 4567"
          />

          <button className="secondary" onClick={requestOtp}>Request OTP</button>

          <label>OTP</label>
          <input
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            placeholder="Enter 6-digit code"
          />

          {generatedOtp && (
            <div className="demo-box">
              <span>Demo OTP</span>
              <strong>{generatedOtp}</strong>
            </div>
          )}

          <button className="primary" onClick={verifyLogin}>Verify & Continue</button>
        </div>
      </div>
    );
  }

  return (
    <div className="app-shell">
      <header className="topbar">
        <div>
          <small>Connected account</small>
          <h3>{phone || '+1 000 000 0000'}</h3>
        </div>
        <button className="ghost" onClick={logout}>Logout</button>
      </header>

      <div className="panel contact-panel">
        <div className="panel-head">
          <h2>Contacts</h2>
        </div>

        <div className="contact-form">
          <input value={newName} onChange={(e) => setNewName(e.target.value)} placeholder="Name" />
          <input value={newPhone} onChange={(e) => setNewPhone(e.target.value)} placeholder="Phone" />
          <button onClick={addContact}>Add</button>
        </div>

        <div className="contact-list">
          {contacts.map((contact) => (
            <button
              key={contact.id}
              className={`contact-card ${selectedContactId === contact.id ? 'active' : ''}`}
              onClick={() => setSelectedContactId(contact.id)}
            >
              <div className="avatar">{contact.avatar}</div>
              <div>
                <strong>{contact.name}</strong>
                <span>{contact.status}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="panel chat-panel">
        <div className="chat-header">
          <div className="chat-user">
            <div className="avatar large">{selectedContact?.avatar}</div>
            <div>
              <strong>{selectedContact?.name}</strong>
              <small>{selectedContact?.phone}</small>
            </div>
          </div>
          <span className="online-dot" />
        </div>

        <div className="messages">
          {selectedMessages.map((msg) => (
            <div key={msg.id} className={`message-row ${msg.sender === 'me' ? 'mine' : ''}`}>
              <div className={`bubble ${msg.sender === 'me' ? 'mine' : 'theirs'}`}>
                <span>{msg.text}</span>
                <small>{formatTime(msg.time)}</small>
              </div>
            </div>
          ))}
        </div>

        <div className="composer">
          <input value={draft} onChange={(e) => setDraft(e.target.value)} placeholder="Type a secure message..." />
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
}

export default App;
