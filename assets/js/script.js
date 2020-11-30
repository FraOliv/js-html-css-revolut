$(document).ready(
    function() {
      $(".parent-dropdown").click(function() {
        $(this).find('ul').slideToggle();
      });
      $(".parent-dropdown").click(
        function() {
          $(this).find("i").removeClass("fa-chevron-down");
          $(this).find("i").addClass("fa-chevron-up");
  
        },
        function() {
          $(this).find("i").removeClass("fa-chevron-down");
          $(this).find("i").addClass("fa-chevron-up");
          $(this).find("i").removeClass("fa-chevron-up");
          $(this).find("i").addClass("fa-chevron-down");
        },
      );
    }
  );
  