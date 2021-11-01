export default function selectCurrencyItem() {
    const placeHolder = document.querySelector('.info__place-holder');
    const infoBlock = document.querySelector('.info');
    const currList = document.querySelector('.currency-list');
    
    currList.addEventListener('click', (e) => {
        if (e.target) {
            
            if (e.target.className  === 'currency-list__item') {
                const infoFlag = document.createElement('img');
                const fullName = document.createElement('p');
                const rate = document.createElement('p');

                infoFlag.classList.add('info__item');
                fullName.classList.add('info__item');
                fullName.classList.add('info__name');
                rate.classList.add('info__item');
                rate.classList.add('info__rate');

                infoFlag.setAttribute('src', e.target.dataset.flagurl);
                infoFlag.classList.add('info__flag-img');
                placeHolder.remove();

                fullName.innerText = `${e.target.innerText} (${e.target.dataset.shortname})`;
                rate.innerText = `${e.target.dataset.value}`;

                infoBlock.innerHTML = '';
                infoBlock.appendChild(infoFlag);
                infoBlock.appendChild(fullName);
                infoBlock.appendChild(rate);
                currList.classList.add('hide');
            }
        }
    });
}