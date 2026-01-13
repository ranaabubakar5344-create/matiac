import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Metaverse Age Training Institute",
  description:
    "Learn about Metaverse Age Training Institute Dubai, a KHDA-approved education provider offering EDUQUAL Level 3, 4 & 5 programmes with structured learning pathways.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
