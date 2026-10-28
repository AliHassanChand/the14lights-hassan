import React, { useState, useEffect } from 'react';
import { PageView } from '../types';
import { SEOHead, FAQItem } from './SEOHead';
import { AuthorBio } from './AuthorBio';
import hassanProfileImg from '../assets/profile.png';
import { isEduraXRSubdomain, getMainDomainLink, isProductionThe14Lights } from '../utils/domain';

interface NewsletterPageProps {
  onNavigate: (view: PageView, articleOrGameId?: string) => void;
}

const EDURA_XR_FAQS: FAQItem[] = [
  {
    question: 'What is Edura XR and how is it different from a regular chatbot?',
    answer:
      'Edura XR is an educational application built for Meta Quest headsets (including Quest 2) that puts AI-powered learning inside a walkable 3D classroom. Instead of typing into a 2D chatbot text box, students speak naturally out loud to an expressive 3D teacher avatar who responds with spoken, personalized answers, maintains memory of past conversations, and generates study notes.',
  },
  {
    question: 'Does Edura XR require an expensive gaming computer to run?',
    answer:
      'No. Edura XR is specifically engineered to run directly on standalone Meta Quest devices using the headset’s internal processing power. By avoiding the need for high-end tethered gaming PCs and external graphics cards, the platform remains accessible and cost-effective for everyday schools and families.',
  },
  {
    question: 'What languages does the Edura XR virtual teacher support?',
    answer:
      'The system is built to let students learn and converse in the language they think in naturally. English, French, and Swedish have been demonstrated, with localized bilingual tutoring (including Urdu) actively developed so that scientific concepts are never hindered by language barriers.',
  },
  {
    question: 'How does conversation memory work across visits?',
    answer:
      'Unlike standard systems that reset after every session, Edura XR preserves conversational context across sessions. When a student returns weeks later preparing for a test and asks "Do you remember when we talked about chemical bonds?", the AI teacher recalls previous lessons and picks up right where they left off.',
  },
  {
    question: 'Is Edura XR meant to replace human teachers or schools?',
    answer:
      'No. Edura XR is not intended to replace traditional schooling or human teachers, both of which remain fundamental to education. It is designed as an AI learning companion for moments when a student needs an alternate explanation, personalized pacing, interactive practice, or structured revision.',
  },
  {
    question: 'How do students get revision notes after taking off the headset?',
    answer:
      'Learning continues outside the headset. As students ask questions and work through concepts, Edura XR automatically compiles high-yield AI revision notes from the dialogue, giving students clear summaries and takeaways to review before exams.',
  },
];

const ALTERNATIVE_TITLES = [
  'Edura XR: Reimagining Learning Through AI and Virtual Reality',
  'Edura XR: What Happens When an AI Teacher Steps Into a 3D Classroom',
  'Inside Edura XR: A Classroom Built on AI and Conversation',
  'The Classroom in the Headset: Edura XR and the Case for Immersive Learning',
  'Edura XR: Teaching Through Presence, Not Just Text',
  'Beyond the Chatbot: How Edura XR Brings a Teacher Into Virtual Reality',
];

const PIPELINE_STEPS = [
  {
    step: '01',
    title: 'Student Speaks',
    desc: 'The student speaks naturally out loud into the Meta Quest headset, asking questions like "Can you explain how chemical bonds work?"',
    badge: 'Voice Input',
    icon: 'fa-microphone',
  },
  {
    step: '02',
    title: 'Audio Captured',
    desc: 'High-fidelity spatial microphone array captures student voice, dampening ambient room noise.',
    badge: 'Audio DSP',
    icon: 'fa-waveform-lines',
  },
  {
    step: '03',
    title: 'Speech to Text',
    desc: 'Low-latency transcription transforms spoken vocal queries into clean structured text tokens.',
    badge: 'STT Pipeline',
    icon: 'fa-font',
  },
  {
    step: '04',
    title: 'Edura XR AI Reasoning',
    desc: 'The pedagogical reasoning engine understands the core inquiry, past lesson memory, and student confusion.',
    badge: 'Cognitive LLM',
    icon: 'fa-brain',
  },
  {
    step: '05',
    title: 'Pedagogical Synthesis',
    desc: 'Generates an intuitive, step-by-step Socratic answer using analogies (e.g. atoms "holding hands") tailored to the student.',
    badge: 'Pedagogy Engine',
    icon: 'fa-chalkboard-user',
  },
  {
    step: '06',
    title: 'Spatial Injection',
    desc: 'The synthesized answer and animation cues are streamed back into the Unreal Engine 3D virtual environment.',
    badge: 'XR Streaming',
    icon: 'fa-vr-cardboard',
  },
  {
    step: '07',
    title: '3D Teacher Speaks',
    desc: 'The 3D teacher avatar turns, points at the whiteboard, and speaks the answer with natural lip-sync and body language.',
    badge: 'Avatar Lip-Sync',
    icon: 'fa-user-check',
  },
  {
    step: '08',
    title: 'Continuous Dialogue',
    desc: 'The student asks follow-up questions seamlessly while the system logs key insights for post-session study notes.',
    badge: 'Active Scaffolding',
    icon: 'fa-comments',
  },
];

const LANGUAGE_DEMOS = [
  {
    lang: 'English',
    flag: '🇬🇧',
    query: '"Can you explain how chemical bonds work?"',
    response:
      'Think of it like a puzzle where each atom is trying to "hold hands" with others to complete their set of electrons. Carbon is very social—it likes to hold 4 hands at once, while Oxygen likes to hold 2.',
    notes: 'Primary international curriculum benchmark.',
  },
  {
    lang: 'Swedish (Svenska)',
    flag: '🇸🇪',
    query: '"Kan du förklara ljusets hastighet?"',
    response:
      '3. Viktigt att komma ihåg: Ljusets hastighet är konstant i vakuum (det vi kallar för "c"). Om ljuset färdas genom ett material som glas eller vatten, saktar det ner eftersom det interagerar med atomerna i materialet.',
    notes: 'Demonstrated in Edura XR Figure 3: identical scientific depth in the student’s native tongue.',
  },
  {
    lang: 'French (Français)',
    flag: '🇫🇷',
    query: '"Comment les atomes partagent-ils leurs électrons ?"',
    response:
      'Imaginez une alliance entre deux atomes : pour devenir stables, ils mettent leurs électrons en commun. Cette mise en commun forme une liaison covalente solide et durable.',
    notes: 'Demonstrated in multilingual classroom pilots.',
  },
  {
    lang: 'Urdu (اردو)',
    flag: '🇵🇰',
    query: '"ایٹمز کیمیائی بانڈز کیوں بناتے ہیں؟"',
    response:
      'ایٹم اپنے بیرونی شیل کو مکمل کرنے اور استحکام حاصل کرنے کے لیے الیکٹران شیئر کرتے ہیں، بالکل ایسے جیسے دوست ایک دوسرے کا ہاتھ تھامتے ہیں۔',
    notes: 'Bilingual code-switching module tailored for regional Pakistani curricula.',
  },
];

