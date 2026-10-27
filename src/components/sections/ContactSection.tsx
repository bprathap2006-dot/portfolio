import React, { useState } from 'react';
import { profileData } from '../../data/profileData';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Copy, 
  Check, 
  ArrowUpRight
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
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(profileData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(profileData.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

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
    } else if (formData.message.trim().length < 8) {
      newErrors.message = 'Message must be at least 8 characters.';
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
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSubmissionState('success');
        setStatusMessage('Message sent successfully. Thank you for reaching out!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Edge endpoint returned non-200');
      }
    } catch {
      setSubmissionState('fallback');
      setStatusMessage('Opening your email client to dispatch message...');
      
      const mailtoUrl = `mailto:${profileData.email}?subject=${encodeURIComponent(
        `[Portfolio Contact] ${formData.subject}`
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;

      setTimeout(() => {
        window.location.href = mailtoUrl;
      }, 700);
    }
  };

  return (
    <section id="contact" className="relative py-28 border-t border-[#E8E4DC] dark:border-[#232A3B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 block mb-2">
            08 &bull; Contact Array
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif italic text-[#18181B] dark:text-[#F4F4F5] tracking-tight">
            Let&apos;s connect and collaborate.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#52525B] dark:text-[#A1A1AA] leading-relaxed">
            I am actively seeking software developer internships, graduate roles, junior engineering positions, and research opportunities.
          </p>
        </div>

        {/* 2-Column Minimal & Attractive Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Communication Channels (Col 5) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-white dark:bg-[#161B26] border border-[#E8E4DC] dark:border-[#232A3B] shadow-editorial-md space-y-6">
              
              <div className="pb-3 border-b border-[#F0ECE4] dark:border-[#232A3B]">
                <h3 className="font-display font-bold text-lg text-[#18181B] dark:text-[#F4F4F5]">
                  Direct Channels
                </h3>
                <p className="text-xs text-[#71717A] dark:text-[#A1A1AA] mt-0.5">
                  Reach out directly via email, phone, or professional networks.
                </p>
              </div>

              {/* Email Block */}
              <div className="p-4 rounded-2xl bg-[#FBF9F5] dark:bg-[#0F1219] border border-[#E8E4DC] dark:border-[#232A3B] space-y-2">
                <div className="flex items-center justify-between text-xs text-[#71717A] dark:text-[#A1A1AA]">
                  <span className="flex items-center space-x-1.5 font-medium">
                    <Mail className="w-3.5 h-3.5 text-blue-600" />
                    <span>Email Address</span>
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="text-[11px] font-bold text-blue-600 hover:text-blue-700 dark:text-blue-400 flex items-center space-x-1"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-600" />
                        <span className="text-emerald-600">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copy Email</span>
                      </>
                    )}
                  </button>
                </div>

                <a
                  href={`mailto:${profileData.email}`}
                  className="font-mono text-sm font-semibold text-[#18181B] dark:text-[#F4F4F5] hover:text-blue-600 dark:hover:text-blue-400 transition-colors block truncate"
                  title="Click to draft email"
                >
                  {profileData.email}
                </a>
              </div>

              {/* Phone Block */}
              <div className="p-4 rounded-2xl bg-[#FBF9F5] dark:bg-[#0F1219] border border-[#E8E4DC] dark:border-[#232A3B] space-y-2">
                <div className="flex items-center justify-between text-xs text-[#71717A] dark:text-[#A1A1AA]">
                  <span className="flex items-center space-x-1.5 font-medium">
                    <Phone className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Direct Telephone</span>
                  </span>
                  <button
                    onClick={handleCopyPhone}
                    className="text-[11px] font-bold text-blue-600 hover:text-blue-700 dark:text-blue-400 flex items-center space-x-1"
                  >
                    {copiedPhone ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-600" />
                        <span className="text-emerald-600">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copy Phone</span>
                      </>
                    )}
                  </button>
                </div>

                <a
                  href={`tel:${profileData.phone.replace(/\s+/g, '')}`}
                  className="font-mono text-sm font-semibold text-[#18181B] dark:text-[#F4F4F5] hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors block"
                  title="Click to dial phone"
                >
                  {profileData.phone}
                </a>
              </div>

              {/* Location */}
              <div className="p-4 rounded-2xl bg-[#FBF9F5] dark:bg-[#0F1219] border border-[#E8E4DC] dark:border-[#232A3B] space-y-1">
                <span className="flex items-center space-x-1.5 text-xs text-[#71717A] dark:text-[#A1A1AA] font-medium">
                  <MapPin className="w-3.5 h-3.5 text-blue-600" />
                  <span>Base Location</span>
                </span>
                <span className="text-sm font-medium text-[#18181B] dark:text-[#F4F4F5] block">
                  {profileData.location}
                </span>
              </div>

              {/* Social Channels */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href={profileData.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center space-x-2 py-3 rounded-xl bg-[#F5F1EA] dark:bg-[#0F1219] hover:bg-[#E8E4DC] dark:hover:bg-[#1F2636] text-xs font-semibold text-[#18181B] dark:text-[#F4F4F5] border border-[#E8E4DC] dark:border-[#232A3B] transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3 h-3 text-[#71717A]" />
                </a>

                <a
                  href={profileData.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center space-x-2 py-3 rounded-xl bg-blue-50 dark:bg-blue-950/60 hover:bg-blue-100 dark:hover:bg-blue-900/60 text-xs font-semibold text-blue-700 dark:text-blue-300 border border-blue-200/80 dark:border-blue-900/60 transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4" />
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3 text-blue-500" />
                </a>
              </div>

            </div>
          </div>

          {/* Right Column: Message Dispatcher Form (Col 7) */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#161B26] border border-[#E8E4DC] dark:border-[#232A3B] shadow-editorial-md space-y-6">
              
              <div className="pb-3 border-b border-[#F0ECE4] dark:border-[#232A3B]">
                <h3 className="font-display font-bold text-lg text-[#18181B] dark:text-[#F4F4F5]">
                  Send a Direct Note
                </h3>
                <p className="text-xs text-[#71717A] dark:text-[#A1A1AA] mt-0.5">
                  I will review and reply to your inquiry promptly.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-[#18181B] dark:text-[#F4F4F5]">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Smith"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#FBF9F5] dark:bg-[#0F1219] border border-[#E8E4DC] dark:border-[#232A3B] text-sm text-[#18181B] dark:text-[#F4F4F5] placeholder:text-[#A1A1AA] focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                    />
                    {errors.name && (
                      <p className="text-xs text-rose-500">{errors.name}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-[#18181B] dark:text-[#F4F4F5]">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@company.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#FBF9F5] dark:bg-[#0F1219] border border-[#E8E4DC] dark:border-[#232A3B] text-sm text-[#18181B] dark:text-[#F4F4F5] placeholder:text-[#A1A1AA] focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                    />
                    {errors.email && (
                      <p className="text-xs text-rose-500">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#18181B] dark:text-[#F4F4F5]">
                    Subject *
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Software Developer Internship / Engineering Inquiry"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#FBF9F5] dark:bg-[#0F1219] border border-[#E8E4DC] dark:border-[#232A3B] text-sm text-[#18181B] dark:text-[#F4F4F5] placeholder:text-[#A1A1AA] focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                  />
                  {errors.subject && (
                    <p className="text-xs text-rose-500">{errors.subject}</p>
                  )}
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#18181B] dark:text-[#F4F4F5]">
                    Message *
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Briefly describe your team, opportunity, or message..."
                    className="w-full px-4 py-2.5 rounded-xl bg-[#FBF9F5] dark:bg-[#0F1219] border border-[#E8E4DC] dark:border-[#232A3B] text-sm text-[#18181B] dark:text-[#F4F4F5] placeholder:text-[#A1A1AA] focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all resize-none"
                  />
                  {errors.message && (
                    <p className="text-xs text-rose-500">{errors.message}</p>
                  )}
                </div>

                {/* Status Message */}
                {statusMessage && (
                  <div className={`p-3.5 rounded-xl text-xs font-medium ${
                    submissionState === 'success' 
                      ? 'bg-emerald-50 text-emerald-800 border border-emerald-200 dark:bg-emerald-950/60 dark:text-emerald-300 dark:border-emerald-900' 
                      : 'bg-blue-50 text-blue-800 border border-blue-200 dark:bg-blue-950/60 dark:text-blue-300 dark:border-blue-900'
                  }`}>
                    {statusMessage}
                  </div>
                )}

                {/* Submit Action */}
                <button
                  type="submit"
                  disabled={submissionState === 'sending'}
                  className="w-full sm:w-auto px-7 py-3.5 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-sm transition-all duration-200 flex items-center justify-center space-x-2 disabled:opacity-50 hover:-translate-y-0.5"
                >
                  <Send className="w-4 h-4" />
                  <span>
                    {submissionState === 'sending' ? 'Transmitting...' : 'Send Message'}
                  </span>
                </button>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
