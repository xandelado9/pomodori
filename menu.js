/* Pomodori — fonte única do cardápio.
   Usado por cardapio.html (vitrine) e pedido.html (app de pedido),
   para não manter duas cópias das mesmas 79 pizzas. */

const MENU = {
  tradicionais: [
    { n: "01", nome: "À Moda", ing: "Presunto, calabresa, ervilha, champignon e mussarela" },
    { n: "02", nome: "À Moda do Pizzaiolo", ing: "Presunto, palmito, bacon e mussarela" },
    { n: "03", nome: "Abobrinha I", ing: "Abobrinha temperada, mussarela, parmesão e bacon" },
    { n: "04", nome: "Abobrinha II", ing: "Abobrinha temperada, mussarela de búfala, parmesão e tomate cereja" },
    { n: "05", nome: "Aeromoça", ing: "Frango, bacon, mussarela e catupiry" },
    { n: "06", nome: "Alho I", ing: "Parmesão e alho frito" },
    { n: "07", nome: "Alho II", ing: "Mussarela e alho frito" },
    { n: "08", nome: "Alho Poró", ing: "Peito de peru, palmito, alho poró e cream cheese" },
    { n: "09", nome: "Aliche", ing: "Aliche importado e parmesão" },
    { n: "10", nome: "Atum I", ing: "Atum sólido com mussarela" },
    { n: "11", nome: "Atum II", ing: "Atum sólido e cebola" },
    { n: "12", nome: "Bacon I", ing: "Mussarela e bacon em cubos" },
    { n: "13", nome: "Bacon II", ing: "Mussarela e fatias de bacon" },
    { n: "14", nome: "Baiana", ing: "Calabresa moída, pimenta, mussarela e cebola" },
    { n: "15", nome: "Bauru", ing: "Presunto, tomate e mussarela" },
    { n: "16", nome: "Berinjela", ing: "Berinjela refogada, mussarela e parmesão" },
    { n: "17", nome: "Brócolis", ing: "Brócolis refogado, bacon e mussarela" },
    { n: "18", nome: "Caipirão", ing: "Frango temperado, milho verde e mussarela" },
    { n: "19", nome: "Calabresa", ing: "Linguiça calabresa com cebola" },
    { n: "20", nome: "Calábria", ing: "Calabresa moída e catupiry" },
    { n: "21", nome: "Carijó", ing: "Frango temperado, milho verde e catupiry" },
    { n: "22", nome: "Catuguesa", ing: "Presunto, ovo, cebola, ervilha e catupiry" },
    { n: "23", nome: "Catupiry", ing: "Catupiry original" },
    { n: "24", nome: "Champignon", ing: "Champignon temperado e mussarela" },
    { n: "25", nome: "Cinco Queijos", ing: "Catupiry, mussarela, provolone, parmesão e gorgonzola" },
    { n: "26", nome: "Contadina", ing: "Presunto, mussarela e parmesão" },
    { n: "27", nome: "Cremonese", ing: "Lombo canadense, cebola e catupiry" },
    { n: "28", nome: "Da Sogra", ing: "Mussarela de búfala, tomate seco, aliche e rúcula" },
    { n: "29", nome: "Parma I", ing: "Presunto parma espanhol, mussarela de búfala e rúcula" },
    { n: "30", nome: "Parma II", ing: "Presunto parma espanhol, mussarela e brie" },
    { n: "31", nome: "Do Alemão", ing: "Calabresa, cebola, tomate e mussarela" },
    { n: "32", nome: "Dois Queijos", ing: "Mussarela e catupiry" },
    { n: "33", nome: "Escarola I", ing: "Escarola, cebola e mussarela" },
    { n: "34", nome: "Escarola II", ing: "Escarola, aliche ou bacon e mussarela" },
    { n: "35", nome: "Forneiro", ing: "Catupiry, tomate, parmesão e alho poró" },
    { n: "36", nome: "Francesa", ing: "Presunto, ovo e mussarela" },
    { n: "37", nome: "Frango", ing: "Frango temperado e catupiry" },
    { n: "38", nome: "Deradelli", ing: "Peito de peru e catupiry" },
    { n: "39", nome: "Gorgonzola (Agridoce)", ing: "Gorgonzola, mussarela, mel e nozes" },
    { n: "40", nome: "Light", ing: "Peito de peru, palmito e mussarela de búfala" },
    { n: "41", nome: "Lombo", ing: "Lombo canadense e cebola" },
    { n: "42", nome: "Marguerita", ing: "Mussarela, manjericão, parmesão e tomate" },
    { n: "43", nome: "Mexicana", ing: "Atum, champignon, mussarela e bacon" },
    { nome: "Milho", ing: "Milho verde e mussarela" },
    { n: "44", nome: "Milho Verde", ing: "Milho verde e catupiry" },
    { n: "45", nome: "Mussarela", ing: "Mussarela" },
    { n: "46", nome: "Napoalho", ing: "Mussarela, parmesão, tomate e alho frito" },
    { n: "47", nome: "Napolitana", ing: "Mussarela, tomate e parmesão" },
    { n: "48", nome: "Palmito", ing: "Palmito, cebola e mussarela" },
    { n: "49", nome: "Palmito com Catupiry", ing: "Palmito e catupiry" },
    { n: "50", nome: "Pepperoni", ing: "Mussarela e pepperoni" },
    { n: "51", nome: "Peruana", ing: "Atum, ervilha e catupiry" },
    { n: "52", nome: "Pomodori", ing: "Presunto, bacon, champignon, palmito e catupiry" },
    { n: "53", nome: "Portuguesa", ing: "Presunto, mussarela, ovo, cebola e ervilha" },
    { n: "54", nome: "Quatro Queijos", ing: "Mussarela, catupiry, provolone e parmesão" },
    { n: "55", nome: "Romana", ing: "Mussarela, aliche, tomate e parmesão" },
    { n: "56", nome: "Rúcula", ing: "Mussarela de búfala, tomate seco e rúcula" },
    { n: "58", nome: "Siciliana", ing: "Bacon, champignon e mussarela" },
    { n: "59", nome: "Toscana", ing: "Calabresa moída e mussarela" },
    { nome: "Toscana Fatiada", ing: "Calabresa fatiada e mussarela" },
    { n: "60", nome: "Três Queijos", ing: "Mussarela, catupiry e parmesão" },
    { n: "61", nome: "Tropical", ing: "Palmito, cebola, ervilha e mussarela de búfala" },
    { n: "62", nome: "Camarão", ing: "Camarão, ervilha, ovo, cebola coberta com mussarela" },
    { n: "63", nome: "Temaki", ing: "Atum, cream cheese, molho tarê e cebolinha" },
    { n: "64", nome: "Carne Seca", ing: "Carne seca desfiada" }
  ],
  novidades: [
    { nome: "Do Juruna", ing: "Mussarela, calabresa moída, cebola, pimenta, tomate em rodelas, parmesão e catupiry" },
    { nome: "Do Rony", ing: "Mussarela, queijo brie, geleia de amora, nozes e raspa de limão siciliano" },
    { nome: "Filé Mignon", ing: "Mussarela, filé mignon, brócolis, champignon e alho frito" },
    { nome: "Brunão", ing: "Mussarela, palmito, catupiry, cebola e tomate" }
  ],
  doces: [
    { n: "65", nome: "Banana", ing: "Banana, canela e leite condensado" },
    { n: "66", nome: "Brigadeiro", ing: "Chocolate e granulado" },
    { n: "67", nome: "Choconana", ing: "Banana e chocolate" },
    { n: "68", nome: "Chocorango", ing: "Chocolate e morango" },
    { n: "69", nome: "MM's", ing: "Chocolate e MM's" },
    { n: "70", nome: "Paçoca", ing: "Chocolate e paçoca" },
    { n: "71", nome: "Uva com Chocolate", ing: "Chocolate branco derretido com uvas em pedaços" },
    { n: "72", nome: "Banofe", ing: "Doce de leite, banana, cream cheese e canela" },
    { n: "73", nome: "Banana Nevada", ing: "Banana, canela, chocolate branco e coco" },
    { n: "74", nome: "Óreo", ing: "Chocolate branco derretido, pedaços de óreo e cereja" }
  ]
};

