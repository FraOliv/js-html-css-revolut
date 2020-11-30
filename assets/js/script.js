$(document).ready(

//inserisco funzionalità per far si che il menù a tendina appaia quando vado col cursore sul menù.
    function() {
      $(".parent-dropdown").hover(function() {
        $(this).find('ul').slideToggle();
      });
    }
  );
  