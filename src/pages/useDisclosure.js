import { Box, Text, Button, useDisclosure } from '@chakra-ui/react';

const Example = () => {
  const { getButtonProps, getDisclosureProps } = useDisclosure();
  const buttonProps = getButtonProps();
  const disclosureProps = getDisclosureProps();

  return (
    <Box p="20px">
      <Button {...buttonProps}>Toggle Me</Button>
      <Text {...disclosureProps} mt="4px" color="red">
        This text is being visibly toggled hidden and shown by the button.
      </Text>
    </Box>
  );
};

export default Example;
