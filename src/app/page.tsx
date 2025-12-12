"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/i18n/LanguageProvider";

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col h-[calc(100vh-64px)] items-center justify-center bg-background px-4 text-center">
      <div className="space-y-6 max-w-3xl">
        <h1 className="font-sans text-5xl font-extrabold tracking-tight text-primary sm:text-6xl md:text-7xl lg:text-8xl">
          {t('hero.title')}
        </h1>
        <p className="mx-auto max-w-[700px] text-xl text-muted-foreground md:text-2xl font-light leading-relaxed">
          {t('hero.subtitle')}
        </p>
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/writeups">
            <Button size="lg" className="h-12 px-8 text-lg rounded-full font-semibold">
              {t('hero.cta_read')}
            </Button>
          </Link>
          <Link href="https://iihn.fun" target="_blank">
            <Button variant="outline" size="lg" className="h-12 px-8 text-lg rounded-full">
              {t('hero.cta_about')}
            </Button>
          </Link>
        </div>
      </div>
      
      {/* Decorative background element */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)] opacity-[0.03]"></div>
    </div>
  );
}
