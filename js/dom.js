// DOCUMENT OBJECT MODEL
// Tree of nodes/elements created by the browser
// Javascript can be used to read/write/manipulate to the DOM
// Object Oriented Representation

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!EXAMINE THE DOCUMENT OBJECT!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!//
console.dir(document); // IT SHOWS ALL OF THE DIFFERENT PROPERTIES AND METHODS ATTACHED TO THE DOCUMENT OBJECT

//console.log(document.);// console.log(document. + whatever element you want to pass
//document.all;// Gives us an HTML collection of everything that is inside the page/document
//console.log(document.domain);// will result in localhost (the loopback address)
//console.log(document.URL);// returns the full url address (http://localhost:633)

//console.log(document.title);// returns the title (Item Lister)
//document.title = "123";// document.title = will change the title to whatever value we pass

//console.log(document.doctype);// uses the html5 doctype
//console.log(document.head);// grabs the head element and outputs it to the console and see everything that is in the head.
//console.log(document.body);// grabs the body and outputs it to the console.
//console.log(document.all[10]);// will grab the <h1> at index [10]
//console.log(document.all[10].textContent = 'Hello');// will select the <h1> at index [10] and change it to "Hello" (you do not want to use this method of selecting from the dom as it is not dynamic!!!
//console.log(document.forms);// grabs all the forms on the page. Use the index [0] to grab select items on the form
//console.log(document.links);// grabs all the links on the page
//console.log(document.images);// grabs all the images in the document


//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!SELECTORS!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!//

//------------------------------------GET ELEMENT BY ID-----------------------------------------//

//console.log(document.getElementById('headerTitle'));// pulls the header title and console logs it
// var headerTitle = document.getElementById('header-title');

// var header = document.getElementById('main-header');
//console.log(headerTitle);// puts header title inside a variable and the console.log just logs it.

//headerTitle.textContent = 'Hello';// will change the header title text to 'Hello'
//headerTitle.innerText = 'Goodbye';// will over ride the top one if used together. innerText pays attention to the styling
//headerTitle.innerHTML = '<h3>Hello</h3>';// puts the <h3> inside the the <h1> and does not change the <h1>. It just puts the new element inside the old element (makes it a child of the element.).

//------------------------------------GET ELEMENTS BY Class NAME--------------------------------//

// var items = document.getElementsByClassName('list-group-item');
// console.log(items);// It gives us an HTMLCollection and each one has an index [0], [1], [2], etc..
// console.log(items[1]);// used to access individual items (item 2)
// items[1].textContent = 'Hello 2';// changes the text in the actual item index (2nd one)
// items[1].style.fontWeight = 'bold';// changes the style of the text on that index item
// items[1].style.backgroundColor = 'yellow';// changes the background color to 'yellow'
//
//------------------------------------CHANGE ALL ELEMENTS BACKGROUND COLOR----------------------//
//
// GIVES ERROR
// items.style.backgroundColor = 'lightgrey'; //does not work
//
// //CORRECT WAY
// for(var i = 0; i < items.length; i++){
//     items[i].style.backgroundColor = "#f4f4f4";
// }


//------------------------------------GET ELEMENTS BY TAGNAME-----------------------------------//
// WORKS THE SAME WAY AS BY ID AND CLASS EXCEPT YOU ARE GETTING IT BY TAG!

//var li = document.getElementsByTagName('li');
//console.log(items);// grabs all the li items by the index on the page and displays them to the console.
//console.log(li[1]);// used to access individual items (item 2)
//li[1].textContent = 'Hello 2';// changes the text in the actual item index (2nd one)
//li[1].style.fontWeight = 'bold';// changes the style of the text on that index item
//li[1].style.backgroundColor = 'yellow';// changes the background color to 'yellow'

//------------------------------------CHANGE ALL ELEMENTS BACKGROUND COLOR----------------------//

//GIVES ERROR
//li.style.backgroundColor = 'lightgrey'; //does not work

//CORRECT WAY
// for(var i = 0; i < li.length; i++){
//     li[i].style.backgroundColor = "#f4f4f4";
// }

//------------------------------------CSS STYLE CHANGES-----------------------------------------//

//headerTitle.style // is how you change .css styles
//headerTitle.style.borderBottom = 'solid 3 px #000';// changes the header title style to have a black solid bottom when used in conjunction with var headerTitle = document.getElementById('header-title');
//header.style.borderBotom = 'solid 3px #000';// this changes the actual header border when used in conjunction with  var header = document.getElementById('main-header');


//------------------------------------QUERY SELECTOR--------------------------------------------//
// QUERY SELECTOR ONLY GRABS THE FIRST INSTANCE OF THE ITEM YOU SELECT!!!

//var header = document.querySelector('');// you can use anything you want in the () after querySelector (class, tags, any css selector, you can grab a list item(li), just replace the jQuery $ with document.querySelector().

// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';// turns the main header border on the bottom to grey
//
// var input = document.querySelector('input');
// input.value = 'Hello World';// added a value to that input
//
// var submit = document.querySelector(input[type="submit"]);
// submit.value="SEND";// changes the list button to SEND
//
// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';// will grab the first list item in the group and style it
//
// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';// will grab the last list item in the group and style it
//
// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'coral';// will grab the 2nd list item in the group and style it


//------------------------------------QUERY SELECTOR ALL----------------------------------------//
//WILL GRAB ALL THE ITEMS IN WITH THE DESIGNATED NAME

// var titles = document.querySelectorAll('.title');
// console.log(titles);// gives us a node list which is similar to a collection, except we can actually run array functions on a node list!!!
// titles[0].textContent = 'Hello';// how we access those node
//
// var odd = document.querySelectorAll('li:nth-child(odd)');// nth-child is a .css selector
// var even = document.querySelectorAll('li:nth-chile(even)');// for all the evens
//
// for (var i = 0; i < odd.length; i++){
//     odd[i].style.backgroundColor = '#f4f4f4';//changes all the odd numbers to lightgrey
//     even[i].style.backgroundColor = '#ccc';//changes all the even numbers to darkgrey
// }

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!TRAVERSING THE DOM!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!//
//MOVING UP AND DOWN THE DOM, LOOKING AT PARENT NODES, CHILD NODES AND SIBLINGS

//PARENT NODES//

// var itemList = document.querySelector('items');
//parentNode property
// console.log(itemList.parentNode);// it gives us the <div> with the id of #main because it is inside of the <div class="container">

//USED AS A SELECTOR
//var itemList = document.querySelector('items');
//itemsList.parentNode.style.backgroundColor = '#f4f4f4';// changes the parent node which is the <div> with the id of #main

//CHAINED
//console.log(itemList.parentNode.parentNode);// changes the <div> with the class of .container / <div class="container> changes

//console.log(itemList.parentNode.parentNode.parentNode);// changes the <body>

//PARENT ELEMENT
//Does the same exact thing as Parent Node can be interchangeable

// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement.parentElement);

//Child Nodes
//use children instead!!!

//console.log(itemList.childNodes);// gives us a node list basically an array all the text items are linebreaks

