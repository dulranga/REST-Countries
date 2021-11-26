import { AppProps, NextWebVitalsMetric } from "next/app";
import "../styles/animations.scss";
import "../styles/globals.scss";
import "../styles/variables.globals.scss";

const reportWebVitals = (metric: NextWebVitalsMetric) => {
  console.log(metric);
};

const NextApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export { reportWebVitals };
export default NextApp;
