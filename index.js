// ===========================================================
//        exercise-js-bucketlist
// ===========================================================

// ----- References -----
const list = document.querySelector(".list");
const newListP1 = document.createElement("p"); // 1
const newListP2 = document.createElement("p"); // 2
const iH = list.innerHTML; // 3
const owner = document.querySelector(".owner"); // 9

// ----- 1 -----
newListP1.innerText = "Travel places";
list.appendChild(newListP1);
// appendChild() always puts the element as the last child of the target element.

// ----- 2 -----
newListP2.innerText = "Become king of Denmark";
list.insertAdjacentElement("beforeend", newListP2);
// insertAdjacentElement("beforeend")  does the same as appendChild().

// ----- 3 -----
console.log(iH);

// ----- 4 -----
const divAsString1 = "<p>Own a nice house</p>";

// ----- 5 -----
// list.innerHTML + divAsString1;

// ----- 6 -----
list.insertAdjacentHTML("afterbegin", divAsString1);

// ----- 7 -----
const itemsArray1 = ["Three", "More", "Items"];
for (const item of itemsArray1) {
  let el = document.createElement("p");
  el.innerText = item;
  list.insertAdjacentElement("beforeend", el);
}

// ----- 8 -----
numberOfItems = list.children.length;
console.log(numberOfItems); // 7

// ----- 9 -----
owner.innerText = "Jonas'";

// ----- 10 -----
const childReplacer1 = document.createTextNode(
  "Earn a Million Swedish Crowns."
);
const childToReplace1 = list.children[1];
// I know it said the 1st item, but this is the original first item,
// and also the only item that i hadn't changed yet, so i chose this one.
list.replaceChild(childReplacer1, childToReplace1);

// ----- 11 -----
const childReplacer2 = document.createTextNode("Find Cake");
const findChild2 = Math.floor(list.children.length / 2);
const childToReplace2 = list.children[findChild2];
list.replaceChild(childReplacer2, childToReplace2);

// ----- 12 -----
list.removeChild(list.lastChild);
