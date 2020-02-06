$(window).scroll(function () {
    if (
        $(document).scrollTop() + $(window).height() >
        $(".second").offset().top + 300
    ) {
        $(".img-second").animate({
            "right": "0"
        }, 1000);
        $(".text-second").animate({
            "left": "0"
        }, 1000);
    };
    if ($(document).scrollTop() + $(window).height() >
        $('#news').offset().top + 200
    ) {
        $('#newsHeader').animate({ 'margin-top': '100' }, 1000);
        $('#nonagon').animate({ 'margin-top': '70' }, 1000); // если тут заменить .animate на .css и в файле стилей прописать элементу transition: 1s, 
        $('#triada').animate({ 'margin-top': '10' }, 1000); // то ломается затенение хедера при ресайзе (потому что хедер чекает размер #nonagon для корректного отображения)
        $('#diod').animate({ 'margin-top': '0' }, 1000); // прям как в анекдоте: "Если я тебе с левой ноги в правую почку уебу, у тебя какой глаз будет дёргаться?"
    };
    if (
        $(document).scrollTop() + $(window).height() >
        $('.third').offset().top + 200
    ) {
        $('.offer-name').animate({ 'bottom': '0' }, 1000);
        $('.offer-about').animate({ 'bottom': '0' }, 1000);
        $('.offer-cards').animate({ 'top': '0' }, 1000);
    };
    if (
        $(document).scrollTop() + $(window).height() >
        $('.fifth').offset().top + 200
    ) {
        $('.picture-top').animate({
            'bottom': '0',
            'z-index': '0'
        }, 1000);
    };
    if (
        $(document).scrollTop() + $(window).height() >
        $('.fifth').offset().top + 400
    ) {
        $('.picture-bot').animate({ 'top': '0', 'z-index': '0' }, 1000);
    };
})














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

$('#triada1').css('background-color', 'green'); // задаём изначально зелёный цвет первой точки в навигационной триаде

let counter = 1;
$('#counter').text(counter); // для самого маленького экрана. Цифра в кружочке.
let triadaCrutch = 1;
let newsCrutch = $('#nonagon').width(); // эта и две предыдущая переменные нужны для корректировки положения блока news при ресайзе

$('#diodLeft').click(function () { // это - код для маленьких экранов ( < 575px ), он двигает news влево
    if (counter > 1) {
        $('#nonagonCrutch').css('margin-left', `${-300 * (counter - 2) + 'px'}`);
        counter = + counter - 1; // чесслово, туплю и не знаю, как сделать эту строку изящнее, оставив преобразование к числу
        $('#counter').text(counter);
        triadaCounter()
    };
});

$('#diodRight').click(function () {   // а это - код для маленьких экранов ( < 575px ), который двигает news вправо
    if (counter < 9) {
        $('#nonagonCrutch').css('margin-left', `${-300 * counter + 'px'}`);
        counter = + counter + 1;
        $('#counter').text(counter);
        triadaCounter()
    };
});

function triadaCounter() { // для адекватного ресайза news - синхронизируем counter и triadaCrutch
    if (counter < 4) {
        triadaCrutch = 1
    };
    if (counter == 4 || counter == 5 || counter == 6) {
        triadaCrutch = 2
    };
    if (counter == 7 || counter == 8 || counter == 9) {
        triadaCrutch = 3
    };
};

