// debug tips
// 1, check syntax
// 2, check if html, css and js are all saved
// 3, spelling mistake


// todo
// 
// 0, new book cannot be deleted
// 1, when input is missing, have a warning message popup by the text box
// 2, when input is not number, have a warning message popup by the text box
// 3, make background blur when popup menu is activated
// 4, takes user input
// 5, create another book based on user input


// play ground, to be deleted

// console.log(document.all)

// global variables
let myLibrary = []; // store objects (user input)
const add_btn = document.querySelector('.add-btn');
const b_form = document.querySelector('.book-form');
const body = document.getElementsByTagName("BODY")[0];
const books = document.querySelectorAll('.book');
const login_btn = document.querySelector('.login_btn');
const bookname = document.querySelector('#bookname');
const authorname = document.querySelector('#authorname');
const pages = document.querySelector('#pages');
const cards = document.querySelector('.cards-row');
const read = document.querySelector('#read');
const not_read = document.querySelector('#not-read');
const b_title = document.querySelectorAll('#b-title'); 
const author_title = document.querySelectorAll('#au-title');
const p_num = document.querySelectorAll('#p-num');
const remove_btn = document.querySelectorAll('.remove-btn');



// create object
class Book {
  // the constructor...
  constructor(title,author,pages,read){
  	// user input instanciate a new object
  	this.title = title;
  	this.author = author;
  	this.pages = pages;
  	this.read = read;
  }

  // print_book(){
  // 	console.log('cat walking down the stree found' + this.title,this.author, + 'with' + this.pages + 'pages', this.read,this.ratings,this.review)
  // }
  
}

// when instanciating a new object, you need new 

// const newobj = new Book('cat','meowkichi','N/A',false,5,null)
// console.log(newobj)
// newobj.print_book()

function addExisitingBookToLibrary(){
	// when looping through objects, use in 
	for (let i = 0; i < b_title.length; i++){
		// console.log('hiya')

		// alrady exsiting data
		b_title_input = b_title[i].textContent
		author_title_input = author_title[i].textContent
		p_num_input = p_num[i].textContent
		addBookToLibrary(b_title_input,author_title_input,p_num_input)

	}
};

// console.log(b_title.length)
// addExisitingBookToLibrary()
// console.log(myLibrary)

function addBookToLibrary(b_name,a_name,numOfPages) {
  // do stuff here
  myLibrary.push(new Book(b_name,a_name,numOfPages))

};	

//remove book
console.log(remove_btn.length)

function setRemoveBtn(){
	// when looping through objects, use in 
	for (let i = 0; i < remove_btn.length; i++){
		remove_btn[i].addEventListener('click',(e) => {
    		books[i].remove()
		});
	};
};

setRemoveBtn()





// user action

// activate pop-up menu
add_btn.addEventListener('click',(e) => {
    // console.log('check hiya')

    // make background blur when popup menu is activated
    b_form.classList.remove("d-none"); // remove d-none so book form pops up
  
    // body.classList.add('blur')


});

