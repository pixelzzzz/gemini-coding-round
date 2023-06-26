import { useState } from "react";
import { Button, Container } from "./styles";
import { ImageURL } from "../utils/imageURL";
import { Modal } from "../modal/modal";
export const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const onClose = () => setIsModalOpen(false);
  return (
    <Container>
      <img src={ImageURL.gemini} alt="gemini" />
      <Button onClick={() => setIsModalOpen(true)}>Create Watchlist</Button>
      <Modal isOpen={isModalOpen} onClose={onClose} />
    </Container>
  );
};
