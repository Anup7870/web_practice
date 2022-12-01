let bar=document.getElementById("bar");
let nav=document.getElementById("nav");
let cross=document.getElementById("cross");

bar.addEventListener('click',function (){
    // if(nav.style.right==="-188px"){
        nav.style.right="0";
        bar.style.display="none";
        cross.style.display="block";
    // }
    // else{
        // nav.style.right="-188px";
        // bar.style.display="block";
        // cross.style.display="none";
    
})
cross.addEventListener('click', function(){
        nav.style.right="-188px";
        bar.style.display="block";
        cross.style.display="none";
})