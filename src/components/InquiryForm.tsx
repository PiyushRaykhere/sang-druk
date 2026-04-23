import { useState } from "react";
import { Send } from "lucide-react";

const PHONE = "917018922152";

const InquiryForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !message.trim()) return;

    const text = encodeURIComponent(
      `Hello, my name is ${name.trim()}. My phone number is ${phone.trim()}. I would like to inquire about: ${message.trim()}`
    );
    window.open(`https://api.whatsapp.com/send?phone=${PHONE}&text=${text}`, "_blank", "noopener,noreferrer");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-sans text-muted-foreground mb-1">Your Name *</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          maxLength={100}
          placeholder="Enter your full name"
          className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm font-sans text-foreground placeholder:text-muted-foreground/50 outline-none focus:ring-2 focus:ring-spa-green/30 transition-all"
        />
      </div>
      <div>
        <label className="block text-sm font-sans text-muted-foreground mb-1">Phone Number *</label>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          maxLength={15}
          placeholder="Your phone number"
          className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm font-sans text-foreground placeholder:text-muted-foreground/50 outline-none focus:ring-2 focus:ring-spa-green/30 transition-all"
        />
      </div>
      <div>
        <label className="block text-sm font-sans text-muted-foreground mb-1">Your Message *</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          maxLength={500}
          rows={3}
          placeholder="Describe your requirement or health concern"
          className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm font-sans text-foreground placeholder:text-muted-foreground/50 outline-none focus:ring-2 focus:ring-spa-green/30 transition-all resize-none"
        />
      </div>
      <button
        type="submit"
        className="w-full flex items-center justify-center gap-2 bg-spa-green text-primary-foreground font-sans text-sm px-6 py-3 rounded-full hover:bg-spa-green-light transition-colors"
      >
        <Send className="w-4 h-4" /> Send via WhatsApp
      </button>
    </form>
  );
};

export default InquiryForm;
