// debug tips
// 1, check syntax
// 2, check if html, css and js are all saved
// 3, spelling mistake


// todo
// 
// 1, when input is missing, have a warning message popup by the text box
// 2, when input is not number, have a warning message popup by the text box
// 3, make background blur when popup menu is activated
// 4, takes user input
// 5, create another book based on user input


// play ground, to be deleted

// console.log(document.all)

// global variables
let myLibrary = []; // store objects (user input)
const bg_blur = document.querySelector('.bg-blur')
const add_btn = document.querySelector('.add-btn');
const b_form = document.querySelector('.book-form');
// const body = document.getElementsByTagName("BODY")[0];
const books = document.querySelectorAll('.book');
const submit = document.querySelector('.login_btn');
const bookname = document.querySelector('#bookname');
const authorname = document.querySelector('#authorname');
const pages = document.querySelector('#pages');
const cards = document.querySelector('.cards-row');
const read = document.querySelector('#read');
const not_read = document.querySelector('#not-read');
const b_title = document.querySelectorAll('#b-title'); 
const author_title = document.querySelectorAll('#au-title');
const p_num = document.querySelectorAll('#p-num');
const read_toggle = document.querySelectorAll('#toggle');
const remove_btn = document.querySelectorAll('.remove-icon');
const close_btn = document.querySelector('.close-icon');
const form = document.querySelector('.user_card');


// create object
class Book {
  // the constructor...
  constructor(title,author,pages,read){
  	// user input instanciate a new object
  	this.id = myLibrary.length
  	this.title = title;
  	this.author = author;
  	this.pages = pages;
  	this.read = read;
  }

}

function addExisitingBookToLibrary(){
	// when looping through objects, use in 
	
	for (let i = 0; i < b_title.length; i++){
		// console.log(read_toggle)

		// alrady exsiting data
		b_title_input = b_title[i].textContent
		author_title_input = author_title[i].textContent
		p_num_input = p_num[i].textContent
		already_read = (read_toggle[i].textContent === 'Finished') ? true : false;

		addBookToLibrary(b_title_input,author_title_input,p_num_input, already_read)

	}
};


// local storage flow
// myLibrary = [0: Book {title: "asfd", author: "h", pages: "23", read: false}
// 			1: Book {title: "fh", author: "hf", pages: "23", read: true}
// 			2: Book {title: "fgh", author: "jf", pages: "23", read: false}
// 			3: Book {title: "cxv", author: "fgh", pages: "23", read: true}
// ]

function addBookToLibrary(b_name,a_name,numOfPages,readOrNot) {
  // do stuff here
  myLibrary.push(new Book(b_name,a_name,numOfPages,readOrNot))

};	

//remove book
// console.log(remove_btn.length)

// function setRemoveBtn(){

// 	// when looping through objects, use in 
// 	for (let i = 0; i < remove_btn.length; i++){
// 		remove_btn[i].addEventListener('click',(e) => {
//     		books[i].remove()
//     		// console.log(e)
//     		// remove_btn.pop()
// 		});
// 	};
// 	// console.log('AFTER setbtn')
// 	// console.log(remove_btn)
// };

// setRemoveBtn()

// user action




// activate pop-up menu
add_btn.addEventListener('click',(e) => {
    
    // make background blur when popup menu is activated
    // b_form.classList.add("d-none"); // remove d-none so book form pops up
    // body.classList.add('blur')      
    // console.log(e)

    bg_blur.classList.add('blur')

    b_form.classList.remove("d-none"); // remove d-none so book form pops up
  
    // body.classList.add('blur')

});

// close pop-up menu
close_btn.addEventListener('click',(e) => {

    // make background blur when popup menu is activated
    b_form.classList.add("d-none"); // remove d-none so book form pops up
  	bg_blur.classList.remove('blur')
    // body.classList.add('blur')
    // console.log(e);
});


