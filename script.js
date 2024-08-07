const myLibrary = [];

function Book(title,author,pages,read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    

    
}

function addBookToLibrary(title,author,pages,read) {

    const newBook = new Book(title,author,pages,read);
    myLibrary.push(newBook);
}

function bookDisplay(){
    myLibrary.forEach((book) => {
        const parentDiv = document.querySelector(".content")
        const div = document.createElement("div");
        div.classList.add("card");
        parentDiv.appendChild(div);
        displayObjectItems(book,div);
        
    })
}

function displayObjectItems(book,content) {
    const div = document.createElement("div");
    content.appendChild(div);
    for (let key in book){
        const p = document.createElement("p");
        p.textContent = book[key];
        div.appendChild(p);
    }
}

 addBookToLibrary("Title","Author","Pages","Read");

 addBookToLibrary("Title","Author","Pages","Read");

 bookDisplay();