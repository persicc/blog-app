import Navbar from "@/components/navbar/Navbar";
import "./globals.css";

export const metadata = {
  title: "Blog App",
  description: "Share with the world.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="container">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
