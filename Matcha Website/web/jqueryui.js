$(function () {
    $("input").checkboxradio({
        icon: false
    });
})

  $( function() {
    $( "#dialog" ).dialog({
        autoOpen: false,
        height: 80,
        width: 315,
      show: {
        effect: "blind",
        duration: 100
      }  
    });
  });

$(function () {
    $("#dialog2").dialog({
        autoOpen: false,
        height: 80,
        width: 315,
        show: {
            effect: "blind",
            duration: 100
        }
    });
});