function renderNewDiv(id,b,a,p,r){

	// create row
	new_book = document.createElement('div');
	new_book.setAttribute('class', 'book col-sm-12 col-md-6 col-lg-4 col-xl-3');
	// console.log(cards);
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
	user_input_bookname.innerHTML = temp_book //https://stackoverflow.com/questions/27079598/error-failed-to-execute-appendchild-on-node-parameter-1-is-not-of-type-no
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
	user_input_authorname.innerHTML = temp_authour
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
	user_input_page.innerHTML = temp_pages;
	book_card.appendChild(user_input_page);


	// check read or not
	// read_check = read.checked ? true : false; needs to check when no value is inputed so ternary is no good here 
	book_card = document.createElement('div');
	book_card.setAttribute('class', 'book-item book-read');
	card_body.appendChild(book_card);
	read_button = document.createElement('button');
	read_button.type = 'button'
	read_button.setAttribute('id', 'toggle');

	// assign button according to user's input
	if (r) {
  		read_button.setAttribute('class', 'btn btn-primary');
  		read_button.innerHTML = 'Finished'

	} else {
		read_button.setAttribute('class', 'btn btn-warning');
		read_button.innerHTML = 'Not Finished'
	}


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
	// console.log(id.toString())
	// const z = id.toString()
	// console.log(typeof z)
	
	
	
	// create icon
	remove_icon = document.createElement('i');
	remove_icon.setAttribute('class', 'fa fa-trash align-top');
	remove_icon.setAttribute('id', id.toString());

	remove_button.appendChild(remove_icon);
	book_card.appendChild(remove_button);
}

// deactivate pop-up menu, get inputs 

submit.addEventListener('click',(e) => {

	// check if input is entered or not
	// dont need to check all of fields individually since HTML default required takes care of each field indiviually 
	// all that needs to be checked is all fields entered or not
	if (bookname.value !== '' && authorname.value !== '' && pages.value !== '' && (read.checked || not_read.checked)) {

		
		
		// console.log('hiya')
		// test a case where type name and delete it and submit 
		// if it goes through, wrong
		temp_book = bookname.value
		temp_authour = authorname.value
		temp_pages = pages.value
		readOrNot = read.checked ? true : false;

		addBookToLibrary(bookname.value,authorname.value,pages.value, readOrNot)
		// new_book = myLibrary[myLibrary.length-1]
		new_book_id = myLibrary.length-1
		// console.log(typeof new_book_id)

		renderNewDiv(new_book_id,bookname.value,authorname.value,pages.value, readOrNot) 

		// clear fields
	    bookname.value = ''
	    authorname.value = ''
	    pages.value = ''

	    e.preventDefault();
	   
		b_form.classList.add("d-none"); // remove d-none so book form pops up
		bg_blur.classList.remove('blur')


	}
});

function main(){

	// apply event listeners to all elements to handle toggle read and delete
	// Time complexity could be improved if each element is given id and access it
	document.addEventListener('click', e => {
		// console.log(e);

		// delete book
		if (e.target.className === 'fa fa-trash align-top'){
			console.log(e.target.id)
			// e.target gets html element
			e.target.parentNode.parentNode.parentNode.parentNode.remove()
			// delte object from my library
			del_idx = parseInt(e.target.id)
			console.log(typeof del_idx)
			arr = myLibrary.filter(item => item['id'] !== del_idx)
			console.log(arr)
			myLibrary = arr;
			console.log(typeof myLibrary)

			// for (let i = 0; i < myLibrary.length; i++){
			// 	console.log(myLibrary[i]['id'])
			// }
			
		}

		// toggle read button
		if (e.target.id === 'toggle'){
			
			if (e.target.innerHTML === 'Finished'){
				// change clas name to change button theme
				e.target.className = 'btn btn-warning'
				e.target.innerHTML = 'Not Finished'
			}else{
				e.target.className = 'btn btn-primary'
  				e.target.innerHTML = 'Finished'
			}
				
		}

	});
}


addExisitingBookToLibrary()
main()
