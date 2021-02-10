import { images } from './images';

export const CATEGORIES = [
  {
    id: 'fruit',
    name: 'Shop Fruit',
    img: images.apples,
    bgColor: '#BF012C',
    featured: true
  },
  {
    id: 'veggies',
    name: 'Shop Veggies',
    img: images.garlic,
    bgColor: 'grey'
  },
  {
    id: 'all',
    name: 'Shop All',
    img: images.lemon,
    bgColor: '#A5C026'
  }
];

export default CATEGORIES;
