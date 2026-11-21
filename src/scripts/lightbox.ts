import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';

const lightbox = new PhotoSwipeLightbox({
  gallery: '.pswp-gallery',
  children: 'a[data-pswp-width]',
  pswpModule: () => import('photoswipe'),
  bgOpacity: 0.95,
  showHideAnimationType: 'zoom',
});

lightbox.init();
