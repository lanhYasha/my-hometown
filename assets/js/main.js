////------------------------------------------------------    heading slides block  -------------------------
$('.headingSide').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1000,
});


//------------------------------------------------------    festival block  ----------------------------


$('.festivalSlide').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true
});

//------------------------------------------------------	recommend block-----------------------------
var $ = document.querySelector.bind(document)
var $$ = document.querySelectorAll.bind(document)
var seasons = $$('.recommend_items')
var desALL = $$('.listDes')
seasons.forEach((season, index) => {
  var des = desALL[index]
  season.onclick = function () {
    $('.recommend_items.active').classList.remove('active')
    $('.listDes.selected').classList.remove('selected')
    this.classList.add('active')
    des.classList.add('selected')
  }
})
//------------------------------------------------------ items of recommend block -------------------------
var imageSources1 = ["assets/img/rec01.jpg", "assets/img/rec01_1.jpg", "assets/img/rec01_2.jpg", "assets/img/rec01_3.jpg"];
var a = 0;
setInterval(function () {
  var imageLength = imageSources1.length;
  if (a >= imageLength) {
    a = 0;
  }
  document.getElementById("listDes01").src = imageSources1[a];
  a++;
}, 2000);

//---------------------------------------------------------------------
var imageSources2 = ["assets/img/rec02.jpg", "assets/img/rec02_1.jpg", "assets/img/rec02_2.jpg", "assets/img/rec02_3.jpg"];
var b = 0;
setInterval(function () {
  var imageLength2 = imageSources2.length;
  if (b >= imageLength2) {
    b = 0;
  }
  document.getElementById("listDes02").src = imageSources2[b];
  b++;
}, 2000);
//---------------------------------------------------------------------
var imageSources3 = ["assets/img/rec03.jpg", "assets/img/rec03_1.jpg", "assets/img/rec03_2.jpg", "assets/img/rec03_3.jpg"];
var c = 0;
setInterval(function () {
  var imageLength3 = imageSources3.length;
  if (c >= imageLength3) {
    c = 0;
  }
  document.getElementById("listDes03").src = imageSources3[c];
  c++;

}, 2000);
//---------------------------------------------------------------------
var imageSources4 = ["assets/img/rec04.jpg", "assets/img/rec04_1.jpg", "assets/img/rec04_2.jpg", "assets/img/rec04_3.jpg"];
var d = 0;
setInterval(function () {
  var imageLength4 = imageSources4.length;
  if (d >= imageLength4) {
    d = 0;
  }
  document.getElementById("listDes04").src = imageSources4[d];
  d++;

}, 2000);






