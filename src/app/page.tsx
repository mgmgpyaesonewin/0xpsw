"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
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
          <section className="relative overflow-hidden rounded-[28px] border border-border/80 bg-card/85 px-6 py-8 md:px-10 md:py-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,255,65,0.14),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(0,217,255,0.10),transparent_32%),linear-gradient(140deg,rgba(17,17,17,0.98),rgba(10,10,10,0.94))]" />
            <div className="absolute -right-12 top-1/2 hidden h-80 w-80 -translate-y-1/2 opacity-12 md:block">
              <Image
                src="/images/avatar-02.png"
                alt="0xPSW avatar illustration"
                fill
                sizes="320px"
                className="object-contain blur-[1px]"
              />
            </div>

            <div className="relative grid gap-10 md:grid-cols-[minmax(0,1fr)_300px] md:items-center">
              <div>
                <p className="mb-4 text-[11px] uppercase tracking-[0.32em] text-cyan">
                  {"// operator profile"}
                </p>
                <h1 className="mb-4 text-4xl font-bold text-green text-glow md:text-5xl">
                  0xPSW<span className="cursor-blink">_</span>
                </h1>
                <p className="max-w-2xl text-lg leading-relaxed text-foreground">
                  I spent 9 years learning how to build software.
                  <br />
                  <span className="text-green">
                    Now I&apos;m learning how to break it.
                  </span>
                </p>
                <p className="mt-4 max-w-2xl text-sm text-muted">
                  Full-Stack Developer turned Penetration Tester. I write about
                  offensive security, publish CTF write-ups, and document bug
                  bounty methodology — understanding how attacks work to build
                  better defences.
                </p>
              </div>

              <div className="relative mx-auto w-full max-w-[300px]">
                <div className="absolute inset-8 rounded-full bg-green/15 blur-3xl" />
                <div className="relative rounded-[24px] border border-green/25 bg-[#09091b]/92 p-3 shadow-[0_0_40px_rgba(0,255,65,0.08)]">
                  <div className="mb-3 flex items-center justify-between text-[10px] uppercase tracking-[0.28em] text-muted">
                    <span>identity</span>
                    <span>online</span>
                  </div>
                  <div className="relative aspect-square overflow-hidden rounded-[18px] border border-border bg-[#070713]">
                    <Image
                      src="/images/avatar-02.png"
                      alt="0xPSW avatar illustration"
                      fill
                      priority
                      sizes="(min-width: 768px) 300px, 80vw"
                      className="object-cover object-center"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Stats */}
          <section>
            <h2 className="text-xs text-muted mb-4 uppercase tracking-widest">
              {"// stats"}
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
              {"// navigate"}
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
              {"// recent write-ups"}
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
