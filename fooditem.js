const foodItem= [
    {
    id: 1,
    name: 'Veg Mayo Sandwhich',
    category : 'sandwhich',
    rating : 4.2,
    price: 100,
    img: '/assets/s1.jpeg',
    quantity: 1
},//
{
    id: 2,
    name: 'Veg Sandwhich',
    category : 'sandwhich',
    rating : 4.1,
    price: 100,
    img: '/assets/s2.avif',
    quantity: 1
},//
{
    id: 3,
    name: 'Cheese Sandwhich',
    category : 'sandwhich',
    rating : 4.5,
    price: 130,
    img: '/assets/s3.avif',
    quantity: 1
},//
{
    id: 4,
    name: 'Grilled Sandwhich',
    category : 'sandwhich',
    rating : 4.0,
    price: 135,
    img: '/assets/s4.avif',
    quantity: 1
},//
{
    id: 5,
    name: 'Paneer Panini',
    category : 'sandwhich',
    rating : 4.6,
    price: 150,
    img: '/assets/s5.jpg',
    quantity: 1
},//
{
    id: 6,
    name: 'Grilled Mayo',
    category : 'sandwhich',
    rating : 4.2,
    price: 140,
    img: '/assets/s6.jpg',
    quantity: 1
},//
{
    id: 7,
    name: 'Mumbai Sandwhich',
    category : 'sandwhich',
    rating : 4.4,
    price: 110,
    img: '/assets/s7.avif',
    quantity: 1
},//
{
    id: 8,
    name: 'Corn Cheese',
    category : 'sandwhich',
    rating : 4.5,
    price: 120,
    img: '/assets/s8.avif',
    quantity: 1
},//
{
    id: 9,
    name: 'Grilled Cheese',
    category : 'sandwhich',
    rating : 4.3,
    price: 115,
    img: '/assets/s9.avif',
    quantity: 1
},//
{
    id: 10,
    name: 'Crispy Veg Burger',
    category : 'burger',
    rating : 4.2,
    price: 110,
    img: '/assets/bu1.jpg',
    quantity: 1
},//
{
    id: 11,
    name: 'Double Tikki Burger',
    category : 'burger',
    rating : 4.5,
    price: 140,
    img: '/assets/bu2.jpg',
    quantity: 1
},//
{
    id: 12,
    name: 'Makhani Burst Burger',
    category : 'burger',
    rating : 4.4,
    price: 160,
    img: '/assets/bu3.avif',
    quantity: 1
},//
{
    id: 13,
    name: 'Cheesy Burger',
    category : 'burger',
    rating : 4.1,
    price: 120,
    img: '/assets/bu4.avif',
    quantity: 1
},//
{
    id: 14,
    name: 'Veggie Burger',
    category : 'burger',
    rating : 4.2,
    price: 125,
    img: '/assets/bu5.avif',
    quantity: 1
},//
{
    id: 15,
    name: 'Special Burger',
    category : 'burger',
    rating : 4.4,
    price: 140,
    img: '/assets/bu6.avif',
    quantity: 1
},//
{
    id: 16,
    name: 'Makhani Grilled',
    category : 'burger',
    rating : 4.6,
    price: 150,
    img: '/assets/bu7.avif',
    quantity: 1
},//
{
    id: 17,
    name: 'Veg Mayo Patty',
    category : 'burger',
    rating : 4.2,
    price: 130,
    img: '/assets/bu8.avif',
    quantity: 1
},//
{
    id: 18,
    name: 'Aloo Patty Cheesy',
    category : 'burger',
    rating : 4.0,
    price: 15,
    img: '/assets/bu9.avif',
    quantity: 1
},//
{
    id: 19,
    name: 'Gourmet Pizza',
    category : 'pizza',
    rating : 4.5,
    price: 200,
    img: '/assets/p1.avif',
    quantity: 1

},//
{
    id: 20,
    name: 'Veg Barbeque Pizza',
    category : 'pizza',
    rating : 4.3,
    price: 250,
    img: '/assets/p2.avif',
    quantity: 1
},//
{
    id: 21,
    name: 'Desi Makhani Pizza',
    category : 'pizza',
    rating : 4.2,
    price: 170,
    img: '/assets/p3.avif',
    quantity: 1
},//
{
    id: 22,
    name: 'Margerita Pizza',
    //age: '32',
    category : 'pizza',
    rating : 4.5,
    price: 150,
    img: '/assets/p4.avif',
    quantity: 1
},//
{
    id: 23,
    name: 'Farmhouse Pizza',
    category : 'pizza',
    rating : 4.4,
    price: 180,
    img: '/assets/p5.avif',
    quantity: 1
},//
{
    id: 24,
    name: 'Cheesy Loaded',
    category : 'pizza',
    rating : 4.2,
    price: 270,
    img: '/assets/p6.avif',
    quantity: 1
},//
{
    id: 25,
    name: 'Veggie Fiesta',
    category : 'pizza',
    rating : 4.5,
    price: 150,
    img: '/assets/p7.avif',
    quantity: 1
},//
{
    id: 26,
    name: 'Triple Veggie Delight',
    category : 'pizza',
    rating : 4.3,
    price: 170,
    img: '/assets/p8.avif',
    quantity: 1
},//
{
    id: 27,
    name: 'Fiery Jalepaeno',
    category : 'pizza',
    rating : 4.7,
    price: 180,
    img: '/assets/p9.avif',
    quantity: 1
},//
{
    id: 28,
    name: 'Matter Paratha',
    category : 'paratha',
    rating : 4.5,
    price: 45,
    img: '/assets/pa1.avif',
    quantity: 1
},//
{
    id: 29,
    name: 'Aloo Paratha',
    category : 'paratha',
    rating : 4.3,
    price: 40,
    img: '/assets/pa2.avif',
    quantity: 1
},//
{
    id: 30,
    name: '0nion Paratha',
    category : 'paratha',
    rating : 4.2,
    price: 60,
    img: '/assets/pa3.avif',
    quantity: 1
},//
{
    id: 31,
    name: 'Mix Veg Paratha',
    category : 'paratha',
    rating : 4.6,
    price: 70,
    img: '/assets/pa4.jpeg',
    quantity: 1
},//
{
    id: 32,
    name: 'Paneer Paratha',
    category : 'paratha',
    rating : 4.3,
    price: 80,
    img: '/assets/pa5.jpeg',
    quantity: 1
},//
{
    id: 33,
    name: 'Methi Paratha',
    category : 'paratha',
    rating : 4.5,
    price: 60,
    img: '/assets/pa6.jpeg',
    quantity: 1
},//
{
    id: 34,
    name: 'Aloo Onion Paratha',
    category : 'paratha',
    rating : 4.3,
    price: 75,
    img: '/assets/pa7.jpeg',
    quantity: 1
},//
{
    id: 35,
    name: 'Garlic Paratha',
    category : 'paratha',
    rating : 4.2,
    price: 60,
    img: '/assets/pa8.jpeg',
    quantity: 1
},//
{
    id: 36,
    name: 'Cheese paratha',
    category : 'paratha',
    rating : 4.6,
    price: 80,
    img: '/assets/pa9.jpeg',
    quantity: 1
},//
{
    id: 37,
    name: 'Mint Chaas',
    category : 'beverages',
    rating : 4.4,
    price: 30,
    img: '/assets/b1.jpg',
    quantity: 1
},//
{
    id: 38,
    name: 'Chilled Lemonade',
    category : 'beverages',
    rating : 4.3,
    price: 40,
    img: '/assets/b2.jpg',
    quantity: 1
},//
{
    id: 39,
    name: 'Nimbu Shikhanji',
    category : 'beverages',
    rating : 4.2,
    price: 50,
    img: '/assets/b3.jpg',
    quantity: 1
},//
{
    id: 40,
    name: 'Mojhito',
    category : 'beverages',
    rating : 4.5,
    price: 120,
    img: '/assets/b4.jpg',
    quantity: 1
},//
{
    id: 41,
    name: 'Pepsi 300ml',
    category : 'beverages',
    rating : 4.1,
    price: 35,
    img: '/assets/b5.jpg',
    quantity: 1
},//
{
    id: 42,
    name: 'Hot chocolate',
    category : 'beverages',
    rating : 4.2,
    price: 60,
    img: '/assets/b6.avif',
    quantity: 1
},//
{
    id: 43,
    name: '0reo Shake',
    category : 'beverages',
    rating : 4.4,
    price: 70,
    img: '/assets/b7.avif',
    quantity: 1
},//
{
    id: 44,
    name: 'Pineapple Juice',
    category : 'beverages',
    rating : 4.6,
    price: 40,
    img: '/assets/b8.avif',
    quantity: 1
},
{
    id: 45,
    name: 'Garnished Cholocate',
    category : 'beverages',
    rating : 4.5,
    price: 350,
    img: '/assets/b9.jpeg',
    quantity: 1
},//
{
    id: 46,
    name: 'Cross Roll',
    category : 'dessert',
    rating : 4.2,
    price: 130,
    img: '/assets/d1.JPG',
    quantity: 1
},//
{
    id: 47,
    name: 'Dark Chocolate',
    category : 'dessert',
    rating : 4.4,
    price: 160,
    img: '/assets/d2.avif',
    quantity: 1
},//
{
    id: 48,
    name: 'Chocolaty Cake',
    category : 'dessert',
    rating : 4.5,
    price: 150,
    img: '/assets/d3.avif',
    quantity: 1
},//
{
    id: 49,
    name: 'Cheese Cake',
    category : 'dessert',
    rating : 4.3,
    price: 220,
    img: '/assets/d4.avif',
    quantity: 1
},//
{
    id: 50,
    name: 'Gulab Jamun',
    category : 'dessert',
    rating : 4.0,
    price: 100,
    img: '/assets/d5.avif',
    quantity: 1
},//
{
    id: 51,
    name: 'Truffle cheese cake',
    category : 'dessert',
    rating : 4.5,
    price: 300,
    img: '/assets/d6.avif',
    quantity: 1
},//

]

export {foodItem};