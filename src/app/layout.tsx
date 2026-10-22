import type { Metadata, Viewport } from 'next';
import '../styles/globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://kwinitiations.com'),
  title: 'Kyle Warren · Modern Initiator',
  icons: { icon: '/assets/img/img-65792cd1c4.png' },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

const FONTS =
  'https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700' +
  '&family=Cormorant+Garamond:ital,wght@0,400;0,500;1,400;1,500;1,600' +
  '&family=Inter:wght@300;400;500;600;700&display=swap';

// Marks the page as script-enabled so scroll-reveal styles only hide content when JS can reveal it.
// Script-free snapshots (Affinity Website Builder import) keep every section visible.
const JS_FLAG = "document.documentElement.classList.add('js')";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: JS_FLAG }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href={FONTS} rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
