import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Write-ups // 0xPSW",
  description: "CTF and box write-ups from HackTheBox, TryHackMe, and more.",
};

interface Writeup {
  name: string;
  platform: string;
  difficulty: "Easy" | "Medium" | "Hard" | "Insane" | "Info";
  summary: string;
  completed: boolean;
}

const htbWriteups: Writeup[] = [
  {
    name: "CCTV",
    platform: "HTB",
    difficulty: "Easy",
    summary:
      "Default creds on ZoneMinder → CVE-2024-51482 Boolean SQLi → credentials dumped → SSH → motionEye command injection → root",
    completed: true,
  },
  {
    name: "WingData",
    platform: "HTB",
    difficulty: "Easy",
    summary: "HackTheBox machine write-up",
    completed: true,
  },
];

const thmChallengeBoxes: Writeup[] = [
  {
    name: "Mr Robot CTF",
    platform: "THM",
    difficulty: "Medium",
    summary:
      "Web fuzzing → WordPress reverse shell → credential reuse → Nmap SUID privesc → root",
    completed: true,
  },
  {
    name: "Kenobi",
    platform: "THM",
    difficulty: "Easy",
    summary:
      "Samba enumeration → ProFTPD mod_copy → SSH key steal → SUID binary privesc → root",
    completed: true,
  },
  {
    name: "Blue",
    platform: "THM",
    difficulty: "Easy",
    summary: "EternalBlue MS17-010 → SYSTEM shell",
    completed: true,
  },
  {
    name: "RootMe",
    platform: "THM",
    difficulty: "Easy",
    summary: "Web upload bypass → reverse shell → SUID privesc → root",
    completed: true,
  },
  {
    name: "Pickle Rick",
    platform: "THM",
    difficulty: "Easy",
    summary:
      "Web enumeration → command injection → privilege escalation → root",
    completed: true,
  },
  {
    name: "Lian_Yu",
    platform: "THM",
    difficulty: "Easy",
    summary: "Steganography → FTP creds → SSH → pkexec privesc → root",
    completed: true,
  },
  {
    name: "OhSINT",
    platform: "THM",
    difficulty: "Easy",
    summary: "OSINT challenge — EXIF data → social media → geolocation",
    completed: true,
  },
  {
    name: "OWASP Juice Shop",
    platform: "THM",
    difficulty: "Easy",
    summary: "Web app exploitation — SQLi, XSS, broken access control",
    completed: true,
  },
  {
    name: "Basic Pentesting",
    platform: "THM",
    difficulty: "Easy",
    summary: "Enumeration → brute force → SSH → Linux privesc",
    completed: true,
  },
  {
    name: "Corridor",
    platform: "THM",
    difficulty: "Easy",
    summary: "IDOR vulnerability exploitation via hash manipulation",
    completed: true,
  },
  {
    name: "Neighbour",
    platform: "THM",
    difficulty: "Easy",
    summary: "IDOR — access control bypass via parameter manipulation",
    completed: true,
  },
  {
    name: "W1seGuy",
    platform: "THM",
    difficulty: "Easy",
    summary: "Crypto challenge — XOR key recovery → flag decryption",
    completed: true,
  },
  {
    name: "Compiled",
    platform: "THM",
    difficulty: "Easy",
    summary: "Compiled binary analysis challenge",
    completed: true,
  },
  {
    name: "Valenfind",
    platform: "THM",
    difficulty: "Medium",
    summary: "TryHackMe seasonal challenge room",
    completed: true,
  },
];

const thmLearningPaths = [
  {
    phase: "Phase 1 — Foundation",
    rooms: 33,
    topics:
      "Linux/Windows fundamentals, networking, Nmap, Wireshark, Tcpdump, DNS, first CVEs",
  },
  {
    phase: "Phase 2 — Web Attacks",
    rooms: 15,
    topics:
      "HTTP, Burp Suite, SQLMap, XSS, IDOR, Auth Bypass, OWASP Top 10 2025",
  },
  {
    phase: "Phase 3 — Exploitation",
    rooms: 8,
    topics:
      "Metasploit trilogy, Meterpreter, John the Ripper, password attacks",
  },
  {
    phase: "Phase 5 — Active Directory",
    rooms: 1,
    topics: "AD Basics (head start)",
  },
  {
    phase: "Cryptography",
    rooms: 3,
    topics: "Crypto basics, public key, hashing",
  },
  {
    phase: "SOC / Blue Team",
    rooms: 2,
    topics: "Junior Security Analyst, SOC role",
  },
  {
    phase: "Advent of Cyber 2025",
    rooms: 24,
    topics:
      "IDOR, XSS, malware analysis, YARA, containers, AWS, forensics, C2 detection",
  },
  {
    phase: "Pre-Security & General",
    rooms: 4,
    topics: "Computer fundamentals, Vim, becoming a hacker",
  },
];

