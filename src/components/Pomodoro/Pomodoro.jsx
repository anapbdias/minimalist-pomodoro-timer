import React, { useEffect, useState } from "react";
import { Box, Center } from "@chakra-ui/react";
import PomodoroMode from "./PomodoroMode";
import TimerContol from "../Timer/TimerControl";
import TimerDisplay from "../Timer/TimerDisplay";
import Settings from "../Settings/Settings";
import { defaultModes } from "../Utils/modesUtils";
import { getCurrentSettings, saveSettings } from "../Utils/settingsUtils";
import PomodoroCounter from "./PomodoroCounter";
import SkipPomodoroMode from "./SkipPomodoroMode";
import { playTimeIsUpAudio } from "../Utils/soundUtils";

export default function Pomodoro() {
  const [settings, setSettings] = useState(getCurrentSettings());

  const [isActive, setIsActive] = useState(false);
  const [mode, setMode] = useState(defaultModes.pomodoro);

  const [timeLeft, setTimeLeft] = useState(settings[mode]);
  const [timeProgressed, setTimeProgressed] = useState(0);

  const [pomoCounter, setPomoCounter] = useState(1);

  useEffect(() => {
    let interval = null;

    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((timeLeft) => timeLeft - 1);
        setTimeProgressed((timeProgressed) => timeProgressed + 1);
      }, 1000);
    } else if (timeLeft === 0) {
      playTimeIsUpAudio();
      manageModeWorkflow();
      setIsActive(true);
    }

    return () => clearInterval(interval);
  }, [isActive, timeLeft]);

  useEffect(() => {
    let currentDuration = timeLeft + timeProgressed;

    if (settings[mode] !== currentDuration) {
      handleReset();
    }

    saveSettings(settings);
  }, [settings]);

  const manageModeWorkflow = () => {
    console.log(pomoCounter);
    switch (mode) {
      case defaultModes.pomodoro:
        if (pomoCounter % settings.longBreakInterval > 0) {
          handleModeChange(defaultModes.shortBreak);
        } else {
          handleModeChange(defaultModes.longBreak);
        }
        break;
      case defaultModes.shortBreak:
      case defaultModes.longBreak:
        setPomoCounter((pomoCounter) => pomoCounter + 1);
        handleModeChange(defaultModes.pomodoro);
        break;
    }
  };

  const handleReset = () => {
    setIsActive(false);
    setTimeLeft(settings[mode]);
    setTimeProgressed(0);
  };

  const handleModeChange = (newMode) => {
    setMode(newMode);
    setTimeLeft(settings[newMode]);
    setTimeProgressed(0);
    setIsActive(false);
  };

  const handleSkip = () => {
    manageModeWorkflow();
  };

  const resetPomoCounter = () => {
    setPomoCounter(1);
    handleModeChange(defaultModes.pomodoro);
  };

  return (
    <Box className="pomodoro-container" align="center">
      <PomodoroMode mode={mode} handleModeChange={handleModeChange} />
      <TimerDisplay
        max={settings[mode]}
        timeProgressed={timeProgressed}
        timeLeft={timeLeft}
      />
      <PomodoroCounter counter={pomoCounter} reset={resetPomoCounter} />
      <SkipPomodoroMode handleSkip={handleSkip} />

      <Center>
        <TimerContol
          isActive={isActive}
          setIsActive={setIsActive}
          handleReset={handleReset}
        />
        <Settings settings={settings} setSettings={setSettings} />
      </Center>
    </Box>
  );
}
