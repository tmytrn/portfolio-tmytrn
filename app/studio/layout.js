export const metadata = {
  title: 'Studio | TMYTRN LLC',
  robots: {
    index: false,
    follow: false,
  },
}

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body style={{margin: 0}}>{children}</body>
    </html>
  )
}
