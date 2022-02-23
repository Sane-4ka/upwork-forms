// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

document.addEventListener('DOMContentLoaded', () => {

//================ MAIN PAGE ======================================================================================

    const createAccBtn = document.querySelector('.body-mainpage__button');
    const mainPage = document.querySelector('.main-page');
    const formPage = document.querySelector('.form-page');
    createAccBtn.addEventListener('click', (e) => {
        e.preventDefault();
        // mainPage.classList.add('hide');
        mainPage.style.right = '100%';
        mainPage.style.display = 'none';
        formPage.style.display = 'block';
    });

//================RADIO======================================================================================

    const radioItem = document.querySelectorAll('.form-radio__item');

    radioItem.forEach(item => {
        item.addEventListener("click", radioActions);
    });
    
    function removeActive(block) {
        block.forEach(item => {
            item.classList.remove('active');
        });
    }
    
    function radioActions(e) {
        removeActive(radioItem);
        const radio = e.target.closest('.form-radio__item');
        radio.classList.add('active');
        radio.querySelector('.form-radio__input').checked = true;
    }
    
//=============CHECKBOX=========================================================================================
    
    const formCheckbox = document.querySelector('.form-checkbox');
    formCheckbox.addEventListener('click', (e) => {
        e.preventDefault();
        if (e.target.closest('.form-checkbox__item')) {
            checkIt(e, 'form-checkbox__item', 'checkbox__input');
        }
    });
    
    function checkIt(e, paramClass, paramSubClass) {
        const check = e.target.closest(`.${paramClass}`);
        check.classList.toggle('active');
        check.classList.contains('active') ? check.querySelector(`.${paramSubClass}`).checked = true :  check.querySelector(`.${paramSubClass}`).checked = false;
    }

    const formCheckboxBord = document.querySelectorAll('.form-checkbox-bordered');
    formCheckboxBord.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            if (e.target.closest('.form-checkbox-bordered__item')) {
                checkIt(e, 'form-checkbox-bordered__item', 'checkbox-bordered__input');
            }
        });        
    });

    // function check(params) {
        
    // }

    //=============CHCKBOX ITEMS=========================================================================================
    
    // class CheckItem {
    //     constructor (img, text, parentSelector) {
    //         this.img = img;
    //         this.text = text;
    //         this.parent = document.querySelector(parentSelector);
    //     }
    
    //     render() {
    //         const elem = document.createElement('div');
    //         elem.classList.add('form-checkbox__item');
    
    //         elem.innerHTML = `
    //         <div class="form-checkbox__img">
    //             <img data-src="@img/${this.img}.png" alt="">
    //         </div>
    //         <div class="form-checkbox__checkbox checkbox">
    //             <input id="c_${this.img}" data-error="Ошибка" class="checkbox__input" type="checkbox" value="Explore other companies" name="form[objectives]">
    //             <label for="c_${this.img}" class="checkbox__label"><span class="checkbox__text">${this.text}</span></label>
    //         </div>
    //         `;
    
    //         this.parent.append(elem);
    //     }
    // }
    
    // new CheckItem (05, 'Mae fgtr loresssf', 'form-checkbox').render();
    // new CheckItem (05, 'Mae fgr loref', 'form-checkbox').render();
    // new CheckItem (07, 'Mae fgtr loesssf', 'form-checkbox').render();
    // new CheckItem (08, 'Mae gtr lorssf', 'form-checkbox').render();
    
    
    function createCard(img, text) {
            const elem = document.createElement('div');
            elem.classList.add('form-checkbox__item');
    
            elem.innerHTML = `
                <div class="form-checkbox__img">
                    <img src="img/${img}.png" alt="">
                </div>
                <div class="form-checkbox__checkbox checkbox">
                    <input id="c_${img}" data-error="Ошибка" class="checkbox__input" type="checkbox" value="Explore other companies" name="form[objectives]">
                    <label for="c_${img}" class="checkbox__label"><span class="checkbox__text">${text}</span></label>
                </div>
            `;
    
            document.querySelector('.form-checkbox').append(elem);
    }
    
    createCard('05', 'Business development');
    createCard('06', 'Invest');
    createCard('07', 'Explore new projects');
    createCard('08', 'Mentor others');
    createCard('09', 'Organize events');
    
    //==============STEP NAVIGATION========================================================================================
    
    let i = 1;
    const btnNext = document.querySelector('.steps__buttons_next');
    const btnBack = document.querySelector('.steps__buttons_prev');
    const btnGoogle = document.querySelector('.steps__buttons_google');
    const navLine = document.querySelector('.step__line');
    const navLineR = document.querySelector('.step__line_red');
    const navitemLength = document.querySelectorAll('.step__item').length;
    const titleStepText = document.querySelector('.text-steps__title');
    const subTitleStepText = document.querySelector('.text-steps__subtitle');
    
    let w = window.getComputedStyle(navLine).width;
    
    const wLen = w.length - 2;
    const l = w.slice(0, wLen);
    
    // ==========FUNCTIONS=============
    function mainBlockNumb(e) {
        const mainBlock = document.querySelector(`.steps__mainblock_${e}`);
        mainBlock.style.display = 'block';
        // func --- Change title text -------
        switch(e) {
            case 1: titleStepText.innerHTML = 'aedfghgfdwefg';
                    subTitleStepText.innerHTML = 'aedfghgfdwfghgfd5216541efg';
                break;
            case 2: titleStepText.innerHTML = 'loremdfghgewwerf';
                    subTitleStepText.innerHTML = 'aedfghgfwergtre45dwefg';
                break;
            case 3: titleStepText.innerHTML = 'loremwef5545dfghgewwerf';
                    subTitleStepText.innerHTML = 'aedfghgeretge8541245fdwefg';
                break;
        }
        stepNavigation(e);
    }
    function mainBlockRemove(e) {
        const mainBlock = document.querySelector(`.steps__mainblock_${e}`);
        mainBlock.style.display = 'none';
    }
    function stepNavigation(e) {
        navLineR.style.width = `${(l / (navitemLength - 1) * (e - 1))}px`;
    }
    stepNavigation(0);
    
    // ==========EV Listner=============
    btnNext.addEventListener('click', (e) => {
        i++;
        mainBlockRemove(i - 1);

        if (i !== 1) {
            btnBack.style.display = 'inline-block';
        }
        if (i == 5) {
            btnBack.style.display = 'none';
            btnNext.style.display = 'none';
            btnGoogle.style.display = 'inline-block';
        }
        mainBlockNumb(i);
    });
    
    btnBack.addEventListener('click', (e) =>  {
        i--;
        if (i == 1) {
            btnBack.style.display = 'none';
        }
        mainBlockRemove(i + 1);
        mainBlockNumb(i);
    });
});

//============PHOTO==========================================================================================

const imgField = document.querySelector('#file');
const imgText = document.querySelector('.img-label__text');
imgField.addEventListener('change', (e) => {
    let fileName = '';
    fileName = e.target.value;
    let text = fileName.split('\\')[`${fileName.split('\\').length - 1}`];
    
    if (text.length > 25) {
        let i = `${text.slice(0, 21)}...`;
        imgText.innerHTML = i;
    } else {
        imgText.innerHTML = text;
    }
});

