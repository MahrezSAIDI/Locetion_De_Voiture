$(document).ready(function(){
    $("#flip1").click(function(){
      $("#panel1").slideToggle("slow");
    });

    $("#flip2").click(function(){
        $("#panel2").slideToggle("slow");
      });

      $("#flip3").click(function(){
        $("#panel3").slideToggle("slow");
      });
  });

document.addEventListener('DOMContentLoaded', function() {
    var bouton = document.getElementById('parcourir');
    if (bouton) {
        bouton.addEventListener('click', function() {
            window.location.href = 'reservation.html';
        });
    } else {
        console.error('L\'élément avec l\'ID "parcourir" n\'a pas été trouvé.');
    }
});
