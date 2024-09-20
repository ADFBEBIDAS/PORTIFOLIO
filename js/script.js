const silder = document.querySelectorAll('.swiper-slide')

const imgProduto = document.getElementById('imgProduto');

const codProduto = document.getElementById('codProduto');

const nomeProduto = document.getElementById('nomeProduto');

const infoProduto = document.getElementById('infoProduto');

function selectProductItaipava(number) {

  if (number == 13 || number == 17 || number == 20) {
    imgProduto.setAttribute('src', `./images/itaipava/${number}.webp`)
    codProduto.textContent = produtosItaipava[number].cod
    nomeProduto.textContent = produtosItaipava[number].nome
    infoProduto.textContent = produtosItaipava[number].obs
  } else {
    imgProduto.setAttribute('src', `./images/itaipava/${number}.webp`)
    codProduto.textContent = produtosItaipava[number].cod
    nomeProduto.textContent = produtosItaipava[number].nome
    infoProduto.textContent = produtosItaipava[number].obs
  }

}

function selectProductIBlackPrincess(number) {

  if (number == 12 || number == 14 || number == 15) {
    imgProduto.setAttribute('src', `./images/blackprinces/${number}.webp`)
    codProduto.textContent = produtosBlackPrincess[number].cod
    nomeProduto.textContent = produtosBlackPrincess[number].nome
    infoProduto.textContent = produtosBlackPrincess[number].obs


  } else {
    imgProduto.setAttribute('src', `./images/blackprinces/${number}.webp`)
    codProduto.textContent = produtosBlackPrincess[number].cod
    nomeProduto.textContent = produtosBlackPrincess[number].nome
    infoProduto.textContent = produtosBlackPrincess[number].obs


  }

}

function selectProductCabare(number) {

  if (number == 12 || number == 13 || number == 14 || number == 15) {
    imgProduto.setAttribute('src', `./images/cabare/${number}.webp`)
    codProduto.textContent = produtosCabare[number].cod
    nomeProduto.textContent = produtosCabare[number].nome
    infoProduto.textContent = produtosCabare[number].obs
    
  } else {
    imgProduto.setAttribute('src', `./images/cabare/${number}.webp`)
    codProduto.textContent = produtosCabare[number].cod
    nomeProduto.textContent = produtosCabare[number].nome
    infoProduto.textContent = produtosCabare[number].obs

  }

}

function selectProductPetra(number) {

  if (number == 7) {
    imgProduto.setAttribute('src', `./images/petra/${number}.webp`)
    codProduto.textContent = produtosPetra[number].cod
    nomeProduto.textContent = produtosPetra[number].nome
    infoProduto.textContent = produtosItaipava[number].obs
    
    
  } else {
    imgProduto.setAttribute('src', `./images/petra/${number}.webp`)
    codProduto.textContent = produtosPetra[number].cod
    nomeProduto.textContent = produtosPetra[number].nome
    infoProduto.textContent = produtosPetra[number].obs

  }

}

function selectProductCrystal(number) {

  if (number == 322) {
    imgProduto.setAttribute('src', `./images/crystal/${number}.webp`)
    codProduto.textContent = produtosCrystal[number].cod
    nomeProduto.textContent = produtosCrystal[number].nome
    infoProduto.textContent = produtosCrystal[number].obs
    
    
  } else {
    imgProduto.setAttribute('src', `./images/crystal/${number}.webp`)
    codProduto.textContent = produtosCrystal[number].cod
    nomeProduto.textContent = produtosCrystal[number].nome
    infoProduto.textContent = produtosCrystal[number].obs

  }

}

function selectProductLokal(number) {

  if (number == 178) {
    imgProduto.setAttribute('src', `./images/Lokal/${number}.webp`)
    codProduto.textContent = produtosLokal[number].cod
    nomeProduto.textContent = produtosLokal[number].nome
    infoProduto.textContent = produtosLokal[number].obs
    
  } else {
    imgProduto.setAttribute('src', `./images/Lokal/${number}.webp`)
    codProduto.textContent = produtosLokal[number].cod
    nomeProduto.textContent = produtosLokal[number].nome
    infoProduto.textContent = produtosLokal[number].obs
  }

}

