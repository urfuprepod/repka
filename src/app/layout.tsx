import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Sans } from "next/font/google";
import "./globals.css";
import { SITE_NAME } from "@/constants/seo.constants";
import { ToastContainer } from "react-toastify";
import { ConfigProvider, Layout } from "antd";
import Header from "@/widgets/Header";
import "@ant-design/v5-patch-for-react-19";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import 'antd/dist/reset.css';


const zen = Noto_Sans({
  subsets: ["cyrillic", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-zen",
  style: ["normal"],
});

export const metadata: Metadata = {
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`, // %s - current page name
  },
  description: "Сайт медитации",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        {/* <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/antd@5.x/dist/reset.css"
          precedence="default"
        /> */}
      </head>
      <body className={zen.className}>
        <AntdRegistry>
          {" "}
          <ConfigProvider
            theme={{
              token: {
                colorPrimary: "#52c41a", // Зелёный цвет из палитры Ant Design
              },
              components: {
                Button: {
                  fontSize: 18,
                  paddingInline: 15,
                  paddingBlock: 20,
                  fontWeight: 500,
                },
                Typography: {
                  fontSize: 18,
                  fontWeightStrong: 700,
                },
              },
            }}
          >
            <Layout style={{ padding: "0 5px 20px", height: '100%', minHeight: '100dvh' }}>
              <Header />
              {children}
              <footer></footer>
            </Layout>
          </ConfigProvider>
          <ToastContainer
            position="top-center"
            autoClose={3000}
            hideProgressBar
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnHover
          />
        </AntdRegistry>
      </body>
    </html>
  );
}
