//do i need a button for these? 
const imgEl = document.getElementById('img');
const containerEl = document.getElementById('container');
const imageEL = document.getElementById('img-container');

getImg();

function getImg() {
fetch('https://xkcd.now.sh/?comic=latest')
.then((response)=> response.json()) 
.then((data) =>{
    console.log(data);
    imgEl.src = data.img;
    imageEl.appendChild(imgEl);
})
.catch((e)=> {
    console.log(e);
})
};

// getImg();