function selectProducCacildis(number) {

  if (number == 178) {
    imgProduto.setAttribute('src', `./images/cacildis/${number}.webp`)
    codProduto.textContent = produtosCacildis[number].cod
    nomeProduto.textContent = produtosCacildis[number].nome
    infoProduto.textContent = produtosCacildis[number].obs
    
  } else {
    imgProduto.setAttribute('src', `./images/cacildis/${number}.webp`)
    codProduto.textContent = produtosCacildis[number].cod
    nomeProduto.textContent = produtosCacildis[number].nome
    infoProduto.textContent = produtosCacildis[number].obs

  }

}

function selectProducIt(number) {

  if (number == 178) {
    imgProduto.setAttribute('src', `./images/it/${number}.webp`)
    codProduto.textContent = produtosIt[number].cod
    nomeProduto.textContent = produtosIt[number].nome
    infoProduto.textContent = produtosIt[number].obs
    
    
  } else {
    imgProduto.setAttribute('src', `./images/it/${number}.webp`)
    codProduto.textContent = produtosIt[number].cod
    nomeProduto.textContent = produtosIt[number].nome
    infoProduto.textContent = produtosIt[number].obs

  }

}

function selectProducTnt(number) {

  if (number == 0 || number == 1 || number == 2 || number == 3 || number == 5) {
    imgProduto.setAttribute('src', `./images/tnt/${number}.webp`)
    codProduto.textContent = produtosTnt[number].cod
    nomeProduto.textContent = produtosTnt[number].nome
    infoProduto.textContent = produtosTnt[number].obs
    
  } else {
    imgProduto.setAttribute('src', `./images/tnt/${number}.webp`)
    codProduto.textContent = produtosTnt[number].cod
    nomeProduto.textContent = produtosTnt[number].nome
    infoProduto.textContent = produtosTnt[number].obs
  }
}

function selectProductWeltenBurger(number) {

  if (number == 178) {
    imgProduto.setAttribute('src', `./images/weltenburger/${number}.webp`)
    codProduto.textContent = produtosWeltenburger[number].cod
    nomeProduto.textContent = produtosWeltenburger[number].nome
    infoProduto.textContent = produtosWeltenburger[number].obs
    
  } else {
    imgProduto.setAttribute('src', `./images/weltenburger/${number}.webp`)
    codProduto.textContent = produtosWeltenburger[number].cod
    nomeProduto.textContent = produtosWeltenburger[number].nome
    infoProduto.textContent = produtosWeltenburger[number].obs
  }

}


function selectProductdomTparro(number) {

  if (number == 0 || number == 4 || number == 5 || number == 9) {
    imgProduto.setAttribute('src', `./images/domTaparro/${number}.webp`)
    codProduto.textContent = produtosdomTaparro[number].cod
    nomeProduto.textContent = produtosdomTaparro[number].nome
    infoProduto.textContent = produtosdomTaparro[number].obs
    
  } else {
    imgProduto.setAttribute('src', `./images/domTaparro/${number}.webp`)
    codProduto.textContent = produtosdomTaparro[number].cod
    nomeProduto.textContent = produtosdomTaparro[number].nome
    infoProduto.textContent = produtosdomTaparro[number].obs
  }

}

function selectProductPurissima(number) {

  if (number == 0 || number == 1 || number == 2) {
    imgProduto.setAttribute('src', `./images/purissima/${number}.webp`)
    codProduto.textContent = produtosPurissima[number].cod
    nomeProduto.textContent = produtosPurissima[number].nome
    infoProduto.textContent = produtosPurissima[number].obs
    
  } else {
    imgProduto.setAttribute('src', `./images/purissima/${number}.webp`)
    codProduto.textContent = produtosPurissima[number].cod
    nomeProduto.textContent = produtosPurissima[number].nome
    infoProduto.textContent = produtosPurissima[number].obs
  }

}

function selectProductVodka(number) {

  if (number == 0 || number == 4 || number == 5 || number == 9) {
    imgProduto.setAttribute('src', `./images/vodka/${number}.webp`)
    codProduto.textContent = produtosVodka[number].cod
    nomeProduto.textContent = produtosVodka[number].nome
    infoProduto.textContent = produtosVodka[number].obs
    
  } else {
    imgProduto.setAttribute('src', `./images/vodka/${number}.webp`)
    codProduto.textContent = produtosVodka[number].cod
    nomeProduto.textContent = produtosVodka[number].nome
    infoProduto.textContent = produtosVodka[number].obs
  }

}

