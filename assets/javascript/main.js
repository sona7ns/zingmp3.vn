const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const optionAllSongList = $('.option-all__songs-list');
const musicNowTym = $('.music-control__left-action-tym-box');
const volumeIcon = $('.music-control__right-volume-icon');
const audio = $('#audio');
// var sliderItems=Array.from($$('.option-all__song-slider-img'));
const sliderBox = $('.option-all__song-slider');
const sliderItems = $$('.option-all__song-slider-img');
const playBtn = $('.music-control__icon-play');
const thunbPlayerBox = $('.music-control__left');
const progress = $('#progress');
const remainTime = $('.music-control__progress-time-start');
const durationTime = $('.music-control__progress-time-duration');
const prevBtn = $('.music-control__icon2');
const nextBtn = $('.music-control__icon4');
const nameSong = $('.music-control__left-content-song');
const nameSinger = $('.music-control__left-content-singer');
const cdThumb = $('.music-control__left-img');
const playAllBtn = $('.option-all__song-heading-right-playall-btn');
const randomBtn = $('.music-control__icon1');
const repeatBtn = $('.music-control__icon5');
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
const themeItems = $$('.theme-modal__body-group-item-img');









const app = {
    // sliderIndex: 0,
    songsData : [
        {
            background: './assets/img/songs/0.webp',
            name: 'Cưới Luôn Được Không',
            singer: 'Út Nhị Cover',
            pathSong: './assets/music/list-song/0.mp3',
            duration : '04:27',
        },
        {
            background: './assets/img/songs/1.webp',
            name: 'Cưa Là Đổ',
            singer: 'Phát Hồ, X2X',
            pathSong: './assets/music/list-song/1.mp3',
            duration : '04:05',
        },
        {
            background: './assets/img/songs/2.webp',
            name: 'Là Ai Từ Bỏ, Là Ai Vô Tình',
            singer: 'Hương Ly, Jombie',
            pathSong: './assets/music/list-song/2.mp3',
            duration : '03:51',
        },
        {
            background: './assets/img/songs/3.jpg',
            name: 'Cưới Thôi',
            singer: 'Masew x Masiu x B Ray x TAP',
            pathSong: './assets/music/list-song/3.mp3',
            duration : '04:20',
        },
        {
            background: './assets/img/songs/4.webp',
            name: 'Yêu Là Cưới',
            singer: 'Phát Hồ, X2X',
            pathSong: './assets/music/list-song/4.mp3',
            duration : '05:16',
        },
        {
            background: './assets/img/songs/5.jpg',
            name: 'Sắp 30',
            singer: 'Trình Đình Quang',
            pathSong: './assets/music/list-song/5.mp3',
            duration : '04:10',
        },
        {
            background: './assets/img/songs/6.jpg',
            name: 'Độ Tộc 2',
            singer: 'Masew, Pháo, Phúc Du, Độ Mixi',
            pathSong: './assets/music/list-song/6.mp3',
            duration : '05:05',
        },
        {
            background: './assets/img/songs/7.jpg',
            name: 'Sài Gòn Đêm Nay Mưa',
            singer: 'Hoàng Duyên, Jsol',
            pathSong: './assets/music/list-song/7.mp3',
            duration : '03:16',
        },
        {
            background: './assets/img/songs/8.jpg',
            name: 'Tình Bạn Diệu Kỳ',
            singer: 'AMee, Ricky Star, Lăng LD',
            pathSong: './assets/music/list-song/8.mp3',
            duration : '04:20',
        },
        {
            background: './assets/img/songs/9.jpg',
            name: 'Phải Chăng Em Đã Yêu?',
            singer: 'Juky San, RedT',
            pathSong: './assets/music/list-song/9.mp3',
            duration : '03:23',
        },
        {
            background: './assets/img/songs/10.jpg',
            name: 'Muộn Rồi Mà Sao Còn',
            singer: 'Sơn Tùng M-TP',
            pathSong: './assets/music/list-song/10.mp3',
            duration : '03:55',
        },
        {
            background: './assets/img/songs/11.webp',
            name: 'Xin Đừng Nhấc Máy',
            singer: 'B Ray, Han Sara, Great',
            pathSong: './assets/music/list-song/11.mp3',
            duration : '04:45',
        },
        {
            background: './assets/img/songs/12.webp',
            name: 'Phố Đã Lên Đèn',
            singer: 'Huyền Tâm Môn',
            pathSong: './assets/music/list-song/12.mp3',
            duration : '06:01',
        },
        {
            background: './assets/img/songs/13.webp',
            name: 'Ai Mang Cô Đơn Đi',
            singer: 'K-ICM, APJ',
            pathSong: './assets/music/list-song/13.mp3',
            duration : '05:02',
        },
        {
            background: './assets/img/songs/14.webp',
            name: 'Kẹo Bông Gòn',
            singer: 'H2K, TRUNKY',
            pathSong: './assets/music/list-song/14.mp3',
            duration : '03:25',
        },
        {
            background: './assets/img/songs/15.webp',
            name: 'Phố Cũ Còn Anh',
            singer: 'Quinn, Chilly',
            pathSong: './assets/music/list-song/15.mp3',
            duration : '04:12',
        },
    ],
    songsDataRemain: [
        {
            background: './assets/img/songs/0.webp',
            name: 'Cưới Luôn Được Không',
            singer: 'Út Nhị Cover',
            pathSong: './assets/music/list-song/0.mp3',
            duration : '04:27',
        },
        {
            background: './assets/img/songs/1.webp',
            name: 'Cưa Là Đổ',
            singer: 'Phát Hồ, X2X',
            pathSong: './assets/music/list-song/1.mp3',
            duration : '04:05',
        },
        {
            background: './assets/img/songs/2.webp',
            name: 'Là Ai Từ Bỏ, Là Ai Vô Tình',
            singer: 'Hương Ly, Jombie',
            pathSong: './assets/music/list-song/2.mp3',
            duration : '03:51',
        },
        {
            background: './assets/img/songs/3.jpg',
            name: 'Cưới Thôi',
            singer: 'Masew x Masiu x B Ray x TAP',
            pathSong: './assets/music/list-song/3.mp3',
            duration : '04:20',
        },
        {
            background: './assets/img/songs/4.webp',
            name: 'Yêu Là Cưới',
            singer: 'Phát Hồ, X2X',
            pathSong: './assets/music/list-song/4.mp3',
            duration : '05:16',
        },
        {
            background: './assets/img/songs/5.jpg',
            name: 'Sắp 30',
            singer: 'Trình Đình Quang',
            pathSong: './assets/music/list-song/5.mp3',
            duration : '04:10',
        },
        {
            background: './assets/img/songs/6.jpg',
            name: 'Độ Tộc 2',
            singer: 'Masew, Pháo, Phúc Du, Độ Mixi',
            pathSong: './assets/music/list-song/6.mp3',
            duration : '05:05',
        },
        {
            background: './assets/img/songs/7.jpg',
            name: 'Sài Gòn Đêm Nay Mưa',
            singer: 'Hoàng Duyên, Jsol',
            pathSong: './assets/music/list-song/7.mp3',
            duration : '03:16',
        },
        {
            background: './assets/img/songs/8.jpg',
            name: 'Tình Bạn Diệu Kỳ',
            singer: 'AMee, Ricky Star, Lăng LD',
            pathSong: './assets/music/list-song/8.mp3',
            duration : '04:20',
        },
        {
            background: './assets/img/songs/9.jpg',
            name: 'Phải Chăng Em Đã Yêu?',
            singer: 'Juky San, RedT',
            pathSong: './assets/music/list-song/9.mp3',
            duration : '03:23',
        },
        {
            background: './assets/img/songs/10.jpg',
            name: 'Muộn Rồi Mà Sao Còn',
            singer: 'Sơn Tùng M-TP',
            pathSong: './assets/music/list-song/10.mp3',
            duration : '03:55',
        },
        {
            background: './assets/img/songs/11.webp',
            name: 'Xin Đừng Nhấc Máy',
            singer: 'B Ray, Han Sara, Great',
            pathSong: './assets/music/list-song/11.mp3',
            duration : '04:45',
        },
        {
            background: './assets/img/songs/12.webp',
            name: 'Phố Đã Lên Đèn',
            singer: 'Huyền Tâm Môn',
            pathSong: './assets/music/list-song/12.mp3',
            duration : '06:01',
        },
        {
            background: './assets/img/songs/13.webp',
            name: 'Ai Mang Cô Đơn Đi',
            singer: 'K-ICM, APJ',
            pathSong: './assets/music/list-song/13.mp3',
            duration : '05:02',
        },
        {
            background: './assets/img/songs/14.webp',
            name: 'Kẹo Bông Gòn',
            singer: 'H2K, TRUNKY',
            pathSong: './assets/music/list-song/14.mp3',
            duration : '03:25',
        },
        {
            background: './assets/img/songs/15.webp',
            name: 'Phố Cũ Còn Anh',
            singer: 'Quinn, Chilly',
            pathSong: './assets/music/list-song/15.mp3',
            duration : '04:12',
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

    // RENDER LIST MUSIC ITEM
    renderPlayList : function (playListElement, songsData) {
        const htmls = songsData.map((song, index) => {
            return `
                <!-- songs-item-playing--active-onplay songs-item--active songs-item-playbtn--active -->
                <li class="songs-item" data-index="${index}">
                    <div class="songs-item-left">
                        <div style="background-image: url(${song.background});" class="songs-item-left-img">
                            <div class="songs-item-left-img-playbtn"><i class="fas fa-play"></i></div>
                            <div class="songs-item-left-img-playing-box">
                                <img class = "songs-item-left-img-playing" src="./assets/img/songs/icon-playing.gif" alt="playing">
                            </div>
                        </div>

                        <div class="songs-item-left-body">
                            <h3 class="songs-item-left-body-name">${song.name}</h3>
                            <span class="songs-item-left-body-singer">${song.singer}</span>
                        </div>
                    </div>
                    <div class="songs-item-center">
                        <span>${song.name} (Single)</span>
                    </div>
                    <div class="songs-item-right">
                        <span class="songs-item-right-mv"><i class="fas fa-photo-video"></i></span>
                        <span class="songs-item-right-lyric"><i class="fas fa-microphone"></i></span>
                        <span class="songs-item-right-tym">
                            <i class="fas fa-heart songs-item-right-tym-first"></i>
                            <i class="far fa-heart songs-item-right-tym-last"></i>
                        </span>
                        <span class="songs-item-right-duration">${song.duration}</span>
                        <span class="songs-item-right-more"><i class="fas fa-ellipsis-h"></i></span>
                    </div>
                </li>`
        })
        playListElement.innerHTML = htmls.join('');
    },
    // RENDER HEADDING NEXT SONG 
    renderNextSongHeadding: function(playListElement, songs){
        const htmls = `
            <div class="nextsong__fist-item nextsong__item">
                <div class="nextsong__item-img" style="background-image: url(${songs[this.currentIndex].background});">
                    <div class="nextsong__item-playbtn"><i class="fas fa-play"></i></div>
                </div>
                <div class="nextsong__item-body">
                    <span class="nextsong__item-body-heading">${songs[this.currentIndex].name}</span>
                    <span class="nextsong__item-body-depsc">${songs[this.currentIndex].singer}</span>
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
            </div>`

        playListElement.innerHTML = htmls;
    },

    changeRenderNextSongHeadding: function() {
       $('.nextsong__item-img').style.backgroundImage =`url(${this.songsData[this.currentIndex].background})`;
       $('.nextsong__item-body-heading').textContent = this.songsData[this.currentIndex].name;
       $('.nextsong__item-body-depsc').textContent = this.songsData[this.currentIndex].singer;
    },


    // RENDER LIST NEXT SONG 
    renderNextSongList: function(playListElement) {
        // xoá đi 1 phần tử vị trí currentIndex trong mảng
        const a =this.songsDataRemain.shift(this.currentIndex,1);
        console.log(this.currentIndex)
        console.log(a)

        const htmls = this.songsDataRemain.map((song, index) => {
            return `
                <li class="nextsong__last-item nextsong__item">
                    <div class="nextsong__item-img" style="background-image: url(${song.background});">
                        <div class="nextsong__item-playbtn"><i class="fas fa-play"></i></div>
                    </div>
                    <div class="nextsong__item-body">
                        <span class="nextsong__item-body-heading">${song.name}</span>
                        <span class="nextsong__item-body-depsc">${song.singer}</span>
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
                </li>`
        })
        playListElement.innerHTML = htmls.join('');
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
        nameSinger.textContent = this.currentSong.singer;
        cdThumb.style.backgroundImage = `url('${this.currentSong.background}')`;
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
    },

    // HIỂN THỊ VÀ DURATION TIME VÀO PLAYER
    displayDurationTime : function() {
        // if (!audio.duration) {
        //     durationTime.textContent = "00:00";
        // } else {
        //     durationTime.textContent = this.formatTime(audio.duration);
        // }
        durationTime.textContent = this.currentSong.duration;
    },

    // render next song
    renderNexrSong: function() {
        this.renderNextSongHeadding(nextSongHeadding,this.songsData);
        this.renderNextSongList(nextSongList);
    },








    

    // SỰ KIỆN VÀ XỬ LÝ
    handleEvents: function () {
        const _this = this;
        const songTyms = $$('.songs-item-right-tym');
        const songItems = $$('.songs-item');
        const playBtnIcons = $$('.songs-item-left-img');
        const actionHeartNextSongs = $$('.nextsong__item-action-heart');

        var sliderIndex = 1;
        var sliderLenght = _this.songsData.length;

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


        //   LÀM SLIDER
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
            })
            sliderIndex++;
            if (sliderIndex >= sliderLenght) {
                sliderIndex = 0;
            }
        }
        setInterval(changeImage,2000);

        // XỬ LÝ KHI CLICK VÀO NÚT PLAY
        playBtn.onclick = function () {
            if (_this.isPlaying) {
              audio.pause();
            } else {
              audio.play();
            }
        }

        // Khi song được play
        audio.onplay = function () {
            _this.isPlaying = true;
            // player.classList.add("playing");
            cdThumbAnimate.play();
            playBtn.classList.add('music-control__icon-play--active');
            thunbPlayerBox.style.transform = "translateX(20px)";
            
            songItems[_this.currentIndex].classList.add('songs-item-playing--active-onplay');
            songItems[_this.currentIndex].classList.add('songs-item--active');            
            songItems[_this.currentIndex].classList.remove('songs-item-playbtn--active');
           
            
        };
  
        // KHI SONG BỊ PAUSE
        audio.onpause = function () {
            _this.isPlaying = false;
            // player.classList.remove("playing");
            cdThumbAnimate.pause();
            playBtn.classList.remove('music-control__icon-play--active');
            thunbPlayerBox.style.transform = "translateX(0)";
            songItems[_this.currentIndex].classList.remove('songs-item-playing--active-onplay');
            // songItems[_this.currentIndex].classList.remove('songs-item--active');
            songItems[_this.currentIndex].classList.add('songs-item-playbtn--active');

        }

        // KHI TIẾN ĐỘ BÀI HÁT THAY ĐỔI
        audio.ontimeupdate = function () {
            if (audio.duration) {
                const progressPercent = Math.floor((audio.currentTime / audio.duration) * 100);
                progress.value = progressPercent;
            }
            _this.displayRemainTime();
        }

        // KHI TUA SONG
        progress.onchange = function (e) {
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

        // KHI NEXT SONG
        nextBtn.onclick = function() {
            if (_this.isRandom) {
                _this.RandomSong();
            } else {
            _this.nextSong();
            }
            audio.play();
            deleteActive();
            _this.scrollToActiveSong();
            _this.changeRenderNextSongHeadding();

            _this.renderNextSongList(nextSongList);
            // console.log(_this.songsDataRemain)
            // console.log(_this.songsData)
        }

        // KHI PREV SONG
        prevBtn.onclick = function() {
            if (_this.isRandom) {
                _this.RandomSong();
            } else {
            _this.prevSong();
            }
            audio.play();
            deleteActive();
            _this.scrollToActiveSong();
            _this.changeRenderNextSongHeadding();

        }

        // KHI BAM VÀO NÚT PHÁT TẤT CẢ
        playAllBtn.onclick = function() {
            _this.currentIndex = 0;
            _this.loadCurrentSong();
            audio.play();
            deleteActive();
            _this.scrollToActiveSong();
            _this.changeRenderNextSongHeadding();

        }

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
                }
            }
        });

        // KHI BẬT NÚT CHẠY RANDOM
        randomBtn.onclick = function() {
            _this.isRandom = !_this.isRandom;
            _this.isRepeat = false;
            // _this.setConfig("isRandom", _this.isRandom);
            randomBtn.classList.toggle("music-control__icon-random--active", _this.isRandom);
            repeatBtn.classList.toggle("music-control__icon-repeat--active", _this.isRepeat);
        }

        // KHI BẬT NÚT CHẠY REPEAT
        repeatBtn.onclick = function() {
            _this.isRepeat = !_this.isRepeat;
            _this.isRandom = false;
            // _this.setConfig("isRepeat", _this.isRepeat);
            repeatBtn.classList.toggle("music-control__icon-repeat--active", _this.isRepeat);
            randomBtn.classList.toggle("music-control__icon-random--active", _this.isRandom);
        }

        // XỬ LÝ KHI AUDIO KẾT THÚC
        audio.onended = function () {
            if (_this.isRepeat) {
              audio.play();
            } else {
              nextBtn.click();
            }
          };

        // KHI CLICK VÀO CẢ LIST NHẠC
        // optionAllSongList.onclick = function (e) {
        //     const songNode = e.target.closest(".songs-item:not(.songs-item--active)");
        //     if (songNode || e.target.closest(".songs-item-left-img") || e.target.closest(".songs-item-right-mv") || e.target.closest(".songs-item-right-lyric") || e.target.closest(".songs-item-right-tym") || e.target.closest(".songs-item-right-duration") || e.target.closest(".songs-item-right-more")) {
        //         // Xử lý khi click vào song
        //         if (songNode) {
        //             _this.currentIndex = Number(songNode.dataset.index);
        //             _this.loadCurrentSong();
        //             // _this.render();
        //             audio.play();
        //             console.log(_this.currentIndex)
        //         }
        
        //         // Xử lý khi click vào song more, tương tự vs mấy option còn lại
        //         if (e.target.closest(".songs-item-right-more")) {
        //             // khi bấm vào option thì làm gì đó trong này
        //         }
        //     }
        // };

        // KHI CLICK DUP VÀO BÀI NHẠC THÌ PHÁT NHẠC
        songItems.forEach((songItem, index) => {
            songItem.ondblclick = function() {
                _this.currentIndex = index;
                _this.loadCurrentSong();
                deleteActive();
                audio.play();
            }
        })

        // KHI CLICK VÀO TYM NEXT SONG
        actionHeartNextSongs.forEach((actionHeart, index) => {
            actionHeart.onclick = function() {
                actionHeart.classList.toggle('nextsong__item-action-heart--unheart');
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

        // THEME APPLY SKIN
        themeItems.forEach((themeItem, index) => {
            themeItem.onclick = function() {
                $('.main').style.backgroundImage =`url('./assets/img/background-theme/backroundThemes/${index}.${index === 0 ? "svg" : "jpg"}')`;
            }
        });

    },

    

    //=================================================================
    start: function() {
        // render ra danh sách nhạc ở phần tổng quan
        this.renderPlayList(optionAllSongList,this.songsData);

        // render next song
        this.renderNexrSong();

        // Define các thuộc tính cho object
        this.defineProperties();

        // xử lý và sự kiện
        this.handleEvents(); 

        // hiển thị thời gian chạy và thời lượng của audio hiện tại
        this.displayDurationTime();


        
    }

}


app.start();






x = 100  // center
y = 50   // center
r = 50   // radius
a = 0    // angle (from 0 to Math.PI * 2)

function rotate(a) {
  
  var px = x + r * Math.cos(a); // <-- that's the maths you need
  var py = y + r * Math.sin(a);
  
  document.querySelector('.vetinh-1').style.left = px + "px";
  document.querySelector('.vetinh-1').style.top = py + "px"; 
  

}


setInterval(function() {
  a = (a + Math.PI / 360) % (Math.PI * 2);
  rotate(a);
})

