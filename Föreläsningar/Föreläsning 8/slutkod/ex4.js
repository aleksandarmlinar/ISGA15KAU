"use strict";

const JSONBooks = [
	{ 	"Author" : "Jeremy Keith & Jeffrey Sambells", 
		"Title" : "DOM Scripting Web Design with JavaScript and the Document Object Model", 
		"Publisher" : "Apress"
	},
	{ 	"Author" : "Jon Duckett", 
		"Title" : "HTML & CSS desing and build websites", 
		"Publisher" : "Wiley"
	},
	{ 	"Author" : "W. Jason Gilmore", 
		"Title" : "Beginning PHP and MySQL From Novice to Professional", 
		"Publisher" : "Apress" 
	},
	{ 	"Author" : "Steve Fulton & Jeff Fulton", 
		"Title" : "HTML5 Canvas", 
		"Publisher" : "O'Reilly" 
	},
	{ 	"Author" : "Steve Fulton & Jeff Fulton", 
		"Title" : "HTML5 Canvas", 
		"Publisher" : "O'Reilly" 
	},
	{ 	"Author" : "Steve Fulton & Jeff Fulton", 
		"Title" : "HTML5 Canvas", 
		"Publisher" : "O'Reilly" 
	}
];

window.addEventListener("load", function() {

	let divRef = document.querySelector("#siteContentId");
	let ulRef = null;

	for(let i = 0; i < JSONBooks.length; i++) {
		ulRef = showBook( JSONBooks[i] );
		divRef.appendChild(ulRef);
	}

});

function showBook(oCurrentBook) {
	let ulRef =  document.createElement("ul");

	console.log(oCurrentBook);

	let liRefAuthor = document.createElement("li");
	let liRefTitle = document.createElement("li");
	let liRefPublisher = document.createElement("li");

	let textRefAuthor = document.createTextNode( oCurrentBook.Author );
	let textRefTitle = document.createTextNode( oCurrentBook.Title );
	let textRefPublisher = document.createTextNode( oCurrentBook.Publisher );

	liRefAuthor.appendChild(textRefAuthor);
	liRefTitle.appendChild(textRefTitle);
	liRefPublisher.appendChild(textRefPublisher);

	ulRef.appendChild(liRefAuthor);
	ulRef.appendChild(liRefTitle);
	ulRef.appendChild(liRefPublisher);

	return ulRef;
}

