// home headline
$(document).ready(function(){
    $('.sc-home .text-wrap .headline-top .text').addClass('active');

    gsap.timeline({
        defaults: {duration: 0.5},
    })

    .to('.sc-home .text-wrap .headline-bottom .text', {
        duration: 0.5,
        onComplete: function(){
            $('.sc-home .text-wrap .headline-bottom .text').addClass('active');
        }
    })

    .to('.sc-home .text-wrap .date .text', {
        duration: 0.5,
        onComplete: function(){
            $('.sc-home .text-wrap .date .text').addClass('active');
        }
    },'a')

    .to('sc-home .text-wrap .headline .point', {
        duration: 0.5,
        onComplete: function(){
            $('.sc-home .text-wrap .headline .point').addClass('active');
        }
    },'a');
});