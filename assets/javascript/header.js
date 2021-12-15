const headerSetting = $('.header__setting');
const headerOverlay = $('.header__right-overlay');
const headerSettingList = $('.header__setting-list');

const themeModal = $('.theme-modal');
const themebtn = $('.header__theme');
const themeClosebtn = $('.theme-modal__close-btn');
const themeOverlay = $('.theme-modal__overlay');
const themeBody = $('.theme-modal__body');


const themeItems = $$('.theme-modal__body-group-item-img');




// setting
headerSetting.onclick = function(e) {
    headerSetting.classList.toggle('header__setting--active');
    headerOverlay.classList.remove('hiden');
    // headerSettingList.stopPropagation();
}

headerSettingList.onclick = function(e) {
    e.stopPropagation();
    headerOverlay.classList.add('hiden');
    headerSetting.classList.remove('header__setting--active');
}


headerOverlay.onclick = function() {
    headerSetting.classList.remove('header__setting--active');
    headerOverlay.classList.add('hiden');
}


//theme modal
themebtn.onclick = function() {
    themeModal.classList.toggle('theme-modal--avtive'); 
}

themeBody.onclick = function(e) {
    e.stopPropagation();
}

themeClosebtn.onclick = function() {
    themeModal.classList.remove('theme-modal--avtive'); 
}

themeOverlay.onclick = function() {
    themeModal.classList.remove('theme-modal--avtive'); 
}


//theme apply
themeItems.forEach((themeItem, index) => {
    themeItem.onclick = function() {
        $('.main').style.backgroundImage =`url('./assets/img/background-theme/backroundThemes/${index}.${index === 0 ? "svg" : "jpg"}')`;
    }
});
