export function getCurrentSettings() {
  let currentSettings = localStorage.getItem("pomodoroSettings");

  if (!currentSettings) {
    currentSettings = {
      pomodoro: 25 * 60,
      shortBreak: 5 * 60,
      longBreak: 15 * 60,
      longBreakInterval: 4,
    };

    localStorage.setItem("pomodoroSettings", JSON.stringify(currentSettings));
  } else {
    currentSettings = JSON.parse(currentSettings);
  }

  return currentSettings;
}

export function saveSettings(settings) {
  localStorage.setItem("pomodoroSettings", JSON.stringify(settings));
}
