import home from '../assets/icons/home.svg'
import shopping_bag from '../assets/icons/shopping_bag.svg'
import categories from '../assets/icons/categories.svg'
import folders from '../assets/icons/folders.svg'

export const menu_items = [
    {
        id:crypto.randomUUID(),
        text: 'Home',
        icon: home,
    },
    {
        id:crypto.randomUUID(),
        text: 'Store',
        icon: shopping_bag,
    },
    {
        id:crypto.randomUUID(),
        text: 'Categories',
        icon: categories,
    },
    {
        id:crypto.randomUUID(),
        text: 'Stuff',
        icon: folders,
    },
]