# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Moradores da Mooca e bairros vizinhos de São Paulo (Alto da Mooca, Parque da Mooca, Brás, Belém, Tatuapé, Água Rasa, Cambuci, Ipiranga, Vila Prudente e Vila Zelina) que querem pedir pizza para entrega, principalmente à noite. Chegam ao site pelo celular ou desktop buscando ver os sabores e fazer o pedido rápido.

## Product Purpose

Site institucional/vitrine da **Pomodori Pizzaria** (Mooca, SP, desde 1987). Apresenta a marca, a história e o cardápio completo, e conduz o visitante ao pedido. **Sucesso = converter o visitante em pedido** feito por WhatsApp, iFood, 99 ou Keeta. O site não processa pedidos nem pagamentos — ele encaminha para esses canais.

## Positioning

Pizza de **forno a lenha no mesmo forno e no mesmo endereço desde 1987**, com **massa de fermentação natural** e entrega **quente em ~40 minutos** na Mooca e região. A combinação "mesmo forno a lenha há quase 40 anos + fermentação natural + entrega rápida e quente no bairro" é a âncora que diferencia — tradição de família de bairro, não rede.

## Operating Context

- Apenas **delivery** (sem salão / consumo no local).
- Horário: Seg–Qui e Dom 18h–23h; Sex, Sáb e Feriados 18h–23h30.
- Pedidos por: **WhatsApp** (canal em destaque, com mensagem pré-preenchida "Olá, vim pelo site…") e apps **iFood / 99 / Keeta**.
- Endereço: Rua Emboaçava, 422 — Mooca, SP. Área de entrega ~3 km (mapa Leaflet/OpenStreetMap na landing).
- Contato: WhatsApp (11) 95551-4816, tels (11) 2028-1316 e (11) 2966-9938, Instagram @pizzaria.pomodori.

## Capabilities and Constraints

- **Site estático** (HTML/CSS/JS puro, sem build, sem backend). Rodar localmente: `py -m http.server 8000`.
- Páginas: `index.html` (landing), `cardapio.html` (cardápio completo, gerado por JS a partir de um objeto `MENU`).
- Cardápio: **64 pizzas tradicionais** + pizzas doces + novidades + calzone; massa fina/média/grossa; todas com molho de tomate, orégano e azeitonas.
- Logo injetada por `app.js` a partir de `logo.png`; efeitos de hover via atributo `style-hover` (não usar CSS `:hover` nesses casos).
- Links dos apps (iFood/99/Keeta) ainda apontam para as páginas genéricas dos serviços — **aguardam as URLs reais** da loja.
- **`financas.html` (controle de despesas em localStorage) é legado e será removido** — não faz parte do produto público.

## Brand Commitments

- Nome: **Pomodori** / Pomodori Pizzaria. Marca de bairro (Mooca), "desde 1987".
- Paleta atual: fundo escuro `#0D0B08`, creme `#FBF8F1`, **dourado `#E3B23C`**, **vermelho `#D6291F`** e **verde `#1B4A3F`**.
- Ativo binário existente: `logo.png` (fundo transparente).
- Narrativa central a preservar: "o mesmo forno, no mesmo lugar, desde 1987".

## Evidence on Hand

- Fotos reais no repositório (pizza no forno, fachada da loja, pizzas do cardápio, doces): `pizza-forno.jpg`, `lojaporfora.jpg`, `paracardapio1-3.jpg`, `pizzadoce.jpg`, `doceuva.jpg`, `motoboy.png`, `logo.png`.
- Cardápio real e completo (nomes, números e ingredientes) embutido em `cardapio.html`.
- Endereço, telefones, horário e Instagram reais.
- **Não fabricar** depoimentos, avaliações, número de pedidos, prêmios ou preços — os preços exibidos na landing são de sabores em destaque; não há tabela de preços completa confirmada aqui.

## Product Principles

1. **O pedido é o herói.** Todo caminho leva ao WhatsApp/apps com o mínimo de atrito.
2. **Tradição concreta, não nostalgia genérica.** "Desde 1987 / mesmo forno a lenha / fermentação natural" só aparece porque é verdade — nunca inventar história.
3. **Rápido e leve.** Site estático, mobile-first, carrega e responde rápido; nada de peso desnecessário.
4. **Bairro em primeiro lugar.** Linguagem e área de entrega centradas na Mooca e vizinhança.
5. **Não prometer o que o site não faz.** Ele apresenta e encaminha; não processa pedido nem pagamento — deixar isso claro.

## Accessibility & Inclusion

Sem requisito específico estabelecido pelo cliente. Bases já presentes a manter: `alt` nas imagens, respeito a `prefers-reduced-motion` nos efeitos de zoom, e contraste suficiente do texto sobre os fundos escuros.
