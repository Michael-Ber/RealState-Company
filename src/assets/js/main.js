import Tabs from './modules/tabs';
import Carousel from './modules/carousel';

window.addEventListener('DOMContentLoaded', () => {
    const mainTab = new Tabs('.tab__item', '.tab__content', 'tab__item_active', 'tab__content_active', '.tab__item_img');
    mainTab.init();

    const slaveTab = new Tabs('.box', '.tab__inner_content', 'box_active', 'tab__inner_content_active');
    slaveTab.init();

    const carousel = new Carousel('.intro__carousel_film', '.intro__carousel_item', 'intro__carousel_item_active', '.intro__carousel_dot', 'intro__carousel_dot_active');

    carousel.init();
});