export const NewsletterPage: React.FC<NewsletterPageProps> = ({ onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedTitleIndex, setSelectedTitleIndex] = useState(0);
  const [selectedLangIndex, setSelectedLangIndex] = useState(0);
  const [copiedAnnouncement, setCopiedAnnouncement] = useState(false);
  const [activePipelineStep, setActivePipelineStep] = useState(0);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interests: ['eduraxr', 'beta'] as string[],
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

  useEffect(() => {
    document.body.className = 'home-page';
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    return () => {
      document.body.className = '';
    };
  }, []);

  const toggleInterest = (id: string) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(id)
        ? prev.interests.filter((item) => item !== id)
        : [...prev.interests, id],
    }));
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      setStatus('error');
      setErrorMessage('Please enter your name or handle.');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setStatus('error');
      setErrorMessage('Please provide a valid email address.');
      return;
    }

    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      setErrorMessage('');
    }, 550);
  };

  const linkedInAnnouncementText = `Excited to share a feature on Edura XR, an immersive AI classroom built for Meta Quest devices, where students talk to a 3D virtual teacher instead of typing into a chatbot. The project brings together voice, a 3D world, support for more than one language, personal answers, memory of past conversations, and AI-generated revision notes into one connected experience. It's not meant to replace human teachers, but to explore what education could look like when AI becomes part of an immersive space instead of a separate tool.

Built by Hassan Noor Soomro and The 14Lights, Edura XR is an early, honest look at one possible future for learning. Read the full feature to see how it works, from voice to answer to revision.`;

  const handleCopyAnnouncement = () => {
    navigator.clipboard.writeText(linkedInAnnouncementText);
    setCopiedAnnouncement(true);
    setTimeout(() => setCopiedAnnouncement(false), 2500);
  };

  return (
    <div className="min-h-screen bg-[#06070B] text-[#e6eef8] flex flex-col selection:bg-gold-500 selection:text-black font-sans relative">
      {/* SEO Head with Structured Data */}
      <SEOHead
        title="Edura XR Newsletter: Reimagining Learning Through AI and Virtual Reality | The 14Lights"
        description="A feature report from The 14Lights on Edura XR: an AI teacher built for immersive Meta Quest classrooms with voice, conversational memory, and multilingual support."
        canonicalPath="/newsletter"
        ogType="article"
        ogImage="https://the14lights.com/assets/eduraxr_classroom.jpg"
        faqs={EDURA_XR_FAQS}
      />

      {/* A11y Skip Link */}
      <a
        href="#main-content"
        className="skip-link sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-gold-500 focus:text-black focus:p-3 focus:rounded-lg focus:font-bold"
      >
        Skip to main content
      </a>

      {/* Navigation Bar */}
      <nav
        className="sticky top-0 z-40 transition-all duration-300 w-full border-b border-slate-800/80 backdrop-blur-xl bg-[#080911]/90 shadow-[0_4px_24px_rgba(0,0,0,0.6)]"
        id="navbar"
        aria-label="Main Navigation"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4 flex items-center justify-between">
          <button
            onClick={() => onNavigate(isEduraXRSubdomain() ? 'eduraxr' : 'home')}
            className="group flex items-center gap-3 text-left focus:outline-none cursor-pointer"
            aria-label="Edura XR by The 14 Lights - Pakistan's Virtual AI Teacher"
          >
            <div className="relative w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-2xl overflow-hidden transition p-1 bg-white ring-2 ring-gold-400/60 shadow-lg shadow-gold-500/10">
              <picture className="w-full h-full flex items-center justify-center">
                <source srcSet="/assets/VR_LOGO.webp" type="image/webp" />
                <img
                  src="/assets/VR_LOGO.webp"
                  alt="The 14 Lights Logo"
                  width={48}
                  height={48}
                  decoding="async"
                  fetchPriority="high"
                  className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-300"
                />
              </picture>
            </div>
            <div className="flex flex-col">
              <span className="text-lg md:text-xl font-heading font-bold text-white tracking-tight leading-none group-hover:text-gold-400 transition">
                edura<span className="text-gold-500">XR</span>
              </span>
              <span className="text-[0.55rem] md:text-[0.65rem] uppercase tracking-[0.22em] text-slate-400 group-hover:text-slate-200 transition font-medium">
                by The 14 Lights
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <ul className="hidden lg:flex items-center justify-end gap-1.5 ml-auto p-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.08),0_8px_20px_rgba(0,0,0,0.35)]">
            <li>
              <button
                onClick={() => onNavigate('home')}
                className="group relative px-4 py-2 rounded-full text-xs font-heading font-medium tracking-wide text-slate-300 hover:text-white hover:bg-white/[0.08] active:scale-95 transition-all duration-200 cursor-pointer flex items-center gap-1.5"
              >
                <span>Home</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate('blog')}
                className="group relative px-4 py-2 rounded-full text-xs font-heading font-medium tracking-wide text-slate-300 hover:text-white hover:bg-white/[0.08] active:scale-95 transition-all duration-200 cursor-pointer flex items-center gap-1.5"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-slate-500 group-hover:bg-gold-400 group-hover:scale-125 transition-all duration-300"></span>
                <span>Technical Blog</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  const el = document.getElementById('feature-report');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group relative px-4 py-2 rounded-full text-xs font-heading font-medium tracking-wide text-slate-300 hover:text-white hover:bg-white/[0.08] active:scale-95 transition-all duration-200 cursor-pointer flex items-center gap-1.5"
              >
                <i className="fa-solid fa-file-lines text-[10px] text-slate-500 group-hover:text-gold-400 transition-colors"></i>
                <span>Feature Report</span>
              </button>
            </li>
            <li>
              <a
                href="#subscribe"
                className="group relative px-4 py-2 rounded-full text-xs font-heading font-medium tracking-wide text-slate-300 hover:text-gold-400 hover:bg-gold-500/10 active:scale-95 transition-all duration-200 cursor-pointer flex items-center gap-1.5"
              >
                <i className="fa-solid fa-envelope text-[10px] text-slate-500 group-hover:text-gold-400 transition-colors"></i>
                <span>Newsletter</span>
              </a>
            </li>
            {/* The 14 Lights Main Website Button in Right Last */}
            <li className="ml-1 pl-2 border-l border-white/10 flex items-center">
              <a
                href={getMainDomainLink('/')}
                onClick={(e) => {
                  if (!isProductionThe14Lights()) {
                    e.preventDefault();
                    onNavigate('home');
                  }
                }}
                className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-full font-heading font-bold text-xs uppercase tracking-wider text-black bg-gradient-to-r from-gold-400 via-amber-300 to-gold-500 border border-gold-200/80 shadow-[0_0_20px_rgba(212,175,55,0.45)] hover:shadow-[0_0_30px_rgba(212,175,55,0.8)] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer select-none overflow-hidden"
                aria-label="Back to The 14 Lights Main Website"
                title="Back to The 14 Lights Main Website (the14lights.com)"
              >
                {/* Dynamic light sheen highlight sweep */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none"></div>

                {/* Back to Home Icon Badge */}
                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-black/15 text-black group-hover:bg-black group-hover:text-gold-400 transition-all duration-300">
                  <i className="fa-solid fa-house text-[10px] transform group-hover:scale-110 transition-transform" aria-hidden="true"></i>
                </span>

                <span className="relative flex items-center gap-1">
                  <span>The 14 Lights</span>
                  <span className="text-[10px] font-semibold opacity-75 hidden xl:inline">• Home</span>
                </span>

                <i className="fa-solid fa-arrow-up-right-from-square text-[10px] opacity-75 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" aria-hidden="true"></i>
              </a>
            </li>
          </ul>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center">
            <button
              id="hambtn-newsletter"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-2xl text-slate-300 hover:text-gold-400 transition focus:outline-none p-2 rounded-lg hover:bg-slate-800/60"
              aria-label="Open Mobile Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              <i className={`fa-solid ${mobileMenuOpen ? 'fa-xmark' : 'fa-bars-staggered'}`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0a0c16]/98 backdrop-blur-2xl border-t border-slate-800 absolute w-full left-0 z-50 shadow-2xl">
            <div className="px-6 py-6 flex flex-col gap-3">
              <button
                onClick={() => {
                  onNavigate('home');
                  setMobileMenuOpen(false);
                }}
                className="text-left text-slate-300 hover:text-gold-400 font-medium py-2 border-b border-slate-800/60"
              >
                Home
              </button>
              <button
                onClick={() => {
                  onNavigate('blog');
                  setMobileMenuOpen(false);
                }}
                className="text-left text-slate-300 hover:text-gold-400 font-medium py-2 border-b border-slate-800/60"
              >
                Technical Blog
              </button>
              <button
                onClick={() => {
                  const el = document.getElementById('feature-report');
                  el?.scrollIntoView({ behavior: 'smooth' });
                  setMobileMenuOpen(false);
                }}
                className="text-left text-slate-300 hover:text-gold-400 font-medium py-2 border-b border-slate-800/60"
              >
                Read Feature Report
              </button>
              <a
                href="#subscribe"
                onClick={() => setMobileMenuOpen(false)}
                className="text-left text-gold-400 font-bold py-2 border-b border-slate-800/60"
              >
                Subscribe to Edura XR Dispatch
              </a>
              {/* Button to Main Website */}
              <div className="pt-2 mt-1 border-t border-slate-800/60">
                <a
                  href={getMainDomainLink('/')}
                  onClick={(e) => {
                    setMobileMenuOpen(false);
                    if (!isProductionThe14Lights()) {
                      e.preventDefault();
                      onNavigate('home');
                    }
                  }}
                  className="w-full flex items-center justify-between px-4 py-3 rounded-xl font-heading font-bold text-xs uppercase tracking-wider text-black bg-gradient-to-r from-gold-400 via-amber-300 to-gold-500 shadow-[0_0_20px_rgba(212,175,55,0.35)] active:scale-95 transition-transform"
                >
                  <div className="flex items-center gap-2">
                    <i className="fa-solid fa-globe text-sm"></i>
                    <span>The 14 Lights Main Website</span>
                  </div>
                  <i className="fa-solid fa-arrow-right text-xs"></i>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      <main id="main-content" className="flex-1">
        {/* Masthead / Header Section */}
        <section className="relative overflow-hidden pt-12 pb-16 md:pt-16 md:pb-20 border-b border-slate-800/80 bg-gradient-to-b from-[#0e1120] via-[#090b14] to-[#06070b]">
          {/* Ambient Lighting & High-Tech Radial Glows */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[380px] bg-gold-500/12 blur-[140px] rounded-full pointer-events-none"></div>
          <div className="absolute top-8 right-8 w-[380px] h-[380px] bg-cyan-500/10 blur-[130px] rounded-full pointer-events-none"></div>

          <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10 text-center">
            {/* Publisher & Product Masthead */}
            <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
              <span className="px-3.5 py-1 rounded-full border border-gold-500/40 bg-gold-500/15 text-gold-300 text-xs font-bold uppercase tracking-widest font-heading shadow-[0_0_15px_rgba(212,175,55,0.2)]">
                EDURA XR • THE 14LIGHTS
              </span>
              <span className="px-3.5 py-1 rounded-full border border-slate-700 bg-slate-800/60 text-slate-300 text-xs font-medium uppercase tracking-wider font-heading">
                A Feature on the Future of Learning
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-[1.15] mb-5">
              {ALTERNATIVE_TITLES[selectedTitleIndex]}
            </h1>

            {/* Sub-headline from PDF */}
            <p className="text-base sm:text-xl text-gold-300/90 max-w-2xl mx-auto font-heading font-medium mb-8">
              A report from The 14Lights on an AI teacher built for immersive classrooms
            </p>

            {/* Alternative Title Selector (from Page 10 Newsletter Package) */}
            <div className="max-w-3xl mx-auto mb-10 p-3 rounded-2xl bg-[#0d101e]/80 border border-slate-700/80 shadow-lg text-left">
              <div className="flex items-center justify-between px-3 py-1 text-xs text-slate-400 font-heading">
                <span className="font-semibold text-gold-400 flex items-center gap-1.5">
                  <i className="fa-solid fa-sparkles text-[11px]"></i> Newsletter Package Headline Variations
                </span>
                <span>Select variation to preview</span>
              </div>
              <div className="flex flex-wrap gap-1.5 mt-2">
                {ALTERNATIVE_TITLES.map((title, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedTitleIndex(idx)}
                    className={`text-xs px-3 py-1.5 rounded-xl transition text-left font-heading ${
                      selectedTitleIndex === idx
                        ? 'bg-gold-500 text-black font-bold shadow-md'
                        : 'bg-slate-800/60 text-slate-300 hover:bg-slate-700/60 hover:text-white'
                    }`}
                  >
                    #{idx + 1}
                  </button>
                ))}
              </div>
            </div>

            {/* Key Message Callout Banner (Page 10 of PDF) */}
            <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-gold-500/15 via-amber-500/10 to-gold-500/15 border-2 border-gold-500/40 text-slate-200 max-w-3xl mx-auto shadow-[0_0_30px_rgba(212,175,55,0.15)] mb-10 text-left">
              <span className="text-[11px] uppercase tracking-widest text-gold-400 font-bold font-heading block mb-1">
                Core Key Message
              </span>
              <p className="text-sm sm:text-base font-medium text-white leading-relaxed font-heading">
                “Edura XR explores what learning could look like when AI stops being a separate tool and becomes part of the room a student is standing in.”
              </p>
            </div>

            {/* Front-Page Teaser Quote Block (Page 1 & 10 of PDF) */}
            <div className="border-l-4 border-gold-400 pl-6 py-2 text-left max-w-3xl mx-auto text-slate-300 italic text-sm sm:text-base font-light leading-relaxed">
              “A sixth grader looks at a diagram of chemical bonds and understands none of it. Somewhere else, a different version of that same student puts on a headset, asks a question out loud, and gets an answer that actually makes sense. Edura XR is a project built around that gap.”
            </div>
          </div>
        </section>

        {/* Figure 1: 3D Classroom Feature Visual & Overview */}
        <section id="feature-report" className="py-16 md:py-20 bg-[#07080e] border-b border-slate-800/80">
          <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="rounded-3xl overflow-hidden border-2 border-slate-700/90 shadow-[0_20px_60px_rgba(0,0,0,0.8)] bg-[#0f1222] relative group">
              <div className="relative aspect-video w-full overflow-hidden bg-slate-900">
                <img
                  src="/assets/eduraxr_classroom.jpg"
                  alt="Figure 1. The Edura XR classroom. A 3D space built for students to interact in, not just look at."
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  onError={(e) => {
                    e.currentTarget.src = '/assets/VR_LOGO.webp';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090b14] via-transparent to-black/30 pointer-events-none"></div>

                {/* Floating Meta Quest Hardware Pill */}
                <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-white text-xs font-heading font-semibold shadow-lg">
                  <i className="fa-solid fa-vr-cardboard text-gold-400"></i>
                  <span>Standalone Meta Quest (Quest 2 & 3)</span>
                </div>

                {/* Question Prompt Overlay */}
                <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-auto max-w-md p-4 rounded-2xl bg-black/85 backdrop-blur-md border border-gold-500/40 shadow-2xl">
                  <div className="flex items-center gap-2 text-xs font-bold text-gold-400 uppercase tracking-wider font-heading mb-1">
                    <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse"></span> Spoken Student Inquiry
                  </div>
                  <p className="text-white text-sm font-semibold font-heading">
                    “Can you explain how chemical bonds work?”
                  </p>
                </div>
              </div>

              <div className="p-6 bg-[#0a0c17] border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <p className="text-xs sm:text-sm text-slate-300 italic font-light">
                  <strong className="text-gold-300 font-semibold not-italic">Figure 1.</strong> The Edura XR classroom. A 3D space built for students to interact in, not just look at.
                </p>
                <div className="flex items-center gap-2 shrink-0">
                  <span className="text-[11px] font-mono text-slate-400 px-2.5 py-1 rounded-md bg-slate-800/80 border border-slate-700">
                    Hold [T] to Talk / Enter to Type
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 1: A Problem Most Students Know Well & What Edura XR Is */}
        <section className="py-16 md:py-20 bg-gradient-to-b from-[#07080e] via-[#090c18] to-[#07080e] border-b border-slate-800/80">
          <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8 space-y-12">
            <div>
              <span className="text-xs text-gold-400 uppercase tracking-widest font-bold font-heading block mb-2">
                Section 1 • Foundations
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-white mb-6 tracking-tight">
                A Problem Most Students Know Well
              </h2>
              <div className="space-y-4 text-slate-300 text-base sm:text-lg leading-relaxed font-light">
                <p>
                  Most learning still happens the same way it did decades ago: textbooks, slides, videos, static diagrams, written homework. None of this is useless. It has taught generations of students, and it still works for a lot of subjects.
                </p>
                <p>
                  But some ideas are hard to understand when all you can do is look at them on a flat page. A textbook can tell you that electrons pair up to form a bond. It can't easily show you what that looks like, or let you ask a follow-up question when something doesn't click.
                </p>
                <p>
                  Think about a student in sixth grade meeting chemical bonds for the first time. They read about atoms and electrons and shared pairs. The words are correct, but the idea still doesn't land. Now picture the same student inside a space built to explain that idea out loud and show it at the same time, where instead of flipping back through the chapter, they can just ask:
                </p>
              </div>

              <div className="my-6 p-5 rounded-2xl bg-gradient-to-r from-slate-900 to-[#12162b] border border-gold-500/30 text-gold-300 font-heading font-bold text-lg sm:text-xl text-center shadow-inner">
                “Can you explain how chemical bonds work?”
              </div>

              <p className="text-slate-400 text-sm italic">
                Edura XR isn't claiming to have fixed this problem. Think of it more as an early attempt, a working try at a different way to help people understand things that are hard to understand.
              </p>
            </div>

            {/* What Edura XR Is */}
            <div className="p-8 rounded-3xl bg-[#0d1020] border-2 border-slate-700/90 shadow-2xl">
              <span className="text-xs text-gold-400 uppercase tracking-widest font-bold font-heading block mb-2">
                Section 2 • Product Architecture
              </span>
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white mb-4 tracking-tight">
                What Edura XR Is
              </h2>
              <p className="text-slate-300 text-base leading-relaxed mb-6 font-light">
                Edura XR is an educational app that puts AI-powered learning inside a virtual world you can walk around in. Right now it's built for Meta Quest headsets, including Meta Quest 2. The idea is simple: instead of a student only reading, watching, or typing questions into a chatbot, they step into a 3D classroom and talk to a virtual teacher, out loud.
              </p>
              <p className="text-slate-300 text-base leading-relaxed mb-8 font-light">
                The student asks questions with their own voice. The teacher answers with a spoken, AI-generated response, delivered by a 3D character standing at the front of the room. The system is built to work across different subjects and to hold conversations in more than one language.
              </p>

              {/* Connected Pieces Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-slate-800">
                {[
                  { title: 'Spoken Voice', desc: 'Natural vocal dialogue' },
                  { title: 'Virtual 3D World', desc: 'Walkable spatial room' },
                  { title: '3D Teacher Avatar', desc: 'Expressive gestures & board' },
                  { title: 'Conversational Memory', desc: 'Context retained across weeks' },
                ].map((item, i) => (
                  <div key={i} className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 text-center">
                    <span className="text-xs font-bold text-gold-400 font-heading block mb-1">{item.title}</span>
                    <span className="text-[11px] text-slate-400">{item.desc}</span>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-xs text-slate-400 italic text-center">
                None of these parts are meant to be used on their own. Edura XR treats them as pieces of one connected experience.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Interactive 8-Stage Conversation Pipeline (Page 3 of PDF) */}
        <section className="py-16 md:py-24 bg-[#06070c] border-b border-slate-800/80 relative">
          <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs text-gold-400 uppercase tracking-widest font-bold font-heading block mb-2">
                Section 3 • Technical Flow
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-white mb-3">
                How the Conversation Actually Works
              </h2>
              <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
                In plain terms: the student talks, the system figures out what they mean, the AI puts together an answer, and the virtual teacher says it back—all without leaving the 3D world.
              </p>
            </div>

            {/* Interactive Step Navigator */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 mb-8">
              {PIPELINE_STEPS.map((step, idx) => (
                <button
                  key={idx}
                  onClick={() => setActivePipelineStep(idx)}
                  className={`p-3 rounded-xl border text-left transition cursor-pointer flex flex-col justify-between ${
                    activePipelineStep === idx
                      ? 'bg-gradient-to-b from-gold-500/25 to-amber-500/10 border-gold-400 text-white shadow-lg'
                      : 'bg-[#0d1020] border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                  }`}
                >
                  <span className={`text-[10px] font-bold ${activePipelineStep === idx ? 'text-gold-300' : 'text-slate-500'}`}>
                    {step.step}
                  </span>
                  <span className="text-xs font-heading font-semibold line-clamp-2 mt-1">
                    {step.title}
                  </span>
                </button>
              ))}
            </div>

            {/* Active Step Highlight Box */}
            <div className="p-8 rounded-3xl bg-gradient-to-b from-[#13172c] via-[#0f1222] to-[#0a0c16] border-2 border-gold-500/40 shadow-2xl relative overflow-hidden">
              <div className="absolute -right-10 -bottom-10 w-60 h-60 bg-gold-500/10 rounded-full blur-3xl pointer-events-none"></div>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/20 text-gold-300 text-xs font-heading font-bold mb-3">
                    <i className={`fa-solid ${PIPELINE_STEPS[activePipelineStep].icon}`}></i>
                    <span>Step {PIPELINE_STEPS[activePipelineStep].step}: {PIPELINE_STEPS[activePipelineStep].badge}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-heading font-bold text-white mb-2">
                    {PIPELINE_STEPS[activePipelineStep].title}
                  </h3>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl font-light">
                    {PIPELINE_STEPS[activePipelineStep].desc}
                  </p>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <button
                    onClick={() => setActivePipelineStep((prev) => (prev > 0 ? prev - 1 : PIPELINE_STEPS.length - 1))}
                    className="p-3 rounded-xl bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition"
                    aria-label="Previous step"
                  >
                    <i className="fa-solid fa-arrow-left text-xs"></i>
                  </button>
                  <button
                    onClick={() => setActivePipelineStep((prev) => (prev < PIPELINE_STEPS.length - 1 ? prev + 1 : 0))}
                    className="p-3 rounded-xl bg-gold-500 text-black font-bold hover:bg-gold-400 transition"
                    aria-label="Next step"
                  >
                    <i className="fa-solid fa-arrow-right text-xs"></i>
                  </button>
                </div>
              </div>
            </div>

            <p className="text-xs text-slate-400 mt-6 text-center italic">
              Pipelines are built to run in parallel, so speech, understanding, pedagogical reasoning, and teacher avatar movement happen without breaking conversational flow.
            </p>
          </div>
        </section>

        {/* Section 4: A Teacher, Not Just a Chat Window & Key Philosophical Pillars (Pages 4-6) */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-[#090c18] to-[#07080e] border-b border-slate-800/80">
          <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8 space-y-16">
            {/* Quote Callout */}
            <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#121528] via-[#161a33] to-[#101224] border-2 border-gold-500/40 text-center shadow-2xl relative">
              <i className="fa-solid fa-quote-left text-3xl text-gold-500/40 mb-4 block"></i>
              <blockquote className="text-xl sm:text-2xl md:text-3xl font-heading font-extrabold text-white max-w-3xl mx-auto leading-snug">
                “The goal isn't to make AI look impressive. The goal is to find out if a more human, more immersive way of talking to AI helps students feel more involved in learning.”
              </blockquote>
              <span className="block mt-4 text-xs font-heading uppercase tracking-widest text-gold-400 font-bold">
                Edura XR Core Design Philosophy
              </span>
            </div>

            {/* 4 Architectural Pillars from Pages 4-6 */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Pillar 1 */}
              <div className="p-7 rounded-2xl bg-[#0c0f1e] border border-slate-700/80 hover:border-gold-500/50 transition">
                <div className="flex items-center gap-3 text-gold-400 font-heading font-bold text-lg mb-3">
                  <i className="fa-solid fa-shield-halved text-base"></i> Staying Polite & On Topic
                </div>
                <p className="text-sm text-slate-300 leading-relaxed font-light">
                  If a student asks something inappropriate or unrelated to the lesson, the virtual teacher is engineered to politely clarify that the question is outside what it is there to help with. Built into the educational AI as part of the core product, not patched on afterward.
                </p>
              </div>

              {/* Pillar 2 */}
              <div className="p-7 rounded-2xl bg-[#0c0f1e] border border-slate-700/80 hover:border-gold-500/50 transition">
                <div className="flex items-center gap-3 text-gold-400 font-heading font-bold text-lg mb-3">
                  <i className="fa-solid fa-sliders text-base"></i> A Lesson That Adjusts to the Student
                </div>
                <p className="text-sm text-slate-300 leading-relaxed font-light">
                  A fixed lesson plan treats every student the same way; a conversation doesn't have to. Instead of moving through a lesson at a fixed speed, students follow their own confusion—asking follow-up questions the moment an idea doesn't make sense.
                </p>
              </div>

              {/* Pillar 3 */}
              <div className="p-7 rounded-2xl bg-[#0c0f1e] border border-slate-700/80 hover:border-gold-500/50 transition">
                <div className="flex items-center gap-3 text-gold-400 font-heading font-bold text-lg mb-3">
                  <i className="fa-solid fa-brain-circuit text-base"></i> A Teacher That Remembers Your Last Talk
                </div>
                <p className="text-sm text-slate-300 leading-relaxed font-light">
                  When a student asks weeks later: “Do you remember when we talked about the speed of light?”, Edura XR holds that context. The system carries prior learning forward instead of forcing students to start from scratch every session.
                </p>
              </div>

              {/* Pillar 4 */}
              <div className="p-7 rounded-2xl bg-[#0c0f1e] border border-slate-700/80 hover:border-gold-500/50 transition">
                <div className="flex items-center gap-3 text-gold-400 font-heading font-bold text-lg mb-3">
                  <i className="fa-solid fa-microchip text-base"></i> Built to Run Without a Gaming PC
                </div>
                <p className="text-sm text-slate-300 leading-relaxed font-light">
                  Edura XR runs entirely on standalone Meta Quest hardware (including Quest 2), using the headset's onboard processing. No $2,000 gaming rig required, keeping immersive learning within reach of everyday schools and families.
                </p>
              </div>
            </div>

            {/* Multilingual Learning Showcase (Page 5 of PDF) */}
            <div className="p-8 rounded-3xl bg-[#0b0e1b] border-2 border-slate-700/80">
              <div className="max-w-2xl mb-6">
                <span className="text-xs text-gold-400 uppercase tracking-widest font-bold font-heading block mb-1">
                  Multilingual Pedagogy
                </span>
                <h3 className="text-xl sm:text-2xl font-heading font-bold text-white mb-2">
                  Learning in a Language That Feels Like Your Own
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                  Understanding shouldn't depend on which language your textbook happens to be written in. Explore how the Edura XR teacher explains science in different tongues:
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {LANGUAGE_DEMOS.map((demo, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedLangIndex(idx)}
                    className={`px-4 py-2 rounded-xl text-xs font-heading font-semibold transition cursor-pointer flex items-center gap-2 ${
                      selectedLangIndex === idx
                        ? 'bg-gold-500 text-black shadow-md'
                        : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700'
                    }`}
                  >
                    <span>{demo.flag}</span>
                    <span>{demo.lang}</span>
                  </button>
                ))}
              </div>

              <div className="p-6 rounded-2xl bg-slate-900/90 border border-gold-500/30 space-y-3">
                <div className="text-xs text-slate-400 font-heading">
                  Student asks in <strong className="text-white">{LANGUAGE_DEMOS[selectedLangIndex].lang}:</strong>
                </div>
                <div className="text-base text-gold-300 font-heading font-semibold italic">
                  {LANGUAGE_DEMOS[selectedLangIndex].query}
                </div>
                <div className="pt-3 border-t border-slate-800 text-xs text-slate-400 font-heading">
                  AI Teacher Spoken Response:
                </div>
                <p className="text-sm text-slate-200 leading-relaxed font-light">
                  {LANGUAGE_DEMOS[selectedLangIndex].response}
                </p>
                <div className="pt-2 text-[11px] text-slate-400 italic">
                  💡 {LANGUAGE_DEMOS[selectedLangIndex].notes}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Traditional Path vs. Edura XR Comparison (Page 7 of PDF) */}
        <section className="py-16 md:py-24 bg-[#06070b] border-b border-slate-800/80">
          <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs text-gold-400 uppercase tracking-widest font-bold font-heading block mb-2">
                Comparative Analysis
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-white mb-4">
                Edura XR Next to the Traditional Path
              </h2>
              <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
                Edura XR is not meant to replace traditional schooling or human teachers. Both are still central to how students learn. Edura XR is better thought of as an AI companion for moments when a student needs another explanation or practice.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Traditional Path */}
              <div className="p-8 rounded-3xl bg-[#0c0e18] border border-slate-800 relative">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-heading font-bold mb-4">
                  <i className="fa-solid fa-book-bookmark"></i> Traditional Path
                </div>
                <h3 className="text-xl font-heading font-bold text-slate-200 mb-4">The Standard Flow</h3>
                <div className="space-y-3 font-heading text-sm text-slate-400 mb-6">
                  <div className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/60">
                    <span className="w-6 h-6 rounded-full bg-slate-800 text-slate-400 flex items-center justify-center text-xs font-bold">1</span>
                    <span>Read textbook chapter</span>
                  </div>
                  <div className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/60">
                    <span className="w-6 h-6 rounded-full bg-slate-800 text-slate-400 flex items-center justify-center text-xs font-bold">2</span>
                    <span>Watch flat slide presentation</span>
                  </div>
                  <div className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/60">
                    <span className="w-6 h-6 rounded-full bg-slate-800 text-slate-400 flex items-center justify-center text-xs font-bold">3</span>
                    <span>Memorize formulaic rules</span>
                  </div>
                  <div className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/60">
                    <span className="w-6 h-6 rounded-full bg-slate-800 text-slate-400 flex items-center justify-center text-xs font-bold">4</span>
                    <span>Get tested on paper</span>
                  </div>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed font-light">
                  Effective for many subjects, but struggles when a student needs to visualize abstract atomic bonds or ask follow-up questions.
                </p>
              </div>

              {/* Edura XR Path */}
              <div className="p-8 rounded-3xl bg-gradient-to-b from-[#14182b] to-[#0c0f1d] border-2 border-gold-500/50 relative shadow-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/20 text-gold-300 text-xs font-heading font-bold mb-4">
                  <i className="fa-solid fa-vr-cardboard"></i> The Edura XR Path
                </div>
                <h3 className="text-xl font-heading font-bold text-white mb-4">The Immersive Dialogue</h3>
                <div className="space-y-3 font-heading text-sm text-slate-200 mb-6">
                  <div className="flex items-center gap-3 p-2.5 rounded-xl bg-gold-500/10 border border-gold-500/30">
                    <span className="w-6 h-6 rounded-full bg-gold-400 text-black flex items-center justify-center text-xs font-bold">1</span>
                    <span>Enter the 3D space & explore</span>
                  </div>
                  <div className="flex items-center gap-3 p-2.5 rounded-xl bg-gold-500/10 border border-gold-500/30">
                    <span className="w-6 h-6 rounded-full bg-gold-400 text-black flex items-center justify-center text-xs font-bold">2</span>
                    <span>Speak & ask questions out loud</span>
                  </div>
                  <div className="flex items-center gap-3 p-2.5 rounded-xl bg-gold-500/10 border border-gold-500/30">
                    <span className="w-6 h-6 rounded-full bg-gold-400 text-black flex items-center justify-center text-xs font-bold">3</span>
                    <span>Interact & understand at own speed</span>
                  </div>
                  <div className="flex items-center gap-3 p-2.5 rounded-xl bg-gold-500/10 border border-gold-500/30">
                    <span className="w-6 h-6 rounded-full bg-gold-400 text-black flex items-center justify-center text-xs font-bold">4</span>
                    <span>Automatic notes & persistent memory</span>
                  </div>
                </div>
                <p className="text-xs text-gold-300/80 leading-relaxed font-light">
                  A personalized learning partner for deeper conceptual intuition and long-term retention.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Narrative & Creator (Pages 8-9 of PDF) */}
        <section className="py-16 md:py-20 bg-gradient-to-b from-[#07080e] to-[#0a0c16] border-b border-slate-800/80">
          <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8 space-y-12">
            {/* A Day in the Life */}
            <div className="p-8 sm:p-10 rounded-3xl bg-[#0e1122] border border-slate-700/80 shadow-xl">
              <span className="text-xs text-gold-400 uppercase tracking-widest font-bold font-heading block mb-2">
                Narrative Case Study
              </span>
              <h3 className="text-2xl font-heading font-extrabold text-white mb-4">
                A Day in the Life of an Edura XR Student
              </h3>
              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                <p>
                  It's a Tuesday afternoon, and a sixth grader is stuck on chemical bonds, again. They put on the headset and step into the classroom: yellow desks, a green chalkboard, a teacher already standing at the front of the room.
                </p>
                <p className="text-gold-300 font-medium italic border-l-2 border-gold-400 pl-4 py-1">
                  “Can you explain how chemical bonds work?” they ask, out loud, the way they'd ask a real teacher.
                </p>
                <p>
                  The question is picked up, turned into text, and understood by the AI behind the scenes. Within moments, the teacher answers: atoms “holding hands” to fill up their electron shells, carbon holding four hands at once, oxygen holding two. It's not exactly textbook wording, and that's the point.
                </p>
                <p>
                  The student asks a follow-up. Then another. By the end of the conversation, they've got a short set of revision notes to come back to later. Three weeks later, studying for a test, they put the headset back on and ask, “Do you remember when we talked about chemical bonds?” The system pulls up that earlier context, and the conversation picks up close to where it left off.
                </p>
              </div>
            </div>

            {/* The Ultimate Guiding Question */}
            <div className="text-center py-6">
              <span className="text-xs uppercase tracking-widest text-gold-400 font-bold font-heading block mb-2">
                Back to the Student
              </span>
              <p className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-white max-w-2xl mx-auto leading-relaxed">
                “Can the technology help a student understand something, remember it, and get a little more curious about what comes next?”
              </p>
              <p className="mt-3 text-xs text-slate-400 max-w-md mx-auto font-light">
                Everything else—the voice system, the 3D world, the language support, the memory, the notes—exists to serve that one question.
              </p>
            </div>

            {/* The Person Behind the Project */}
            <div className="p-8 rounded-3xl bg-[#0d1020] border-2 border-gold-500/30">
              <h4 className="text-xs uppercase tracking-widest text-gold-400 font-bold font-heading mb-3">
                The Person Behind the Project
              </h4>
              <AuthorBio
                name="Hassan Noor Soomro"
                role="Pakistani Game Developer, Creative Technologist & VR Teacher"
                bio="Founder of The 14Lights. His background covers Unreal Engine, Unity, AR and VR development, interactive media, game development, and teaching VR—a mix that brings together the technical work of building immersive systems with the hands-on experience of helping people learn through technology."
                avatarUrl={hassanProfileImg}
                linkedinUrl="https://pk.linkedin.com/company/the14lights"
                verifiedCredentials={[
                  "Founder & Architect of Edura XR",
                  "Unreal Engine & Unity VR Specialist",
                  "Creative Technologist & VR Teacher",
                  "Spatial Computing & AI Researcher",
                ]}
                specialties={[
                  "Edura XR Virtual Classrooms",
                  "Standalone VR Engineering",
                  "Pedagogical AI Dialogue",
                  "Spatial Computing",
                ]}
              />
            </div>
          </div>
        </section>

        {/* Section 7: Media Kit & LinkedIn Announcement (Page 10 of PDF) */}
        <section className="py-16 md:py-20 bg-[#06070c] border-b border-slate-800/80">
          <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="p-8 rounded-3xl bg-gradient-to-b from-[#121526] to-[#0a0c16] border border-slate-700 shadow-xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div>
                  <span className="text-xs text-gold-400 uppercase tracking-widest font-bold font-heading block mb-1">
                    Press & Community Package
                  </span>
                  <h3 className="text-xl sm:text-2xl font-heading font-bold text-white">
                    Official LinkedIn & Media Announcement
                  </h3>
                </div>
                <button
                  onClick={handleCopyAnnouncement}
                  className="px-5 py-2.5 rounded-xl bg-gold-500 hover:bg-gold-400 text-black font-heading font-bold text-xs flex items-center gap-2 transition cursor-pointer self-start sm:self-auto shadow-md"
                >
                  <i className={`fa-solid ${copiedAnnouncement ? 'fa-check' : 'fa-copy'}`}></i>
                  <span>{copiedAnnouncement ? 'Copied to Clipboard!' : 'Copy Announcement'}</span>
                </button>
              </div>

              <div className="p-5 rounded-2xl bg-black/60 border border-slate-800 text-slate-300 text-xs sm:text-sm font-sans leading-relaxed whitespace-pre-line font-light">
                {linkedInAnnouncementText}
              </div>

              <div className="mt-6 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-400">
                <span>
                  <strong>One-Sentence Description:</strong> Edura XR is an immersive AI classroom for Meta Quest devices, where students talk naturally with a 3D virtual teacher instead of typing into a chatbot.
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 8: Subscription Form Section */}
        <section id="subscribe" className="py-18 md:py-24 relative overflow-hidden bg-[#07080f] border-b border-slate-800/80">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(212,175,55,0.08)_0%,_transparent_70%)] pointer-events-none"></div>

          <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
            <div className="rounded-3xl p-[1px] bg-gradient-to-b from-gold-500/40 via-slate-700/50 to-gold-500/20 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.9),0_0_40px_rgba(212,175,55,0.1)]">
              <div className="rounded-[23px] bg-gradient-to-b from-[#141829] via-[#0f111e] to-[#090b14] p-8 sm:p-12 md:p-14 relative overflow-hidden backdrop-blur-2xl">
                <div className="text-center max-w-2xl mx-auto mb-10">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/15 border border-gold-400/40 text-gold-300 text-xs font-bold uppercase tracking-widest mb-3 font-heading">
                    <i className="fa-solid fa-envelope-open-text text-gold-400"></i> Edura XR VIP Dispatch
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-white tracking-tight leading-tight">
                    Join the Journey on <span className="text-gradient-gold">Immersive Learning</span>
                  </h2>
                  <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed font-light">
                    Subscribe to receive future Edura XR classroom updates, Meta Quest closed-beta playtests, and Unreal Engine technical reports directly from Hassan Noor Soomro and The 14Lights team.
                  </p>
                </div>

                {status === 'success' ? (
                  <div className="p-8 rounded-2xl bg-gradient-to-b from-[#182035] to-[#0f1322] border-2 border-gold-400 text-center shadow-[0_0_35px_rgba(212,175,55,0.2)]">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-gold-400 to-amber-400 text-black flex items-center justify-center mx-auto text-2xl mb-4 font-bold shadow-lg shadow-gold-500/40">
                      <i className="fa-solid fa-check"></i>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2 font-heading">
                      Welcome to the Edura XR Dispatch, {formData.name}!
                    </h3>
                    <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed font-light">
                      We've reserved your subscriber spot with <strong className="text-gold-300">{formData.email}</strong>. Look out for our upcoming feature releases and Meta Quest App Lab beta links!
                    </p>
                    <button
                      onClick={() => {
                        setStatus('idle');
                        setFormData({ name: '', email: '', interests: ['eduraxr', 'beta'] });
                      }}
                      className="mt-6 px-6 py-2.5 rounded-xl border border-gold-400 text-gold-300 text-xs font-heading font-bold hover:bg-gold-500 hover:text-black transition cursor-pointer"
                    >
                      Register Another Email
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubscribe} className="space-y-6">
                    {/* Category Interest Pills */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-3 text-center sm:text-left font-heading">
                        Select Topics of Interest:
                      </label>
                      <div className="flex flex-wrap gap-2.5 justify-center sm:justify-start">
                        {[
                          { id: 'eduraxr', label: '🎓 Edura XR Classrooms', desc: 'AI Teacher in VR' },
                          { id: 'beta', label: '🎮 Meta Quest Closed Betas', desc: 'App Lab playtests' },
                          { id: 'nlp', label: '🗣️ Bilingual Voice & Memory', desc: 'Pedagogical AI models' },
                          { id: 'dev', label: '🚀 Dev Logs', desc: 'Unreal Engine 5 & systems' },
                        ].map((interest) => {
                          const isSelected = formData.interests.includes(interest.id);
                          return (
                            <button
                              key={interest.id}
                              type="button"
                              onClick={() => toggleInterest(interest.id)}
                              className={`px-4 py-2.5 rounded-xl text-xs font-medium border transition-all duration-200 flex items-center gap-2 cursor-pointer font-heading ${
                                isSelected
                                  ? 'bg-gradient-to-r from-gold-500/25 to-amber-500/15 border-gold-400 text-gold-200 shadow-[0_0_15px_rgba(212,175,55,0.25)] font-semibold'
                                  : 'bg-[#0c0e1a] border-slate-800 text-slate-300 hover:border-slate-700 hover:text-white'
                              }`}
                            >
                              <span
                                className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] ${
                                  isSelected
                                    ? 'bg-gold-400 text-black font-bold shadow-sm'
                                    : 'border border-slate-600 bg-slate-800'
                                }`}
                              >
                                {isSelected ? '✓' : ''}
                              </span>
                              {interest.label}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Input Fields */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="subscriber-name"
                          className="block text-xs font-semibold text-slate-200 uppercase tracking-wider mb-2 font-heading flex items-center gap-1.5"
                        >
                          <i className="fa-solid fa-user text-gold-400 text-[10px]"></i> Your Name
                        </label>
                        <input
                          id="subscriber-name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Hassan Noor"
                          className="w-full px-4 py-3.5 rounded-xl bg-[#090b15] border border-slate-700/90 text-white placeholder-slate-400 focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-400/30 text-sm font-medium"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="subscriber-email"
                          className="block text-xs font-semibold text-slate-200 uppercase tracking-wider mb-2 font-heading flex items-center gap-1.5"
                        >
                          <i className="fa-solid fa-envelope text-gold-400 text-[10px]"></i> Email Address
                        </label>
                        <input
                          id="subscriber-email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="name@organization.com"
                          className="w-full px-4 py-3.5 rounded-xl bg-[#090b15] border border-slate-700/90 text-white placeholder-slate-400 focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-400/30 text-sm font-medium"
                        />
                      </div>
                    </div>

                    {status === 'error' && (
                      <div className="p-3.5 rounded-xl bg-red-950/40 border border-red-500/50 text-red-300 text-xs flex items-center gap-2 font-heading">
                        <i className="fa-solid fa-circle-exclamation text-red-400"></i>
                        <span>{errorMessage}</span>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full py-4 px-8 rounded-xl font-heading font-bold text-base bg-gradient-to-r from-gold-400 via-amber-400 to-gold-500 text-black hover:from-gold-300 hover:to-amber-300 shadow-[0_4px_25px_rgba(212,175,55,0.35)] transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-3 cursor-pointer"
                    >
                      {status === 'submitting' ? (
                        <>
                          <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                          <span>Confirming Subscription...</span>
                        </>
                      ) : (
                        <>
                          <span>Subscribe to Edura XR Dispatches</span>
                          <i className="fa-solid fa-arrow-right text-xs"></i>
                        </>
                      )}
                    </button>

                    <p className="text-center text-xs text-slate-400 font-light flex items-center justify-center gap-2">
                      <i className="fa-solid fa-shield-halved text-gold-400 text-xs"></i>
                      <span>100% Free • No Spam • Unsubscribe Anytime</span>
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Section 9: FAQ Section */}
        <section className="py-18 md:py-24 bg-gradient-to-b from-[#080912] to-[#06070b] border-b border-slate-800/80">
          <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-xs text-gold-400 uppercase tracking-widest font-bold font-heading block mb-2">
                Knowledge Base
              </span>
              <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-white">
                Frequently Asked Questions
              </h3>
            </div>

            <div className="space-y-4">
              {EDURA_XR_FAQS.map((faq, idx) => {
                const isOpen = expandedFaq === idx;
                return (
                  <div
                    key={idx}
                    className={`rounded-2xl border transition-all duration-200 overflow-hidden shadow-lg ${
                      isOpen
                        ? 'bg-gradient-to-b from-[#15192c] to-[#0e101c] border-gold-500/50'
                        : 'bg-gradient-to-b from-[#121422] to-[#0a0c16] border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setExpandedFaq(isOpen ? null : idx)}
                      className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                    >
                      <h4 className="font-bold text-white text-base flex items-center gap-3 font-heading">
                        <span className="w-6 h-6 rounded-full bg-gold-500/20 text-gold-400 text-xs flex items-center justify-center font-bold border border-gold-500/30">
                          Q
                        </span>
                        {faq.question}
                      </h4>
                      <i
                        className={`fa-solid fa-chevron-down text-gold-400 text-xs transition-transform duration-200 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      ></i>
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-6 pt-1 text-sm text-slate-300 leading-relaxed font-light border-t border-slate-800/80">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#05060a] border-t border-slate-800/80 py-16" id="footer">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="inline-flex items-center gap-4 text-left">
                <div className="w-14 h-14 rounded-2xl overflow-hidden flex items-center justify-center p-2 bg-white ring-2 ring-gold-400/40 shadow-lg">
                  <picture className="w-full h-full flex items-center justify-center">
                    <source srcSet="/assets/VR_LOGO.webp" type="image/webp" />
                    <img
                      src="/assets/VR_LOGO.webp"
                      alt="The 14 Lights Logo"
                      width={56}
                      height={56}
                      loading="lazy"
                      className="w-full h-full object-contain"
                    />
                  </picture>
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-white tracking-wide">
                    The<span className="text-gold-500"> 14 Lights</span>
                  </h3>
                  <p className="text-sm text-slate-400">Edura XR • AI • Games • Spatial Education</p>
                </div>
              </div>
              <p className="text-slate-400 text-sm max-w-md mt-6 leading-relaxed font-light">
                Engineering immersive AI classrooms and interactive gaming experiences on Unreal Engine 5, Meta Quest, and WebGL.
              </p>
            </div>

            <div className="flex flex-col gap-3 lg:items-end">
              <h4 className="text-xs uppercase tracking-widest text-gold-400 font-bold font-heading">
                Explore
              </h4>
              <div className="flex flex-wrap gap-4 text-sm text-slate-300">
                <button onClick={() => onNavigate('home')} className="hover:text-gold-400 transition cursor-pointer">
                  Home
                </button>
                <button onClick={() => onNavigate('blog')} className="hover:text-gold-400 transition cursor-pointer">
                  Technical Blog
                </button>
                <button onClick={() => onNavigate('newsletter')} className="text-gold-400 font-bold cursor-pointer">
                  Edura XR Newsletter
                </button>
                <button onClick={() => onNavigate('privacy')} className="hover:text-gold-400 transition cursor-pointer">
                  Privacy Policy
                </button>
              </div>
              <p className="text-xs text-slate-500 mt-4">
                © {new Date().getFullYear()} The 14 Lights. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
