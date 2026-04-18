import Image from "next/image";

interface Badge {
  title: string;
  description: string;
  image: string;
  rarity: "common" | "rare";
  rarityPercent: number;
}

const badges: Badge[] = [
  {
    title: "Chaos Reigns",
    description: "Persistence pays: Awarded for overcoming league adversity",
    image: "https://assets.tryhackme.com/img/badges/leagues-chaos.png",
    rarity: "rare",
    rarityPercent: 0.1,
  },
  {
    title: "Mr. Robot",
    description: "Completing the Mr. Robot room",
    image: "https://assets.tryhackme.com/img/badges/mrrobot.png",
    rarity: "rare",
    rarityPercent: 3.4,
  },
  {
    title: "Advent of Cyber 2025",
    description: "Completing Advent of Cyber 2025!",
    image: "https://assets.tryhackme.com/img/badges/advent-of-cyber-2025.png",
    rarity: "rare",
    rarityPercent: 4.6,
  },
  {
    title: "OhSINT",
    description: "Completing the OhSINT room",
    image: "https://assets.tryhackme.com/img/badges/ohsint.png",
    rarity: "rare",
    rarityPercent: 5.5,
  },
  {
    title: "Shield Apprentice",
    description: "Completing the FlareVM room",
    image: "https://assets.tryhackme.com/img/badges/shieldapprentice.png",
    rarity: "rare",
    rarityPercent: 5.7,
  },
  {
    title: "First Alert Closed",
    description: "Closing your first alert",
    image:
      "https://assets.tryhackme.com/img/badges/soc-sim-first-alert-closed.png",
    rarity: "rare",
    rarityPercent: 6.7,
  },
  {
    title: "Sword Apprentice",
    description: "Completing the SQLMap room",
    image: "https://assets.tryhackme.com/img/badges/swordapprentice.png",
    rarity: "rare",
    rarityPercent: 6.8,
  },
  {
    title: "Cyber Ready",
    description: "Understanding impact of training on teams",
    image: "https://assets.tryhackme.com/img/badges/careerready.png",
    rarity: "rare",
    rarityPercent: 7.9,
  },
  {
    title: "OWASP Top 10",
    description: "Understanding every OWASP vulnerability",
    image: "https://assets.tryhackme.com/img/badges/owasptop10.png",
    rarity: "rare",
    rarityPercent: 9.9,
  },
  {
    title: "Metasploitable",
    description: "Contains the knowledge to use Metasploit",
    image: "https://assets.tryhackme.com/img/badges/metasploit.png",
    rarity: "common",
    rarityPercent: 10.1,
  },
  {
    title: "Pentesting Principles",
    description: "Completing the Introduction to Pentesting module",
    image:
      "https://assets.tryhackme.com/img/badges/introtooffensivesecurity.png",
    rarity: "common",
    rarityPercent: 10.5,
  },
  {
    title: "30 Day Streak",
    description: "Hacking for 30 days solid",
    image: "https://assets.tryhackme.com/img/badges/streak30.png",
    rarity: "common",
    rarityPercent: 10.9,
  },
  {
    title: "Blue",
    description: "Hacking into Windows via EternalBlue",
    image: "https://assets.tryhackme.com/img/badges/blue.png",
    rarity: "common",
    rarityPercent: 11.5,
  },
  {
    title: "Networking Nerd",
    description: "Completing the Network Fundamentals module",
    image: "https://assets.tryhackme.com/img/badges/networkfundamentals.png",
    rarity: "common",
    rarityPercent: 19.1,
  },
  {
    title: "World Wide Web",
    description: "Completing the How The Web Works module",
    image: "https://assets.tryhackme.com/img/badges/howthewebworks.png",
    rarity: "common",
    rarityPercent: 22.5,
  },
  {
    title: "7 Day Streak",
    description: "Achieving a 7 day hacking streak",
    image: "https://assets.tryhackme.com/img/badges/streak7.png",
    rarity: "common",
    rarityPercent: 22.6,
  },
  {
    title: "Webbed",
    description: "Understands how the world wide web works",
    image: "https://assets.tryhackme.com/img/badges/webbed.png",
    rarity: "common",
    rarityPercent: 25.4,
  },
  {
    title: "cat linux.txt",
    description: "Being competent in Linux",
    image: "https://assets.tryhackme.com/img/badges/linux.png",
    rarity: "common",
    rarityPercent: 31.7,
  },
  {
    title: "3 Day Streak",
    description: "Achieving a 3 day hacking streak",
    image: "https://assets.tryhackme.com/img/badges/streak3.png",
    rarity: "common",
    rarityPercent: 34.7,
  },
];

export function ThmBadges() {
  return (
    <div>
      {/* Profile Stats */}
      <div className="flex flex-wrap items-center gap-4 mb-6 text-sm">
        <a
          href="https://tryhackme.com/p/pyaesonewin"
          target="_blank"
          rel="noopener noreferrer"
          className="terminal-link text-green font-bold"
        >
          tryhackme.com/p/pyaesonewin
        </a>
        <span className="text-muted">·</span>
        <span className="text-foreground">
          Top <span className="text-green font-bold">4%</span>
        </span>
        <span className="text-muted">·</span>
        <span className="text-foreground">
          <span className="text-cyan font-bold">127</span> rooms
        </span>
        <span className="text-muted">·</span>
        <span className="text-foreground">
          <span className="text-yellow font-bold">19</span> badges
        </span>
        <span className="text-muted">·</span>
        <span className="text-foreground">
          🔥 <span className="text-red font-bold">25</span> day streak
        </span>
        <span className="text-muted">·</span>
        <span className="text-foreground">
          💎 <span className="text-cyan font-bold">Sapphire</span> league
        </span>
      </div>

      {/* Badge Grid */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3">
        {badges.map((badge) => (
          <div
            key={badge.title}
            className={`group relative flex flex-col items-center gap-2 border rounded-lg p-3 bg-card transition-colors ${
              badge.rarity === "rare"
                ? "border-yellow/30 hover:border-yellow/60"
                : "border-border hover:border-green/30"
            }`}
          >
            <Image
              src={badge.image}
              alt={badge.title}
              width={48}
              height={48}
              className="drop-shadow-lg"
            />
            <span className="text-[10px] text-center text-foreground leading-tight">
              {badge.title}
            </span>
            <span
              className={`text-[9px] ${badge.rarity === "rare" ? "text-yellow" : "text-muted"}`}
            >
              {badge.rarity === "rare" ? "★ " : ""}
              {badge.rarityPercent}%
            </span>

            {/* Tooltip */}
            <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 hidden group-hover:block z-10 w-48 p-2 bg-background border border-border rounded text-[10px] text-muted text-center shadow-lg">
              {badge.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
