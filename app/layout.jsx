import "./globals.css"



export const metadata = {
  title: "Goal Betting - Premium Sports Casino",
  description:
    "Experience the ultimate sports betting and casino gaming platform with extraordinary 3D animations and premium user experience.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='antialiased'>
      <body className="font-sans">
        <div className="min-h-screen bg-gradient-to-br from-background via-background to-slate-900">{children}</div>
      </body>
    </html>
  )
}
