// // Write your code here!

// const element = document.createElement('div');

// document.body.append(element);

// // const ul = document.createElement('ul');

// // for (let i = 0; i < 3; i++) {
// //     const li = document.createElement('li'); //each 
// //     li.textContent = (i+1).toString();
// //     ul.append(li);
// // }

// // element.append(ul);


// //below I point to and delete main
// const mainSection = document.getElementById('main')
// console.log(mainSection)
// mainSection.remove()

// //below I create the header
// const newHeader = document.createElement('h1');
// newHeader.id = "victory"
// newHeader.innerHTML = "Claire is the champion"

// document.body.append(newHeader)

// document.get

const testVar = "hi"

/* Enter the code to remove the node element here */
document.querySelector("main#main").remove();

/* Create your new element here and assign it to newHeader */
const newHeader = document.createElement("h1");
newHeader.id = "victory"
newHeader.innerHTML = "Flatiron School is the champion!";
newHeader.className = "victory";