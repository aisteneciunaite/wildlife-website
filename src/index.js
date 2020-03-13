// pages
import './take-action.hbs';

// styles
import './assets/styles/app.scss';



// images and icons
import './assets/images/herd-of-zebras-on-body-of-water-with-grass-640x426.jpg';
import './assets/images/people-rallying-on-street-640x426.jpg';
import './assets/images/animal-animal-photography-big-big-cat-640x456.jpg';
import './assets/images/two-man-hiking-on-snow-mountain-1280x718.jpg';
import './assets/images/burn-fog-forest-forest-fire-1280x720.jpg';
import './assets/images/america-antelope-canyon-desktop-backgrounds-nature-1280x853.jpg';
import './assets/images/bird-s-eye-view-of-woodpile-1280x853.jpg';
import './assets/images/tigress-1280x587.jpg';
import './assets/images/close-up-photo-of-plastic-bottle-2409022.jpg';
import './assets/images/icebergs-1280x960.jpg';
import './assets/images/bamboo-tree-during-daytime-1280x1704.jpg';
import './assets/images/black-chimpanzee-smiling-1280x1769.jpg';
import './assets/images/brown-kangaroo-near-tree-1280x1828.jpg';
import './assets/images/man-with-rifle-1280x1923.jpg';
import './assets/images/sand-desert-yellow-orange-1920x1022.jpg';
import './assets/images/gray-elephants-1920x1222.jpg';
import './assets/images/beach-birds-calm-clouds-1920x1270.jpg';
import './assets/images/climate-road-landscape-people-1920x1280.jpg';
import './assets/images/five-zebra-in-pond-near-brown-and-black-birds-1920x1280.jpg';
import './assets/images/leopard-lying-on-a-log-1920x1280.jpg';
import './assets/images/two-giraffe-standing-on-hill-1920x1280.jpg';
import './assets/images/wolf-1920x1280.jpg';
import './assets/images/view-of-elephant-in-water-1920x1309.jpg';


// icons
import './assets/icons/emoji_nature-24px.svg';
import './assets/icons/menu-24px.svg';
import './assets/icons/eye-24px.svg';
import './assets/icons/facebook.svg';
import './assets/icons/twitter.svg';
import './assets/icons/instagram.svg';
import './assets/icons/youtube.svg';
import './assets/icons/favorite_border-24px.svg';

document.querySelector('[data-toggle]').addEventListener('click', function(e) {
    document.querySelector('[data-menu]').classList.toggle('open');
})

var mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        300: {
            slidesPerView: 1,
        },
        500: {
            slidesPerView: 2,
        },
        1200: {
            slidesPerView: 3,
        }
    },    
}
);