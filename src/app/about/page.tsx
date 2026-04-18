import type { Metadata } from "next";
import { StatCard } from "@/components/stat-card";
import { ThmBadges } from "@/components/thm-badges";

export const metadata: Metadata = {
  title: "About // 0xPSW",
  description:
    "Pyae Sone Win — Full-Stack Developer turned Penetration Tester. 9+ years building software, now learning to break it.",
};

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-2xl font-bold text-green text-glow mb-2">/about</h1>
      <p className="text-sm text-muted mb-12">
        The story behind the transition.
      </p>

      {/* Identity */}
      <section className="mb-12">
        <h2 className="text-xs text-muted mb-4 uppercase tracking-widest">
          // whoami
        </h2>
        <div className="border border-border rounded-lg p-6 bg-card space-y-4">
          <div className="text-lg font-bold text-foreground">
            Pyae Sone Win
          </div>
          <p className="text-sm text-foreground leading-relaxed">
            With over 9 years of professional experience as a Solution Architect
            and Full-Stack Developer in FinTech, I&apos;ve built e-commerce
            platforms, custom CMS implementations, robust APIs, and mobile
            applications across retail and education sectors.
          </p>
          <p className="text-sm text-foreground leading-relaxed">
            Now I&apos;m channeling that deep understanding of how software is
            built into learning how it breaks. My developer background gives me
            a unique edge in penetration testing — I understand the architecture,
            the frameworks, and the common shortcuts developers take.
          </p>
          <p className="text-sm text-green leading-relaxed">
            eJPT certified. Completed 101 TryHackMe rooms, nearly finished
            PortSwigger Web Security Academy, and actively working through HTB
            Web Penetration Tester modules. Currently targeting CWEE → OSWE
            certifications while hunting bugs on live programs.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="mb-12">
        <h2 className="text-xs text-muted mb-4 uppercase tracking-widest">
          // timeline
        </h2>
        <div className="space-y-3">
          <TimelineItem
            year="2024–Present"
            event="Offensive Security Transition"
            detail="eJPT certified, 101 THM rooms, PortSwigger Academy, HTB Web Pentester track, bug bounty (Luno, Bitso, Under Armour). Targeting CWEE → OSWE."
          />
          <TimelineItem
            year="Nov 2024 – Nov 2025"
            event="Full Stack Engineer — Evolution Payment Group (Thailand)"
            detail="Integrated payment wallets and banking systems with EDC devices. Built acquirer file processing, payout calculations, and payment reconciliation systems."
          />
          <TimelineItem
            year="Jan 2021 – Oct 2024"
            event="Solution Architect (Promoted) — Wave Money"
            detail="Designed enterprise architecture for fintech platforms — KYC systems, biller integrations, payment services. Built scalable CMS on AWS EKS with Kubernetes. Led biller management portal and real-time transaction APIs."
          />
          <TimelineItem
            year="May 2018 – Jan 2021"
            event="Freelance Full Stack Developer"
            detail="Delivered solutions for ConceptX (Lead Dev), Prudential (agent onboarding & payment), Resdi (PWA startup), and Bindez (social media listening with Facebook Graph API). Laravel, Vue, Nuxt, Next.js, Firebase."
          />
          <TimelineItem
            year="Sep 2017 – Jul 2018"
            event="Full Stack Developer — Softhatch"
            detail="Pogo Seat ticketing platform — chatbot booking with DialogFlow, ticket sync with third-party systems. 1Echo employee engagement dashboard in React.js."
          />
          <TimelineItem
            year="Jul 2015 – Oct 2017"
            event="Junior Full Stack Developer — New Westminster Institute"
            detail="CV management platform for 15-member team. Migrated CodeIgniter → Laravel 5.3. Built real-time chat feature with Android, Ajax, jQuery, REST."
          />
          <TimelineItem
            year="Achievements"
            event="Competitions & Community"
            detail="ACM ICPC Rank 10th in Asia (2017) · Angel Hack Hackathon 1st Runner Up (2018) · Phandeeyar Startup Challenge Winner (2019) · B.C.Sc Computer Science, UCSY"
          />
        </div>
      </section>

      {/* TryHackMe Badges */}
      <section className="mb-12">
        <h2 className="text-xs text-muted mb-4 uppercase tracking-widest">
          // tryhackme
        </h2>
        <ThmBadges />
      </section>

      {/* Skills */}
      <section className="mb-12">
        <h2 className="text-xs text-muted mb-6 uppercase tracking-widest">
          // skills
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <SkillBlock
            title="Offensive Security"
            skills={[
              "Network Penetration Testing",
              "Web Application Security",
              "Active Directory Attacks",
              "Privilege Escalation (Win/Linux)",
              "SQL Injection & XSS",
              "API Security Testing",
              "Bug Bounty Hunting",
            ]}
          />
          <SkillBlock
            title="Development Background"
            skills={[
              "PHP / Laravel",
              "JavaScript / TypeScript",
              "React.js / Vue.js / Node.js",
              "REST & GraphQL APIs",
              "AWS (Production Deployments)",
              "MySQL / MongoDB",
              "Docker / Git / CI/CD",
            ]}
          />
          <SkillBlock
            title="Tools"
            skills={[
              "Burp Suite",
              "Nmap / Masscan",
              "Metasploit Framework",
              "BloodHound / Certipy",
              "Wireshark",
              "John / Hashcat",
              "Gobuster / ffuf",
            ]}
          />
          <SkillBlock
            title="Platforms"
            skills={[
              "HackTheBox",
              "TryHackMe",
              "OSCP / PEN-200",
              "Kali Linux",
            ]}
          />
        </div>
      </section>

      {/* Stats */}
      <section className="mb-12">
        <h2 className="text-xs text-muted mb-4 uppercase tracking-widest">
          // numbers
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard value="9+" label="Years in Dev" />
          <StatCard value="101" label="THM Rooms" />
          <StatCard value="3" label="Bug Bounty Programs" />
          <StatCard value="14" label="Challenge Boxes" />
        </div>
      </section>

      {/* Contact */}
      <section>
        <h2 className="text-xs text-muted mb-4 uppercase tracking-widest">
          // contact
        </h2>
        <div className="border border-border rounded-lg p-6 bg-card">
          <div className="grid sm:grid-cols-2 gap-3 text-sm">
            <ContactLink
              label="github"
              href="https://github.com/mgmgpyaesonewin"
              display="mgmgpyaesonewin"
            />
            <ContactLink
              label="linkedin"
              href="https://www.linkedin.com/in/pyae-sone-win-63b4a3102/"
              display="pyae-sone-win"
            />
            <ContactLink
              label="twitter"
              href="https://twitter.com/Pyae_Sone_Win"
              display="@Pyae_Sone_Win"
            />
            <ContactLink
              label="tryhackme"
              href="https://tryhackme.com/p/PyaeSoneWin"
              display="PyaeSoneWin"
            />
            <ContactLink
              label="email"
              href="mailto:mgmgpyaesonewin@gmail.com"
              display="mgmgpyaesonewin@gmail.com"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function TimelineItem({
  year,
  event,
  detail,
}: {
  year: string;
  event: string;
  detail: string;
}) {
  return (
    <div className="flex gap-4 border border-border rounded-lg px-4 py-3 bg-card">
      <span className="text-xs text-cyan shrink-0 w-28 pt-0.5">{year}</span>
      <div>
        <div className="text-sm text-foreground font-medium">{event}</div>
        <div className="text-xs text-muted mt-0.5">{detail}</div>
      </div>
    </div>
  );
}

function SkillBlock({
  title,
  skills,
}: {
  title: string;
  skills: string[];
}) {
  return (
    <div className="border border-border rounded-lg p-4 bg-card">
      <h3 className="text-sm text-green font-bold mb-3">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="text-xs text-foreground border border-border rounded px-2 py-1"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

function ContactLink({
  label,
  href,
  display,
}: {
  label: string;
  href: string;
  display: string;
}) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-xs text-muted w-20">{label}:</span>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="terminal-link text-foreground text-xs"
      >
        {display}
      </a>
    </div>
  );
}
