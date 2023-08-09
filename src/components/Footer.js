// import { useState } from 'react';
import { Box } from '@chakra-ui/react';

const Footer = () => {
  const baseStyle = { w: '100%', my: '12px', h: '50px', bg: 'red' };
  const textStyle = { color: 'white', fontSize: '12px' };

  return (
    <Box {...baseStyle} {...textStyle}>
      this is a div
    </Box>
  );
};

export default Footer;
