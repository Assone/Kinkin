import "@/globals.css";

import type { AppProps } from "next/app";
import { Layout } from "../components/layout";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default App;
