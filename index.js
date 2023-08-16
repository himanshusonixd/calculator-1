console.log("asdf")
let btn = document.querySelectorAll('.btn')
let display=document.getElementById("display")
let string="";
// make a string so it can add the integer value

function buttonCheckHandler(event){
    if(event.target.innerHTML == "="){
        string=eval(string)
        display.value=string
       }
        else if(event.target.innerHTML == "AC"){
            string=""
            display.value=string

        }
        else if(event.target.innerHTML == "DE"){

            console.log("the value inside stirng is "+string)
            console.log(typeof string +"  type of")
           
            // string.slice(0,-1)
            let newstring= string.slice(0,-1)
            string=newstring;
            display.value=string

        
        }

        else{
            string=string+event.target.innerHTML
            display.value=string
        }


        console.log(event.target.innerHTML)
        console.log(display)

       

}



let arr= Array.from(btn);

arr.forEach((button)=>{
    button.addEventListener('click',buttonCheckHandler)
})

console.log(arr)



