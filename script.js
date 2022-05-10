const item1remove = document.getElementById("item1remove");
const item2remove = document.getElementById("item2remove");
const item3remove = document.getElementById("item3remove");

const error1 = document.getElementById("error1");
const error2 = document.getElementById("error2");
const error3 = document.getElementById("error3");
const item1 = document.getElementById("item1");
const item2 = document.getElementById("item2");
const item3 = document.getElementById("item3");
const plus1 = document.getElementById("item1plus")
const minus1 = document.getElementById("item1minus")

const total = document.getElementById("total")
const price1 = 2000;
const price2 = 1500;
const price3 = 4000;

let isLiked = "false";

function likeItem1() {  
	const item1like = document.getElementById('item1like');

	if(isLiked === "true") {
		item1like.style.color = "black";
		isLiked = "false";
	} else {
		item1like.style.color = "red";
		isLiked = "true";

	}
}

function likeItem2() {  
	const item2like = document.getElementById('item2like');

	if(isLiked === "true") {
		item2like.style.color = "black";
		isLiked = "false";
	} else {
		item2like.style.color = "red";
		isLiked = "true";

	}
}

function likeItem3() {  
	const item3like = document.getElementById('item3like');

	if(isLiked === "true") {
		item3like.style.color = "black";
		isLiked = "false";
	} else {
		item3like.style.color = "red";
		isLiked = "true";

	}
}

item1remove.addEventListener("click", function(){
	item1.remove()
})

item2remove.addEventListener("click", function(){
	item2.remove()
})

item3remove.addEventListener("click", function(){
	item3.remove()
})

// function plus(currentPrice, itemQuantityId, itemAmountId){
// 	let itemAmountIdCont = document.getElementById(itemAmountId);
// 	let itemQuantityIdCont = document.getElementById(itemQuantityId);

// 	console.log(itemAmountIdCont, itemQuantityIdCont);

// 	let init = 1
// 	if(init < 10){
// 		init++
// 		console.log(init);
// 		let newAmt = currentPrice * init;
// 		itemQuantityIdCont.value = init;
// 		itemAmountIdCont.innerHTML = "<span>&#8358; <span>" + newAmt;
// 		total.innerText = price2 + price3 + newAmt;
// 	} else {
// 		error1.innerText = "OUT OF STOCK!";
// 	}
// }

// function minus(currentPrice, itemQuantityId, itemAmountId){
// 	let itemAmountIdCont = document.getElementById(itemAmountId);
// 	let itemQuantityIdCont = document.getElementById(itemQuantityId);

// 	console.log(itemAmountIdCont, itemQuantityIdCont);

// 	let init = 1
// 	if(init > 0){
// 		init--
// 		let newAmt = currentPrice * init;
// 		itemQuantityIdCont.value = init;
// 		itemAmountIdCont.innerHTML = "<span>&#8358; <span>" + newAmt;
// 		total.innerText = price2 + price3 + newAmt;
// 		if(init < 10) error1.innerText = "";
// 	}
// }

function plus(){
	let init = Number(item1quantity.value)
	if(init < 10){
		init++
		let newAmt = price1 * init;
		item1amount.innerHTML = "<span>&#8358; <span>" + newAmt;
		total.innerText = price2 + price3 + newAmt;
	} else {
		error1.innerText = "OUT OF STOCK!";
	}
	item1quantity.value = init;
}

function minus(){
	let init = Number(item1quantity.value)
	if(init > 0){
		init--
		let newAmt = price1 * init;
		item1amount.innerHTML = "<span>&#8358; <span>" + newAmt;
		total.innerText = price2 + price3 + newAmt;
		if(init < 10) error1.innerText = "";
	}
	item1quantity.value = init;
}

function plus2(){
	let init = Number(item2quantity.value)
	if(init < 10){
		init++
		let newAmt = price2 * init;
		item2amount.innerHTML = "<span>&#8358; <span>" + newAmt;
		total.innerText = price1 + price3 + newAmt;
	} else {
		error2.innerText = "OUT OF STOCK!";
	}
	item2quantity.value = init;
}

function minus2(){
	let init = Number(item2quantity.value)
	if(init > 0){
		init--
		let newAmt = price2 * init;
		item2amount.innerHTML = "<span>&#8358; <span>" + newAmt;
		total.innerText = price1 + price3 + newAmt;
		if(init < 10) error2.innerText = "";
	}
	item2quantity.value = init;
}

function plus3(){
	let init = Number(item3quantity.value)
	if(init < 10){
		init++
		let newAmt = price3 * init;
		item3amount.innerHTML = "<span>&#8358; <span>" + newAmt;
		total.innerText = price1 + price2 + newAmt;
	} else {
		error3.innerText = "OUT OF STOCK!";
	}
	item3quantity.value = init;
}

function minus3(){
	let init = Number(item3quantity.value)
	if(init > 0){
		init--
		let newAmt = price3 * init;
		item3amount.innerHTML = "<span>&#8358; <span>" + newAmt;
		total.innerText = price1 + price2 + newAmt;
		if(init < 10) error3.innerText = "";
	}
	item3quantity.value = init;
}