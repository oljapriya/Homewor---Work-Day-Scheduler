var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));

$(document).ready (function() {
  $(".saveBtn").on("click", function() {
    var text = $(this).siblings(".future").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, text);
  })
  
  function timeTracker() {
    var timeNow = moment().hour();

    $(".time-block").each(function () {
      var blockTime = parseInt($(this).attr("id").split("hour")[1]);

      if (blockTime < timeNow) {
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
      }
      else if (blockTime === timeNow) {
        $(this).removeClass("past");
        $(this).removeClass("future");
        $(this).addClass("present");
      }
      else {
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");
      }
    })
  }

  $("#hour7 .future").val(localStorage.getItem("hour7"));
  $("#hour8 .future").val(localStorage.getItem("hour8"));
  $("#hour9 .future").val(localStorage.getItem("hour9"));
  $("#hour10 .future").val(localStorage.getItem("hour10"));
  $("#hour11 .future").val(localStorage.getItem("hour11"));
  $("#hour12 .future").val(localStorage.getItem("hour12"));
  $("#hour13 .future").val(localStorage.getItem("hour13"));
  $("#hour14 .future").val(localStorage.getItem("hour14"));
  $("#hour15 .future").val(localStorage.getItem("hour15"));

  timeTracker();
})