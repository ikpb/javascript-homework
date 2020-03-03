let numb1 = $('#num1');
let numb2 = $('#num2');
let totals = $('#sum');
let skills = $("select[name='skills']")[0];

loadEventListeners();

function loadEventListeners(){
    numb1.change(function(){getNumber1()});
    numb2.change(function(){getNumber2()});
    skills.addEventListener("change", alertSkillType);
}

// 6. Sum Event
// NOTE: Write unobtrusive Javascript
// Regarding these elements:
// 	<input id="num1" class="nums" type="text"/>
// 	<input id="num2" class="nums" type="text"/>
// 	<h3>Sum: <span id="sum"></span></h3>
function getNumber1(){
    let numba1 = parseInt(numb1.val());
    if(isNaN(getNumber2())){
        totals.text("Cannot Add");
    }else{
    let totalls = numba1 + getNumber2();
    console.log(totalls);
    totals.text(totalls);
        return numba1;
    }    
}
function getNumber2(){
    let numba2 = parseInt(numb2.val());
    console.log(numba2);
    return numba2;
}


// 7. Skills Event
// NOTE: Write unobtrusive Javascript
// When user selects a skill, create an alert with a message similar to:
// 	"Are you sure CSS is one of your skills?"
// NOTE: no alert should appear when user deselects a skill.
function alertSkillType(e){
    alert (`Are you sure ${e.target.value} is one of your skills?`);
    
    
}