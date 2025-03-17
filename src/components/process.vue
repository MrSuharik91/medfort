<template>
  <div class="process-wrapper">
    <div class="process">
      <span
        ><h2>1</h2>
        <h1>
          ПРЕДЛАГАЕМ
          <br />
          РЕШЕНИЕ
        </h1></span
      >
      <p>
        Имиджевые видео,
        <br />
        увеличивают лояльность
        <br />
        клиентов, повышают
        <br />
        узнаваемость бренда и
        <br />
        продуктов.
      </p>
      <img class="bulb" src="/lamp.svg" alt="" />
    </div>
    <div class="process">
      <span
        ><h2>2</h2>
        <h1>
          ПЛАНИРУЕМ
          <br />
          БЮДЖЕТ
        </h1></span
      >
      <p>
        Имиджевые видео,
        <br />
        увеличивают лояльность
        <br />
        клиентов, повышают
        <br />
        узнаваемость бренда и
        <br />
        продуктов.
      </p>
      <img class="clock" src="/clock.svg" alt="" />
    </div>
    <div class="process">
      <span
        ><h2>3</h2>
        <h1>
          ПИШЕМ
          <br />
          СЦЕНАРИЙ
        </h1></span
      >
      <p>
        Имиджевые видео,
        <br />
        увеличивают лояльность
        <br />
        клиентов, повышают
        <br />
        узнаваемость бренда и
        <br />
        продуктов.
      </p>
      <img class="lamp" src="/lamp-2.svg" alt="" />
    </div>
    <div class="process">
      <span
        ><h2>4</h2>
        <h1>
          СНИМАЕМ
          <br />
          ВИДЕО
        </h1></span
      >
      <p>
        Имиджевые видео,
        <br />
        увеличивают лояльность
        <br />
        клиентов, повышают
        <br />
        узнаваемость бренда и
        <br />
        продуктов.
      </p>
      <img src="/camera.svg" alt="" />
    </div>
    <div class="process">
      <span
        ><h2>5</h2>
        <h1>
          ДОБАВЛЯЕМ
          <br />
          ГРАФИКУ
        </h1></span
      >
      <p>
        Имиджевые видео,
        <br />
        увеличивают лояльность
        <br />
        клиентов, повышают
        <br />
        узнаваемость бренда и
        <br />
        продуктов.
      </p>
      <img class="graphics" src="/graphic.svg" alt="" />
    </div>
    <div class="process">
      <span
        ><h2>6</h2>
        <h1>
          МОНТИРУЕМ
          <br />
          РОЛИК
        </h1></span
      >
      <p>
        Имиджевые видео,
        <br />
        увеличивают лояльность
        <br />
        клиентов, повышают
        <br />
        узнаваемость бренда и
        <br />
        продуктов.
      </p>
      <img class="mount" src="/montage.svg" alt=" " />
    </div>
  </div>
</template>
<style>
body {
  box-sizing: border-box;
}
.process-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 90%;
  margin: 0 auto;
  gap: 30px;
}
.process {
  background: #ffffff;
  padding: 25px;
  box-shadow: 1px 1px 20px 0px #008bf5b2;
  height: 310px;
  border-radius: 30px;
  position: relative;
}
.process img {
  position: absolute;
  right: 50px;
  bottom: 25px;
}
.process span h2 {
  font-size: 60px;
  font-weight: 700;
  line-height: 74.4px;
  margin-right: 20px;
}
.process span h1 {
  font-size: 22px;
  font-weight: 800;
  line-height: 26.07px;
  letter-spacing: 0.02em;
}
.process p {
  margin-top: 30px;
  font-size: 16px;
  font-weight: 500;
  line-height: 18.2px;
}
.process span {
  color: #0094ff;
  display: flex;
  align-items: center;
}
.clock {
  right: 10px !important;
}

@media (max-width: 1200px) {
  .process img {
    right: 20px;
    bottom: 20px;
  }
  .lamp {
    width: 120px;
    height: 140px;
  }
  .clock {
    width: 160px;
    height: 140px;
  }
}
@media (max-width: 1000px) {
  .process-wrapper {
    grid-template-columns: 1fr 1fr;
  }
}
@media (max-width: 650px) {
  .process-wrapper {
    grid-template-columns: 1fr;
  }
  .process p {
    font-size: 20px;
    line-height: 24px;
  }
}
@media (max-width: 450px) {
  .clock {
    width: 130px;
    height: 120px;
  }
  .bulb {
    height: 120px;
  }
  .lamp {
    width: 100px;
    height: 120px;
  }
  .graphics {
    width: 100px;
    height: 110px;
  }
  .mount {
    width: 130px;
    height: 110px;
  }
}
</style>
