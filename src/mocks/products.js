const products = [
  {
    id: 0,
    name: "Филе бедра цыпленка",
    image: "https://i.ibb.co/6zGjDgt/catalog-1.jpg",
    description: {
      text: "Филе бедра без кожи и&nbsp;кости. Птица содержится в&nbsp;свободных птичниках, выращивается на&nbsp;натуральных зерновых кормах, что влияет положительно на&nbsp;вкус мяса. Филейная часть бедра обладает насыщенным вкусом и&nbsp;мясным ароматом.",
      price: "400 руб. / 700 гр",
    },
    specs: {
      weight: "0,7 кг. (595-805 г.)",
      expiration: "6 суток",
      code: "КОББ 500",
      origin: "Тверская область",
    },
    value: {
      energy: "135 ккал./565 кДж",
      nutritional:
        "белки&nbsp;&mdash; 13,8&nbsp;г., жиры&nbsp;&mdash; 8,7&nbsp;г., углеводы&nbsp;&mdash; 0&nbsp;г.; на&nbsp;100&nbsp;г.",
    },
  },
  {
    id: 1,
    name: "Филе бедра индейки",
    image: "https://i.ibb.co/cKKz9Ynw/catalog-2.jpg",
    description: {
      text: "Индейка&nbsp;&mdash; это диетическое и&nbsp;гипоаллергенное мясо. Нежное филе можно запечь, потушить маленькими кусочками с&nbsp;соусом, а&nbsp;можно слегка поджарить и&nbsp;подать с&nbsp;овощами.",
      price: "943 руб. / 750 гр",
    },
    specs: {
      weight: "750 г. (563-938г.)",
      expiration: "9 суток",
      code: "",
      origin: "Краснодарский край, район Славянский",
    },
    value: {
      energy: "145 ккал./606,7 кДж",
      nutritional:
        "белки&nbsp;&mdash; 19&nbsp;г., жиры&nbsp;&mdash; 6&nbsp;г., углеводы&nbsp;&mdash; 4,2&nbsp;г.; на&nbsp;100&nbsp;г",
    },
  },
  {
    id: 2,
    name: "Вырезка из молодой говядины",
    image: "https://i.ibb.co/Wp5qR5gR/catalog-3.jpg",
    description: {
      text: "Нежная вырезка из&nbsp;мяса молодых бычков от&nbsp;Эдуарда Васильева. Вырезка&nbsp;&mdash; самая ценная часть туши, находящаяся в&nbsp;районе позвоночника бычка. При правильном приготовлении из&nbsp;вырезки получаются вкусные и&nbsp;диетические блюда. Благодаря натуральному питанию бычков, мясо вырезки мягкое и&nbsp;с&nbsp;натуральным вкусом.",
      price: "1890 руб. / 450 гр",
    },
    specs: {
      weight: "450 г. (338-562г.)",
      expiration: "10 суток",
      code: "&laquo;Костромская&raquo; или &laquo;Голштинская&raquo;",
      origin: "Тверская область, Калининский район",
    },
    value: {
      energy: "288,01 ккал/1205 кДж",
      nutritional:
        "белки&nbsp;&mdash; 22&nbsp;г., жиры&nbsp;&mdash; 17&nbsp;г., углеводы&nbsp;&mdash; 0&nbsp;г.; на&nbsp;100&nbsp;г",
    },
  },
  {
    id: 3,
    name: 'Сыр "Амст" с пажитником',
    image: "https://i.ibb.co/ZYDZjJk/2.jpg",
    description: {
      text: "Базовый полутвердый сыр. Благодаря семенам пажитника сыр приобретает ореховое послевкусие, которое идеально сочетается со&nbsp;сливочными нотками. Выдержка 1&nbsp;месяц.",
      price: "400 руб. / 300 гр",
    },
    specs: {
      weight: "0.3 кг",
      expiration: "30 суток",
      code: "",
      origin: "",
    },
    value: {
      energy: "323 ккал/1352 кДж",
      nutritional:
        "белки&nbsp;&mdash; 25,2&nbsp;г., жиры&nbsp;&mdash; 27&nbsp;г., углеводы&nbsp;&mdash; 3,6&nbsp;г.; на&nbsp;100&nbsp;г",
    },
  },
  {
    id: 4,
    name: 'Сыр "Камамбер"',
    image: "https://i.ibb.co/4TCJV5r/3.jpg",
    description: {
      text: "Мягкий сыр из&nbsp;пастеризованного коровьего молока с&nbsp;добавлением культур белой плесени.",
      price: "390 руб. / 200 гр",
    },
    specs: {
      weight: "0.2 кг",
      expiration: "30 суток",
      code: "",
      origin: "",
    },
    value: {
      energy: "303 ккал/1268 кДж",
      nutritional:
        "белки&nbsp;&mdash; 25,2&nbsp;г., жиры&nbsp;&mdash; 27&nbsp;г., углеводы&nbsp;&mdash; 3,6&nbsp;г.; на&nbsp;100&nbsp;г",
    },
  },
  {
    id: 5,
    name: "Мед майский горный",
    image: "https://i.ibb.co/2jS02Jk/4.jpg",
    description: {
      text: "Мед урожая 2025&nbsp;года. Необычно нежный майский мед, собранный в&nbsp;субтропических рощах Северо-кавказского заповедника раскрывается целой гаммой цитрусовых оттенков.",
      price: "590 руб. / 200 гр",
    },
    specs: {
      weight: "0.2 кг",
      expiration: "24 месяца",
      code: "",
      origin: "",
    },
    value: {
      energy: "303 ккал/1268 кДж",
      nutritional:
        "белки&nbsp;&mdash; 0,3&nbsp;г., жиры&nbsp;&mdash; 0&nbsp;г., углеводы&nbsp;&mdash; 80&nbsp;г.; на&nbsp;100&nbsp;г",
    },
  },
];

export default products;
