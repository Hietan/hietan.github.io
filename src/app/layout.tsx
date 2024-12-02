import localFonts from "next/font/local";
import Head from "next/head";

/*
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
*/

const fontHackGen35 = localFonts({
	src: [
		{
			path: "../public/fonts/HackGen/HackGen35ConsoleNF-Regular.woff2",
			weight: "normal",
			style: "normal",
		},
		{
			path: "../public/fonts/HackGen/HackGen35ConsoleNF-Bold.woff2",
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
			<Head>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<body className={fontHackGen35.className}>
				{children}
			</body>
		</html>
  );
}
