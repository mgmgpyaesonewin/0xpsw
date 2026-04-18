export function Footer() {
  return (
    <footer className="border-t border-border py-6 px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted">
        <div>
          <span className="text-green">0xPSW</span> · handle: pyaesonewin ·
          MM // Remote
        </div>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/mgmgpyaesonewin"
            target="_blank"
            rel="noopener noreferrer"
            className="terminal-link text-muted"
          >
            github
          </a>
          <a
            href="https://www.linkedin.com/in/pyae-sone-win-63b4a3102/"
            target="_blank"
            rel="noopener noreferrer"
            className="terminal-link text-muted"
          >
            linkedin
          </a>
          <a
            href="https://tryhackme.com/p/PyaeSoneWin"
            target="_blank"
            rel="noopener noreferrer"
            className="terminal-link text-muted"
          >
            tryhackme
          </a>
          <a
            href="https://twitter.com/Pyae_Sone_Win"
            target="_blank"
            rel="noopener noreferrer"
            className="terminal-link text-muted"
          >
            twitter
          </a>
        </div>
      </div>
    </footer>
  );
}
