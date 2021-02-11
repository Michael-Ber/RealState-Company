import Tabs from './modules/tabs';
import Carousel from './modules/carousel';
import Form from './modules/form';
import Image from './modules/incImage';

window.addEventListener('DOMContentLoaded', () => {
    const mainTab = new Tabs('.tab__item', '.tab__content', 'tab__item_active', 'tab__content_active', '.tab__item_img');
    mainTab.init();

    const slaveTab = new Tabs('.box', '.tab__inner_content', 'box_active', 'tab__inner_content_active');
    slaveTab.init();

    const carousel = new Carousel('.intro__carousel_film', '.intro__carousel_item', 'intro__carousel_item_active', '.intro__carousel_dot', 'intro__carousel_dot_active');
    carousel.init();

    const form1 = new Form('.form__login', 'input');
    form1.init();

    const form2 = new Form('.form__subscribe', 'input');
    form2.init();

    const img = new Image('.third__item_search', '.third__item_img', '.third__item', 'body');
    img.init();
});