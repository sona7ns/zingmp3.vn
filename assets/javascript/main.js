const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const optionAllSongList = $('.option-all__songs-list');
const musicNowTym = $('.music-control__left-action-tym-box');
const volumeIcon = $('.music-control__right-volume-icon');
const audio = $('#audio');
// var sliderItems=Array.from($$('.option-all__song-slider-img'));
const sliderBox = $('.option-all__song-slider');
const sliderItems = $$('.option-all__song-slider-img');
const playBtn = $('.js__music-control__icon-play');
const thunbPlayerBox = $('.music-control__left');
const progress = $('#progress');
const remainTime = $('.js__music-control__progress-time-start');
const durationTime = $('.js__music-control__progress-time-duration');
const prevBtn = $('.js__music-control__icon2');
const nextBtn = $('.js__music-control__icon4');
const nameSong = $('.music-control__left-content-song');
const nameSinger = $('.music-control__left-content-singer');
const cdThumb = $('.music-control__left-img');
const playAllBtn = $('.js__playall-0');
const playAllBtn1 = $('.js__playall-1');
const randomBtn = $('.js__music-control__icon1');
const repeatBtn = $('.js__music-control__icon5');
const volumeProgress = $('#progress1');
const nextSongHeadding = $('.nextsong__fist');
const nextSongList = $('.nextsong__last-list');
const header = $('.header');
const mainContainer = $('.main-container');
const headerSetting = $('.header__setting');
const headerOverlay = $('.header__right-overlay');
const headerSettingList = $('.header__setting-list');

const themeModal = $('.theme-modal');
const themebtn = $('.header__theme');
const themeClosebtn = $('.theme-modal__close-btn');
const themeOverlay = $('.theme-modal__overlay');
const themeBody = $('.theme-modal__body');
const themeItems = $$('.js-theme-item');
const tabs = $$('.tabs-item');
const panes = $$('.panes-item');
const sideBarTabs = $$('.js__sidebar-tabs');
const containerPanes = $$('.js__container-panes');
const slidersDiscover = $$('.container-discover__slider-item');






var backgroundIndex= 0;
// x = 100  // center
// y = 50   // center
// r = 50   // radius
// a = 2    // angle (from 0 to Math.PI * 2)









