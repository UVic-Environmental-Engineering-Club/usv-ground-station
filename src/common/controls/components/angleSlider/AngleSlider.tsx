import {
  Box,
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack,
} from "@chakra-ui/react";
import { useState } from "react";

export const AngleSlider = () => {
  const [sliderValue, setSliderValue] = useState(90);

  return (
    <Box pt={6} pb={2}>
      <Slider
        min={0}
        max={180}
        defaultValue={90}
        aria-label="slider-ex-6"
        onChange={(val) => setSliderValue(val)}
      >
        <SliderMark
          value={sliderValue}
          textAlign="center"
          bg="blue.500"
          color="white"
          mt="-10"
          ml="-5"
          w="12"
        >
          {sliderValue}°
        </SliderMark>
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
    </Box>
  );
};
