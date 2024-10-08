let element=document.querySelector(".container");
let currentmode="light";
element.addEventListener("click",() => {
    if(currentmode=="light"){
        currentmode="dark"
        document.querySelector("body").style.background="green";
    }
    else if(currentmode=="dark"){
        currentmode="light";
     document.querySelector("body").style.background="pink";
    }
    console.log(currentmode);
});