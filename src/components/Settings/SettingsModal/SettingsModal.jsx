import { useState } from "react";
import SettingsModalBody from "./SettingsModalBody";
import SettingsModalFooter from "./SettingsModalFooter";
import SettingsModalHeader from "./SettingsModalHeader";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Divider,
} from "@chakra-ui/react";

export default function SettingsModal({
  isOpen,
  onOpen,
  onClose,
  settings,
  setSettings,
}) {
  const [newSettings, setNewSettings] = useState(settings);

  const handleSettingsSave = () => {
    if (settings !== newSettings) {
      setSettings(newSettings);
    }
    onClose(newSettings);
  };

  return (
    <>
      <Modal
        size="xs"
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        motionPreset="slideInTop"
      >
        <ModalOverlay />
        <ModalContent>
          <SettingsModalHeader />
          <Divider />

          <ModalBody>
            <SettingsModalBody
              currentSettings={newSettings}
              setCurrentSettings={setNewSettings}
            />
          </ModalBody>

          <Divider />

          <ModalFooter>
            <SettingsModalFooter onSubmit={() => handleSettingsSave()} />
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
