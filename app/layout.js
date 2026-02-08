export const metadata = {
  title: 'adrian2e.org - The Raw Talent System Interface',
  description: 'Portal oficial de Adrian, uma criança Twice-Exceptional (2e) com talento nato para sistemas, linguagens e codificação de símbolos.',
  keywords: ['adrian2e', 'twice-exceptional', '2e', 'raw talent', 'linguistics', 'coding', 'neurodiversity'],
  authors: [{ name: 'Adrian2e Team' }],
  openGraph: {
    title: 'adrian2e.org - The Raw Talent System',
    description: 'Innate Language: Coding the World',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body style={{ margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  )
}
