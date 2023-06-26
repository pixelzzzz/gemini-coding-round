import { useCallback, useContext, useEffect, useState } from "react";
import ReactModal from "react-modal";
import { Button, Container, Heading, Input, Label } from "./styles";
import { Cryptos } from "../utils/cryptoJSON";
import { Context } from "../context";

export const Modal = ({ isOpen, onClose, watchlistSelected }) => {
  const [context, setContext] = useContext(Context);
  const [name, setName] = useState("");
  const [cryptosInWatchlist, setCryptosInWatchlist] = useState([]);

  useEffect(() => {
    if (!watchlistSelected) return;
    setName(watchlistSelected);
    setCryptosInWatchlist(context[watchlistSelected].cryptosInWatchlist);
  }, [watchlistSelected, context]);
  const addCryptoInWatchlist = useCallback(
    (cryptoObject) => {
      const isCryptoPresentInWatchlist = cryptosInWatchlist.filter(
        (v) => v.name === cryptoObject.name
      ).length;
      if (isCryptoPresentInWatchlist) {
        const cryptoInWatchlistRemoveSelected = cryptosInWatchlist.filter(
          (v) => v.name !== cryptoObject.name
        );
        setCryptosInWatchlist(cryptoInWatchlistRemoveSelected);
      } else {
        setCryptosInWatchlist([...cryptosInWatchlist, cryptoObject]);
      }
    },
    [cryptosInWatchlist]
  );
  const onCloseModal = () => {
    // set the state to default on closing the modal
    if (!watchlistSelected) {
      setName("");
      setCryptosInWatchlist([]);
    }
    onClose();
  };
  const createWatchlist = () => {
    // Testing empty values
    if (!name) {
      alert("Watchlist name cannot be empty");
      return;
    }
    if (!cryptosInWatchlist.length) {
      alert("Watchlist cannot be empty");
      return;
    }
    setContext({
      ...context,
      [name]: {
        cryptosInWatchlist: cryptosInWatchlist,
      },
    });
    // set the state to default on creating the watchlist
    setName("");
    setCryptosInWatchlist([]);
    onClose();
  };
  return (
    <ReactModal isOpen={isOpen} onRequestClose={onCloseModal}>
      <Label for="watchlist-name">Watchlist name</Label>
      <Input
        value={name}
        placeholder="Watchlist Name"
        id="watchlist-name"
        onChange={(e) => setName(e.target.value)}
        readOnly={watchlistSelected}
      />
      {watchlistSelected ? (
        <>
          <Heading>Cryptocurrencies added in watchlists</Heading>
          {context[watchlistSelected].cryptosInWatchlist.map((val) => {
            return (
              <Container>
                <span>{val.name}</span>
              </Container>
            );
          })}
        </>
      ) : null}
      <Heading>Cryptocurrencies</Heading>
      {Cryptos.map((val) => {
        return (
          <Container>
            <span>{val.name}</span>
            <Button onClick={() => addCryptoInWatchlist(val)}>
              {cryptosInWatchlist.filter((v) => v.name === val.name).length
                ? "Added"
                : "Add"}
            </Button>
          </Container>
        );
      })}
      <Button onClick={createWatchlist}>Create Watchlist</Button>
    </ReactModal>
  );
};
