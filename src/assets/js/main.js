import Tabs from './modules/tabs';

window.addEventListener('DOMContentLoaded', () => {
    const mainTab = new Tabs('.tab__item', '.tab__content', 'tab__item_active', 'tab__content_active', '.tab__item_img');
    mainTab.init();

    const slaveTab = new Tabs('.box', '.tab__inner_content', 'box_active', 'tab__inner_content_active');
    slaveTab.init();
});