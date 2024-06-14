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
              url: 'https://dummyimage.com/600x315/cf40cf/fff',
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