/* -------------------------------------------------------------------------
   Opções do app de pedido (pedido.html).
   ⚠️ PROVISÓRIO — confirme com a pizzaria e edite estas listas.
   Não são preços; são só as opções que aparecem para o cliente escolher.
   ------------------------------------------------------------------------- */
const OPCOES = {
  tamanhos: ["Grande", "Broto"],
  tamanhoPadrao: "Grande",     // já vem selecionado
  massas: ["Fina", "Média", "Grossa"],
  massaPadrao: "Média",        // já vem selecionada (fica no meio)
  maxSabores: 3,               // até 3 sabores na mesma pizza (inteira, ½+½ ou ⅓+⅓+⅓)
  // Sabores de borda recheada — CONFIRMAR com a pizzaria:
  bordas: ["Catupiry", "Cheddar", "Cream cheese"],
  // Promoção: pizza montada SÓ com estes sabores sai por um valor fixo.
  // Pizza da promoção é de até 2 sabores — o app não deixa escolher um 3º.
  promo: {
    preco: "R$ 64,90",
    maxSabores: 2,
    sabores: [
      "Mussarela", "Calabresa", "Marguerita", "Napolitana", "Dois Queijos",
      "Abobrinha I", "Bauru", "Berinjela", "Escarola I", "Lombo",
      "Milho", "Toscana Fatiada", "Brigadeiro"
    ]
  },
  bebidas: [
    "Coca-Cola 2L", "Coca-Cola lata",
    "Coca-Cola Zero 2L", "Coca-Cola Zero lata",
    "Guaraná Antarctica 2L", "Guaraná Antarctica 600ml", "Guaraná lata",
    "Fanta Laranja 2L", "Fanta Uva lata",
    "Água sem gás"
  ]
};

// WhatsApp da pizzaria (mesmo número já usado no site).
const WHATSAPP = "5511955514816";

if (typeof window !== "undefined") {
  window.MENU = MENU;
  window.OPCOES = OPCOES;
  window.WHATSAPP = WHATSAPP;
}
