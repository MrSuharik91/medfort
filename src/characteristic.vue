<template>
  <div class="characteristic-wrapper">
    <div class="characteristic-inner">
      <div>
        <h1>ЗВУК</h1>
        <p>
          Хороший звук является определяющим
          <br />
          в видео. Именно поэтому существует
          <br />
          отдельная профессия звукорежиссёр
          <br />
          и звуку уделяется особое внимание.
          <br />
          Профессиональные микрофоны
          <br />
          позволяют записывать звук
          <br />
          в высоком качестве, без посторонних
          <br />
          шумов, артефактов и
          <br />
          сделать его чистым на
          <br />
          постобработке.
        </p>
      </div>
      <img class="microfone" src="/microphone.png" alt="" />
    </div>
    <div class="characteristic-inner">
      <div>
        <h1>СВЕТ</h1>
        <p>
          Освещение это основа основ
          <br />
          любого хорошого видео. От него
          <br />
          зависит все, настроение,
          <br />
          качество изображение. Свет
          <br />
          важнее камеры! С хорошим
          <br />
          светом можно добиться
          <br />
          отличного результата даже
          <br />
          с iPhone, а вот с дорогой
          <br />
          камерой и без может получится
          <br />
          очень плохо.
        </p>
      </div>
      <img class="light" src="/light.png" alt="" />
    </div>
    <div class="characteristic-inner">
      <div>
        <h1>КАМЕРА</h1>
        <p>
          Не существует универсального
          <br />
          устройства, подходящего для
          <br />
          любых ситуаций. Но различная
          <br />
          оптика позволяет реализовывать
          <br />
          любые задачи. А вот камеры
          <br />
          бывают разные и отличаюся
          <br />
          качествои цветопередачи,
          <br />
          и разрешением.
          <br />
          <br />
          Мы снимаем в 4K на камеры
          <br class="br" />
          Fujifilm и Sony.
        </p>
      </div>

      <img class="camera" src="/camera.png" alt="" />
    </div>
    <div class="characteristic-inner">
      <div>
        <h1>КОПТЕР</h1>
        <p>
          Для некоторых задач это
          <br />
          незаменимый инструмент.
          <br />
          Он позволяет делать
          <br />
          пролеты и снимать общий
          <br />
          план. Раньше эту задачу
          <br />
          решало оборудование
          <br />
          стоимостью миллионы. На
          <br />
          сегодня мы имеем
          <br />
          возможность делать
          <br />
          профессиональные
          <br />
          кадры в качестве 4K

          <br class="br" />
          используя коптер.
        </p>
      </div>
      <img class="copter" src="/copter.png" alt="" />
    </div>
  </div>
</template>
<style scoped>
.characteristic-wrapper {
  width: 90%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 45px;
  margin: 0 auto;
  margin-bottom: 140px;
}
.characteristic-inner {
  box-shadow: 1px 1px 30px 0px #00000033;
  height: 370px;
  border-radius: 30px;
  display: flex;
  align-items: center;
  padding-left: 50px;
  position: relative;
}
.characteristic-wrapper h1 {
  margin-bottom: 50px;
  color: #0094ff;
  font-size: 30px;
  font-weight: 700;
  line-height: 35.55px;
}
.microfone {
  position: absolute;
  top: 0px;
  right: 0px;
}
.camera {
  position: absolute;
  bottom: 0px;
  right: 20px;
}
.light {
  position: absolute;
  bottom: 0px;
  right: 50px;
}
.copter {
  position: absolute;
  bottom: 50px;
  right: 60px;
}
.br {
  display: none;
}
@media (max-width: 1400px) {
  .characteristic-inner img {
    width: 200px;
  }
  .characteristic-inner p {
    font-size: 14px;
  }
}
@media (max-width: 1200px) {
  .characteristic-inner img {
    width: 180px;
  }
  .characteristic-inner p {
    font-size: 12px;
  }
}
@media (max-width: 1100px) {
  .characteristic-wrapper {
    grid-template-columns: 600px;
    justify-content: center;
  }
  .characteristic-inner p {
    font-size: 14px;
    line-height: 18px;
  }
}
@media (max-width: 700px) {
  .characteristic-wrapper {
    grid-template-columns: 1fr;
    justify-content: center;
  }
  .characteristic-inner p {
    font-size: 12px;
    line-height: 14px;
  }
  .characteristic-inner img {
    width: 120px;
  }
  .characteristic-inner {
    padding-left: 20px;
  }
}
@media (max-width: 500px) {
  .light {
    right: 30px;
  }
  .br {
    display: block;
  }
  .copter {
    position: absolute;
    bottom: 50px;
    right: 10px;
  }
}
</style>
