import { Inter } from 'next/font/google'
import { AntdRegistry } from '@ant-design/nextjs-registry';
import Layout from './(components)/layouts';
import StoreProvider from "./(store)/StoreProvider";

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AntdRegistry>
          <StoreProvider>
            <Layout>{children}</Layout>
          </StoreProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
