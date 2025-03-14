import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  VStack,
  HStack,
  Text,
  FormLabel,
  FormControl,
  Flex,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import {
  convertSecondsInMinutes,
  convertMinutesInSeconds,
} from "../../Utils/timeUtils";

export default function SettingsModalBody({
  currentSettings,
  setCurrentSettings,
}) {
  const [pomodoro, setPomodoro] = useState(
    convertSecondsInMinutes(currentSettings.pomodoro)
  );
  const [shortBreak, setShortBreak] = useState(
    convertSecondsInMinutes(currentSettings.shortBreak)
  );
  const [longBreak, setLongBreak] = useState(
    convertSecondsInMinutes(currentSettings.longBreak)
  );
  const [longBreakInterval, setLongBreakInterval] = useState(
    currentSettings.longBreakInterval
  );

  useEffect(() => {
    const newSettings = {
      pomodoro: convertMinutesInSeconds(pomodoro),
      shortBreak: convertMinutesInSeconds(shortBreak),
      longBreak: convertMinutesInSeconds(longBreak),
      longBreakInterval: longBreakInterval,
    };
    setCurrentSettings(newSettings);
  }, [pomodoro, shortBreak, longBreak, longBreakInterval]);

  return (
    <FormControl>
      <VStack gap={4}>
        <HStack>
          <VStack gap={0}>
            <FormLabel fontSize={13}>Pomodoro</FormLabel>
            <NumberInput
              size="sm"
              min={1}
              max={999}
              defaultValue={25}
              inputMode="numeric"
              value={pomodoro}
              onChange={setPomodoro}
            >
              <NumberInputField textAlign="right" rounded={8} />
              <NumberInputStepper>
                <NumberIncrementStepper rounded={2} />
                <NumberDecrementStepper rounded={2} />
              </NumberInputStepper>
            </NumberInput>
            <Flex width="10px">
              <Text fontSize="xs">minutes</Text>
            </Flex>
          </VStack>

          <VStack gap={0}>
            <FormLabel fontSize={13}>Short Break</FormLabel>
            <NumberInput
              size="sm"
              defaultValue={5}
              min={1}
              max={999}
              value={shortBreak}
              onChange={setShortBreak}
            >
              <NumberInputField textAlign="right" rounded={8} />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
            <Flex width="10px">
              <Text fontSize="xs">minutes</Text>
            </Flex>
          </VStack>

          <VStack gap={0}>
            <FormLabel fontSize={13}>Long Break</FormLabel>
            <NumberInput
              size="sm"
              defaultValue={10}
              min={1}
              max={999}
              value={longBreak}
              onChange={setLongBreak}
            >
              <NumberInputField textAlign="right" rounded={8} />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
            <Flex width="10px">
              <Text fontSize="xs">minutes</Text>
            </Flex>
          </VStack>
        </HStack>

        <HStack gap={30}>
          <FormLabel w="135%" fontSize={14}>
            Long Break Interval
          </FormLabel>
          <NumberInput
            size="sm"
            defaultValue={4}
            min={1}
            max={999}
            value={longBreakInterval}
            onChange={setLongBreakInterval}
          >
            <NumberInputField textAlign="right" rounded={8} />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </HStack>
      </VStack>
    </FormControl>
  );
}
