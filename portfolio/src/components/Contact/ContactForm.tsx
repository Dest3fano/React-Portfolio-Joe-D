import { useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name field */}
      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-semibold uppercase tracking-wider text-[#8ea2c6]">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full rounded-lg border border-[rgba(255,255,255,0.1)] bg-gradient-to-br from-[#050b16]/80 to-[#0b182c]/60 px-4 py-3 text-[#edf6ff] backdrop-blur-sm transition-all duration-300 placeholder:text-[#8ea2c6]/50 focus:border-[#33f3ff]/50 focus:outline-none focus:ring-2 focus:ring-[#33f3ff]/20"
          placeholder="Your name"
        />
      </div>

      {/* Email field */}
      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-semibold uppercase tracking-wider text-[#8ea2c6]">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full rounded-lg border border-[rgba(255,255,255,0.1)] bg-gradient-to-br from-[#050b16]/80 to-[#0b182c]/60 px-4 py-3 text-[#edf6ff] backdrop-blur-sm transition-all duration-300 placeholder:text-[#8ea2c6]/50 focus:border-[#33f3ff]/50 focus:outline-none focus:ring-2 focus:ring-[#33f3ff]/20"
          placeholder="your.email@example.com"
        />
      </div>

      {/* Subject field */}
      <div>
        <label htmlFor="subject" className="mb-2 block text-sm font-semibold uppercase tracking-wider text-[#8ea2c6]">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full rounded-lg border border-[rgba(255,255,255,0.1)] bg-gradient-to-br from-[#050b16]/80 to-[#0b182c]/60 px-4 py-3 text-[#edf6ff] backdrop-blur-sm transition-all duration-300 placeholder:text-[#8ea2c6]/50 focus:border-[#33f3ff]/50 focus:outline-none focus:ring-2 focus:ring-[#33f3ff]/20"
          placeholder="Project inquiry"
        />
      </div>

      {/* Message field */}
      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-semibold uppercase tracking-wider text-[#8ea2c6]">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className="w-full resize-none rounded-lg border border-[rgba(255,255,255,0.1)] bg-gradient-to-br from-[#050b16]/80 to-[#0b182c]/60 px-4 py-3 text-[#edf6ff] backdrop-blur-sm transition-all duration-300 placeholder:text-[#8ea2c6]/50 focus:border-[#33f3ff]/50 focus:outline-none focus:ring-2 focus:ring-[#33f3ff]/20"
          placeholder="Tell me about your project..."
        />
      </div>

      {/* Submit button */}
      <button
        type="submit"
        className="group inline-flex w-full items-center justify-center gap-3 rounded-lg border border-[rgba(255,255,255,0.25)] bg-gradient-to-r from-[#050b16]/80 via-[#0b182c]/70 to-[#050b16]/80 px-6 py-4 text-base font-semibold text-[#edf6ff] backdrop-blur-sm transition-all duration-300 hover:border-[#7ef9c7]/50 hover:text-[#7ef9c7] hover:shadow-[0_10px_40px_rgba(51,243,255,0.2)] cursor-pointer"
      >
        <span>Send Message</span>
        <FaPaperPlane className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </button>
    </form>
  );
};

export default ContactForm;
