import { Box } from '@chakra-ui/react';
import { NextSeo } from 'next-seo';
import Image from 'next/image';
import step1Svg from '/public/apply-for-fund-step-1.svg';
import step1Png from '/public/apply-for-fund-step-1.png';
import step2Svg from '/public/apply-for-fund-step-2.svg';
import step2Png from '/public/apply-for-fund-step-2.png';
import step3Svg from '/public/apply-for-fund-step-3.svg';
import step3Png from '/public/apply-for-fund-step-3.png';

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
        <Image src={step1Svg} width={260} height={258} alt="test" />
        <Image src={step1Png} width={260} height={258} alt="test" />
        <Image src={step2Svg} width={260} height={258} alt="test" />
        <Image src={step2Png} width={260} height={258} alt="test" />
        <Image src={step2Svg} width={260} height={258} alt="test" />
        <Image src={step2Png} width={260} height={258} alt="test" />
      </Box>
    </>
  );
};

export default Index;
