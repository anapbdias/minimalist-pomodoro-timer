import { SettingsIcon } from "@chakra-ui/icons";
import { IconButton, useDisclosure } from "@chakra-ui/react";
import SettingsModal from "./SettingsModal/SettingsModal";

export default function Settings({ settings, setSettings }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <IconButton
        variant="ghost"
        size="md"
        aria-label="Settings"
        fontSize="20px"
        icon={<SettingsIcon />}
        onClick={onOpen}
      />

      <SettingsModal
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        settings={settings}
        setSettings={setSettings}
      />
    </>
  );
}
