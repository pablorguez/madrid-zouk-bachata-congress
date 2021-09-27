import '../styles/globals.css';
import { IntlProvider } from 'react-intl';
import translations from '../translations';
import Layout from '../containers/Layout';

const locale = 'en';

function MyApp({ Component, pageProps }) {
  return (
    <IntlProvider locale={locale} messages={translations[locale]}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </IntlProvider>
  );
}

export default MyApp;
