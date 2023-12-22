let imageEl=document.getElementById("image");
let widthEl=document.getElementById("imagewidth")
let warningEl=document.getElementById("warning");
let maxWaring="Too big. Decrease the size of the Image."
let minWaring="Can't Visible. Increase the size of the Image."

let originalWidth=200;
let maxWidth=300;
let minwidth=100;

imageEl.style.width=originalWidth+"px"
widthEl.textContent=originalWidth+"px"
function onDecrement(){
    if(originalWidth<=minwidth){
        warningEl.textContent=minWaring;
    }
    else{
        originalWidth=originalWidth-5
        let updatedWidth=originalWidth+"px"
        warningEl.textContent=""
        imageEl.style.width=updatedWidth
        widthEl.textContent=updatedWidth
        
    }
}
function onIncrement(){
    if(originalWidth>=maxWidth){
        warningEl.textContent=maxWaring
    }else{
        originalWidth=originalWidth+5
        let updatedWidth=originalWidth+"px"
        warningEl.textContent=""
        imageEl.style.width=updatedWidth
        widthEl.textContent=updatedWidth
    }
}