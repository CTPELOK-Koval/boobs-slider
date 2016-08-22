$(document).ready(function() {
  $(".slider").each(function () {
    var obj = $(this);
    $(obj).append("<div class='nav'></div>");
    $(obj).find(".slider__item").each(function () {
      $(obj).find(".nav").append("<span rel='"+$(this).index()+"'></span>");
      $(this).addClass("slider"+$(this).index());
    });
    $(obj).find("span").first().addClass("active");
  });
});
function sliderJS (obj, sl) {
  var ul = $(sl).find(".slider__ul");
  var bl = $(sl).find("li.slider"+obj);
  $(".slider__ul").animate({marginLeft: "-"+$(bl).width()*obj}, 500);

}


$(document).on("click", ".slider .nav span", function() {
  var sl = $(this).closest(".slider");
  $(sl).find("span").removeClass("active");
  $(this).addClass("active");
  var obj = $(this).attr("rel");
  sliderJS(obj, sl);
  return false;
});