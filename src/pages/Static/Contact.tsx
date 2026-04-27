import { Mail, Phone, MapPin, MessageCircle, Clock, Globe } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary italic mb-4">Connect With Us</h1>
          <p className="text-gray-500 max-w-2xl mx-auto italic">Have a question about our products or your order? We're here to help you experience the best of Pragati Enterprise.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Info Cards */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hotel-card">
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-accent mb-6">
                <Phone size={24} />
              </div>
              <h3 className="text-lg font-bold text-primary italic mb-2">Call Us</h3>
              <p className="text-gray-500 text-sm mb-4">Available Mon-Sat, 10 AM to 7 PM</p>
              <a href="tel:+919876543210" className="text-primary font-bold hover:text-accent transition-colors">+91 98765 43210</a>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hotel-card">
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-accent mb-6">
                <Mail size={24} />
              </div>
              <h3 className="text-lg font-bold text-primary italic mb-2">Email Us</h3>
              <p className="text-gray-500 text-sm mb-4">For order queries and support</p>
              <a href="mailto:hello@pragati.com" className="text-primary font-bold hover:text-accent transition-colors">hello@pragati.com</a>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hotel-card">
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-accent mb-6">
                <MapPin size={24} />
              </div>
              <h3 className="text-lg font-bold text-primary italic mb-2">Visit Us</h3>
              <p className="text-gray-500 text-sm mb-4">Our main office & hub</p>
              <p className="text-primary font-bold">Surat, Gujarat, India</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 bg-white p-8 md:p-12 rounded-4xl shadow-xl border border-gray-50">
            <h2 className="text-2xl font-bold text-primary italic mb-8">Send Us a Message</h2>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest pl-2">Full Name</label>
                <input type="text" className="w-full px-6 py-4 rounded-xl bg-secondary/30 border border-transparent focus:bg-white focus:ring-2 focus:ring-accent outline-none font-medium transition-all" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest pl-2">Email Address</label>
                <input type="email" className="w-full px-6 py-4 rounded-xl bg-secondary/30 border border-transparent focus:bg-white focus:ring-2 focus:ring-accent outline-none font-medium transition-all" placeholder="john@example.com" />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest pl-2">Subject</label>
                <input type="text" className="w-full px-6 py-4 rounded-xl bg-secondary/30 border border-transparent focus:bg-white focus:ring-2 focus:ring-accent outline-none font-medium transition-all" placeholder="Order Query / Feedback" />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest pl-2">Message</label>
                <textarea rows={5} className="w-full px-6 py-4 rounded-xl bg-secondary/30 border border-transparent focus:bg-white focus:ring-2 focus:ring-accent outline-none font-medium transition-all resize-none" placeholder="How can we help you?"></textarea>
              </div>
              <button className="md:w-max px-12 py-5 bg-primary text-white font-bold rounded-2xl hover:bg-accent transition-all shadow-xl uppercase tracking-widest text-xs">
                Send MESSAGE
              </button>
            </form>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary italic mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-500 italic">Quick answers to your common queries.</p>
          </div>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { q: 'How do I track my order?', a: 'Once your order is shipped, you will receive a tracking link via Email and SMS.' },
              { q: 'What is your return policy?', a: 'We offer a 7-day hassle-free return policy for all items in original condition.' },
              { q: 'Do you offer Cash on Delivery?', a: 'Yes, we offer COD service across 20,000+ pincodes in India.' },
              { q: 'How do I choose the right size?', a: 'Please refer to our Size Chart on each product page for detailed measurements.' },
            ].map((faq, i) => (
              <div key={i} className="bg-secondary/20 p-8 rounded-3xl">
                <h4 className="font-bold text-primary mb-3 italic">{faq.q}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
