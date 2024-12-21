import React from 'react';
import './index.css';
import img from './img/l.jpg';
import img1 from './img/1.jpg';
import img2 from './img/2.jpg';
import video from './img/Nadya.MOV';

function App() {
  return (
    <div className="wrapper">
    <div className='App'>
      <h1>
        THE BEST OF THE BEST
      </h1>
      <div className='container'>
        <img src={img} alt="Image 1" />
        <p className='container-text'>
          Мы перестали общаться, увы,<br />
          Но в сердце моем обжигающий свет.<br />
          Словно звезда, что не гаснет в ночи,<br />
          Твой образ живет, не стерев след.<br />
          <br />
          Ты наполняешь дни теплом,<br />
          В мечтах пройдем по светлым тропам.<br />
          С тобою вместе — это дом,<br />
          Где счастье льется через строки.<br />
        </p>
      </div>
      <div className='container-p'>
        <img src={img1} alt="Image 2" />
        <p className='container-text'>
          Когда впервые я тебя увидел,<br />
          В душе моей зажглась искра.<br />
          Я в жизни девушку красивее не видел,<br />
          И думаю, что не увижу никогда.<br />
          <br />
          Твои глаза, твоя улыбка,<br />
          Всех валят наповал.<br />
          Но отпустить тебя - ошибка,<br />
          О которой я не знал.<br />
        </p>
      </div>
      <div className='container-p'>
        <img src={img2} alt="Image 3" />
        <p className='container-text'>
          А можно я, пока читаешь ты<br />
          С улыбкой эти строчки,<br />
          Скажу, что в мире все цветы<br />
          В одной растут лишь точке?<br />
          <br />
          И точка та — твоя душа.<br />
          Ты можешь мне не верить,<br />
          Она цветет там не спеша<br />
          В любой из дней недели.<br />
        </p>
      </div>
      <div className="container" id='video'>
        <video controls>
          <source src={video} type='video/mp4' />
          Ваш браузер не поддерживает видео.
        </video>
      </div>
    </div>
    </div>
  );
}

export default App;