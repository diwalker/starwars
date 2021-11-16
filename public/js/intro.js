/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
// eslint-disable-next-line linebreak-style
// eslint-disable-next-line linebreak-style
/* eslint-disable no-plusplus */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
/* eslint-disable no-multi-assign */
/* eslint-disable linebreak-style */
/* eslint-disable no-use-before-define */
/* eslint-disable linebreak-style */
/* eslint-disable prefer-template */
/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
/* eslint-disable indent */
/* eslint-disable linebreak-style */
/**
 * Data: 15/11/2021
 * Author: Diego Pereira
 */
 let width = window.innerWidth;
 let height = window.innerHeight;
 const intro = document.getElementsByClassName('intro')[0];
 const historia = document.getElementsByClassName('historia')[0];
 const paragrafos = document.getElementsByClassName('paragrafos')[0];
 const som = document.getElementById('som');
 intro.style.fontSize = width / 30 + 'px';
 historia.style.fontSize = width / 20 + 'px';
 paragrafos.style.height = height + 'px';
 window.addEventListener('resize', () => {
   // eslint-disable-next-line no-multi-assign
   width = canvas.width = window.innerWidth;
   height = canvas.height = window.innerHeight;
   intro.style.fontSize = width / 30 + 'px';
   historia.style.fontSize = width / 20 + 'px';
   paragrafos.style.height = height + 'px';
 });
 function iniciar() {
   intro.className = 'intro intro_texto intro_animacao';
   historia.className = 'historia historia_texto historia_animacao';
   som.play();
 }
 /* Fundo de estrelas */
 let canvas = document.getElementById('snow');
 const ctx = canvas.getContext('2d');
 canvas.width = width;
 canvas.height = height;
 const num = 100;
 const size = 2;
 const elements = [];
 function inicio() {
   // eslint-disable-next-line no-plusplus
   for (let i = 0; i < num; i++) {
     elements[i] = {
       x: Math.ceil(Math.random() * width),
       y: Math.ceil(Math.random() * height),
       size: Math.random() * size,
     };
   }
 }
 function nevar() {
   ctx.clearRect(0, 0, width, height);
   for (let i = 0; i < num; i++) {
     const e = elements[i];
     ctx.beginPath();
     ctx.fillStyle = '#FFFFFF';
     ctx.arc(e.x, e.y, e.size, 0, 2 * Math.PI);
     ctx.fill();
   }
 }
 inicio();
 nevar();