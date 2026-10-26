import React, { useState } from 'react';
import { profileData } from '../../data/profileData';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Copy, 
  Check, 
  CheckCircle2, 
  ArrowUpRight 
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/BrandIcons';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(profileData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(profileData.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Generate mailto link with entered subject and message
    const mailtoUrl = `mailto:${profileData.email}?subject=${encodeURIComponent(
      formData.subject || `Message from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;

    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="relative py-24 bg-[#faf9f6] border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-blue-600 mb-2">
            <span>// Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 tracking-tight">
            Let&apos;s Connect and Collaborate
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            I am actively seeking software engineering internships, junior software developer opportunities, and research collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-6xl">
          
          {/* Left Column: Direct Communication Coordinates (Col 5) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-soft-sm space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 text-slate-900 font-display font-bold text-sm">
                  <div className="p-1.5 rounded-lg bg-blue-50 text-blue-600">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span>Email Address</span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center space-x-1 text-xs text-blue-600 hover:text-blue-700 font-medium"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              <div>
                <a
                  href={`mailto:${profileData.email}`}
                  className="text-base font-semibold text-slate-900 hover:text-blue-600 transition-colors block break-all"
                >
                  {profileData.email}
                </a>
                <p className="text-xs text-slate-600 mt-1">
                  Primary contact for opportunities, recruiters, and engineering teams.
                </p>
              </div>
            </div>

            {/* Phone Card */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-soft-sm space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 text-slate-900 font-display font-bold text-sm">
                  <div className="p-1.5 rounded-lg bg-emerald-50 text-emerald-600">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span>Phone Number</span>
                </div>
                <button
                  onClick={handleCopyPhone}
                  className="inline-flex items-center space-x-1 text-xs text-blue-600 hover:text-blue-700 font-medium"
                  title="Copy phone to clipboard"
                >
                  {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedPhone ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              <div>
                <a
                  href={`tel:${profileData.phone.replace(/\s+/g, '')}`}
                  className="text-base font-semibold text-slate-900 hover:text-blue-600 transition-colors block"
                >
                  {profileData.phone}
                </a>
                <p className="text-xs text-slate-600 mt-1">
                  Available for telephone screening and technical interviews.
                </p>
              </div>
            </div>

            {/* Location & Profiles */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-soft-sm space-y-4">
              <div className="flex items-center space-x-2.5 text-xs text-slate-700">
                <MapPin className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <span>Base Location: <strong>{profileData.location}</strong></span>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-3">
                <a
                  href={profileData.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center space-x-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
                </a>

                <a
                  href={profileData.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center space-x-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4" />
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Direct Transmission Form (Col 7) */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-soft-md space-y-6">
              <div>
                <h3 className="text-xl font-display font-extrabold text-slate-900">
                  Send a Direct Message
                </h3>
                <p className="text-xs text-slate-600 mt-1 font-sans">
                  Fill in your details below to open a formatted draft in your default email client.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="block text-xs font-semibold text-slate-700">
                      Your Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="Recruiter or Engineering Lead"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#faf9f6] border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="email" className="block text-xs font-semibold text-slate-700">
                      Your Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#faf9f6] border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="subject" className="block text-xs font-semibold text-slate-700">
                    Subject / Role Opportunity
                  </label>
                  <input
                    id="subject"
                    type="text"
                    required
                    placeholder="Software Engineering Internship / Discussion"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#faf9f6] border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="block text-xs font-semibold text-slate-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    placeholder="Hello Prathap, I came across your portfolio and would like to connect regarding..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#faf9f6] border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all resize-none"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <button
                    type="submit"
                    className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold tracking-wide transition-all shadow-sm hover:shadow-soft-md hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                  >
                    <span>Send Message</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>

                  {formSubmitted && (
                    <span className="text-xs font-medium text-emerald-600 flex items-center space-x-1">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Opening your email client...</span>
                    </span>
                  )}
                </div>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
