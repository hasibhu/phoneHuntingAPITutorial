
const phoneLoad = async() => {
    const res = await fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
    const data = await res.json();
    const phones = data.data;
    console.log(phones);
    displayPhones(phones);

}

const displayPhones = phones => {
    const phoneContainer = document.getElementById('phone-container');

    phones.forEach(phone => {
        // console.log(phone);
        const phoneCard = document.createElement('div');
        phoneCard.classList = 'card w-80 bg-gray-200 shadow-xl';

        phoneCard.innerHTML = `
            <figure><img src="${phone.image}" alt="Phones" /></figure>

            <div class="card-body">
                <h2 class="card-title">Barnd: ${phone.brand}</h2>
                <h2 class="card-title">Model: ${phone.phone_name}</h2>
                <p>Your Next Phone</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary">Buy Now</button>
                </div>
            </div>

        `
        phoneContainer.appendChild(phoneCard);
    });
}
























phoneLoad();