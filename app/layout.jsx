import "./globals.css"

export const metadata = {
  title: "Goal Betting - Premium Sports Casino",
  description:
    "Experience the ultimate sports betting and casino gaming platform with extraordinary 3D animations and premium user experience.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="antialiased">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes" />
      </head>
      <body className="font-sans">
        <div className="min-h-screen bg-gradient-to-br from-background via-background to-slate-900 overflow-x-hidden">
          {children}
        </div>
      </body>
    </html>
  )
}
