import { RepeatClockIcon } from "@chakra-ui/icons";
import { Button, ButtonGroup, IconButton } from "@chakra-ui/react";

export default function TimerContol({ isActive, setIsActive, handleReset }) {
  const handleStartPause = () => {
    setIsActive(!isActive);
  };

  return (
    <ButtonGroup className="time-control">
      <Button
        id="start-pause-button"
        variant="outline"
        size="md"
        isActive={isActive}
        rounded={10}
        onClick={handleStartPause}
      >
        {isActive ? "pause" : "start"}
      </Button>
      <IconButton
        id="reset-button"
        variant="ghost"
        size="md"
        aria-label="Reset"
        fontSize="20px"
        icon={<RepeatClockIcon />}
        onClick={handleReset}
      />
    </ButtonGroup>
  );
}
