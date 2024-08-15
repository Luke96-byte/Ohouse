$(function(){
    //탑 베너 닫기 버튼
    $('.top-ad-banner .btn-close').click(function(){
        $('.top-ad-banner').addClass('off')
    })

    //검색 랭킹 팝
        $('#header .search-rank-area .btn-more').click(function(){
            $('#header .search-rank-area .pop').addClass('show')
        })

        $('#header .search-rank-area .pop .btn-close').click(function(){
            $('#header .search-rank-area .pop').removeClass('show')
        })

        //visual 스와이퍼
        visualSlide = new Swiper('.sc-visual .container .swiper',{
            autoplay:{
                delay: 3000,
            } ,
            loop:true,
            speed:1000,
            navigation: {
                prevEl: '.sc-visual .btn-control.prev',
                nextEl: '.sc-visual .btn-control.next'
              },
            pagination:{
                el:'.pagination .fraction',
                type:'fraction'
            }
           })

        $('.sc-visual .container').hover(function(){
            $('.sc-visual .btn-control ').addClass('show');
        }, function(){
            $('.sc-visual .btn-control ').removeClass('show');
        });

        //recommend 스와이퍼
        recommendSlide = new Swiper('.sc-recommend .swiper',{
            slidesPerView : 2.5,
            spaceBetween: 20,
            allowTouchMove: false,
            slidesPerGroup:6,
            navigation: {
                prevEl: '.sc-recommend .btn-control.prev',
                nextEl: '.sc-recommend .btn-control.next'
              },
              breakpoints:{
                768:{
                    slidesPerView : 4,
                },
                1024:{
                    slidesPerView : 6,
                }
              }
            
           })

        //cate 스와이퍼
        cateSlide = new Swiper('.sc-cate .swiper',{
            slidesPerView : 14,
            allowTouchMove: false,
            slidesPerGroup:14,
            navigation: {
                prevEl: '.sc-cate .btn-control.prev',
                nextEl: '.sc-cate .btn-control.next'
              },
                breakpoints: {
                981: {
                    slidesPerView: 6
                }
                }
            
           })

        //deal 스와이퍼
        dealSlide = new Swiper('.sc-deal .swiper',{
            slidesPerView : 4,
            spaceBetween:20,
            allowTouchMove: false,
            slidesPerGroup:4,
            navigation: {
                prevEl: '.sc-deal .btn-control.prev',
                nextEl: '.sc-deal .btn-control.next'
              }
            
           })

        //best tab-area 스와이퍼
        const bestSlide = new Swiper('.sc-best .tab-area',{
            slidesPerView : 'auto',
            allowTouchMove: false,
            // slidesPerGroup:4,
            // navigation: {
            //     prevEl: '.sc-best .btn-control.prev',
            //     nextEl: '.sc-best .btn-control.next'
            //   }
            on:{
                "init":function(){
                    if (this.realIndex === 0) {
                        // $('.sc-best .btn-control.prev').addClass('hide');
                        $('.sc-best .btn-control.prev').hide();
                    }
                },
                "slideChange":function(){

                    if (this.realIndex > 0) {
                        // $('.sc-best .btn-control.prev').addClass('hide');
                        $('.sc-best .btn-control.next').hide();
                        $('.sc-best .btn-control.prev').show();
                    }else{
                        $('.sc-best .btn-control.next').show();
                        $('.sc-best .btn-control.prev').hide();
                    }
                }
            }
           })

           $('.sc-best .btn-control.prev').click(function(){
                bestSlide.slideTo(0)
           })
           $('.sc-best .btn-control.next').click(function(){
                bestSlide.slideTo(bestSlide.slides.length)
           })


        //검색순위 새로 스와이퍼
        bestSlide2 = new Swiper('#header .search-container',{
            autoplay:{
                delay: 1000,
            } ,
            direction: "vertical",
            allowTouchMove : false,
            loop:true
            // slidesPerView : "auto",

           })
           
        bestSlide3 = new Swiper('.new',{
        // autoplay:{
        //     delay: 3,
        // } ,
        direction: "vertical",
        // slidesPerView : "auto",
           })

        //헤더 스크롤
        $(window).scroll(function(){
            curr = $(this).scrollTop();
            main =$('#main').offset().top;
        
            if (curr >= main) {
                $('#header .lnb').addClass('show');
                
            } else {
                $('#header .lnb').removeClass('show')
                
            }
        })


    
           


// const remainTime = $('.타겟')

function diffDay() {
    $('[data-day]').each(function(idx,el){
        time=$(this).data('day');
        const targetTime = new Date(time);
        const todayTime = new Date();
        
        const diff = targetTime - todayTime;
        
        const diffDay = Math.floor(diff / (1000*60*60*24));
        const diffHour = Math.floor((diff / (1000*60*60)) % 24);
        const diffMin = Math.floor((diff / (1000*60)) % 60);
        const diffSec = Math.floor(diff / 1000 % 60);
        
        $(this).text(`${diffHour}시간 ${diffMin}분 ${diffSec}초 남음`);
    })

}

diffDay();
setInterval(diffDay, 1000);


        //헤더 네비게이션 호버
        $('#header .gnb .gnb-item').hover(function(){

            tabName = $(this).data('tab');

            $(this).addClass('on').siblings().removeClass('on');

            $(tabName).addClass('on').siblings().removeClass('on');

        })

        //best 탭 클릭
        $('.sc-best .tab-area .tab-item').click(function(e){
            e.preventDefault();

            
            tabName = $(this).data('tab');
            
            $(this).addClass('on').siblings().removeClass('on');

            $(tabName).addClass('on').siblings().removeClass('on');

        })

        //프로덕트 박스 타이머
                    // 시간을 담을 변수 t
        var t = 0;

        function timer() {
            // 0.01(10ms)초마다 t 값을 0.01 증가시키고
            // 증가된 t 값을 timer 클래스 하위 html에 출력
            setInterval(function() {
                t += 0.01;
                $(".timer").html(`<'.icons timer'>${t.toFixed(2)}`);
            }, 10);
        };


    // 리스트를 생성하는 함수
    function list(num){
        

        // keyword.json 파일에서 데이터를 가져옴
        fetch('./keyword.json')
        .then(res=>res.json())
        .then(json=>{

            // 다양한 리스트를 담을 배열
            data = [popular_keywords];
            
            let html = ``;

            // 해당하는 데이터 배열(num에 따라 다름)을 순회하며 HTML 생성
            data[num].forEach((element,index) => {

                // 리스트 아이템 HTML 구성
                html+=
                `<li class="swiper-slide search-item">
                     <a href="">
                        <span class="search-rank">${element.rank}</span>
                        <span class="search-icons">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="M4.186 15v-3.93h.037L6.994 15h1.027V9H6.834v3.909h-.033L4.035 9H3v6zM12.794 13.96H10.11v-1.513h2.533v-.965H10.11v-1.447h2.684V9H8.87v6h3.924zM17.096 10.9h.037l1.125 4.1h1.17L21 9h-1.285l-.936 4.345h-.033L17.638 9H16.59l-1.108 4.345h-.033L14.518 9h-1.285l1.568 6h1.17z"></path></svg>
                        </span>
                        <span class="search-word">${element.keyword}</span>
                        </a>
                </li>
                `
                // <li>
                //     ${index+1} <!-- 순위 표시 -->
                //     <img src="${element.thumb}" alt=""> <!-- 이미지 표시 -->
                //     <h3>${element.title}</h3> <!-- 제목 표시 -->
                //     <div>
                //         가격:${element.price.toLocaleString()}원<br> <!-- 가격 표시 -->
                //         리뷰${element.review} <!-- 리뷰 표시 -->
                //     </div>
                //     ${todayDeliEl} <!-- 오늘 배송 표시 -->
                // </li>
            });

            // 생성된 HTML을 ul 요소에 추가
            $('.lnb .search-rank-area .search-list').html(html)

        })
        .catch(function(error){
            console.error('오류 발생:', error);
        });
    }
    //btn-menu
    $('#header .btn-menu').click(function(){
        $('#header .pop-menu').addClass('on')
        $('#header .pop-container').addClass('on')
        $('#header .pop-container .btn-close').addClass('on')
        $('body').addClass('on')
    })

    $('#header .pop-container .btn-close').click(function(){
        $('#header .pop-menu').removeClass('on')
        $('#header .pop-container').removeClass('on')
        $('body').removeClass('on')
        $('#header .pop-container .btn-close').removeClass('on')
    })



    // $(document).click(function(e){
    //     if (!$('#header .pop-menu').has(e.target).length) {
    //         $('#header .pop-menu').removeClass('on');
    //         $('#header .pop-container').removeClass('on');
    //     }

    // })



        
        
    

})

