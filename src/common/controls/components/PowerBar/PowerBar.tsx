import { useMemo, useState } from "react";
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  Box,
  SliderMark,
} from "@chakra-ui/react";
import { useSocketContext } from "../../../../lib/contexts/SocketContext";
import debounce from "lodash.debounce";

export const PowerBar = () => {
  const { setPower } = useSocketContext();
  const [sliderValue, setSliderValue] = useState(0);

  const onSliderChange = (val: number) => {
    setSliderValue(val);
    setPower(val);
  };

  const debouncedHandler = useMemo(() => debounce(onSliderChange, 300), []);

  return (
    <Box pt={6} pb={2}>
      <Slider
        defaultValue={0}
        top="130px"
        aria-label="slider-ex-6"
        onChange={debouncedHandler}
      >
        <SliderMark
          value={sliderValue}
          textAlign="center"
          color="black"
          top="90px"
          mt="-10"
          ml="-5"
          w="12"
        >
          {sliderValue}%
        </SliderMark>
        <SliderTrack h="80px">
          <SliderFilledTrack />
        </SliderTrack>
      </Slider>
    </Box>
  );
};