// deactivate pop-up menu
login_btn.addEventListener('click',(e) => {

	e.preventDefault();
	console.log('check hiya');
	console.log('bookname is: ' + bookname.value)
	console.log('authorname is: ' + authorname.value)
	console.log('pages is: ' + pages.value)


	addBookToLibrary(bookname.value,authorname.value,pages.value)

	// create new book
	// work flow - create div, append it to parent, modify contens 

	// create a row
	new_book = document.createElement('div');
	new_book.setAttribute('class', 'book col-sm-12 col-md-6 col-lg-4 col-xl-3');
	console.log(cards);
	// document.body.insertBefore(new_book, cards)
	cards.appendChild(new_book);

	// create book wrapper's wrapper book info is merely for margin around its div
	new_book_info = document.createElement('div');
	new_book_info.setAttribute('class', 'book-info');
	new_book.appendChild(new_book_info); 

	// create book's wrapper 
	card_body = document.createElement('div');
	card_body.setAttribute('class', 'card-body');
	new_book_info.appendChild(card_body);

	// create each book's wrapper, bootstrap's property
	book_card = document.createElement('div');
	book_card.setAttribute('class', 'book-item book-title');
	card_body.appendChild(book_card);

	// create book's title
	card_title = document.createElement('h5');
	card_title.setAttribute('class', 'card-title');
	card_title.innerHTML = 'Book title: '
	book_card.appendChild(card_title);

	// get user's input for books'name
	user_input_bookname = document.createElement('p');
	user_input_bookname.setAttribute('class', 'user-input pb-2 pt-2');
	user_input_bookname.innerHTML = bookname.value //https://stackoverflow.com/questions/27079598/error-failed-to-execute-appendchild-on-node-parameter-1-is-not-of-type-no
	book_card.appendChild(user_input_bookname);


	// create book author's info
	book_card = document.createElement('div');
	book_card.setAttribute('class', 'book-item book-author');
	card_body.appendChild(book_card);

	// create author's name
	author_name = document.createElement('h5');
	author_name.setAttribute('class', 'card-title');
	author_name.innerHTML = 'Book author: '
	book_card.appendChild(author_name);

	// get user's input for books'name
	user_input_authorname = document.createElement('p');
	user_input_authorname.setAttribute('class', 'user-input pb-2 pt-2');
	user_input_authorname.innerHTML = authorname.value
	book_card.appendChild(user_input_authorname);


	// create pages column
	book_card = document.createElement('div');
	book_card.setAttribute('class', 'book-item book-pages d-flex pb-2');
	card_body.appendChild(book_card);

	// create page
	page_cotent = document.createElement('h5');
	page_cotent.setAttribute('class', 'card-title');
	page_cotent.innerHTML = 'Pages: ';
	book_card.appendChild(page_cotent);

	// get user's input for pages
	user_input_page = document.createElement('p');
	user_input_page.setAttribute('class', 'pages-text');
	user_input_page.innerHTML = pages.value;
	book_card.appendChild(user_input_page);


	// check read or not
	// read_check = read.checked ? true : false; needs to check when no value is inputed so ternary is no good here 
	book_card = document.createElement('div');
	book_card.setAttribute('class', 'book-item book-read');
	card_body.appendChild(book_card);
	read_button = document.createElement('button');
	read_button.type = 'button'

	if (read.checked) {
  		read_button.setAttribute('class', 'btn btn-primary');
  		read_button.innerHTML = 'Read'

	} else if (not_read.checked){
		read_button.setAttribute('class', 'btn btn-warning');
		read_button.innerHTML = 'Not Read'
	} 
	// else{

	// }

	book_card.appendChild(read_button);

	// initiate and append it to parent remove button
	book_card = document.createElement('div');
	book_card.setAttribute('class', 'card-footer d-flex');
	new_book_info.appendChild(book_card);

	// create small tag and its element
	remove_text = document.createElement('small');
	remove_text.setAttribute('class', 'text-muted');
	remove_text.innerHTML = 'remove'
	book_card.appendChild(remove_text);

	// create button
	remove_button = document.createElement('button');
	remove_button.setAttribute('class', 'remove-btn remove-icon');

	// create icon
	remove_icon = document.createElement('i');
	remove_icon.setAttribute('class', 'fa fa-times');

	remove_button.appendChild(remove_icon);
	book_card.appendChild(remove_button);


    // make background blur when popup menu is activated
    b_form.classList.add("d-none"); // remove d-none so book form pops up
    // body.classList.add('blur')      
    // console.log(e)

    // clear fields
    bookname.value = ''
    authorname.value = ''
    pages.value = ''
    
});


// get user input
// bookname.addEventListener('click',(e) => {

//     console.log(e)
//     console.log(e.target.id)
//     console.log(e.target.className)

// });

// authorname.addEventListener('click',(e) => {
//     console.log(e)

// });

// pages.addEventListener('click',(e) => {
//     console.log(e)

// });

