//MENU
const textHome = document.querySelector('.textHome');
const textQuemSomos = document.querySelector('.textQuemSomos');
const textGaleria = document.querySelector('.textGaleria');
const textProdutos = document.querySelector('.textProdutos');
//HOME
const blocoHome1 = document.querySelector('.blocoHome1');
const blocoHome2 = document.querySelector('.blocoHome2');
const blocoHome3 = document.querySelector('.blocoHome3');
//QUEM SOMOS
const blocoQuemSomos1 = document.querySelector('.blocoQuemSomos1');
const blocoQuemSomos2= document.querySelector('.blocoQuemSomos2');
const blocoQuemSomos3 = document.querySelector('.blocoQuemSomos3');
//GALERIA
const blocoGaleria1 = document.querySelector('.blocoGaleria1');
const blocoGaleria2 = document.querySelector('.blocoGaleria2');
const blocoGaleria3 = document.querySelector('.blocoGaleria3');
//PRODUTOS
const blocoProdutos1 = document.querySelector('.blocoProdutos1');
const blocoProdutos2 = document.querySelector('.blocoProdutos2');
const blocoProdutos3 = document.querySelector('.blocoProdutos3');

//HOME
textHome.addEventListener('click', function(){
    //Aparecer
    textHome.style.color = 'rgb(255, 255, 85)';
    textHome.style.boxSizing = 'border-box';
    textHome.style.backgroundColor = 'rgb(29, 29, 29)';
    textHome.style.borderTop = '5px solid rgb(255, 255, 85)';
    textHome.style.fontSize = 'max(17px, 1.14vw)';
    textHome.style.borderBottom = '5px solid rgb(29, 29, 29)';
    blocoHome1.style.display = 'block';
    blocoHome2.style.display = 'block';
    blocoHome3.style.display = 'block';
    //Esconder
    textQuemSomos.style.color = '';
    textQuemSomos.style.boxSizing = '';
    textQuemSomos.style.backgroundColor = '';
    textQuemSomos.style.borderTop = '';
    textQuemSomos.style.fontSize = '';
    textQuemSomos.style.borderBottom = '';
    blocoQuemSomos1.style.display = 'none';
    blocoQuemSomos2.style.display = 'none';
    blocoQuemSomos3.style.display = 'none';

    textGaleria.style.color = '';
    textGaleria.style.boxSizing = '';
    textGaleria.style.backgroundColor = '';
    textGaleria.style.borderTop = '';
    textGaleria.style.fontSize = '';
    textGaleria.style.borderBottom = '';
    blocoGaleria1.style.display = 'none';
    blocoGaleria2.style.display = 'none';
    blocoGaleria3.style.display = 'none';

    textProdutos.style.color = '';
    textProdutos.style.boxSizing = '';
    textProdutos.style.backgroundColor = '';
    textProdutos.style.borderTop = '';
    textProdutos.style.fontSize = '';
    textProdutos.style.borderBottom = '';
    blocoProdutos1.style.display = 'none';
    blocoProdutos2.style.display = 'none';
    blocoProdutos3.style.display = 'none';
})
blocoHome1.addEventListener('mouseover', function(){
    //Aparecer
    textHome.style.color = 'rgb(255, 255, 85)';
    textHome.style.boxSizing = 'border-box';
    textHome.style.backgroundColor = 'rgb(29, 29, 29)';
    textHome.style.borderTop = '5px solid rgb(255, 255, 85)';
    textHome.style.fontSize = 'max(17px, 1.14vw)';
    textHome.style.borderBottom = '5px solid rgb(29, 29, 29)';
})
blocoHome2.addEventListener('mouseover', function(){
    //Aparecer
    textHome.style.color = 'rgb(255, 255, 85)';
    textHome.style.boxSizing = 'border-box';
    textHome.style.backgroundColor = 'rgb(29, 29, 29)';
    textHome.style.borderTop = '5px solid rgb(255, 255, 85)';
    textHome.style.fontSize = 'max(17px, 1.14vw)';
    textHome.style.borderBottom = '5px solid rgb(29, 29, 29)';
    textHome.style.transition = '0.3s';
})
blocoHome3.addEventListener('mouseover', function(){
    //Aparecer
    textHome.style.color = 'rgb(255, 255, 85)';
    textHome.style.boxSizing = 'border-box';
    textHome.style.backgroundColor = 'rgb(29, 29, 29)';
    textHome.style.borderTop = '5px solid rgb(255, 255, 85)';
    textHome.style.fontSize = 'max(17px, 1.14vw)';
    textHome.style.borderBottom = '5px solid rgb(29, 29, 29)';
    textHome.style.transition = '0.3s';
})
blocoHome1.addEventListener('click', function(){
    //ESCONDER
    textHome.style.color = '';
    textHome.style.boxSizing = '';
    textHome.style.backgroundColor = '';
    textHome.style.borderTop = '';
    textHome.style.fontSize = '';
    textHome.style.borderBottom = '';
    blocoHome1.style.display = 'none';
    blocoHome2.style.display = 'none';
    blocoHome3.style.display = 'none';
})
blocoHome2.addEventListener('click', function(){
    //ESCONDER
    textHome.style.color = '';
    textHome.style.boxSizing = '';
    textHome.style.backgroundColor = '';
    textHome.style.borderTop = '';
    textHome.style.fontSize = '';
    textHome.style.borderBottom = '';
    blocoHome1.style.display = 'none';
    blocoHome2.style.display = 'none';
    blocoHome3.style.display = 'none';
})
blocoHome3.addEventListener('click', function(){
    //ESCONDER
    textHome.style.color = '';
    textHome.style.boxSizing = '';
    textHome.style.backgroundColor = '';
    textHome.style.borderTop = '';
    textHome.style.fontSize = '';
    textHome.style.borderBottom = '';
    blocoHome1.style.display = 'none';
    blocoHome2.style.display = 'none';
    blocoHome3.style.display = 'none';
})
//QUEM SOMOS
textQuemSomos.addEventListener('click', function(){
    //Aparecer
    textQuemSomos.style.color = 'rgb(255, 255, 85)';
    textQuemSomos.style.boxSizing = 'border-box';
    textQuemSomos.style.backgroundColor = 'rgb(29, 29, 29)';
    textQuemSomos.style.borderTop = '5px solid rgb(255, 255, 85)';
    textQuemSomos.style.fontSize = 'max(17px, 1.14vw)';
    textQuemSomos.style.borderBottom = '5px solid rgb(29, 29, 29)';
    textQuemSomos.style.transition = '0.3s';
    blocoQuemSomos1.style.display = 'block';
    blocoQuemSomos2.style.display = 'block';
    blocoQuemSomos3.style.display = 'block';
    //Esconder
    textHome.style.color = '';
    textHome.style.boxSizing = '';
    textHome.style.backgroundColor = '';
    textHome.style.borderTop = '';
    textHome.style.fontSize = '';
    textHome.style.borderBottom = '';
    blocoHome1.style.display = 'none';
    blocoHome2.style.display = 'none';
    blocoHome3.style.display = 'none';

    textGaleria.style.color = '';
    textGaleria.style.boxSizing = '';
    textGaleria.style.backgroundColor = '';
    textGaleria.style.borderTop = '';
    textGaleria.style.fontSize = '';
    textGaleria.style.borderBottom = '';
    blocoGaleria1.style.display = 'none';
    blocoGaleria2.style.display = 'none';
    blocoGaleria3.style.display = 'none';

    textProdutos.style.color = '';
    textProdutos.style.boxSizing = '';
    textProdutos.style.backgroundColor = '';
    textProdutos.style.borderTop = '';
    textProdutos.style.fontSize = '';
    textProdutos.style.borderBottom = '';
    blocoProdutos1.style.display = 'none';
    blocoProdutos2.style.display = 'none';
    blocoProdutos3.style.display = 'none';
})
blocoQuemSomos1.addEventListener('mouseover', function(){
    //Aparecer
    textQuemSomos.style.color = 'rgb(255, 255, 85)';
    textQuemSomos.style.boxSizing = 'border-box';
    textQuemSomos.style.backgroundColor = 'rgb(29, 29, 29)';
    textQuemSomos.style.borderTop = '5px solid rgb(255, 255, 85)';
    textQuemSomos.style.fontSize = 'max(17px, 1.14vw)';
    textQuemSomos.style.borderBottom = '5px solid rgb(29, 29, 29)';
    textQuemSomos.style.transition = '0.3s';
})
blocoQuemSomos2.addEventListener('mouseover', function(){
    //Aparecer
    textQuemSomos.style.color = 'rgb(255, 255, 85)';
    textQuemSomos.style.boxSizing = 'border-box';
    textQuemSomos.style.backgroundColor = 'rgb(29, 29, 29)';
    textQuemSomos.style.borderTop = '5px solid rgb(255, 255, 85)';
    textQuemSomos.style.fontSize = 'max(17px, 1.14vw)';
    textQuemSomos.style.borderBottom = '5px solid rgb(29, 29, 29)';
    textQuemSomos.style.transition = '0.3s';
})
blocoQuemSomos3.addEventListener('mouseover', function(){
    //Aparecer
    textQuemSomos.style.color = 'rgb(255, 255, 85)';
    textQuemSomos.style.boxSizing = 'border-box';
    textQuemSomos.style.backgroundColor = 'rgb(29, 29, 29)';
    textQuemSomos.style.borderTop = '5px solid rgb(255, 255, 85)';
    textQuemSomos.style.fontSize = 'max(17px, 1.14vw)';
    textQuemSomos.style.borderBottom = '5px solid rgb(29, 29, 29)';
    textQuemSomos.style.transition = '0.3s';
})
blocoQuemSomos1.addEventListener('click', function(){
     //Esconder
    textQuemSomos.style.color = '';
    textQuemSomos.style.boxSizing = '';
    textQuemSomos.style.backgroundColor = '';
    textQuemSomos.style.borderTop = '';
    textQuemSomos.style.fontSize = '';
    textQuemSomos.style.borderBottom = '';
    blocoQuemSomos1.style.display = 'none';
    blocoQuemSomos2.style.display = 'none';
    blocoQuemSomos3.style.display = 'none';
})
blocoQuemSomos2.addEventListener('click', function(){
    //Esconder
    textQuemSomos.style.color = '';
    textQuemSomos.style.boxSizing = '';
    textQuemSomos.style.backgroundColor = '';
    textQuemSomos.style.borderTop = '';
    textQuemSomos.style.fontSize = '';
    textQuemSomos.style.borderBottom = '';
    blocoQuemSomos1.style.display = 'none';
    blocoQuemSomos2.style.display = 'none';
    blocoQuemSomos3.style.display = 'none';
})
blocoQuemSomos3.addEventListener('click', function(){
    //Esconder
    textQuemSomos.style.color = '';
    textQuemSomos.style.boxSizing = '';
    textQuemSomos.style.backgroundColor = '';
    textQuemSomos.style.borderTop = '';
    textQuemSomos.style.fontSize = '';
    textQuemSomos.style.borderBottom = '';
    blocoQuemSomos1.style.display = 'none';
    blocoQuemSomos2.style.display = 'none';
    blocoQuemSomos3.style.display = 'none';
})
//GALERIA
textGaleria.addEventListener('click', function(){
    //Aparecer
    textGaleria.style.color = 'rgb(255, 255, 85)';
    textGaleria.style.boxSizing = 'border-box';
    textGaleria.style.backgroundColor = 'rgb(29, 29, 29)';
    textGaleria.style.borderTop = '5px solid rgb(255, 255, 85)';
    textGaleria.style.fontSize = 'max(17px, 1.14vw)';
    textGaleria.style.borderBottom = '5px solid rgb(29, 29, 29)';
    textGaleria.style.transition = '0.3s';
    blocoGaleria1.style.display = 'block';
    blocoGaleria2.style.display = 'block';
    blocoGaleria3.style.display = 'block';
    //Esconder
    textHome.style.color = '';
    textHome.style.boxSizing = '';
    textHome.style.backgroundColor = '';
    textHome.style.borderTop = '';
    textHome.style.fontSize = '';
    textHome.style.borderBottom = '';
    blocoHome1.style.display = 'none';
    blocoHome2.style.display = 'none';
    blocoHome3.style.display = 'none';

    textQuemSomos.style.color = '';
    textQuemSomos.style.boxSizing = '';
    textQuemSomos.style.backgroundColor = '';
    textQuemSomos.style.borderTop = '';
    textQuemSomos.style.fontSize = '';
    textQuemSomos.style.borderBottom = '';
    blocoQuemSomos1.style.display = 'none';
    blocoQuemSomos2.style.display = 'none';
    blocoQuemSomos3.style.display = 'none';

    textProdutos.style.color = '';
    textProdutos.style.boxSizing = '';
    textProdutos.style.backgroundColor = '';
    textProdutos.style.borderTop = '';
    textProdutos.style.fontSize = '';
    textProdutos.style.borderBottom = '';
    blocoProdutos1.style.display = 'none';
    blocoProdutos2.style.display = 'none';
    blocoProdutos3.style.display = 'none';
})
blocoGaleria1.addEventListener('mouseover', function(){
    //Aparecer
    textGaleria.style.color = 'rgb(255, 255, 85)';
    textGaleria.style.boxSizing = 'border-box';
    textGaleria.style.backgroundColor = 'rgb(29, 29, 29)';
    textGaleria.style.borderTop = '5px solid rgb(255, 255, 85)';
    textGaleria.style.fontSize = 'max(17px, 1.14vw)';
    textGaleria.style.borderBottom = '5px solid rgb(29, 29, 29)';
    textGaleria.style.transition = '0.3s';
})
blocoGaleria2.addEventListener('mouseover', function(){
    //Aparecer
    textGaleria.style.color = 'rgb(255, 255, 85)';
    textGaleria.style.boxSizing = 'border-box';
    textGaleria.style.backgroundColor = 'rgb(29, 29, 29)';
    textGaleria.style.borderTop = '5px solid rgb(255, 255, 85)';
    textGaleria.style.fontSize = 'max(17px, 1.14vw)';
    textGaleria.style.borderBottom = '5px solid rgbrgb(29, 29, 29)';
    textGaleria.style.transition = '0.3s';
})
blocoGaleria3.addEventListener('mouseover', function(){
    //Aparecer
    textGaleria.style.color = 'rgb(255, 255, 85)';
    textGaleria.style.boxSizing = 'border-box';
    textGaleria.style.backgroundColor = 'rgb(29, 29, 29)';
    textGaleria.style.borderTop = '5px solid rgb(255, 255, 85)';
    textGaleria.style.fontSize = 'max(17px, 1.14vw)';
    textGaleria.style.borderBottom = '5px solid rgbrgb(29, 29, 29)';
    textGaleria.style.transition = '0.3s';
})
blocoGaleria1.addEventListener('click', function(){
    //Esconder
    textGaleria.style.color = '';
    textGaleria.style.boxSizing = '';
    textGaleria.style.backgroundColor = '';
    textGaleria.style.borderTop = '';
    textGaleria.style.fontSize = '';
    textGaleria.style.borderBottom = '';
    blocoGaleria1.style.display = 'none';
    blocoGaleria2.style.display = 'none';
    blocoGaleria3.style.display = 'none';
})
blocoGaleria2.addEventListener('click', function(){
    //Esconder
    textGaleria.style.color = '';
    textGaleria.style.boxSizing = '';
    textGaleria.style.backgroundColor = '';
    textGaleria.style.borderTop = '';
    textGaleria.style.fontSize = '';
    textGaleria.style.borderBottom = '';
    blocoGaleria1.style.display = 'none';
    blocoGaleria2.style.display = 'none';
    blocoGaleria3.style.display = 'none';
})
blocoGaleria3.addEventListener('click', function(){
    //Esconder
    textGaleria.style.color = '';
    textGaleria.style.boxSizing = '';
    textGaleria.style.backgroundColor = '';
    textGaleria.style.borderTop = '';
    textGaleria.style.fontSize = '';
    textGaleria.style.borderBottom = '';
    blocoGaleria1.style.display = 'none';
    blocoGaleria2.style.display = 'none';
    blocoGaleria3.style.display = 'none';
})
//PRODUTOS
textProdutos.addEventListener('click', function(){
    //Aparecer
    blocoProdutos1.style.display = 'block';
    blocoProdutos2.style.display = 'block';
    blocoProdutos3.style.display = 'block';
    //Esconder
    textHome.style.color = '';
    textHome.style.boxSizing = '';
    textHome.style.backgroundColor = '';
    textHome.style.borderTop = '';
    textHome.style.fontSize = '';
    textHome.style.borderBottom = '';
    blocoHome1.style.display = 'none';
    blocoHome2.style.display = 'none';
    blocoHome3.style.display = 'none';

    textQuemSomos.style.color = '';
    textQuemSomos.style.boxSizing = '';
    textQuemSomos.style.backgroundColor = '';
    textQuemSomos.style.borderTop = '';
    textQuemSomos.style.fontSize = '';
    textQuemSomos.style.borderBottom = '';
    blocoQuemSomos1.style.display = 'none';
    blocoQuemSomos2.style.display = 'none';
    blocoQuemSomos3.style.display = 'none';

    textGaleria.style.color = '';
    textGaleria.style.boxSizing = '';
    textGaleria.style.backgroundColor = '';
    textGaleria.style.borderTop = '';
    textGaleria.style.fontSize = '';
    textGaleria.style.borderBottom = '';
    blocoGaleria1.style.display = 'none';
    blocoGaleria2.style.display = 'none';
    blocoGaleria3.style.display = 'none';
})
blocoProdutos1.addEventListener('mouseover', function(){
    //Aparecer
    textProdutos.style.color = 'rgb(255, 255, 85)';
    textProdutos.style.boxSizing = 'border-box';
    textProdutos.style.backgroundColor = 'rgb(29, 29, 29)';
    textProdutos.style.borderTop = '5px solid rgb(255, 255, 85)';
    textProdutos.style.fontSize = 'max(17px, 1.14vw)';
    textProdutos.style.borderBottom = '5px solid rgb(29, 29, 29)';
    textProdutos.style.transition = '0.3s';
})
blocoProdutos2.addEventListener('mouseover', function(){
    //Aparecer
    textProdutos.style.color = 'rgb(255, 255, 85)';
    textProdutos.style.boxSizing = 'border-box';
    textProdutos.style.backgroundColor = 'rgb(29, 29, 29)';
    textProdutos.style.borderTop = '5px solid rgb(255, 255, 85)';
    textProdutos.style.fontSize = 'max(17px, 1.14vw)';
    textProdutos.style.borderBottom = '5px solid rgb(29, 29, 29)';
    textProdutos.style.transition = '0.3s';
})
blocoProdutos3.addEventListener('mouseover', function(){
    //Aparecer
    textProdutos.style.color = 'rgb(255, 255, 85)';
    textProdutos.style.boxSizing = 'border-box';
    textProdutos.style.backgroundColor = 'rgb(29, 29, 29)';
    textProdutos.style.borderTop = '5px solid rgb(255, 255, 85)';
    textProdutos.style.fontSize = 'max(17px, 1.14vw)';
    textProdutos.style.borderBottom = '5px solid rgb(29, 29, 29)';
    textProdutos.style.transition = '0.3s';
})
blocoProdutos1.addEventListener('click', function(){
    //Esconder
    textProdutos.style.color = '';
    textProdutos.style.boxSizing = '';
    textProdutos.style.backgroundColor = '';
    textProdutos.style.borderTop = '';
    textProdutos.style.fontSize = '';
    textProdutos.style.borderBottom = '';
    blocoProdutos1.style.display = 'none';
    blocoProdutos2.style.display = 'none';
    blocoProdutos3.style.display = 'none';
})
blocoProdutos2.addEventListener('click', function(){
    //Esconder
    textProdutos.style.color = '';
    textProdutos.style.boxSizing = '';
    textProdutos.style.backgroundColor = '';
    textProdutos.style.borderTop = '';
    textProdutos.style.fontSize = '';
    textProdutos.style.borderBottom = '';
    blocoProdutos1.style.display = 'none';
    blocoProdutos2.style.display = 'none';
    blocoProdutos3.style.display = 'none';
})
blocoProdutos3.addEventListener('click', function(){
    //Esconder
    textProdutos.style.color = '';
    textProdutos.style.boxSizing = '';
    textProdutos.style.backgroundColor = '';
    textProdutos.style.borderTop = '';
    textProdutos.style.fontSize = '';
    textProdutos.style.borderBottom = '';
    blocoProdutos1.style.display = 'none';
    blocoProdutos2.style.display = 'none';
    blocoProdutos3.style.display = 'none';
})