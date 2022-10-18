var currentDay = moment().format('dddd MMMM Do YYYY');
document.getElementById('currentDay').append(currentDay);

var currentHour = moment().hour();
console.log(currentHour);

var sethourBlock = function(hourID){
    console.log(hourID)
    var hourBlock = Number.parseInt(hourID.id)
    console.log(hourBlock);
var tasks = hourID.querySelector('input')
if(hourBlock < currentHour){
    tasks.classList.add('past');
}
else if (hourBlock === currentHour){
    tasks.classList.add('present');
}
else{
    tasks.classList.add('future');
}

var saveButton = hourID.querySelector('.saveBtn')

var savedTasks = localStorage.getItem(hourBlock)

tasks.value=savedTasks

document.getElementById("saveBtn").addEventListener("click", function(){
    let taskinput=tasks.value;
    console.log(taskinput)
});


}

document.querySelectorAll('.row').forEach(sethourBlock)