import { Html, Head, Main, NextScript } from "next/document";
import PageNavbar from "./components/PageNavbar";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <PageNavbar />

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
