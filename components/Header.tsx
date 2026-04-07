import { bio, socialLinks } from "@/lib/data";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="flex flex-col gap-5 py-16">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://github.com/nikita-gounder.png"
            alt="Nikita Gounder"
            className="h-16 w-16 rounded-full border-2 border-zinc-300 dark:border-zinc-700"
          />
          <div>
            <h1 className="text-2xl font-bold text-zinc-900 dark:text-white">
              Nikita Gounder
            </h1>
            <p className="text-base text-zinc-500 dark:text-zinc-400">
              Health Data Science · UCSF
            </p>
          </div>
        </div>
        <ThemeToggle />
      </div>

      <p className="max-w-2xl text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
        {bio}
      </p>

      <div className="flex gap-4 text-base">
        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
          >
            {link.label} ↗
          </a>
        ))}
      </div>
    </header>
  );
}