function selectProducPetraTonica(number) {

  if (number == 0 || number == 1) {
    imgProduto.setAttribute('src', `./images/petraTonica/${number}.webp`)
    codProduto.textContent = produtosPetraTonica[number].cod
    nomeProduto.textContent = produtosPetraTonica[number].nome
    infoProduto.textContent = produtosPetraTonica[number].obs
    
  } else {
    imgProduto.setAttribute('src', `./images/petraTonica/${number}.webp`)
    codProduto.textContent = produtosPetraTonica[number].cod
    nomeProduto.textContent = produtosPetraTonica[number].nome
    infoProduto.textContent = produtosPetraTonica[number].obs
  }

}




const produtosItaipava = [
  {
    "cod": "1022",
    "nome": "Itaipava Malzbier 355ml",
    "obs": 'descontinuadas'
  },
  {
    "cod": "8470",
    "nome": "Itaipava Zero 355ml",
    "obs": 'descontinuada'
  },

  {
    "cod": "92133",
    "nome": "Itaipava 100% Malte 600ml",
    "obs": 'Produto vendido em pack com 24 unidades'
  },
  {
    "cod": "16403",
    "nome": "Itaipava 100% Malte 330ml",
    "obs": 'Produto vendido em pack com 12 unidades'
  },
  {
    "cod": "16353",
    "nome": "Itaipava 100% Malte 300ml",
    "obs": 'Produto vendido em pack com 24 unidades'
  },
  {
    "cod": "16399",
    "nome": "Itaipava Zero 330ml",
    "obs": 'Produto vendido em pack com 12 unidades'
  },
  {
    "cod": "16401",
    "nome": "Itaipava Malzbier 330ml",
    "obs": 'Produto vendido em pack com 12 unidades'
  },
  {
    "cod": "16350",
    "nome": "Itaipava 100% Malte 1L",
    "obs": 'Produto vendido em pack com 12 unidades'
  },
  {
    "cod": "2950",
    "nome": "Itaipava Pilsen 300ml",
    "obs": 'Produto vendido em pack com 24 unidades'
  },
  {
    "cod": "1045",
    "nome": "Itaipava Pilsen 1L",
    "obs": 'Produto vendido em pack com 12 unidades'
  },

  {
    "cod": "1001",
    "nome": "Itaipava Pilsen 600ml",
    "obs": 'Produto vendido em pack com 24 unidades'
  },
  {
    "cod": "92132",
    "nome": "Itaipava 100% Malte 350ml",
    "obs": 'Produto vendido em pack com 12 unidades'
  },
  {
    "cod": "100571",
    "nome": "Itaipava 100% Malte 269ml",
    "obs": 'Produto vendido em pack com 12 unidades'
  },
  {
    "cod": "NÃO LOCALIZADO",
    "nome": "Itaipava 100% Malte 473ml",
    "obs": 'descontinuada'
  },
  {
    "cod": "1002",
    "nome": "Itaipava Pilsen 350ml",
    "obs": 'Produto vendido em pack com 12 unidades'
  },
  {
    "cod": "1029",
    "nome": "Itaipava Malzbier 350ml",
    "obs": 'Produto vendido em pack com 12 unidades'
  },
  {
    "cod": "1034",
    "nome": "Itaipava Pilsen 473ml",
    "obs": 'descontinuada'
  },
  {
    "cod": "8461",
    "nome": "Itaipava Pilsen 269ml",
    "obs": 'Produto vendido em pack com 12 unidades'
  },
  {
    "cod": "8468",
    "nome": "Itaipava Zero 350ml",
    "obs": 'Produto vendido em pack com 12 unidades'
  },
  {
    "cod": "100477",
    "nome": "Itaipava Pilsen 550ml",
    "obs": 'descontinuada'
  },
  {
    "cod": "16808",
    "nome": "Ita Go Draft - Edição Tardezinha 350ml",
    "obs": 'roduto vendido em pack com 12 unidades'
  },
]

