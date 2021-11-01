import currensyList from "./currencyList.mjs";
import symbolsList from "./symbolsList.mjs";

export default async function createMainList() {
    
    const dropDownList = document.getElementById('currency-list');

    await symbolsList().then(arr => {
    
        for(let i = 0; i < arr.length; i++) {
            const item = document.createElement('li');
            item.setAttribute('data-shortname', `${arr[i][0]}`);
            
            if (arr[i][0] === 'ANG') {
                item.setAttribute('data-flagurl', `https://flagcdn.com/nl.svg`);
            } else if (arr[i][0] === 'BTC') {
                item.setAttribute('data-flagurl', `https://ic.wampi.ru/2021/11/01/btc.png`);
            } else if (arr[i][0] === 'XAU') {
                item.setAttribute('data-flagurl', `https://ia.wampi.ru/2021/11/01/gold.png`);
            } else if (arr[i][0] === 'XAG') {
                item.setAttribute('data-flagurl', `https://ia.wampi.ru/2021/11/01/silver.jpg`);
            } else if (arr[i][0] === 'XAF') {
                item.setAttribute('data-flagurl', `https://ic.wampi.ru/2021/11/01/cfa.jpg`);
            } else if (arr[i][0] === 'XCD') {
                item.setAttribute('data-flagurl', `https://ic.wampi.ru/2021/11/01/xcd.png`);
            } else if (arr[i][0] === 'XPF') {
                item.setAttribute('data-flagurl', `https://ia.wampi.ru/2021/11/01/xpf.png`);
            } else if (arr[i][0] === 'XOF') {
                item.setAttribute('data-flagurl', `https://ia.wampi.ru/2021/11/01/xpf.png`);
            } else if (arr[i][0] === 'XDR') {
                item.setAttribute('data-flagurl', `https://ic.wampi.ru/2021/11/01/xdr.jpg`);
            } else {
                item.setAttribute('data-flagurl', `https://flagcdn.com/${arr[i][0].toLowerCase().slice(0, 2)}.svg`);
            }

            item.innerHTML = `${arr[i][1]}`;
            dropDownList.appendChild(item);

            item.classList.add('currency-list__item');
        }
    });

    await currensyList().then(arr => {

        dropDownList.childNodes.forEach((elem) => {
            for (let i = 0; i < arr.length; i++) {
                if(elem.dataset.shortname === arr[i][0]) {
                    elem.setAttribute('data-value', `${arr[i][1]}`);
                    break;
                }
            }
        })
    });
}