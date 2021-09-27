$(document).ready(function(){
    const slider1 = $(".slider").bxSlider({
        controls:false
    });
    $(".sliderWrap .nextBtn").click(function(){
        slider1.goToNextSlide();
    });
    $(".sliderWrap .prevBtn").click(function(){
        slider1.goToPrevSlide();
    });

    const slider2 = $(".slider2").bxSlider({
        controls:false,
        pager:false,
        auto:true
    });

    $(".slider2Wrap .nextBtn").click(function(){
        slider2.goToNextSlide();
    });
    $(".slider2Wrap .prevBtn").click(function(){
        slider2.goToPrevSlide();
    });

    // $(".toggle").on("이벤트명",리스너);
    // $(".toggle").on("click",function(){});
    // $(".toggle").click(function(){})
    $(".toggle").click(function(){
        const toggle = $(".toggle").attr("class"); // value toggle
        console.log(toggle);

        if( toggle == "toggle"){
            //$(".toggle").addClass("active");
            document.getElementsByClassName("toggle")[0].classList.add("active");
            $(".gnb").addClass("view");
        }else{
            //$(".toggle").removeClass("active");
            document.getElementsByClassName("toggle")[0].classList.remove("active");
            $(".gnb").removeClass("view");
        }
    });

    $(window).resize(function(){
        $(".toggle").removeClass("active");
        $(".gnb").removeClass("view");
    });
   
});

//POP CULTURE 
    $(document).ready(function(){ 
        $('.sec3_list').bxSlider({ 
            auto:true, 
            pager: false, 
            controls: true, 
            autoControls: false,
            minSlides: 4, 
            maxSlides: 4, 
            moveSlides: 1, 
            slideWidth: 285, 
            slideMargin: 10, 
            autoHover:true, 
            prevText:"", 
            nextText:"" 

        }); 
    });


    //동영상 팝업
    $(document).ready(function(){
        $(".modal").colorbox({
            rel:"modal"
        });

        $(".youtube").colorbox({
            iframe:true,
            innerWidth:700,
            innerHeight:394
        })
    });


    // sub tab
    const tabList = document.querySelectorAll('.tab li');
    const boxList = document.querySelectorAll('.section > div');

    for (let j=0;j<tabList.length;j++){
        tabList[j].onclick = function(){
        for(let i=0;i<tabList.length;i++){
            tabList[i].classList.remove('on');
            boxList[i].style.display = 'none';
            tabList[i].style.background = 'none';
            tabList[i].style.color = '#333';
        };
        tabList[j].classList.add('on');
        boxList[j].style.display = 'block'
        tabList[j].style.background = '#EE2C33'
        tabList[j].style.color = 'white'
        };
    };