const produtosBlackPrincess = [
  {
    "cod": "16636",
    "nome": "Black Princess Gold 330ml",
    "obs": 'Produto vendido em pack com 12 unidades'
  },
  {
    "cod": "15624",
    "nome": "Tião Bock 600ml",
    "obs": 'Produto vendido em pack com 6 unidades'
  },

  {
    "cod": "15622",
    "nome": "APA-82 600ml",
    "obs": 'Produto vendido em pack com 6 unidades'
  },
  {
    "cod": "NÃO LOCALIZADO",
    "nome": "Black Princess Gold 350ml",
    "obs": 'descontinuada'
  },
  {
    "cod": "14734",
    "nome": "Back To The Red 600ml",
    "obs": 'Produto vendido em pack com 6 unidades'
  },
  {
    "cod": "14736",
    "nome": "Let’s Hop 600ml",
    "obs": 'Produto vendido em pack com 6 unidades'
  },
  {
    "cod": "1074",
    "nome": "Dark 600ml",
    "obs": 'Produto vendido em pack com 6 unidades'
  },
  {
    "cod": "15151",
    "nome": "Black Princess Gold 600ml",
    "obs": 'Produto vendido em pack com 12 e 24 unidades'
  },
  {
    "cod": "14738",
    "nome": "Miss Blonde 600ml",
    "obs": 'Produto vendido em pack com 6 unidades'
  }
]

const produtosCabare = [
  {
    "cod": "16332",
    "nome": "Cabaré ICE Frutas Amarelas 275ml",
    "obs": 'Produto vendido em pack com 12 unidades'
  },
  {
    "cod": "16333",
    "nome": "Cabaré ICE Frutas Vermelhas 275ml",
    "obs": 'Produto vendido em pack com 12 unidades'
  },

  {
    "cod": "16491",
    "nome": "Cabaré Puro Malte 600ml",
    "obs": 'Produto vendido em pack com 12 e 24 unidades'
  },
  {
    "cod": "16493",
    "nome": "Cabaré Puro Malte 350ml",
    "obs": 'Produto vendido em pack com 12 unidades'
  },
  {
    "cod": "16495",
    "nome": "Cabaré Puro Malte 330ml ",
    "obs": 'Produto vendido em pack com 12 unidades'
  },
  {
    "cod": "16595",
    "nome": "Cabaré ICE Tangerina 269ml",
    "obs": 'Produto vendido em pack com 12 unidades'
  },
  {
    "cod": "16596",
    "nome": "Cabaré ICE Limão 269ml",
    "obs": 'Produto vendido em pack com 12 unidades'
  },
  {
    "cod": "16598",
    "nome": "Cabaré ICE Frutas Vermelhas 269ml",
    "obs": 'Produto vendido em pack com 12 unidades'
  },
  {
    "cod": "16597",
    "nome": "Cabaré ICE Frutas Amarelas 269ml",
    "obs": 'Produto vendido em pack com 12 unidades'
  },
  {
    "cod": "16599",
    "nome": "Cabaré ICE Tangerina 275ml",
    "obs": 'Produto vendido em pack com 12 unidades'
  },

  {
    "cod": "16923",
    "nome": "Cabaré ICE Limão 275ml",
    "obs": 'Produto vendido em pack com 12 unidades'
  },
  {
    "cod": "15632",
    "nome": "Cabaré Amburana",
    "obs": 'Produto vendido em pack com 6 unidades'
  },
  {
    "cod": "15176",
    "nome": "Cabaré Ouro",
    "obs": 'Produto vendido em pack com 6 unidades'
  },
  {
    "cod": "15174",
    "nome": "Cabaré Prata",
    "obs": 'Produto vendido em pack com 6 unidades'
  },
  {
    "cod": "16259",
    "nome": "Cabaré Fire",
    "obs": 'Produto vendido em pack com 6 unidades'
  },
  {
    "cod": "15172",
    "nome": "Cabaré Extra Premium 15 anos (Edição Limitada)",
    "obs": 'Produto com 1 unidade'
  },
  {
    "cod": "15612",
    "nome": "Cabaré Extra Premium 10 anos Carvalho Americano",
    "obs": 'Produto com 1 unidade'
  },
]

