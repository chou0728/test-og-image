// https://nextjs.org/docs/getting-started/project-structure#pages-routing-conventions

import { ChakraProvider } from '@chakra-ui/react';
import Layout from '@components/layout';
import theme from '@theme';

const App = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
};

export default App;
