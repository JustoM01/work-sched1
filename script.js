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
}

document.querySelectorAll('.row').forEach(sethourBlock)