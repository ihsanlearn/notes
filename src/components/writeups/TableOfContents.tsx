"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface TableOfContentsProps {
  items: {
    title: string
    url: string
    items?: {
      title: string
      url: string
    }[]
  }[]
}

export function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = React.useState<string>("")

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: "0% 0% -80% 0%" }
    )

    items.forEach((item) => {
      const element = document.getElementById(item.url.substring(1))
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [items])

  return (
    <nav className="space-y-4">
      <p className="font-semibold text-xs tracking-wider uppercase text-muted-foreground/80 mb-4 pl-3">
        Contents
      </p>
      <ul className="m-0 list-none space-y-2 pl-0">
        {items.map((item) => {
          const isActive = item.url === `#${activeId}`;
          return (
            <li key={item.url} className="relative">
              <a
                href={item.url}
                className={cn(
                  "block py-1 pl-3 text-sm transition-all duration-200 border-l-2",
                  isActive
                    ? "border-accent text-accent font-medium"
                    : "border-transparent text-muted-foreground hover:text-foreground hover:border-border"
                )}
              >
                {item.title}
              </a>
              {item.items?.length ? (
                <ul className="m-0 list-none space-y-2 pt-2">
                  {item.items.map((subItem) => {
                    const isSubActive = subItem.url === `#${activeId}`;
                    return (
                      <li key={subItem.url}>
                        <a
                          href={subItem.url}
                          className={cn(
                            "block py-1 pl-6 text-xs transition-all duration-200 border-l-2",
                            isSubActive
                              ? "border-accent text-accent font-medium"
                              : "border-transparent text-muted-foreground hover:text-foreground hover:border-border"
                          )}
                        >
                          {subItem.title}
                        </a>
                      </li>
                    )
                  })}
                </ul>
              ) : null}
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
