$(function () {
  let total = $(".panel li").length;
  console.log(total);

  $(".arr li:nth-child(2) span:last-child").text(total);
  let i = 0;
  let stop;

  start();
  function fade() {
    $(".panel li").fadeOut();
    $(".panel li").eq(i).fadeIn();
    $(".navi li").removeClass("on");
    $(".navi li").eq(i).addClass("on");
    $(".arr li:nth-child(2) span:first-child").text(i + 1);
    let bar = 25 * (i + 1);
    $(".bar2 > div").animate({ width: `${bar}%` });
  }
  //   let stop;
  function start() {
    stop = setInterval(function () {
      if (i == total - 1) {
        i = 0;
      } else {
        i++;
      }

      fade();
    }, 2000);
  }

  $(".next").on("click", function () {
    clearInterval(stop);
    if (i == total - 1) {
      i = 0;
    } else {
      i++;
    }
    fade();
    start();
  });
  $(".prev").on("click", function () {
    clearInterval(stop);
    if (i == 0) {
      i = total - 1;
    } else {
      i--;
    }
    fade();
    start();
  });

  $(".navi li").on("click", function () {
    clearInterval(stop);
    i = $(this).index();
    fade();
    start();
  });
});