const difficultyColor: Record<string, string> = {
  Easy: "text-green",
  Medium: "text-yellow",
  Hard: "text-red",
  Insane: "text-red",
  Info: "text-cyan",
};

export default function WriteupsPage() {
  const totalThmRooms = thmLearningPaths.reduce((sum, p) => sum + p.rooms, 0);

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-2xl font-bold text-green text-glow mb-2">
        /writeups
      </h1>
      <p className="text-sm text-muted mb-12">
        CTF and box write-ups — full attack chain methodology from
        reconnaissance to root.
      </p>

      {/* HTB Section */}
      <section className="mb-12">
        <h2 className="text-xs text-muted mb-4 uppercase tracking-widest">
          // hackthebox — {htbWriteups.length} boxes
        </h2>
        <div className="space-y-2">
          {htbWriteups.map((w) => (
            <WriteupRow key={w.name} writeup={w} />
          ))}
        </div>
      </section>

      {/* THM Challenge Boxes */}
      <section className="mb-12">
        <h2 className="text-xs text-muted mb-4 uppercase tracking-widest">
          // tryhackme challenge boxes — {thmChallengeBoxes.length} completed
        </h2>
        <div className="space-y-2">
          {thmChallengeBoxes.map((w) => (
            <WriteupRow key={w.name} writeup={w} />
          ))}
        </div>
      </section>

      {/* THM Learning Progress */}
      <section className="mb-12">
        <h2 className="text-xs text-muted mb-4 uppercase tracking-widest">
          // tryhackme learning paths — {totalThmRooms} walkthrough rooms + 14
          challenge boxes = 101 total
        </h2>
        <div className="space-y-2">
          {thmLearningPaths.map((path) => (
            <div
              key={path.phase}
              className="flex items-start gap-4 border border-border rounded-lg px-4 py-3 bg-card"
            >
              <div className="flex items-center gap-2 shrink-0 w-56">
                <span className="text-sm text-foreground font-medium">
                  {path.phase}
                </span>
              </div>
              <span className="text-xs text-green shrink-0 w-20">
                {path.rooms} rooms
              </span>
              <span className="text-xs text-muted truncate">
                {path.topics}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* AOC */}
      <section>
        <h2 className="text-xs text-muted mb-4 uppercase tracking-widest">
          // advent of cyber 2025
        </h2>
        <div className="border border-border rounded-lg px-4 py-3 bg-card">
          <div className="flex items-center gap-3">
            <span className="text-cyan text-xs">[THM]</span>
            <span className="text-sm text-foreground font-medium">
              Advent of Cyber 2025 — 24 rooms completed
            </span>
            <span className="text-green text-xs ml-auto">✅</span>
          </div>
          <p className="text-xs text-muted mt-1">
            Cross-topic coverage: IDOR, XSS, malware analysis, YARA rules,
            container security, AWS enumeration, registry forensics, C2
            detection, race conditions, and more.
          </p>
        </div>
      </section>
    </div>
  );
}

function WriteupRow({ writeup }: { writeup: Writeup }) {
  return (
    <div className="flex items-start gap-4 border border-border rounded-lg px-4 py-3 bg-card hover:border-green/30 transition-colors">
      <div className="flex items-center gap-2 shrink-0 w-40">
        <span className="text-xs text-cyan">[{writeup.platform}]</span>
        <span className="text-sm text-foreground font-medium">
          {writeup.name}
        </span>
      </div>
      <span
        className={`text-xs shrink-0 w-14 ${difficultyColor[writeup.difficulty] || "text-muted"}`}
      >
        {writeup.difficulty}
      </span>
      <span className="text-xs text-muted truncate">{writeup.summary}</span>
      <span className="text-green text-xs ml-auto shrink-0">
        {writeup.completed ? "✅" : "⏳"}
      </span>
    </div>
  );
}
