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
              url: '/static/img/icons/logo.png',
              alt: 'logo',
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
