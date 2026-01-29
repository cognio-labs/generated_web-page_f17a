import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  Calendar, 
  Clock, 
  MapPin, 
  Phone, 
  Instagram, 
  Facebook, 
  ChevronRight, 
  Star, 
  CheckCircle2, 
  Menu, 
  X,
  ArrowRight,
  ShieldCheck,
  Heart
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center">
              <Sparkles className="text-rose-500 w-6 h-6" />
            </div>
            <span className={`text-2xl font-serif font-bold tracking-tight ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
              LUMINA<span className="text-rose-400">SPA</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {['Services', 'About', 'Results', 'Reviews'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className={`text-sm font-medium transition-colors hover:text-rose-500 ${isScrolled ? 'text-slate-600' : 'text-white/90'}`}
              >
                {item}
              </a>
            ))}
            <button className="bg-rose-500 hover:bg-rose-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all transform hover:scale-105 shadow-lg shadow-rose-200">
              Book Consultation
            </button>
          </div>

          <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className={isScrolled ? 'text-slate-900' : 'text-white'} /> : <Menu className={isScrolled ? 'text-slate-900' : 'text-white'} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b"
          >
            <div className="px-4 py-6 space-y-4">
              {['Services', 'About', 'Results', 'Reviews'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="block text-lg font-medium text-slate-900">{item}</a>
              ))}
              <button className="w-full bg-rose-500 text-white py-3 rounded-xl font-semibold">Book Now</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => (
  <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img 
        src="https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&q=80" 
        className="w-full h-full object-cover"
        alt="Med Spa Interior"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 via-slate-900/40 to-transparent" />
    </div>

    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl"
      >
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-500/20 text-rose-200 text-sm font-medium backdrop-blur-sm mb-6 border border-rose-500/30">
          <Sparkles size={16} />
          Voted #1 Med Spa in the City
        </span>
        <h1 className="text-5xl md:text-7xl font-serif text-white leading-tight mb-6">
          Reveal Your Most <br />
          <span className="italic text-rose-300">Radiant Self</span>
        </h1>
        <p className="text-xl text-slate-200 mb-10 leading-relaxed max-w-lg">
          Experience the perfect blend of medical expertise and luxury aesthetics. Advanced treatments tailored to your unique beauty.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all flex items-center justify-center gap-2 group">
            Book Your Visit
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </button>
          <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-full text-lg font-semibold transition-all">
            View Treatments
          </button>
        </div>
      </motion.div>
    </div>

    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
      <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
        <div className="w-1 h-2 bg-white rounded-full" />
      </div>
    </div>
  </section>
);

const Services = () => {
  const services = [
    {
      title: "Facial Rejuvenation",
      desc: "Customized facials, chemical peels, and microneedling for a glowing complexion.",
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80",
      price: "From $150"
    },
    {
      title: "Injectables & Fillers",
      desc: "Expertly administered Botox and dermal fillers for natural-looking results.",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80",
      price: "From $300"
    },
    {
      title: "Body Contouring",
      desc: "Non-invasive treatments to sculpt and tone your body with zero downtime.",
      image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80",
      price: "From $450"
    },
    {
      title: "Laser Therapy",
      desc: "Advanced laser solutions for hair removal, skin tightening, and pigmentation.",
      image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80",
      price: "From $200"
    }
  ];

  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-rose-500 font-semibold tracking-widest uppercase text-sm mb-3">Our Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6">Signature Treatments</h3>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            We combine science-backed technology with a holistic approach to help you achieve your aesthetic goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100"
            >
              <div className="h-64 overflow-hidden">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-serif text-slate-900 mb-2">{service.title}</h4>
                <p className="text-slate-600 text-sm mb-4 leading-relaxed">{service.desc}</p>
                <div className="flex justify-between items-center pt-4 border-t border-slate-50">
                  <span className="text-rose-500 font-semibold">{service.price}</span>
                  <button className="text-slate-900 font-medium flex items-center gap-1 hover:text-rose-500 transition-colors">
                    Details <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Stats = () => (
  <section className="bg-slate-900 py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {[
          { label: "Happy Clients", value: "15k+" },
          { label: "Years Experience", value: "12+" },
          { label: "Specialists", value: "24" },
          { label: "Treatments", value: "50+" }
        ].map((stat, idx) => (
          <div key={idx}>
            <div className="text-4xl md:text-5xl font-serif text-rose-400 mb-2">{stat.value}</div>
            <div className="text-slate-400 uppercase tracking-widest text-xs font-medium">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section id="reviews" className="py-24 bg-white overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
        <div className="max-w-xl">
          <h2 className="text-rose-500 font-semibold tracking-widest uppercase text-sm mb-3">Testimonials</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-slate-900">What Our Clients Say</h3>
        </div>
        <div className="flex gap-2">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={20} />)}
          </div>
          <span className="font-semibold text-slate-900">4.9/5 Rating</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            name: "Sarah Jenkins",
            role: "Regular Client",
            text: "The most professional med spa I've ever visited. The results from my laser treatment were beyond my expectations.",
            img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80"
          },
          {
            name: "Michael Chen",
            role: "Skincare Enthusiast",
            text: "The staff is incredibly knowledgeable. They took the time to explain every step of my facial rejuvenation process.",
            img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80"
          },
          {
            name: "Elena Rodriguez",
            role: "Bridal Package",
            text: "I did the bridal glow package and my skin looked flawless on my wedding day. Highly recommend Lumina Spa!",
            img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80"
          }
        ].map((testimonial, idx) => (
          <div key={idx} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 relative">
            <div className="flex items-center gap-4 mb-6">
              <img src={testimonial.img} alt={testimonial.name} className="w-14 h-14 rounded-full object-cover" />
              <div>
                <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                <p className="text-slate-500 text-sm">{testimonial.role}</p>
              </div>
            </div>
            <p className="text-slate-600 italic leading-relaxed">"{testimonial.text}"</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const CTA = () => (
  <section className="py-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-rose-500" />
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />
    </div>
    
    <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
      <h2 className="text-4xl md:text-6xl font-serif text-white mb-8">Ready to Start Your Transformation?</h2>
      <p className="text-rose-100 text-xl mb-12 leading-relaxed">
        Book a complimentary consultation with our medical experts today and receive a personalized treatment plan.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
        <button className="bg-white text-rose-500 px-10 py-5 rounded-full text-lg font-bold hover:bg-rose-50 transition-all shadow-xl">
          Book Appointment Now
        </button>
        <div className="flex items-center gap-3 text-white">
          <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
            <Phone size={20} />
          </div>
          <div className="text-left">
            <p className="text-xs uppercase tracking-widest opacity-80">Call Us Directly</p>
            <p className="font-bold text-lg">(555) 123-4567</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-slate-50 pt-20 pb-10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-rose-500 rounded-full flex items-center justify-center">
              <Sparkles className="text-white w-5 h-5" />
            </div>
            <span className="text-xl font-serif font-bold tracking-tight text-slate-900">
              LUMINA<span className="text-rose-500">SPA</span>
            </span>
          </div>
          <p className="text-slate-500 mb-6 leading-relaxed">
            Premium medical aesthetics and wellness treatments designed to enhance your natural beauty.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-rose-500 hover:text-white transition-all">
              <Instagram size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-rose-500 hover:text-white transition-all">
              <Facebook size={18} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-slate-900 mb-6">Quick Links</h4>
          <ul className="space-y-4 text-slate-500">
            <li><a href="#" className="hover:text-rose-500 transition-colors">Treatments</a></li>
            <li><a href="#" className="hover:text-rose-500 transition-colors">Our Team</a></li>
            <li><a href="#" className="hover:text-rose-500 transition-colors">Pricing</a></li>
            <li><a href="#" className="hover:text-rose-500 transition-colors">Gift Cards</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-slate-900 mb-6">Contact</h4>
          <ul className="space-y-4 text-slate-500">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-rose-500 shrink-0 mt-1" />
              <span>123 Aesthetic Way, Suite 100<br />Beverly Hills, CA 90210</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-rose-500 shrink-0" />
              <span>(555) 123-4567</span>
            </li>
            <li className="flex items-center gap-3">
              <Clock size={18} className="text-rose-500 shrink-0" />
              <span>Mon - Sat: 9am - 7pm</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-slate-900 mb-6">Newsletter</h4>
          <p className="text-slate-500 mb-4 text-sm">Join for exclusive offers and beauty tips.</p>
          <div className="flex gap-2">
            <input 
              type="email" 
              placeholder="Email address" 
              className="bg-white border border-slate-200 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-rose-500/20"
            />
            <button className="bg-slate-900 text-white px-4 py-2 rounded-lg hover:bg-slate-800 transition-colors">
              Join
            </button>
          </div>
        </div>
      </div>
      
      <div className="pt-8 border-t border-slate-200 text-center text-slate-400 text-sm">
        <p>© {new Date().getFullYear()} Lumina Med Spa. All rights reserved. | Privacy Policy | Terms of Service</p>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-rose-100 selection:text-rose-600">
      <Navbar />
      <Hero />
      
      {/* Trust Badges */}
      <div className="py-12 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all">
          <div className="flex items-center gap-2 font-bold text-xl"><ShieldCheck /> FDA APPROVED</div>
          <div className="flex items-center gap-2 font-bold text-xl"><Heart /> BOARD CERTIFIED</div>
          <div className="flex items-center gap-2 font-bold text-xl"><CheckCircle2 /> TOP RATED 2023</div>
          <div className="flex items-center gap-2 font-bold text-xl"><Star /> 5-STAR SERVICE</div>
        </div>
      </div>

      <Services />
      
      {/* About Section */}
      <section id="about" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80" 
                  alt="Doctor" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-8 rounded-3xl shadow-2xl max-w-xs hidden md:block">
                <p className="text-slate-600 italic mb-4">"Our mission is to provide medical-grade results in a serene, spa-like environment."</p>
                <div className="font-bold text-slate-900">— Dr. Julianne Moore</div>
                <div className="text-rose-500 text-sm">Medical Director</div>
              </div>
            </div>
            <div>
              <h2 className="text-rose-500 font-semibold tracking-widest uppercase text-sm mb-3">Why Choose Us</h2>
              <h3 className="text-4xl md:text-5xl font-serif text-slate-900 mb-8">Science Meets Serenity</h3>
              <div className="space-y-8">
                {[
                  { title: "Expert Practitioners", desc: "Our team consists of board-certified dermatologists and licensed aesthetic nurses." },
                  { title: "Advanced Technology", desc: "We invest in the latest FDA-approved medical devices for safe and effective results." },
                  { title: "Personalized Care", desc: "No two faces are the same. We create custom treatment plans for every individual." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-rose-50 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="text-rose-500" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 mb-1">{item.title}</h4>
                      <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button className="mt-12 bg-slate-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-slate-800 transition-all">
                Learn More About Us
              </button>
            </div>
          </div>
        </div>
      </section>

      <Stats />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}