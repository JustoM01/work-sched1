var currentDay = moment().format('dddd MMMM Do YYYY');
document.getElementById('currentDay').append(currentDay);

var currentHour = moment().hour();
console.log(currentHour);

var sethourBlock = function(hourID){
    console.log(hourID)
    var hourBlock = Number.parseInt(hourID.id)
    console.log(hourBlock);


}

document.querySelectorAll('.row').forEach(sethourBlock)