const produtosPetra = [
  {
    "cod": "1024",
    "nome": "Petra Origem Escura 355ml",
    "obs": 'descontinuada'
  },
  {
    "cod": "NÃO LOCALIZADO",
    "nome": "Petra 1 Litro",
    "obs": 'descontinuada'
  },
  {
    "cod": "2473",
    "nome": "Petra Origem Escura 350ml",
    "obs": 'descontinuada'
  },
  {
    "cod": "15142",
    "nome": "Petra Puro Malte Origem 269ml",
    "obs": 'Produto vendido em pack com 12 unidades'
  },
  {
    "cod": "15759",
    "nome": "Petra Puro Malte Origem 300ml",
    "obs": 'Produto ve  ndido em pack com 12 unidades'
  },
  {
    "cod": "NÃO LOCALIZADO",
    "nome": "Petra Puro Malte Origem 473ml",
    "obs": 'descontinuada'
  },
  {
    "cod": "15139",
    "nome": "Petra Puro Malte Origem 600ml",
    "obs": 'Produto vendido em pack com 24 unidades'
  },
  {
    "cod": "16404",
    "nome": "Petra Puro Malte Origem 330ml",
    "obs": 'Produto vendido em pack com 12 unidades'
  },
  {
    "cod": "15145",
    "nome": "Petra Puro Malte Origem 350ml",
    "obs": 'Produto vendido em pack com 12 unidades'
  },
]

const produtosCrystal = [
  {
    "cod": "1003",
    "nome": "Crystal Pilsen 600ml",
    "obs": 'Produto vendido em pack com 12 unidades'
  },
  {
    "cod": "1046",
    "nome": "Crystal Pilsen 1L",
    "obs": 'Produto vendido em pack com 12 unidades'
  },

  {
    "cod": "8455",
    "nome": "Crystal Pilsen 250ml",
    "obs": 'Produto vendido em pack com 12 unidades'
  },
  {
    "cod": "1004",
    "nome": "Crystal Pilsen 350ml",
    "obs": 'Produto vendido em pack com 12 unidades'
  },
  {
    "cod": "1035",
    "nome": "Crystal Pilsen 473ml",
    "obs": 'descontinuada'
  },
  {
    "cod": "8459",
    "nome": "Crystal Pilsen 269ml",
    "obs": 'Produto vendido em pack com 12 unidades'
  },
  {
    "cod": "NÃO LOCALIZADO",
    "nome": "Crystal Pilsen 300ml",
    "obs": 'descontinuada'
  },
]

const produtosLokal = [
  {
    "cod": "1700",
    "nome": "Lokal Pilsen 600ml",
    "obs": 'Produto vendido em pack com 24 unidades'
  },
  {
    "cod": "1701",
    "nome": "Lokal Pilsen 350ml",
    "obs": 'Produto vendido em pack com 12 unidades'
  },

  {
    "cod": "14585",
    "nome": "Lokal Pilsen 1L",
    "obs": 'Produto vendido em pack com 12 unidades'
  },
  {
    "cod": "NÃO LOCALIZADO",
    "nome": "Lokal Pilsen 473ml",
    "obs": 'descontinuada'
  }
]

const produtosCacildis = [
  {
    "cod": "NÃO LOCALIZADO",
    "nome": "Ampolis Cacildis Puro Malte 355ml",
    "obs": 'descontinuada'
  },
  {
    "cod": "NÃO LOCALIZADO",
    "nome": "Ampolis Biritis 330 ml",
    "obs": 'descontinuada'
  },

  {
    "cod": "16396",
    "nome": "Ampolis Cacildis Puro Malte 330ml",
    "obs": 'Produto vendido em pack com 12 unidades'
  },
  {
    "cod": "NÃO LOCALIZADO",
    "nome": "Ampolis Ditriguis 330ml",
    "obs": 'descontinuada'
  },
  {
    "cod": "NÃO LOCALIZADO",
    "nome": "Ampolis Forévis 330ml",
    "obs": 'descontinuada'
  },
  {
    "cod": "NÃO LOCALIZADO",
    "nome": "Ampolis Biritis 600ml",
    "obs": 'descontinuada'
  },

  {
    "cod": "NÃO LOCALIZADO",
    "nome": "Ampolis Forévis 600ml",
    "obs": 'descontinuada'
  },
  {
    "cod": "14860",
    "nome": "Ampolis Cacildis Puro Malte 350ml",
    "obs": 'Produto vendido em pack com 12 unidades'
  },
  {
    "cod": "15149",
    "nome": "Ampolis Cacildis Puro Malte 600ml",
    "obs": 'Produto vendido em pack com 12 e 24 unidades'
  }

]