const app = {
    // sliderIndex: 0,
    songsData : [
        {
            background: './assets/img/songs/0.webp',
            name: 'Anh Đã Lạc Vào',
            singer: 'Green, Đại Mèo Remix',
            pathSong: './assets/music/list-song/0.mp3',
            duration : '04:27',
        },
        {
            background: './assets/img/songs/1.webp',
            name: 'Chạy Về Khóc Với Anh',
            singer: 'Erik, Duzme Remix',
            pathSong: './assets/music/list-song/1.mp3',
            duration : '04:05',
        },
        {
            background: './assets/img/songs/2.jpeg',
            name: 'Sẵn Sàng Yêu Em Đi Thôi',
            singer: 'Woni, Minh Tú, Đại Mèo Remix',
            pathSong: './assets/music/list-song/2.mp3',
            duration : '03:51',
        },
        {
            background: './assets/img/songs/3.webp',
            name: 'Gieo Quẻ',
            singer: 'Hoàng Thuỳ Linh, ĐEN, Orinn Remix',
            pathSong: './assets/music/list-song/3.mp3',
            duration : '04:27',
        },
        {
            background: './assets/img/songs/4.webp',
            name: 'Vui Lắm Nha',
            singer: 'Hương Ly, Jombie, RIN Music Remix',
            pathSong: './assets/music/list-song/4.m4a',
            duration : '05:16',
        },
        {
            background: './assets/img/songs/5.webp',
            name: 'Lưu Số Em Đi',
            singer: 'Huỳnh Văn, V.P. Tiên, Đại Mèo Remix',
            pathSong: './assets/music/list-song/5.m4a',
            duration : '04:10',
        },
        {
            background: './assets/img/songs/6.webp',
            name: 'Như Một Người Dưng',
            singer: 'Nguyễn Thạc Bảo Ngọc, Remix',
            pathSong: './assets/music/list-song/6.mp3',
            duration : '05:05',
        },
        {
            background: './assets/img/songs/7.webp',
            name: 'Ôm Nhiều Mộng Mơ',
            singer: 'Phát Huy T4, Đại Mèo Remix',
            pathSong: './assets/music/list-song/7.m4a',
            duration : '03:16',
        },
        {
            background: './assets/img/songs/8.jpg',
            name: 'Tình Yêu Ngủ Quên',
            singer: 'Hoàng Tôn, LyHan, Orinn Remix',
            pathSong: './assets/music/list-song/8.mp3',
            duration : '04:27',
        },
        {
            background: './assets/img/songs/9.webp',
            name: 'Không Bằng',
            singer: 'Na, RIN Music Remix',
            pathSong: './assets/music/list-song/9.m4a',
            duration : '03:23',
        },
        {
            background: './assets/img/songs/10.webp',
            name: 'Ai Chung Tình Được Mãi',
            singer: 'Đinh Tùng Huy, ACV Remix',
            pathSong: './assets/music/list-song/10.m4a',
            duration : '03:55',
        },
        {
            background: './assets/img/songs/11.webp',
            name: 'Cô Đơn Dành Cho Ai',
            singer: 'NAL, LEE KEN, Orinn Remix',
            pathSong: './assets/music/list-song/11.m4a',
            duration : '04:45',
        },
        {
            background: './assets/img/songs/12.webp',
            name: 'Ánh mắt ta chạm nhau',
            singer: 'Ngô Lan Hương, Đại Mèo remix',
            pathSong: './assets/music/list-song/12.m4a',
            duration : '06:01',
        },
        {
            background: './assets/img/songs/13.webp',
            name: '2 Phút Hơn',
            singer: 'Phao, KAIZ Remix',
            pathSong: './assets/music/list-song/13.m4a',
            duration : '05:02',
        },
        {
            background: './assets/img/songs/14.webp',
            name: 'Là Ai Từ Bỏ Là Ai Vô Tình',
            singer: 'Hương Ly, Jombie (G5R), RIN Music Remix',
            pathSong: './assets/music/list-song/14.m4a',
            duration : '03:25',
        },
        {
            background: './assets/img/songs/2.jpeg',
            name: 'Yêu Đừng Sợ Đau',
            singer: 'Ngô Lan Hương, Cukak Remix',
            pathSong: './assets/music/list-song/15.m4a',
            duration : '03:51',
        },
    ],
    currentIndex : 0,
    isPlaying: false,
    isRandom: false,
    isRepeat: false,
    isMute: false,
    volume: 100,

    defineProperties: function() {
        Object.defineProperty(this, 'currentSong', {
            get: function() {
                return this.songsData[this.currentIndex];
            }
        })
    },

    toastSlide: function() {
        const toatMain = $('#toast');
        if (toatMain) {
            const toast = document.createElement('div');
            toast.classList.add('toast');
            toast.innerHTML = `
                <div class="toast__item">
                    <i class="fa-solid fa-circle-exclamation"></i>
                    <span>Chức năng này đang được phát triển, bạn vui lòng thử lại sau !</span>
                </div>
            `;
            toatMain.appendChild(toast);
            setTimeout(function() {
                toatMain.removeChild(toast);
            }, 3000)
        }
    },

    // THEME APPLY SKIN
    applyTheme: function() {
        themeItems.forEach((themeItem, index) => {
            themeItem.onclick = function() {
                if (index == 0) {
                    backgroundIndex = 0;
                    $('.header').style.backgroundColor = `var(--header-color-${backgroundIndex})`;
                    $('.header').style.boxShadow = '0 3px 5px rgba(0,0,0,0.1)';
                    $('.header').style.backgroundColor = `var(--header-color-${backgroundIndex})`;
                    $('.header').style.boxShadow = '0 3px 5px rgba(0,0,0,0.1)';
                    $('.main').style.backgroundImage = 'url(./assets/img/background-theme/backroundThemes/0.svg)';
                    $('.main-music-control').style.backgroundImage = '';
                    $('.main-music-control').style.backgroundColor = '#37075D';
                    $('.mobile-tab').style.backgroundColor = '#37075D';
                    $('.sidebar__add-playlist').style.backgroundColor = '#411465';
                    $('.sidebar__add-playlist').style.borderTop = '1px solid rgba(255, 255, 255, 0.1)';
                    $('.nextsong__option-wrapper').style.backgroundColor = '#4B206E';
                    $('.header__width-search-sub').style.backgroundColor = '#6A39AF';
                    $('.header__width-search-sub').classList.add('header__width-search-sub--purple');
                    $('.header__width-search-sub').classList.remove('header__width-search-sub--white');
                    $('.header__width-search-sub').classList.remove('header__width-search-sub--green');
                    $('.header__width-search-sub').classList.remove('header__width-search-sub--gray');
                    $('.header__width-search').classList.remove('js__gray-backgroundColor');
                    $('.header__setting-list').style.backgroundColor = '#6A39AF';
                    $('.theme-modal__body').style.backgroundColor = '#6A39AF';
                    $('.nextsong__option-wrapper-listplay').style.backgroundColor = '#816399';
                    $('.main-sidebar').style.backgroundColor = 'hsla(0,0%,100%,0.05)';
                    $('.header__width-search-input').classList.remove('header__width-search-input--white');
                    $('.header__width-search-input').classList.add('header__width-search-input--dark');
                    $('.music__option-item.music__option-item--active').style.backgroundColor = "#816399";
                    $('.music__option-item.music__option-item--active').style.color = "#fff";
                    $('.music-control__volume-input').style.backgroundColor = "rgba(255, 255, 255, 0.3)";
                    $('.music-control__progress-input').style.backgroundColor = "rgba(255, 255, 255, 0.3)";

                    $$('.js__main-color').forEach((item) => {
                        item.style.color = '#fff';
                    })
                    $$('.js__sub-color').forEach((item) => {
                        item.style.color = 'rgba(255, 255, 255, 0.5)';
                    })
                    $$('.js__backgroundColor').forEach((item) => {
                        item.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
                    })
                    $$('.js__border').forEach((item) => {
                        item.style.border = "2px solid #fff";
                    })
                } else if (index == 1) {
                    backgroundIndex = 1;
                    $('.header').style.backgroundColor = `var(--header-color-${backgroundIndex})`;
                    $('.header').style.boxShadow = '0 3px 5px rgba(0,0,0,0.1)';
                    $('.main').style.backgroundImage = 'url(./assets/img/background-theme/backroundThemes/1.jpg)';
                    $('.main-music-control').style.backgroundImage = 'none';
                    $('.main-music-control').style.backgroundColor = '#202020';
                    $('.mobile-tab').style.backgroundColor = '#202020';
                    $('.sidebar__add-playlist').style.backgroundColor = '#333333';
                    $('.sidebar__add-playlist').style.borderTop = '1px solid rgba(0, 0, 0, 0.1)';
                    $('.nextsong__option-wrapper').style.backgroundColor = '#3E3E3E';
                    $('.header__width-search-sub').style.backgroundColor = '#3E3E3E';
                    $('.header__width-search-sub').classList.add('header__width-search-sub--gray');
                    $('.header__width-search-sub').classList.remove('header__width-search-sub--purple');
                    $('.header__width-search-sub').classList.remove('header__width-search-sub--white');
                    $('.header__width-search-sub').classList.remove('header__width-search-sub--green');
                    $('.header__width-search').classList.remove('js__gray-backgroundColor');
                    $('.header__setting-list').style.backgroundColor = '#3E3E3E';
                    $('.theme-modal__body').style.backgroundColor = '#3D3D3D';
                    $('.nextsong__option-wrapper-listplay').style.backgroundColor = '#787878';
                    $('.main-sidebar').style.backgroundColor = 'hsla(0,0%,100%,0.05)';
                    $('.header__width-search-input').classList.remove('header__width-search-input--white');
                    $('.header__width-search-input').classList.add('header__width-search-input--dark');
                    $('.music__option-item.music__option-item--active').style.backgroundColor = "#787878";
                    $('.music__option-item.music__option-item--active').style.color = "#fff";
                    $('.music-control__volume-input').style.backgroundColor = "rgba(255, 255, 255, 0.3)";
                    $('.music-control__progress-input').style.backgroundColor = "rgba(255, 255, 255, 0.3)";

                    $$('.js__main-color').forEach((item) => {
                        item.style.color = '#fff';
                    })
                    $$('.js__sub-color').forEach((item) => {
                        item.style.color = 'rgba(255, 255, 255, 0.5)';
                    })
                    $$('.js__backgroundColor').forEach((item) => {
                        item.style.backgroundColor = "#3E3E3E";
                    })
                    $$('.js__border').forEach((item) => {
                        item.style.border = "2px solid #fff";
                    })
                } else if (index == 2) {
                    backgroundIndex = 2;
                    $('.header').style.backgroundColor = `var(--header-color-${backgroundIndex})`;
                    $('.header').style.boxShadow = '0 3px 5px rgba(0,0,0,0.1)';
                    $('.main').style.backgroundImage = 'url(./assets/img/background-theme/backroundThemes/2.jpg)';
                    $('.main-music-control').style.backgroundImage = 'none';
                    $('.main-music-control').style.backgroundColor = '#051740';
                    $('.mobile-tab').style.backgroundColor = '#051740';
                    $('.sidebar__add-playlist').style.backgroundColor = '#132958';
                    $('.sidebar__add-playlist').style.borderTop = '1px solid rgba(0, 0, 0, 0.1)';
                    $('.nextsong__option-wrapper').style.backgroundColor = '#1F3461';
                    $('.header__width-search-sub').style.backgroundColor = '#1F3461';
                    $('.header__width-search-sub').classList.add('header__width-search-sub--green');
                    $('.header__width-search-sub').classList.remove('header__width-search-sub--purple');
                    $('.header__width-search-sub').classList.remove('header__width-search-sub--white');
                    $('.header__width-search-sub').classList.remove('header__width-search-sub--gray');
                    $('.header__width-search').classList.remove('js__gray-backgroundColor');
                    $('.header__setting-list').style.backgroundColor = '#1F3461';
                    $('.theme-modal__body').style.backgroundColor = '#192F60';
                    $('.nextsong__option-wrapper-listplay').style.backgroundColor = '#637191';
                    $('.main-sidebar').style.backgroundColor = 'hsla(0,0%,100%,0.05)';
                    $('.header__width-search-input').classList.remove('header__width-search-input--white');
                    $('.header__width-search-input').classList.add('header__width-search-input--dark');
                    $('.music__option-item.music__option-item--active').style.backgroundColor = "#637191";
                    $('.music__option-item.music__option-item--active').style.color = "#fff";
                    $('.music-control__volume-input').style.backgroundColor = "rgba(255, 255, 255, 0.3)";
                    $('.music-control__progress-input').style.backgroundColor = "rgba(255, 255, 255, 0.3)";

                    $$('.js__main-color').forEach((item) => {
                        item.style.color = '#fff';
                    })
                    $$('.js__sub-color').forEach((item) => {
                        item.style.color = 'rgba(255, 255, 255, 0.5)';
                    })
                    $$('.js__backgroundColor').forEach((item) => {
                        item.style.backgroundColor = "#1F3461";
                    })
                    $$('.js__border').forEach((item) => {
                        item.style.border = "2px solid #fff";
                    })
                } else if (index == 3) {
                    backgroundIndex = 3;
                    $('.header').style.backgroundColor = `var(--header-color-${backgroundIndex})`;
                    $('.header').style.boxShadow = '0 3px 5px rgba(0,0,0,0.1)';
                    $('.main').style.backgroundImage = 'url(./assets/img/background-theme/backroundThemes/3.jpg)';
                    $('.main-music-control').style.backgroundImage = 'none';
                    $('.main-music-control').style.backgroundColor = '#D0CCC5';
                    $('.mobile-tab').style.backgroundColor = '#D0CCC5';
                    $('.sidebar__add-playlist').style.backgroundColor = '#DAD6D3';
                    $('.sidebar__add-playlist').style.borderTop = '1px solid rgba(0, 0, 0, 0.1)';
                    $('.nextsong__option-wrapper').style.backgroundColor = '#DAD6D3';
                    $('.header__width-search-sub').style.backgroundColor = '#FFFFFE';
                    $('.header__width-search-sub').classList.remove('header__width-search-sub--purple');
                    $('.header__width-search-sub').classList.add('header__width-search-sub--white');
                    $('.header__width-search-sub').classList.remove('header__width-search-sub--green');
                    $('.header__width-search-sub').classList.remove('header__width-search-sub--gray');
                    $('.header__setting-list').style.backgroundColor = '#FFFFFE';
                    $('.theme-modal__body').style.backgroundColor = '#E6E1DE';
                    $('.nextsong__option-wrapper-listplay').style.backgroundColor = '#E5E2E0';
                    $('.main-sidebar').style.backgroundColor = 'rgba(0, 0, 0, 0.05)';
                    $('.header__width-search-input').classList.add('header__width-search-input--white');
                    $('.header__width-search-input').classList.remove('header__width-search-input--dark');
                    $('.music-control__volume-input').style.backgroundColor = "rgba(0, 0, 0, 0.3)";
                    $('.music-control__progress-input').style.backgroundColor = "rgba(0, 0, 0, 0.3)";

                    $$('.js__main-color').forEach((item) => {
                        item.style.color = '#000';
                    })
                    $$('.js__sub-color').forEach((item) => {
                        item.style.color = '#696969';
                    })
                    $$('.js__backgroundColor').forEach((item) => {
                        item.style.backgroundColor = "#DAD6D3";
                    })
                    $$('.js__border').forEach((item) => {
                        item.style.border = "2px solid #000";
                    })
                    $('.music__option-item.music__option-item--active').style.backgroundColor = "#E5E2E0";
                    $('.music__option-item.music__option-item--active').style.color = "#000";
                } else if (index == 4) {
                    backgroundIndex = 4;
                    $('.header').style.backgroundColor = `var(--header-color-${backgroundIndex})`;
                    $('.header').style.boxShadow = '0 3px 5px rgba(0,0,0,0.1)';
                    $('.main').style.backgroundImage = 'url(./assets/img/background-theme/backroundThemes/4.jpg)';
                    $('.main-music-control').style.backgroundImage = 'none';
                    $('.main-music-control').style.backgroundColor = '#B4D0D0';
                    $('.mobile-tab').style.backgroundColor = '#B4D0D0';
                    $('.sidebar__add-playlist').style.backgroundColor = '#C9E4E6';
                    $('.sidebar__add-playlist').style.borderTop = '1px solid rgba(0, 0, 0, 0.1)';
                    $('.nextsong__option-wrapper').style.backgroundColor = '#C9E4E6';
                    $('.header__width-search-sub').style.backgroundColor = '#FFFFFE';
                    $('.header__width-search-sub').classList.remove('header__width-search-sub--purple');
                    $('.header__width-search-sub').classList.add('header__width-search-sub--white');
                    $('.header__width-search-sub').classList.remove('header__width-search-sub--green');
                    $('.header__width-search-sub').classList.remove('header__width-search-sub--gray');
                    $('.header__width-search').classList.remove('js__gray-backgroundColor');
                    $('.header__setting-list').style.backgroundColor = '#FFFFFE';
                    $('.theme-modal__body').style.backgroundColor = '#C9E4E6';
                    $('.nextsong__option-wrapper-listplay').style.backgroundColor = '#D9ECEE';
                    $('.main-sidebar').style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
                    $('.header__width-search-input').classList.add('header__width-search-input--white');
                    $('.header__width-search-input').classList.remove('header__width-search-input--dark');
                    $('.music-control__volume-input').style.backgroundColor = "rgba(0, 0, 0, 0.3)";
                    $('.music-control__progress-input').style.backgroundColor = "rgba(0, 0, 0, 0.3)";
                    
                    $$('.js__main-color').forEach((item) => {
                        item.style.color = '#000';
                    })
                    $$('.js__sub-color').forEach((item) => {
                        item.style.color = '#696969';
                    })
                    $$('.js__backgroundColor').forEach((item) => {
                        item.style.backgroundColor = "#C9E4E6";
                    })
                    $$('.js__border').forEach((item) => {
                        item.style.border = "2px solid #000";
                    })
                    $('.music__option-item.music__option-item--active').style.backgroundColor = "#D9ECEE";
                    $('.music__option-item.music__option-item--active').style.color = "#000";
                } else if (index == 5) {
                    backgroundIndex = 5;
                    $('.header').style.backgroundColor = `var(--header-color-${backgroundIndex})`;
                    $('.header').style.boxShadow = '0 3px 5px rgba(0,0,0,0.1)';
                    $('.main').style.backgroundImage = 'url(./assets/img/background-theme/backroundThemes/5.jpg)';
                    $('.main-music-control').style.backgroundImage = 'none';
                    $('.main-music-control').style.backgroundColor = '#F9C6C5';
                    $('.mobile-tab').style.backgroundColor = '#F9C6C5';
                    $('.sidebar__add-playlist').style.backgroundColor = '#F6E7E4';
                    $('.sidebar__add-playlist').style.borderTop = '1px solid rgba(0, 0, 0, 0.1)';
                    $('.nextsong__option-wrapper').style.backgroundColor = '#E6D2CD';
                    $('.header__width-search-sub').style.backgroundColor = '#FFFFFE';
                    $('.header__width-search-sub').classList.remove('header__width-search-sub--purple');
                    $('.header__width-search-sub').classList.add('header__width-search-sub--white');
                    $('.header__width-search-sub').classList.remove('header__width-search-sub--green');
                    $('.header__width-search-sub').classList.remove('header__width-search-sub--gray');
                    $('.header__width-search').classList.remove('js__gray-backgroundColor');
                    $('.header__setting-list').style.backgroundColor = '#FFFFFE';
                    $('.theme-modal__body').style.backgroundColor = '#F9C6C5';
                    $('.nextsong__option-wrapper-listplay').style.backgroundColor = '#EEE0DC';
                    $('.main-sidebar').style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
                    $('.header__width-search-input').classList.add('header__width-search-input--white');
                    $('.header__width-search-input').classList.remove('header__width-search-input--dark');
                    $('.music__option-item.music__option-item--active').style.backgroundColor = "#EEE0DC";
                    $('.music__option-item.music__option-item--active').style.color = "#000";
                    $('.music-control__volume-input').style.backgroundColor = "rgba(0, 0, 0, 0.3)";
                    $('.music-control__progress-input').style.backgroundColor = "rgba(0, 0, 0, 0.3)";

                    $$('.js__main-color').forEach((item) => {
                        item.style.color = '#000';
                    })
                    $$('.js__sub-color').forEach((item) => {
                        item.style.color = '#696969';
                    })
                    $$('.js__backgroundColor').forEach((item) => {
                        item.style.backgroundColor = "#E6D2CD";
                    })
                    $$('.js__border').forEach((item) => {
                        item.style.border = "2px solid #000";
                    })
                } else if (index == 6) {
                    backgroundIndex = 6;
                    $('.header').style.backgroundColor = `var(--header-color-${backgroundIndex})`;
                    $('.header').style.boxShadow = '0 3px 5px rgba(0,0,0,0.1)';
                    $('.main').style.backgroundImage = 'url(./assets/img/background-theme/backroundThemes/6.jpg)';
                    $('.main-music-control').style.backgroundImage = 'none';
                    $('.main-music-control').style.backgroundColor = '#C6C4D1';
                    $('.mobile-tab').style.backgroundColor = '#C6C4D1';
                    $('.sidebar__add-playlist').style.backgroundColor = '#B1B0BA';
                    $('.sidebar__add-playlist').style.borderTop = '1px solid rgba(0, 0, 0, 0.1)';
                    $('.nextsong__option-wrapper').style.backgroundColor = '#B1B0BA';
                    $('.header__width-search-sub').style.backgroundColor = '#FFFFFE';
                    $('.header__width-search-sub').classList.remove('header__width-search-sub--purple');
                    $('.header__width-search-sub').classList.add('header__width-search-sub--white');
                    $('.header__width-search-sub').classList.remove('header__width-search-sub--green');
                    $('.header__width-search-sub').classList.remove('header__width-search-sub--gray');
                    $('.header__width-search').classList.remove('js__gray-backgroundColor');
                    $('.header__setting-list').style.backgroundColor = '#FFFFFE';
                    $('.theme-modal__body').style.backgroundColor = '#E2E7F5';
                    $('.nextsong__option-wrapper-listplay').style.backgroundColor = '#C9C8CF';
                    $('.main-sidebar').style.backgroundColor = 'rgba(0,0,0,0.05)';
                    $('.header__width-search-input').classList.add('header__width-search-input--white');
                    $('.header__width-search-input').classList.remove('header__width-search-input--dark');
                    $('.music__option-item.music__option-item--active').style.backgroundColor = "#C9C8CF";
                    $('.music__option-item.music__option-item--active').style.color = "#000";
                    $('.music-control__volume-input').style.backgroundColor = "rgba(0, 0, 0, 0.3)";
                    $('.music-control__progress-input').style.backgroundColor = "rgba(0, 0, 0, 0.3)";

                    $$('.js__main-color').forEach((item) => {
                        item.style.color = '#000';
                    })
                    $$('.js__sub-color').forEach((item) => {
                        item.style.color = '#696969';
                    })
                    $$('.js__backgroundColor').forEach((item) => {
                        item.style.backgroundColor = "#B1B0BA";
                    })
                    $$('.js__border').forEach((item) => {
                        item.style.border = "2px solid #000";
                    })
                } else if (index == 7) {
                    backgroundIndex = 7;
                    $('.header').style.backgroundColor = `var(--header-color-${backgroundIndex})`;
                    $('.header').style.boxShadow = '0 3px 5px rgba(0,0,0,0.1)';
                    $('.main').style.backgroundImage = 'url(./assets/img/background-theme/backroundThemes/7.jpg)';
                    $('.main-music-control').style.backgroundImage = 'none';
                    $('.main-music-control').style.backgroundColor = '#FFFFFF';
                    $('.mobile-tab').style.backgroundColor = '#FFFFFF';
                    $('.sidebar__add-playlist').style.backgroundColor = '#F2F2F2';
                    $('.sidebar__add-playlist').style.borderTop = '1px solid rgba(0, 0, 0, 0.1)';
                    $('.nextsong__option-wrapper').style.backgroundColor = '#F2F2F2';
                    $('.header__width-search-sub').style.backgroundColor = '#FFFFFE';
                    $('.header__width-search-sub').classList.remove('header__width-search-sub--purple');
                    $('.header__width-search-sub').classList.add('header__width-search-sub--white');
                    $('.header__width-search-sub').classList.remove('header__width-search-sub--green');
                    $('.header__width-search-sub').classList.remove('header__width-search-sub--gray');
                    $('.header__width-search').classList.remove('js__gray-backgroundColor');
                    $('.header__setting-list').style.backgroundColor = '#FFFFFE';
                    $('.theme-modal__body').style.backgroundColor = '#E6E1DE';
                    $('.nextsong__option-wrapper-listplay').style.backgroundColor = '#FFFFFF';
                    $('.main-sidebar').style.backgroundColor = 'rgba(0,0,0,0.05)';
                    $('.header__width-search-input').classList.add('header__width-search-input--white');
                    $('.header__width-search-input').classList.remove('header__width-search-input--dark');
                    $('.music__option-item.music__option-item--active').style.backgroundColor = "#FFFFFF";
                    $('.music__option-item.music__option-item--active').style.color = "#000";
                    $('.music-control__volume-input').style.backgroundColor = "rgba(0, 0, 0, 0.3)";
                    $('.music-control__progress-input').style.backgroundColor = "rgba(0, 0, 0, 0.3)";

                    $$('.js__main-color').forEach((item) => {
                        item.style.color = '#000';
                    })
                    $$('.js__sub-color').forEach((item) => {
                        item.style.color = '#696969';
                    })
                    $$('.js__backgroundColor').forEach((item) => {
                        item.style.backgroundColor = "#F2F2F2";
                    })
                    $$('.js__border').forEach((item) => {
                        item.style.border = "2px solid #000";
                    })
                }
                
                app.verifyOptionTextColor();
            }
        });
    },

    // RENDER LIST MUSIC ITEM
    renderPlayList : function (playListElement, songsData) {
        const htmls = songsData.map((song, index) => {
            return `
                <!-- songs-item-playing--active-onplay songs-item--active songs-item-playbtn--active -->
                <li class="songs-item js__song-item0 ${index == this.currentIndex ? 'songs-item--active' : ''} " data-index="${index}">
                    <div class="songs-item-left">
                        <div style="background-image: url(${song.background});" class="songs-item-left-img js__songs-item-left-img-0">
                            <div class="songs-item-left-img-playbtn"><i class="fas fa-play"></i></div>
                            <div class="songs-item-left-img-playing-box">
                                <img class = "songs-item-left-img-playing" src="./assets/img/songs/icon-playing.gif" alt="playing">
                            </div>
                        </div>

                        <div class="songs-item-left-body">
                            <h3 class="songs-item-left-body-name js__main-color">${song.name}</h3>
                            <span class="songs-item-left-body-singer js__sub-color">${song.singer}</span>
                        </div>
                    </div>
                    <div class="songs-item-center tablet-hiden mobile-hiden  js__sub-color">
                        <span>${song.name} (Remix)</span>
                    </div>
                    <div class="songs-item-right mobile-hiden ">
                        <span class="songs-item-right-mv ipad-air-hiden"><i class="fas fa-photo-video js__main-color"></i></span>
                        <span class="songs-item-right-lyric ipad-air-hiden"><i class="fas fa-microphone js__main-color"></i></span>
                        <span class="songs-item-right-tym">
                            <i class="fas fa-heart songs-item-right-tym-first"></i>
                            <i class="far fa-heart songs-item-right-tym-last"></i>
                        </span>
                        <span class="songs-item-right-duration js__sub-color">${song.duration}</span>
                        <span class="songs-item-right-more js__main-color"><i class="fas fa-ellipsis-h"></i></span>
                    </div>
                </li>`
        })
        playListElement.innerHTML = htmls.join('');
    },

    // RENDER LIST MUSIC ITEM OPTION1
    renderPlayList1 : function (playListElement, songsData) {
        const htmls = songsData.map((song, index) => {
            return `
                <!-- songs-item-playing--active-onplay songs-item--active songs-item-playbtn--active -->
                <li class="songs-item js__song-item1 ${index == this.currentIndex ? 'songs-item--active songs-item-playbtn--active' : ''} " data-index="${index}">
                    <div class="songs-item-left">
                        <div style="background-image: url(${song.background});" class="songs-item-left-img js__songs-item-left-img-1">
                            <div class="songs-item-left-img-playbtn"><i class="fas fa-play"></i></div>
                            <div class="songs-item-left-img-playing-box">
                                <img class = "songs-item-left-img-playing" src="./assets/img/songs/icon-playing.gif" alt="playing">
                            </div>
                        </div>

                        <div class="songs-item-left-body">
                            <h3 class="songs-item-left-body-name js__main-color">${song.name}</h3>
                            <span class="songs-item-left-body-singer js__sub-color">${song.singer}</span>
                        </div>
                    </div>
                    <div class="songs-item-center tablet-hiden mobile-hiden js__sub-color">
                        <span>${song.name} (Remix)</span>
                    </div>
                    <div class="songs-item-right mobile-hiden">
                        <span class="songs-item-right-mv ipad-air-hiden"><i class="fas fa-photo-video js__main-color"></i></span>
                        <span class="songs-item-right-lyric ipad-air-hiden"><i class="fas fa-microphone js__main-color"></i></span>
                        <span class="songs-item-right-tym">
                            <i class="fas fa-heart songs-item-right-tym-first"></i>
                            <i class="far fa-heart songs-item-right-tym-last"></i>
                        </span>
                        <span class="songs-item-right-duration js__sub-color">${song.duration}</span>
                        <span class="songs-item-right-more js__main-color"><i class="fas fa-ellipsis-h"></i></span>
                    </div>
                </li>`
        })
        playListElement.innerHTML = htmls.join('');
    },

    // RENDER LIST ZINGCHART
    renderZingChart : function () {
        const htmls = this.songsData.map((song, index) => {
            return index < 10 ? `
                <!-- songs-item-playing--active-onplay songs-item--active songs-item-playbtn--active -->
                <li class="songs-item">
                    <div class="songs-item-left">
                        <span class="zingchart__item-left-stt ${index == 0 ? 'zingchart__item-first': index == 1 ? 'zingchart__item-second' : index == 2 ? 'zingchart__item-third' : ''}">${index+1}</span>
                        <span class="zingchart__item-left-line js__main-color">-</span>
                        <div style="background-image: url(${song.background});" class="songs-item-left-img">
                            <div class="songs-item-left-img-playbtn"><i class="fas fa-play"></i></div>
                            <div class="songs-item-left-img-playing-box">
                                <img class = "songs-item-left-img-playing" src="./assets/img/songs/icon-playing.gif" alt="playing">
                            </div>
                        </div>

                        <div class="songs-item-left-body">
                            <h3 class="songs-item-left-body-name js__main-color">${song.name}</h3>
                            <span class="songs-item-left-body-singer js__sub-color">${song.singer}</span>
                        </div>
                    </div>
                    <div class="songs-item-center tablet-hiden mobile-hiden js__sub-color">
                        <span>${song.name} (Remix)</span>
                    </div>
                    <div class="songs-item-right mobile-hiden">
                        <span class="songs-item-right-mv ipad-air-hiden"><i class="fas fa-photo-video js__main-color"></i></span>
                        <span class="songs-item-right-lyric ipad-air-hiden"><i class="fas fa-microphone js__main-color"></i></span>
                        <span class="songs-item-right-tym">
                            <i class="fas fa-heart songs-item-right-tym-first"></i>
                            <i class="far fa-heart songs-item-right-tym-last"></i>
                        </span>
                        <span class="songs-item-right-duration js__sub-color">${song.duration}</span>
                        <span class="songs-item-right-more js__main-color"><i class="fas fa-ellipsis-h"></i></span>
                    </div>
                </li>` : ''
        })
        $('.js__zingchart__list').innerHTML = htmls.join('');
    },

    // RENDER LIST ZINGCHART MORE
    renderZingChartMore : function () {
        const htmls = this.songsData.map((song, index) => {
            return `
                <!-- songs-item-playing--active-onplay songs-item--active songs-item-playbtn--active -->
                <li class="songs-item">
                    <div class="songs-item-left">
                        <span class="zingchart__item-left-stt ${index == 0 ? 'zingchart__item-first': index == 1 ? 'zingchart__item-second' : index == 2 ? 'zingchart__item-third' : ''}">${index+1}</span>
                        <span class="zingchart__item-left-line">-</span>
                        <div style="background-image: url(${song.background});" class="songs-item-left-img">
                            <div class="songs-item-left-img-playbtn"><i class="fas fa-play"></i></div>
                            <div class="songs-item-left-img-playing-box">
                                <img class = "songs-item-left-img-playing" src="./assets/img/songs/icon-playing.gif" alt="playing">
                            </div>
                        </div>

                        <div class="songs-item-left-body">
                            <h3 class="songs-item-left-body-name js__main-color">${song.name}</h3>
                            <span class="songs-item-left-body-singer js__sub-color">${song.singer}</span>
                        </div>
                    </div>
                    <div class="songs-item-center tablet-hiden mobile-hiden js__sub-color">
                        <span>${song.name} (Remix)</span>
                    </div>
                    <div class="songs-item-right mobile-hiden">
                        <span class="songs-item-right-mv ipad-air-hiden"><i class="fas fa-photo-video js__main-color"></i></span>
                        <span class="songs-item-right-lyric ipad-air-hiden"><i class="fas fa-microphone js__main-color"></i></span>
                        <span class="songs-item-right-tym">
                            <i class="fas fa-heart songs-item-right-tym-first"></i>
                            <i class="far fa-heart songs-item-right-tym-last"></i>
                        </span>
                        <span class="songs-item-right-duration js__sub-color">${song.duration}</span>
                        <span class="songs-item-right-more js__main-color"><i class="fas fa-ellipsis-h"></i></span>
                    </div>
                </li>`
        })
        $('.js__zingchart__list').innerHTML = htmls.join('');
    },

    // RENDER HEADDING NEXT SONG 
    renderNextSongHeadding: function(playListElement, songs){
        const htmls = this.songsData.map((song, index) => {
            return index <= this.currentIndex ? `
            <!-- nextsong__fist-item-headding--active nextsong__fist-item-playbtn--active-->
            <div class="nextsong__fist-item nextsong__item ${audio.onplay && index == this.currentIndex ? 'nextsong__fist-item-headding--active' : ''} ${index == this.currentIndex ? 'nextsong__fist-item-background--active' : ''}" data-index="${index}">
                <div class="nextsong__item-img" style="background-image: url(${song.background});">
                    <div class="nextsong__item-playbtn"><i class="fas fa-play"></i></div>
                    <div class="songs-item-left-img-playing-box">
                        <img class = "songs-item-left-img-playing" src="./assets/img/songs/icon-playing.gif" alt="playing">
                    </div>
                </div>
                <div class="nextsong__item-body">
                    <span class="nextsong__item-body-heading ${index == this.currentIndex ? '' : 'js__main-color'}">${song.name}</span>
                    <span class="nextsong__item-body-depsc ${index == this.currentIndex ? '' : 'js__sub-color'}">${song.singer}</span>
                </div>
                <div class="nextsong__item-action">
                    <span class="nextsong__item-action-heart">
                        <i class="fas fa-heart nextsong__item-action-heart-icon1"></i>
                        <i class="far fa-heart nextsong__item-action-heart-icon2"></i>
                    </span>
                    <span class="nextsong__item-action-dot">
                        <i class="fas fa-ellipsis-h "></i>
                    </span>
                </div>
            </div>` : ''
        })
        playListElement.innerHTML = htmls.join('');
    },

    // RENDER HEADDING NEXT SONG BAN ĐẦU
    renderNextSongHeaddingStart: function(playListElement, songs){
        const htmls = this.songsData.map((song, index) => {
            return index <= this.currentIndex ? `
            <!-- nextsong__fist-item-headding--active nextsong__fist-item-playbtn--active-->
            <div class="nextsong__fist-item nextsong__item nextsong__fist-item-playbtn--active ${audio.onplay && index == this.currentIndex ? 'nextsong__fist-item-headding--active' : ''} ${index == this.currentIndex ? 'nextsong__fist-item-background--active' : ''}" data-index="${index}">
                <div class="nextsong__item-img" style="background-image: url(${song.background});">
                    <div class="nextsong__item-playbtn"><i class="fas fa-play"></i></div>
                    <div class="songs-item-left-img-playing-box">
                        <img class = "songs-item-left-img-playing" src="./assets/img/songs/icon-playing.gif" alt="playing">
                    </div>
                </div>
                <div class="nextsong__item-body">
                    <span class="nextsong__item-body-heading ${index == this.currentIndex ? '' : 'js__main-color'}">${song.name}</span>
                    <span class="nextsong__item-body-depsc ${index == this.currentIndex ? '' : 'js__sub-color'}">${song.singer}</span>
                </div>
                <div class="nextsong__item-action">
                    <span class="nextsong__item-action-heart">
                        <i class="fas fa-heart nextsong__item-action-heart-icon1"></i>
                        <i class="far fa-heart nextsong__item-action-heart-icon2"></i>
                    </span>
                    <span class="nextsong__item-action-dot">
                        <i class="fas fa-ellipsis-h "></i>
                    </span>
                </div>
            </div>` : ''
        })
        playListElement.innerHTML = htmls.join('');
    },

    // RENDER LIST NEXT SONG 
    renderNextSongList: function(playListElement) {
        if (this.currentIndex >= this.songsData.length - 1) {
            playListElement.innerHTML = `
            <span class="nextsong__last-item-end js__sub-color">
                HẾT BÀI RỒI BẠN ƠI! HAHA
            </span>`;
        } else {
            const htmls = this.songsData.map((song, index) => {
                return index > this.currentIndex ? `
                    <li class="nextsong__last-item nextsong__item" data-index="${index}">
                        <div class="nextsong__item-img" style="background-image: url(${song.background});">
                            <div class="nextsong__item-playbtn"><i class="fas fa-play"></i></div>
                        </div>
                        <div class="nextsong__item-body">
                            <span class="nextsong__item-body-heading js__main-color">${song.name}</span>
                            <span class="nextsong__item-body-depsc js__sub-color">${song.singer}</span>
                        </div>
                        <div class="nextsong__item-action">
                            <span class="nextsong__item-action-heart">
                                <i class="fas fa-heart nextsong__item-action-heart-icon1"></i>
                                <i class="far fa-heart nextsong__item-action-heart-icon2"></i>
                            </span>
                            <span class="nextsong__item-action-dot js__main-color">
                                <i class="fas fa-ellipsis-h "></i>
                            </span>
                        </div>
                    </li>` : ''
            })
            playListElement.innerHTML = htmls.join('');
        }
        
    },

    // RENDER LIST NEXT SONG RANDOM
    renderNextSongListRandom: function(playListElement) {
        const htmls =  `<span class="nextsong__option-random">
                            Bật chế độ random thì cần gì xem trước bài phát tiếp theo nhể, đỡ phải code :)
                        </span>`
        playListElement.innerHTML = htmls;
    },

    

    // KHI ACTIVE KHUẤT THÌ ĐƯA ITEM ACTIVE LÊN VIEW
    scrollToActiveSong: function () {
        setTimeout(() => {
          $(".songs-item--active").scrollIntoView({
            behavior: "smooth",
            block: "nearest"
          });
        }, 300);
    },

    // KHI ACTIVE KHUẤT THÌ ĐƯA NEXT SONG ITEM ACTIVE LÊN VIEW
    scrollToActiveNextSong: function () {
        // setTimeout(() => {
        //   $(".nextsong__fist-item-headding--active").scrollIntoView({
        //     behavior: "smooth",
        //     block: "nearest"
        //   });
        // }, 300);
    },

    RandomSong: function () {
        let newIndex;
        do {
          newIndex = Math.floor(Math.random() * this.songsData.length);
        } while (newIndex === this.currentIndex);
    
        this.currentIndex = newIndex;
        this.loadCurrentSong();
    },

    loadCurrentSong: function () {
        nameSong.textContent = this.currentSong.name;
        $('.mobile-player__body-now-name').textContent = this.currentSong.name;
        nameSinger.textContent = this.currentSong.singer;
        $('.mobile-player__body-now-singer').textContent = this.currentSong.singer;
        $('.mobile-player__body-thumb').style.backgroundImage = `url('${this.currentSong.background}')`;
        this.displayDurationTime();
        audio.src = this.currentSong.pathSong;
    },

    nextSong: function () {
        this.currentIndex++;
        if (this.currentIndex >= this.songsData.length) {
          this.currentIndex = 0;
        }
        this.loadCurrentSong();
    },

    prevSong: function () {
        this.currentIndex--;
        if (this.currentIndex < 0) {
          this.currentIndex = this.songsData.length - 1;
        }
        this.loadCurrentSong();
    },

    // ĐỊNH DẠNG LẠI THỜI GIAN CHO ĐẸP
    formatTime : function(number) {
        const minutes = Math.floor(number / 60);
        const seconds = Math.floor(number - minutes * 60);
        return `${minutes < 10 ? "0" + minutes : minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
    },

    // HIỂN THỊ REMAIN TIME TIME VÀO PLAYER
    displayRemainTime : function() {
        remainTime.textContent = this.formatTime(audio.currentTime);
        // on mobile
        $('.mobile-player__ctrl-progress-time-start').textContent = this.formatTime(audio.currentTime);
    },

    // HIỂN THỊ VÀ DURATION TIME VÀO PLAYER
    displayDurationTime : function() {
        // if (!audio.duration) {
        //     durationTime.textContent = "00:00";
        // } else {
        //     durationTime.textContent = this.formatTime(audio.duration);
        // }
        durationTime.textContent = this.currentSong.duration;
        $('.mobile-player__ctrl-progress-time-duration').textContent = this.currentSong.duration;
    },

    // render next song
    renderNexrSong: function() {
        this.renderNextSongHeadding(nextSongHeadding,this.songsData);
        this.renderNextSongList(nextSongList);
        themeItems[backgroundIndex].click();
    },

    verifyOptionTextColor: function() {
        $$('.music__option-item').forEach((tab, index) => {
            if(backgroundIndex === 0 || backgroundIndex === 1 || backgroundIndex === 2) {
                tab.style.color = '#fff'
            } else {
                tab.style.color = '#000'
            }
        })
    },

    // SỰ KIỆN VÀ XỬ LÝ
    handleEvents: function () {
        const _this = this;
        const songTyms = $$('.songs-item-right-tym');
        const songItems = $$('.js__song-item0');
        const nextSongsItem = $$('.nextsong__item');
        const playBtnIcons = $$('.js__songs-item-left-img-0');
        const playNextSongBtnIcons = $$('.nextsong__item-img');
        const songItemsOption1 = $$('.js__song-item1');
        const playBtnIconsOption1 = $$('.js__songs-item-left-img-1');
        const actionHeartNextSongs = $$('.nextsong__item-action-heart');
        const nextSongBox = $('.nextsong__box');

        var sliderIndex = 1;
        var sliderIndex1 = 1;
        var sliderLenght = _this.songsData.length;

        // KHI BẤM VÀO PLAYER ON MOBILE THÌ HIỆN PLAYER TO TRÊN ĐIỆN THOẠI
        $('.music-control__left').onclick = function() {
            $('.mobile-player').classList.add('active');
        }

        $('.mobile-player__headding-close').onclick = function() {
            $('.mobile-player').classList.remove('active');
        }

        // NHẤN MORE HIỂN THỊ 100 BÀI HÁT
        $('.js__zingchart__100more').onclick = function() {
            _this.renderZingChartMore();
            this.style.display = 'none';
        }

        // CHUYỂN TAB CÁ NHÂN / KHÁM PHÁ / ZINGCHART
        sideBarTabs.forEach((tab, index) => {
            tab.onclick = function() {
                $('.js__sidebar-tabs.sidebar__item--active').classList.remove('sidebar__item--active');
                tab.classList.add('sidebar__item--active');
                containerPanes[0].style.display = "none";
                containerPanes[1].style.display = "none";
                containerPanes[2].style.display = "none";
                containerPanes[index].style.display = "block";
            }
        })

        // CHUYỂN TAB CÁ NHÂN / KHÁM PHÁ / ZINGCHART TRÊN MOBILE
        $$('.js__mobile-tab__item').forEach((tab, index) => {
            tab.onclick = function() {
                $('.mobile-tab__item.active').classList.remove('active');
                tab.classList.add('active');
                containerPanes[0].style.display = "none";
                containerPanes[1].style.display = "none";
                containerPanes[2].style.display = "none";
                containerPanes[index].style.display = "block";
            }
        })

        // chuyển tab option
        tabs.forEach((tab, index) => {
            const pane = panes[index];
            $('.panes-item:not(.music__option-item--active)').style.backgroundColor = 'transparent';
            themeItems[backgroundIndex].click();
            _this.verifyOptionTextColor();
            tab.onclick = function() {
                $('.music__option-item.music__option-item--active').classList.remove('music__option-item--active');
                tab.classList.add('music__option-item--active')
                $('.panes-item.active').classList.remove('active');
                tabs[0].style.backgroundColor = 'transparent';
                tabs[1].style.backgroundColor = 'transparent';
                tabs[2].style.backgroundColor = 'transparent';
                tabs[3].style.backgroundColor = 'transparent';
                tab.style.backgroundColor = `var(--option-color-${backgroundIndex})`;
                pane.classList.add('active')
                // if (index === 1) {
                //     _this.renderPlayList1($('.option-music-list'),_this.songsData);
                // }
                $('.music__option-item.music__option-item--active').classList.remove('js__main-color');
            }
        })

        // khi mới mở web thì sẽ chọn hightlight dòng đầu tiên
        songItems[this.currentIndex].classList.add('songs-item-playbtn--active');

        
        songTyms.forEach((songTym, index) => {
            songTym.onclick = function() {
                songTym.classList.toggle('songs-item-right-tym--active');
            }
        });

        // CLICK TYM Ở NOW PLAYER
        musicNowTym.onclick = function() {
            this.classList.toggle('music-control__left-action-tym-box-active');
        }

        // BẬT TĂT MUTE Ở VOLUME
        volumeIcon.onclick = function() {
            _this.isMute = !_this.isMute;
            volumeIcon.classList.toggle('music-control__right--active', _this.isMute);
            if (_this.isMute) {
                audio.volume = 0;
                volumeProgress.value = 0;
            } else {
                audio.volume = _this.volume / 100;
                volumeProgress.value = _this.volume;
            }
        }

        // TĂNG GIẢM ÂM LƯỢNG
        volumeProgress.onchange = function(e) {
            _this.volume = e.target.value;
            audio.volume = e.target.value / 100;
            if (e.target.value == 0) {
                volumeIcon.classList.add('music-control__right--active')
                _this.isMute = true;
            } else {
                volumeIcon.classList.remove('music-control__right--active');
                _this.isMute = false;
            }
        }


        // XỬ LÝ CD QUAY/DỪNG
        const cdThumbAnimate = cdThumb.animate([{ transform: "rotate(360deg)" }], {
            duration: 10000, // 10 seconds
            iterations: Infinity
        });
        cdThumbAnimate.pause();

        // XỬ LÝ CD QUAY/DỪNG TO TRÊN MOBILE
        const cdThumbAnimateMobile = $('.mobile-player__body-thumb').animate([{ transform: "rotate(360deg)" }], {
            duration: 10000, // 10 seconds
            iterations: Infinity
        });
        cdThumbAnimateMobile.pause();

        //   LÀM SLIDER BÊN TAP CÁ NHÂN
        changeImage = function() {
            sliderItems.forEach((item,index) => {
                    // index == sliderIndex ? sliderItems[index].classList.replace('option-all__song-slider-img-third','option-all__song-slider-img-first') : index == sliderIndex + 1 ?  sliderItems[index].classList.replace('option-all__song-slider-img-third','option-all__song-slider-img-second'):sliderItems[index].classList.replace('option-all__song-slider-img-third','option-all__song-slider-img-third');
                if (index == sliderIndex) {
                    sliderItems[index].classList.replace('option-all__song-slider-img-third','option-all__song-slider-img-first');
                    sliderItems[index].classList.replace('option-all__song-slider-img-second','option-all__song-slider-img-first');
                } else if (index == sliderIndex + 1) {
                    sliderItems[index].classList.replace('option-all__song-slider-img-first','option-all__song-slider-img-second');
                    sliderItems[index].classList.replace('option-all__song-slider-img-third','option-all__song-slider-img-second');
                } else {
                    sliderItems[index].classList.replace('option-all__song-slider-img-first','option-all__song-slider-img-third');
                    sliderItems[index].classList.replace('option-all__song-slider-img-second','option-all__song-slider-img-third');
                }
                if (sliderIndex == sliderLenght - 1) {
                    sliderItems[0].classList.replace('option-all__song-slider-img-first','option-all__song-slider-img-second');
                    sliderItems[0].classList.replace('option-all__song-slider-img-third','option-all__song-slider-img-second');
                }
            })
            sliderIndex++;
            if (sliderIndex >= sliderLenght) {
                sliderIndex = 0;
            }
        }
        setInterval(changeImage,2000);

        //   LÀM SLIDER BÊN TAP KHÁM PHÁ
        changeImage1Replate = function() {
            slidersDiscover.forEach((item,index) => {
                if (index == sliderIndex1) {
                    slidersDiscover[index].classList.replace('container-discover__slider-item-second','container-discover__slider-item-first');
                    slidersDiscover[index].classList.replace('container-discover__slider-item-third','container-discover__slider-item-first');
                    slidersDiscover[index].classList.replace('container-discover__slider-item-four','container-discover__slider-item-first');
                } else if (index == sliderIndex1 + 1) {
                    slidersDiscover[index].classList.replace('container-discover__slider-item-first','container-discover__slider-item-second');
                    slidersDiscover[index].classList.replace('container-discover__slider-item-third','container-discover__slider-item-second');
                    slidersDiscover[index].classList.replace('container-discover__slider-item-four','container-discover__slider-item-second');
                } else if (index == sliderIndex1 + 2) {
                    slidersDiscover[index].classList.replace('container-discover__slider-item-first','container-discover__slider-item-third');
                    slidersDiscover[index].classList.replace('container-discover__slider-item-second','container-discover__slider-item-third');
                    slidersDiscover[index].classList.replace('container-discover__slider-item-four','container-discover__slider-item-third');
                } else {
                    slidersDiscover[index].classList.replace('container-discover__slider-item-first','container-discover__slider-item-four');
                    slidersDiscover[index].classList.replace('container-discover__slider-item-second','container-discover__slider-item-four');
                    slidersDiscover[index].classList.replace('container-discover__slider-item-third','container-discover__slider-item-four');
                }
                if (sliderIndex1 == 2) {
                    slidersDiscover[0].classList.replace('container-discover__slider-item-first','container-discover__slider-item-third');
                    slidersDiscover[0].classList.replace('container-discover__slider-item-second','container-discover__slider-item-third');
                    slidersDiscover[0].classList.replace('container-discover__slider-item-four','container-discover__slider-item-third');
                } else if (sliderIndex1 == 3) {
                    slidersDiscover[0].classList.replace('container-discover__slider-item-first','container-discover__slider-item-second');
                    slidersDiscover[0].classList.replace('container-discover__slider-item-third','container-discover__slider-item-second');
                    slidersDiscover[0].classList.replace('container-discover__slider-item-four','container-discover__slider-item-second');
                    slidersDiscover[1].classList.replace('container-discover__slider-item-first','container-discover__slider-item-third');
                    slidersDiscover[1].classList.replace('container-discover__slider-item-second','container-discover__slider-item-third');
                    slidersDiscover[1].classList.replace('container-discover__slider-item-four','container-discover__slider-item-third');
                }
            })
        }
        changeImage1 = function() {
            changeImage1Replate();
            sliderIndex1++;
            if (sliderIndex1 >= 4) {
                sliderIndex1 = 0;
            }
        }
        setInterval(changeImage1,5000);
        // khi bấm vào nut right của slider
        $('.js__container-discover__slider-right').onclick = function() {
            changeImage1();
        }
        // khi bấm vào nut left của slider
        $('.js__container-discover__slider-left').onclick = function() {
            changeImage1Replate();
            sliderIndex1--;
            if (sliderIndex1 < 0) {
                sliderIndex1 = 3;
            }
        }



        // XỬ LÝ KHI CLICK VÀO NÚT PLAY
        playBtn.onclick = function () {
            if (_this.isPlaying) {
              audio.pause();
            } else {
              audio.play();
            }
        }

        // XỬ LÝ KHI CLICK VÀO NÚT PLAY ON MOBILE
        $('.js__mobile-player__ctrl-icon').onclick = function () {
            if (_this.isPlaying) {
              audio.pause();
            } else {
              audio.play();
            }
        }

        // Khi song được play
        audio.onplay = function () {
            const nextSongsItemHeadding = $$('.nextsong__fist-item');

            _this.isPlaying = true;
            // player.classList.add("playing");
            cdThumbAnimate.play();
            cdThumbAnimateMobile.play();
            playBtn.classList.add('music-control__icon-play--active');
            $('.js__mobile-player__ctrl-icon').classList.add('music-control__icon-play--active');
            thunbPlayerBox.style.transform = "translateX(20px)";

            songItems[_this.currentIndex].classList.add('songs-item-playing--active-onplay');
            songItems[_this.currentIndex].classList.add('songs-item--active');            
            songItems[_this.currentIndex].classList.remove('songs-item-playbtn--active'); 

            songItemsOption1[_this.currentIndex].classList.add('songs-item-playing--active-onplay');
            songItemsOption1[_this.currentIndex].classList.add('songs-item--active');            
            songItemsOption1[_this.currentIndex].classList.remove('songs-item-playbtn--active'); 
            
            // songItemsOption1[_this.currentIndex].classList.add('songs-item-playing--active-onplay');
            
            const nextSongItems = $$('.nextsong__item')
            nextSongItems[_this.currentIndex].classList.add('nextsong__fist-item-headding--active');          
            nextSongItems[_this.currentIndex].classList.remove('nextsong__fist-item-playbtn--active');          
        };
  
        // KHI SONG BỊ PAUSE
        audio.onpause = function () {
            _this.isPlaying = false;
            cdThumbAnimate.pause();
            cdThumbAnimateMobile.pause();
            playBtn.classList.remove('music-control__icon-play--active');
            $('.js__mobile-player__ctrl-icon').classList.remove('music-control__icon-play--active');
            thunbPlayerBox.style.transform = "translateX(0)";
            songItems[_this.currentIndex].classList.remove('songs-item-playing--active-onplay');
            songItems[_this.currentIndex].classList.add('songs-item-playbtn--active');
            songItemsOption1[_this.currentIndex].classList.remove('songs-item-playing--active-onplay');
            songItemsOption1[_this.currentIndex].classList.add('songs-item-playbtn--active');
            const nextSongItems = $$('.nextsong__item')
            nextSongItems[_this.currentIndex].classList.remove('nextsong__fist-item-headding--active');
            nextSongItems[_this.currentIndex].classList.add('nextsong__fist-item-playbtn--active');          
        }

        // KHI TIẾN ĐỘ BÀI HÁT THAY ĐỔI
        audio.ontimeupdate = function () {
            if (audio.duration) {
                const progressPercent = Math.floor((audio.currentTime / audio.duration) * 100);
                progress.value = progressPercent;
                // on mobile
                $('#progress2').value = progressPercent;
            }
            _this.displayRemainTime();
        }

        // KHI TUA SONG
        progress.onchange = function (e) {
            const seekTime = (audio.duration / 100) * e.target.value;
            audio.currentTime = seekTime;
        }
        // KHI TUA SONG ON MOBILE
        $('#progress2').onchange = function (e) {
            const seekTime = (audio.duration / 100) * e.target.value;
            audio.currentTime = seekTime;
        }

        // XOÁ CÁC THUỘC TÍNH KHI ACTIVE CŨ
        deleteActive = function() {
            songItems.forEach((songItem, index) => {
                songItem.classList.remove('songs-item-playing--active-onplay');
                songItem.classList.remove('songs-item--active');
                songItem.classList.remove('songs-item-playbtn--active');
            });
        }

        deleteActive1 = function() {
            songItemsOption1.forEach((songItem, index) => {
                songItem.classList.remove('songs-item-playing--active-onplay');
                songItem.classList.remove('songs-item--active');
                songItem.classList.remove('songs-item-playbtn--active');
            });
        }


        // KHI NEXT SONG
        nextBtn.onclick = function() {
            if (_this.isRandom) {
                _this.RandomSong();
                // không render list next song
                _this.renderNextSongHeadding(nextSongHeadding,this.songsData);
                nextSongList.innerHTML = `
                    <span class="nextsong__last-item-end">
                        Bật chế độ random thì cần gì xem trước bài phát tiếp theo nhể, đỡ phải code :)
                    </span>`;
            } else {
                _this.nextSong();
                _this.renderNexrSong();
            }
            audio.play();
            _this.scrollToActiveNextSong();
            _this.scrollToActiveSong();
            deleteActive();
            deleteActive1();
        }

        // KHI NEXT SONG ON MOBILE
        $('.js__mobile-player__ctrl-icon4').onclick = function() {
            if (_this.isRandom) {
                _this.RandomSong();
                // không render list next song
                _this.renderNextSongHeadding(nextSongHeadding,this.songsData);
                nextSongList.innerHTML = `
                    <span class="nextsong__last-item-end">
                        Bật chế độ random thì cần gì xem trước bài phát tiếp theo nhể, đỡ phải code :)
                    </span>`;
            } else {
                _this.nextSong();
                _this.renderNexrSong();
            }
            audio.play();
            _this.scrollToActiveNextSong();
            _this.scrollToActiveSong();
            deleteActive();
            deleteActive1();
        }

        // KHI PREV SONG
        prevBtn.onclick = function() {
            if (_this.isRandom) {
                _this.RandomSong();
                // không render list next song
                _this.renderNextSongHeadding(nextSongHeadding,this.songsData);
                nextSongList.innerHTML = `
                    <span class="nextsong__last-item-end">
                        Bật chế độ random thì cần gì xem trước bài phát tiếp theo nhể, đỡ phải code :)
                    </span>`;
                _this.scrollToActiveNextSong();
            } else {
                _this.prevSong();
                _this.renderNexrSong();
                _this.scrollToActiveNextSong();
            }
            audio.play();
            deleteActive();
            deleteActive1();
            _this.scrollToActiveSong();
        }

        // KHI PREV SONG ON MOBILE
        $('.js__mobile-player__ctrl-icon2').onclick = function() {
            if (_this.isRandom) {
                _this.RandomSong();
                // không render list next song
                _this.renderNextSongHeadding(nextSongHeadding,this.songsData);
                nextSongList.innerHTML = `
                    <span class="nextsong__last-item-end">
                        Bật chế độ random thì cần gì xem trước bài phát tiếp theo nhể, đỡ phải code :)
                    </span>`;
                _this.scrollToActiveNextSong();
            } else {
                _this.prevSong();
                _this.renderNexrSong();
                _this.scrollToActiveNextSong();
            }
            audio.play();
            deleteActive();
            deleteActive1();
            _this.scrollToActiveSong();
        }

        // KHI BAM VÀO NÚT PHÁT TẤT CẢ OPTION-0
        playAllBtn.onclick = function() {
            _this.currentIndex = 0;
            _this.loadCurrentSong();
            audio.play();
            deleteActive();
            _this.scrollToActiveSong();
            if(_this.isRandom) {
                _this.renderNextSongHeadding(nextSongHeadding,_this.songsData);
                nextSongList.innerHTML = `
                    <span class="nextsong__last-item-end">
                        Bật chế độ random thì cần gì xem trước bài phát tiếp theo nhể, đỡ phải code :)
                    </span>`;
            } else {
                _this.renderNexrSong();
                // setTimeout(_this.scrollToActiveNextSong(), 2000);
                _this.scrollToActiveNextSong();
            }
        }

        // KHI BAM VÀO NÚT PHÁT TẤT CẢ OPTION-1
        playAllBtn1.onclick = function() {
            _this.currentIndex = 0;
            _this.loadCurrentSong();
            audio.play();
            deleteActive();
            deleteActive1();
            _this.scrollToActiveSong();
            if(_this.isRandom) {
                _this.renderNextSongHeadding(nextSongHeadding,_this.songsData);
                nextSongList.innerHTML = `
                    <span class="nextsong__last-item-end">
                        Bật chế độ random thì cần gì xem trước bài phát tiếp theo nhể, đỡ phải code :)
                    </span>`;
            } else {
                _this.renderNexrSong();
                // setTimeout(_this.scrollToActiveNextSong(), 2000);
                _this.scrollToActiveNextSong();
            }
        }

        // KHI BẤM VÀO NÚT PLAY Ở THUMB BÀI BÁT Ở PHẦN TỔNG QUAN
        playBtnIcons.forEach((playBtnIcon, index) => {
            playBtnIcon.onclick = function() {
                if (_this.isPlaying && _this.currentIndex == index) {
                    audio.pause();
                } else if (!_this.isPlaying && _this.currentIndex == index) {
                    audio.play();
                } else if (_this.currentIndex != index) {
                    _this.currentIndex = index;
                    _this.loadCurrentSong();
                    audio.play();
                    deleteActive();
                    deleteActive1();
                    _this.renderNexrSong();
                    _this.scrollToActiveNextSong();
                }
                if(_this.isRandom) {
                    _this.renderNextSongHeadding(nextSongHeadding,_this.songsData);
                    nextSongList.innerHTML = `
                        <span class="nextsong__last-item-end">
                            Bật chế độ random thì cần gì xem trước bài phát tiếp theo nhể, đỡ phải code :)
                        </span>`;
                } else if (!_this.isRandom && _this.currentIndex >= _this.songsData.length - 1) {
                    $('.nextsong__last-item-end').textContent = 'HẾT BÀI RỒI BẠN ƠI! HAHA';
                } else {
                    _this.renderNexrSong();
                    _this.scrollToActiveNextSong();
                }
            }
        });

        // KHI BẤM VÀO NÚT PLAY Ở THUMB BÀI BÁT Ở PHẦN MUSIC OPTION1
        playBtnIconsOption1.forEach((item, index) => {
            item.onclick = function() {
                if (_this.isPlaying && _this.currentIndex == index) {
                    audio.pause();
                } else if (!_this.isPlaying && _this.currentIndex == index) {
                    audio.play();
                } else if (_this.currentIndex != index) {
                    _this.currentIndex = index;
                    _this.loadCurrentSong();
                    audio.play();
                    deleteActive();
                    deleteActive1();
                    // _this.renderPlayList1($('.option-music-list'),_this.songsData);
                    _this.renderNexrSong();
                    _this.scrollToActiveNextSong();
                }
                if(_this.isRandom) {
                    _this.renderNextSongHeadding(nextSongHeadding,_this.songsData);
                    nextSongList.innerHTML = `
                        <span class="nextsong__last-item-end">
                            Bật chế độ random thì cần gì xem trước bài phát tiếp theo nhể, đỡ phải code :)
                        </span>`;
                } else if (!_this.isRandom && _this.currentIndex >= _this.songsData.length - 1) {
                    $('.nextsong__last-item-end').textContent = 'HẾT BÀI RỒI BẠN ƠI! HAHA';
                } else {
                    _this.renderNexrSong();
                    _this.scrollToActiveNextSong();
                }
            }
        })

        // KHI CLICK VÀO NEXT SONG BOX
        nextSongBox.onclick = function (e) {
            const songNode = e.target.closest(".nextsong__item");
            if ( songNode) {
                if (e.target.closest(".nextsong__item-action-heart")) {
                    e.target.closest(".nextsong__item-action-heart").classList.toggle('nextsong__item-action-heart--unheart');   
                }
                if (e.target.closest(".nextsong__item-img")) {
                    if (_this.isPlaying && Number(songNode.dataset.index) == _this.currentIndex) {
                        audio.pause();
                        _this.isPlaying = false;
                        songNode.classList.remove('nextsong__fist-item-headding--active');
                    }else if (!_this.isPlaying && Number(songNode.dataset.index) == _this.currentIndex) {
                        audio.play();
                        _this.isPlaying = true;
                        songNode.classList.add('nextsong__fist-item-headding--active');
                        
                    }else if (Number(songNode.dataset.index) != _this.currentIndex) {
                        _this.currentIndex = Number(songNode.dataset.index);
                        _this.loadCurrentSong();
                        _this.renderNexrSong();
                        deleteActive();
                        _this.scrollToActiveSong();
                        audio.play();
                        _this.isPlaying = true;
                        const nextSongItems = $$('.nextsong__item')
                        nextSongItems[_this.currentIndex].classList.add('nextsong__fist-item-headding--active');
                    }  
                }
            }
        };

        // KHI CLICK DUP VÀO NEXT SONG BOX
        nextSongBox.ondblclick = function (e) {
            const songNode = e.target.closest(".nextsong__item:not(.nextsong__fist-item-headding--active)");
            if ( songNode) {
                if (_this.isPlaying && Number(songNode.dataset.index) == _this.currentIndex) {
                    audio.pause();
                    _this.isPlaying = false;
                    songNode.classList.remove('nextsong__fist-item-headding--active');
                }else if (!_this.isPlaying && Number(songNode.dataset.index) == _this.currentIndex) {
                    audio.play();
                    _this.isPlaying = true;
                    songNode.classList.add('nextsong__fist-item-headding--active');
                    
                }else if (Number(songNode.dataset.index) != _this.currentIndex) {
                    _this.currentIndex = Number(songNode.dataset.index);
                    _this.loadCurrentSong();
                    _this.renderNexrSong();
                    deleteActive();
                    _this.scrollToActiveSong();
                    audio.play();
                    _this.isPlaying = true;
                    const nextSongItems = $$('.nextsong__item')
                    nextSongItems[_this.currentIndex].classList.add('nextsong__fist-item-headding--active');
                }  
            }
        };

        // KHI BẬT NÚT CHẠY RANDOM
        randomBtn.onclick = function() {
            _this.isRandom = !_this.isRandom;
            _this.isRepeat = false;
            randomBtn.classList.toggle("music-control__icon-random--active", _this.isRandom);
            if (_this.isRandom) {
                randomBtn.style.color = 'var(--primary-color)';
            } else {
                randomBtn.style.color = '#fff';
            }
            repeatBtn.classList.toggle("music-control__icon-repeat--active", _this.isRepeat);
            
            if(_this.isRandom) {
                _this.renderNextSongHeadding(nextSongHeadding,_this.songsData);
                nextSongList.innerHTML = `
                    <span class="nextsong__last-item-end">
                        Bật chế độ random thì cần gì xem trước <br> bài phát tiếp theo nhể, đỡ phải code :)
                    </span>`;
            } else {
                if (_this.currentIndex >= _this.songsData.length - 1) {
                    $('.nextsong__last-item-end').textContent = 'HẾT BÀI RỒI BẠN ƠI! HAHA';
                } else {
                    _this.renderNexrSong();
                    _this.scrollToActiveNextSong();
                }
            }
        }

        // KHI BẬT NÚT CHẠY RANDOM ON MOBILE
        $('.js__mobile-player__ctrl-icon1').onclick = function() {
            _this.isRandom = !_this.isRandom;
            _this.isRepeat = false;
            randomBtn.classList.toggle("music-control__icon-random--active", _this.isRandom);
            $('.js__mobile-player__ctrl-icon1').classList.toggle("music-control__icon-random--active", _this.isRandom);
            if (_this.isRandom) {
                randomBtn.style.color = 'var(--primary-color)';
            } else {
                randomBtn.style.color = '#fff';
            }
            $('.js__mobile-player__ctrl-icon5').classList.toggle("music-control__icon-repeat--active", _this.isRepeat);
            
            if(_this.isRandom) {
                _this.renderNextSongHeadding(nextSongHeadding,_this.songsData);
                nextSongList.innerHTML = `
                    <span class="nextsong__last-item-end">
                        Bật chế độ random thì cần gì xem trước <br> bài phát tiếp theo nhể, đỡ phải code :)
                    </span>`;
            } else {
                if (_this.currentIndex >= _this.songsData.length - 1) {
                    $('.nextsong__last-item-end').textContent = 'HẾT BÀI RỒI BẠN ƠI! HAHA';
                } else {
                    _this.renderNexrSong();
                    _this.scrollToActiveNextSong();
                }
            }
        }

        // KHI BẬT NÚT CHẠY REPEAT
        repeatBtn.onclick = function() {
            _this.isRepeat = !_this.isRepeat;
            _this.isRandom = false;
            // _this.setConfig("isRepeat", _this.isRepeat);
            repeatBtn.classList.toggle("music-control__icon-repeat--active", _this.isRepeat);
            repeatBtn.style.color = 'var(--primary-color)';
            randomBtn.classList.toggle("music-control__icon-random--active", _this.isRandom);
            _this.renderNexrSong();
            _this.scrollToActiveNextSong();
        }

        // KHI BẬT NÚT CHẠY REPEAT ON MOBILE
        $('.js__mobile-player__ctrl-icon5').onclick = function() {
            _this.isRepeat = !_this.isRepeat;
            _this.isRandom = false;
            // _this.setConfig("isRepeat", _this.isRepeat);
            $('.js__mobile-player__ctrl-icon5').classList.toggle("music-control__icon-repeat--active", _this.isRepeat);
            // $('.js__mobile-player__ctrl-icon5').style.color = 'var(--primary-color)';
            $('.js__mobile-player__ctrl-icon1').classList.toggle("music-control__icon-random--active", _this.isRandom);
            _this.renderNexrSong();
            _this.scrollToActiveNextSong();
        }

        // XỬ LÝ KHI AUDIO KẾT THÚC
        audio.onended = function () {
            if (_this.isRepeat) {
              audio.play();
            } else {
              nextBtn.click();
              _this.renderNexrSong();
              _this.scrollToActiveNextSong();
            }
        };

        // KHI CLICK DUP VÀO BÀI NHẠC THÌ PHÁT NHẠC
        songItems.forEach((songItem, index) => {
            songItem.ondblclick = function() {
                _this.currentIndex = index;
                _this.loadCurrentSong();
                deleteActive();
                deleteActive1();
                audio.play();

                if(_this.isRandom) {
                    // không render next song list
                    _this.renderNextSongHeadding(nextSongHeadding,_this.songsData);
                } else {
                    _this.renderNexrSong();
                    _this.scrollToActiveNextSong();
                }
            }
            
        })

        // KHI CLICK DUP VÀO BÀI NHẠC THÌ PHÁT NHẠC
        songItemsOption1.forEach((songItem, index) => {
            songItem.ondblclick = function() {
                _this.currentIndex = index;
                _this.loadCurrentSong();
                deleteActive();
                deleteActive1();
                audio.play();

                if(_this.isRandom) {
                    // không render next song list
                    _this.renderNextSongHeadding(nextSongHeadding,_this.songsData);
                } else {
                    _this.renderNexrSong();
                    _this.scrollToActiveNextSong();
                }
            }
            
        })

        // CUỘN LÊN THÌ LÀM TRONG THANH HEADER
        mainContainer.onscroll = function() {
            scrollTop = mainContainer.scrollY || mainContainer.scrollTop
            // if (scrollTop > 50) {
            //     header.classList.toggle('header--active');
            // }

            // làm cách này mà ko làm cách trên để tránh bị gật lag 
            if(scrollTop > 5) {
                Object.assign(header.style, {
                    backgroundColor: `var(--header-color-${backgroundIndex})`,
                    boxShadow: '0 3px 5px rgba(0,0,0,0.1)',
                })
            } else {
                Object.assign(header.style, {
                    backgroundColor: 'transparent',
                    boxShadow: 'none',
                })
            }
        };

        // KHI CLICK SETTING
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

        // THEME MODAL
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

        // TOAST
        $$('.js__toast').forEach((item, index) => {
            item.onclick = function() {
                _this.toastSlide();
            }
        })
        
        
        
        

        
    },

    // QUAY NỐT NHẠC VỆ TINH
    // musicNote : function() {
    //     setInterval(function() {
    //         a = (a + Math.PI / 300) % (Math.PI * 2);
    //         var px = x + r * Math.cos(a);
    //         var py = y + r * Math.sin(a);
    //         document.querySelector('.vetinh-1').style.left = px + "px";
    //         document.querySelector('.vetinh-1').style.top = py + "px"; 
    //     })
    // },
        

    //=================================================================
    start: function() {
        // render ra danh sách nhạc ở phần tổng quan
        this.renderPlayList(optionAllSongList,this.songsData);
        // render ra danh sách nhạc ở phần tab music
        this.renderPlayList1($('.option-music-list'),this.songsData);
        // render next song
        this.renderNexrSong();
        // render next song start
        this.renderNextSongHeaddingStart(nextSongHeadding,this.songsData);
        // render zingchart
        this.renderZingChart();



        // Define các thuộc tính cho object
        this.defineProperties();

        // xử lý và sự kiện
        this.handleEvents(); 

        // hiển thị thời gian chạy và thời lượng của audio hiện tại
        this.displayDurationTime();

        // theme
        this.applyTheme();

        this.loadCurrentSong();

        // this.musicNote();
    }

}


app.start();










