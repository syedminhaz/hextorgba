let value;

// value = window;
// value = document;
// value = document.all;
// value = document.all[3];
// value = document.all[10];
// value = document.all.length;
// value = document.body;
// value = document.doctype;
// value = document.domain;
// value = document.URL;
// value = document.characterSet;//UTF - 8
// value = document.contentType;
// value = document.forms;
// value = document.forms[1];
// value = document.forms[1].method;
// value = document.forms[0].action;

// value = document.links;
// value = document.links[1];
// value = document.links[0].className;
// value = document.links[0].classList;
// value = document.images;
// value = document.scripts;

// console.log(value)

// let animeName= ['Aot', 'Yn', 'Ds', 'Naruto']

// console.log(animeName)
// console.log(animeName.indexOf('Ds'))





// value = document.links;

// console.log(value)

// let arrLinks = Array.from(value)

// arrLinks.forEach(function(arrLinks){
//     console.log(arrLinks)
// })

// // document.getElement
// // document.queryselector

// value = document.getElementById('title')
// value = document.getElementById('title').id

// document.getElementById('title').style.
// color = '#fff'

// document.getElementById('title').style.
// background = 'blue'

// value = document.getElementById('title').style

// value.color = '#ddd'
// value.background = '#5C00FF'
// value.padding = '15px'
// value.textAlign = 'center'

// value = document.getElementById('title');

// value.textContent = 'This is text content'
// value.innerText = 'This is inner text'
// value.innerHTML= '<i>Document Object Model</i>'

// //query selector

// value = document.querySelector('ol li:nth-child(3)').style

// value.color = '#22202E'

// console.log(value)


// //<-------------getElementsByName--------->
// //<------------queryselectorAll----------->

// value = document.getElementsByClassName('dom-class')

// value[2].style.color ='#22202E'

// let arrayDom = Array.from(value)

// arrayDom.forEach(function(item){
//     console.log(item)
// })

// value = document.querySelectorAll('.form')

// let arrayDom2 = Array.from(value)

// arrayDom2.forEach(function(item){
//     item.style.color = '#4D00FF'
// })

// let vio;
// let blue;
// let domtravesing;
// let sky;
// let cyan;

// vio = document.querySelector('ol')
// domtravesing = document.querySelector('ol')
// blue = document.querySelector('ol')
// sky = document.querySelector('ol')
// cyan = document.querySelector('ol')

// value = vio.children[0].style.background = '#B06ADF';
// value = domtravesing.childNodes;
// value = domtravesing.children[1].style.background = '#64DBD9';
// value = blue.children[2].style.background = '#5E8DDD';
// value = sky.children[3].style.background = '#10C2F4';
// value = cyan.children[4].style.background = '#ED9AD3';


// console.log(value)


// let unlist;
// let unlink;

// unlist = document.createElement('li') 
// unlink = document.createElement('a')

// unlink.setAttribute('href', 'https://nevermind.com')
// unlink.appendChild(document.createTextNode('NevenTheLess'))

// unlist.appendChild(unlink)

// document.querySelector('.nvm').appendChild(unlist)

// unlist.className = 'tvm'

// console.log(unlist)


// let newHead = document.createElement("h1")
// newHead.appendChild(document.createTextNode('Document Object Model'))

// let oldHead = document.querySelector("h2")

// let parentTag = document.querySelector(".title")

// parentTag.replaceChild(newHead, oldHead)

// console.log(newHead)
// console.log(oldHead)
// console.log(parentTag)

// let ulList = document.querySelectorAll('li') 


// ulList[0].remove()
// ulList[6].remove()
// ulList[8].remove()

// console.log(ulList)



// document.getElementById('btn').addEventListener('dblclick', alertMessage)

// function alertMessage(){
//     console.log('Hi w3codevs')
// }


// document.querySelector('#btn').addEventListener('mouseover', alertMessage)

// document.querySelector('#btn').style.background = '#000'


// function alertMessage(event){
//     let value = event;
//     value = event.target;
//     value = event.target.id;
//     value = event.timeStamp;
//     // value = event.type;

//     // value = event.clientX;
//     // value = event.clientY;

//     // value = event.offsetX;
//     // value = event.offsetY;

//     // value = this;

//     // this.style.background = `#${event.offsetX}`

//     console.log(value)
// }

// document.querySelector('.fname').addEventListener('focus', onfocus)

// document.querySelector('.fname').addEventListener('keyup', onfocus2)


// function onfocus(event){
//     this.style.background = '#129dc9'
// }

// function onfocus2(event){
//    document.querySelector('.content').innerText = this.value
// }

// let result = document.querySelector('.result')

// let action = document.querySelector('.action')

// action.onclick = function(){
//     let ludu = Math.ceil(Math.random()*50)
//     result.innerHTML = ludu;
// }



// console.log(result)
// console.log(action)


// document.querySelector('.fullB').addEventListener('mouseover', alertMessage)

// document.querySelector('.container')

// function alertMessage(event){
//     this.style.background = `#${event.offsetX}`
// }

// let time = document.querySelector('.disTime')

// function setTime(){
//     let todayTime = new Date

//     time.innerHTML = `${todayTime.getHours() - 12} : ${todayTime.getMinutes()} : ${todayTime.getSeconds()} `
// }

// setInterval(setTime, 1000)

var input = document.querySelector(".colorVal")
var convert = document.querySelector(".convert")
var reset = document.querySelector(".reset")
var red = document.querySelector(".r")
var green = document.querySelector(".g")
var blue = document.querySelector(".b")
var preview = document.querySelector(".result")


convert.addEventListener("click", ()=>{
    
    var v = input.value;

    var rex = /#([0-9A-F]{1,2})([0-9A-F]{1,2})([0-9A-F]{1,2})/i;

    if(v.length === 4 || v.length === 7){
        var output = rex.exec(v)
        if(output === null){
            alert `Not a valid color`
        }else{
            red.value = `${getColorValue(output[1])}`
            green.value = `${getColorValue(output[2])}`
            blue.value = `${getColorValue(output[3])}`
            preview.style.background = v;
        }

    }else{
        rvalue.innerHTML = 'Not a valid color'
    }
})

function getColorValue(hex){
    if(hex.length === 1){
        hex = hex + hex
    }
    return parseInt(hex, 16)
}

reset.addEventListener('click', ()=>{
    input.value = "";
    red.value= "";
    green.value= "";
    blue.value= "";
    preview.style.background = "#FFF";
})



