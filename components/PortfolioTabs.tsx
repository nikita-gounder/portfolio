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
        className="mb-6 inline-flex rounded-full border border-zinc-200 bg-zinc-50 p-1 dark:border-zinc-800 dark:bg-zinc-900"
      >
        <button
          type="button"
          role="tab"
          aria-selected={activeTab === "resume"}
          onClick={() => setActiveTab("resume")}
          className={`rounded-full px-6 py-3 text-base font-medium transition-colors ${
            activeTab === "resume"
              ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900"
              : "text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
          }`}
        >
          Education &amp; Experience
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={activeTab === "projects"}
          onClick={() => setActiveTab("projects")}
          className={`rounded-full px-6 py-3 text-base font-medium transition-colors ${
            activeTab === "projects"
              ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900"
              : "text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
          }`}
        >
          Projects
        </button>
      </div>

      <div role="tabpanel">{activeTab === "resume" ? resume : projects}</div>
    </div>
  );
}
