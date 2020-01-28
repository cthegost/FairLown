let butMenu1 = [
  {
      price: '$25.89',
      productName: 'Osso Buco',
      productDescript: 'Osso Buco is one of the Italian greats - slow cooked veal in a white wine tomato sauce. Meltingly tender, this is both hearty and luxurious.',
  },
  {
      price: '$16.89',
      productName: 'Pappardelle Mimmo',
      productDescript: 'This delicious dish tops long, wide pasta with scallops, lobster, asparagus, butter, sage and truffle oil to cater every palate.',
  },
  {
      price: '$17.89',
      productName: 'Trippa Satriano',
      productDescript: 'Thinly sliced herb encrusted ahi tuna topped with diced tomatoes, olives, capers, red onions and fennel. Perfect choice even for the first-time visitors!',
  },
  {
      price: '$18.89',
      productName: 'Filetto Di Manzo',
      productDescript: 'Wonderful combination of prime tenderloin, winter greens, Jerusalem artichoke puree, and oxtail reduction sauce.',
  },
];

let butMenu2 = [
  {
      price: '$20.89',
      productName: 'Tiramisu',
      productDescript: 'A Pesto’s favorite - classic Italian dessert made with lady fingers, Mascarpone cheese & espresso. Perfect for both kids and adults.',
  },
  {
      price: '$6.89',
      productName: 'Cannoli',
      productDescript: 'Trio tower of cannoli filled with smooth ricotta, sugar & cinnamon, with chocolate & raspberry sauces. Single cannoli is also available.',
  },
  {
      price: '$5.89',
      productName: 'Pistachio Passion',
      productDescript: 'Layered pistachio cream, cream cheese custard & whipped cream atop a rich walnut crust.',
  },
  {
      price: '$4.89',
      productName: 'Chocolate-and-Pistachio Biscotti',
      productDescript: 'At Pesto, we vary these wonderful nutty biscotti, while also dipping them in melted dark chocolate for an extra layer of flavor.',
  },
];

let butMenu3 = [
  {
      price: '$10.89',
      productName: 'Aperol Spritz',
      productDescript: 'The most popular drink in Venice: refreshing, easygoing &…happy! Perfect to be sipped as an “Aperitivo” just before dinner - delightful!',
  },
  {
      price: '$9.89',
      productName: 'Negroni',
      productDescript: 'Reward yourself with a moment of relaxation & pure pleasure while enjoying the full flavour & simplicity of a Negroni, an iconic Italian cocktail.',
  },
  {
      price: '$11.89',
      productName: 'Negroni Sbagliato',
      productDescript: 'A cocktail for those who prefer more delicate flavours but nonetheless want a drink full of taste & personality.',
  },
  {
      price: '$8.89',
      productName: 'White Peach Bellini',
      productDescript: 'White Peach Bellini is a classic drink from Venice Italy of white peach purée and Prosecco. It is one of our most popular drinks at Pesto.',
  },
];

ourMenuBlocksGenerator(butMenu1, but1) 
$('.but1').click(() => ourMenuFadeOut(butMenu1, '.but1'));
$('.but2').click(() => ourMenuFadeOut(butMenu2, '.but2'));
$('.but3').click(() => ourMenuFadeOut(butMenu3, '.but3'));

function ourMenuFadeOut(stock, ident) {
  $('.main-menu').fadeOut(100);
  setTimeout(() => ourMenuBlocksGenerator(stock, ident), 100);
};

function ourMenuBlocksGenerator(stock, ident) {

  $('.main-menu').html('');
  $('.menu-nav').children().css('color', 'grey');
  $(ident).css('color', 'white');

  for (i = 0; i < stock.length; i++) {

      let newMenuElem = $('<div>');
      newMenuElem.addClass('newMenuElem');

      let price = $('<p>');
      price.addClass('price');
      price.text(stock[i].price);

      let productName = $('<p>');
      productName.addClass('productName');
      productName.text(stock[i].productName);

      let productDescript = $('<p>');
      productDescript.addClass('productDescript');
      productDescript.text(stock[i].productDescript);

      newMenuElem.append(price);
      newMenuElem.append(productName);
      newMenuElem.append(productDescript);

      $('.main-menu').append(newMenuElem);
  };
  $('.main-menu').fadeIn(100);
};
