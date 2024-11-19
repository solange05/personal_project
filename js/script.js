function change_svg(svg_original) {
    svg_original.src = "../assets/svg/sunClosed.svg";
}

function return_svg(svg_changed) {
    svg_changed.src = "../assets/svg/buttonSun.svg";
}

const btnSwitch = document.querySelector('#switch');

btnSwitch.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    btnSwitch.classList.toggle('active');
});

function changeTwo_svg(svg_originalTwo) {
    svg_originalTwo.src = "../assets/svg/solangePaniaguaTwo.svg";
}

function returnTwo_svg(svg_changedTwo) {
    svg_changedTwo.src = "../assets/svg/solangePaniagua.svg";
}