const produtosIt = [
  {
    "cod": "7346",
    "nome": "IT Limão 350ml",
    "obs": 'Produto vendido em pack com 12 unidades'
  },
  {
    "cod": "100560",
    "nome": "IT Limão 2L",
    "obs": 'Produto vendido em pack com 6 unidades'
  },

  {
    "cod": "100558",
    "nome": "IT Laranja 350ml",
    "obs": 'Produto vendido em pack com 12 unidades'
  },
  {
    "cod": "100559",
    "nome": "IT Laranja 2L",
    "obs": 'Produto vendido em pack com 6 unidades'
  },
  {
    "cod": "100557",
    "nome": "IT Guaraná 2L",
    "obs": 'Produto vendido em pack com 6 unidades'
  },
  {
    "cod": "7345",
    "nome": "IT Lemon Ice 2L",
    "obs": 'Produto vendido em pack com 6 unidades'
  },

  {
    "cod": "7344",
    "nome": "IT Cola 350ml",
    "obs": 'Produto vendido em pack com 12 unidades'
  },
  {
    "cod": "100556",
    "nome": "IT Cola 2L",
    "obs": 'Produto vendido em pack com 6 unidades'
  },
  {
    "cod": "NÃO LOCALIZADO",
    "nome": "IT Guaraná Zero 2L",
    "obs": 'descontinuada'
  },

  {
    "cod": "7368",
    "nome": "IT Guaraná 350ml",
    "obs": 'Produto vendido em pack com 12 unidades'
  },
  {
    "cod": "NÃO LOCALIZADO",
    "nome": "IT Guaraná Zero 350ml",
    "obs": 'descontinuada'
  },
  {
    "cod": "7370",
    "nome": "IT Lemon Ice 350ml",
    "obs": 'Produto vendido em pack com 12 unidades'
  }

]

const produtosTnt = [
  {
    "cod": "NÃO LOCALIZADO",
    "nome": "Tangerina Zero 473ml",
    "obs": 'descontinuada'
  },
  {
    "cod": "NÃO LOCALIZADO",
    "nome": "Maça Verde Zero 473ml",
    "obs": 'descontinuada'
  },

  {
    "cod": "NÃO LOCALIZADO",
    "nome": "Açai com Guaraná Zero 473ml",
    "obs": 'descontinuada'
  },
  {
    "cod": "NÃO LOCALIZADO",
    "nome": "Zero Açucar 473ml",
    "obs": 'descontinuada'
  },
  {
    "cod": "16299",
    "nome": "Focus 473ml",
    "obs": 'Produto vendido em pack com 4 unidades'
  },
  {
    "cod": "36501",
    "nome": "Mango Summer 269ml",
    "obs": 'Produto vendido em pack com 4 unidades'
  },
  {
    "cod": "16717",
    "nome": "Mango Summer 473ml",
    "obs": 'Produto vendido em pack com 4 unidades'
  },
  {
    "cod": "8626",
    "nome": "Original 269ml",
    "obs": 'Produto vendido em pack com 4 unidades'
  },
  {
    "cod": "7471",
    "nome": "Original 473ml",
    "obs": 'descontinuada'
  },
  {
    "cod": "7471",
    "nome": "Zero Açucar 269ml",
    "obs": 'Produto vendido em pack com 4 unidades'
  },

  {
    "cod": "12497",
    "nome": "Maçã Verde 269ml",
    "obs": 'Produto vendido em pack com 4 unidades'
  },
  {
    "cod": "100569",
    "nome": "Tangerina 269ml",
    "obs": 'Produto vendido em pack com 4 unidades'
  },
  {
    "cod": "15510",
    "nome": "Açaí com Guaraná 269ml",
    "obs": 'Produto vendido em pack com 4 unidades'
  },
  {
    "cod": "16003",
    "nome": "Isotônico TNT Laranja 500ml",
    "obs": 'Produto vendido em pack com 6 unidades'
  },
  {
    "cod": "16004",
    "nome": "Isôtonico TNT Limão 500ml",
    "obs": 'Produto vendido em pack com 6 unidades'
  },
  {
    "cod": "16005",
    "nome": "Isôtonico TNT Tangerina 500ml",
    "obs": 'Produto vendido em pack com 6 unidades'
  },
  {
    "cod": "16006",
    "nome": "Isôtonico TNT Uva 500ml",
    "obs": 'Produto vendido em pack com 6 unidades'
  },
  {
    "cod": "16654",
    "nome": "Focus Pink Lemonade 473ml",
    "obs": 'Produto vendido em pack com 4 unidades'
  },
  {
    "cod": "36701",
    "nome": "Focus Pink Lemonade 269ml",
    "obs": 'Produto vendido em pack com 4 unidades'
  }
]

