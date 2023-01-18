const getAllProducts = async (endpoint = "books") => {
    let res = await fetch("https://striveschool-api.herokuapp.com/" + endpoint)
    let books = await res.json()
    // console.log(books)
    renderBooks(books)
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
            <button type="button" class="btn btn-dark">Add to Cart</button>
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
    if (cardNode.style.display === "none") {
        cardNode.style.display = "block";
    } else {
        cardNode.style.display = "none"
    }
}