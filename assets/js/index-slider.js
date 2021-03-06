$('.gallery-container').each(function() {
    var $this = $(this);
    var $group = $this.find('.slide_group');
    var $slides = $this.find('.slide');
    var bulletArray = [];
    var currentIndex = 0;
    var timeout;
    function move(newIndex) {
        var animateLeft, slideLeft;
        advance();
        if ($group.is(':animated') || currentIndex === newIndex) {
        return;
        }      
        if (newIndex > currentIndex) {
        slideLeft = '100%';
        animateLeft = '-100%';
        } else {
        slideLeft = '-100%';
        animateLeft = '100%';
        }
        $slides.eq(newIndex).css({
        display: 'block',
        left: slideLeft
        });
        $group.animate({
        left: animateLeft
        }, function() {
        $slides.eq(currentIndex).css({
            display: 'none'
        });
        $slides.eq(newIndex).css({
            left: 0
        });
        $group.css({
            left: 0
        });
        currentIndex = newIndex;
        });
    }
    function advance() {
        clearTimeout(timeout);
        timeout = setTimeout(function() {
        if (currentIndex < ($slides.length - 1)) {
            move(currentIndex + 1);
        } else {
            move(0);
        }
        }, 4000);
    }
    $('.gallery-button-next').on('click', function() {
        if (currentIndex < ($slides.length - 1)) {
        move(currentIndex + 1);
        } else {
        move(0);
        }
    });
    $('.gallery-button-back').on('click', function() {
        if (currentIndex !== 0) {
        move(currentIndex - 1);
        } else {
        move(3);
        }
    });
    advance();
});