import "./globals.css";
import type { Metadata } from "next";
import { Fira_Code, Goldman } from "next/font/google";
import Link from "next/link";

const fira_Code = Fira_Code({ subsets: ["latin"], weight: ["400"] });
const goldman = Goldman({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
	title: "ArchWare",
	description: "Software for Archery",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={`max-w-7xl mx-auto ${fira_Code.className}`}>
				<nav className="flex items-center justify-center px-16 py-4 border-b sm:justify-between">
					<h1 className={`${goldman.className} text-4xl`}>ArchWare</h1>
					<p className="hidden text-sm text-slate-500 sm:block">Software for Archery</p>
				</nav>
				{children}
			</body>
		</html>
	);
}
