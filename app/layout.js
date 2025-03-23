import Layout from "./Components/Layout/Layout";
import "./globals.css";
import { yekan } from "./utils/font";

export const metadata = {
  title: "ایران | ابزار",
  description: "سایت خرید و فروش ابزار",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body
        className={`${yekan.className} `}
      >
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
