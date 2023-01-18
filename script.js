const getAllProducts = async (endpoint = "books") => {
    let res = await fetch("https://striveschool-api.herokuapp.com/" + endpoint)
    let books = await res.json()
    console.log(books)
}
getAllProducts()