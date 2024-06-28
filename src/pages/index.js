import { Box } from '@chakra-ui/react';
import { NextSeo } from 'next-seo';
import Image from 'next/image';
import svg from '/public/apply-for-fund-step-1.svg';

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
              url: 'https://chou0728.github.io/test-og-image/share.png',
              alt: 'logo',
              type: 'image/png',
            },
          ],
        }}
      />
      <Box p="20px" color="red">
        <Image src={svg} width={260} height={258} alt="test" />
      </Box>
    </>
  );
};

export default Index;
