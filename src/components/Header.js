import { Box, Text, keyframes } from '@chakra-ui/react';

const spin = keyframes`
  from {transform: rotate(0deg);}
  to {transform: rotate(360deg)}
`;

const spinAnimation = `${spin} infinite 2s linear`;

const Header = () => {
  return (
    <Box width="100%">
      {/* <Box maxWidth="500px" animation={spinAnimation}>
        <Text fontSize="16px" color="red">
          This is header
        </Text>
      </Box> */}
    </Box>
  );
};

export default Header;
