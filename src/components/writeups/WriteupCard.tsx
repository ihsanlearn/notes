"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Writeup } from "@/lib/writeups";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { useLanguage } from "@/components/i18n/LanguageProvider";

interface WriteupCardProps {
  writeup: Writeup;
}

export function WriteupCard({ writeup }: WriteupCardProps) {
  const { language, t } = useLanguage();

  return (
    <Link href={`/writeups/${writeup.slug}`}>
      <Card className="h-full border-none shadow-sm hover:shadow-md transition-shadow duration-200 bg-card/50 cursor-pointer group">
        <CardHeader className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {writeup.tags.slice(0, 3).map((tag) => (
              <Badge 
                key={tag} 
                variant="secondary" 
                className="rounded-md px-2 py-0.5 text-xs font-normal bg-secondary/50 text-secondary-foreground"
              >
                {tag}
              </Badge>
            ))}
          </div>
          <CardTitle className="font-sans text-xl font-bold tracking-tight group-hover:text-primary transition-colors">
            {writeup.title[language]}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
            {writeup.description[language]}
          </p>
        </CardContent>
        <CardFooter className="text-xs text-muted-foreground mt-auto pt-4 flex items-center gap-2">
          <time dateTime={writeup.date}>{writeup.date}</time>
          <span>•</span>
          <span>{writeup.readTime} {t('writeups.read_time')}</span>
        </CardFooter>
      </Card>
    </Link>
  );
}
