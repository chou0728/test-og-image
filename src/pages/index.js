import { Box } from '@chakra-ui/react';
import { NextSeo } from 'next-seo';

const Index = () => {
  return (
    <>
      <NextSeo
        title="測試title"
        description="測試description"
        canonical="測試 canonical"
        openGraph={{
          images: [
            {
              url: 'https://chou0728.github.io/test-og-image/logo.png',
              width: 800,
              height: 600,
              alt: 'logo',
              type: 'image/png',
            },
          ],
        }}
      />
      <Box p="20px" color="red">
        test
      </Box>
    </>
  );
};

export default Index;
