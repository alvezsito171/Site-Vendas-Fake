import { v4 as uuidv4 } from "uuid";

const listaItens = [
  {
    categoria: "processador",
    fabricante: "intel",
    id: uuidv4(),
    img: "/images/intel1.jpg",
    garantia: "36 meses",
    name: "Processador Intel Core i3-10105, Cache 6MB, 3.7GHz (4.4GHz Max Turbo), LGA 1200 - BX8070110105",
    pathName:
      "processador-intel-core-i3-10105-cache-6mb-3-7ghz-4-4ghz-max-turbo-lga-1200-bx8070110105",
    pPrazo: 1000,
    tags: [],
    destaque: true,
    promo: false,
    specs: [
      { Número_de_núcleos: "4" },
      { Nº_de_threads: "8" },
      { Frequência_baseada_em_processador: "3.70 GHz" },
      { Frequência_turbo_max: "4.40 GHz" },
      { Cache: "6 MB Intel Smart Cache" },
      { TDP: "65 W" },
      { Tamanho_máximo_de_memória: "128 GB" },
      { Tipos_de_memória: "DDR4-2666" },
      { Nº_máximo_de_canais_de_memória: "2" },
      { Gráficos_UHD_Intel: "630" },
      { Resolução_máxima: "4096 x 2304@60Hz" },
      { Nº_de_monitores_aceitos: "3" },
      { Soquetes_suportados: "FCLGA1200" },
    ],
  },
  {
    categoria: "processador",
    fabricante: "intel",
    id: uuidv4(),
    img: "/images/intel2.jpg",
    garantia: "36 meses",
    name: "Processador Intel Core i5-12400F, Cache 18MB, 2.5GHz (4.4GHz Max Turbo), LGA 1700 - BX8071512400F",
    pathName:
      "processador-intel-core-i5-12400f-cache-18mb-2-5ghz-4-4ghz-max-turbo-lga-1700-bx8071512400f",
    pPrazo: 1600,
    tags: [],
    destaque: false,
    promo: true,
    specs: [
      { Número_de_núcleos: "4" },
      { Nº_de_threads: "8" },
      { Frequência_baseada_em_processador: "3.70 GHz" },
      { Frequência_turbo_max: "4.40 GHz" },
      { Cache: "6 MB Intel Smart Cache" },
      { TDP: "65 W" },
      { Tamanho_máximo_de_memória: "128 GB" },
      { Tipos_de_memória: "DDR4-2666" },
      { Nº_máximo_de_canais_de_memória: "2" },
      { Gráficos_UHD_Intel: "630" },
      { Resolução_máxima: "4096 x 2304@60Hz" },
      { Nº_de_monitores_aceitos: "3" },
      { Soquetes_suportados: "FCLGA1200" },
    ],
  },
  {
    categoria: "processador",
    fabricante: "intel",
    id: uuidv4(),
    img: "/images/intel3.jpg",
    garantia: "36 meses",
    name: "Processador Intel Core i7-12700K, Cache 25MB, 3.6GHz (5.0GHz Max Turbo), LGA 1700 - BX8071512700K",
    pathName:
      "processador-intel-core-i7-12700k-cache-25mb-3-6ghz-5-0ghz-max-turbo-lga-1700-bx8071512700k",
    pPrazo: 3400,
    tags: [],
    destaque: true,
    promo: false,
    specs: [
      { Número_de_núcleos: "4" },
      { Nº_de_threads: "8" },
      { Frequência_baseada_em_processador: "3.70 GHz" },
      { Frequência_turbo_max: "4.40 GHz" },
      { Cache: "6 MB Intel Smart Cache" },
      { TDP: "65 W" },
      { Tamanho_máximo_de_memória: "128 GB" },
      { Tipos_de_memória: "DDR4-2666" },
      { Nº_máximo_de_canais_de_memória: "2" },
      { Gráficos_UHD_Intel: "630" },
      { Resolução_máxima: "4096 x 2304@60Hz" },
      { Nº_de_monitores_aceitos: "3" },
      { Soquetes_suportados: "FCLGA1200" },
    ],
  },
  {
    categoria: "processador",
    fabricante: "intel",
    id: uuidv4(),
    img: "/images/intel4.jpg",
    garantia: "36 meses",
    name: "Processador Intel Core i9-12900K, Cache 30MB, 3.2GHz (5.2GHz Max Turbo), LGA 1700 - BX8071512900K",
    pathName:
      "processador-intel-core-i9-12900k-cache-30mb-3-2ghz-5-2ghz-max-turbo-lga-1700-bx8071512900k",
    pPrazo: 7500,
    tags: [],
    destaque: false,
    promo: true,
    specs: [
      { Número_de_núcleos: "4" },
      { Nº_de_threads: "8" },
      { Frequência_baseada_em_processador: "3.70 GHz" },
      { Frequência_turbo_max: "4.40 GHz" },
      { Cache: "6 MB Intel Smart Cache" },
      { TDP: "65 W" },
      { Tamanho_máximo_de_memória: "128 GB" },
      { Tipos_de_memória: "DDR4-2666" },
      { Nº_máximo_de_canais_de_memória: "2" },
      { Gráficos_UHD_Intel: "630" },
      { Resolução_máxima: "4096 x 2304@60Hz" },
      { Nº_de_monitores_aceitos: "3" },
      { Soquetes_suportados: "FCLGA1200" },
    ],
  },
  {
    categoria: "processador",
    fabricante: "amd",
    id: uuidv4(),
    img: "/images/amd1.jpg",
    garantia: "12 meses",
    name: "Processador AMD Ryzen 3 3200G, 3.6GHz (4.0GHz Max Turbo), AM4, Vídeo Integrado, 4 Núcleos  - YD3200C5FHBOX",
    pathName:
      "processador-amd-ryzen-3-3200g-3-6ghz-4-0ghz-max-turbo-am4-vídeo-integrado-4-núcleos--yd3200c5fhbox",
    pPrazo: 1100,
    tags: [],
    destaque: false,
    promo: true,
    specs: [
      { Número_de_núcleos: "4" },
      { Nº_de_threads: "8" },
      { Frequência_baseada_em_processador: "3.70 GHz" },
      { Frequência_turbo_max: "4.40 GHz" },
      { Cache: "6 MB Intel Smart Cache" },
      { TDP: "65 W" },
      { Tamanho_máximo_de_memória: "128 GB" },
      { Tipos_de_memória: "DDR4-2666" },
      { Nº_máximo_de_canais_de_memória: "2" },
      { Gráficos_UHD_Intel: "630" },
      { Resolução_máxima: "4096 x 2304@60Hz" },
      { Nº_de_monitores_aceitos: "3" },
      { Soquetes_suportados: "FCLGA1200" },
    ],
  },
  {
    categoria: "processador",
    fabricante: "amd",
    id: uuidv4(),
    img: "/images/amd2.jpg",
    garantia: "12 meses",
    name: "Processador AMD Ryzen 5 5600G, 3.9GHz (4.4GHz Max Turbo), AM4, Vídeo Integrado, 6 Núcleos - 100-100000252BOX",
    pathName:
      "processador-amd-ryzen-5-5600g-3-9ghz-4-4ghz-max-turbo-am4-vídeo-integrado-6-núcleos-100100000252box",
    pPrazo: 1900,
    tags: [],
    destaque: false,
    promo: true,
    specs: [
      { Número_de_núcleos: "4" },
      { Nº_de_threads: "8" },
      { Frequência_baseada_em_processador: "3.70 GHz" },
      { Frequência_turbo_max: "4.40 GHz" },
      { Cache: "6 MB Intel Smart Cache" },
      { TDP: "65 W" },
      { Tamanho_máximo_de_memória: "128 GB" },
      { Tipos_de_memória: "DDR4-2666" },
      { Nº_máximo_de_canais_de_memória: "2" },
      { Gráficos_UHD_Intel: "630" },
      { Resolução_máxima: "4096 x 2304@60Hz" },
      { Nº_de_monitores_aceitos: "3" },
      { Soquetes_suportados: "FCLGA1200" },
    ],
  },
  {
    categoria: "processador",
    fabricante: "amd",
    id: uuidv4(),
    img: "/images/amd3.jpg",
    garantia: "12 meses",
    name: "Processador AMD Ryzen 7 5700G, 3.8GHz (4.6GHz Max Turbo), AM4, Vídeo Integrado, 8 Núcleos - 100-100000263BOX",
    pathName:
      "processador-amd-ryzen-7-5700g-3-8ghz-4-6ghz-max-turbo-am4-vídeo-integrado-8-núcleos-100100000263box",
    pPrazo: 2400,
    tags: [],
    destaque: true,
    promo: false,
    specs: [
      { Número_de_núcleos: "4" },
      { Nº_de_threads: "8" },
      { Frequência_baseada_em_processador: "3.70 GHz" },
      { Frequência_turbo_max: "4.40 GHz" },
      { Cache: "6 MB Intel Smart Cache" },
      { TDP: "65 W" },
      { Tamanho_máximo_de_memória: "128 GB" },
      { Tipos_de_memória: "DDR4-2666" },
      { Nº_máximo_de_canais_de_memória: "2" },
      { Gráficos_UHD_Intel: "630" },
      { Resolução_máxima: "4096 x 2304@60Hz" },
      { Nº_de_monitores_aceitos: "3" },
      { Soquetes_suportados: "FCLGA1200" },
    ],
  },
  {
    categoria: "processador",
    fabricante: "amd",
    id: uuidv4(),
    img: "/images/amd4.jpg",
    garantia: "12 meses",
    name: "Processador AMD Ryzen 9 5900X, 3.7GHz (4.8GHz Max Turbo), AM4, Vídeo Integrado, 12 Núcleos - 100-100000061WOF",
    pathName:
      "processador-amd-ryzen-9-5900x-3-7ghz-4-8ghz-max-turbo-am4-vídeo-integrado-12-núcleos-100100000061wof",
    pPrazo: 3600,
    tags: [],
    destaque: false,
    promo: false,
    specs: [
      { Número_de_núcleos: "4" },
      { Nº_de_threads: "8" },
      { Frequência_baseada_em_processador: "3.70 GHz" },
      { Frequência_turbo_max: "4.40 GHz" },
      { Cache: "6 MB Intel Smart Cache" },
      { TDP: "65 W" },
      { Tamanho_máximo_de_memória: "128 GB" },
      { Tipos_de_memória: "DDR4-2666" },
      { Nº_máximo_de_canais_de_memória: "2" },
      { Gráficos_UHD_Intel: "630" },
      { Resolução_máxima: "4096 x 2304@60Hz" },
      { Nº_de_monitores_aceitos: "3" },
      { Soquetes_suportados: "FCLGA1200" },
    ],
  },
  {
    categoria: "fonte",
    fabricante: "gigabyte",
    id: uuidv4(),
    img: "/images/fonte-gigabyte-p450b.jpg",
    garantia: "36 meses",
    name: "Fonte Gigabyte GP-P450B 450W, 80 Plus Bronze - 28200-P450B-1BRR",
    pathName: "fonte-gigabyte-gpp450b-450w-80-plus-bronze-28200p450b1brr",
    pPrazo: 375,
    tags: [],
    destaque: true,
    promo: false,
    specs: [
      { Marca: "Gigabyte" },
      { Modelo: "28200-P450B-1BRR" },
      { PFC: "PFC ativo (> 0,9 típico)" },
      { Tensão_de_entrada: "100-240 Vac (gama completa)" },
      { Corrente_de_entrada: "8-4 A" },
      { Frequência_de_entrada: "60-50 Hz" },
      { Capacidade_de_saída: "450W" },
      { OITENTA_PLUS: "Bronze" },
      { Eficiência: "85% em carga típica" },
      { Dimensões: "150 x 140 x 86 mm" },
      { Peso: "1912 gramas (bruto com embalagem)" },
    ],
  },
  {
    categoria: "fonte",
    fabricante: "xpg",
    id: uuidv4(),
    img: "/images/fonte-xpg-650.jpg",
    garantia: "36 meses",
    name: "Fonte XPG, Pylon, 650W, 80 Plus Bronze, PFC Ativo",
    pathName: "fonte-xpg-pylon-650w-80-plus-bronze-pfc-ativo",
    pPrazo: 660,
    tags: [],
    destaque: false,
    promo: false,
    specs: [
      { Marca: "Gigabyte" },
      { Modelo: "28200-P450B-1BRR" },
      { PFC: "PFC ativo (> 0,9 típico)" },
      { Tensão_de_entrada: "100-240 Vac (gama completa)" },
      { Corrente_de_entrada: "8-4 A" },
      { Frequência_de_entrada: "60-50 Hz" },
      { Capacidade_de_saída: "450W" },
      { OITENTA_PLUS: "Bronze" },
      { Eficiência: "85% em carga típica" },
      { Dimensões: "150 x 140 x 86 mm" },
      { Peso: "1912 gramas (bruto com embalagem)" },
    ],
  },
  {
    categoria: "fonte",
    fabricante: "xpg",
    id: uuidv4(),
    img: "/images/fonte-xpg-850.jpg",
    garantia: "36 meses",
    name: "Fonte XPG Core Reactor, 850W, 80 Plus Gold Modular",
    pathName: "fonte-xpg-core-reactor-850w-80-plus-gold-modular",
    pPrazo: 940,
    tags: [],
    destaque: false,
    promo: true,
    specs: [
      { Marca: "Gigabyte" },
      { Modelo: "28200-P450B-1BRR" },
      { PFC: "PFC ativo (> 0,9 típico)" },
      { Tensão_de_entrada: "100-240 Vac (gama completa)" },
      { Corrente_de_entrada: "8-4 A" },
      { Frequência_de_entrada: "60-50 Hz" },
      { Capacidade_de_saída: "450W" },
      { OITENTA_PLUS: "Bronze" },
      { Eficiência: "85% em carga típica" },
      { Dimensões: "150 x 140 x 86 mm" },
      { Peso: "1912 gramas (bruto com embalagem)" },
    ],
  },
  {
    categoria: "fonte",
    fabricante: "gigabyte",
    id: uuidv4(),
    img: "/images/fonte-gigabyte-p550b.jpg",
    garantia: "36 meses",
    name: "Fonte Gigabyte GP-P550B 550W, 80 Plus Bronze - 28200-P550B-1BRR",
    pathName: "fonte-gigabyte-gpp550b-550w-80-plus-bronze-28200p550b1brr",
    pPrazo: 505,
    tags: [],
    destaque: true,
    promo: false,
    specs: [
      { Marca: "Gigabyte" },
      { Modelo: "28200-P450B-1BRR" },
      { PFC: "PFC ativo (> 0,9 típico)" },
      { Tensão_de_entrada: "100-240 Vac (gama completa)" },
      { Corrente_de_entrada: "8-4 A" },
      { Frequência_de_entrada: "60-50 Hz" },
      { Capacidade_de_saída: "450W" },
      { OITENTA_PLUS: "Bronze" },
      { Eficiência: "85% em carga típica" },
      { Dimensões: "150 x 140 x 86 mm" },
      { Peso: "1912 gramas (bruto com embalagem)" },
    ],
  },
  {
    categoria: "fonte",
    fabricante: "xpg",
    id: uuidv4(),
    img: "/images/fonte-xpg-750.jpg",
    garantia: "36 meses",
    name: "Fonte XPG Core Reactor, 750W, 80 Plus Gold Modular",
    pathName: "fonte-xpg-core-reactor-750w-80-plus-gold-modular",
    pPrazo: 770,
    tags: [],
    destaque: true,
    promo: false,
    specs: [
      { Marca: "Gigabyte" },
      { Modelo: "28200-P450B-1BRR" },
      { PFC: "PFC ativo (> 0,9 típico)" },
      { Tensão_de_entrada: "100-240 Vac (gama completa)" },
      { Corrente_de_entrada: "8-4 A" },
      { Frequência_de_entrada: "60-50 Hz" },
      { Capacidade_de_saída: "450W" },
      { OITENTA_PLUS: "Bronze" },
      { Eficiência: "85% em carga típica" },
      { Dimensões: "150 x 140 x 86 mm" },
      { Peso: "1912 gramas (bruto com embalagem)" },
    ],
  },
  {
    categoria: "fonte",
    fabricante: "blue case",
    id: uuidv4(),
    img: "/images/fonte-bluecase-230.jpg",
    garantia: "36 meses",
    name: "Fonte Bluecase BLU230-EATX Small, 230W, Com Cabo - BLU230ESCASE",
    pathName: "fonte-bluecase-blu230eatx-small-230w-com-cabo-blu230escase",
    pPrazo: 80,
    tags: [],
    destaque: true,
    promo: false,
    specs: [
      { Marca: "Gigabyte" },
      { Modelo: "28200-P450B-1BRR" },
      { PFC: "PFC ativo (> 0,9 típico)" },
      { Tensão_de_entrada: "100-240 Vac (gama completa)" },
      { Corrente_de_entrada: "8-4 A" },
      { Frequência_de_entrada: "60-50 Hz" },
      { Capacidade_de_saída: "450W" },
      { OITENTA_PLUS: "Bronze" },
      { Eficiência: "85% em carga típica" },
      { Dimensões: "150 x 140 x 86 mm" },
      { Peso: "1912 gramas (bruto com embalagem)" },
    ],
  },
  {
    categoria: "placa-de-video",
    fabricante: "zotac",
    id: uuidv4(),
    img: "/images/gpu-rtx-2060.jpg",
    garantia: "24 meses",
    name: "Placa de Vídeo Zotac Gaming NVIDIA GeForce RTX 2060, 6GB, GDDR6 - ZT-T20600H-10M",
    pathName:
      "placa-de-vídeo-zotac-gaming-nvidia-geforce-rtx-2060-6gb-gddr6-ztt20600h10m",
    pPrazo: 4000,
    tags: [],
    destaque: false,
    promo: true,
    specs: [
      { Marca: "Zotac" },
      { Modelo: "ZT-T20600H-10M" },
      { Núcleos_CUDA: "1920" },
      { Clock_Boost: "1680 MHz" },
      { Capacidade: "6GB GDDR5" },
      { Barramento: "192 bits" },
      { PCI_Express: "3.0" },
      { Resfriamento: "Ventilador duplo" },
      { Dimensões: "209.6 x 119.3 x 41mm" },
      { Fonte_de_Alimentação_Recomendada: "500W" },
      { Consumo_de_Energia: "160W" },
      { Entrada_de_Energia: "8 pinos" },
    ],
  },
  {
    categoria: "placa-de-video",
    fabricante: "zotac",
    id: uuidv4(),
    img: "/images/gpu-rtx-3050.jpg",
    garantia: "24 meses",
    name: "Placa de Vídeo Zotac Gaming NVIDIA Geforce RTX 3050 Twin Edge, 8GB, GDDR6, LHR, Ray Tracing, VR Ready - ZT-A30500E-10M",
    pathName:
      "placa-de-vídeo-zotac-gaming-nvidia-geforce-rtx-3050-twin-edge-8gb-gddr6-lhr-ray-tracing-vr-ready-zta30500e10m",
    pPrazo: 3500,
    tags: [],
    destaque: true,
    promo: false,
    specs: [
      { Marca: "Zotac" },
      { Modelo: "ZT-T20600H-10M" },
      { Núcleos_CUDA: "1920" },
      { Clock_Boost: "1680 MHz" },
      { Capacidade: "6GB GDDR5" },
      { Barramento: "192 bits" },
      { PCI_Express: "3.0" },
      { Resfriamento: "Ventilador duplo" },
      { Dimensões: "209.6 x 119.3 x 41mm" },
      { Fonte_de_Alimentação_Recomendada: "500W" },
      { Consumo_de_Energia: "160W" },
      { Entrada_de_Energia: "8 pinos" },
    ],
  },
  {
    categoria: "placa-de-video",
    fabricante: "pc yes",
    id: uuidv4(),
    img: "/images/gpu-rx-550.jpg",
    garantia: "24 meses",
    name: "Placa de Vídeo Pcyes AMD Radeon RX 550, 4GB, GDDR5, Grafiti Series - PAJRX550DR5DF",
    pathName:
      "placa-de-vídeo-pcyes-amd-radeon-rx-550-4gb-gddr5-grafiti-series-pajrx550dr5df",
    pPrazo: 1100,
    tags: [],
    destaque: false,
    promo: true,
    specs: [
      { Marca: "Zotac" },
      { Modelo: "ZT-T20600H-10M" },
      { Núcleos_CUDA: "1920" },
      { Clock_Boost: "1680 MHz" },
      { Capacidade: "6GB GDDR5" },
      { Barramento: "192 bits" },
      { PCI_Express: "3.0" },
      { Resfriamento: "Ventilador duplo" },
      { Dimensões: "209.6 x 119.3 x 41mm" },
      { Fonte_de_Alimentação_Recomendada: "500W" },
      { Consumo_de_Energia: "160W" },
      { Entrada_de_Energia: "8 pinos" },
    ],
  },
  {
    categoria: "placa-de-video",
    fabricante: "zotac",
    id: uuidv4(),
    img: "/images/gpu-rtx-3060ti.jpg",
    garantia: "24 meses",
    name: "Placa de Vídeo Zotac NVIDIA GeForce RTX 3060 Ti Twin Edge LHR, 8GB, 14.0 Gbps, GDDR6, DLSS, Ray Tracing - ZT-A30610E-10MLHR",
    pathName:
      "placa-de-vídeo-zotac-nvidia-geforce-rtx-3060-ti-twin-edge-lhr-8gb-140-gbps-gddr6-dlss-ray-tracing-zta30610e10mlhr",
    pPrazo: 6000,
    tags: [],
    destaque: true,
    promo: false,
    specs: [
      { Marca: "Zotac" },
      { Modelo: "ZT-T20600H-10M" },
      { Núcleos_CUDA: "1920" },
      { Clock_Boost: "1680 MHz" },
      { Capacidade: "6GB GDDR5" },
      { Barramento: "192 bits" },
      { PCI_Express: "3.0" },
      { Resfriamento: "Ventilador duplo" },
      { Dimensões: "209.6 x 119.3 x 41mm" },
      { Fonte_de_Alimentação_Recomendada: "500W" },
      { Consumo_de_Energia: "160W" },
      { Entrada_de_Energia: "8 pinos" },
    ],
  },
  {
    categoria: "placa-de-video",
    fabricante: "sapphire",
    id: uuidv4(),
    img: "/images/gpu-rx-6500xt.jpg",
    garantia: "24 meses",
    name: "Placa de Vídeo Sapphire Pulse RX 6500 XT Gaming OC, 4GB, GDDR6, AMD - 11314-01-20G",
    pathName:
      "placa-de-vídeo-sapphire-pulse-rx-6500-xt-gaming-oc-4gb-gddr6-amd-113140120g",
    pPrazo: 2000,
    tags: [],
    destaque: false,
    promo: true,
    specs: [
      { Marca: "Zotac" },
      { Modelo: "ZT-T20600H-10M" },
      { Núcleos_CUDA: "1920" },
      { Clock_Boost: "1680 MHz" },
      { Capacidade: "6GB GDDR5" },
      { Barramento: "192 bits" },
      { PCI_Express: "3.0" },
      { Resfriamento: "Ventilador duplo" },
      { Dimensões: "209.6 x 119.3 x 41mm" },
      { Fonte_de_Alimentação_Recomendada: "500W" },
      { Consumo_de_Energia: "160W" },
      { Entrada_de_Energia: "8 pinos" },
    ],
  },
  {
    categoria: "placa-de-video",
    fabricante: "sapphire",
    id: uuidv4(),
    img: "/images/gpu-rx-6600xt.jpg",
    garantia: "24 meses",
    name: "Placa de Vídeo Sapphire PULSE RX6600XT OC, 8GB GDDR6, AMD RDNA 2 Architecture - 11309-03-20G",
    pathName:
      "placa-de-vídeo-sapphire-pulse-rx6600xt-oc-8gb-gddr6-amd-rdna-2-architecture-113090320g",
    pPrazo: 4500,
    tags: [],
    destaque: true,
    promo: false,
    specs: [
      { Marca: "Zotac" },
      { Modelo: "ZT-T20600H-10M" },
      { Núcleos_CUDA: "1920" },
      { Clock_Boost: "1680 MHz" },
      { Capacidade: "6GB GDDR5" },
      { Barramento: "192 bits" },
      { PCI_Express: "3.0" },
      { Resfriamento: "Ventilador duplo" },
      { Dimensões: "209.6 x 119.3 x 41mm" },
      { Fonte_de_Alimentação_Recomendada: "500W" },
      { Consumo_de_Energia: "160W" },
      { Entrada_de_Energia: "8 pinos" },
    ],
  },
  {
    categoria: "placa-mae",
    fabricante: "Asrock",
    id: uuidv4(),
    img: "/images/placa-mae-asrock-b450m.jpg",
    garantia: "12 meses",
    name: "Placa-Mãe ASRock B450M Steel Legend, AMD AM4, mATX, DDR4 - 90-MXB9Y0-A0BAYZ",
    pathName:
      "placa-mãe-asrock-b450m-steel-legend-amd-am4-matx-ddr4-90mxb9y0a0bayz",
    pPrazo: 880,
    tags: [],
    destaque: true,
    promo: false,
    specs: [
      { Marca: "ASROCK" },
      { Modelo: "90-MXB9Y0-A0UAYZ" },
      { Soquete: "AMD AM4" },
      { TDP: "105W" },
      { Slots: "4x DDR4 DIMM" },
      { Máx_capacidade_de_memória_do_sistema: "64GB" },
      { Peso: "1450 gramas" },
      { Fases_de_energia: "6 fases" },
      { Suporte_DDR4: "3533+ (OC) / 3200 (OC) / 2933 (OC) / 2667/2400/2133" },
      { Chipset: "AMD Promontory B450" },
    ],
  },
  {
    categoria: "placa-mae",
    fabricante: "Msi",
    id: uuidv4(),
    img: "/images/placa-mae-msi-b450m.jpg",
    garantia: "12 meses",
    name: "Placa-Mãe MSI B450M Pro-M2 Max p/ AMD AM4, m-ATX, DDR4",
    pathName: "placa-mãe-msi-b450m-prom2-max-p-amd-am4-matx-ddr4",
    pPrazo: 460,
    tags: [],
    destaque: false,
    promo: false,
    specs: [
      { Marca: "ASROCK" },
      { Modelo: "90-MXB9Y0-A0UAYZ" },
      { Soquete: "AMD AM4" },
      { TDP: "105W" },
      { Slots: "4x DDR4 DIMM" },
      { Máx_capacidade_de_memória_do_sistema: "64GB" },
      { Peso: "1450 gramas" },
      { Fases_de_energia: "6 fases" },
      { Suporte_DDR4: "3533+ (OC) / 3200 (OC) / 2933 (OC) / 2667/2400/2133" },
      { Chipset: "AMD Promontory B450" },
    ],
  },
  {
    categoria: "placa-mae",
    fabricante: "Asus",
    id: uuidv4(),
    img: "/images/placa-mae-asus-b550m.jpg",
    garantia: "12 meses",
    name: "Placa-Mãe Asus TUF Gaming B550M-Plus, AMD B550, mATX, DDR4",
    pathName: "placa-mãe-asus-tuf-gaming-b550mplus-amd-b550-matx-ddr4",
    pPrazo: 1250,
    tags: [],
    destaque: false,
    promo: true,
    specs: [
      { Marca: "ASROCK" },
      { Modelo: "90-MXB9Y0-A0UAYZ" },
      { Soquete: "AMD AM4" },
      { TDP: "105W" },
      { Slots: "4x DDR4 DIMM" },
      { Máx_capacidade_de_memória_do_sistema: "64GB" },
      { Peso: "1450 gramas" },
      { Fases_de_energia: "6 fases" },
      { Suporte_DDR4: "3533+ (OC) / 3200 (OC) / 2933 (OC) / 2667/2400/2133" },
      { Chipset: "AMD Promontory B450" },
    ],
  },
  {
    categoria: "placa-mae",
    fabricante: "Gigabyte",
    id: uuidv4(),
    img: "/images/placa-mae-asus-h510m.jpg",
    garantia: "12 meses",
    name: "Placa Mãe Gigabyte H510M (rev.1.0), Intel LGA 1200, ATX, DDR4 - H510M H",
    pathName: "placa-mãe-gigabyte-h510m-rev10-intel-lga-1200-atx-ddr4--h510m-h",
    pPrazo: 700,
    tags: [],
    destaque: false,
    promo: true,
    specs: [
      { Marca: "ASROCK" },
      { Modelo: "90-MXB9Y0-A0UAYZ" },
      { Soquete: "AMD AM4" },
      { TDP: "105W" },
      { Slots: "4x DDR4 DIMM" },
      { Máx_capacidade_de_memória_do_sistema: "64GB" },
      { Peso: "1450 gramas" },
      { Fases_de_energia: "6 fases" },
      { Suporte_DDR4: "3533+ (OC) / 3200 (OC) / 2933 (OC) / 2667/2400/2133" },
      { Chipset: "AMD Promontory B450" },
    ],
  },
  {
    categoria: "placa-mae",
    fabricante: "Asus",
    id: uuidv4(),
    img: "/images/placa-mae-asus-h510m.jpg",
    garantia: "12 meses",
    name: "Placa Mãe Asus PRIME H510M-A, Intel Socket LGA 1200, microATX, DDR4 - 90MB17C0-M0EAY0",
    pathName:
      "placa-mãe-asus-prime-h510ma-intel-socket-lga-1200-microatx-ddr4-90mb17c0m0eay0",
    pPrazo: 860,
    tags: [],
    destaque: true,
    promo: false,
    specs: [
      { Marca: "ASROCK" },
      { Modelo: "90-MXB9Y0-A0UAYZ" },
      { Soquete: "AMD AM4" },
      { TDP: "105W" },
      { Slots: "4x DDR4 DIMM" },
      { Máx_capacidade_de_memória_do_sistema: "64GB" },
      { Peso: "1450 gramas" },
      { Fases_de_energia: "6 fases" },
      { Suporte_DDR4: "3533+ (OC) / 3200 (OC) / 2933 (OC) / 2667/2400/2133" },
      { Chipset: "AMD Promontory B450" },
    ],
  },
  {
    categoria: "placa-mae",
    fabricante: "Gigabyte",
    id: uuidv4(),
    img: "/images/placa-mae-gigabyte-b560m.jpg",
    garantia: "12 meses",
    name: "Placa Mãe Gigabyte B560M AORUS ELITE (rev. 1.0), LGA1200, Micro ATX, DDR4",
    pathName:
      "placa-mãe-gigabyte-b560m-aorus-elite-rev-10-lga1200-micro-atx-ddr4",
    pPrazo: 1130,
    tags: [],
    destaque: false,
    promo: false,
    specs: [
      { Marca: "ASROCK" },
      { Modelo: "90-MXB9Y0-A0UAYZ" },
      { Soquete: "AMD AM4" },
      { TDP: "105W" },
      { Slots: "4x DDR4 DIMM" },
      { Máx_capacidade_de_memória_do_sistema: "64GB" },
      { Peso: "1450 gramas" },
      { Fases_de_energia: "6 fases" },
      { Suporte_DDR4: "3533+ (OC) / 3200 (OC) / 2933 (OC) / 2667/2400/2133" },
      { Chipset: "AMD Promontory B450" },
    ],
  },

  {
    categoria: "gabinete",
    fabricante: "Husky",
    id: uuidv4(),
    img: "/images/gabinete-husky-polar.jpg",
    garantia: "12 meses",
    name: "Gabinete Gamer Husky Polar, Mid Tower, ARGB, com FAN, Porta em Vidro Temperado - GA-HPO-140",
    pathName:
      "gabinete-gamer-husky-polar-mid-tower-argb-com-fan-porta-em-vidro-temperado-gahpo140k",
    pPrazo: 470,
    tags: [],
    destaque: true,
    promo: false,
    specs: [
      { Marca: "Fortrek" },
      { Modelo: "SC501BK" },
      { Cor: "Preto" },
      { Fonte: "ATX e Micro-ATX de até 150 x 140 x 85 mm" },
      { Dimensões: "350 x 315 x 165 mm" },
      { Cooler_Traseiro: "80 mm" },
      { Cooler_Lateral: "80 mm ou 120mm" },
      {
        Espaço_Interno: "310 x 156 x 346 mm; para motherboard Mini e Micro ATX",
      },
      { Posição_da_Fonte: "Superior" },
      { Fonte: "NÃO INCLUSA" },
    ],
  },
  {
    categoria: "gabinete",
    fabricante: "Sharkoon",
    id: uuidv4(),
    img: "/images/gabinete-sharkoon.jpg",
    garantia: "12 meses",
    name: "Gabinete ATX Sharkoon Som Virtual 7.1 Integrado, USB 3.0, Branco - M25-W",
    pathName:
      "gabinete-atx-sharkoon-som-virtual-71-integrado-usb-30-branco--m25w",
    pPrazo: 505,
    tags: [],
    destaque: false,
    promo: true,
    specs: [
      { Marca: "Fortrek" },
      { Modelo: "SC501BK" },
      { Cor: "Preto" },
      { Fonte: "ATX e Micro-ATX de até 150 x 140 x 85 mm" },
      { Dimensões: "350 x 315 x 165 mm" },
      { Cooler_Traseiro: "80 mm" },
      { Cooler_Lateral: "80 mm ou 120mm" },
      {
        Espaço_Interno: "310 x 156 x 346 mm; para motherboard Mini e Micro ATX",
      },
      { Posição_da_Fonte: "Superior" },
      { Fonte: "NÃO INCLUSA" },
    ],
  },
  {
    categoria: "gabinete",
    fabricante: "Redragon",
    id: uuidv4(),
    img: "/images/gabinete-redragon.jpg",
    garantia: "12 meses",
    name: "Gabinete Gamer Redragon Tailgate, Mid Tower, RGB, Lateral e Frontal em Vidro - GC-702",
    pathName:
      "gabinete-gamer-redragon-tailgate-mid-tower-rgb-lateral-e-frontal-em-vidro-gc702",
    pPrazo: 860,
    tags: [],
    destaque: true,
    promo: false,
    specs: [
      { Marca: "Fortrek" },
      { Modelo: "SC501BK" },
      { Cor: "Preto" },
      { Fonte: "ATX e Micro-ATX de até 150 x 140 x 85 mm" },
      { Dimensões: "350 x 315 x 165 mm" },
      { Cooler_Traseiro: "80 mm" },
      { Cooler_Lateral: "80 mm ou 120mm" },
      {
        Espaço_Interno: "310 x 156 x 346 mm; para motherboard Mini e Micro ATX",
      },
      { Posição_da_Fonte: "Superior" },
      { Fonte: "NÃO INCLUSA" },
    ],
  },
  {
    categoria: "gabinete",
    fabricante: "Fortrek",
    id: uuidv4(),
    img: "/images/gabinete-fortrek.jpg",
    garantia: "12 meses",
    name: "Gabinete Fortrek ATX, Preto - SC501BK",
    pathName: "gabinete-fortrek-atx-preto-sc501bk",
    pPrazo: 160,
    tags: [],
    destaque: false,
    promo: false,
    specs: [
      { Marca: "Fortrek" },
      { Modelo: "SC501BK" },
      { Cor: "Preto" },
      { Fonte: "ATX e Micro-ATX de até 150 x 140 x 85 mm" },
      { Dimensões: "350 x 315 x 165 mm" },
      { Cooler_Traseiro: "80 mm" },
      { Cooler_Lateral: "80 mm ou 120mm" },
      {
        Espaço_Interno: "310 x 156 x 346 mm; para motherboard Mini e Micro ATX",
      },
      { Posição_da_Fonte: "Superior" },
      { Fonte: "NÃO INCLUSA" },
    ],
  },
  {
    categoria: "gabinete",
    fabricante: "Sharkoon",
    id: uuidv4(),
    img: "/images/gabinete-sharkoon-vs7.jpg",
    garantia: "12 meses",
    name: "Gabinete Sharkoon Mid-ATX VS7 Window USB 3.0 Preto",
    pathName: "gabinete-sharkoon-midatx-vs7-window-usb-30-preto",
    pPrazo: 625,
    tags: [],
    destaque: false,
    promo: true,
    specs: [
      { Marca: "Fortrek" },
      { Modelo: "SC501BK" },
      { Cor: "Preto" },
      { Fonte: "ATX e Micro-ATX de até 150 x 140 x 85 mm" },
      { Dimensões: "350 x 315 x 165 mm" },
      { Cooler_Traseiro: "80 mm" },
      { Cooler_Lateral: "80 mm ou 120mm" },
      {
        Espaço_Interno: "310 x 156 x 346 mm; para motherboard Mini e Micro ATX",
      },
      { Posição_da_Fonte: "Superior" },
      { Fonte: "NÃO INCLUSA" },
    ],
  },
  {
    categoria: "gabinete",
    fabricante: "Corsair",
    id: uuidv4(),
    img: "/images/gabinete-corsair.jpg",
    garantia: "12 meses",
    name: "Gabinete Gamer Corsair Crystal 570X, RGB, Mid-Tower, ATX, Lateral em Vidro Temperado Espelhado, Preto - CC-9011126-WW",
    pathName:
      "gabinete-gamer-corsair-crystal-570x-rgb-midtower-atx-lateral-em-vidro-temperado-espelhado-preto-cc9011126ww",
    pPrazo: 1440,
    tags: [],
    destaque: true,
    promo: false,
    specs: [
      { Marca: "Fortrek" },
      { Modelo: "SC501BK" },
      { Cor: "Preto" },
      { Fonte: "ATX e Micro-ATX de até 150 x 140 x 85 mm" },
      { Dimensões: "350 x 315 x 165 mm" },
      { Cooler_Traseiro: "80 mm" },
      { Cooler_Lateral: "80 mm ou 120mm" },
      {
        Espaço_Interno: "310 x 156 x 346 mm; para motherboard Mini e Micro ATX",
      },
      { Posição_da_Fonte: "Superior" },
      { Fonte: "NÃO INCLUSA" },
    ],
  },
  {
    categoria: "ssd",
    fabricante: "Crucial",
    id: uuidv4(),
    img: "/images/ssd-crucial-240.jpg",
    garantia: "12 meses",
    name: "SSD Crucial BX500, 240GB, SATA, Leitura 540MB/s, Gravação 500MB/s - CT240BX500SSD1",
    pathName:
      "ssd-crucial-bx500-240gb-sata-leitura-540mbs-gravação-500mbs-ct240bx500ssd1",
    pPrazo: 240,
    tags: [],
    destaque: false,
    promo: true,
    specs: [
      { Marca: "Husky Gaming" },
      { Modelo: "HSS-ST-120" },
      { Capacidade: "128GB" },
      { Fonte: "ATX e Micro-ATX de até 150 x 140 x 85 mm" },
      { Dimensões: "350 x 315 x 165 mm" },
      { Cooler_Traseiro: "80 mm" },
      { Cooler_Lateral: "80 mm ou 120mm" },
      {
        Espaço_Interno: "310 x 156 x 346 mm; para motherboard Mini e Micro ATX",
      },
      { Posição_da_Fonte: "Superior" },
      { Fonte: "NÃO INCLUSA" },
    ],
  },
  {
    categoria: "ssd",
    fabricante: "Kingston",
    id: uuidv4(),
    img: "/images/ssd-kingston-500.jpg",
    garantia: "12 meses",
    name: "SSD Kingston NV1 500GB,M.2 2280 NVMe, Leitura: 2100MB/s e Gravação: 1700MB/s - SNVS/500G",
    pathName:
      "ssd-kingston-nv1-500gbm2-2280-nvme-leitura-2100mbs-e-gravação-1700mbs-snvs500g",
    pPrazo: 405,
    tags: [],
    destaque: false,
    promo: true,
    specs: [
      { Marca: "Husky Gaming" },
      { Modelo: "HSS-ST-120" },
      { Capacidade: "128GB" },
      { Fonte: "ATX e Micro-ATX de até 150 x 140 x 85 mm" },
      { Dimensões: "350 x 315 x 165 mm" },
      { Cooler_Traseiro: "80 mm" },
      { Cooler_Lateral: "80 mm ou 120mm" },
      {
        Espaço_Interno: "310 x 156 x 346 mm; para motherboard Mini e Micro ATX",
      },
      { Posição_da_Fonte: "Superior" },
      { Fonte: "NÃO INCLUSA" },
    ],
  },
  {
    categoria: "ssd",
    fabricante: "Husky",
    id: uuidv4(),
    img: "/images/ssd-husky-128.jpg",
    garantia: "12 meses",
    name: "SSD Husky Gaming, Preto, Sata 3, 2.5, 128GB, 500MB/S de Leitura e Escrita - HGML000",
    pathName:
      "ssd-husky-gaming-preto-sata-3-25-128gb-500mbs-de-leitura-e-escrita-hgml000",
    pPrazo: 140,
    tags: [],
    destaque: false,
    promo: false,
    specs: [
      { Marca: "Husky Gaming" },
      { Modelo: "HSS-ST-120" },
      { Capacidade: "128GB" },
      { Fonte: "ATX e Micro-ATX de até 150 x 140 x 85 mm" },
      { Dimensões: "350 x 315 x 165 mm" },
      { Cooler_Traseiro: "80 mm" },
      { Cooler_Lateral: "80 mm ou 120mm" },
      {
        Espaço_Interno: "310 x 156 x 346 mm; para motherboard Mini e Micro ATX",
      },
      { Posição_da_Fonte: "Superior" },
      { Fonte: "NÃO INCLUSA" },
    ],
  },
  {
    categoria: "ssd",
    fabricante: "WD",
    id: uuidv4(),
    img: "/images/ssd-wd-480.jpg",
    garantia: "12 meses",
    name: "SSD WD Green PC SN350 480GB, PCIe, NVMe, Leitura: 2400MB/s, Escrita: 1650MB/s - WDS480G2G0C",
    pathName:
      "ssd-wd-green-pc-sn350-480gb-pcie-nvme-leitura-2400mbs-escrita-1650mbs-wds480g2g0c",
    pPrazo: 400,
    tags: [],
    destaque: true,
    promo: false,
    specs: [
      { Marca: "Husky Gaming" },
      { Modelo: "HSS-ST-120" },
      { Capacidade: "128GB" },
      { Fonte: "ATX e Micro-ATX de até 150 x 140 x 85 mm" },
      { Dimensões: "350 x 315 x 165 mm" },
      { Cooler_Traseiro: "80 mm" },
      { Cooler_Lateral: "80 mm ou 120mm" },
      {
        Espaço_Interno: "310 x 156 x 346 mm; para motherboard Mini e Micro ATX",
      },
      { Posição_da_Fonte: "Superior" },
      { Fonte: "NÃO INCLUSA" },
    ],
  },
  {
    categoria: "ssd",
    fabricante: "WD",
    id: uuidv4(),
    img: "/images/ssd-wd-2tb.jpg",
    garantia: "12 meses",
    name: "SSD WD BLACK SN750 2TB M.2 NVMe, Leitura: 3400MB/s, Gravação: 2900MB/s - WDS200T3X0C",
    pathName:
      "ssd-wd-black-sn750-2tb-m2-nvme-leitura-3400mbs-gravação-2900mbs-wds200t3x0c",
    pPrazo: 2100,
    tags: [],
    destaque: true,
    promo: false,
    specs: [
      { Marca: "Husky Gaming" },
      { Modelo: "HSS-ST-120" },
      { Capacidade: "128GB" },
      { Fonte: "ATX e Micro-ATX de até 150 x 140 x 85 mm" },
      { Dimensões: "350 x 315 x 165 mm" },
      { Cooler_Traseiro: "80 mm" },
      { Cooler_Lateral: "80 mm ou 120mm" },
      {
        Espaço_Interno: "310 x 156 x 346 mm; para motherboard Mini e Micro ATX",
      },
      { Posição_da_Fonte: "Superior" },
      { Fonte: "NÃO INCLUSA" },
    ],
  },
  {
    categoria: "ssd",
    fabricante: "XPG",
    id: uuidv4(),
    img: "/images/ssd-xpg-1tb.jpg",
    garantia: "12 meses",
    name: "SSD XPG S41 TUF, 1TB, M.2, PCIe, Leituras: 3500MB/s, Gravações: 3000MB/s - AGAMMIXS41-1T-C",
    pathName:
      "ssd-xpg-s41-tuf-1tb-m2-pcie-leituras-3500mbs-gravações-3000mbs-agammixs411tc",
    pPrazo: 940,
    tags: [],
    destaque: false,
    promo: false,
    specs: [
      { Marca: "Husky Gaming" },
      { Modelo: "HSS-ST-120" },
      { Capacidade: "128GB" },
      { Fonte: "ATX e Micro-ATX de até 150 x 140 x 85 mm" },
      { Dimensões: "350 x 315 x 165 mm" },
      { Cooler_Traseiro: "80 mm" },
      { Cooler_Lateral: "80 mm ou 120mm" },
      {
        Espaço_Interno: "310 x 156 x 346 mm; para motherboard Mini e Micro ATX",
      },
      { Posição_da_Fonte: "Superior" },
      { Fonte: "NÃO INCLUSA" },
    ],
  },
];

export default listaItens;
