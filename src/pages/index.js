import { Box, Text, Button, Fade, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
// import Header from '@components/Header';

const Example = () => {
  const { getButtonProps, getDisclosureProps } = useDisclosure();
  const buttonProps = getButtonProps();
  const disclosureProps = getDisclosureProps();

  return <Box p="20px"></Box>;
};

export default Example;
