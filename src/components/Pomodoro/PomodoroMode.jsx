import React from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { defaultModes } from "../Utils/modesUtils";

export default function PomodoroMode({ mode, handleModeChange }) {
  return (
    <ButtonGroup>
      <Button
        id="pomodoro-button"
        variant="outline"
        size="md"
        rounded={10}
        isActive={mode === defaultModes.pomodoro}
        onClick={() => handleModeChange(defaultModes.pomodoro)}
      >
        pomodoro
      </Button>
      <Button
        id="short-break-button"
        variant="outline"
        size="md"
        rounded={10}
        isActive={mode === defaultModes.shortBreak}
        onClick={() => handleModeChange(defaultModes.shortBreak)}
      >
        short break
      </Button>
      <Button
        id="long-break-button"
        variant="outline"
        size="md"
        rounded={10}
        isActive={mode === defaultModes.longBreak}
        onClick={() => handleModeChange(defaultModes.longBreak)}
      >
        long break
      </Button>
    </ButtonGroup>
  );
}
