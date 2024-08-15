// 마우스 커서
$(document).mousemove(function(e){
    x = e.clientX;
    y = e.clientY;

    gsap.to('.cursor',{
        x: x,
        y: y
    })
});

$('a').hover(function(e){
    $('.cursor').addClass('on');
},function(){
    $('.cursor').removeClass('on');
});


// 헤더 스크롤 이벤트
let lastScroll = 0;

$(window).scroll(function(){
    curr = $(this).scrollTop();
    headerH = $('#header').height();

    if (curr > headerH) {
        $('#header').addClass('fix');

        if (curr > lastScroll) {
            $('#header').removeClass('show');
        } else {
            $('#header').addClass('show');
        };
    } else if (curr === 0) {
        $('#header').removeClass('fix');
        $('#header').removeClass('show');
    };

    lastScroll = curr;
});


// 메뉴 스크롤
$('#header .link-project').click(function() {
    $('html, body').animate({
        scrollTop: $('#project').offset().top
    }, 500);
});

$('#header .link-contact').click(function() {
    $('html, body').animate({
        scrollTop: $('#footer').offset().top
    }, 500);
});


// 푸터 headline
gsap.to('#footer',{
    scrollTrigger:{
        trigger: '#footer',
        start: '0% 50%',
        end: '100% 100%',
        scrub: 0,
        // markers: true,
        onEnter: function() {
            $('#footer').addClass('active');
        }
    }
});