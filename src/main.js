'use strict';

import createMainList from './modules/createMainList.mjs';
import toggle from './modules/toggle.mjs';
import selectCurrencyItem from './modules/selectCurrencyItem.mjs';

window.addEventListener('DOMContentLoaded', async () => {
    isLoading();
});

async function isLoading () {

    const loadingBlock = document.querySelector('.loading');
    const mainBlock = document.querySelector('.main');

    await createMainList();

    loadingBlock.classList.add('hide');
    mainBlock.classList.remove('hide');

    toggle();

    selectCurrencyItem();
}