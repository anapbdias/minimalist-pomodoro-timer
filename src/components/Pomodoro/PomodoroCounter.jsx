import { Button } from "@chakra-ui/react";

export default function PomodoroCounter({ counter, reset }) {
  return (
    <Button
      id="reset-pomo-counter-button"
      variant="link"
      color="gray"
      size="md"
      onClick={reset}
    >
      #{counter}
    </Button>
  );
}
