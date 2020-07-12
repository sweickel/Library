let lib = [];


//constructor for new book
function Book(title, author, numPages, read) {
	this.title = title,
	this.author = author,
	this.numPages = numPages,
	this.read = read
}

//adds book from form to lib and displays on page
function addBook() {
	let newTitle = document.querySelector("#title").value;
	let newAuthor = document.querySelector("#author").value;
	let newPages = document.querySelector("#pages").value;
	let newRead = document.querySelector("#read");
		if (newRead.checked === true) {
			newRead = true;
		}	else {
				newRead = false;
			}	
	lib.push(new Book(newTitle, newAuthor, newPages, newRead));
	resetForm();
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
	//each is assigned an attribute that corresponds to index of array
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

	// Adds bookread toggle button
	const bookFootWrapper = document.createElement('div');
	bookFootWrapper.classList.add('card-footer');
	const bookButton = document.createElement('div');
	bookButton.classList.add('card-button');
	const bookRead = document.createElement('p');
	bookRead.classList.add('card-read-status');
	if (book.read === true) {
		bookRead.classList.add('read');
		bookRead.textContent = "Read";
	}	else {
		bookRead.classList.add('unread');	
	  	bookRead.textContent = "Unread";
	  }

	// updates read status and re-renders list 
	bookRead.addEventListener('click', (event) => {
		if (book.read === true) {
			book.read = false;
			bookRead.setAttribute('class', 'unread');
			bookRead.textContent = "Unread";
		}	else {
			book.read = true;
			bookRead.setAttribute('class', 'read');
			bookRead.textContent = "Read";
		}
		render();
	})

	//remove button uses index attribute to remove from array and renders again
	const bookRemove = document.createElement('img');
	bookRemove.classList.add('card-remove');
	bookRemove.setAttribute('src', "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fendlessicons.com%2Fwp-content%2Fuploads%2F2012%2F12%2Ftrash-icon.png&f=1&nofb=1");
	bookRemove.addEventListener('click', (event) => {
			let mainNode = bookRemove.parentNode;
			let indexId = mainNode.getAttribute('ind');
			lib.splice(indexId, 1);
			render();
		})

	wrapper.appendChild(item);
	item.appendChild(bookTitle);
	item.appendChild(bookAuthor);
	item.appendChild(bookPages);
	item.appendChild(bookFootWrapper);
	bookFootWrapper.appendChild(bookButton);
	bookButton.appendChild(bookRead);
	item.appendChild(bookRemove);	
 })


}

//Modal Box Functions
function addClick() {
		const mod = document.querySelector('.modal_box');
		mod.style.display = "flex";
	}

function closeBox() {
		const mod = document.querySelector('.modal_box');
		mod.style.display = "none";
	}

function resetForm() {
		const modIn = document.querySelector('.inputForm');	
		modIn.reset();
	}





ex1 = new Book("Astrophysics for People in a Hurry", "Neil DeGrasse Tyson", 208, true);
ex2 = new Book("The DaVinci Code", "Dan Brown", 597, true);
ex3 = new Book("Head First JavaScript", "Michael Morrison", 598, false);
lib.push(ex1,ex2,ex3);








