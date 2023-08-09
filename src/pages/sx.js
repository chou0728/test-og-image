import { Box } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Example = () => {
  return (
    <Box
      bg="red"
      color="white"
      sx={{
        '.swiper-wrapper': {
          color: 'black',
        },
      }}
    >
      <Swiper spaceBetween={50}>
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
    </Box>
  );
};

export default Example;
