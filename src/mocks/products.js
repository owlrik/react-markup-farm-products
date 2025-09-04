const products = [
  {
    id: 0,
    name: "Филе бедра цыпленка",
    description:
      "Филе бедра без кожи и&nbsp;кости. Птица содержится в&nbsp;свободных птичниках, выращивается на&nbsp;натуральных зерновых кормах, что влияет положительно на&nbsp;вкус мяса. Филейная часть бедра обладает насыщенным вкусом и&nbsp;мясным ароматом.",
    price: 400,
    weight: 700,
    image: "https://i.ibb.co/6zGjDgt/catalog-1.jpg",
    specifications: [
      {
        property: "Масса",
        value: "0,7 кг. (595-805 г.)",
      },
      {
        property: "Срок годности",
        value: "6 суток",
      },
      {
        property: "Порода",
        value: "КОББ 500",
      },
      {
        property: "Происхождение",
        value: "Тверская область",
      },
    ],
    structure: [
      {
        property: "Энергетическая ценность",
        value: "135 ккал./565 кДж",
      },
      {
        property: "Пищевая ценность",
        value:
          "белки&nbsp;&mdash; 13,8&nbsp;г., жиры&nbsp;&mdash; 8,7&nbsp;г., углеводы&nbsp;&mdash; 0&nbsp;г.; на&nbsp;100&nbsp;г.",
      },
    ],
  },
  {
    id: 1,
    name: "Филе бедра индейки",
    description:
      "Индейка&nbsp;&mdash; это диетическое и&nbsp;гипоаллергенное мясо. Нежное филе можно запечь, потушить маленькими кусочками с&nbsp;соусом, а&nbsp;можно слегка поджарить и&nbsp;подать с&nbsp;овощами.",
    price: 750,
    weight: 943,
    image: "https://i.ibb.co/cKKz9Ynw/catalog-2.jpg",
    specifications: [
      {
        property: "Масса",
        value: "750 г. (563-938г.)",
      },
      {
        property: "Срок годности",
        value: "9 суток",
      },
      {
        property: "Происхождение",
        value: "Краснодарский край, район Славянский",
      },
    ],
    structure: [
      {
        property: "Энергетическая ценность",
        value: "145 ккал./606,7 кДж",
      },
      {
        property: "Пищевая ценность",
        value:
          "белки&nbsp;&mdash; 19&nbsp;г., жиры&nbsp;&mdash; 6&nbsp;г., углеводы&nbsp;&mdash; 4,2&nbsp;г.; на&nbsp;100&nbsp;г",
      },
    ],
  },
  {
    id: 2,
    name: "Вырезка из молодой говядины",
    description:
      "Нежная вырезка из&nbsp;мяса молодых бычков от&nbsp;Эдуарда Васильева. Вырезка&nbsp;&mdash; самая ценная часть туши, находящаяся в&nbsp;районе позвоночника бычка. При правильном приготовлении из&nbsp;вырезки получаются вкусные и&nbsp;диетические блюда. Благодаря натуральному питанию бычков, мясо вырезки мягкое и&nbsp;с&nbsp;натуральным вкусом.",
    price: 1890,
    weight: 450,
    image: "https://i.ibb.co/Wp5qR5gR/catalog-3.jpg",
    specifications: [
      {
        property: "Масса",
        value: "450 г. (338-562г.)",
      },
      {
        property: "Срок годности",
        value: "10 суток",
      },
      {
        property: "Порода",
        value: "&laquo;Костромская&raquo; или &laquo;Голштинская&raquo;",
      },
      {
        property: "Происхождение",
        value: "Тверская область, Калининский район",
      },
    ],
    structure: [
      {
        property: "Энергетическая ценность",
        value: "288,01 ккал/1205 кДж",
      },
      {
        property: "Пищевая ценность",
        value:
          "белки&nbsp;&mdash; 22&nbsp;г., жиры&nbsp;&mdash; 17&nbsp;г., углеводы&nbsp;&mdash; 0&nbsp;г.; на&nbsp;100&nbsp;г",
      },
    ],
  },
  {
    id: 3,
    name: 'Сыр "Амст" с пажитником',
    description:
      "Базовый полутвердый сыр. Благодаря семенам пажитника сыр приобретает ореховое послевкусие, которое идеально сочетается со&nbsp;сливочными нотками. Выдержка 1&nbsp;месяц.",
    price: 400,
    weight: 300,
    image: "https://i.ibb.co/ZYDZjJk/2.jpg",
    specifications: [
      {
        property: "Масса",
        value: "0.3 кг",
      },
      {
        property: "Срок годности",
        value: "30 суток",
      },
      {
        property: "Жирность",
        value: "45%",
      },
    ],
    structure: [
      {
        property: "Энергетическая ценность",
        value: "323 ккал/1352 кДж",
      },
      {
        property: "Пищевая ценность",
        value:
          "белки&nbsp;&mdash; 25,2&nbsp;г., жиры&nbsp;&mdash; 27&nbsp;г., углеводы&nbsp;&mdash; 3,6&nbsp;г.; на&nbsp;100&nbsp;г",
      },
    ],
  },
  {
    id: 4,
    name: 'Сыр "Камамбер"',
    description:
      "Мягкий сыр из&nbsp;пастеризованного коровьего молока с&nbsp;добавлением культур белой плесени.",
    price: 390,
    weight: 200,
    image: "https://i.ibb.co/4TCJV5r/3.jpg",
    specifications: [
      {
        property: "Масса",
        value: "0.2 кг",
      },
      {
        property: "Срок годности",
        value: "30 суток",
      },
      {
        property: "Жирность",
        value: "50%",
      },
    ],
    structure: [
      {
        property: "Энергетическая ценность",
        value: "303 ккал/1268 кДж",
      },
      {
        property: "Пищевая ценность",
        value:
          "белки&nbsp;&mdash; 25,2&nbsp;г., жиры&nbsp;&mdash; 27&nbsp;г., углеводы&nbsp;&mdash; 3,6&nbsp;г.; на&nbsp;100&nbsp;г",
      },
    ],
  },
  {
    id: 5,
    name: "Мед майский горный",
    description:
      "Мед урожая 2025&nbsp;года. Необычно нежный майский мед, собранный в&nbsp;субтропических рощах Северо-кавказского заповедника раскрывается целой гаммой цитрусовых оттенков.",
    price: 590,
    weight: 200,
    image: "https://i.ibb.co/2jS02Jk/4.jpg",
    specifications: [
      {
        property: "Масса",
        value: "0.2 кг",
      },
      {
        property: "Срок годности",
        value: "24 месяца",
      },
      {
        property: "Условия хранения",
        value: "от&nbsp;5&nbsp;до&nbsp;20 °С",
      },
    ],
    structure: [
      {
        property: "Энергетическая ценность",
        value: "303 ккал/1268 кДж",
      },
      {
        property: "Пищевая ценность",
        value:
          "белки&nbsp;&mdash; 0,3&nbsp;г., жиры&nbsp;&mdash; 0&nbsp;г., углеводы&nbsp;&mdash; 80&nbsp;г.; на&nbsp;100&nbsp;г",
      },
    ],
  },
];

export default products;
