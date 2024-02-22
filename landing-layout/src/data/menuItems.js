import home from '../assets/icons/home.svg'
import shoppingBag from '../assets/icons/shopping_bag.svg'
import categories from '../assets/icons/categories.svg'
import folders from '../assets/icons/folders.svg'

export const menuItems = [
  {
    id: crypto.randomUUID(),
    text: 'Home',
    icon: home
  },
  {
    id: crypto.randomUUID(),
    text: 'Store',
    icon: shoppingBag
  },
  {
    id: crypto.randomUUID(),
    text: 'Categories',
    icon: categories
  },
  {
    id: crypto.randomUUID(),
    text: 'Stuff',
    icon: folders
  }
]
