"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgot Password", href: "/forgot-password" },
];

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      {navLinks.map((link) => {
        const isActive = pathname.startsWith(link.href);
        return <Link key={link.href} href={link.href} className={isActive ? "text-blue-500": "text-black-500"}>{link.name}</Link>;
      })}
      {children}
    </div>
  );
}
