let numb1 = document.getElementById('num1');
let numb2 = document.getElementById('num2');
let totals = document.getElementById('sum');
let skills = document.getElementsByTagName('select').skills;
let emplyname = document.getElementsByClassName('empName')[0].parentElement.parentElement;
let elloworld = document.getElementById('helloWorld');
let favcolor = document.querySelector('input[name="favoriteColor"]').parentElement;

loadEventListeners();

function loadEventListeners(){
    numb1.addEventListener('change', getNumber1);
    numb2.addEventListener('change', getNumber2);
    skills.addEventListener("change", alertSkillType);
    emplyname.addEventListener("click", empNameHideNSeek);
    elloworld.addEventListener("click", delayColorChange);
    favcolor.addEventListener("change", radioColor);

}


// 6. Sum Event
// NOTE: Write unobtrusive Javascript
// Regarding these elements:
// 	<input id="num1" class="nums" type="text"/>
// 	<input id="num2" class="nums" type="text"/>
// 	<h3>Sum: <span id="sum"></span></h3>

function getNumber1(){
    let numba1 = parseInt(numb1.value);
    if(isNaN(getNumber2())){
        totals.textContent=`Cannot add`
    }else{
    let totalls = numba1 + getNumber2();
    console.log(totalls);
    totals.textContent=`${totalls}`;
        return numba1;
    }

    
}
function getNumber2(){
    let numba2 = parseInt(numb2.value);
    return numba2;
}
function alertSkillType(e){
    alert (`Are you sure ${e.target.value} is one of your skills?`);
    
}

// 9. Show/Hide Event
// NOTE: Write unobtrusive Javascript
// When user hovers over an employees name:
// 	Hide the name if shown.
// 	Show the name if hidden.

function empNameHideNSeek(e){
    if(e.target.classList.contains('empName')){
        e.target.parentElement.classList.add('visible');
        if(e.target.parentElement.classList.contains("visible")){
        e.target.style.visibility = "hidden"
        e.target.parentElement.classList.remove('visible');
        e.target.parentElement.classList.add('hidden');
    }else if(e.target.parentElement.classList.contains('hidden')){
        e.target.style.visibility = "visible";
        e.target.parentElement.classList.remove('hidden');
    }
}else{if(e.target.parentElement.classList.contains("visible")){
    e.target.style.visibility = "hidden"
    e.target.parentElement.classList.remove('visible');
    e.target.parentElement.classList.add('hidden');
}else if(e.target.parentElement.classList.contains('hidden')){
    e.target.style.visibility = "visible";
    e.target.parentElement.classList.remove('hidden');
}
}
}
// 11. Delay
// Regarding this element:
// 	<p id="helloWorld">Hello, World!</p>
// Three seconds after a user clicks on this element, change the text to a random color.
function delayColorChange(e){
    setTimeout(randomColor,3000)
    
    e.preventDefault();
}
function randomColor(){
    let randomColors ='#'+Math.floor(Math.random()*16777215).toString(16);
   elloworld.style.color = randomColors;
   console.log(elloworld);
}
// 8. Favorite Color Event
// NOTE: Write unobtrusive Javascript
// NOTE: This is regarding the favoriteColor radio buttons.
// When a user selects a color, create an alert with a message similar to:
// 	"So you like green more than blue now?"
// In this example, green is the new value and blue is the old value.
// Make the background color (of all favoriteColor radio buttons) the newly selected favoriteColor
function radioColor(e){
    if(e.target.getAttribute('name')==='favoriteColor'){
        e.target.setAttribute('checked', 'checked');
        console.log(favcolor);
        console.log(e.target);
        console.log(e.target.checked );
    }   
    
    e.preventDefault();

}