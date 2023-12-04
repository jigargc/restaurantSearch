const restaurantsData = [
    {
        "name": "Urban Diner",
        "location": "984 Cliff Avenue, Greenville",
        "image": "diner_6.jpg",
        "menuItemsArray": [
            {
                "name": "Grilled Salmon",
                "price": "$18.99"
            },
            {
                "name": "Veggie Omelette",
                "price": "$10.99"
            },
            {
                "name": "Vegan Burger",
                "price": "$13.99"
            }
        ]
    },
    {
        "name": "Garden Bar",
        "location": "567 Park Lane, Highland",
        "image": "restaurant_3.jpg",
        "menuItemsArray": [
            {
                "name": "Pancakes",
                "price": "$7.99"
            },
            {
                "name": "Avocado Toast",
                "price": "$12.99"
            },
            {
                "name": "Caesar Salad",
                "price": "$9.99"
            }
        ]
    },
    {
        "name": "The Caf\u00e9",
        "location": "753 River Road, Downtown",
        "image": "diner_4.jpg",
        "menuItemsArray": [
            {
                "name": "Caesar Salad",
                "price": "$9.99"
            },
            {
                "name": "Pancakes",
                "price": "$7.99"
            },
            {
                "name": "Avocado Toast",
                "price": "$12.99"
            }
        ]
    },
    {
        "name": "The Grill",
        "location": "415 Park Lane, Downtown",
        "image": "diner_1.jpg",
        "menuItemsArray": [
            {
                "name": "Caesar Salad",
                "price": "$9.99"
            },
            {
                "name": "Chicken Panini",
                "price": "$11.99"
            },
            {
                "name": "Grilled Salmon",
                "price": "$18.99"
            }
        ]
    },
    {
        "name": "The Bar",
        "location": "291 Park Lane, Downtown",
        "image": "restaurant_6.jpg",
        "menuItemsArray": [
            {
                "name": "Lobster Roll",
                "price": "$22.50"
            },
            {
                "name": "French Toast",
                "price": "$8.50"
            },
            {
                "name": "Vegan Burger",
                "price": "$13.99"
            }
        ]
    },
    {
        "name": "Garden Bistro",
        "location": "731 River Road, Lakeside",
        "image": "cafe_5.jpg",
        "menuItemsArray": [
            {
                "name": "Grilled Salmon",
                "price": "$18.99"
            },
            {
                "name": "French Toast",
                "price": "$8.50"
            },
            {
                "name": "Lobster Roll",
                "price": "$22.50"
            }
        ]
    },
    {
        "name": "Mountain Bistro",
        "location": "368 Forest Lane, Downtown",
        "image": "diner_3.jpg",
        "menuItemsArray": [
            {
                "name": "French Toast",
                "price": "$8.50"
            },
            {
                "name": "Chicken Panini",
                "price": "$11.99"
            },
            {
                "name": "Lobster Roll",
                "price": "$22.50"
            }
        ]
    },
    {
        "name": "Urban Bistro",
        "location": "387 Ocean Drive, Downtown",
        "image": "diner_1.jpg",
        "menuItemsArray": [
            {
                "name": "Veggie Omelette",
                "price": "$10.99"
            },
            {
                "name": "Grilled Salmon",
                "price": "$18.99"
            },
            {
                "name": "Avocado Toast",
                "price": "$12.99"
            }
        ]
    },
    {
        "name": "Seaside Caf\u00e9",
        "location": "849 Park Lane, Greenville",
        "image": "cafe_3.jpg",
        "menuItemsArray": [
            {
                "name": "Chicken Panini",
                "price": "$11.99"
            },
            {
                "name": "French Toast",
                "price": "$8.50"
            },
            {
                "name": "Caesar Salad",
                "price": "$9.99"
            }
        ]
    },
    {
        "name": "The Eatery",
        "location": "341 River Road, Greenville",
        "image": "restaurant_1.jpg",
        "menuItemsArray": [
            {
                "name": "Caesar Salad",
                "price": "$9.99"
            },
            {
                "name": "Grilled Salmon",
                "price": "$18.99"
            },
            {
                "name": "Vegan Burger",
                "price": "$13.99"
            }
        ]
    },
    {
        "name": "Garden Lounge",
        "location": "907 Cliff Avenue, Beachtown",
        "image": "cafe_10.jpg",
        "menuItemsArray": [
            {
                "name": "Veggie Omelette",
                "price": "$10.99"
            },
            {
                "name": "French Toast",
                "price": "$8.50"
            },
            {
                "name": "Lobster Roll",
                "price": "$22.50"
            }
        ]
    },
    {
        "name": "Urban Eatery",
        "location": "135 Ocean Drive, Rivertown",
        "image": "cafe_8.jpg",
        "menuItemsArray": [
            {
                "name": "Veggie Omelette",
                "price": "$10.99"
            },
            {
                "name": "Avocado Toast",
                "price": "$12.99"
            },
            {
                "name": "Pancakes",
                "price": "$7.99"
            }
        ]
    },
    {
        "name": "Seaside Lounge",
        "location": "408 Forest Lane, Rivertown",
        "image": "diner_8.jpg",
        "menuItemsArray": [
            {
                "name": "Pancakes",
                "price": "$7.99"
            },
            {
                "name": "Caesar Salad",
                "price": "$9.99"
            },
            {
                "name": "Lobster Roll",
                "price": "$22.50"
            }
        ]
    },
    {
        "name": "Mountain Diner",
        "location": "738 City Street, Beachtown",
        "image": "cafe_5.jpg",
        "menuItemsArray": [
            {
                "name": "Lobster Roll",
                "price": "$22.50"
            },
            {
                "name": "Grilled Salmon",
                "price": "$18.99"
            },
            {
                "name": "Pancakes",
                "price": "$7.99"
            }
        ]
    },
    {
        "name": "Urban Eatery",
        "location": "467 City Street, Greenville",
        "image": "restaurant_2.jpg",
        "menuItemsArray": [
            {
                "name": "Vegan Burger",
                "price": "$13.99"
            },
            {
                "name": "Pancakes",
                "price": "$7.99"
            },
            {
                "name": "Veggie Omelette",
                "price": "$10.99"
            }
        ]
    },
    {
        "name": "Urban Eatery",
        "location": "635 River Road, Greenville",
        "image": "cafe_4.jpg",
        "menuItemsArray": [
            {
                "name": "Avocado Toast",
                "price": "$12.99"
            },
            {
                "name": "Veggie Omelette",
                "price": "$10.99"
            },
            {
                "name": "Lobster Roll",
                "price": "$22.50"
            }
        ]
    },
    {
        "name": "Seaside Diner",
        "location": "753 Ocean Drive, Beachtown",
        "image": "cafe_3.jpg",
        "menuItemsArray": [
            {
                "name": "Grilled Salmon",
                "price": "$18.99"
            },
            {
                "name": "Chicken Panini",
                "price": "$11.99"
            },
            {
                "name": "Lobster Roll",
                "price": "$22.50"
            }
        ]
    },
    {
        "name": "Lakeview Caf\u00e9",
        "location": "173 Cliff Avenue, Lakeside",
        "image": "restaurant_2.jpg",
        "menuItemsArray": [
            {
                "name": "Grilled Salmon",
                "price": "$18.99"
            },
            {
                "name": "French Toast",
                "price": "$8.50"
            },
            {
                "name": "Pancakes",
                "price": "$7.99"
            }
        ]
    },
    {
        "name": "Mountain Caf\u00e9",
        "location": "282 Forest Lane, Highland",
        "image": "diner_8.jpg",
        "menuItemsArray": [
            {
                "name": "Avocado Toast",
                "price": "$12.99"
            },
            {
                "name": "Pancakes",
                "price": "$7.99"
            },
            {
                "name": "Veggie Omelette",
                "price": "$10.99"
            }
        ]
    },
    {
        "name": "Downtown Caf\u00e9",
        "location": "346 Forest Lane, Greenville",
        "image": "diner_4.jpg",
        "menuItemsArray": [
            {
                "name": "Chicken Panini",
                "price": "$11.99"
            },
            {
                "name": "Grilled Salmon",
                "price": "$18.99"
            },
            {
                "name": "Vegan Burger",
                "price": "$13.99"
            }
        ]
    },
    {
        "name": "Urban Lounge",
        "location": "939 Forest Lane, Highland",
        "image": "cafe_4.jpg",
        "menuItemsArray": [
            {
                "name": "Veggie Omelette",
                "price": "$10.99"
            },
            {
                "name": "Chicken Panini",
                "price": "$11.99"
            },
            {
                "name": "Avocado Toast",
                "price": "$12.99"
            }
        ]
    },
    {
        "name": "Urban Lounge",
        "location": "926 City Street, Highland",
        "image": "restaurant_3.jpg",
        "menuItemsArray": [
            {
                "name": "Vegan Burger",
                "price": "$13.99"
            },
            {
                "name": "Caesar Salad",
                "price": "$9.99"
            },
            {
                "name": "French Toast",
                "price": "$8.50"
            }
        ]
    },
    {
        "name": "Seaside Bar",
        "location": "174 City Street, Beachtown",
        "image": "cafe_9.jpg",
        "menuItemsArray": [
            {
                "name": "Pancakes",
                "price": "$7.99"
            },
            {
                "name": "Lobster Roll",
                "price": "$22.50"
            },
            {
                "name": "French Toast",
                "price": "$8.50"
            }
        ]
    },
    {
        "name": "Mountain Diner",
        "location": "933 Ocean Drive, Greenville",
        "image": "restaurant_8.jpg",
        "menuItemsArray": [
            {
                "name": "Grilled Salmon",
                "price": "$18.99"
            },
            {
                "name": "Chicken Panini",
                "price": "$11.99"
            },
            {
                "name": "French Toast",
                "price": "$8.50"
            }
        ]
    },
    {
        "name": "The Bar",
        "location": "143 Forest Lane, Downtown",
        "image": "restaurant_9.jpg",
        "menuItemsArray": [
            {
                "name": "Chicken Panini",
                "price": "$11.99"
            },
            {
                "name": "Caesar Salad",
                "price": "$9.99"
            },
            {
                "name": "Pancakes",
                "price": "$7.99"
            }
        ]
    },
    {
        "name": "Lakeview Caf\u00e9",
        "location": "895 City Street, Rivertown",
        "image": "diner_4.jpg",
        "menuItemsArray": [
            {
                "name": "French Toast",
                "price": "$8.50"
            },
            {
                "name": "Pancakes",
                "price": "$7.99"
            },
            {
                "name": "Chicken Panini",
                "price": "$11.99"
            }
        ]
    },
    {
        "name": "Lakeview Caf\u00e9",
        "location": "812 Forest Lane, Beachtown",
        "image": "cafe_2.jpg",
        "menuItemsArray": [
            {
                "name": "Avocado Toast",
                "price": "$12.99"
            },
            {
                "name": "Veggie Omelette",
                "price": "$10.99"
            },
            {
                "name": "French Toast",
                "price": "$8.50"
            }
        ]
    },
    {
        "name": "Urban Caf\u00e9",
        "location": "878 River Road, Beachtown",
        "image": "restaurant_3.jpg",
        "menuItemsArray": [
            {
                "name": "Lobster Roll",
                "price": "$22.50"
            },
            {
                "name": "Caesar Salad",
                "price": "$9.99"
            },
            {
                "name": "Vegan Burger",
                "price": "$13.99"
            }
        ]
    },
    {
        "name": "Urban Caf\u00e9",
        "location": "641 Ocean Drive, Greenville",
        "image": "diner_9.jpg",
        "menuItemsArray": [
            {
                "name": "Chicken Panini",
                "price": "$11.99"
            },
            {
                "name": "Caesar Salad",
                "price": "$9.99"
            },
            {
                "name": "French Toast",
                "price": "$8.50"
            }
        ]
    },
    {
        "name": "Lakeview Eatery",
        "location": "677 Cliff Avenue, Highland",
        "image": "cafe_7.jpg",
        "menuItemsArray": [
            {
                "name": "Pancakes",
                "price": "$7.99"
            },
            {
                "name": "Veggie Omelette",
                "price": "$10.99"
            },
            {
                "name": "French Toast",
                "price": "$8.50"
            }
        ]
    },
    {
        "name": "Downtown Diner",
        "location": "108 Forest Lane, Rivertown",
        "image": "cafe_2.jpg",
        "menuItemsArray": [
            {
                "name": "Lobster Roll",
                "price": "$22.50"
            },
            {
                "name": "Vegan Burger",
                "price": "$13.99"
            },
            {
                "name": "French Toast",
                "price": "$8.50"
            }
        ]
    },
    {
        "name": "Lakeview Grill",
        "location": "560 City Street, Highland",
        "image": "diner_8.jpg",
        "menuItemsArray": [
            {
                "name": "Lobster Roll",
                "price": "$22.50"
            },
            {
                "name": "Caesar Salad",
                "price": "$9.99"
            },
            {
                "name": "Grilled Salmon",
                "price": "$18.99"
            }
        ]
    },
    {
        "name": "The Eatery",
        "location": "958 Forest Lane, Lakeside",
        "image": "cafe_1.jpg",
        "menuItemsArray": [
            {
                "name": "Grilled Salmon",
                "price": "$18.99"
            },
            {
                "name": "Lobster Roll",
                "price": "$22.50"
            },
            {
                "name": "French Toast",
                "price": "$8.50"
            }
        ]
    },
    {
        "name": "Urban Lounge",
        "location": "170 City Street, Greenville",
        "image": "diner_7.jpg",
        "menuItemsArray": [
            {
                "name": "Vegan Burger",
                "price": "$13.99"
            },
            {
                "name": "Lobster Roll",
                "price": "$22.50"
            },
            {
                "name": "Chicken Panini",
                "price": "$11.99"
            }
        ]
    },
    {
        "name": "Lakeview Bar",
        "location": "569 Ocean Drive, Downtown",
        "image": "diner_2.jpg",
        "menuItemsArray": [
            {
                "name": "Pancakes",
                "price": "$7.99"
            },
            {
                "name": "Veggie Omelette",
                "price": "$10.99"
            },
            {
                "name": "Lobster Roll",
                "price": "$22.50"
            }
        ]
    },
    {
        "name": "Downtown Lounge",
        "location": "401 Cliff Avenue, Downtown",
        "image": "cafe_2.jpg",
        "menuItemsArray": [
            {
                "name": "Pancakes",
                "price": "$7.99"
            },
            {
                "name": "Veggie Omelette",
                "price": "$10.99"
            },
            {
                "name": "French Toast",
                "price": "$8.50"
            }
        ]
    },
    {
        "name": "Seaside Grill",
        "location": "598 Park Lane, Lakeside",
        "image": "diner_7.jpg",
        "menuItemsArray": [
            {
                "name": "Avocado Toast",
                "price": "$12.99"
            },
            {
                "name": "Chicken Panini",
                "price": "$11.99"
            },
            {
                "name": "Grilled Salmon",
                "price": "$18.99"
            }
        ]
    },
    {
        "name": "Mountain Grill",
        "location": "407 Cliff Avenue, Highland",
        "image": "diner_3.jpg",
        "menuItemsArray": [
            {
                "name": "Pancakes",
                "price": "$7.99"
            },
            {
                "name": "French Toast",
                "price": "$8.50"
            },
            {
                "name": "Caesar Salad",
                "price": "$9.99"
            }
        ]
    },
    {
        "name": "Garden Bar",
        "location": "496 Forest Lane, Lakeside",
        "image": "diner_3.jpg",
        "menuItemsArray": [
            {
                "name": "Avocado Toast",
                "price": "$12.99"
            },
            {
                "name": "Caesar Salad",
                "price": "$9.99"
            },
            {
                "name": "Pancakes",
                "price": "$7.99"
            }
        ]
    },
    {
        "name": "The Caf\u00e9",
        "location": "898 Forest Lane, Greenville",
        "image": "cafe_8.jpg",
        "menuItemsArray": [
            {
                "name": "Vegan Burger",
                "price": "$13.99"
            },
            {
                "name": "Grilled Salmon",
                "price": "$18.99"
            },
            {
                "name": "Pancakes",
                "price": "$7.99"
            }
        ]
    },
    {
        "name": "Downtown Grill",
        "location": "167 Forest Lane, Rivertown",
        "image": "cafe_10.jpg",
        "menuItemsArray": [
            {
                "name": "Pancakes",
                "price": "$7.99"
            },
            {
                "name": "Avocado Toast",
                "price": "$12.99"
            },
            {
                "name": "Chicken Panini",
                "price": "$11.99"
            }
        ]
    },
    {
        "name": "Seaside Grill",
        "location": "184 Park Lane, Rivertown",
        "image": "restaurant_7.jpg",
        "menuItemsArray": [
            {
                "name": "Pancakes",
                "price": "$7.99"
            },
            {
                "name": "French Toast",
                "price": "$8.50"
            },
            {
                "name": "Avocado Toast",
                "price": "$12.99"
            }
        ]
    },
    {
        "name": "Garden Diner",
        "location": "766 City Street, Beachtown",
        "image": "restaurant_5.jpg",
        "menuItemsArray": [
            {
                "name": "Avocado Toast",
                "price": "$12.99"
            },
            {
                "name": "Lobster Roll",
                "price": "$22.50"
            },
            {
                "name": "Vegan Burger",
                "price": "$13.99"
            }
        ]
    },
    {
        "name": "Seaside Bar",
        "location": "626 Park Lane, Greenville",
        "image": "cafe_6.jpg",
        "menuItemsArray": [
            {
                "name": "Grilled Salmon",
                "price": "$18.99"
            },
            {
                "name": "Vegan Burger",
                "price": "$13.99"
            },
            {
                "name": "Avocado Toast",
                "price": "$12.99"
            }
        ]
    },
    {
        "name": "The Eatery",
        "location": "437 City Street, Beachtown",
        "image": "diner_6.jpg",
        "menuItemsArray": [
            {
                "name": "Chicken Panini",
                "price": "$11.99"
            },
            {
                "name": "Lobster Roll",
                "price": "$22.50"
            },
            {
                "name": "Avocado Toast",
                "price": "$12.99"
            }
        ]
    },
    {
        "name": "Downtown Lounge",
        "location": "385 City Street, Lakeside",
        "image": "diner_9.jpg",
        "menuItemsArray": [
            {
                "name": "Veggie Omelette",
                "price": "$10.99"
            },
            {
                "name": "French Toast",
                "price": "$8.50"
            },
            {
                "name": "Caesar Salad",
                "price": "$9.99"
            }
        ]
    },
    {
        "name": "Seaside Eatery",
        "location": "469 Park Lane, Beachtown",
        "image": "cafe_1.jpg",
        "menuItemsArray": [
            {
                "name": "Lobster Roll",
                "price": "$22.50"
            },
            {
                "name": "Vegan Burger",
                "price": "$13.99"
            },
            {
                "name": "Caesar Salad",
                "price": "$9.99"
            }
        ]
    },
    {
        "name": "Garden Eatery",
        "location": "294 City Street, Rivertown",
        "image": "restaurant_4.jpg",
        "menuItemsArray": [
            {
                "name": "Veggie Omelette",
                "price": "$10.99"
            },
            {
                "name": "Avocado Toast",
                "price": "$12.99"
            },
            {
                "name": "Lobster Roll",
                "price": "$22.50"
            }
        ]
    },
    {
        "name": "Downtown Bistro",
        "location": "358 River Road, Highland",
        "image": "cafe_6.jpg",
        "menuItemsArray": [
            {
                "name": "Chicken Panini",
                "price": "$11.99"
            },
            {
                "name": "French Toast",
                "price": "$8.50"
            },
            {
                "name": "Lobster Roll",
                "price": "$22.50"
            }
        ]
    },
    {
        "name": "Mountain Diner",
        "location": "749 Forest Lane, Beachtown",
        "image": "restaurant_4.jpg",
        "menuItemsArray": [
            {
                "name": "French Toast",
                "price": "$8.50"
            },
            {
                "name": "Vegan Burger",
                "price": "$13.99"
            },
            {
                "name": "Pancakes",
                "price": "$7.99"
            }
        ]
    },
    {
        "name": "The Eatery",
        "location": "223 Ocean Drive, Highland",
        "image": "diner_9.jpg",
        "menuItemsArray": [
            {
                "name": "Veggie Omelette",
                "price": "$10.99"
            },
            {
                "name": "Pancakes",
                "price": "$7.99"
            },
            {
                "name": "Vegan Burger",
                "price": "$13.99"
            }
        ]
    },
    {
        "name": "Urban Bar",
        "location": "563 Cliff Avenue, Beachtown",
        "image": "restaurant_6.jpg",
        "menuItemsArray": [
            {
                "name": "Chicken Panini",
                "price": "$11.99"
            },
            {
                "name": "Grilled Salmon",
                "price": "$18.99"
            },
            {
                "name": "Caesar Salad",
                "price": "$9.99"
            }
        ]
    },
    {
        "name": "The Bar",
        "location": "573 Cliff Avenue, Lakeside",
        "image": "restaurant_5.jpg",
        "menuItemsArray": [
            {
                "name": "Avocado Toast",
                "price": "$12.99"
            },
            {
                "name": "Caesar Salad",
                "price": "$9.99"
            },
            {
                "name": "Lobster Roll",
                "price": "$22.50"
            }
        ]
    },
    {
        "name": "Garden Bistro",
        "location": "534 River Road, Lakeside",
        "image": "cafe_3.jpg",
        "menuItemsArray": [
            {
                "name": "Veggie Omelette",
                "price": "$10.99"
            },
            {
                "name": "Vegan Burger",
                "price": "$13.99"
            },
            {
                "name": "Pancakes",
                "price": "$7.99"
            }
        ]
    },
    {
        "name": "The Eatery",
        "location": "435 Park Lane, Rivertown",
        "image": "diner_7.jpg",
        "menuItemsArray": [
            {
                "name": "Pancakes",
                "price": "$7.99"
            },
            {
                "name": "Chicken Panini",
                "price": "$11.99"
            },
            {
                "name": "Veggie Omelette",
                "price": "$10.99"
            }
        ]
    },
    {
        "name": "Downtown Grill",
        "location": "836 Forest Lane, Highland",
        "image": "restaurant_9.jpg",
        "menuItemsArray": [
            {
                "name": "Veggie Omelette",
                "price": "$10.99"
            },
            {
                "name": "French Toast",
                "price": "$8.50"
            },
            {
                "name": "Caesar Salad",
                "price": "$9.99"
            }
        ]
    },
    {
        "name": "The Eatery",
        "location": "110 Cliff Avenue, Greenville",
        "image": "cafe_10.jpg",
        "menuItemsArray": [
            {
                "name": "Vegan Burger",
                "price": "$13.99"
            },
            {
                "name": "French Toast",
                "price": "$8.50"
            },
            {
                "name": "Chicken Panini",
                "price": "$11.99"
            }
        ]
    },
    {
        "name": "The Grill",
        "location": "705 City Street, Greenville",
        "image": "restaurant_8.jpg",
        "menuItemsArray": [
            {
                "name": "Vegan Burger",
                "price": "$13.99"
            },
            {
                "name": "French Toast",
                "price": "$8.50"
            },
            {
                "name": "Lobster Roll",
                "price": "$22.50"
            }
        ]
    },
    {
        "name": "Urban Bistro",
        "location": "257 Forest Lane, Highland",
        "image": "cafe_10.jpg",
        "menuItemsArray": [
            {
                "name": "Veggie Omelette",
                "price": "$10.99"
            },
            {
                "name": "Avocado Toast",
                "price": "$12.99"
            },
            {
                "name": "Grilled Salmon",
                "price": "$18.99"
            }
        ]
    },
    {
        "name": "The Bistro",
        "location": "374 Cliff Avenue, Downtown",
        "image": "cafe_1.jpg",
        "menuItemsArray": [
            {
                "name": "Caesar Salad",
                "price": "$9.99"
            },
            {
                "name": "Chicken Panini",
                "price": "$11.99"
            },
            {
                "name": "Grilled Salmon",
                "price": "$18.99"
            }
        ]
    },
    {
        "name": "Garden Bistro",
        "location": "556 Cliff Avenue, Downtown",
        "image": "restaurant_3.jpg",
        "menuItemsArray": [
            {
                "name": "Avocado Toast",
                "price": "$12.99"
            },
            {
                "name": "Veggie Omelette",
                "price": "$10.99"
            },
            {
                "name": "Lobster Roll",
                "price": "$22.50"
            }
        ]
    },
    {
        "name": "Urban Bistro",
        "location": "851 Park Lane, Lakeside",
        "image": "restaurant_1.jpg",
        "menuItemsArray": [
            {
                "name": "Chicken Panini",
                "price": "$11.99"
            },
            {
                "name": "Caesar Salad",
                "price": "$9.99"
            },
            {
                "name": "Grilled Salmon",
                "price": "$18.99"
            }
        ]
    },
    {
        "name": "Seaside Lounge",
        "location": "295 River Road, Greenville",
        "image": "cafe_8.jpg",
        "menuItemsArray": [
            {
                "name": "Vegan Burger",
                "price": "$13.99"
            },
            {
                "name": "Veggie Omelette",
                "price": "$10.99"
            },
            {
                "name": "Pancakes",
                "price": "$7.99"
            }
        ]
    },
    {
        "name": "Garden Caf\u00e9",
        "location": "499 City Street, Greenville",
        "image": "restaurant_7.jpg",
        "menuItemsArray": [
            {
                "name": "Lobster Roll",
                "price": "$22.50"
            },
            {
                "name": "Grilled Salmon",
                "price": "$18.99"
            },
            {
                "name": "Veggie Omelette",
                "price": "$10.99"
            }
        ]
    },
    {
        "name": "Urban Caf\u00e9",
        "location": "397 City Street, Lakeside",
        "image": "cafe_3.jpg",
        "menuItemsArray": [
            {
                "name": "Pancakes",
                "price": "$7.99"
            },
            {
                "name": "Vegan Burger",
                "price": "$13.99"
            },
            {
                "name": "Lobster Roll",
                "price": "$22.50"
            }
        ]
    },
    {
        "name": "The Grill",
        "location": "525 Cliff Avenue, Highland",
        "image": "cafe_2.jpg",
        "menuItemsArray": [
            {
                "name": "French Toast",
                "price": "$8.50"
            },
            {
                "name": "Caesar Salad",
                "price": "$9.99"
            },
            {
                "name": "Grilled Salmon",
                "price": "$18.99"
            }
        ]
    },
    {
        "name": "Urban Bistro",
        "location": "698 Ocean Drive, Rivertown",
        "image": "diner_9.jpg",
        "menuItemsArray": [
            {
                "name": "Pancakes",
                "price": "$7.99"
            },
            {
                "name": "Vegan Burger",
                "price": "$13.99"
            },
            {
                "name": "Avocado Toast",
                "price": "$12.99"
            }
        ]
    },
    {
        "name": "Downtown Lounge",
        "location": "292 Forest Lane, Highland",
        "image": "diner_1.jpg",
        "menuItemsArray": [
            {
                "name": "Caesar Salad",
                "price": "$9.99"
            },
            {
                "name": "Veggie Omelette",
                "price": "$10.99"
            },
            {
                "name": "Grilled Salmon",
                "price": "$18.99"
            }
        ]
    },
    {
        "name": "Urban Diner",
        "location": "888 Forest Lane, Lakeside",
        "image": "diner_4.jpg",
        "menuItemsArray": [
            {
                "name": "French Toast",
                "price": "$8.50"
            },
            {
                "name": "Pancakes",
                "price": "$7.99"
            },
            {
                "name": "Veggie Omelette",
                "price": "$10.99"
            }
        ]
    },
    {
        "name": "Mountain Diner",
        "location": "786 River Road, Highland",
        "image": "restaurant_3.jpg",
        "menuItemsArray": [
            {
                "name": "Caesar Salad",
                "price": "$9.99"
            },
            {
                "name": "Grilled Salmon",
                "price": "$18.99"
            },
            {
                "name": "Chicken Panini",
                "price": "$11.99"
            }
        ]
    },
    {
        "name": "Lakeview Diner",
        "location": "652 Park Lane, Greenville",
        "image": "restaurant_2.jpg",
        "menuItemsArray": [
            {
                "name": "Chicken Panini",
                "price": "$11.99"
            },
            {
                "name": "Veggie Omelette",
                "price": "$10.99"
            },
            {
                "name": "Vegan Burger",
                "price": "$13.99"
            }
        ]
    },
    {
        "name": "The Bar",
        "location": "995 City Street, Lakeside",
        "image": "cafe_7.jpg",
        "menuItemsArray": [
            {
                "name": "Chicken Panini",
                "price": "$11.99"
            },
            {
                "name": "French Toast",
                "price": "$8.50"
            },
            {
                "name": "Grilled Salmon",
                "price": "$18.99"
            }
        ]
    },
    {
        "name": "Downtown Eatery",
        "location": "671 Ocean Drive, Lakeside",
        "image": "diner_5.jpg",
        "menuItemsArray": [
            {
                "name": "Vegan Burger",
                "price": "$13.99"
            },
            {
                "name": "Avocado Toast",
                "price": "$12.99"
            },
            {
                "name": "French Toast",
                "price": "$8.50"
            }
        ]
    },
    {
        "name": "Mountain Bistro",
        "location": "879 Park Lane, Lakeside",
        "image": "cafe_9.jpg",
        "menuItemsArray": [
            {
                "name": "French Toast",
                "price": "$8.50"
            },
            {
                "name": "Chicken Panini",
                "price": "$11.99"
            },
            {
                "name": "Vegan Burger",
                "price": "$13.99"
            }
        ]
    },
    {
        "name": "The Bistro",
        "location": "344 City Street, Rivertown",
        "image": "restaurant_3.jpg",
        "menuItemsArray": [
            {
                "name": "Vegan Burger",
                "price": "$13.99"
            },
            {
                "name": "Avocado Toast",
                "price": "$12.99"
            },
            {
                "name": "Chicken Panini",
                "price": "$11.99"
            }
        ]
    },
    {
        "name": "Downtown Diner",
        "location": "108 Forest Lane, Highland",
        "image": "diner_6.jpg",
        "menuItemsArray": [
            {
                "name": "Caesar Salad",
                "price": "$9.99"
            },
            {
                "name": "Grilled Salmon",
                "price": "$18.99"
            },
            {
                "name": "Veggie Omelette",
                "price": "$10.99"
            }
        ]
    },
    {
        "name": "The Caf\u00e9",
        "location": "319 Park Lane, Greenville",
        "image": "diner_8.jpg",
        "menuItemsArray": [
            {
                "name": "Chicken Panini",
                "price": "$11.99"
            },
            {
                "name": "Avocado Toast",
                "price": "$12.99"
            },
            {
                "name": "Grilled Salmon",
                "price": "$18.99"
            }
        ]
    },
    {
        "name": "The Eatery",
        "location": "140 City Street, Rivertown",
        "image": "restaurant_3.jpg",
        "menuItemsArray": [
            {
                "name": "Veggie Omelette",
                "price": "$10.99"
            },
            {
                "name": "Caesar Salad",
                "price": "$9.99"
            },
            {
                "name": "Pancakes",
                "price": "$7.99"
            }
        ]
    },
    {
        "name": "Garden Lounge",
        "location": "388 Ocean Drive, Highland",
        "image": "cafe_8.jpg",
        "menuItemsArray": [
            {
                "name": "Vegan Burger",
                "price": "$13.99"
            },
            {
                "name": "Chicken Panini",
                "price": "$11.99"
            },
            {
                "name": "Grilled Salmon",
                "price": "$18.99"
            }
        ]
    },
    {
        "name": "Seaside Diner",
        "location": "990 Ocean Drive, Beachtown",
        "image": "diner_6.jpg",
        "menuItemsArray": [
            {
                "name": "Avocado Toast",
                "price": "$12.99"
            },
            {
                "name": "Veggie Omelette",
                "price": "$10.99"
            },
            {
                "name": "Grilled Salmon",
                "price": "$18.99"
            }
        ]
    },
    {
        "name": "Mountain Grill",
        "location": "900 Ocean Drive, Lakeside",
        "image": "cafe_9.jpg",
        "menuItemsArray": [
            {
                "name": "Avocado Toast",
                "price": "$12.99"
            },
            {
                "name": "Chicken Panini",
                "price": "$11.99"
            },
            {
                "name": "Grilled Salmon",
                "price": "$18.99"
            }
        ]
    },
    {
        "name": "The Grill",
        "location": "467 City Street, Rivertown",
        "image": "cafe_8.jpg",
        "menuItemsArray": [
            {
                "name": "Vegan Burger",
                "price": "$13.99"
            },
            {
                "name": "Caesar Salad",
                "price": "$9.99"
            },
            {
                "name": "Avocado Toast",
                "price": "$12.99"
            }
        ]
    },
    {
        "name": "Lakeview Eatery",
        "location": "837 City Street, Rivertown",
        "image": "cafe_5.jpg",
        "menuItemsArray": [
            {
                "name": "Veggie Omelette",
                "price": "$10.99"
            },
            {
                "name": "Caesar Salad",
                "price": "$9.99"
            },
            {
                "name": "Vegan Burger",
                "price": "$13.99"
            }
        ]
    },
    {
        "name": "Garden Bar",
        "location": "857 Cliff Avenue, Lakeside",
        "image": "diner_7.jpg",
        "menuItemsArray": [
            {
                "name": "Caesar Salad",
                "price": "$9.99"
            },
            {
                "name": "French Toast",
                "price": "$8.50"
            },
            {
                "name": "Veggie Omelette",
                "price": "$10.99"
            }
        ]
    },
    {
        "name": "The Caf\u00e9",
        "location": "727 Cliff Avenue, Beachtown",
        "image": "cafe_8.jpg",
        "menuItemsArray": [
            {
                "name": "French Toast",
                "price": "$8.50"
            },
            {
                "name": "Avocado Toast",
                "price": "$12.99"
            },
            {
                "name": "Chicken Panini",
                "price": "$11.99"
            }
        ]
    },
    {
        "name": "Mountain Caf\u00e9",
        "location": "412 River Road, Greenville",
        "image": "diner_4.jpg",
        "menuItemsArray": [
            {
                "name": "Lobster Roll",
                "price": "$22.50"
            },
            {
                "name": "Veggie Omelette",
                "price": "$10.99"
            },
            {
                "name": "French Toast",
                "price": "$8.50"
            }
        ]
    },
    {
        "name": "Downtown Eatery",
        "location": "677 Forest Lane, Greenville",
        "image": "diner_5.jpg",
        "menuItemsArray": [
            {
                "name": "French Toast",
                "price": "$8.50"
            },
            {
                "name": "Vegan Burger",
                "price": "$13.99"
            },
            {
                "name": "Avocado Toast",
                "price": "$12.99"
            }
        ]
    },
    {
        "name": "Garden Bistro",
        "location": "601 Park Lane, Highland",
        "image": "cafe_3.jpg",
        "menuItemsArray": [
            {
                "name": "Caesar Salad",
                "price": "$9.99"
            },
            {
                "name": "French Toast",
                "price": "$8.50"
            },
            {
                "name": "Pancakes",
                "price": "$7.99"
            }
        ]
    },
    {
        "name": "The Diner",
        "location": "454 River Road, Lakeside",
        "image": "restaurant_3.jpg",
        "menuItemsArray": [
            {
                "name": "Vegan Burger",
                "price": "$13.99"
            },
            {
                "name": "Avocado Toast",
                "price": "$12.99"
            },
            {
                "name": "Veggie Omelette",
                "price": "$10.99"
            }
        ]
    },
    {
        "name": "Lakeview Diner",
        "location": "272 Ocean Drive, Highland",
        "image": "diner_8.jpg",
        "menuItemsArray": [
            {
                "name": "French Toast",
                "price": "$8.50"
            },
            {
                "name": "Caesar Salad",
                "price": "$9.99"
            },
            {
                "name": "Pancakes",
                "price": "$7.99"
            }
        ]
    },
    {
        "name": "Mountain Eatery",
        "location": "151 Ocean Drive, Downtown",
        "image": "diner_8.jpg",
        "menuItemsArray": [
            {
                "name": "Chicken Panini",
                "price": "$11.99"
            },
            {
                "name": "Caesar Salad",
                "price": "$9.99"
            },
            {
                "name": "French Toast",
                "price": "$8.50"
            }
        ]
    },
    {
        "name": "Mountain Eatery",
        "location": "216 City Street, Downtown",
        "image": "diner_9.jpg",
        "menuItemsArray": [
            {
                "name": "Caesar Salad",
                "price": "$9.99"
            },
            {
                "name": "Pancakes",
                "price": "$7.99"
            },
            {
                "name": "Grilled Salmon",
                "price": "$18.99"
            }
        ]
    },
    {
        "name": "Urban Caf\u00e9",
        "location": "854 River Road, Beachtown",
        "image": "cafe_3.jpg",
        "menuItemsArray": [
            {
                "name": "Chicken Panini",
                "price": "$11.99"
            },
            {
                "name": "Grilled Salmon",
                "price": "$18.99"
            },
            {
                "name": "Pancakes",
                "price": "$7.99"
            }
        ]
    },
    {
        "name": "The Bistro",
        "location": "649 Forest Lane, Rivertown",
        "image": "diner_1.jpg",
        "menuItemsArray": [
            {
                "name": "Veggie Omelette",
                "price": "$10.99"
            },
            {
                "name": "Grilled Salmon",
                "price": "$18.99"
            },
            {
                "name": "Chicken Panini",
                "price": "$11.99"
            }
        ]
    },
    {
        "name": "Garden Bar",
        "location": "830 City Street, Greenville",
        "image": "restaurant_10.jpg",
        "menuItemsArray": [
            {
                "name": "Veggie Omelette",
                "price": "$10.99"
            },
            {
                "name": "Avocado Toast",
                "price": "$12.99"
            },
            {
                "name": "French Toast",
                "price": "$8.50"
            }
        ]
    },
    {
        "name": "The Caf\u00e9",
        "location": "484 Park Lane, Downtown",
        "image": "cafe_7.jpg",
        "menuItemsArray": [
            {
                "name": "French Toast",
                "price": "$8.50"
            },
            {
                "name": "Vegan Burger",
                "price": "$13.99"
            },
            {
                "name": "Pancakes",
                "price": "$7.99"
            }
        ]
    },
    {
        "name": "Downtown Eatery",
        "location": "959 Cliff Avenue, Rivertown",
        "image": "restaurant_4.jpg",
        "menuItemsArray": [
            {
                "name": "Vegan Burger",
                "price": "$13.99"
            },
            {
                "name": "Avocado Toast",
                "price": "$12.99"
            },
            {
                "name": "Chicken Panini",
                "price": "$11.99"
            }
        ]
    },
    {
        "name": "Mountain Eatery",
        "location": "998 Ocean Drive, Beachtown",
        "image": "restaurant_6.jpg",
        "menuItemsArray": [
            {
                "name": "Avocado Toast",
                "price": "$12.99"
            },
            {
                "name": "Chicken Panini",
                "price": "$11.99"
            },
            {
                "name": "Lobster Roll",
                "price": "$22.50"
            }
        ]
    },
    {
        "name": "Garden Eatery",
        "location": "716 Forest Lane, Lakeside",
        "image": "restaurant_9.jpg",
        "menuItemsArray": [
            {
                "name": "Chicken Panini",
                "price": "$11.99"
            },
            {
                "name": "French Toast",
                "price": "$8.50"
            },
            {
                "name": "Pancakes",
                "price": "$7.99"
            }
        ]
    },
    {
        "name": "Garden Bistro",
        "location": "576 Park Lane, Greenville",
        "image": "diner_10.jpg",
        "menuItemsArray": [
            {
                "name": "Grilled Salmon",
                "price": "$18.99"
            },
            {
                "name": "Caesar Salad",
                "price": "$9.99"
            },
            {
                "name": "Avocado Toast",
                "price": "$12.99"
            }
        ]
    }
]
