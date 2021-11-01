export default function toggle() {

    const toggle = document.querySelector('.currency-list__toggle');
    const currList = document.getElementById('currency-list');

    toggle.addEventListener('click', () => {

        if (currList.classList.contains('hide')) {
            openList();
        } else {
            closeList();
        }
    });

    function openList() {
        currList.classList.remove('hide');
    }

    function closeList() {
        currList.classList.add('hide');
    }
}