import React, { useMemo } from 'react';
import hassanProfileImg from '../assets/profile.png';

export interface AuthorBioProps {
  name?: string;
  role?: string;
  bio?: string;
  avatarUrl?: string;
  linkedinUrl?: string;
  githubUrl?: string;
  email?: string;
  verifiedCredentials?: string[];
  specialties?: string[];
  articleCount?: number;
  className?: string;
}

export const AuthorBio: React.FC<AuthorBioProps> = ({
  name = 'Hassan Noor Soomro',
  role = 'Founder & System Designer',
  bio = 'Founder and Lead System Designer at The 14Lights. Pioneer in AI-driven immersive education (eduraXR), real-time game architecture, and spatial computing simulation frameworks. Directing multiplatform co-publishing, game distribution, and enterprise XR research.',
  avatarUrl = hassanProfileImg,
  linkedinUrl = 'https://pk.linkedin.com/company/the14lights',
  githubUrl = 'https://github.com/the14lights',
  email = 'hello@the14lights.com',
  verifiedCredentials = [
    'Founder & Lead System Designer',
    'Creator & Architect of eduraXR',
    'Unreal Engine 5 & OpenXR Specialist',
    'Bilingual AI NLP Curriculum Pioneer',
  ],
  specialties = ['System Design', 'AI EdTech Architecture', 'Spatial Computing', 'Cross-Platform Game Dev', 'Unreal Engine 5'],
  articleCount,
  className = '',
}) => {
  // Generate Person Schema for E-E-A-T entity reconciliation
  const personSchema = useMemo(() => {
    return {
      '@context': 'https://schema.org',
      '@type': 'Person',
      '@id': `https://the14lights.com/authors/${name.toLowerCase().replace(/\s+/g, '-')}`,
      'name': name,
      'jobTitle': role,
      'description': bio,
      'image': avatarUrl.startsWith('http') ? avatarUrl : `https://the14lights.com${avatarUrl.startsWith('/') ? avatarUrl : `/${avatarUrl}`}`,
      'worksFor': {
        '@type': 'Organization',
        '@id': 'https://the14lights.com/#organization',
        'name': 'The 14Lights',
        'url': 'https://the14lights.com',
      },
      'knowsAbout': specialties,
      'sameAs': [linkedinUrl, githubUrl].filter(Boolean),
    };
  }, [name, role, bio, avatarUrl, specialties, linkedinUrl, githubUrl]);

  return (
    <aside
      className={`my-10 p-6 sm:p-8 md:p-10 rounded-3xl bg-gradient-to-b from-[#0b0c10] via-[#08080c] to-[#040406] border border-gold-500/25 shadow-[0_10px_35px_rgba(0,0,0,0.8)] relative overflow-hidden backdrop-blur-xl group transition-all duration-300 hover:border-gold-400/40 ${className}`}
      aria-label="Author Credentials & Expertise"
    >
      {/* Background Decorative Glow */}
      <div className="absolute top-0 right-0 w-56 h-56 bg-gold-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-gold-500/15 transition-all"></div>
      <div className="absolute bottom-0 left-0 w-44 h-44 bg-cyan-500/5 rounded-full blur-2xl pointer-events-none"></div>

      {/* Embedded Person Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      {/* Layout: Mobile stacked, Desktop side-by-side */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 md:gap-8 relative z-10">
        {/* Avatar with Gold Ambient Ring */}
        <div className="relative flex-shrink-0">
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden p-1.5 bg-gradient-to-br from-gold-400/40 via-white/10 to-transparent ring-2 ring-gold-400/30 shadow-xl group-hover:scale-105 transition-transform duration-300">
            <img
              src={avatarUrl}
              alt={`${name} - ${role}`}
              width={112}
              height={112}
              loading="lazy"
              className="w-full h-full object-cover rounded-xl bg-black"
              onError={(e) => {
                const target = e.currentTarget;
                if (!target.src.includes('HNS.png')) {
                  target.src = '/assets/HNS.png';
                } else if (!target.src.includes('hassan_noor_soomro.png')) {
                  target.src = '/assets/hassan_noor_soomro.png';
                } else if (!target.src.includes('VR_LOGO')) {
                  target.src = '/assets/VR_LOGO.webp';
                }
              }}
            />
          </div>
          {/* Verified Badge Icon */}
          <div
            className="absolute -bottom-2 -right-2 w-7 h-7 rounded-full bg-gold-500 text-black flex items-center justify-center text-xs font-bold shadow-md shadow-gold-500/30 ring-2 ring-black"
            title="Verified Technical Author"
          >
            <i className="fa-solid fa-check" aria-hidden="true"></i>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex-1 text-center sm:text-left">
          {/* Eyebrow & Status */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5 mb-1.5">
            <span className="text-[10px] uppercase font-bold tracking-widest text-gold-400 bg-gold-500/10 border border-gold-500/30 px-3 py-0.5 rounded-full">
              Verified Technical Authority
            </span>
            {articleCount !== undefined && (
              <span className="text-[10px] text-slate-400 bg-white/5 border border-white/10 px-2.5 py-0.5 rounded-full font-medium">
                {articleCount} Published Dispatches
              </span>
            )}
          </div>

          {/* Author Name & Title */}
          <h3 className="text-xl sm:text-2xl font-display font-extrabold text-white tracking-tight">
            {name}
          </h3>
          <p className="text-xs sm:text-sm font-medium text-gold-400/90 tracking-wide mt-0.5 mb-3">
            {role} • <span className="text-slate-400">The 14Lights</span>
          </p>

          {/* Author Bio Statement */}
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light mb-5">
            {bio}
          </p>

          {/* Verified Credentials Chips (E-E-A-T Badges) */}
          {verifiedCredentials && verifiedCredentials.length > 0 && (
            <div className="mb-5">
              <h4 className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2">
                Verified Architectural Credentials:
              </h4>
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                {verifiedCredentials.map((cred, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] font-medium px-2.5 py-1 rounded-lg bg-white/[0.04] text-slate-300 border border-white/10 hover:border-gold-400/40 hover:text-white transition flex items-center gap-1.5"
                  >
                    <span className="text-gold-400 font-bold">✓</span> {cred}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Outbound Profiles & Direct Verification Links */}
          <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs font-semibold">
            {linkedinUrl && (
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer author"
                className="text-slate-300 hover:text-gold-400 transition flex items-center gap-1.5 group/link"
              >
                <i className="fab fa-linkedin text-gold-400 group-hover/link:scale-110 transition-transform"></i>
                <span>LinkedIn Verification</span>
              </a>
            )}

            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer author"
                className="text-slate-300 hover:text-gold-400 transition flex items-center gap-1.5 group/link"
              >
                <i className="fab fa-github text-gold-400 group-hover/link:scale-110 transition-transform"></i>
                <span>Open-Source Repositories</span>
              </a>
            )}

            {email && (
              <a
                href={`mailto:${email}`}
                className="text-slate-300 hover:text-gold-400 transition flex items-center gap-1.5 group/link"
              >
                <i className="fa-solid fa-envelope text-gold-400 group-hover/link:scale-110 transition-transform"></i>
                <span>Technical Inquiries</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </aside>
  );
};
