import "../styles/globals.css";
import NavBar from "./(navbar)/NavBar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body>
        <div className="absolute">
          <NavBar />
          
        </div>
        {children}
      </body>
    </html>
  );
}
