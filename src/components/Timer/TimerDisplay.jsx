import {
  CircularProgress,
  CircularProgressLabel,
  VStack,
} from "@chakra-ui/react";

export default function TimerDisplay({ max, timeProgressed, timeLeft }) {
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  return (
    <VStack spacing={0}>
      <CircularProgress
        id="pomodoro-timer-progress"
        max={max}
        value={timeProgressed}
        color="blackAlpha.600"
        thickness="8px"
        size="250px"
      >
        <CircularProgressLabel id="pomodoro-timer-label" as="b" fontSize="4xl">
          {formatTime(timeLeft)}
        </CircularProgressLabel>
      </CircularProgress>
    </VStack>
  );
}
