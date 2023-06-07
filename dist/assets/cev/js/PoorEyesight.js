"user strict";
class PoorEyesight
{
        /**
     Список классов css с описанием:
     .common-viz - активитует панель управления версией для слабовидящих, скрывает кнопку версии для слабовидящих в header
     
    */
    body = document.body;

    activityFlag = localStorage.getItem('activityFlag');
    

    //   значения присваиваемые :root
    styleSettings = {
        fontSize: '',
        fontFamily: '',
        letterSpacing: '',
        primaryColor: '',
        textColor: '',
        altCextColor: '',
        activeColor: '',
        bgColor: '',
        altBgColor: '', 
        decorColor: '',
        altDecoreDolor: '',
        
    };

    // классы которые присваиваются body
    classSettings = {
        fontClass: '',
        themeClass: '',
        commonVizClass: 'common-viz',
        imgControlClass: ''
    }
    //метод сборщик стилей css в строку
    bildStyles(){
        let cssStyles =`
        font-size: ${this.styleSettings.fontSize};
        font-family: ${this.styleSettings.fontFamily};
        letter-spacing: ${this.styleSettings.letterSpacing};
        --primary-color: ${this.styleSettings.primaryColor};
        --text-color: ${this.styleSettings.textColor};
        --alt-text-color: ${this.styleSettings.altCextColor};
        --active-color: ${this.styleSettings.activeColor};
        --bg-color: ${this.styleSettings.bgColor};
        --alt-bg-color: ${this.styleSettings.altBgColor};
        --decor-color: ${this.styleSettings.decorColor};
        --alt-decore-color: ${this.styleSettings.altDecoreDolor};
        `;
        
        return cssStyles;
    }
    //метод сборщик классов css в строку
    bildClasses(){
        let cssClasses = '';
        for(let key in this.classSettings){
            cssClasses += this.classSettings[key]+' ';
        }
        return cssClasses;
    }

    /**Методы цветовых тем */
    themeWhite(){
        this.styleSettings.primaryColor = '#000000';
        this.styleSettings.textColor = '#000000';
        this.styleSettings.altCextColor = '#000000';
        this.styleSettings.activeColor = '#000000';
        this.styleSettings.bgColor = '#ffffff';
        this.styleSettings.altBgColor = '#ffffff';
        this.styleSettings.decorColor = '#ffffff';
        this.styleSettings.altDecoreDolor = '#ffffff';

        this.classSettings.themeClass = 'theme_white'; 
        this.setValue();
    }
    themeBlack(){
        this.styleSettings.primaryColor = '#ffffff';
        this.styleSettings.textColor = '#ffffff';
        this.styleSettings.altCextColor = '#ffffff';
        this.styleSettings.activeColor = '#ffffff';
        this.styleSettings.bgColor = '#000000';
        this.styleSettings.altBgColor = '#000000';
        this.styleSettings.decorColor = '#000000';
        this.styleSettings.altDecoreDolor = '#000000'; 

        this.classSettings.themeClass = 'theme_black'; 
        this.setValue();
    }
    themeBlue(){
        this.styleSettings.primaryColor = '#063462';
        this.styleSettings.textColor = '#063462';
        this.styleSettings.altCextColor = '#063462';
        this.styleSettings.activeColor = '#063462';
        this.styleSettings.bgColor = '#9dd1ff';
        this.styleSettings.altBgColor = '#9dd1ff';
        this.styleSettings.decorColor = '#9dd1ff';
        this.styleSettings.altDecoreDolor = '#9dd1ff'; 

        this.classSettings.themeClass = 'theme_blue'; 
        this.setValue();
    }

    // методы изменения размера шрифта
    fontSizeNormal(){
        this.styleSettings.fontSize = '17px';
        this.classSettings.fontClass = 'font-size_normal';
        this.setValue();
    }
    fontSizeLarge(){
        this.styleSettings.fontSize = '25px';
        this.classSettings.fontClass = 'font-size_large';
        this.setValue();
    }
    fontSizeVeryLarge(){
        this.styleSettings.fontSize = '34px';
        this.classSettings.fontClass = 'font-size_very-large';
        this.setValue();
    }

    // методы показа и скрытия изображений на сайте
    hideAllImg(){
        this.classSettings.imgControlClass = 'all-img_off';
        this.setValue();
    }
    showAllImg(){
        this.classSettings.imgControlClass = 'all-img_on';
        this.setValue();
        
    }
    // устанавливаю межстрочный интервал
    setLetterSpacing(value){
        this.styleSettings.letterSpacing = value + 'px';
    }
    // устанавливаю семейство шрифтов
    setFontFamily(value){
        this.styleSettings.fontFamily = value;
    }


    // устанавливает значения стилей и классов из localStorage в root и body
    formLStoDOM(){ 

        this.styleSettings = JSON.parse(localStorage.getItem('styleSettings'));
        this.classSettings = JSON.parse(localStorage.getItem('classSettings'));

        document.documentElement.setAttribute('style', this.bildStyles());
        this.body.setAttribute('class', this.bildClasses()); 

    }
    // метод используемый при загрузке страницы, проверяет активна ли версия для слабовидящих или нет.  
    loadPage(){  
        
        if(this.activityFlag == 'true'){
 
            this.formLStoDOM();
        }else{ 
        }
        
        
    }
    // метод используемый при запуске версии для слабовидящих
    start(){ 
        if(localStorage.getItem('styleSettings')){
            this.activityFlag = true;
            localStorage.setItem('activityFlag', true);
            this.formLStoDOM();
        }else{ 
            //startSliders();//запускаем слайдеры на странице
            this.themeWhite();
            this.fontSizeNormal();
            this.showAllImg(); 
            this.setLetterSpacing(0); 
            this.setFontFamily('"Fira Sans",sans-serif');
            this.showAllImg();
            this.setValue();
        }

    }

    setValue(){     

        document.documentElement.setAttribute('style', this.bildStyles());
        this.body.setAttribute('class', this.bildClasses()); 
        
        localStorage.setItem('styleSettings', JSON.stringify(this.styleSettings));
        localStorage.setItem('classSettings', JSON.stringify(this.classSettings));
    }
    
    stop(){  
        localStorage.setItem('activityFlag', false);
        document.documentElement.removeAttribute('style');
        this.body.removeAttribute('class');
        //startSliders(); // запускаем слайдеры на странице
    }
}