import { ArrowRightIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";

export default function SkipPomodoroMode({ handleSkip }) {
  return (
    <>
      <IconButton
        id="skip-button"
        variant="ghost"
        color="gray"
        size="sm"
        aria-label="skip"
        icon={<ArrowRightIcon />}
        onClick={handleSkip}
      ></IconButton>
    </>
  );
}
