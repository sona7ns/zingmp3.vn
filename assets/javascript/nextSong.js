const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const playList0 = $('.nextsong__fist');
const playList1 = $('.nextsong__last-list');

const listSong0 = [
    {
        background: './assets/img/next-song/0.webp',
        name1: 'Cưới Luôn Được Không',
        name2: 'Út Nhị x KenPham Remix',
        pathSong: './assets/music/next-song/0.mp3',
    },
]
const listSong1 = [
    {
        background: './assets/img/next-song/1.webp',
        name1: 'Ôi Bạn Ơi',
        name2: 'TikTok',
        pathSong: './assets/music/next-song/1.mp3',
    },
    {
        background: './assets/img/next-song/2.webp',
        name1: 'Là Ai Từ Bỏ, Là Ai Vô Tình',
        name2: 'Hương Ly, Jombie',
        pathSong: './assets/music/next-song/2.mp3',
    },
    {
        background: './assets/img/next-song/3.jpg',
        name1: 'Cưới Thôi',
        name2: 'Masew x Masiu x B Ray x TAP',
        pathSong: './assets/music/next-song/3.mp3',
    },
    {
        background: './assets/img/next-song/4.webp',
        name1: 'Yêu Là Cưới',
        name2: 'Phát Hồ, X2X',
        pathSong: './assets/music/next-song/4.mp3',
    },
    {
        background: './assets/img/next-song/5.jpg',
        name1: 'Sắp 30',
        name2: 'Trình Đình Quang',
        pathSong: './assets/music/next-song/5.mp3',
    },
    {
        background: './assets/img/next-song/6.jpg',
        name1: 'Độ Tộc 2',
        name2: 'Masew, Pháo, Phúc Du, Độ Mixi',
        pathSong: './assets/music/next-song/6.mp3',
    },
    {
        background: './assets/img/next-song/7.jpg',
        name1: 'Sài Gòn Đêm Nay Mưa',
        name2: 'Hoàng Duyên, Jsol',
        pathSong: './assets/music/next-song/7.mp3',
    },
    {
        background: './assets/img/next-song/8.jpg',
        name1: 'Tình Bạn Diệu Kỳ',
        name2: 'AMee, Ricky Star, Lăng LD',
        pathSong: './assets/music/next-song/8.mp3',
    },
    {
        background: './assets/img/next-song/9.jpg',
        name1: 'Phải Chăng Em Đã Yêu?',
        name2: 'Juky San, RedT',
        pathSong: './assets/music/next-song/9.mp3',
    },
    {
        background: './assets/img/next-song/10.jpg',
        name1: 'Muộn Rồi Mà Sao Còn',
        name2: 'Sơn Tùng M-TP',
        pathSong: './assets/music/next-song/10.mp3',
    },
    {
        background: './assets/img/next-song/11.webp',
        name1: 'Xin Đừng Nhấc Máy',
        name2: 'B Ray, Han Sara, Great',
        pathSong: './assets/music/next-song/11.mp3',
    },
    {
        background: './assets/img/next-song/12.webp',
        name1: 'Phố Đã Lên Đèn',
        name2: 'Huyền Tâm Môn',
        pathSong: './assets/music/next-song/12.mp3',
    },
    {
        background: './assets/img/next-song/13.webp',
        name1: 'Ai Mang Cô Đơn Đi',
        name2: 'K-ICM, APJ',
        pathSong: './assets/music/next-song/13.mp3',
    },
    {
        background: './assets/img/next-song/14.webp',
        name1: 'Kẹo Bông Gòn',
        name2: 'H2K, TRUNKY',
        pathSong: './assets/music/next-song/14.mp3',
    },
    {
        background: './assets/img/next-song/15.webp',
        name1: 'Phố Cũ Còn Anh',
        name2: 'Quinn, Chilly',
        pathSong: './assets/music/next-song/15.mp3',
    },
]

function renderPlayList0(playListElement, songs) {
    const htmls = songs.map((song) => {
        return `
            <div class="nextsong__fist-item nextsong__item">
                <div class="nextsong__item-img" style="background-image: url(${song.background});">
                    <div class="nextsong__item-playbtn"><i class="fas fa-play"></i></div>
                </div>
                <div class="nextsong__item-body">
                    <span class="nextsong__item-body-heading">${song.name1}</span>
                    <span class="nextsong__item-body-depsc">${song.name2}</span>
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
    })
    playListElement.innerHTML = htmls.join('');
}

function renderPlayList1(playListElement, songs) {
    const htmls = songs.map((song) => {
        return `
            <li class="nextsong__last-item nextsong__item">
                <div class="nextsong__item-img" style="background-image: url(${song.background});">
                    <div class="nextsong__item-playbtn"><i class="fas fa-play"></i></div>
                </div>
                <div class="nextsong__item-body">
                    <span class="nextsong__item-body-heading">${song.name1}</span>
                    <span class="nextsong__item-body-depsc">${song.name2}</span>
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
}

// render bài đang phát 
renderPlayList0(playList0, listSong0);
//render list bài tiếp theo
renderPlayList1(playList1, listSong1);


// khi bấm vào trái tym thì add class để đổi tym rỗng
const actionHearts = $$('.nextsong__item-action-heart');

actionHearts.forEach((actionHeart, index) => {
    actionHeart.onclick = function() {
        this.classList.toggle('nextsong__item-action-heart--unheart');
    }
});