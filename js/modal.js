let open_modal = document.querySelectorAll('.open_modal');
let close_modal = document.getElementById('close_modal');
let modal = document.getElementById('modal');
let body = document.getElementsByTagName('body')[0];
for (let i = 0; i < open_modal.length; i++) {
    open_modal[i].onclick = function() {
        modal.classList.add('modal_vis');
        modal.classList.remove('bounceOutDown');
        body.classList.add('body_block');
    };
}
close_modal.onclick = function() {
    modal.classList.add('bounceOutDown');
    window.setTimeout(function() {
        modal.classList.remove('modal_vis');
        body.classList.remove('body_block');
    }, 500);
};

// let open_modal = document.querySelectorAll('.open_modal');
// let close_modal = document.getElementById('close_modal');
// let modal = document.getElementById('modal');
// let body = document.getElementsByTagName('body')[0];
// for (let i = 0; i < open_modal.length; i++) {
//     open_modal[i].onclick = function() { // клик на открытие
//         modal.classList.add('modal_vis'); // добавляем видимость окна
//         modal.classList.remove('bounceOutDown'); // удаляем эффект закрытия
//         body.classList.add('body_block'); // убираем прокрутку
//     };
// }
// close_modal.onclick = function() { // клик на закрытие
//     modal.classList.add('bounceOutDown'); // добавляем эффект закрытия
//     window.setTimeout(function() { // удаляем окно через полсекунды (чтобы увидеть эффект закрытия).
//         modal.classList.remove('modal_vis');
//         body.classList.remove('body_block'); // возвращаем прокрутку
//     }, 500);
// };
