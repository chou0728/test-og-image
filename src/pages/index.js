import { Box } from '@chakra-ui/react';
import { NextSeo } from 'next-seo';
import Image from 'next/image';
import stepSvg from '/public/apply-for-fund-step-1.svg';
import stepPng from '/public/apply-for-fund-step-1.png';

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
        <Image src={stepSvg} width={260} height={258} alt="test" />
        <Image src={stepPng} width={260} height={258} alt="test" />
      </Box>
    </>
  );
};

export default Index;
