const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const optionAllSongList = $('.option-all__songs-list');
const musicNowTym = $('.music-control__left-action-tym-box');
const volumeIcon = $('.music-control__right-volume-icon');
const audio = $('#audio');
const cdThumb = $('.music-control__left-img');
// var sliderItems=Array.from($$('.option-all__song-slider-img'));
const sliderBox = $('.option-all__song-slider');
const sliderItems = $$('.option-all__song-slider-img');



var index = 0;




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

    // render list music item
    renderPlayList : function (playListElement, songsData) {
        const htmls = songsData.map((song, index) => {
            return `
                <li class="songs-item ${index==0 ? 'songs-item--active' : ''}">
                    <div class="songs-item-left">
                        <img src="${song.background}" alt="danh sanh nhac" class="songs-item-left-img">
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

    handleEvents: function () {
        const _this = this;
        const songTyms = $$('.songs-item-right-tym');
        var sliderIndex = 0;
        var sliderLenght = _this.songsData.length;
        
        songTyms.forEach((songTym, index) => {
            songTym.onclick = function() {
                songTym.classList.toggle('songs-item-right-tym--active');
            }
        });

        // click tym ở thanh phát nhạc
        musicNowTym.onclick = function() {
            this.classList.toggle('music-control__left-action-tym-box-active');
        }

        // bật tắt mute ở volume
        volumeIcon.onclick = function() {
            this.classList.toggle('music-control__right--active');
        }

        // Xử lý CD quay / dừng
        const cdThumbAnimate = cdThumb.animate([{ transform: "rotate(360deg)" }], {
            duration: 10000, // 10 seconds
            iterations: Infinity
        });
        //   cdThumbAnimate.pause();


        //   LÀM SLIDER
        changeImage = function() {
            // const htmls = _this.songsData.map((song,index) => {
            //     return `
            //     <img src="./assets/img/slider/${index}.webp" alt="anh slider" class="option-all__song-slider-img option-all__song-slider-img-${index == sliderIndex ? 'first' : index == sliderIndex + 1 ? 'second' : 'third'}">`
            // })
            // sliderBox.innerHTML = htmls.join('');
            
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
            console.log(sliderIndex);
            sliderIndex++;
            if (sliderIndex >= sliderLenght) {
                sliderIndex = 0;
            }
        }
        // changeImage();

        setInterval(changeImage,2000);
    },


    start: function () {
        this.renderPlayList(optionAllSongList,this.songsData)       
        this.handleEvents(); 
        // audio.play();
    },

}


app.start();