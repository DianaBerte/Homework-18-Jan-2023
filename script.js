const getAllProducts = async (endpoint = "books") => {
    try {
    let res = await fetch("https://striveschool-api.herokuapp.com/" + endpoint)
    let books = await res.json()
    // console.log(books)
    renderBooks(books)
    } catch(err) {
        console.log(err)
    }
    
}
getAllProducts()

const renderBooks = function (books) {
    // let containerDiv = document.querySelector(".container")
    let rowDiv = document.querySelector(".row")
    let arrayOfBooks = books.map((singleBook) => {
        return ` 
        <div class="col-6 d-flex col-lg-3 col-md-4 mt-5 mb-5">
        <div class="card">
            <img src="${singleBook.img}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${singleBook.title}</h5>
            <button onclick="addToCart()" type="button" class="btn btn-dark">Add to Cart</button>
            <button onclick="hideBook()" type="button" class="btn btn-dark">Skip</button>
            </div>
        </div>
    </div>
    `
    }).join("")
    rowDiv.innerHTML = arrayOfBooks
}

const hideBook = function() {

    let cardNode = document.querySelector(".card");
    // for (let i=0; i < cards.length; i++ ){
    //     let cardNode = cards[i]
    // }
    
    if (cardNode.style.display === "none") {
        cardNode.style.display = "block";
    } else {
        cardNode.style.display = "none"
    }
}



// const hideBook = function() {
//     let cardNode = document.querySelector(".card");
//     cardNode.style.display = "none"
// }

// const buttonNode = document.getElementById("skipBtn");
// buttonNode.addEventListener("click", hideBook())



const addToCart = function(btn){
    let cart = document.querySelector("section");
    cart = "";
    let cardNode = btn.closest("card");
    cart.innerHTML += cardNode;
    // cart.style.backgroundColor = "red"
}

const handleSearch = async (keyEvent) => {
    keyEvent.preventDefault();
    const {key, target} = keyEvent;
    // console.log(keyEvent.target.value);
    if(key === "Enter") {
        await renderBooks(target.value)
    }
}

// let searchQuery;

// const handleSearchQuery = (e) => {
//     searchQuery = e.target.value.toLowerCase();
// };