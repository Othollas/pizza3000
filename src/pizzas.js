import marguerita from '../src/img/pizzas/marguerita.jpg'
import quatrefromages from '../src/img/pizzas/4-fromages.jpg'
import pepperoni from '../src/img/pizzas/pepperoni.jpg'
import reine from '../src/img/pizzas/reine.jpg'

const pizzas = [
    {
        name: "Marguerita",
        id: 1,
        price: 7.80,
        paid: false,
        img: marguerita ,
    },

    {
        name: "4-fromages",
        id: 2,
        price: 8,
        paid: false,
        img:  quatrefromages ,
    },

    {
        name: "Pepperoni",
        id: 3,
        price: 9,
        paid: false,
        img:  pepperoni ,

    },

    {
        name: "Reine",
        id: 4,
        price: 7.50,
        paid: false,
        img:  reine ,
    },

]

export default pizzas;