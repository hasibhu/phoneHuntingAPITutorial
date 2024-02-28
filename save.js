

function loadPhone() {
    fetch("https://openapi.programming-hero.com/api/phones?search=iphone")
    .then(res => res.json())
    .then(phones => displayPhones(phones.data))
}


// for (const phone of phones)

const displayPhones = phones => {
    //Step 1:  get phone-container
    const phoneContainer = document.getElementById('phone-container');
    phones.forEach(phone => {
        console.log(phone);
        // step 2: create a div
        const phoneCard = document.createElement('div');
        // step 3: add class list into the phonecard div
        phoneCard.classList = `card bg-gray-200 p-4 shadow-xl`;
        // step 4: add innnerHTML element
        phoneCard.innerHTML = `
        <figure><img src="${phone.image}" alt="Shoes" /></figure>
                <div class="card-body">
                <h2 class="card-title">${phone.phone_name}</h2>
                <p >Your Dream Phone</p>
                <div class=" card-actions justify-end">
                        <button class="btn btn-primary">Buy Now</button>
                </div>
                </div>`;
        // step 5: append child
        phoneContainer.appendChild(phoneCard)
    });
}





