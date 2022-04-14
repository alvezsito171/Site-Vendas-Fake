import { useEffect, useState } from "react";
import Image from "next/image";
import { useDispatch } from "react-redux";

import { removeFromCart } from "../../store/slices/cartSlice";
import { updateTotalPrice, deleteItem } from "../../store/slices/newSlice";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus, faXmark } from "@fortawesome/free-solid-svg-icons";
import styles from "../../styles/Carrinho.module.scss";

interface Props {
  id: string;
  img: string;
  name: string;
  pPrazo: number;
  num: number;
  handleRemove: Function;
  promo: boolean;
}

function Item({ id, img, name, pPrazo, promo }: Props) {
  const dispatch = useDispatch();
  const [itemQtde, setItemQtde] = useState(1);

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setWidth]);

  useEffect(() => {
    if (promo) {
      dispatch(updateTotalPrice({ id, valorTotal: itemQtde * (pPrazo * 0.7) }));
    } else {
      dispatch(updateTotalPrice({ id, valorTotal: itemQtde * pPrazo * 0.85 }));
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  function aumentarQtde() {
    const newQtde = itemQtde + 1;
    setItemQtde(newQtde);
    if (promo) {
      dispatch(updateTotalPrice({ id, valorTotal: newQtde * pPrazo * 0.7 }));
    } else {
      dispatch(updateTotalPrice({ id, valorTotal: newQtde * pPrazo * 0.85 }));
    }
  }

  function diminuirQtde() {
    if (itemQtde > 1) {
      const newQtde = itemQtde - 1;
      setItemQtde(newQtde);
      if (promo) {
        dispatch(updateTotalPrice({ id, valorTotal: newQtde * pPrazo * 0.7 }));
      } else {
        dispatch(updateTotalPrice({ id, valorTotal: newQtde * pPrazo * 0.85 }));
      }
    }
  }

  function handleDelete(itemID: string) {
    if (window.confirm("Deseja excluir o item?")) {
      dispatch(removeFromCart(itemID));
      dispatch(deleteItem(itemID));
    }
  }

  return (
    <div className={styles.containerItem}>
      {width < 1024 ? (
        <>
          <div className={styles.item}>
            <div className={styles.itemImagem}>
              <Image src={img} alt="" height={1000} width={1000} />
            </div>
            <div className={styles.itemDescricao}>
              <p>{`${name.slice(0,85)}...`}</p>
            </div>
            <div
              onClick={() => handleDelete(id)}
              className={styles.itemDeletar}
            >
              <FontAwesomeIcon icon={faXmark} />
            </div>
          </div>
          <div className={styles.containerInfo}>
            <div className={styles.itemAcoes}>
              <button onClick={aumentarQtde}>
                <FontAwesomeIcon icon={faPlus} />
              </button>
              <span>{itemQtde}</span>
              <button onClick={diminuirQtde}>
                <FontAwesomeIcon icon={faMinus} />
              </button>
            </div>
            <div className={styles.itemPrecos}>
              {promo ? (
                <p>
                  {(itemQtde * pPrazo * 0.7).toLocaleString("pt-BR", {
                    minimumFractionDigits: 2,
                    style: "currency",
                    currency: "BRL",
                  })}
                </p>
              ) : (
                <p>
                  {(itemQtde * pPrazo * 0.85).toLocaleString("pt-BR", {
                    minimumFractionDigits: 2,
                    style: "currency",
                    currency: "BRL",
                  })}
                </p>
              )}
            </div>
          </div>
        </>
      ) : (
        <div className={styles.item}>
          <div className={styles.itemImagem}>
            <Image src={img} alt="" height={1000} width={1000} />
          </div>
          <div className={styles.itemDescricao}>
            <p>{name}</p>
          </div>
          <div className={styles.itemAcoes}>
            <button onClick={aumentarQtde}>
              <FontAwesomeIcon icon={faPlus} />
            </button>
            <span>{itemQtde}</span>
            <button onClick={diminuirQtde}>
              <FontAwesomeIcon icon={faMinus} />
            </button>
          </div>
          <div className={styles.itemPrecos}>
            {promo ? (
              <p>
                {(itemQtde * pPrazo * 0.7).toLocaleString("pt-BR", {
                  minimumFractionDigits: 2,
                  style: "currency",
                  currency: "BRL",
                })}
              </p>
            ) : (
              <p>
                {(itemQtde * pPrazo * 0.85).toLocaleString("pt-BR", {
                  minimumFractionDigits: 2,
                  style: "currency",
                  currency: "BRL",
                })}
              </p>
            )}
          </div>
          <div onClick={() => handleDelete(id)} className={styles.itemDeletar}>
            <FontAwesomeIcon icon={faXmark} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Item;
