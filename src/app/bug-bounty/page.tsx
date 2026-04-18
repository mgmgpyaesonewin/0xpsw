import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Bug Bounty // 0xPSW",
  description:
    "Bug bounty research and methodology on FinTech, crypto, and e-commerce targets.",
};

interface Program {
  name: string;
  industry: string;
  scope: string[];
  status: "active" | "completed" | "in-progress";
}

const programs: Program[] = [
  {
    name: "Luno",
    industry: "FinTech / Crypto Exchange",
    scope: [
      "Financial APIs",
      "Account APIs",
      "Trading APIs",
      "Address APIs",
      "Market APIs",
    ],
    status: "in-progress",
  },
  {
    name: "Bitso",
    industry: "Crypto Exchange",
    scope: ["Reconnaissance", "API Security"],
    status: "in-progress",
  },
  {
    name: "Under Armour",
    industry: "E-Commerce / Retail",
    scope: [
      "GraphQL Testing",
      "Authentication",
      "Authorization & IDOR",
      "Business Logic",
      "Injection Vulnerabilities",
      "Client-Side Vulnerabilities",
    ],
    status: "in-progress",
  },
];

const statusBadge: Record<string, { text: string; color: string }> = {
  active: { text: "ACTIVE", color: "text-green border-green/30" },
  completed: { text: "DONE", color: "text-cyan border-cyan/30" },
  "in-progress": {
    text: "IN PROGRESS",
    color: "text-yellow border-yellow/30",
  },
};

export default function BugBountyPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-2xl font-bold text-green text-glow mb-2">
        /bug-bounty
      </h1>
      <p className="text-sm text-muted mb-12">
        Real-world bug bounty research — API security testing, GraphQL
        exploitation, authentication bypasses, and business logic flaws.
      </p>

      <div className="space-y-6">
        {programs.map((program) => {
          const badge = statusBadge[program.status];
          return (
            <div
              key={program.name}
              className="border border-border rounded-lg p-6 bg-card hover:border-green/30 transition-colors"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-lg font-bold text-foreground">
                    {program.name}
                  </h3>
                  <span className="text-xs text-muted">
                    {program.industry}
                  </span>
                </div>
                <span
                  className={`text-[10px] font-bold border rounded px-2 py-0.5 ${badge.color}`}
                >
                  {badge.text}
                </span>
              </div>

              <div className="mt-4">
                <span className="text-xs text-muted uppercase tracking-widest">
                  // scope
                </span>
                <div className="flex flex-wrap gap-2 mt-2">
                  {program.scope.map((item) => (
                    <span
                      key={item}
                      className="text-xs text-foreground border border-border rounded px-2 py-1 bg-background"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Methodology Note */}
      <div className="mt-12 border border-border rounded-lg p-5 bg-card">
        <h3 className="text-xs text-muted uppercase tracking-widest mb-3">
          // methodology
        </h3>
        <p className="text-sm text-foreground leading-relaxed">
          All testing follows responsible disclosure practices. Write-ups are
          sanitized — no active vulnerabilities, credentials, or proprietary
          information is published. Focus is on methodology and learning.
        </p>
      </div>
    </div>
  );
}
