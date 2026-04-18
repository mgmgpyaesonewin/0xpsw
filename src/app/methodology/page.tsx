import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Methodology // 0xPSW",
  description:
    "Penetration testing methodology notes — PEN-200 / OSCP prep covering recon through AD lateral movement.",
};

interface Topic {
  id: string;
  title: string;
}

interface Section {
  name: string;
  icon: string;
  topics: Topic[];
}

const sections: Section[] = [
  {
    name: "Reconnaissance & Enumeration",
    icon: "🔍",
    topics: [
      { id: "01", title: "Introduction to Ethical Hacking" },
      { id: "02", title: "Footprinting and Reconnaissance" },
      { id: "03", title: "Scanning Networks" },
      { id: "04", title: "Enumeration" },
      { id: "05", title: "Vulnerability Analysis" },
    ],
  },
  {
    name: "Exploitation",
    icon: "💥",
    topics: [
      { id: "06", title: "System Hacking" },
      { id: "13", title: "Hacking Web Servers" },
      { id: "14", title: "Hacking Web Applications" },
      { id: "15", title: "SQL Injection" },
      { id: "22", title: "Client-Side Attacks" },
      { id: "23", title: "Locating and Fixing Exploits" },
    ],
  },
  {
    name: "Post-Exploitation & Privilege Escalation",
    icon: "⬆️",
    topics: [
      { id: "26", title: "Windows Privilege Escalation" },
      { id: "27", title: "Linux Privilege Escalation" },
      { id: "25", title: "Password Attacks" },
      { id: "24", title: "Antivirus Evasion" },
      { id: "28", title: "Port Redirection and Tunneling" },
      { id: "29", title: "Metasploit Framework" },
    ],
  },
  {
    name: "Active Directory",
    icon: "🏢",
    topics: [
      { id: "30", title: "Active Directory Enumeration" },
      { id: "31", title: "Attacking AD Authentication" },
      { id: "32", title: "AD Lateral Movement" },
    ],
  },
  {
    name: "Specialized Attacks",
    icon: "📡",
    topics: [
      { id: "07", title: "Malware Threats" },
      { id: "08", title: "Sniffing" },
      { id: "09", title: "Social Engineering" },
      { id: "10", title: "Denial-of-Service" },
      { id: "11", title: "Session Hijacking" },
      { id: "12", title: "Evading IDS, Firewalls, and Honeypots" },
      { id: "16", title: "Hacking Wireless Networks" },
      { id: "17", title: "Hacking Mobile Platforms" },
      { id: "18", title: "IoT and OT Hacking" },
    ],
  },
  {
    name: "Infrastructure & Reporting",
    icon: "📝",
    topics: [
      { id: "19", title: "Cloud Computing" },
      { id: "20", title: "Cryptography" },
      { id: "21", title: "Report Writing" },
    ],
  },
];

export default function MethodologyPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-2xl font-bold text-green text-glow mb-2">
        /methodology
      </h1>
      <p className="text-sm text-muted mb-4">
        Penetration testing methodology and reference notes — structured around
        the PEN-200 / OSCP syllabus.
      </p>
      <p className="text-xs text-muted mb-12">
        32 topics covering the full attack lifecycle from reconnaissance to
        report writing.
      </p>

      <div className="space-y-8">
        {sections.map((section) => (
          <div key={section.name}>
            <h2 className="text-xs text-muted mb-3 uppercase tracking-widest">
              {section.icon} // {section.name}
            </h2>
            <div className="grid sm:grid-cols-2 gap-2">
              {section.topics.map((topic) => (
                <div
                  key={topic.id}
                  className="flex items-center gap-3 border border-border rounded-lg px-4 py-3 bg-card hover:border-green/30 transition-colors"
                >
                  <span className="text-xs text-cyan font-bold shrink-0">
                    {topic.id}
                  </span>
                  <span className="text-sm text-foreground">{topic.title}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
