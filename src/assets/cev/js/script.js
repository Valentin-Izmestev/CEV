@@include('jquery-1.12.1.js');
@@include('particles.js');
@@include('slick.js');
@@include('jquery.fancybox.js');
@@include('PoorEyesight.js');

// ----------preloader------------
let $preloader = document.querySelector('.preloader-box');
window.addEventListener('load', function(){
    this.setInterval(()=>{
        $preloader.classList.add('preloader_hide');
        setTimeout(function(){
        $preloader.remove();
    }, 500);
    }, 500)
});
// -------------------------------------

// ----------boorger-menu------------
let $burger = $('.burger');
let $closeCross = $('#header .close_menu');
let $mainMenu = $('.main-menu');
let $body = $('body');

$burger.on('click', function () {
    $(this).toggleClass('active');
    $body.toggleClass('fixed');
    $mainMenu.toggleClass('active');
    $closeCross.toggleClass('active');
});
$closeCross.on('click', function(){
    $(this).removeClass('active');
    $burger.removeClass('active');
    $mainMenu.removeClass('active');
    $body.removeClass('fixed');
})
// -------------------------------------

//------------banner with graphs--------
if (document.querySelector('#particles-js')) {
    /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
    particlesJS.load('particles-js', 'assets/cev/resource/particlesjs-config.json', function () { 
    });
}
// -------------------------------------
function startSliders(){
    // -------add slick sliders----------
    $('.slogan_sl').slick({
        dots: false,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        draggable: false,
        infinite: true,
        rows: 0,
        speed: 500,
        fade: true,
        cssEase: 'ease'
    });

    $('.resource__sl').slick({
        dots: false,
        arrows: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
        infinite: true,
        speed: 500,
        prevArrow: '<button class="slick-prev" aria-label="Previous" type="button"><svg width="34" height="61" viewBox="0 0 34 61" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M30.9509 2L2.99999 30.6137L31.6137 58.5647" stroke="#BDBDBD" stroke-width="3" stroke-linecap="round"/></svg></button>',
        nextArrow: '<button class="slick-next" aria-label="Next" type="button"><svg width="33" height="61" viewBox="0 0 33 61" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.28418 58.5686L30.5684 30.2843L2.28417 2.00006" stroke="#BDBDBD" stroke-width="3" stroke-linecap="round"/></svg></button>',
        responsive: [{
                breakpoint: 1100,
                settings: {
                    arrows: false,
                    dots: true
                }
            },
            {
                breakpoint: 780,
                settings: {
                    arrows: false,
                    dots: true,
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 620,
                settings: {
                    arrows: false,
                    dots: true,
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 410,
                settings: {
                    arrows: false,
                    dots: true,
                    slidesToShow: 1
                }
            },
        ]
    });
}
startSliders();//запускаем слайдеры на странице

// -----------------------------------
//----------- add fancybox------------
$('.fancybox').fancybox({ 
}); 
// -----------------------------------
// ------yamaps-----------------------
function initMap() {
    var myMap = new ymaps.Map("map", {
        center: [51.731646, 36.192247],
        zoom: 16
    });

    myMap.controls.add('zoomControl', {
        size: "large"
    });

    myPlacemark1 = new ymaps.Placemark([51.731646, 36.192247], {
        // Свойства. 
        hintContent: '<div class="map-hint caption-color h4">ОКУ "ЦЭВ"</div>',
        balloonContent: '<div class="map-hint"><span class="caption-color">Областное казенное учреждение "Центр электронного взаимодействия"</span> <br>г.Курск, 305000, улица Ленина, 2</div>',
    }, {
        iconImageHref: '/assets/cev/img/marker.svg',
        // Размеры метки.
        iconImageSize: [30, 40],
        iconImageOffset: [-15, -20]
    });

    myMap.geoObjects
        .add(myPlacemark1);
}
if(document.querySelector('#map')){
    ymaps.ready(initMap); 
}


// ------Версия для слабовидящих------
let peObj = new PoorEyesight;
let $poorEyesinghtBtn = document.querySelector('.poor_eyesight'); //кнопка запуска версии для слабовидящих
let $regVersionBtn = document.querySelector('.regular-version'); //кнопка отключения версии для слабовидящих
let $BtnFSNormal = document.querySelector('.fs_normal');
let $BtnFSLarge = document.querySelector('.fs_large');
let $BtnFSVeryLarge = document.querySelector('.fs_very_larg');
let $btnWhiteTheme = document.querySelector('.white-theme');
let $btnBlackTheme = document.querySelector('.black-theme');
let $btnBlueTheme = document.querySelector('.blue-theme');
let $btnOnImg = document.querySelector('.switch-img_on');
let $btnOffImg = document.querySelector('.switch-img_off');

window.addEventListener('load', ()=>{
    peObj.loadPage();
})
$poorEyesinghtBtn.addEventListener('click', function(){
    peObj.start();
});
$regVersionBtn.addEventListener('click', ()=>{
    peObj.stop();
    startSliders();//запускаем слайдеры на странице
});
$BtnFSNormal.addEventListener('click', ()=>{
    peObj.fontSizeNormal(); 
})
$BtnFSLarge .addEventListener('click', ()=>{
    peObj.fontSizeLarge(); 
})
$BtnFSVeryLarge.addEventListener('click', ()=>{
    peObj.fontSizeVeryLarge(); 
})
$btnWhiteTheme.addEventListener('click', ()=>{
    peObj.themeWhite();
});
$btnBlackTheme.addEventListener('click', ()=>{
    peObj.themeBlack();
});
$btnBlueTheme.addEventListener('click', ()=>{
    peObj.themeBlue();
});
$btnOnImg.addEventListener('click', ()=>{
    peObj.showAllImg()
});

$btnOffImg.addEventListener('click', ()=>{
    peObj.hideAllImg();
})
// ------Версия для слабовидящих конец------
// -----------------------------------

// ------Добавление css классов ссылкам в списке файлов------
function addFileNameCSSClass(selector){
    let arrFileListItems = document.querySelectorAll(selector);
    if(arrFileListItems.length > 0){
        
        for(let i = 0; i < arrFileListItems.length; i++){
            let strUrl = arrFileListItems[i].getAttribute('href');  
            let res = strUrl.match(/\.([a-zA-Z]{2,5})$/);
            console.log(res);
            if(res){
                arrFileListItems[i].setAttribute('class', res[1]);
            }
            
        }
    }
}
addFileNameCSSClass('.file-list li a');
// ------Добавление css классов ссылкам в списке файлов конец------