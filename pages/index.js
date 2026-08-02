import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  function validate() {
    const errs = {};
    if (!formData.name.trim()) errs.name = "Name is required";
    if (!formData.email.trim()) errs.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errs.email = "Email is invalid";
    if (!formData.message.trim()) errs.message = "Message is required";
    return errs;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) {
      setSubmitted(true);
    }
  }

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: undefined });
    }
  }

  return (
    <div style={{ maxWidth: 600, margin: "0 auto", padding: 40, fontFamily: "sans-serif" }}>
      <h1>Welcome to Next.js Simple</h1>
      <p>This is a simple Next.js test application.</p>

      <h2>Contact Us</h2>
      {submitted ? (
        <div data-testid="success-message" style={{ padding: 20, background: "#d4edda", borderRadius: 8, marginTop: 16 }}>
          <h3>Thank you, {formData.name}!</h3>
          <p>Your message has been sent successfully.</p>
          <button onClick={() => { setSubmitted(false); setFormData({ name: "", email: "", message: "" }); }}>
            Send another message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} data-testid="contact-form" style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 16 }}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              style={{ display: "block", width: "100%", padding: 8, marginTop: 4, border: errors.name ? "2px solid red" : "1px solid #ccc", borderRadius: 4 }}
            />
            {errors.name && <span style={{ color: "red", fontSize: 14 }}>{errors.name}</span>}
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              style={{ display: "block", width: "100%", padding: 8, marginTop: 4, border: errors.email ? "2px solid red" : "1px solid #ccc", borderRadius: 4 }}
            />
            {errors.email && <span style={{ color: "red", fontSize: 14 }}>{errors.email}</span>}
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Write your message here..."
              rows={4}
              value={formData.message}
              onChange={handleChange}
              style={{ display: "block", width: "100%", padding: 8, marginTop: 4, border: errors.message ? "2px solid red" : "1px solid #ccc", borderRadius: 4 }}
            />
            {errors.message && <span style={{ color: "red", fontSize: 14 }}>{errors.message}</span>}
          </div>
          <button type="submit" style={{ padding: "10px 20px", background: "#0070f3", color: "white", border: "none", borderRadius: 4, cursor: "pointer", fontSize: 16 }}>
            Submit
          </button>
        </form>
      )}
    </div>
  );
}
