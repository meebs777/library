const myLibrary = [];
const div = document.createElement("div");
let libraryIndex = -1;

function Book(title,author,pages,read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title,author,pages,read) {

    const newBook = new Book(title,author,pages,read);
    myLibrary.push(newBook);
    libraryIndex++;
}

/*
function bookDisplay(){
    myLibrary.forEach((book) => {
        const parentDiv = document.querySelector(".content")
        const div = document.createElement("div");
        div.classList.add("card");
        parentDiv.appendChild(div);
        displayObjectItems(book,div);
        
    })
} 
*/

function displayObjectItems(book,content) {
    //Create main content div and div for card and append it to page
    const parentDiv = document.querySelector(".content")
    const div = document.createElement("div");
    div.classList.add("card");
    parentDiv.appendChild(div);
    const div1 = document.createElement("div");
    div.setAttribute("data-index",libraryIndex)
    content.appendChild(div1);
    //Update card with elements in object
    for (let key in book){
        const p = document.createElement("p");
        p.textContent = book[key];
        div.appendChild(p);
    }
    //Add a delete Button with creation of card
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Remove Book"
    deleteButton.setAttribute("type","button");
    deleteButton.classList.add("remove");
    div.appendChild(deleteButton);
    removeBookFromLibray(deleteButton,div);

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
        displayObjectItems(myLibrary[libraryIndex],div);
        dialog.close();
    });
}

function removeBookFromLibray(deleteButton,card) {
    
    
        deleteButton.addEventListener("click", () => {
            //Shifts data index appropriately after deleting the element on the DOM
            const cards = document.querySelectorAll(".card");
            cards.forEach((current) => {
                if (current.dataset.index > card.dataset.index) {
                    current.dataset.index--;
                }
            })
            card.remove();
        }
    );
}



 //bookDisplay();


 addButtonHandler();

 