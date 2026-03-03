export interface Product {
  id: string;
  name: string;
  subtitle?: string;
  description: string;
  price: number;
  unit?: string;
  image: string;
  category: string;
  featured?: boolean;
  isBestseller?: boolean;
  contents?: string[];
  variants?: { label: string; price: number }[];
  ingredients?: { name: string; icon: string }[];
  boxInfo?: string;
}

export const PRODUCTS: Product[] = [
  {
    id: 'madeleines-atlas',
    name: 'Madeleines Atlas',
    category: 'Coffrets',
    description: "Découvrez l'excellence artisanale avec notre coffret Madeleines Atlas. Cette sélection exclusive vous invite à un voyage gustatif unique, alliant la douceur traditionnelle du pur beurre à des notes audacieuses et parfumées. Chaque bouchée est une célébration du savoir-faire, conçue pour offrir une expérience à la fois moelleuse, intense et raffinée. Parfait pour offrir ou pour s'accorder une pause gourmande d'exception.",
    price: 35,
    unit: 'DH',
    boxInfo: 'set de 5 madeleines',
    image: 'https://ik.imagekit.io/ehm3lt9la/Gemini_Generated_Image_sh90kvsh90kvsh90.png',
    featured: true,
    contents: [
      'Madeleine Tifawt Nature',
      'Madeleine Assif Framboise',
      'Madeleine Itri Café',
      'Madeleine "Tament" Miel',
      'Madeleine "Souk Atlas" Chocolat & Épices'
    ],
    ingredients: [
      { name: 'Moelleuse pur beurre', icon: '🧈' },
      { name: 'Framboise délicate', icon: '🍓' },
      { name: 'Café intense', icon: '☕' },
      { name: 'Miel floral', icon: '🍯' },
      { name: 'Cacao & épices marocaines', icon: '🍫' }
    ]
  },
  {
    id: 'fraisier-fadma',
    name: 'Fraisier “Fadma Signature”',
    category: 'GATEAUX',
    description: "Laissez-vous séduire par l'élégance absolue de notre Fraisier \"Fadma Signature\", une création qui célèbre la fraîcheur des saisons. Ce gâteau d'exception marie avec finesse des fraises sélectionnées pour leur parfum intense à une crème légère et aérienne, le tout reposant sur un biscuit d'une délicatesse rare.",
    price: 30,
    unit: 'DH',
    image: 'https://ik.imagekit.io/ehm3lt9la/Fraisier%20_Fadma%20Signature_',
    variants: [
      { label: 'Individuel', price: 30 },
      { label: 'Grand Format', price: 320 }
    ],
    ingredients: [
      { name: 'Fraise fraîche', icon: '🍓' },
      { name: 'Crème légère', icon: '🥛' }
    ]
  },
  {
    id: 'royal-chocolat-majesty',
    name: 'Royal Chocolat “Majesty”',
    category: 'GATEAUX',
    description: "Succombez à la puissance et à la noblesse de notre Royal Chocolat \"Majesty\", un véritable hommage aux amateurs de cacao intense. Chaque bouchée révèle un jeu de textures magistral, mêlant l'onctuosité d'une mousse au chocolat profond au croquant irrésistible d'un praliné délicat.",
    price: 30,
    unit: 'DH',
    image: 'https://ik.imagekit.io/ehm3lt9la/chocolatroyal2?updatedAt=1772465887923',
    variants: [
      { label: 'Individuel', price: 30 },
      { label: 'Grand Format', price: 320 }
    ],
    ingredients: [
      { name: 'Chocolat intense', icon: '🍫' },
      { name: 'Croustillant', icon: '🍪' }
    ]
  },
  {
    id: 'foret-noire-kasbah',
    name: 'Forêt Noire “Kasbah”',
    category: 'GATEAUX',
    description: "Plongez dans la gourmandise mystérieuse de notre Forêt Noire \"Kasbah\", une réinterprétation généreuse d'un grand classique. Ce gâteau superpose avec harmonie un biscuit au chocolat intense, des cerises juteuses et une crème chantilly d'une légèreté absolue.",
    price: 30,
    unit: 'DH',
    image: 'https://ik.imagekit.io/ehm3lt9la/For%C3%AAt%20Noire%20_Kasbah_1?updatedAt=1772465871479',
    variants: [
      { label: 'Individuel', price: 30 },
      { label: 'Grand Format', price: 320 }
    ],
    ingredients: [
      { name: 'Chocolat', icon: '🍫' },
      { name: 'Cerise', icon: '🍒' },
      { name: 'Crème', icon: '🥛' }
    ]
  },
  {
    id: 'gateau-riz-au-lait',
    name: 'Gâteau Riz au Lait Caramel Demi-Sel',
    category: 'GATEAUX',
    description: "Offrez-vous un retour en enfance empreint de nostalgie et de raffinement avec notre Gâteau au Riz au Lait et Caramel Demi-Sel. Cette création unique se compose d'une mousse vanille délicate enveloppant le crémeux authentique d'un riz au lait préparé à l'ancienne.",
    price: 30,
    unit: 'DH',
    image: 'https://ik.imagekit.io/ehm3lt9la/gateau%20riz%20au%20lait%20carmel%20demi%20sel%202?updatedAt=1772465854695',
    variants: [
      { label: 'Individuel', price: 30 },
      { label: 'Grand Format', price: 320 }
    ],
    ingredients: [
      { name: 'Mousse vanille', icon: '🍦' },
      { name: 'Crémeux riz au lait', icon: '🍚' }
    ]
  },
  {
    id: 'voyage-exotique',
    name: 'Voyage “Exotique”',
    category: 'GATEAUX',
    description: "Évadez-vous le temps d'une dégustation avec notre gâteau Voyage \"Exotique\", une explosion de couleurs et de saveurs tropicales. Ce dessert solaire marie avec audace l'acidité vibrante du fruit de la passion à la douceur onctueuse de la mangue mûrie à point.",
    price: 30,
    unit: 'DH',
    image: 'https://ik.imagekit.io/ehm3lt9la/Voyage%20_Exotique_%202?updatedAt=1772465836904',
    variants: [
      { label: 'Individuel', price: 30 },
      { label: 'Grand Format', price: 320 }
    ],
    ingredients: [
      { name: 'Mangue', icon: '🥭' },
      { name: 'Passion', icon: '✨' }
    ]
  },
  {
    id: 'chocolat-tonka-atlas-noir',
    name: 'Chocolat Tonka “Atlas Noir”',
    category: 'GATEAUX',
    description: "Explorez des saveurs inédites avec notre Chocolat Tonka \"Atlas Noir\". La puissance aromatique d'un chocolat noir d'exception est ici magnifiée par les notes complexes et amandées de la fève tonka pour un dessert intense et élégant.",
    price: 30,
    unit: 'DH',
    image: 'https://ik.imagekit.io/ehm3lt9la/Chocolat%20Tonka%20_Atlas%20Noir_%201?updatedAt=1772465813756',
    variants: [
      { label: 'Individuel', price: 30 },
      { label: 'Grand Format', price: 330 }
    ],
    ingredients: [
      { name: 'Chocolat noir', icon: '🍫' },
      { name: 'Fève tonka', icon: '🌰' }
    ]
  },
  {
    id: 'tarte-citron-zeste-beldi',
    name: 'Tarte Citron “Zeste Beldi”',
    category: 'GATEAUX',
    description: "Une explosion de fraîcheur acidulée avec notre Tarte Citron \"Zeste Beldi\". Son cœur crémeux au citron beldi repose sur une pâte sablée croquante, offrant un contraste saisissant entre douceur et vivacité.",
    price: 25,
    unit: 'DH',
    image: 'https://ik.imagekit.io/ehm3lt9la/Tarte%20Citron%20_Zeste%20Beldi_1?updatedAt=1772465775309',
    ingredients: [
      { name: 'Citron', icon: '🍋' },
      { name: 'Crème', icon: '🥛' }
    ]
  },
  {
    id: 'tarte-jnan-saison',
    name: 'Tarte “Jnan Saison”',
    category: 'GATEAUX',
    description: "La Tarte \"Jnan Saison\" rend hommage aux vergers locaux. Garnie de fruits de saison mûris au soleil, elle offre une palette de saveurs naturelles et sucrées sur une base pâtissière croustillante.",
    price: 25,
    unit: 'DH',
    image: 'https://ik.imagekit.io/ehm3lt9la/Tarte%20_Jnan%20Saison_1?updatedAt=1772465764748',
    ingredients: [
      { name: 'Fruits de saison', icon: '🍎' }
    ]
  },
  {
    id: 'sable-breton-rose-atlas',
    name: 'Sablé Breton “Rose d’Atlas”',
    category: 'GATEAUX',
    description: "Un voyage sensoriel unique où le croquant du sablé breton pur beurre rencontre la délicatesse parfumée de la rose de l'Atlas et la gourmandise acidulée de la framboise.",
    price: 25,
    unit: 'DH',
    image: 'https://ik.imagekit.io/ehm3lt9la/Sabl%C3%A9%20Breton%20_Rose%20d_Atlas_%202?updatedAt=1772465718516',
    ingredients: [
      { name: 'Framboise', icon: '🍓' }
    ]
  },
  {
    id: 'flan-caramel',
    name: 'Flan Caramel',
    category: 'CAKES',
    description: "Retrouvez le plaisir d'un grand classique parfaitement maîtrisé. Notre Flan Caramel offre une texture onctueuse et une crème infusée à la vanille, nappée d'un caramel fondant.",
    price: 30,
    unit: 'DH',
    image: 'https://ik.imagekit.io/ehm3lt9la/flan%20caramel%201?updatedAt=1772465739583',
    ingredients: [
      { name: 'Vanille', icon: '🍦' },
      { name: 'Caramel', icon: '🍯' }
    ]
  },
  {
    id: 'cake-datte',
    name: 'Cake Datte',
    category: 'CAKES',
    description: "Un gâteau de voyage riche et moelleux, mettant à l'honneur la douceur naturelle des dattes. Accompagné de notes de chocolat, ce cake est une escale gourmande parfaite.",
    price: 150,
    unit: 'DH',
    image: 'https://ik.imagekit.io/ehm3lt9la/cake%20datte%201?updatedAt=1772465602157',
    ingredients: [
      { name: 'Datte', icon: '🌴' },
      { name: 'Chocolat', icon: '🍫' }
    ]
  },
  {
    id: 'cake-citron-gingembre',
    name: 'Cake Citron Gingembre',
    category: 'CAKES',
    description: "Éveillez vos sens avec ce cake au caractère affirmé. L'acidité pétillante du citron beldi se marie à la chaleur épicée du gingembre pour une harmonie rafraîchissante.",
    price: 150,
    unit: 'DH',
    image: 'https://ik.imagekit.io/ehm3lt9la/cake%20citron%20gingembre%201?updatedAt=1772465632587',
    ingredients: [
      { name: 'Citron', icon: '🍋' },
      { name: 'Gingembre', icon: '🫚' }
    ]
  },
  {
    id: 'cake-carotte',
    name: 'Cake Carotte',
    category: 'CAKES',
    description: "Une texture incroyablement moelleuse grâce à la carotte fraîche, rehaussée par le croquant des fruits secs et la zeste de l'orange.",
    price: 145,
    unit: 'DH',
    image: 'https://ik.imagekit.io/ehm3lt9la/cake%20carotte%201?updatedAt=1772465615437',
    ingredients: [
      { name: 'Carotte', icon: '🥕' },
      { name: 'Fruit sec', icon: '🥜' },
      { name: 'Orange', icon: '🍊' }
    ]
  },
  {
    id: 'cake-epice',
    name: 'Cake d’Épice',
    category: 'CAKES',
    description: "Une véritable célébration des épices de l'Atlas. Ce cake à la mie dense et parfumée libère des arômes profonds de cannelle et de muscade pour un voyage au cœur de la tradition.",
    price: 150,
    unit: 'DH',
    image: 'https://ik.imagekit.io/ehm3lt9la/cake%20d%20epice%201?updatedAt=1772465444288',
    ingredients: [
      { name: 'Épices Atlas', icon: '🌶️' }
    ]
  },
  {
    id: 'cake-chocolat-brownies',
    name: 'Cake Chocolat Brownies',
    category: 'CAKES',
    description: "L'intensité du chocolat noir mariée au croquant des fruits secs. Un cake ultra-gourmand pour les amateurs de cacao puissant et de textures fondantes.",
    price: 160,
    unit: 'DH',
    image: 'https://ik.imagekit.io/ehm3lt9la/CAKE%20CHOCOLAT%20BROWNIES?updatedAt=1772465966885',
    ingredients: [
      { name: 'Chocolat noir', icon: '🍫' },
      { name: 'Fruits secs', icon: '🥜' }
    ]
  },
  {
    id: 'coffret-cookies-souk',
    name: 'Coffret Cookies Souk Gourmand',
    category: 'Coffrets',
    description: "Un coffret gourmand réunissant nos cookies artisanaux aux saveurs riches et variées. Chaque pièce offre un équilibre parfait entre croquant et fondant, inspiré des saveurs authentiques et revisitées du terroir.",
    price: 36,
    unit: 'DH',
    boxInfo: 'set de 4 cookies',
    image: 'https://ik.imagekit.io/ehm3lt9la/090b2bf9607284715b4e9da635ab3253.jpg?updatedAt=1772386956580',
    contents: [
      'Cookie Noir “Sel d’Essaouira”',
      'Cookie Café Maâtra',
      'Cookie Pistache “Jnan de Fès”',
      'Cookie Trio “Praliné Louz”'
    ],
    ingredients: [
      { name: 'Chocolat noir & fleur de sel', icon: '🍫' },
      { name: 'Chocolat ivoire café épicé', icon: '☕' },
      { name: 'Pistache & chocolat blanc', icon: '🥜' },
      { name: '3 chocolats & praliné noisette', icon: '🍫' }
    ]
  },
  {
    id: 'coffret-cornes-gazelle-fadma',
    name: 'Coffret Cornes de Gazelle Fadma',
    category: 'Coffrets',
    description: "Un coffret raffiné de cornes de gazelle revisitées, mêlant tradition marocaine et créativité moderne. Des textures délicates et des saveurs florales et fruitées pour une expérience élégante.",
    price: 36,
    unit: 'DH',
    boxInfo: 'set de 5 cornes de gazelle',
    image: 'https://ik.imagekit.io/ehm3lt9la/cornes%20de%20gazelle%20fadma',
    contents: [
      'Kaab Ghzal Zahr',
      'Kaab Ghzal Tmar',
      'Kaab Ghzal Foustok',
      'Kaab Ghzal “Rose d’Atlas”',
      'Kaab Ghzal “Nuit du Désert”'
    ],
    ingredients: [
      { name: 'Fleur d’oranger & amande', icon: '🌸' },
      { name: 'Dattes & amande', icon: '🌴' },
      { name: 'Pistache & amande', icon: '🥜' },
      { name: 'Rose & framboise', icon: '🌹' },
      { name: 'Chocolat & amande', icon: '🍫' }
    ]
  },
  {
    id: 'patisseries-marocaines-plateau',
    name: 'Pâtisseries Marocaines',
    category: 'Plateaux',
    description: "L'expression ultime du partage et de la tradition. Notre plateau de Pâtisseries Marocaines offre une sélection généreuse de pièces artisanales, préparées avec passion. Chaque bouchée révèle une texture fondante traditionnelle, fidèle aux recettes ancestrales, pour sublimer vos moments de convivialité et vos célébrations les plus précieuses.",
    price: 80,
    unit: 'DH',
    image: 'https://ik.imagekit.io/ehm3lt9la/Gemini_Generated_Image_qa0y13qa0y13qa0y.png?updatedAt=1772388443208',
    contents: [
      'Assortiment de gâteaux marocains variés'
    ],
    ingredients: [
      { name: 'Fondante traditionnelle', icon: '✨' }
    ],
    variants: [
      { label: '24 pièces', price: 80 },
      { label: '48 pièces', price: 190 }
    ]
  },
  {
    id: 'macarons-atlas',
    name: 'Macarons',
    category: 'Coffrets',
    description: "Succombez à la légèreté de notre coffret de Macarons Artisanaux. Une symphonie de textures avec une coque croquante et un cœur fondant, déclinée en saveurs emblématiques. Entre la fraîcheur du citron beldi et la douceur de la fleur d'oranger, chaque macaron est une création raffinée qui capture l'essence même de la gourmandise délicate.",
    price: 30,
    unit: 'DH',
    boxInfo: 'set de 5 macarons',
    image: 'https://ik.imagekit.io/ehm3lt9la/macaron?updatedAt=1772454817322',
    contents: [
      'Macaron Citron Beldi “Medina”',
      'Macaron Vanille “Perle Blanche”',
      'Macaron Framboise “Assif”',
      'Macaron Pistache “Foustok”',
      'Macaron Fleur d’Oranger “Zahr”'
    ],
    ingredients: [
      { name: 'Citron beldi', icon: '🍋' },
      { name: 'Vanille', icon: '🍦' },
      { name: 'Framboise', icon: '🍓' },
      { name: 'Pistache', icon: '🥜' },
      { name: 'Fleur d’oranger', icon: '🌸' }
    ]
  }
];

export interface CartItem extends Product {
  quantity: number;
  variant?: string;
}

export const INITIAL_CART: CartItem[] = [];

export const CATEGORIES = [
  'All',
  'Plateaux',
  'GATEAUX',
  'CAKES',
  'Coffrets'
];
