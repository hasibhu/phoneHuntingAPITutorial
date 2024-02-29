
// && element !== null
/** first code for loading only iphone on he screen
    const loadPhone = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/phones?search=iphone'); 
    const covertResToJson = await res.json();
    const phones = covertResToJson.data;
    // console.log(phones);
    displayPhones(phones);
    }
 * **/

const loadPhone = async(searchText) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`); 

    const covertResToJson = await res.json();
    const phones = covertResToJson.data;

    displayPhones(phones);
}


const displayPhones = phones => {
    const phoneContainer = document.getElementById('phone-container');

    // remove already available search output
    phoneContainer.textContent = '';

    //display show all button if there are more than 12 phones
    const element = document.getElementById('hasib');
    console.log(element);
    if (phones.length > 12) {
        element.classList.remove('hidden');
    }
    else {
        button.classList.add('hidden');
    }
    // show only 3 phones after searching
    phones = phones.slice(0, 12);

    phones.forEach(phone => {  
        const phoneCard = document.createElement('div');
        phoneCard.classList = `card bg-gray-200 p-4 shadow-xl`;
        phoneCard.innerHTML = `
            <figure><img src="${phone.image}" alt="Shoes" /></figure>
            <div class="card-body">
                <h1 class="text-2xl font-bold">Brand: ${phone.brand}</h1>
                <h2 class="card-title">Model: ${phone.phone_name}</h2>
                <p >Your Dream Phone is ${phone.phone_name}</p>
                <div class=" card-actions justify-end">
                    <button class="btn btn-primary">Buy Now</button>
                </div>
            </div>`;
        // step 5: append child
        phoneContainer.appendChild(phoneCard);
    });

    // hide loading spinner
    toggleLoadingSpinner(false);
}



// Handle search button

const handleSearch = () => {
    toggleLoadingSpinner(true);

    const searchField = document.getElementById('searchField');
    const searchText = searchField.value;
    // console.log(searchText);
    loadPhone(searchText);
};

const toggleLoadingSpinner = (isLoading) => {
    const loadingSpinner = document.getElementById('loadingSpinner');
    if (isLoading) {
        loadingSpinner.classList.remove('hidden');
    } else {
        loadingSpinner.classList.add('hidden');
    }
}



// show all code: watch video number : 34-6

// const handleShowAll = () => {
    
// }






// loadPhone(); // initial call 