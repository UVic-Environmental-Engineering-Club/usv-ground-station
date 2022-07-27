import { useState } from "react";
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  Box,
  SliderMark,
} from "@chakra-ui/react";
import { useSocketContext } from "../../../../lib/contexts/SocketContext";

export const ControlBar = () => {
  const { setPower } = useSocketContext();
  const [sliderValue, setSliderValue] = useState(50);

  const onSliderChange = (val: number) => {
    setSliderValue(val);
    setPower(val);
  };

  return (
    <Box pt={6} pb={2}>
      <Slider
        orientation="vertical"
        top="30px"
        h="250px"
        w="200px"
        aria-label="slider-ex-6"
        onChange={onSliderChange}
      >
        <SliderMark
          value={sliderValue}
          orientation="vertical"
          textAlign="center"
          color="black"
          right="20px"
        >
          {sliderValue}%
        </SliderMark>
        <SliderTrack w="80px">
          <SliderFilledTrack />
        </SliderTrack>
      </Slider>
    </Box>
  );
};