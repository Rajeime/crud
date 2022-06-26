var faker = require('faker');

var database = { products: [] , menu:[] };
for (var i = 1; i <= 50; i++) {
    database.products.push({
        id: i,
        name: faker.commerce.productName(),
        description: faker.lorem.sentences(),
        price: faker.commerce.price(),
        imageUrl: "https://source.unsplash.com/1600x900/?food=" + Math.floor(Math.random() * 1000),
        quantity: faker.datatype.number()
    })
}

for (var i = 1; i <= 20; i++) {
    database.menu.push({
        id: i,
        menu_name: faker.commerce.productName(),
        menu_description: faker.lorem.sentences(),
        menu_size:  faker.datatype.number(),
        imageUrl: "https://source.unsplash.com/1600x900/?food=" + Math.floor(Math.random() * 1000),
        cost: faker.commerce.price(),
    })
}



console.log(JSON.stringify(database)); //db variable from line 3