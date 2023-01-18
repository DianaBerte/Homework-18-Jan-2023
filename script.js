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
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <button type="button" class="btn btn-dark">Add to Cart</button>
            <button type="button" class="btn btn-dark">Skip</button>
            </div>
        </div>
    </div>
    `
    }).join("")
    rowDiv.innerHTML = arrayOfBooks
}
