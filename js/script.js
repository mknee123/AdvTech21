// JavaScript Document
/**
*The Coing class is a blueprint for a typical coin
*@author Miranda Knee
*@version 1.0 October 28, 2014
*/
function Coin(){
	this.item_on_page;//represent coin's visual presence on page 
	this.x;//keep track of each individual coins left/right position
	this.y;//keep track of each individual coing up/down position
	/**
	*The creat method puts the graphic on page and formats its
	*/
	this.create=function(){
		//make an <img> tag, set it's scr to the image in the img folder
		this.item_on_page = document.createElement('img');
		this.item_on_page.src = "img/coin.png";
		this.item_on_page.style.position = "absolute";
		//store a random x and y value thats between zero and the edge of the playing area(500 X 300).  Different numbers for each coin.
		this.x = Math.floor(Math.random()*500);
		this.item_on_page.style.left = this.x + "px";
		this.y = Math.floor(Math.random()*300);
		this.item_on_page.style.top = this.y + "px";
		
		
		//actually put the img tag onto the page:
		document.body.appendChild(this.item_on_page);
	}
	/**
	*This destroy method puts the graphics on page and formats it
	*/
	this.destroy-function (){
		
	}
}
onload = init;
function init(){
	var coin1 = new Coin();
	coin1.create();
	var coin2 = new Coin();
	coin2.create();
}
//coin1.destroy();