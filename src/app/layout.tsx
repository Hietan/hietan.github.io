import localFonts from "next/font/local";
import "@/styles/globals.scss";

const fontHackGen = localFonts({
	src: [
		{
			path: "../public/fonts/HackGen/HackGenConsoleNF-Regular.ttf",
			weight: "normal",
			style: "normal",
		},
		{
			path: "../public/fonts/HackGen/HackGenConsoleNF-Bold.ttf",
			weight: "bold",
			style: "normal",
		},
	],
	variable: "--font-hackgen",
});

const fontHackGen35 = localFonts({
	src: [
		{
			path: "../public/fonts/HackGen/HackGen35ConsoleNF-Regular.ttf",
			weight: "normal",
			style: "normal",
		},
		{
			path: "../public/fonts/HackGen/HackGen35ConsoleNF-Bold.ttf",
			weight: "bold",
			style: "normal",
		},
	],
	variable: "--font-hackgen35",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
		<html lang="ja">
			<body className={fontHackGen35.className}>
				{children}
			</body>
		</html>
  );
}
