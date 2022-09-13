import { ThemeProvider } from 'styled-components';
import Layout from '../components/Layout';
import { GlobalStyle } from '../styles/global-styles';
import { theme } from '../styles/theme';

function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
