import { Button } from "@chakra-ui/react";

export default function SettingsModalFooter({ onSubmit }) {
  return (
    <Button variant="solid" onClick={onSubmit}>
      OK
    </Button>
  );
}
