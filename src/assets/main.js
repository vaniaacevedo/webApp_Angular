$(document).ready(function () {

navigator.geolocation.getCurrentPosition(function(pos){
  console.log(pos)
})

$(".navbar-nav li a").click(function(event) {
$(".navbar-collapse").collapse('hide');
});

$("#button").click(function(event) {
$(".navbar-collapse").collapse('hide');
});

});
