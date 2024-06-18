let out=document.querySelector("#out");
let btn=document.querySelector("button");


function generatepassword(){
    let ans="";
    for(let i=0;i<=11;i++){
        let r=Math.floor(Math.random()*70)+48;
        ans+=String.fromCharCode(r);
    }
    return ans;
}

btn.addEventListener("click",()=>{
    let o=generatepassword();
    out.value=o;
    console.log(o);
});

let z=document.getElementById("out");
function copypasswd(){
    z.select();
    document.execCommand("copy");
}

