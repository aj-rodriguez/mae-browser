import './globals.css';

export const metadata = {
  title: 'MAE UCSD GitHub Edition',
  description: 'High-fidelity UCSD MAE website with GitHub aesthetic',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#010409] text-white">
        <div className="min-h-screen flex flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
