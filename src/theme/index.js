import { extendTheme } from '@chakra-ui/react';
import styles from './styles';
import colors from './colors';
import components from './components';
import breakpoints from './breakpoints';
import config from './config';

const overrides = {
  styles,
  colors,
  breakpoints,
  components,
  config,
};

export default extendTheme(overrides);
