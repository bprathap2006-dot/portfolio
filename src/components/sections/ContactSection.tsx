import React, { useState } from 'react';
import { profileData } from '../../data/profileData';
import { 
  Send, 
  Mail, 
  Phone, 
  MapPin, 
  CheckCircle2, 
  AlertCircle, 
  Terminal, 
  Radio,
  ExternalLink
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/BrandIcons';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submissionState, setSubmissionState] = useState<'idle' | 'sending' | 'success' | 'fallback'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your name.';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email format (e.g., name@domain.com).';
    }
    if (!formData.subject.trim()) {
      newErrors.subject = 'Please specify a subject.';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Please enter your message.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters.';
    }
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setSubmissionState('sending');

    try {
      // Attempt sending to local Cloudflare Pages Edge Function (/api/contact)
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSubmissionState('success');
        setStatusMessage('TRANSMISSION CONFIRMED: Message received via Edge API.');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        // Fallback to mailto draft creation
        throw new Error('Edge endpoint returned non-200');
      }
    } catch {
      // Graceful client fallback: open mailto with subject & message body pre-filled
      setSubmissionState('fallback');
      setStatusMessage('Direct Edge endpoint unavailable. Generating direct mail transmission link...');
      
      const mailtoUrl = `mailto:${profileData.email}?subject=${encodeURIComponent(
        `[NEXUS CONTACT] ${formData.subject}`
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;

      setTimeout(() => {
        window.location.href = mailtoUrl;
      }, 900);
    }
  };

  return (
    <section id="contact" className="relative py-20 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 font-mono text-xs tracking-wider mb-3">
            <Radio className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            <span>MODULE 08 // TRANSMISSION TERMINAL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-100 tracking-tight">
            Initiate Contact & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-amber-300">Direct Transmission</span>
          </h2>
          <p className="mt-3 text-slate-300 text-base leading-relaxed">
            Reach out regarding software developer internships, junior engineering roles, AI projects, or collaborative research.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Transmission Info Channels (Col 5) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-7 rounded-2xl bg-[#0a101e] border border-cyan-500/30 shadow-xl backdrop-blur-md space-y-6">
              
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs font-mono text-cyan-400">
                <span className="flex items-center space-x-2">
                  <Terminal className="w-4 h-4 text-cyan-400" />
                  <span>DIRECT CHANNELS // TELEMETRY</span>
                </span>
                <span className="text-emerald-400 font-semibold">[READY]</span>
              </div>

              {/* Direct Channels List */}
              <div className="space-y-4">
                
                {/* Email */}
                <a
                  href={`mailto:${profileData.email}`}
                  className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 transition-colors flex items-center space-x-3 group block"
                >
                  <div className="p-2.5 rounded-lg bg-cyan-950/60 text-cyan-400 group-hover:text-cyan-300 border border-cyan-800">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                      PRIMARY EMAIL ADDRESS
                    </div>
                    <div className="text-sm font-mono text-slate-200 group-hover:text-cyan-300 transition-colors truncate">
                      {profileData.email}
                    </div>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href={`tel:${profileData.phone.replace(/\s+/g, '')}`}
                  className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 transition-colors flex items-center space-x-3 group block"
                >
                  <div className="p-2.5 rounded-lg bg-emerald-950/60 text-emerald-400 group-hover:text-emerald-300 border border-emerald-800">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                      DIRECT PHONE LINE
                    </div>
                    <div className="text-sm font-mono text-slate-200 group-hover:text-emerald-300 transition-colors">
                      {profileData.phone}
                    </div>
                  </div>
                </a>

                {/* Location */}
                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center space-x-3">
                  <div className="p-2.5 rounded-lg bg-violet-950/60 text-violet-400 border border-violet-800">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                      GEOGRAPHIC LOCATION
                    </div>
                    <div className="text-sm font-mono text-slate-200">
                      {profileData.location}
                    </div>
                  </div>
                </div>

              </div>

              {/* Verified External Network Channels */}
              <div className="pt-4 border-t border-slate-800 space-y-2.5">
                <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-2">
                  VERIFIED NETWORK PROFILES
                </div>
                
                <a
                  href={profileData.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-[#070b14] border border-slate-800 hover:border-violet-500/60 flex items-center justify-between text-xs font-mono text-slate-300 hover:text-white transition-colors group"
                >
                  <div className="flex items-center space-x-2">
                    <GithubIcon className="w-4 h-4 text-violet-400" />
                    <span>github.com/{profileData.githubUsername}</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-violet-300" />
                </a>

                <a
                  href={profileData.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-[#070b14] border border-slate-800 hover:border-blue-500/60 flex items-center justify-between text-xs font-mono text-slate-300 hover:text-white transition-colors group"
                >
                  <div className="flex items-center space-x-2">
                    <LinkedinIcon className="w-4 h-4 text-blue-400" />
                    <span>linkedin.com/in/prathap-b</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-300" />
                </a>
              </div>

            </div>
          </div>

          {/* Right Column: Transmission Form (Col 7) */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              noValidate
              className="p-6 sm:p-8 rounded-2xl bg-[#090e1a]/90 border border-slate-800 backdrop-blur-md shadow-xl space-y-5"
            >
              <div className="pb-3 border-b border-slate-800 flex items-center justify-between">
                <span className="font-mono text-xs text-slate-300 font-semibold">
                  DISPATCH PACKET TRANSMISSION
                </span>
                <span className="text-[10px] font-mono text-cyan-400">
                  SECURE FORM // CLIENT VALIDATION
                </span>
              </div>

              {/* Status / Alert Banner */}
              {submissionState === 'success' && (
                <div className="p-3.5 rounded-xl bg-emerald-950/70 border border-emerald-500/50 flex items-center space-x-2 text-xs font-mono text-emerald-300 animate-fade-in">
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                  <span>{statusMessage}</span>
                </div>
              )}
              {submissionState === 'fallback' && (
                <div className="p-3.5 rounded-xl bg-amber-950/70 border border-amber-500/50 flex items-center space-x-2 text-xs font-mono text-amber-300 animate-fade-in">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  <span>{statusMessage}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-1.5">
                    Your Name *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl bg-slate-900/90 border font-sans text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-colors ${
                      errors.name ? 'border-red-500' : 'border-slate-800 focus:border-cyan-400'
                    }`}
                    placeholder="e.g. Alex Morgan"
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-red-400 font-mono">{errors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="contact-email" className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-1.5">
                    Your Email *
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl bg-slate-900/90 border font-sans text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-colors ${
                      errors.email ? 'border-red-500' : 'border-slate-800 focus:border-cyan-400'
                    }`}
                    placeholder="alex@company.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-400 font-mono">{errors.email}</p>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="contact-subject" className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-1.5">
                  Subject *
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className={`w-full px-4 py-3 rounded-xl bg-slate-900/90 border font-sans text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-colors ${
                    errors.subject ? 'border-red-500' : 'border-slate-800 focus:border-cyan-400'
                  }`}
                  placeholder="Internship Opportunity / Project Inquiry"
                />
                {errors.subject && (
                  <p className="mt-1 text-xs text-red-400 font-mono">{errors.subject}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="contact-message" className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-1.5">
                  Message *
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={`w-full px-4 py-3 rounded-xl bg-slate-900/90 border font-sans text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-colors ${
                    errors.message ? 'border-red-500' : 'border-slate-800 focus:border-cyan-400'
                  }`}
                  placeholder="Hello Prathap, I came across your portfolio and would like to discuss..."
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-red-400 font-mono">{errors.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={submissionState === 'sending'}
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-mono text-sm font-semibold tracking-wider uppercase text-slate-950 bg-gradient-to-r from-cyan-400 to-amber-300 hover:from-cyan-300 hover:to-amber-200 transition-all shadow-[0_0_20px_rgba(0,240,255,0.3)] disabled:opacity-50 flex items-center justify-center space-x-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                <Send className="w-4 h-4" />
                <span>
                  {submissionState === 'sending' ? 'TRANSMITTING...' : 'DISPATCH TRANSMISSION'}
                </span>
              </button>

              <div className="pt-2 text-[11px] font-mono text-slate-400 leading-normal">
                * Note: If running locally without an edge backend, clicking dispatch will launch your configured email client with a pre-formatted message draft addressed directly to Prathap.
              </div>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
