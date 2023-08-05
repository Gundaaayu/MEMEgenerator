const generateMemeBtn=document.querySelector(".generator .btn");
const memeImage=document.querySelector(".generator img");
const memeTitle=document.querySelector(".generator .meme-title");
const memeAuthor=document.querySelector(".generator .memeauthor");

const updateDetails=(url,title,author)=>{
    memeImage.setAttribute("src",url);
    memeTitle.innerHTML=title;
    memeAuthor.innerHTML=`MEME Created By ${author}`;
};

const generateMeme=()=>{
    fetch("https://meme-api.com/gimme")
    .then(response=>response.json())
    .then(data =>{
        updateDetails(data.url,data.title,data.author)
    });
};

generateMemeBtn.addEventListener("click",generateMeme);
generateMeme();