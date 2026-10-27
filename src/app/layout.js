import "./globals.css";
export const metadata = { title: "FamilyFriends 2.0", description: "Find your favorite dog breed" };
export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}</body></html>;
}
