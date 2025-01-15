export const categories = [
    {
        id: 1,
        name: "Extras",
        image: require('../assets/images/categories/extras.png')
    }, {
        id: 2,
        name: "Appetisers",
        image: require('../assets/images/categories/samosa.png')
    }, {
        id: 3,
        name: "Chef's Recommended",
        image: require('../assets/images/categories/chefs-rec.png')
    }, {
        id: 4,
        name: "Our Specials",
        image: require('../assets/images/categories/specials.png')
    }, {
        id: 5,
        name: "Tandoori Dishes",
        image: require('../assets/images/categories/tandoori-chicken.png')
    }, {
        id: 6,
        name: "Balti Dishes",
        image: require('../assets/images/categories/balti.png')
    }, {
        id: 7,
        name: "Traditional Dishes",
        image: require('../assets/images/categories/traditional-dishes.png')
    }, {
        id: 8,
        name: "Vegetable Main Dishes",
        image: require('../assets/images/categories/vegetable-dishes.png')
    }, {
        id: 9,
        name: "Vegetable Side Dishes",
        image: require('../assets/images/categories/veg-side-dishes.png')
    }, {
        id: 10,
        name: "English Dishes",
        image: require('../assets/images/categories/fish-and-chips.png')
    }, {
        id: 11,
        name: "Curry Sauces",
        image: require('../assets/images/categories/soup.png')
    }, {
        id: 12,
        name: "Rice",
        image: require('../assets/images/categories/rice.png')
    }, {
        id: 13,
        name: "Naan",
        image: require('../assets/images/categories/naan.png')
    }, {
        id: 14,
        name: "Set Meals",
        image: require('../assets/images/categories/set-menu.png')
    }, {
        id: 15,
        name: "Drinks",
        image: require('../assets/images/categories/drinks.png')
    }
]

export const featured = [
    {
        id: 1,
        title: "Featured Dishes",
        category: "Traditional Dishes",
        description: "Our most ordered items.",
        items: [
            {
                id: 1,
                name: "Chicken Tikka Masala",
                description: "Diced marinated chicken in a sweet masala sauce.",
                price: 9.99,
                image: require('../assets/images/dishes/curry.jpeg'),
                navTo: 'menu'
            }, {
                id: 2,
                name: "Valley Special Biryani",
                description: "Chicken tikka, mushrooms, and prawn mixed in a biryani.",
                price: 9.99,
                image: require('../assets/images/dishes/biryani.jpg'),
                navTo: 'menu'
            },{
                id: 3,
                name: "Lamb Samosas",
                description: "A portion of 2 samosas filled with minced meat, peas, and potatoes",
                price: 9.99,
                image: require('../assets/images/dishes/somosa.jpeg'),
                navTo: 'menu'
            },{
                id: 4,
                name: "Valley Special Naan",
                description: "A naan bread stuffed with minced meat, and covered in diced chillis and garlic",
                price: 9.99,
                image: require('../assets/images/dishes/naan.jpeg'),
                navTo: 'menu'
            },
        ]
    },{
        id: 2,
        title: "Special Offers",
        category: "Starters",
        description: "Our best offers for you",
        items: [
            {
                id: 1,
                name: "10% off",
                description: "Get 10% off on collection orders ",
                price: 12,
                image: require('../assets/images/offer.png'),
                navTo: 'offers'
            }, {
                id: 2,
                name: "Free delivery",
                description: "Get free delivery on orders over £20",
                price: 15,
                image: require('../assets/images/offer.png'),
                navTo: 'offers'
            }
        ]
    }
]

export const menu = [
    {
        id: 1,
        category: "Extras",
        dishes: [
            {
                id: 1,
                name: "Popadom",
                price: 1.00
            }, {
                id: 2,
                name: "Spicy Popadom",
                price: 1.00
            },{
                id: 3,
                name: "Mint Sauce",
                price: 1.00
            },
        ]
    }, {
        id: 2,
        category: "Appetisers",
        dishes: [
            {
                id: 4,
                name: "Mix Kebab",
                price: 4.95
            }, {
                id: 5,
                name: "Onion Bhajee",
                price: 4.95
            },{
                id: 6,
                name: "Lamb Samosa",
                price: 4.95
            },
        ]
    }, {
        id: 3,
        category: "Chef's Recommended",
        dishes: [
            {
                id: 7,
                name: "Butter Chicken",
                price: 9.95
            }, {
                id: 8,
                name: "Naga Chicken",
                price: 9.95
            },{
                id: 9,
                name: "Bengal Roast Chicken",
                price: 9.95
            },
        ]
    }, {
        id: 4,
        category: "Our Specials",
        dishes: [
            {
                id: 10,
                name: "King Prawn Joydha",
                price: 9.95
            }, {
                id: 11,
                name: "Hariyali Chicken",
                price: 9.95
            },{
                id: 12,
                name: "Hariyali Lamb",
                price: 9.95
            },
        ]
    }, {
        id: 5,
        category: "Tandoori Dishes",
        dishes: [
            {
                id: 13,
                name: "King Prawn",
                price: 9.95
            }
        ]
    }, {
        id: 6,
        category: "Balti Dishes",
        dishes: [
            {
                id: 14,
                name: "King Prawn Balti",
                price: 9.95
            }
        ]
    }, {
        id: 7,
        category: "Traditional Dishes",
        dishes: [
            {
                id: 15,
                name: "King Prawn Curry",
                price: 9.95
            }
        ]
    }, {
        id: 8,
        category: "Vegetable Main Dishes",
        dishes: [
            {
                id: 16,
                name: "Vegetable Curry",
                price: 9.95
            }
        ]
    }, {
        id: 9,
        category: "Vegetable Side Dishes",
        dishes: [
            {
                id: 17,
                name: "Bombay Aloo",
                price: 9.95
            }
        ]
    }, {
        id: 10,
        category: "English Dishes",
        dishes: [
            {
                id: 18,
                name: "Fish and Chips",
                price: 9.95
            }
        ]
    }, {
        id: 11,
        category: "Curry Sauces",
        dishes: [
            {
                id: 19,
                name: "Masala Sauce",
                price: 9.95
            }
        ]
    }, {
        id: 12,
        category: "Rice",
        dishes: [
            {
                id: 20,
                name: "Mushroom Rice",
                price: 9.95
            }
        ]
    }, {
        id: 13,
        category: "Naan Breads",
        dishes: [
            {
                id: 21,
                name: "Plain Naan",
                price: 9.95
            }
        ]
    }, {
        id: 14,
        category: "Set Meals",
        dishes: [
            {
                id: 22,
                name: "Set Meal for One",
                price: 9.95
            }
        ]
    }, {
        id: 15,
        category: "Drinks",
        dishes: [
            {
                id: 23,
                name: "Cola",
                price: 9.95
            }
        ]
    }
]
export const location = {
    address: {
        line1: "Indian Valley",
        line2: "59 Cotmandene Crescent",
        town: "Orpington",
        postcode: "BR5 2RA"
    },
    lat: 51.4048267,
    lng: 0.1052765
}