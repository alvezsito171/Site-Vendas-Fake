import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useDispatch } from "react-redux";

import { addToCart } from "../../store/slices/cartSlice";

import Parcelamento from "./Parcelamento";

import img2 from "../../public/images/fonte-xpg-850-2.jpg";
import img3 from "../../public/images/fonte-xpg-850-3.jpg";

import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "../../styles/ProdutoPagina.module.scss";

interface Props {
  modelo: string;
  categoria: string;
  img: string;
  id: string;
  fabricante: string;
  name: string;
  pathName: string;
  pPrazo: number;
  garantia: string;
  specs: Array<any>;
  promo: boolean;
}

function Produto(props: Props) {
  const dispatch = useDispatch();
  const {
    img,
    name,
    pPrazo,
    categoria,
    pathName,
    promo,
    garantia,
    modelo,
    fabricante,
  } = props;
  const [imagemSelec, setImagemSelec] = useState(1);
  const [parcelamento, setParcelamento] = useState(false);

  function imgAtual() {
    if (imagemSelec === 2) {
      return img2;
    } else if (imagemSelec === 3) {
      return img3;
    } else {
      return img;
    }
  }

  function handleParcelamento() {
    setParcelamento(!parcelamento);
  }

  function handleImageChange(num: number) {
    setImagemSelec(num);
  }

  function handleClick() {
    alert("Adicionado ao carrinho com sucesso!");
    dispatch(addToCart(props));
  }

  return (
    <>
      <div className={styles.containerCaminho}>
        <Link href="/" passHref>
          <span>HOME</span>
        </Link>
        <FontAwesomeIcon icon={faAngleRight} />
        <Link href={`/${categoria}`} passHref>
          <span>{categoria.toUpperCase()}</span>
        </Link>
        <FontAwesomeIcon icon={faAngleRight} />
        <Link href={`/${categoria}/${pathName}`} passHref>
          <span>{pathName.toUpperCase()}</span>
        </Link>
      </div>
      <div className={styles.containerProduto}>
        <div className={styles.containerImagem}>
          <div className={styles.containerAdicional}>
            <div
              className={
                imagemSelec === 1
                  ? `${styles.imagemMini} ${styles.imagemMiniAtiva}`
                  : styles.imagemMini
              }
              onClick={() => handleImageChange(1)}
            >
              <Image
                src={img}
                alt="testando"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div
              className={
                imagemSelec === 2
                  ? `${styles.imagemMini} ${styles.imagemMiniAtiva}`
                  : styles.imagemMini
              }
              onClick={() => handleImageChange(2)}
            >
              <Image
                src={img2}
                alt="testando"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div
              className={
                imagemSelec === 3
                  ? `${styles.imagemMini} ${styles.imagemMiniAtiva}`
                  : styles.imagemMini
              }
              onClick={() => handleImageChange(3)}
            >
              <Image
                src={img3}
                alt="testando"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
          <div className={styles.imagemPrincipal}>
            {promo ? (
              <div className={styles.promo}>
                <p>PROMOÇÃO</p>
              </div>
            ) : null}
            <Image
              src={imgAtual()}
              alt="testando"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
        <div className={styles.produtoInfo}>
          <h1 className={styles.produtoNome}>{name.toUpperCase()}</h1>
          <div className={styles.containerInfoAdicional}>
            <div className={styles.infoAdicional}>
              <span>Marca:</span> <span>{fabricante.toUpperCase()}</span>
            </div>
            <div className={styles.infoAdicional}>
              <span>Modelo:</span> <span>{modelo}</span>
            </div>
            <div className={styles.infoAdicional}>
              <span>Disponibilidade:</span> <span>Em Estoque</span>
            </div>
            <div className={styles.infoAdicional}>
              <span>Garantia:</span> <span>{garantia}</span>
            </div>
          </div>
          <div className={styles.produtoPreco}>
            <div className={styles.containerPrecos}>
              {promo ? (
                <div className={styles.precoAntigo}>
                  <p>
                    {pPrazo.toLocaleString("pt-BR", {
                      minimumFractionDigits: 2,
                      style: "currency",
                      currency: "BRL",
                    })}
                  </p>
                </div>
              ) : null}
              <div className={styles.precoPrazo}>
                {promo ? (
                  <p>
                    {(pPrazo * 0.85).toLocaleString("pt-BR", {
                      minimumFractionDigits: 2,
                      style: "currency",
                      currency: "BRL",
                    })}
                  </p>
                ) : (
                  <p>
                    {pPrazo.toLocaleString("pt-BR", {
                      minimumFractionDigits: 2,
                      style: "currency",
                      currency: "BRL",
                    })}
                  </p>
                )}
              </div>
            </div>
            <div className={styles.precoDetalhe}>
              {promo ? (
                <p>
                  <strong>
                    {(pPrazo * 0.7).toLocaleString("pt-BR", {
                      minimumFractionDigits: 2,
                      style: "currency",
                      currency: "BRL",
                    })}{" "}
                  </strong>
                  à vista no boleto ou em até{" "}
                  <strong>
                    12x de{" "}
                    {((pPrazo * 0.85) / 12).toLocaleString("pt-BR", {
                      minimumFractionDigits: 2,
                      style: "currency",
                      currency: "BRL",
                    })}{" "}
                  </strong>
                  sem juros
                </p>
              ) : (
                <p>
                  <strong>
                    {(pPrazo * 0.85).toLocaleString("pt-BR", {
                      minimumFractionDigits: 2,
                      style: "currency",
                      currency: "BRL",
                    })}{" "}
                  </strong>
                  à vista no boleto ou em até{" "}
                  <strong>
                    12x de{" "}
                    {(pPrazo / 12).toLocaleString("pt-BR", {
                      minimumFractionDigits: 2,
                      style: "currency",
                      currency: "BRL",
                    })}{" "}
                  </strong>
                  sem juros
                </p>
              )}
            </div>
          </div>

          <div className={styles.containerParcelamento}>
            <div onClick={handleParcelamento}>
              {parcelamento ? <p>Parcelamento</p> : <p>Mais Informações</p>}
            </div>
            {parcelamento ? <Parcelamento pPrazo={pPrazo} /> : null}
          </div>
          <div className={styles.comprar}>
            <div className={styles.comprarQtde}>
              <span>3</span>
            </div>
            <button onClick={handleClick}>COMPRAR</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Produto;
