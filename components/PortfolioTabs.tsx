"use client";

import { useState, type ReactNode } from "react";

type Tab = "resume" | "projects";

export default function PortfolioTabs({
  resume,
  projects,
}: {
  resume: ReactNode;
  projects: ReactNode;
}) {
  const [activeTab, setActiveTab] = useState<Tab>("resume");

  return (
    <div>
      <div
        role="tablist"
        aria-label="Portfolio sections"
        className="mb-6 flex gap-2 border-b border-zinc-200 dark:border-zinc-800"
      >
        <button
          type="button"
          role="tab"
          aria-selected={activeTab === "resume"}
          onClick={() => setActiveTab("resume")}
          className={`border-b-2 px-4 py-3 text-sm font-medium transition-colors ${
            activeTab === "resume"
              ? "border-zinc-900 text-zinc-900 dark:border-white dark:text-white"
              : "border-transparent text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
          }`}
        >
          Education &amp; Experience
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={activeTab === "projects"}
          onClick={() => setActiveTab("projects")}
          className={`border-b-2 px-4 py-3 text-sm font-medium transition-colors ${
            activeTab === "projects"
              ? "border-zinc-900 text-zinc-900 dark:border-white dark:text-white"
              : "border-transparent text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
          }`}
        >
          Projects
        </button>
      </div>

      <div role="tabpanel">{activeTab === "resume" ? resume : projects}</div>
    </div>
  );
}
