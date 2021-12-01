const restaurant = "food-band"; 

const renderItems = (data) => {
    console.log(data, data[0].name);
}

fetch(`./db/${restaurant}.json`)// ``здесь использовали иной тип ковычек, чем в файле partners.js потому, что в этих кавычках можем использовать javascript выражения
    .then((response) => response.json())
    .then((data)=> { 
        renderItems(data);
    })
    .catch((error) => {
        console.log(error)
    })