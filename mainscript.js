let text = document.getElementById('logo');
let sun = document.getElementById('sun');
let cloud1 = document.getElementById('cloud1');
let cloud2 = document.getElementById('cloud2');
let tree = document.getElementById('tree');
let hill1 = document.getElementById('hill1');
let hill2 = document.getElementById('hill2');
let hill3 = document.getElementById('hill3');
window.addEventListener('scroll', () => {
    let value = window.scrollY;
    logo.style.marginTop = value * 1 + 'px';
    sun.style.top = value * -1.5 + 'px';
    hill2.style.left = value * 1.5 + 'px';
    hill1.style.left = value * -1.5 + 'px'
    tree.style.top = value * 0.5 + 'px';
    cloud1.style.left = value * -1.1 + 'px';
    cloud2.style.left = value * 1.1 + 'px';
});