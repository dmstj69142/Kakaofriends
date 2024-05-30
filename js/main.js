// 판 펼치기 
$('.ham_box').click(function() {
  $('.pan').css('left', 0);
})

$('.pan_close_btn').click(function() {
  $('.pan').css('left', '-100%');
})

// header 고정
window.addEventListener('scroll', function() {
    let window_scrollTop = $(window).scrollTop();
    let window_h = $(window).innerHeight();
    if (window_scrollTop > window_h / 5) {
        $('.header').css("opacity", "1")
    }
    else {
        $('.header').css("opacity", "0")
    }
})
// 판 펼치기 
$('.ham_box').click(function() {
    $('.pan').css('left', 0);
})

$('.pan_close_btn').click(function() {
    $('.pan').css('left', '-100%');
})

// main_banner
$('.plus_btn').click(function() {
  $('.banner_pan').toggleClass('display')
  $('.plus_btn').toggleClass('back_btn')
})

var current = 0;
var setIntervalId;
$('.indi_box > .btn').eq(0).addClass("on");
timer();

function timer() {
  
  setIntervalId = setInterval(function() {
    var n = current + 1;
    if (n == 6) {
      n=0;
    }
    move(n);
  }, 3000)

  return false;
}

function move(i) {
  var currentEl = $('.main_banner > img').eq(current);
  var nextEl = $('.main_banner > img').eq(i);

  currentEl.css({left: "0%"}).animate({left: "-100%"});
  nextEl.css({left: "100%"}).animate({left: "0%"});
  current = i;

  $('.indi_box > .btn').removeClass("on");
  $('.indi_box > .btn').eq(i).addClass("on");
}
function move_left(i) {
  var currentEl = $('.main_banner > img').eq(current);
  var prevEl = $('.main_banner > img').eq(i);

  currentEl.css({left: "0%"}).animate({left: "100%"});
  prevEl.css({left: "-100%"}).animate({left: "0%"});
  current = i;

  $('.indi_box > .btn').removeClass("on");
  $('.indi_box > .btn').eq(i).addClass("on");
}

$('.main_banner > .right').click(function() {
  var n = current + 1;
  if (n == 6) {
    n=0;
  }
  move(n);
})

$('.main_banner > .left').click(function() {
  var n = current - 1;
  if (n == 6) {
    n=0;
  }
  move_left(n);
})

$('.main_banner').on({
  mouseover: function() {
    clearInterval(setIntervalId);
  },
  mouseout: function() {
    timer();
  }
});

// $('.main_banner > img').click(function (e) {
//   e.preventDefault();
//   var i = $(this).index();
//   move(i);
// });

$('.indi_box > .btn').click(function(e) {
  e.preventDefault();
  var i = $(this).index();
  console.log(current)
  console.log($(this).index())
  if (current > i ) {
    move_left(i)
  }
  else if (current < i) {
    move(i);
  }
  else if (current == i) {
    e.preventDefault();
  }
})


// new 
const swiper1 = new Swiper('#swiper1', {
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 2000
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
for (let i=0; i<6; i++) {
    let new_swiper = `<div class="new_item">
                        <img src="${new_item[i].img}" alt="newitem${i+1}">
                        <div class="item_txt">${new_item[i].name}<h3>${numberWithCommas(new_item[i].price)}</span>원</div>
                    </div>`
                    
    $('.new_item_box').append(new_swiper);
}

// best
for (let i=0; i<10; i++) {
  let best_swiper = `<div class="best_item swiper-slide"><a href="./detail.html">
                      <div class="best_img_box"><img src="${best_item[i].img}" alt="best_item${i+1}"></div>
                      <div class="best_txt"><h3>${numberWithCommas(best_item[i].price)}원</h3>${best_item[i].name}</div>
                      <div class="best_num">${i+1}</div>
                    </a></div>`
  $('.best_swiper').append(best_swiper);
}
const swiper2 = new Swiper('#swiper2', {
  direction: 'horizontal',
  loop: false,
  autoplay: {
      delay: 1000
  },
  slidesPerView: 5,
  spaceBetween : 10,
  navigation: {
    nextEl: '.best_box .swiper-button-next',
    prevEl: '.best_box .swiper-button-prev',
  },
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: 'boolean'
  },
  breakpoints: {
    480: {
      slidesPerView: 4, 
      spaceBetween: 20,
    },
    200: {
      slidesPerView: 3,  
      spaceBetween: 20,
    },
  },
});

// friends 
for (let i=0; i<20; i++) {
  let friends = `<div class="swiper-slide"><a href=""><div class="friends_item">
                  <img src="./img/friends/friends${i+1}.jpg" alt="friends${i+1}">
                </div></a></div>`

  $('.friends_swiper').append(friends);
}
const swiper3 = new Swiper('#swiper3', {
  direction: 'horizontal',
  loop: true,
  loopedSlides: 1,
  autoplay: {
      delay: 1500
  },
  slidesPerView: 8,
  spaceBetween: 30,
  navigation: {
    nextEl: '.best_box .swiper-button-next',
    prevEl: '.best_box .swiper-button-prev',
  },
  breakpoints: {
    200: {
      slidesPerView: 4,  
      spaceBetween: 20,
    },
    480: {
      slidesPerView: 6, 
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 7, 
      spaceBetween: 30,
    },
  },
})

// bottom banner
const swiper4 = new Swiper('#swiper4', {
  direction: 'horizontal',
  loop: true,
  autoplay: {
      delay: 3000
  },
  slidesPerView: 3,
  navigation: {
    nextEl: '.best_box .swiper-button-next',
    prevEl: '.best_box .swiper-button-prev',
  },
  scrollbar: {
    el: '.swiper-scrollbar',
  },
})