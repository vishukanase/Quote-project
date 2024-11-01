let quote1=document.getElementById("textcontent");
let auther1=document.getElementById("authername");

const apilink= "https://quotes-api-self.vercel.app/quote";
let temp;
const getdata=async()=>{
const data2=await fetch(apilink);
const data1=await data2.json();
temp=data1.quote;

// console.log(data1);
quote1.innerText=data1.quote;
auther1.innerText=data1.author;


};

getdata();


const newtweet=document.getElementById("first_button");
const share=document.getElementById("secoend-button");

newtweet.addEventListener("click",()=>{
    getdata();
})

share.addEventListener("click",()=>{
    window.open("https://twitter.com/intent/tweet?text="+temp ,"width:50px" , "height:100px");
})