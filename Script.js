//Access all buttons
let count=0;
let allButtons=document.querySelectorAll(".seatButton");
allButtons.forEach((rakesh,index)=>{
    rakesh.addEventListener('click',()=>{
        rakesh.textContent=index+1;//To show numbers in button
        rakesh.style.backgroundColor="red";
        rakesh.disabled=true;//Disable button after once clicked
        document.querySelector("#seatNumber").value+=(index+1)+",";//value=value+",";
        count++;
        document.querySelector("#seatCount").value=count;
    });
});
//block button by dafault
document.querySelector("#bookButton").disabled=true;
//get access of checkbox
let checkbox=document.querySelector("#termAndCondition");
checkbox.addEventListener('change',()=>{
    if(checkbox.checked)
    {
        document.querySelector("#bookButton").disabled=false;
    }
    else
    {
        document.querySelector("#bookButton").disabled=true;
    }
});
//Access Book button
let bookButton=document.querySelector("#bookButton");
bookButton.addEventListener('click',()=>{
    if(document.querySelector("#termAndCondition").checked && count>0)
        alert("Ticket has been booked, you'll receive on Email");
});
//Access cancel button
let cancelButton=document.querySelector("#cancelButton");
cancelButton.addEventListener("click",()=>{
    location.reload();
});
//Dark mode Light mode
let mode=document.querySelector("#icon");
let color="Dark";
mode.onclick=()=>{
    if(color==="Dark")
        {
            document.querySelector("#grandpa").style.backgroundColor="black";
            document.querySelector("#container").style.backgroundColor="black";
            document.querySelector("h1").style.color="white";
            document.querySelector("#icon").style.color="white";
            document.querySelector("#login").style.backgroundColor="white";
            
            color="Light";
        }
        else
        {
            document.querySelector("#grandpa").style.backgroundColor="#7CB518";
            document.querySelector("#container").style.backgroundColor="blue";
            document.querySelector("h1").style.color="black";
            document.querySelector("#icon").style.color="black";
            document.querySelector("#login").style.backgroundColor="#929C28";
            color="Dark";
        }
}
