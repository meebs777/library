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

    //Add a wrapper for both delete and status button
    const buttonWrapper = document.createElement("div");
    buttonWrapper.classList.add("button-wrapper");
    div.appendChild(buttonWrapper);

    //Create a read and unread status button
    const statusButton = document.createElement("button");
    statusButton.setAttribute("type","button");
    statusButton.classList.add("read-status");

    //Determine what to place on read status button
    (myLibrary[libraryIndex].read === "Read")? statusButton.textContent = "Read": statusButton.textContent = "Unread";

    buttonWrapper.appendChild(statusButton);
    buttonWrapper.appendChild(deleteButton);

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
            //Remove the appropriate index in the library using the data attribute
            myLibrary.splice(card.dataset.index,1);
            libraryIndex--;
            card.remove();
            
        }
    );
}




 addButtonHandler();

 