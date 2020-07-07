
// todo
// 1, when input is missing, have a warning message popup by the text box
// 2, when input is not number, have a warning message popup by the text box


// global variables
let myLibrary = []; // store objects (user input)

// create object
class Book {
  // the constructor...
  constructor(title,author,pages,read,ratings,review){
  	// user input instanciate a new object
  	this.title = title;
  	this.author = author;
  	this.pages = pages;
  	this.read = read;
  	this.ratings = ratings;  	
  }

  // print_book(){
  // 	console.log('cat walking down the stree found' + this.title,this.author, + 'with' + this.pages + 'pages', this.read,this.ratings,this.review)
  // }
  
}

// when instanciating a new object, you need new 

// const newobj = new Book('cat','meowkichi','N/A',false,5,null)
// console.log(newobj)
// newobj.print_book()

function addBookToLibrary() {
  // do stuff here
};


// user action

const add_btn = document.querySelector('.add-btn');
const b_form = document.querySelector('.book-form');

add_btn.addEventListener('click',(e) => {
    // console.log('check hiya')
    b_form.classList.remove("d-none"); // remove d-none so book form pops up
});
