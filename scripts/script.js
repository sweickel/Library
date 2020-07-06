let lib = [];




//constructor for new book
function Book(title, author, numPages, read) {
	this.title = title,
	this.author = author,
	this.numPages = numPages,
	this.read = read
}




//adds book to lib and displays on page
function addBook(title, author, pages, read) {
	
	//1. take user input and store in lib
	lib.push(new Book(title, author, pages, read));
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
	lib.forEach((book) => {
	const item = document.createElement('p');
	item.classList.add('card-wrapper');

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

//Event Listeners
function addClick() {
	const mod = document.getElementById('modal_box');
	mod.style.zIndex = 10;
	mod.style.display = "flex";
}

function closeBox() {
	const mod = document.getElementById('modal_box');
	mod.style.display = "none";
}






ex1 = new Book("Astrophysics for People in a Hurry", "Neil DeGrasse Tyson", 208, true);
ex2 = new Book("The DaVinci Code", "Dan Brown", 597, true);
ex3 = new Book("Head First JavaScript", "Michael Morrison", 598, false);
lib.push(ex1,ex2,ex3);






