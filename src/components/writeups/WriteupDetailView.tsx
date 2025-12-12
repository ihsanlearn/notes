"use client";

import { TitleBlock } from "@/components/writeups/TitleBlock";
import { TableOfContents } from "@/components/writeups/TableOfContents";
import { Callout } from "@/components/writeups/Callout";
import { Writeup } from "@/lib/writeups";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { ArrowLeftIcon } from "lucide-react";

interface WriteupDetailViewProps {
  writeup: Writeup;
}

export function WriteupDetailView({ writeup }: WriteupDetailViewProps) {
  const { language, t } = useLanguage();

  const tocItems = [
    { title: t('writeups.overview'), url: "#overview" },
    { title: t('writeups.scenario'), url: "#scenario" },
    { title: t('writeups.methodology'), url: "#methodology" },
    { title: t('writeups.analysis'), url: "#analysis" },
    { title: t('writeups.poc'), url: "#poc" },
    { title: t('writeups.mitigation'), url: "#mitigation" },
    { title: t('writeups.conclusion'), url: "#conclusion" },
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Editorial Header */}
      <section className="border-b border-border/40 bg-background pt-10 pb-10">
        <div className="container max-w-7xl px-4 sm:px-6 lg:px-8">
          <TitleBlock
            title={writeup.title[language]}
            description={writeup.description[language]}
            tags={writeup.tags}
            date={writeup.date}
            readTime={`${writeup.readTime} ${t('writeups.read_time')}`}
          />
        </div>
      </section>

      <div className="container max-w-7xl py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[240px_1fr] lg:gap-16 xl:gap-24">
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <TableOfContents items={tocItems} />
            </div>
          </aside>
          
          <main className="min-w-0 max-w-[740px] mx-auto">
            <div className="prose prose-lg prose-gray max-w-none">
              <section id="overview" className="scroll-m-20">
                 <div className="whitespace-pre-wrap">
                    {writeup.content?.[language]}
                 </div>
              </section>
              
              <div className="mt-8">
                <Callout type="note" title="Note">
                   {language === 'en' ? "This content is dynamically loaded from JSON." : "Konten ini dimuat secara dinamis dari JSON."}
                </Callout>
              </div>
            </div>
          </main>
        </div>
      </div>

      <div className="mt-12 flex">
        <button
          onClick={() => window.history.back()}
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm focus:translate-x-1 focus:translate-y-1"
        >
          <ArrowLeftIcon className="w-5 h-5 mr-2" />
          {t('common.back')}
        </button>
      </div>
    </div>
  );
}
