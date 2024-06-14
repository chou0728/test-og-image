import { Box, Text, Button, useDisclosure, Fade } from '@chakra-ui/react';

const About = () => {
  const { getDisclosureProps, getButtonProps } = useDisclosure();

  const buttonProps = getButtonProps();
  const disclosureProps = getDisclosureProps();
  console.log('buttonProps', buttonProps);
  console.log('disclosureProps', disclosureProps);

  return (
    <Box backgroundColor={{ base: 'red', sm: 'green', md: 'yellow', lg: 'blue' }}>
      <Box width={{ base: '100%', sm: '90%', md: '60%', lg: '50%' }}>
        <Button {...buttonProps}>button</Button>
        <Box {...disclosureProps}>
          <Fade in={buttonProps['aria-expanded']}>
            <Text fontSize={{ base: '12px', sm: '18px', md: '16px', lg: '14px' }}>some text</Text>
          </Fade>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
