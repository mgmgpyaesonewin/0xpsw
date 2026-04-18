"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { BootSequence } from "@/components/boot-sequence";
import { StatCard } from "@/components/stat-card";

export default function Home() {
  const [bootComplete, setBootComplete] = useState(false);
  const handleBootComplete = useCallback(() => setBootComplete(true), []);

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      {/* Boot Sequence */}
      <section className="mb-16">
        <BootSequence onComplete={handleBootComplete} />
      </section>

      {/* Main Content - fades in after boot */}
      {bootComplete && (
        <div className="space-y-16 boot-line" style={{ animationDelay: "0ms" }}>
          {/* Hero */}
          <section>
            <h1 className="text-4xl font-bold text-green text-glow mb-4">
              0xPSW<span className="cursor-blink">_</span>
            </h1>
            <p className="text-lg text-foreground leading-relaxed max-w-2xl">
              I spent 9 years learning how to build software.
              <br />
              <span className="text-green">
                Now I&apos;m learning how to break it.
              </span>
            </p>
            <p className="text-sm text-muted mt-4 max-w-2xl">
              Full-Stack Developer turned Penetration Tester. I write about
              offensive security, publish CTF write-ups, and document bug bounty
              methodology — understanding how attacks work to build better
              defences.
            </p>
          </section>

          {/* Stats */}
          <section>
            <h2 className="text-xs text-muted mb-4 uppercase tracking-widest">
              // stats
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <StatCard value="2" label="HTB Boxes" />
              <StatCard value="127" label="THM Rooms" />
              <StatCard value="19" label="THM Badges" />
              <StatCard value="Top 4%" label="THM Rank" />
            </div>
          </section>

          {/* Sections */}
          <section>
            <h2 className="text-xs text-muted mb-6 uppercase tracking-widest">
              // navigate
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <SectionCard
                href="/writeups"
                title="writeups"
                description="HackTheBox, TryHackMe, and other platform write-ups with full attack chain methodology."
                tag="offensive"
              />
              <SectionCard
                href="/bug-bounty"
                title="bug-bounty"
                description="Real-world bug bounty research on Luno, Bitso, and Under Armour — API testing, GraphQL, IDOR."
                tag="research"
              />
              <SectionCard
                href="/methodology"
                title="methodology"
                description="PEN-200 / OSCP prep notes covering recon through AD lateral movement. 32 topics."
                tag="reference"
              />
              <SectionCard
                href="/about"
                title="about"
                description="9+ years full-stack dev → pentester. The story, the certs, the journey."
                tag="personal"
              />
            </div>
          </section>

          {/* Recent Write-ups */}
          <section>
            <h2 className="text-xs text-muted mb-4 uppercase tracking-widest">
              // recent write-ups
            </h2>
            <div className="space-y-2">
              <WriteupRow
                name="CCTV"
                platform="HTB"
                difficulty="Easy"
                summary="Default creds → ZoneMinder SQLi → credential dump → SSH → motionEye command injection → root"
              />
              <WriteupRow
                name="WingData"
                platform="HTB"
                difficulty="Easy"
                summary="HackTheBox machine write-up"
              />
              <WriteupRow
                name="Mr Robot CTF"
                platform="THM"
                difficulty="Medium"
                summary="Web fuzzing → WordPress reverse shell → credential reuse → Nmap SUID privesc → root"
              />
              <WriteupRow
                name="Kenobi"
                platform="THM"
                difficulty="Easy"
                summary="Samba enumeration → ProFTPD mod_copy → SSH key steal → SUID binary privesc → root"
              />
              <WriteupRow
                name="Blue"
                platform="THM"
                difficulty="Easy"
                summary="EternalBlue MS17-010 → SYSTEM shell"
              />
              <WriteupRow
                name="Pickle Rick"
                platform="THM"
                difficulty="Easy"
                summary="Web enumeration → command injection → privilege escalation → root"
              />
            </div>
          </section>
        </div>
      )}
    </div>
  );
}

function SectionCard({
  href,
  title,
  description,
  tag,
}: {
  href: string;
  title: string;
  description: string;
  tag: string;
}) {
  return (
    <Link
      href={href}
      className="group block border border-border rounded-lg p-5 bg-card hover:border-green/40 transition-all"
    >
      <div className="flex items-center justify-between mb-2">
        <span className="text-green font-bold group-hover:text-glow">
          /{title}
        </span>
        <span className="text-[10px] text-muted border border-border rounded px-2 py-0.5">
          {tag}
        </span>
      </div>
      <p className="text-xs text-muted leading-relaxed">{description}</p>
    </Link>
  );
}

function WriteupRow({
  name,
  platform,
  difficulty,
  summary,
}: {
  name: string;
  platform: string;
  difficulty: string;
  summary: string;
}) {
  const difficultyColor: Record<string, string> = {
    Easy: "text-green",
    Medium: "text-yellow",
    Hard: "text-red",
    Insane: "text-red",
  };

  return (
    <div className="flex items-start gap-4 border border-border rounded-lg px-4 py-3 bg-card hover:border-green/30 transition-colors">
      <div className="flex items-center gap-2 shrink-0 w-32">
        <span className="text-xs text-cyan">[{platform}]</span>
        <span className="text-sm text-foreground font-medium">{name}</span>
      </div>
      <span
        className={`text-xs shrink-0 w-14 ${difficultyColor[difficulty] || "text-muted"}`}
      >
        {difficulty}
      </span>
      <span className="text-xs text-muted truncate">{summary}</span>
      <span className="text-green text-xs ml-auto shrink-0">✅</span>
    </div>
  );
}
