
const phoneLoad = async (searchText) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
    const data = await res.json();
    const phones = data.data;
    console.log(phones);
    displayPhones(phones);

}

const displayPhones = phones => {
    const phoneContainer = document.getElementById('phone-container');
    phoneContainer.textContent = ''; //will remove previously appeared result.

    phoneLength = phones.length;
    console.log(`hhh ${phoneLength}`);
    const showAllButton = document.getElementById('hasib');
    if (phoneLength > 5) {
        showAllButton.classList.remove('hidden');
    }




    phones = phones.slice(0, 5);
    phones.forEach(phone => {
        // console.log(phone);
        const phoneCard = document.createElement('div');
        phoneCard.classList = 'card  bg-gray-200 shadow-xl';
        phoneCard.innerHTML = `
            <figure><img src="${phone.image}" alt="Phones" /></figure>

            <div class="card-body">
                <h2 class="card-title">Brand: ${phone.brand}</h2>
                <h2 class="card-title">Model: ${phone.phone_name}</h2>
                <p>Your Next Phone</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary">Buy Now</button>
                </div>
            </div>
        `;
        phoneContainer.appendChild(phoneCard);
    });
    toggleLoadingSpinner(false);
}



// Handle search button

const handleSearch = () => {
    toggleLoadingSpinner(true);
    const searchField = document.getElementById('searchField');
    const searchText = searchField.value;
    phoneLoad(searchText);
}


toggleLoadingSpinner = (g) => {
    const loadingSpinner = document.getElementById('loadingSpinner');

    if (g) { //this is truthy, then this part becomes. 
        loadingSpinner.classList.remove('hidden')
    }
     else {
       loadingSpinner.classList.add('hidden')
    }
}






//phoneLoad(); //if we put here any parameter, like a or iphone, it will show the related results on html