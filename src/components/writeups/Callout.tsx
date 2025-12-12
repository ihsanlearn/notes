import { cn } from "@/lib/utils";
import { AlertCircle, Info, FileWarning } from "lucide-react";

interface CalloutProps {
  type?: "note" | "important" | "warning";
  title?: string;
  children?: React.ReactNode;
  className?: string;
}

export function Callout({ type = "note", title, children, className }: CalloutProps) {
  const icons = {
    note: Info,
    important: AlertCircle,
    warning: FileWarning,
  };

  const Icon = icons[type];
  
  const styles = {
    note: "bg-blue-50 text-blue-900 border-none",
    important: "bg-purple-50 text-purple-900 border-none",
    warning: "bg-amber-50 text-amber-900 border-none",
  };

  return (
    <div className={cn("my-8 rounded-lg p-6 text-[0.95rem] leading-7 shadow-sm ring-1 ring-inset ring-black/5", styles[type], className)}>
      <div className="flex items-center gap-2 font-bold mb-2 tracking-tight">
        <Icon className="h-4 w-4 opacity-70" />
        {title && <span className="uppercase text-xs">{title}</span>}
      </div>
      <div className="text-inherit opacity-90 font-sans">
        {children}
      </div>
    </div>
  );
}
