import NavBar from "@components/nav-bar";
import { AppProps, NextWebVitalsMetric } from "next/app";
import { ThemeProvider } from "src/providers/ThemeProvider";
import "../styles/animations.scss";
import "../styles/globals.scss";
import "../styles/variables.globals.scss";

const reportWebVitals = (metric: NextWebVitalsMetric) => {
  console.log(metric);
};

const CountryFind = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider>
      <NavBar />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export { reportWebVitals };
export default CountryFind;
