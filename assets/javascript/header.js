const headerSetting = $('.header__setting');
const headerOverlay = $('.header__right-overlay');
const headerSettingList = $('.header__setting-list');

const themeModal = $('.theme-modal');
const themebtn = $('.header__theme');
const themeClosebtn = $('.theme-modal__close-btn');
const themeOverlay = $('.theme-modal__overlay');
const themeBody = $('.theme-modal__body');
const header = $('.header');
const mainContainer = $('.main-container');

const themeItems = $$('.theme-modal__body-group-item-img');


// cuộn xuống thì làm trong background thanh header
mainContainer.onscroll = function() {
    scrollTop = mainContainer.scrollY || mainContainer.scrollTop
    // if (scrollTop > 50) {
    //     header.classList.toggle('header--active');
    // }

    // làm cách này mà ko làm cách trên để tránh bị gật lag 
    if(scrollTop > 5) {
        Object.assign(header.style, {
            backgroundColor: 'var(--header-color)',
            boxShadow: '0 3px 5px rgba(0,0,0,0.1)',
        })
    } else {
        Object.assign(header.style, {
            backgroundColor: 'transparent',
            boxShadow: 'none',
        })
    }
};

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
