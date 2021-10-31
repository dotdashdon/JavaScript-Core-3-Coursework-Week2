

   
const dogEl = document.getElementById("dog");
const dogBtn = document.getElementById("dogBtn");
const dogUl = document.getElementById("dog-ul");

dogBtn.addEventListener('click', generateDogImg)

generateDogImg();

// function generateDogImg() {

//     fetch("https://dog.ceo/api/breeds/image/random")
//     .then((res) => res.json())
//     .then((data) => {
//       dogEl.innerHTML = data.dog;//but for img? 
//     });
// }

function generateDogImg() {

    fetch("https://dog.ceo/api/breeds/image/random")
    .then((res) => res.json())
    .then((data) => {
      const  dogLi = document.createElement("li");
      const dogImg= document.createElement("img");
      dogImg.src = data.message; 
      dogLi.appendChild(dogImg);
      dogUl.appendChild(dogLi);
      
    }).catch((e) => {
        console.log(e);
    })
    };

    //need to look up how to clear the list after each time button is pressed or if list reaches 3 img? 