import { motion } from "motion/react";
import { 
  TrendingUp, 
  Users, 
  ShoppingBag, 
  BarChart3, 
  Target, 
  Award, 
  CheckCircle2, 
  Instagram, 
  Linkedin, 
  MessageSquare,
  ArrowRight,
  Star,
  ExternalLink,
  ChevronRight,
  Menu,
  X
} from "lucide-react";
import { useState, useEffect } from "react";

// --- Components ---

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Results", href: "#results" },
    { name: "Process", href: "#process" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-brand-bg/80 backdrop-blur-lg border-b border-white/10 py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-brand-accent-pink rounded-xl flex items-center justify-center text-brand-bg font-extrabold text-xl transition-transform group-hover:scale-110">
            AT
          </div>
          <span className="text-xl font-bold tracking-tight text-white">
            AHMAD <span className="text-brand-accent-pink">TALHA</span>
          </span>
        </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-sm font-semibold text-brand-text-secondary hover:text-brand-accent-teal transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="badge-upwork bg-[#14A800] text-white px-3 py-1 rounded font-extrabold text-[10px] uppercase tracking-wider">
              Top Rated Freelancer
            </div>
          </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-brand-text-primary"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-brand-bg border-b border-white/10 p-6 md:hidden"
        >
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium text-brand-text-secondary"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-4 bg-brand-accent-pink text-white text-center rounded-xl font-bold"
            >
              Work With Me
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen pt-32 pb-20 overflow-hidden flex items-center">
      {/* Background Orbs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-accent-pink/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-brand-accent-teal/20 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-brand-bg bg-brand-card flex items-center justify-center overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-brand-accent-teal/20 to-brand-accent-pink/20" />
                </div>
              ))}
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-bold uppercase tracking-wider text-brand-accent-teal">Trusted by 50+ Brands</span>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={10} className="fill-yellow-400 text-yellow-400" />)}
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-[1.1] tracking-normal">
            I build systems that <br />
            <span className="text-white">scale your TikTok Shop</span> <br />
            <span className="text-brand-accent-pink">revenue.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-brand-text-secondary mb-10 max-w-lg leading-relaxed font-medium">
            TikTok Shop Strategist & Upwork Top Rated freelancer. I turn emerging stores into multi-million dollar revenue machines.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a 
              href="#contact" 
              className="btn-primary"
            >
              Work With Me <ArrowRight size={20} />
            </a>
            <a 
              href="#results" 
              className="btn-secondary"
            >
              See My Results
            </a>
          </div>

          <div className="flex flex-wrap gap-8 items-center border-t border-white/5 pt-8">
            <div>
              <div className="text-2xl font-black text-white px-2 border-l-2 border-brand-accent-pink">50+</div>
              <div className="text-[10px] uppercase font-bold text-brand-text-secondary mt-1">Brands Managed</div>
            </div>
            <div>
              <div className="text-2xl font-black text-white px-2 border-l-2 border-brand-accent-teal">100%</div>
              <div className="text-[10px] uppercase font-bold text-brand-text-secondary mt-1">Job Success</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative flex justify-center items-center py-24"
        >
          {/* Top Right Live Indicator */}
          <div className="absolute top-0 right-0 glass px-4 py-2 border-white/10 hidden lg:flex items-center gap-3">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent-teal opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-accent-teal"></span>
            </span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-brand-accent-teal">Live Shop Performance</span>
          </div>

          <div className="absolute top-0 left-0 w-32 h-32 border-l border-t border-white/5 pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-32 h-32 border-r border-b border-white/5 pointer-events-none" />

          {/* Main Glow Effect */}
          <div className="absolute w-[130%] aspect-square bg-gradient-to-tr from-brand-accent-pink/10 via-transparent to-brand-accent-teal/10 rounded-full blur-[100px]" />
          
          {/* Floating Cards */}
          <div className="relative z-10 w-full max-w-sm space-y-6">
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="glass p-6 border-white/20 shadow-2xl relative"
            >
              <div className="absolute -top-3 -right-3 px-3 py-1 bg-brand-accent-teal text-brand-bg rounded-lg text-[10px] font-bold uppercase">
                New Record
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-accent-teal/10 flex items-center justify-center">
                  <TrendingUp className="text-brand-accent-teal" size={24} />
                </div>
                <div>
                  <div className="text-3xl font-extrabold text-white">$2,412,800</div>
                  <div className="text-xs font-bold text-brand-text-secondary uppercase tracking-widest">Revenue Generated</div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="glass p-6 border-white/20 ml-8 shadow-2xl"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-accent-pink/10 flex items-center justify-center">
                  <Users className="text-brand-accent-pink" size={24} />
                </div>
                <div>
                  <div className="text-3xl font-extrabold text-white">412%</div>
                  <div className="text-xs font-bold text-brand-text-secondary uppercase tracking-widest">Avg. ROAS Increase</div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              animate={{ x: [-5, 5, -5] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="glass p-4 border-brand-accent-pink/50 absolute -bottom-12 -left-8 shadow-2xl"
            >
              <div className="flex items-center gap-3">
                <div className="badge-upwork bg-[#14A800] text-white px-2 py-0.5 rounded text-[8px] font-black uppercase">UPWORK</div>
                <span className="text-sm font-bold">Top Rated Strategist</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export const SocialProof = () => {
  const stats = [
    "50+ Brands Scaled",
    "$2.4M+ Revenue Generated",
    "100% Job Success",
    "Top Rated Freelancer",
    "TikTok Shop Certified Strategy"
  ];

  return (
    <div className="py-6 bg-[#0F0F16] border-y border-brand-glass-border overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...stats, ...stats].map((stat, i) => (
          <div key={i} className="flex items-center gap-4 mx-12">
            <div className="w-1.5 h-1.5 rounded-full bg-brand-accent-teal" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-text-secondary">
              {stat}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export const Services = () => {
  const services = [
    {
      title: "TikTok Shop Setup & Optimization",
      desc: "Full store setup, listing SEO, and product strategy from day one to ensure maximum discoverability.",
      icon: <ShoppingBag className="text-brand-accent-pink" />
    },
    {
      title: "Affiliate & Creator Outreach",
      desc: "I recruit and manage high-performing TikTok creators to drive organic, authentic sales at massive scale.",
      icon: <Users className="text-brand-accent-teal" />
    },
    {
      title: "TikTok Ads Management",
      desc: "ROAS-focused paid campaigns with precise targeting and conversion-optimized creative strategy.",
      icon: <TrendingUp className="text-brand-accent-pink" />
    },
    {
      title: "7-Figure Growth Strategy",
      desc: "Custom growth roadmaps for brands ready to scale from zero to their first or next million.",
      icon: <Target className="text-brand-accent-teal" />
    },
    {
      title: "Analytics & Reporting",
      desc: "Data-driven decisions with detailed weekly dashboards and in-depth performance reviews.",
      icon: <BarChart3 className="text-brand-accent-pink" />
    },
    {
      title: "Brand Scaling Consulting",
      desc: "Ongoing strategic guidance for founders and brands serious about dominating the TikTok marketplace.",
      icon: <Award className="text-brand-accent-teal" />
    }
  ];

  return (
    <section id="services" className="py-24 max-w-7xl mx-auto px-6">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-6xl font-bold mb-6">Scale Your <span className="text-brand-accent-teal">TikTok Shop</span></h2>
        <p className="text-brand-text-secondary max-w-2xl mx-auto text-lg">
          Comprehensive growth systems designed for multi-million dollar brands.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="glass-card p-10 group hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4 text-5xl font-extrabold text-white/5 group-hover:text-brand-accent-teal/10 transition-colors">
              {String(i + 1).padStart(2, '0')}
            </div>
            <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-8 group-hover:bg-brand-accent-pink/10 transition-colors">
              {service.icon}
            </div>
            <h3 className="text-xl font-bold mb-4 tracking-normal">{service.title}</h3>
            <p className="text-brand-text-secondary text-sm leading-relaxed">
              {service.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export const Results = () => {
  const caseStudies = [
    {
      type: "Beauty & Skincare",
      revenue: "$1.2M",
      points: [
        "Scaled from $5k to $200k+ monthly",
        "Managed 150+ creator partnerships",
        "Top-performing listing optimization"
      ],
      color: "brand-accent-pink"
    },
    {
      type: "Fashion & Apparel",
      revenue: "$850K",
      points: [
        "24.5% Conversion Rate on listings",
        "Generated 40+ million organic views",
        "Successful Live stream integrations"
      ],
      color: "brand-accent-teal"
    },
    {
      type: "Home & Living",
      revenue: "$420K",
      points: [
        "Built affiliate network from zero",
        "Zero-ad spend scaling strategy",
        "Optimized fulfillment & CX"
      ],
      color: "white"
    }
  ];

  return (
    <section id="results" className="py-24 bg-brand-card/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">Real Results. <span className="text-brand-accent-pink">Real Revenue.</span></h2>
            <p className="text-brand-text-secondary max-w-xl text-lg">
              I focus on the bottom line, not just vanity metrics.
            </p>
          </div>
          <a href="#contact" className="inline-flex items-center gap-2 text-brand-accent-teal font-bold hover:gap-3 transition-all text-xl">
            Work With Me <ArrowRight size={24} />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {caseStudies.map((study, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className={`glass p-1 border-l-4 overflow-hidden`}
              style={{ borderLeftColor: `var(--color-brand-accent-${study.color.includes('pink') ? 'pink' : study.color.includes('teal') ? 'teal' : 'text-primary'})` }}
            >
              <div className="p-10">
                <span className="text-xs font-bold uppercase tracking-widest text-brand-text-secondary mb-4 block">{study.type}</span>
                <div className="flex items-baseline gap-2 mb-8">
                  <span className={`text-6xl font-bold text-white tracking-tight`}>{study.revenue}</span>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {study.points.map((point, j) => (
                    <li key={j} className="flex gap-3 text-sm text-brand-text-secondary">
                      <div className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 bg-brand-text-primary opacity-50`} />
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="inline-flex px-3 py-1 bg-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest">
                  7-Figure Result Case
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const WhyChooseMe = () => {
  return (
    <section className="py-24 max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
            Why brands trust <br />
            <span className="text-brand-accent-teal">Ahmad Talha</span>
          </h2>
          <div className="space-y-6">
            <p className="text-xl text-brand-text-secondary leading-relaxed font-medium">
              Most TikTok Shop managers focus on activity. I focus on <span className="text-white">revenue</span>. 
            </p>
            <p className="text-brand-text-secondary leading-relaxed">
              Every decision I make — from which creators to recruit to how your listings are written — is built around one goal: more sales. I combine deep platform technical knowledge with high-level brand strategy to give you an unfair advantage.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          {[
            "Upwork Top Rated with 100% Job Success Score",
            "Proven 7-figure track record across multiple niches",
            "Full-funnel approach (Organic + Paid + Affiliate)",
            "Transparent reporting with weekly performance audits",
            "Strategy-first mindset, not just task execution"
          ].map((point, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-6 flex items-start gap-4 hover:bg-white/5 transition-colors"
            >
              <div className="w-6 h-6 rounded-full bg-brand-accent-teal flex items-center justify-center shrink-0">
                <CheckCircle2 size={14} className="text-brand-bg" />
              </div>
              <span className="font-semibold">{point}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Process = () => {
  const steps = [
    {
      title: "Discovery Call",
      desc: "We audit your brand, products, and current TikTok presence to identify immediate growth holes.",
      num: "01"
    },
    {
      title: "Custom Strategy",
      desc: "I build a 90-day TikTok Shop growth roadmap tailored to your specific revenue goals.",
      num: "02"
    },
    {
      title: "Execution & Scale",
      desc: "I implement full systems, optimize performance daily, and grow your revenue month over month.",
      num: "03"
    }
  ];

  return (
    <section id="process" className="py-24 max-w-7xl mx-auto px-6 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-brand-accent-pink/20 via-brand-accent-teal/20 to-brand-accent-pink/20 -translate-y-1/2 hidden md:block" />
      
      <div className="text-center mb-20 relative z-10">
        <h2 className="text-4xl md:text-5xl font-black mb-4">Start Scaling in <span className="text-brand-accent-pink">3 Simple Steps</span></h2>
        <p className="text-brand-text-secondary">My proven framework for taking brands from zero to 7-figures.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-12 relative z-10">
        {steps.map((step, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center group"
          >
            <div className="w-16 h-16 rounded-full bg-brand-bg border-4 border-brand-accent-pink shadow-[0_0_20px_rgba(255,45,94,0.3)] flex items-center justify-center text-2xl font-black mb-8 group-hover:scale-110 transition-transform">
              {step.num}
            </div>
            <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
            <p className="text-brand-text-secondary leading-relaxed max-w-xs">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export const Testimonials = () => {
  const reviews = [
    {
      name: "Sarah M.",
      brand: "Beauty Brand Owner",
      text: "Ahmad is the real deal. He took our TikTok Shop from $10k to $150k in less than 3 months. His affiliate strategy is world-class.",
      rating: 5
    },
    {
      name: "James L.",
      brand: "Tech Gadget Founder",
      text: "I've worked with many agencies, but Ahmad's personal touch and deep understanding of the TikTok algorithm made all the difference.",
      rating: 5
    },
    {
      name: "Elena R.",
      brand: "Fashion Director",
      text: "Professional, data-driven, and results-oriented. Ahmad doesn't just manage the shop; he scales the entire business ecosystem.",
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-brand-card/30">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-black mb-16">What Clients Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 text-left relative"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, j) => (
                  <Star key={j} size={16} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-brand-text-primary italic mb-8 leading-relaxed">"{review.text}"</p>
              <div>
                <p className="font-bold">{review.name}</p>
                <p className="text-xs text-brand-text-secondary uppercase tracking-tight">{review.brand}</p>
              </div>
              <div className="absolute top-6 right-8 text-[10px] font-bold uppercase tracking-widest text-brand-accent-teal flex items-center gap-1">
                <CheckCircle2 size={10} /> Verified Upwork Review
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const UpworkCTA = () => {
  return (
    <div className="py-12 bg-gradient-to-r from-brand-accent-pink/20 via-brand-accent-teal/20 to-brand-accent-pink/20 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <h3 className="text-2xl md:text-3xl font-black mb-2">View My Full Portfolio & Reviews on Upwork</h3>
          <p className="text-brand-text-secondary font-medium">100% Job Success · Top Rated · 50+ Completed Projects</p>
        </div>
        <a 
          href="https://www.upwork.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="px-8 py-4 bg-white text-brand-bg rounded-xl font-bold flex items-center gap-2 hover:scale-105 transition-transform"
        >
          See My Upwork Profile <ExternalLink size={20} />
        </a>
      </div>
    </div>
  );
};

export const Contact = () => {
  return (
    <section id="contact" className="py-24 max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6">Ready to Scale Your <span className="text-brand-accent-teal">TikTok Shop?</span></h2>
          <p className="text-brand-text-secondary text-lg mb-10 leading-relaxed max-w-md">
            Let's turn your TikTok Shop into a 7-figure channel. Fill out the form and I'll get back to you within 24 hours to schedule an audit.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4 text-brand-text-secondary hover:text-brand-accent-teal transition-colors cursor-pointer group">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-brand-accent-teal/10 transition-colors">
                <MessageSquare size={24} />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest font-bold">Email Me</div>
                <div className="font-bold text-white">hello@ahmadtalha.com</div>
              </div>
            </div>
            <div className="flex items-center gap-4 text-brand-text-secondary hover:text-brand-accent-pink transition-colors cursor-pointer group">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-brand-accent-pink/10 transition-colors">
                <TrendingUp size={24} />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest font-bold">Upwork Profile</div>
                <div className="font-bold text-white">Ahmad Talha (Top Rated)</div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-card p-10 border-white/20"
        >
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-brand-text-secondary ml-1">Your Name</label>
                <input type="text" placeholder="John Doe" className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-brand-accent-teal focus:outline-none transition-all placeholder:text-white/20" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-brand-text-secondary ml-1">Email Address</label>
                <input type="email" placeholder="john@brand.com" className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-brand-accent-teal focus:outline-none transition-all placeholder:text-white/20" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-brand-text-secondary ml-1">Brand Name</label>
              <input type="text" placeholder="Your Amazing Store" className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-brand-accent-teal focus:outline-none transition-all placeholder:text-white/20" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-brand-text-secondary ml-1">Monthly Revenue Goal</label>
              <select className="w-full px-4 py-3 bg-brand-bg border border-white/10 rounded-xl focus:border-brand-accent-teal focus:outline-none transition-all appearance-none">
                <option className="bg-brand-bg">Under $10K</option>
                <option className="bg-brand-bg">$10K - $50K</option>
                <option className="bg-brand-bg">$50K - $100K</option>
                <option className="bg-brand-bg">$100K+</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-brand-text-secondary ml-1">Message</label>
              <textarea rows={4} placeholder="Tell me about your brand goals..." className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-brand-accent-teal focus:outline-none transition-all placeholder:text-white/20"></textarea>
            </div>
            <button type="submit" className="btn-primary w-full justify-center py-4 text-lg">
              Let's Talk <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/10 mt-12 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-brand-accent-pink rounded-xl flex items-center justify-center text-brand-bg font-extrabold text-xl">
              AT
            </div>
            <span className="text-xl font-bold tracking-tight text-white uppercase">
              AHMAD <span className="text-brand-accent-pink">TALHA</span>
            </span>
          </div>
          <div className="flex gap-8 text-sm font-medium text-brand-text-secondary">
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#results" className="hover:text-white transition-colors">Results</a>
            <a href="#process" className="hover:text-white transition-colors">Process</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
          <div className="flex gap-6">
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-accent-teal/10 hover:border-brand-accent-teal/30 transition-all text-brand-text-secondary hover:text-brand-accent-teal">
              <Linkedin size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-accent-pink/10 hover:border-brand-accent-pink/30 transition-all text-brand-text-secondary hover:text-brand-accent-pink">
              <Instagram size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-accent-teal/10 hover:border-brand-accent-teal/30 transition-all text-brand-text-secondary hover:text-brand-accent-teal">
              <MessageSquare size={20} />
            </a>
          </div>
        </div>
        <div className="text-center text-xs text-brand-text-secondary border-t border-white/5 pt-8">
          © 2025 Ahmad Talha. All rights reserved. TikTok Shop Strategist & Upwork Top Rated Freelancer.
        </div>
      </div>
    </footer>
  );
};
