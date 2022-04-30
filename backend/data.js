import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Jashan',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Arjun',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      //_id: '1',
      name: 'Shaktiman 3776',
      slug: 'harvester1',
      category: 'Rice-Harvesters',
      brand: 'Ashok Leyland',
      image: '/images/p1.jpg',
      price: 1300,
      availability: 5,
      rating: 4.5,
      numReviews: 17,
      description: 'Reliable combine for rent',
    },
    {
      //_id: '2',
      name: 'Kartar 4000',
      slug: 'harvester2',
      category: 'Wheat-Harvesters',
      brand: 'Kartar',
      image: '/images/p1.jpg',
      price: 2500,
      availability: 12,
      rating: 4,
      numReviews: 34,
      description: 'Reliable combine for rent',
    },
    {
      //_id: '3',
      name: 'Dashmesh 9100',
      slug: 'harvester3',
      category: 'Maize-Harvesters',
      brand: 'Dashmesh',
      image: '/images/p1.jpg',
      price: 2000,
      availability: 7,
      rating: 4,
      numReviews: 7,
      description: 'Reliable combine for rent',
    },
    {
      //_id: '4',
      name: 'Preet 987',
      slug: 'harvester4',
      category: 'Wheat-Harvesters',
      brand: 'Preet',
      image: '/images/p1.jpg',
      price: 1700,
      availability: 13,
      rating: 4,
      numReviews: 25,
      description: 'Reliable combine for rent',
    },
  ],
};

export default data;
