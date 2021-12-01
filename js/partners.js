const renderItems = (data) => {
    console.log(data, data[0].name);
}

fetch('https://test-2659f-default-rtdb.firebaseio.com/db/partners.json')
    .then((response) => response.json())
    .then((data)=> { 
        renderItems(data);
    })
    .catch((error) => {
        console.log(error)
    })
    


