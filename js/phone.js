const loadPhone = async (searchText) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const phones = data.data;
    // console.log(phones);
    displayPhone(phones);
}

const displayPhone = phones => {
    console.log(phones);

    // 1. 
    const phoneContainer = document.getElementById("phone-container");
    // clear phone container cards before adding new cards
    phoneContainer.textContent = "";

    // display show all button if there are more  
    const showAllContainer = document.getElementById("show-all-container");
    if(phones.length > 12){
        showAllContainer.classList.remove("hidden");
    }
    else{
        showAllContainer.classList.add("hidden");
    }

    // display only first 12 phones
    phones = phones.slice(0,12);

    phones.forEach(phone => {
        // console.log(phone);
        // 2. create a div
        const phoneCard = document.createElement("div");
        phoneCard.classList = `card w-auto bg-base-100 shadow-xl`;
        // 3. set inner html
        phoneCard.innerHTML = `
        <figure class="px-10 pt-10">
        <img src="${phone.image}" alt="phones"
            class="rounded-xl p-6" />
        </figure>
        <div class="card-body items-center text-center">
            <h2 class="card-title text-[25px] text-[#403F3F] font-bold">${phone.phone_name}</h2>
            <p class="mt-2 mb-2 text-[#706F6F] text-[18px]">${phone.slug}</p>
            <p class="text-[25px] text-[#403F3F] font-bold mb-4">$999</p>
            <div class="card-actions mb-6">
                <button class="btn btn-accent px-8 text-xl font-medium">Show Details</button>
            </div>
        </div>
        `;
        // 4. append child
        phoneContainer.appendChild(phoneCard);
    });
    // hide loading spinner
    toggleLoadingSpinner(false);
}

// handle search button
const handleSearch = () => {
    toggleLoadingSpinner(true);
    const searchField = document.getElementById("search-field");
    const searchText = searchField.value;
    console.log(searchText);
    loadPhone(searchText);
}

const toggleLoadingSpinner = (isLoading) => {
    const loadingSpinner = document.getElementById("loading-spinner");
    if(isLoading){
        loadingSpinner.classList.remove("hidden")
    }
    else{
        loadingSpinner.classList.add("hidden");
    }
}

// loadPhone();

