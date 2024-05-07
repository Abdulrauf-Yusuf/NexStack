import './globals.css'
// import { Raleway } from 'next/font/google'

// const raleway = Raleway({ subsets: ['latin'] })

export const metadata = {
  title: 'Nexstack',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