const produtosWeltenburger = [
  {
    "cod": "1104",
    "nome": "Anno 1050 500ml",
    "obs": 'Produto vendido em pack com 6 unidades'
  },
  {
    "cod": "1106",
    "nome": "Urtyp Hell 500ml",
    "obs": 'Produto vendido em pack com 6 unidades'
  },

  {
    "cod": "NÃO LOCALIZADO",
    "nome": "Barock Dunkel 500ml",
    "obs": 'Produto vendido em pack com 6 unidades'
  },
  {
    "cod": "NÃO LOCALIZADO",
    "nome": "Hefe-WeiBbier 500ml",
    "obs": 'Produto vendido em pack com 6 unidades'
  }
]

const produtosdomTaparro = [
  {
    "cod": "15632",
    "nome": "Cabaré Amburana 700ml",
    "obs": 'Produto vendido em pack com 6 unidades'
  },
  {
    "cod": "15176",
    "nome": "Cabaré Ouro 700ml",
    "obs": 'Produto vendido em pack com 6 unidades'
  },
  {
    "cod": "15174",
    "nome": "Cabaré Prata 700ml",
    "obs": 'Produto vendido em pack com 6 unidades'
  },
  {
    "cod": "16259",
    "nome": "Cabaré Fire 700ml",
    "obs": 'Produto vendido em pack com 6 unidades'
  },
  {
    "cod": "58872",
    "nome": "Licor fino doce de leite 750ml",
    "obs": 'Produto vendido em 1 unidade'
  },
  {
    "cod": "15612",
    "nome": "Cabaré Extra Premium 10 anos Carvalho Americano 750ml",
    "obs": 'Produto vendido com 1 unidade'
  },  
  {
    "cod": "58674",
    "nome": "Cachaça Extra Premium 12 Anos 750ml",
    "obs": 'Produto vendido em 1 unidade'
  },
  {
    "cod": "587574",
    "nome": "Gin 3 HEADS LONDON DRY GIN 750ml",
    "obs": 'Produto vendido pack com 4 unidades'
  },
  {
    "cod": "15172",
    "nome": "Cabaré Extra Premium 15 anos 700ml (Edição Limitada)",
    "obs": 'Produto vendido com 1 unidade'
  },
  {
    "cod": "58872",
    "nome": "Kit licor fino doce de leite 750ml",
    "obs": 'Produto vendido em 1 unidade'
  },
]

const produtosVodka = [
  {
    "cod": "16504",
    "nome": "Vodka nordka GRF 1L",
    "obs": 'Produto vendido em 1 unidade'
  }
]

const produtosPetraTonica = [
  {
    "cod": "16331",
    "nome": "Petra tônica sem açúcar 350ml",
    "obs": 'Produto vendido em pack com 12 unidades'
  },
  {
    "cod": "16330",
    "nome": "Petra tônica tradicional 350ml",
    "obs": 'Produto vendido em pack com 12 unidades'
  }
]



// const btnInsta = document.getElementById('abrirInsta');

// function abrirInstaApp(){
//   Website2APK.openExternal("https://instagram.com/adfbebidas?igshid=MzRlODBiNWFlZA==");  
// }

// btnInsta.addEventListener("click", abrirInstaApp);

// Seleciona o elemento popup e o botão de fechar
const popup = document.getElementById('popup');
const closePopup = document.getElementById('closePopup');

// Função para abrir o popup com efeito de fade in após 2 segundos
window.onload = () => {
    setTimeout(() => {
        popup.classList.add('show');
    }, 2000); // Espera 2 segundos antes de abrir o popup
};

// Função para fechar o popup com efeito de fade out
closePopup.addEventListener('click', () => {
    popup.classList.remove('show');
    
    // Remove o popup da tela após a transição do fade out
    setTimeout(() => {
        popup.classList.add('hide');
    }, 500); // 500ms corresponde à duração da transição
});


document.querySelector('.popup-text').addEventListener('click', () =>{
  document.querySelector('.iconWhats').click();
})
