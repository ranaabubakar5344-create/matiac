import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Programmes | EduQual Levels 3, 4 & 5 | Metaverse Age Dubai training institute",
  description:
    "Explore KHDA-approved EduQual Level 3, 4 & 5 programmes in Business, Psychology, Cyber Security and Creative Computing at Metaverse Age Dubai.",
};

export default function ProgrammesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