$(window).resize(function () { // ужасно нечитабельная функция для для корректировки положения блока news при ресайзе. Киберфорум - маздай!
    newsCrutchAlter = $('#nonagon').width(); // http://www.cyberforum.ru/javascript/thread2560354.html
    if (newsCrutchAlter != newsCrutch) {
        newsCrutch = $('#nonagon').width();
        if (newsCrutch == 300) {
            if (triadaCrutch == 1) {
                counter = 1;
                $('#counter').text(counter);
                $('#nonagonCrutch').css('margin-left', '0');
            };
            if (triadaCrutch == 2) {
                counter = 4;
                $('#counter').text(counter);
                $('#nonagonCrutch').css('margin-left', '-900px');
            };
            if (triadaCrutch == 3) {
                counter = 7;
                $('#counter').text(counter);
                $('#nonagonCrutch').css('margin-left', '-1800px');
            };
        }; // конец условий для минимальной ширины экрана
        if (newsCrutch == 510) {
            if (triadaCrutch == 1 || counter < 4) {
                firstGreen();
                $('#nonagonCrutch').css('margin-left', '0');
            };
            if (triadaCrutch == 2 || counter == 4 || counter == 5 || counter == 6) {
                secondGreen();
                $('#nonagonCrutch').css('margin-left', '-510px');
            };
            if (triadaCrutch == 3 || counter == 7 || counter == 8 || counter == 9) {
                thirdGreen();
                $('#nonagonCrutch').css('margin-left', '-1020px');
            };
        }; // конец условий для < 1999px
        if (newsCrutch == 740) {
            if (triadaCrutch == 1 || counter < 4) {
                firstGreen();
                $('#nonagonCrutch').css('margin-left', '0');
            };
            if (triadaCrutch == 2 || counter == 4 || counter == 5 || counter == 6) {
                secondGreen();
                $('#nonagonCrutch').css('margin-left', '-740px');
            };
            if (triadaCrutch == 3 || counter == 7 || counter == 8 || counter == 9) {
                thirdGreen();
                $('#nonagonCrutch').css('margin-left', '-1480px');
            };
        }; // конец условий для < 991px
        if (newsCrutch == 1000) {
            if (triadaCrutch == 1 || counter < 4) {
                firstGreen();
                $('#nonagonCrutch').css('margin-left', '0');
            };
            if (triadaCrutch == 2 || counter == 4 || counter == 5 || counter == 6) {
                secondGreen();
                $('#nonagonCrutch').css('margin-left', '-1000px');
            };
            if (triadaCrutch == 3 || counter == 7 || counter == 8 || counter == 9) {
                thirdGreen();
                $('#nonagonCrutch').css('margin-left', '-2000px');
            };
        }; // конец условий для < 767px
        if (newsCrutch == 1210) {
            if (triadaCrutch == 1 || counter < 4) {
                firstGreen();
                $('#nonagonCrutch').css('margin-left', '0');
            };
            if (triadaCrutch == 2 || counter == 4 || counter == 5 || counter == 6) {
                secondGreen();
                $('#nonagonCrutch').css('margin-left', '-1210px');
            };
            if (triadaCrutch == 3 || counter == 7 || counter == 8 || counter == 9) {
                thirdGreen();
                $('#nonagonCrutch').css('margin-left', '-2420px');
            };
        };
    };
}); // конец ужасно нечитабельной функции

function firstGreen() { // ниже - три функции для озеленения кнопочек news при нажатии
    $('#triada').children().css('background-color', 'grey');
    $('#triada1').css('background-color', 'green');
};

function secondGreen() {
    $('#triada').children().css('background-color', 'grey');
    $('#triada2').css('background-color', 'green');
};

function thirdGreen() {
    $('#triada').children().css('background-color', 'grey');
    $('#triada3').css('background-color', 'green');
}

$('#triada1').click(function () { // ниже - три функции для анимации блоков news
    firstGreen();
    $('#nonagonCrutch').css('margin-left', '0');
    triadaCrutch = 1;
});

$('#triada2').click(function () {
    secondGreen();
    triadaCrutch = 2;
    if ($('#nonagon').width() == 1210) { // чекаем скролл новостного блока при изменённой ширине окна
        $('#nonagonCrutch').css('margin-left', '-1210px');
    };
    if ($('#nonagon').width() == 1000) {
        $('#nonagonCrutch').css('margin-left', '-1000px');
    };
    if ($('#nonagon').width() == 740) {
        $('#nonagonCrutch').css('margin-left', '-740px');
    };
    if ($('#nonagon').width() == 510) {
        $('#nonagonCrutch').css('margin-left', '-510px');
    };

});
$('#triada3').click(function () {
    thirdGreen();
    triadaCrutch = 3;
    if ($('#nonagon').width() == 1210) {
        $('#nonagonCrutch').css('margin-left', '-2420px');
    };
    if ($('#nonagon').width() == 1000) {
        $('#nonagonCrutch').css('margin-left', '-2000px');
    };
    if ($('#nonagon').width() == 740) {
        $('#nonagonCrutch').css('margin-left', '-1480px');
    };
    if ($('#nonagon').width() == 510) {
        $('#nonagonCrutch').css('margin-left', '-1020px');
    };
});
