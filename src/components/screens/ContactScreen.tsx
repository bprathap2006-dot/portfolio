import React, { useState } from 'react';
import { useGame } from '../../context/GameContext';
import { soundEngine } from '../../utils/soundEngine';
import { profileData } from '../../data/profileData';
import { 
  ArrowLeft, 
  Radio, 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Copy, 
  Check, 
  ExternalLink, 
  CheckCircle2, 
  AlertCircle
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/BrandIcons';

export const ContactScreen: React.FC = () => {
  const { navigateTo } = useGame();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [submissionState, setSubmissionState] = useState<'idle' | 'transmitting' | 'success' | 'fallback'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleCopyEmail = () => {
    soundEngine.playSuccess();
    navigator.clipboard.writeText(profileData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = 'Please enter your name.';
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email address.';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Please enter a subject.';
    if (!formData.message.trim()) {
      newErrors.message = 'Please write a message.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters.';
    }
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const vErrors = validate();
    if (Object.keys(vErrors).length > 0) {
      setErrors(vErrors);
      return;
    }

    setErrors({});
    setSubmissionState('transmitting');
    soundEngine.playSelect();

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        soundEngine.playSuccess();
        setSubmissionState('success');
        setStatusMessage('PACKET CONFIRMED: Transmission received at edge endpoint.');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Edge endpoint unavailable');
      }
    } catch {
      setSubmissionState('fallback');
      setStatusMessage('Direct Edge endpoint offline. Launching email client dispatch...');
      const mailtoUrl = `mailto:${profileData.email}?subject=${encodeURIComponent(
        `[NEXUS CONTACT] ${formData.subject}`
      )}&body=${encodeURIComponent(
        `From: ${formData.name} (${formData.email})\n\n${formData.message}`
      )}`;
      setTimeout(() => {
        window.location.href = mailtoUrl;
      }, 700);
    }
  };

  return (
    <div className="relative min-h-[92vh] pt-20 pb-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in font-sans">
      
      {/* Sector Header with Back Button */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-rose-900/40 mb-8">
        <div>
          <div className="flex items-center space-x-2 text-xs font-mono text-rose-400 mb-1">
            <span className="w-2 h-2 rounded-full bg-rose-400 animate-pulse" />
            <span>SECTOR 08 // [0x83_COMM]</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
            CONTACT PORTAL: <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-pink-300 to-amber-300">Direct Transmission Array</span>
          </h1>
        </div>

        <button
          onClick={() => { soundEngine.playSelect(); navigateTo('/'); }}
          className="self-start sm:self-auto flex items-center space-x-2 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-cyan-300 border border-slate-700 hover:border-cyan-500 font-mono text-xs transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>RETURN TO WORLD MAP</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Direct Communication Telemetry (Col 5) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-6 sm:p-7 rounded-3xl bg-[#0b0812] border border-rose-500/30 shadow-xl space-y-5">
            
            <div className="flex items-center justify-between pb-3 border-b border-slate-800 font-mono text-xs text-rose-400">
              <span className="flex items-center space-x-2">
                <Radio className="w-4 h-4 animate-pulse" />
                <span>DIRECT CHANNELS</span>
              </span>
              <span className="text-emerald-400 font-bold">[ONLINE]</span>
            </div>

            {/* Email Channel */}
            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
              <div className="flex items-center justify-between">
                <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider flex items-center space-x-1.5">
                  <Mail className="w-3.5 h-3.5 text-rose-400" />
                  <span>PRIMARY EMAIL</span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="flex items-center space-x-1 text-[11px] font-mono text-cyan-400 hover:text-cyan-300"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
              <a 
                href={`mailto:${profileData.email}`}
                className="text-sm font-mono text-slate-200 hover:text-rose-300 transition-colors block truncate"
              >
                {profileData.email}
              </a>
            </div>

            {/* Phone Channel */}
            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-1">
              <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider flex items-center space-x-1.5">
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>PHONE LINE</span>
              </div>
              <a 
                href={`tel:${profileData.phone.replace(/\s+/g, '')}`}
                className="text-sm font-mono text-slate-200 hover:text-emerald-300 transition-colors block"
              >
                {profileData.phone}
              </a>
            </div>

            {/* Location */}
            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-1">
              <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider flex items-center space-x-1.5">
                <MapPin className="w-3.5 h-3.5 text-violet-400" />
                <span>BASE LOCATION</span>
              </div>
              <div className="text-sm font-mono text-slate-200">
                {profileData.location}
              </div>
            </div>

            {/* Social Direct Links */}
            <div className="pt-2 flex flex-col gap-2 font-mono text-xs">
              <a
                href={profileData.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-violet-500/50 flex items-center justify-between text-slate-300 hover:text-white transition-colors"
              >
                <div className="flex items-center space-x-2">
                  <GithubIcon className="w-4 h-4 text-violet-400" />
                  <span>github.com/{profileData.githubUsername}</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
              </a>

              <a
                href={profileData.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-blue-500/50 flex items-center justify-between text-slate-300 hover:text-white transition-colors"
              >
                <div className="flex items-center space-x-2">
                  <LinkedinIcon className="w-4 h-4 text-blue-400" />
                  <span>linkedin.com/in/prathap-b</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
              </a>
            </div>

          </div>
        </div>

        {/* Right Column: Transmission Form (Col 7) */}
        <div className="lg:col-span-7">
          <form
            onSubmit={handleSubmit}
            noValidate
            className="p-6 sm:p-8 rounded-3xl bg-[#080d1a] border border-rose-500/30 shadow-2xl space-y-4"
          >
            <div className="pb-3 border-b border-slate-800 flex items-center justify-between font-mono text-xs">
              <span className="text-slate-200 font-bold">
                DISPATCH TRANSMISSION PACKET
              </span>
              <span className="text-[10px] text-rose-400">
                VERIFIED ROUTE
              </span>
            </div>

            {/* Status alerts */}
            {submissionState === 'success' && (
              <div className="p-3.5 rounded-xl bg-emerald-950/80 border border-emerald-500 text-xs font-mono text-emerald-300 flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                <span>{statusMessage}</span>
              </div>
            )}
            {submissionState === 'fallback' && (
              <div className="p-3.5 rounded-xl bg-amber-950/80 border border-amber-500 text-xs font-mono text-amber-300 flex items-center space-x-2">
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                <span>{statusMessage}</span>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="contact-screen-name" className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-1">
                  Your Name *
                </label>
                <input
                  id="contact-screen-name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Elena Rostova"
                  className={`w-full px-4 py-2.5 rounded-xl bg-slate-900 border text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-rose-400 ${
                    errors.name ? 'border-red-500' : 'border-slate-800'
                  }`}
                />
                {errors.name && <p className="text-[11px] font-mono text-red-400 mt-1">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="contact-screen-email" className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-1">
                  Your Email *
                </label>
                <input
                  id="contact-screen-email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="elena@organization.org"
                  className={`w-full px-4 py-2.5 rounded-xl bg-slate-900 border text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-rose-400 ${
                    errors.email ? 'border-red-500' : 'border-slate-800'
                  }`}
                />
                {errors.email && <p className="text-[11px] font-mono text-red-400 mt-1">{errors.email}</p>}
              </div>
            </div>

            <div>
              <label htmlFor="contact-screen-subject" className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-1">
                Subject *
              </label>
              <input
                id="contact-screen-subject"
                type="text"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                placeholder="Software Engineering Internship / AI Inquiry"
                className={`w-full px-4 py-2.5 rounded-xl bg-slate-900 border text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-rose-400 ${
                  errors.subject ? 'border-red-500' : 'border-slate-800'
                }`}
              />
              {errors.subject && <p className="text-[11px] font-mono text-red-400 mt-1">{errors.subject}</p>}
            </div>

            <div>
              <label htmlFor="contact-screen-message" className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-1">
                Message *
              </label>
              <textarea
                id="contact-screen-message"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Hello Prathap, I explored your NEXUS portfolio and would like to discuss..."
                className={`w-full px-4 py-2.5 rounded-xl bg-slate-900 border text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-rose-400 ${
                  errors.message ? 'border-red-500' : 'border-slate-800'
                }`}
              />
              {errors.message && <p className="text-[11px] font-mono text-red-400 mt-1">{errors.message}</p>}
            </div>

            <button
              type="submit"
              disabled={submissionState === 'transmitting'}
              className="w-full sm:w-auto px-7 py-3 rounded-xl font-mono text-xs font-bold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-rose-400 to-amber-300 hover:from-rose-300 hover:to-amber-200 transition-all flex items-center justify-center space-x-2 shadow-lg disabled:opacity-50"
            >
              <Send className="w-3.5 h-3.5" />
              <span>{submissionState === 'transmitting' ? 'DISPATCHING...' : 'DISPATCH TRANSMISSION'}</span>
            </button>

            <div className="pt-2 text-[10px] font-mono text-slate-500">
              * Client-validated form. If edge function is not bound, a pre-addressed email draft to bprathap2006@gmail.com will open immediately.
            </div>
          </form>
        </div>

      </div>

    </div>
  );
};
