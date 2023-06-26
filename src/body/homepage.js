import { useContext, useState } from "react";
import { Container, Heading } from "./styles";
import { Context } from "../context";
import { Modal } from "../modal/modal";

export const Homepage = () => {
  const [context, setContext] = useContext(Context);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [watchlistSelected, setWatchlistSelected] = useState("");
  const onClose = () => setIsModalOpen(false);
  const openEditAndViewModal = (value) => {
    setWatchlistSelected(value);
    setIsModalOpen(true);
  };
  const renderWatchlists = (context) => {
    return Object.keys(context).map((value) => {
      return (
        <Container onClick={() => openEditAndViewModal(value)}>
          {value}
        </Container>
      );
    });
  };
  return (
    <>
      <Heading>Cryptocurrency Watchlists</Heading>
      {renderWatchlists(context)}
      <Modal
        isOpen={isModalOpen}
        onClose={onClose}
        watchlistSelected={watchlistSelected}
      />
    </>
  );
};
