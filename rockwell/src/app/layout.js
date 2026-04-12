import Navbar from "./components/navbar";


export const metadata = {
  title: "Rockwell Security",
  description: "Top Commercial and Residential security company",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
        <body>
          <Navbar />
          {children}
        </body>

      
    </html>
  );
}
