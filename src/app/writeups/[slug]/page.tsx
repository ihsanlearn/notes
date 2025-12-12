import { getWriteupBySlug } from "@/lib/writeups";
import { notFound } from "next/navigation";
import { WriteupDetailView } from "@/components/writeups/WriteupDetailView";

interface WriteupPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function WriteupPage({ params }: WriteupPageProps) {
  const { slug } = await params;
  const writeup = getWriteupBySlug(slug);

  if (!writeup) {
    notFound();
  }

  return <WriteupDetailView writeup={writeup} />;
}

