import { v4 as uuidv4 } from 'uuid';

const cpuList = [
  {
    fabricante: "intel",
    id: uuidv4(),
    img: "/images/intel1.jpg",
    garantia: "36 meses",
    name: "Processador Intel Core i3-10105, Cache 6MB, 3.7GHz (4.4GHz Max Turbo), LGA 1200 - BX8070110105",
    pPrazo: 1000,
    specs: [
      "Número de núcleos: 4",
      "Nº de threads: 8",
      "Frequência baseada em processador: 3.70 GHz",
      "Frequência turbo max: 4.40 GHz",
      "Cache: 6 MB Intel Smart Cache",
      "TDP: 65 W",
      "Tamanho máximo de memória: 128 GB",
      " Tipos de memória: DDR4-2666",
      "Nº máximo de canais de memória: 2",
      "Gráficos UHD Intel: 630",
      "Resolução máxima (HDMI 1.4): 4096 x 2160@30Hz",
      "Resolução máxima (DP): 4096 x 2304@60Hz",
      "Nº de monitores aceitos: 3",
      "Soquetes suportados: FCLGA1200",
    ],
  },
  {
    fabricante: "intel",
    id: uuidv4(),
    img: "/images/intel2.jpg",
    garantia: "36 meses",
    name: "Processador Intel Core i5-12400F, Cache 18MB, 2.5GHz (4.4GHz Max Turbo), LGA 1700 - BX8071512400F",
    pPrazo: 1600,
    specs: [
      "Número de núcleos: 4",
      "Nº de threads: 8",
      "Frequência baseada em processador: 3.70 GHz",
      "Frequência turbo max: 4.40 GHz",
      "Cache: 6 MB Intel Smart Cache",
      "TDP: 65 W",
      "Tamanho máximo de memória: 128 GB",
      " Tipos de memória: DDR4-2666",
      "Nº máximo de canais de memória: 2",
      "Gráficos UHD Intel: 630",
      "Resolução máxima (HDMI 1.4): 4096 x 2160@30Hz",
      "Resolução máxima (DP): 4096 x 2304@60Hz",
      "Nº de monitores aceitos: 3",
      "Soquetes suportados: FCLGA1200",
    ],
  },
  {
    fabricante: "intel",
    id: uuidv4(),
    img: "/images/intel3.jpg",
    garantia: "36 meses",
    name: "Processador Intel Core i7-12700K, Cache 25MB, 3.6GHz (5.0GHz Max Turbo), LGA 1700 - BX8071512700K",
    pPrazo: 3400,
    specs: [
      "Número de núcleos: 4",
      "Nº de threads: 8",
      "Frequência baseada em processador: 3.70 GHz",
      "Frequência turbo max: 4.40 GHz",
      "Cache: 6 MB Intel Smart Cache",
      "TDP: 65 W",
      "Tamanho máximo de memória: 128 GB",
      " Tipos de memória: DDR4-2666",
      "Nº máximo de canais de memória: 2",
      "Gráficos UHD Intel: 630",
      "Resolução máxima (HDMI 1.4): 4096 x 2160@30Hz",
      "Resolução máxima (DP): 4096 x 2304@60Hz",
      "Nº de monitores aceitos: 3",
      "Soquetes suportados: FCLGA1200",
    ],
  },
  {
    fabricante: "intel",
    id: uuidv4(),
    img: "/images/intel4.jpg",
    garantia: "36 meses",
    name: "Processador Intel 12900k Core I9 1700 3.20 Ghz - Bx8071512900k - Ger 12",
    pPrazo: 7500,
    specs: [
      "Número de núcleos: 4",
      "Nº de threads: 8",
      "Frequência baseada em processador: 3.70 GHz",
      "Frequência turbo max: 4.40 GHz",
      "Cache: 6 MB Intel Smart Cache",
      "TDP: 65 W",
      "Tamanho máximo de memória: 128 GB",
      " Tipos de memória: DDR4-2666",
      "Nº máximo de canais de memória: 2",
      "Gráficos UHD Intel: 630",
      "Resolução máxima (HDMI 1.4): 4096 x 2160@30Hz",
      "Resolução máxima (DP): 4096 x 2304@60Hz",
      "Nº de monitores aceitos: 3",
      "Soquetes suportados: FCLGA1200",
    ],
  },
  {
    fabricante: "amd",
    id: uuidv4(),
    img: "/images/amd1.jpg",
    garantia: "12 meses",
    name: "Processador AMD Ryzen 3 3200G, 3.6GHz (4GHz Max Turbo), AM4, Vídeo Integrado, 4 Núcleos  - YD3200C5FHBOX",
    pPrazo: 1100,
    specs: [
      "Número de núcleos: 4",
      "Nº de threads: 8",
      "Frequência baseada em processador: 3.70 GHz",
      "Frequência turbo max: 4.40 GHz",
      "Cache: 6 MB Intel Smart Cache",
      "TDP: 65 W",
      "Tamanho máximo de memória: 128 GB",
      " Tipos de memória: DDR4-2666",
      "Nº máximo de canais de memória: 2",
      "Gráficos UHD Intel: 630",
      "Resolução máxima (HDMI 1.4): 4096 x 2160@30Hz",
      "Resolução máxima (DP): 4096 x 2304@60Hz",
      "Nº de monitores aceitos: 3",
      "Soquetes suportados: FCLGA1200",
    ],
  },
  {
    fabricante: "amd",
    id: uuidv4(),
    img: "/images/amd2.jpg",
    garantia: "12 meses",
    name: "Processador AMD Ryzen 5 5600G, 3.9GHz (4.4GHz Max Turbo), AM4, Vídeo Integrado, 6 Núcleos - 100-100000252BOX",
    pPrazo: 1900,
    specs: [{}, {}, {}],
  },
  {
    fabricante: "amd",
    id: uuidv4(),
    img: "/images/amd3.jpg",
    garantia: "12 meses",
    name: "Processador AMD Ryzen 7 5700G, 3.8GHz (4.6GHz Max Turbo), AM4, Vídeo Integrado, 8 Núcleos - 100-100000263BOX",
    pPrazo: 2400,
    specs: [{}, {}, {}],
  },
  {
    fabricante: "amd",
    id: uuidv4(),
    img: "/images/amd4.jpg",
    garantia: "12 meses",
    name: "Processador AMD Ryzen 9 5900X, 3.7GHz (4.8GHz Max Turbo), AM4, Vídeo Integrado, 12 Núcleos - 100-100000061WOF",
    pPrazo: 3600,
    specs: [{}, {}, {}],
  },
];

export default cpuList;
