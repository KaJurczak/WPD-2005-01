const initialState = {
  categories: [
    { id: 'bed', name: 'Bed' },
    { id: 'chair', name: 'Chair' },
    { id: 'sofa', name: 'Sofa' },
    { id: 'table', name: 'Table' },
    { id: 'dining', name: 'Dining' },
  ],
  products: [
    {
      id: 'aenean-ru-bristique-1',
      name: 'Aenean Ru Bristique 1',
      category: 'bed',
      image: 'https://files.tinypic.pl/i/01005/e95n3fkh1qp6.jpeg',
      title: 'cool bed',
      price: 30,
      oldPrice: 25,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: '',
      compare: '',
    },
    {
      id: 'aenean-ru-bristique-2',
      name: 'Aenean Ru Bristique 2',
      image: 'https://files.tinypic.pl/i/01005/lnrrb919kzjz.jpeg',
      title: 'cool bed',
      category: 'bed',
      price: 30,
      oldPrice: 29,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: 'yes',
      compare: '',
    },
    {
      id: 'aenean-ru-bristique-3',
      name: 'Aenean Ru Bristique 3',
      image: 'https://files.tinypic.pl/i/01005/sw4rl9ag87pr.jpeg',
      title: 'cool bed',
      category: 'bed',
      price: 30,
      oldPrice: 20,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: '',
      compare: 'yes',
    },
    {
      id: 'aenean-ru-bristique-4',
      name: 'Aenean Ru Bristique 4',
      image: 'https://files.tinypic.pl/i/01005/lwc3nszymldx.jpeg',
      title: 'cool bed',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: 'yes',
      compare: 'yes',
    },
    {
      id: 'aenean-ru-bristique-5',
      name: 'Aenean Ru Bristique 5',
      image: 'https://files.tinypic.pl/i/01005/eeifdxl3xn92.jpeg',
      title: 'cool bed',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: '',
      compare: '',
    },
    {
      id: 'aenean-ru-bristique-6',
      name: 'Aenean Ru Bristique 6',
      image: 'https://files.tinypic.pl/i/01005/ijfgm1dyxvmt.jpeg',
      title: 'cool bed',
      category: 'bed',
      price: 30,
      oldPrice: 23,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: '',
      compare: '',
    },
    {
      id: 'aenean-ru-bristique-7',
      name: 'Aenean Ru Bristique 7',
      image: 'https://files.tinypic.pl/i/01005/4nyqmfj42t3s.jpeg',
      title: 'cool bed',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: '',
      compare: '',
    },
    {
      id: 'aenean-ru-bristique-8',
      name: 'Aenean Ru Bristique 8',
      image: 'https://files.tinypic.pl/i/01005/2nlvqps4a5gg.jpeg',
      title: 'cool bed',
      category: 'bed',
      price: 30,
      oldPrice: 25,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: '',
      compare: '',
    },
    {
      id: 'aenean-ru-bristique-9',
      name: 'Aenean Ru Bristique 9',
      image: 'https://files.tinypic.pl/i/01005/sw4rl9ag87pr.jpeg',
      title: 'cool bed',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: '',
      compare: '',
    },
    {
      id: 'aenean-ru-bristique-10',
      name: 'Aenean Ru Bristique 10',
      image: 'https://files.tinypic.pl/i/01005/sw4rl9ag87pr.jpeg',
      title: 'cool bed',
      category: 'bed',
      price: 30,
      oldPrice: 25,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: '',
      compare: '',
    },
    {
      id: 'aenean-ru-bristique-11',
      name: 'Aenean Ru Bristique 11',
      image: 'https://files.tinypic.pl/i/01005/sw4rl9ag87pr.jpeg',
      title: 'cool bed',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: '',
      compare: '',
    },
    {
      id: 'aenean-ru-bristique-12',
      name: 'Aenean Ru Bristique 12',
      image: 'https://files.tinypic.pl/i/01005/sw4rl9ag87pr.jpeg',
      title: 'cool bed',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: '',
      compare: '',
    },
    {
      id: 'aenean-ru-bristique-13',
      name: 'Aenean Ru Bristique 13',
      image: 'https://files.tinypic.pl/i/01005/sw4rl9ag87pr.jpeg',
      title: 'cool bed',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: '',
      compare: '',
    },
    {
      id: 'aenean-ru-bristique-14',
      name: 'Aenean Ru Bristique 14',
      image: 'https://files.tinypic.pl/i/01005/sw4rl9ag87pr.jpeg',
      title: 'cool bed',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: '',
      compare: '',
    },
    {
      id: 'aenean-ru-bristique-15',
      name: 'Aenean Ru Bristique 15',
      image: 'https://files.tinypic.pl/i/01005/sw4rl9ag87pr.jpeg',
      title: 'cool bed',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: '',
      compare: '',
    },
    {
      id: 'aenean-ru-bristique-16',
      name: 'Aenean Ru Bristique 16',
      image: 'https://files.tinypic.pl/i/01005/sw4rl9ag87pr.jpeg',
      title: 'cool bed',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: '',
      compare: '',
    },
    {
      id: 'aenean-ru-bristique-17',
      name: 'Aenean Ru Bristique 17',
      image: 'https://files.tinypic.pl/i/01005/sw4rl9ag87pr.jpeg',
      title: 'cool bed',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: '',
      compare: '',
    },
    {
      id: 'aenean-ru-bristique-18',
      name: 'Aenean Ru Bristique 18',
      image: 'https://files.tinypic.pl/i/01005/sw4rl9ag87pr.jpeg',
      title: 'cool bed',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: '',
      compare: '',
    },
    {
      id: 'aenean-ru-bristique-19',
      name: 'Aenean Ru Bristique 19',
      image: 'https://files.tinypic.pl/i/01005/sw4rl9ag87pr.jpeg',
      title: 'cool bed',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: '',
      compare: '',
    },
    {
      id: 'aenean-ru-bristique-20',
      name: 'Aenean Ru Bristique 20',
      image: 'https://files.tinypic.pl/i/01005/sw4rl9ag87pr.jpeg',
      title: 'cool bed',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: '',
      compare: '',
    },
    {
      id: 'aenean-ru-bristique-21',
      name: 'Aenean Ru Bristique 21',
      image: 'https://files.tinypic.pl/i/01005/sw4rl9ag87pr.jpeg',
      title: 'cool bed',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: '',
      compare: '',
    },
    {
      id: 'aenean-ru-bristique-22',
      name: 'Aenean Ru Bristique 22',
      image: 'https://files.tinypic.pl/i/01005/sw4rl9ag87pr.jpeg',
      title: 'cool bed',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: '',
      compare: '',
    },
    {
      id: 'aenean-ru-bristique-23',
      name: 'Aenean Ru Bristique 23',
      image: 'https://files.tinypic.pl/i/01005/sw4rl9ag87pr.jpeg',
      title: 'cool bed',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: '',
      compare: '',
    },
    {
      id: 'aenean-ru-bristique-24',
      name: 'Aenean Ru Bristique 24',
      image: 'https://files.tinypic.pl/i/01005/sw4rl9ag87pr.jpeg',
      title: 'cool bed',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: '',
      compare: '',
    },
  ],
  cart: {
    products: [],
  },
  favorites: ['aenean-ru-bristique-2', 'aenean-ru-bristique-24'],
};

export default initialState;
