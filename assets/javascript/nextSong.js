const playList0 = $('.nextsong__fist');
const playList1 = $('.nextsong__last-list');

const listSong0 = [
    {
        background: './assets/img/songs/0.webp',
        name: 'Cưới Luôn Được Không',
        singer: 'Út Nhị x KenPham Remix',
        pathSong: './assets/music/next-song/0.mp3',
    },
]
const listSong1 = [
    {
        background: './assets/img/songs/1.webp',
        name: 'Ôi Bạn Ơi',
        singer: 'TikTok',
        pathSong: './assets/music/next-song/1.mp3',
    },
    {
        background: './assets/img/songs/2.webp',
        name: 'Là Ai Từ Bỏ, Là Ai Vô Tình',
        singer: 'Hương Ly, Jombie',
        pathSong: './assets/music/next-song/2.mp3',
    },
    {
        background: './assets/img/songs/3.jpg',
        name: 'Cưới Thôi',
        singer: 'Masew x Masiu x B Ray x TAP',
        pathSong: './assets/music/next-song/3.mp3',
    },
    {
        background: './assets/img/songs/4.webp',
        name: 'Yêu Là Cưới',
        singer: 'Phát Hồ, X2X',
        pathSong: './assets/music/next-song/4.mp3',
    },
    {
        background: './assets/img/songs/5.jpg',
        name: 'Sắp 30',
        singer: 'Trình Đình Quang',
        pathSong: './assets/music/next-song/5.mp3',
    },
    {
        background: './assets/img/songs/6.jpg',
        name: 'Độ Tộc 2',
        singer: 'Masew, Pháo, Phúc Du, Độ Mixi',
        pathSong: './assets/music/next-song/6.mp3',
    },
    {
        background: './assets/img/songs/7.jpg',
        name: 'Sài Gòn Đêm Nay Mưa',
        singer: 'Hoàng Duyên, Jsol',
        pathSong: './assets/music/next-song/7.mp3',
    },
    {
        background: './assets/img/songs/8.jpg',
        name: 'Tình Bạn Diệu Kỳ',
        singer: 'AMee, Ricky Star, Lăng LD',
        pathSong: './assets/music/next-song/8.mp3',
    },
    {
        background: './assets/img/songs/9.jpg',
        name: 'Phải Chăng Em Đã Yêu?',
        singer: 'Juky San, RedT',
        pathSong: './assets/music/next-song/9.mp3',
    },
    {
        background: './assets/img/songs/10.jpg',
        name: 'Muộn Rồi Mà Sao Còn',
        singer: 'Sơn Tùng M-TP',
        pathSong: './assets/music/next-song/10.mp3',
    },
    {
        background: './assets/img/songs/11.webp',
        name: 'Xin Đừng Nhấc Máy',
        singer: 'B Ray, Han Sara, Great',
        pathSong: './assets/music/next-song/11.mp3',
    },
    {
        background: './assets/img/songs/12.webp',
        name: 'Phố Đã Lên Đèn',
        singer: 'Huyền Tâm Môn',
        pathSong: './assets/music/next-song/12.mp3',
    },
    {
        background: './assets/img/songs/13.webp',
        name: 'Ai Mang Cô Đơn Đi',
        singer: 'K-ICM, APJ',
        pathSong: './assets/music/next-song/13.mp3',
    },
    {
        background: './assets/img/songs/14.webp',
        name: 'Kẹo Bông Gòn',
        singer: 'H2K, TRUNKY',
        pathSong: './assets/music/next-song/14.mp3',
    },
    {
        background: './assets/img/songs/15.webp',
        name: 'Phố Cũ Còn Anh',
        singer: 'Quinn, Chilly',
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