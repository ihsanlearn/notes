import { Badge } from "@/components/ui/badge";

interface TitleBlockProps {
  title: string;
  description: string;
  tags: string[];
  date: string;
  readTime: string;
}

export function TitleBlock({ title, description, tags, date, readTime }: TitleBlockProps) {
  return (
    <div className="mx-auto max-w-[800px] text-center space-y-6 pb-8 pt-8 md:pb-12 md:pt-12 lg:py-16">
      <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
        {tags.map((tag) => (
          <Badge 
            key={tag} 
            variant="secondary" 
            className="rounded-full px-3 py-1 text-xs font-medium border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80"
          >
            {tag}
          </Badge>
        ))}
      </div>
      
      <h1 className="font-sans text-4xl font-extrabold leading-tight tracking-tight text-primary md:text-5xl lg:text-6xl lg:leading-[1.1]">
        {title}
      </h1>
      
      <p className="mx-auto max-w-[700px] text-lg text-muted-foreground md:text-xl leading-relaxed">
        {description}
      </p>

      <div className="flex items-center justify-center gap-3 text-sm font-medium text-muted-foreground pt-4">
        <time dateTime={date}>{date}</time>
        <span className="w-1 h-1 rounded-full bg-muted-foreground/30"></span>
        <span>{readTime}</span>
      </div>
    </div>
  );
}
