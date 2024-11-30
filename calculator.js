let para  = document.querySelector(".para");
let btns = document.querySelectorAll("button");
let modeBtn = document.querySelector("#mode");
let calField = document.querySelector(".cal");
let del = document.querySelector("#del");
let prv = "0";

function appendToDisplay(value) {
    del.disabled=false;
    let n=para.innerText.length;
    if(para.innerText==0)
    {
        if(value=='+' || value=='-' || value=='*'|| value=='/')
        {
         para.innerText+=value;
        }   

        else
        {
            para.innerText = value;
        }
    }
    else
    {
    para.innerText+=value;
    }
    removeMultipleOperator(value,n);
    
}

function removeMultipleOperator(value,n){
    if(para.innerText[n-1] =='+' || para.innerText[n-1]=='-' || para.innerText[n-1]=='*'|| para.innerText[n-1]=='/'){
        if(value=='+' || value=='-' || value=='*'|| value=='/'){

            
            para.innerText=para.innerText.slice(0,n-1) + value ;
        }
    }
}
function clearOne(){
    let n = para.innerText.length;
    para.innerText = para.innerText.slice(0,n-1);
    if(para.innerText==""){

        para.innerText="0";
    }
}

function disableBtn(){
 for(let i = 0 ;i<btns.length-2;i++){
    btns[i].disabled=true;
 }
}

function enableBtn(){
    for(let btn of btns){
        btn.disabled=false;
    }
}

function clearDisplay() {
para.innerText='0';
enableBtn();
del.disabled=false;
}

function calculate() {
        para.innerText = eval(para.innerText);
        del.disabled = true;
    }

// code for changing mode button

let mode="dark";
function changeMode(){
    if(mode=="light"){
        mode="dark";
        document.body.style.background="black";
        calField.style.background="   rgb(201, 7, 7)";
        modeBtn.style.color="white";
        modeBtn.style.background="black";


        
    }
       else{
        mode="light";
        modeBtn.style.background="white";
        modeBtn.style.color="black";
        calField.style.background="black";
        document.body.style.background="white";
       }
    }
modeBtn.addEventListener("click",changeMode);