let lib = [];


//constructor for new book
function Book(title, author, numPages, read) {
	this.title = title,
	this.author = author,
	this.numPages = numPages,
	this.read = read
}

//adds book to lib and displays on page
function addBook() {
	let newTitle = document.querySelector("#title").value;
	let newAuthor = document.querySelector("#author").value;
	let newPages = document.querySelector("#pages").value;
	
//Task 2. this needs to test if check box is checked and set classread status appropriately 
	let newRead = document.querySelector("#read").value;
	
	lib.push(new Book(newTitle, newAuthor, newPages, newRead));
		
	closeBox();
	render();
}



function render() {	
	//remove all children of parent node wrapper
	const wrapper = document.querySelector('.lib-wrapper');
	const wrapperLength = wrapper.children.length;
		for (let i = wrapperLength - 1; i >=0; i--) {
		wrapper.removeChild(wrapper.children[i]);
	}
	

	//renders each book to DOM
	lib.forEach((book, index) => {

	const item = document.createElement('p');
	item.classList.add('card-wrapper');
	item.setAttribute('ind', index);

	const bookTitle = document.createElement('h1');
	bookTitle.classList.add('card-title');
	bookTitle.textContent = book.title;

	const bookAuthor = document.createElement('h2');
	bookAuthor.classList.add('card-author');
	bookAuthor.textContent = book.author;

	const bookPages = document.createElement('h3');
	bookPages.classList.add('card-pages');
	bookPages.textContent = `Pages: `+ `${book.numPages}`;

	const bookButton = document.createElement('div')
	bookButton.classList.add('card-button')
	const bookRead = document.createElement('p');
	bookRead.classList.add('card-read-status');
	
	if (book.read === true) {
		bookRead.classList.add('read');
		bookRead.textContent = "Read";
	}	else {
		bookRead.classList.add('unread');	
	  	bookRead.textContent = "unread";
	  }

	wrapper.appendChild(item);
	item.appendChild(bookTitle);
	item.appendChild(bookAuthor);
	item.appendChild(bookPages);
	item.appendChild(bookButton);
	bookButton.appendChild(bookRead);	
 })
}

//DOM Event Functions
function addClick() {
	const mod = document.querySelector('.modal_box');
	mod.style.display = "flex";
}

function closeBox() {
	const mod = document.querySelector('.modal_box');
	mod.style.display = "none";
}

// Task 1. Create a remove button
// Task 3.  Use number from index class on each book item and remove it from the DOM and library list


ex1 = new Book("Astrophysics for People in a Hurry", "Neil DeGrasse Tyson", 208, true);
ex2 = new Book("The DaVinci Code", "Dan Brown", 597, true);
ex3 = new Book("Head First JavaScript", "Michael Morrison", 598, false);
lib.push(ex1,ex2,ex3);






