import { contactData } from '../../data/contact';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

const Contact = () => {
  return (
    <section id="contact" className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8 lg:py-32">

      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <div className="mb-16 text-center animate-fadeIn">
          <h2 className="mb-4 text-4xl font-bold text-[#edf6ff] sm:text-5xl lg:text-6xl">
            {contactData.title}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-[#8ea2c6] sm:text-xl">
            {contactData.description}
          </p>
        </div>

        {/* Contact content */}
        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-16 animate-slideUp" style={{ animationDelay: '0.1s' }}>
          {/* Left: Contact info */}
          <div>
            <ContactInfo />
          </div>

          {/* Right: Contact form */}
          <div className="glass-panel">
            <h3 className="mb-6 text-2xl font-bold text-[#edf6ff]">
              Send a Message
            </h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
