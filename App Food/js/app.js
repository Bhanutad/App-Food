document.addEventListener('init', function (event) {
  var page = event.target;
  console.log(page.id);

  //main
  if (page.id === "tabbar") {
    $("#menubtn").click(function () {
      var menu = document.getElementById('menu');
      menu.open();
    });
  }

  // click from home to side mainmenu
  if (page.id === "sidemenu") {
    $("#homebtn").click(function () {
      var content = document.getElementById('content');
      var menu = document.getElementById('menu');
      content.load('tabbar.html')
        .then(menu.close.bind(menu));
    });
    $("#loginbtn").click(function () {
      var content = document.getElementById('content');
      var menu = document.getElementById('menu');
      content.load('login.html')
        .then(menu.close.bind(menu));
    });
    $("#settingbtn").click(function () {
      var content = document.getElementById('content');
      var menu = document.getElementById('menu');
      content.load('setting.html')
        .then(menu.close.bind(menu));
    });
  }

  //click signup from login to regis
  if (page.id === "login") {
    $("#regis").click(function () {
      var content = document.getElementById('content');
      content.load('register.html')
    });
  }

  //click signup from regis to home
  if (page.id === "register") {
    $("#signup").click(function () {
      var content = document.getElementById('content');
      content.load('tabbar.html')
    });
  }

  //click back from regis to login
  if (page.id === "register") {
    $("#backtologin").click(function () {
      var content = document.getElementById('content');
      content.load('login.html')
    });
  }

  //click signup from regis to home
  if (page.id === "login") {
    $("#login").click(function () {
      var content = document.getElementById('content');
      content.load('tabbar.html')
    });
  }
  // save from setting
  if (page.id === "setting") {
    $("#save").click(function () {
      var content = document.getElementById('content');
      content.load('tabbar.html')
    });
  }
  // click from food category
  if (page.id === "home") {
    $("#clickfood").click(function () {
      var content = document.getElementById('content');
      content.load('fastfood.html')
    });
    $("#clickbav").click(function () {
      var content = document.getElementById('content');
      content.load('baverage.html')
    });
    $("#clickdessert").click(function () {
      var content = document.getElementById('content');
      content.load('dessert.html')
    });
    $("#clicklocal").click(function () {
      var content = document.getElementById('content');
      content.load('local.html')
    });
  }

   //click back from food of each category to home
    $("#backtohome").click(function () {
      var content = document.getElementById('content');
      content.load('tabbar.html')
    });

    //click kfc
    $("#kfc").click(function () {
      var content = document.getElementById('content');
      content.load('kfc.html')
    });

    //click starbuck
    $("#starbuck").click(function () {
      var content = document.getElementById('content');
      content.load('starbuck.html')
    });

    //click pizza
    $("#pizza").click(function () {
      var content = document.getElementById('content');
      content.load('pizza.html')
    });

    //click dessert
    $("#dessert").click(function () {
      var content = document.getElementById('content');
      content.load('dessert.html')
    });
    $("#dessertclick").click(function () {
      var content = document.getElementById('content');
      content.load('dessertaffame.html')
    });

    //click k pink
    $("#kpink").click(function () {
      var content = document.getElementById('content');
      content.load('khaokang.html')
    });

    //back to fastfood
    $("#backtofastfood").click(function () {
      var content = document.getElementById('content');
      content.load('fastfood.html')
    });

    //back to bav
    $("#backtobav").click(function () {
      var content = document.getElementById('content');
      content.load('baverage.html')
    });

    //back to dessert
    $("#backtodessert").click(function () {
      var content = document.getElementById('content');
      content.load('dessert.html')
    });

    //back to kpink
    $("#backtolocal").click(function () {
      var content = document.getElementById('content');
      content.load('local.html')
    });

    //payment
    $("#payment").click(function () {
      var content = document.getElementById('content');
      content.load('payment.html')
    });
    $("#backtocart").click(function () {
      var content = document.getElementById('content');
      content.load('tabbar.html')
    });
    $("#ok").click(function () {
      var content = document.getElementById('content');
      content.load('tabbar.html')
    });
});