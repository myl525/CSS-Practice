document.addEventListener('DOMContentLoaded', main);

function main(evt) {
    /** sidebar2 */
    const udm2 = document.querySelector('.user-dropdown-menu-2');
    const ud2 = document.querySelector('#ud2');
    const d2 = document.querySelector('#d2');
    const dm2 = document.querySelector('.dropdown-menu-2');
    ud2.addEventListener('click', (evt) => {
        evt.preventDefault();
        console.log('clicked')
        console.log(udm2.style.height)
        if(udm2.style.height === '') {
            udm2.style.height = udm2.scrollHeight+'px';
            dm2.style.height = '';
        }else{
            udm2.style.height = '';
        }
    });

    d2.addEventListener('click', (evt) => {
        evt.preventDefault();
        console.log('clicked')
        console.log(dm2.style.height)
        if(dm2.style.height === '') {
            dm2.style.height = dm2.scrollHeight+'px';
            udm2.style.height = '';
        }else{
            dm2.style.height = '';
        }
    });
}