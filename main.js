const cnahgeImage = function (){
 let rand = Math.ceil(Math.random() * 9);
 document.querySelector('img').src = 'images/' + rand + '.png'
} 

cnahgeImage();

document.querySelector('button').addEventListener('click', cnahgeImage);







 