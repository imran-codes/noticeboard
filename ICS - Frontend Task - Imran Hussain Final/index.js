// COLLAPSIBLE 
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

///////////////////////////////////////////////////////////////////////////
// REMIND ME SECTION
// add value of search bar to list 
$("input[type='text']").keypress(function(event){
  //if they press enter then submit
	if(event.which === 13){
		//grabbing new todo from text input
		var todoText = $(this).val();
		$(this).val("");
		//create a new listcontainer div and add to bottom
		$(".listitems").append('<div id = "listcontainer" id="remindme" style="margin-right: 10px;"><input type="checkbox"><label>' + todoText + '</label></div>')
	}
});

////////////////////////////////////////////////////////////////////////////
//ADD MILESTONE IMAGE  
var balloon = '<img src="assets/milestone_bg@2x.webp" style="float: left;height: 56px; padding-top:15px">';
$("#balloon").prepend(balloon);

//////////////////////////////////////////////////////////////////////////////
//ADD TOURNAMENT MODAL

var tmodal = document.getElementById("mytournamentmodal");
var tournamentbtn = document.getElementById("tournament");
var tournamentspan = document.getElementsByClassName("tournamentclose")[0];

// Open the tournament modal on click
tournamentbtn.onclick = function() {
  tmodal.style.display = "block";
}

//close button clicked on tournamentpopup 
tournamentspan.onclick = function() {
  tmodal.style.display = "none";
}

// When the user clicks anywhere outside of the tournament modal, close it
window.onclick = function(event) {
  if (event.target == tmodal) {
    tmodal.style.display = "none";
  }
}

//////////////////////////////////////////////////////////////////////////////
//ADD ANNIVERSARY MODAL

var amodal = document.getElementById("myanniversarymodal");
var anniversarybtn = document.getElementById("balloon");
var anniversaryspan = document.getElementsByClassName("anniversaryclose")[0];

// Open the tournament modal on click
anniversarybtn.onclick = function() {
  amodal.style.display = "block";
}

//close button clicked on tournamentpopup 
anniversaryspan.onclick = function() {
  amodal.style.display = "none";
}

// When the user clicks anywhere outside of the tournament modal, close it
window.onclick = function(event) {
  if (event.target == amodal) {
    amodal.style.display = "none";
  }
}





