"use client";

import { getAllWriteups } from "@/lib/writeups";
import { WriteupCard } from "@/components/writeups/WriteupCard";
import { useLanguage } from "@/components/i18n/LanguageProvider";

export default function WriteupsPage() {
  const writeups = getAllWriteups();
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background pb-20 pt-10">
      <div className="container max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 space-y-4">
          <h1 className="text-3xl font-extrabold tracking-tight text-primary md:text-4xl">
            {t('writeups.page_title')}
          </h1>
          <p className="max-w-2xl text-lg text-muted-foreground">
            {t('writeups.page_subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {writeups.map((writeup) => (
            <WriteupCard key={writeup.id} writeup={writeup} />
          ))}
        </div>
      </div>
    </div>
  );
}
