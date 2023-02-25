import {
  Box,
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack,
} from "@chakra-ui/react";
import { useMemo, useState } from "react";
import { useSocketContext } from "../../../../lib/contexts/SocketContext";
import debounce from "lodash.debounce";

export const AngleSlider = () => {
  const { setAngle } = useSocketContext();
  const [sliderValue, setSliderValue] = useState(90);

  const onSliderChange = (val: number) => {
    setSliderValue(val);
    setAngle(val);
  };

  const debouncedHandler = useMemo(() => debounce(onSliderChange, 300), []);

  return (
    <Box pt={6} pb={2}>
      <Slider
        min={0}
        max={180}
        top="30px"
        defaultValue={90}
        aria-label="slider-ex-6"
        onChange={debouncedHandler}
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
