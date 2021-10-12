var wrapperEle = document.body.querySelector(".wrapper")

var list = [

    {
        name: "Harry",
        age: 25
    },
    {
        name: "Larry",
        age: 15
    },
    {
        name: "Bert",
        age: 45
    },
    {
        name: "Jerry",
        age: 35
    },
    {
        name: "Berry",
        age: 5
    },
    {
        name: "Bart",
        age: 55
    }
];

function renderList(){
    wrapperEle.innerHTML="";
    for(var i=0; i<list.length; i++)
        var ele = document.createElement("div");
        var nameELe=document.createElement("h2");
        var ageEle=document.createElement("h4");
        nameELe.innerHTML="Name: "+list[i].name;
        ageEle.innerHTML="Age: "+list[i].age;


renderList();
function ageUp (age, num){
    var AgeUp = ageEle + num
}


}
for(var i=0; i<list.length; i++){
    let counterDisplayElem = document.querySelector('.counter');
    let counterPlusElem = document.querySelector("counter-plus")
     counterPlusElem =document.addEventListener("click",()=>{
        count++;

        updateDisplay();
    }) ;

    function updateDisplay(){
        counterDisplayElem.innerHTML = count;
    };



    var ele = document.createElement("div");
    var nameELe=document.createElement("h2");
    var ageEle=document.createElement("h4");
    nameELe.innerHTML="Name: "+list[i].name;
    ageEle.innerHTML="Age: "+list[i].age;
    if(list[i].age>25){
       nameELe.style.color = "green";
       ageEle.style.color = "green";
    }
    ele.appendChild(nameELe);
    ele.appendChild(ageEle);
    wrapperEle.appendChild(ele);
}

let counterDisplayElem = document.querySelector('.counter');


document.body.querySelector("button").addEventListener("click", function(){});{
    ageUp()



}