



const heading = document.getElementsByTagName('h1')[0];

heading.addEventListener("click" , function() {
    alert("sometiing")
})

const handelcreatnewtodo = (m) => {
    m.pr
    
}


document.querySelectorAll("button").forEach(function(item,index){
    item.addEventListener("click" , ()=>{
        console.log("run with inner value" , +item.innerText);
        console.log("run with index" , index);
        // document.getElementById('test').value += index +1

        const firstinput = document.getElementById("test");
        const secondinput = document.getElementById("test2");
        const equals = document.querySelector("strong");
        let isseconinputfacused = false;

        document.querySelector("span").addEventListener("click" , () =>{
            secondinput.focus();
            isseconinputfacused =true;
            // isseconinputfacused
            //  ? (document.getElementById("test2").value += index)
            //  : (document.getElementById("test").value += index)
            
        })

        if (isseconinputfacused>0) secondinput.value += index + 1;
        else document.getElementById("test").value += index +1;
        equals.addEventListener("click" , () => {
            const result = parseInt(firstinput.value) + parseInt(secondinput.value);
            equals.innerHTML += result;
        })

        

    })
})

const tostifiyelement = document.getElementById("alert");
tostifiyelement.style.display = 'none';

const tostifiyelement.style.display= "flex";
console.log("children" , tostifiyelement.children);
console.log("childNodes" , tostifiyelement.childNodes);
const tostifiy = (msg) => {
    tostifiyelement.style.right= "0%"


tostifiyelement.children[0].innerHTML = msg;
// tostifiyelement.style.display = "none"
tostifiyelement.children[1].addEventListener("click" , ( => {
    tostifiyelement.style.right = "10"
}))
setTimeout(function() {
    tostifiy.style.right = "-100%"
    
}, 3000)


}