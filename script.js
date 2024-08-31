
fetch('http://localhost:3000/products')
    .then(res => {
        return res.json();
    })
    .then(data => {

        const container = document.getElementById('container');

        data.forEach(element => {
            const cart = document.createElement('div');
            cart.className = 'col-md-4 thumbnail border';
            
            const imgElement = document.createElement('img');
            imgElement.src = element.img;
            imgElement.className = 'img-rounded';
            imgElement.width = 200;
            imgElement.height = 200;

            const nameElement = document.createElement('h3');
            nameElement.innerText = element.name;

            const priceElement = document.createElement('h1');
            priceElement.innerText = element.price;
            priceElement.className = 'font-weight-bold';

            cart.appendChild(imgElement);
            cart.appendChild(nameElement);
            cart.appendChild(priceElement);
            container.appendChild(cart);
        });
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    })


document.getElementById('req-cart').addEventListener('click', () => {
    const img = document.getElementById('img').value;
    const name = document.getElementById('name').value;
    const price = document.getElementById('price').value;

    
    const data = {
        img: img,
        name: name,
        price: price
    }    

    fetch('http://localhost:3000/products', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
        
    })
    .then(res => {
        if (!res.ok) {
            console.log('Errot fetch post responce !');
        }
        return res.json();
    })
    .then(data => {
        const container = document.getElementById('container');

        data.forEach(element => {
            const cart = document.createElement('div');
            cart.className = 'col-md-4 thumbnail border';
            
            const imgElement = document.createElement('img');
            imgElement.src = element.img;
            imgElement.className = 'img-rounded';
            imgElement.width = 200;
            imgElement.height = 200;

            const nameElement = document.createElement('h3');
            nameElement.innerText = element.name;

            const priceElement = document.createElement('h1');
            priceElement.innerText = element.price;
            priceElement.className = 'font-weight-bold';

            cart.appendChild(imgElement);
            cart.appendChild(nameElement);
            cart.appendChild(priceElement);
            container.appendChild(cart);
        });
    })
    .catch(error => {
        console.log('fetch post !!!!!!', error);
        
    });
});