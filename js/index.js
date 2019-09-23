window.onload = function() {
    var sliderRight = document.getElementsByClassName("slider_right")[0];
    sliderRight.onmouseenter = show;
    sliderRight.onmouseleave = hide;

    /**
     * 显示/隐藏轮播图左右按钮
     */
    function show() {
        for (var i = 0; i <= 1; i++) {
            button = this.children[i];
            cls = button.getAttribute("class");
            cls = cls.replace("hidden", "show");
            button.setAttribute("class", cls);
        }
    }

    function hide() {
        for (var i = 0; i <= 1; i++) {
            button = this.children[i];
            cls = button.getAttribute("class");
            cls = cls.replace("show", "hidden");
            button.setAttribute("class", cls);
        }
    }

    var slideIndicators = document.getElementsByClassName("slider_indicators")[0];
    var images = document.getElementsByClassName("big_images")[0];
    for (var i = 0; i < slideIndicators.children.length; i++) {
        slideIndicators.children[i].onmouseenter = function() {
            for (var i = 0; i < slideIndicators.children.length; i++) {
                slideIndicators.children[i].removeAttribute("class");
                images.children[i].setAttribute("class", "slide_prev");
            }
            this.setAttribute("class", "btn_active");
            images.children[this.getAttribute("index")].setAttribute("class", "slide_active");
        }
    }

    var bigSlideButton = document.getElementsByClassName("slider_left")[0];
    bigSlideButton.children[0].onclick = function() {
        currentImage = document.getElementsByClassName("slide_active")[0];
        index = parseInt(currentImage.getAttribute("index"));
        for (var i = 0; i < slideIndicators.children.length; i++) {
            slideIndicators.children[i].removeAttribute("class");
            images.children[i].setAttribute("class", "slide_prev");
        }
        var index_prev = index - 1 < 0 ? 7 : index - 1;
        images.children[index_prev].setAttribute("class", "slide_active");
        slideIndicators.children[index_prev].setAttribute("class", "btn_active");        
    }
    bigSlideButton.children[1].onclick = function() {
        currentImage = document.getElementsByClassName("slide_active")[0];
        index = parseInt(currentImage.getAttribute("index"));
        for (var i = 0; i < slideIndicators.children.length; i++) {
            slideIndicators.children[i].removeAttribute("class");
            images.children[i].setAttribute("class", "slide_prev");
        }
        var index_next = index + 1 > 7 ? 0 : index + 1;
        images.children[index_next].setAttribute("class", "slide_active");
        slideIndicators.children[index_next].setAttribute("class", "btn_active");        
    }
}