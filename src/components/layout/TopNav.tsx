"use client";

import Link from "next/link";
import { LanguageSwitcher } from "@/components/i18n/LanguageSwitcher";
import { useLanguage } from "@/components/i18n/LanguageProvider";

export function TopNav() {
  const { t } = useLanguage();

  return (
    <header className="border-b border-border/60 h-16 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/80">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold text-lg tracking-tight text-primary">
              {t('nav.brand')}
            </span>
          </Link>
        </div>
        <div className="flex items-center space-x-4">
           <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}