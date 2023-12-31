$(document).ready(function () {
    $('#login-btn').on('click', function () {
        const enteredUsername = $('#username').val();
        const enteredPassword = $('#password').val();
        if (!isValidEmail(enteredUsername)) {
            $("#emailError").text("Invalid email address");
            if (!isValidPassword(enteredPassword)) {
                $("#passwordError").text("Password must be 6-12 characters with 1 uppercase and 1 special character");
                return;
            } else {
                $("#passwordError").text("");
            }
            return;
        } else {
            $("#emailError").text("");
            if (!isValidPassword(enteredPassword)) {
                $("#passwordError").text("Password must be 6-12 characters with 1 uppercase and 1 special character");
                return;
            } else {
                $("#passwordError").text("");
            }
        }

    // Validate password
    if (!isValidPassword(enteredPassword)) {
      $("#passwordError").text(
        "Password must be 6-12 characters with atleast 1 uppercase and 1 special character"
      );
      return;
    } else {
      $("#passwordError").text("");
    }
    localStorage.setItem("username", enteredUsername);
    localStorage.setItem("loggedIn", "true");
    window.location.href = "dashboard.html";
  });

  $("#logout-btn").on("click", function () {
    clearLocalStorage();
    window.location.href = "index.html";
  });

  $.fn.boom = function (e) {
    var colors = [
      "#ffb3f6",
      "#7aa0ff",
      "#333",
      // '#FFD100',
      // '#FF9300',
      // '#FF7FA4'
    ];
    var shapes = [
      '<polygon class="star" points="21,0,28.053423027509677,11.29179606750063,40.97218684219823,14.510643118126104,32.412678195541844,24.70820393249937,33.34349029814194,37.989356881873896,21,33,8.656509701858067,37.989356881873896,9.587321804458158,24.70820393249937,1.0278131578017735,14.510643118126108,13.94657697249032,11.291796067500632"></polygon>',
      // '<path class="circle" d="m 20 1 a 1 1 0 0 0 0 25 a 1 1 0 0 0 0 -25"></path>',
      '<polygon class="other-star" points="18,0,22.242640687119284,13.757359312880714,36,18,22.242640687119284,22.242640687119284,18.000000000000004,36,13.757359312880716,22.242640687119284,0,18.000000000000004,13.757359312880714,13.757359312880716"></polygon>',
      '<polygon class="diamond" points="18,0,27.192388155425117,8.80761184457488,36,18,27.19238815542512,27.192388155425117,18.000000000000004,36,8.807611844574883,27.19238815542512,0,18.000000000000004,8.80761184457488,8.807611844574884"></polygon>',
    ];

    var btn = $(this);
    var group = [];
    var num = Math.floor(Math.random() * 50) + 30;

    for (i = 0; i < num; i++) {
      var randBG = Math.floor(Math.random() * colors.length);
      var getShape = Math.floor(Math.random() * shapes.length);
      var c = Math.floor(Math.random() * 10) + 5;
      var scale = Math.floor(Math.random() * (8 - 4 + 1)) + 4;
      var x = Math.floor(Math.random() * (150 + 100)) - 100;
      var y = Math.floor(Math.random() * (150 + 100)) - 100;
      var sec = Math.floor(Math.random() * 1700) + 1000;
      var cir = $('<div class="cir"></div>');
      var shape = $('<svg class="shape">' + shapes[getShape] + "</svg>");

      shape.css({
        top: e.pageY - btn.offset().top + 20,
        left: e.pageX - btn.offset().left + 40,
        transform: "scale(0." + scale + ")",
        transition: sec + "ms",
        fill: colors[randBG],
      });

      btn.siblings(".btn-particles").append(shape);

      group.push({ shape: shape, x: x, y: y });
    }

    for (var a = 0; a < group.length; a++) {
      var shape = group[a].shape;
      var x = group[a].x,
        y = group[a].y;
      shape.css({
        left: x + 50,
        top: y + 15,
        transform: "scale(0)",
      });
    }

    setTimeout(function () {
      for (var b = 0; b < group.length; b++) {
        var shape = group[b].shape;
        shape.remove();
      }
      group = [];
    }, 2000);
  };

  $(function () {
    $(document).on("click", ".animation-btn", function (e) {
      $(this).boom(e);
    });
  });


    $('#googleModal').on('show.bs.modal', function () {
        $(this).find('.modal-dialog').removeAttr('style');
    });
    $('#logout-btn').on('click', function () {
        clearLocalStorage();
        window.location.href = 'index.html';
    })

    var initialScale = 1;

    // Set up mouseenter event
    $("#zoom-container").mouseenter(function() {
        // Increase the scale on mouseover
        $(".bg-login-image").css("transform", "scale(1.8)");
    });

    // Set up mouseleave event
    $("#zoom-container").mouseleave(function() {
        // Reset the scale on mouseout
        $(".bg-login-image").css("transform", "scale(" + initialScale + ")");
    });

    // Get the initial scale value after the image has loaded
    $(".bg-login-image").on("load", function() {
        initialScale = $(this).width() / $("#zoom-container").width();
    });
    $("#loading-screen").fadeIn();
    
    // Simulate a delay (you can replace this with your actual loading logic)
    setTimeout(function() {
        // Hide the loading screen when your content is ready
        $("#loading-screen").fadeOut();
    }, 1000); // Adjust the delay time as needed
    // Function to validate email format
    function isValidEmail(email) {
        // Use a regular expression for basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Function to validate password length
    function isValidPassword(password) {
        const passwordRegex = /^(?=.*[A-Z])(?=.*[^A-Za-z0-9]).{6,12}$/;
        return passwordRegex.test(password);
    }
});

function clearLocalStorage() {
  localStorage.setItem("username", null);
  localStorage.setItem("loggedIn", "false");
}
function checkLoggedIn() {
  // Assuming you have a key named 'isLoggedIn' in localStorage
  const isLoggedIn = localStorage.getItem("loggedIn");
  console.log("isLoggedIn", isLoggedIn);
  if (isLoggedIn === "true") {
    // User is logged in, redirect to the dashboard
    window.location.href = "dashboard.html"; // Change the URL to your dashboard page
  } else {
    window.locationhref = "index.html";
  }
}
