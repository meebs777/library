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

function addButtonHandler() {
    const dialog = document.querySelector("dialog");
    const showButton = document.querySelector("dialog + button");
    const closeButton = document.querySelector("dialog button");

    // "Show the dialog" button opens the dialog modally
    showButton.addEventListener("click", () => {
        dialog.showModal();
    });

    // "Close" button closes the dialog and updates page with book
    closeButton.addEventListener("click", () => {
        const read = (document.getElementById("read").checked)? "Read":"Unread";
        addBookToLibrary( document.getElementById("title").value,
        document.getElementById("author").value,
        document.getElementById("pages").value,
        read
        )
        bookDisplay();
        dialog.close();
    });
}



 bookDisplay();

 addButtonHandler();