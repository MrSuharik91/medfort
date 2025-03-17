<template>
  <div class="superpower">
    <h1>НАША СУПЕРСИЛА</h1>
    <div class="superpower-wrapper">
      <div>
        <img src="/star.svg" alt="" />
        <h1>
          Создаем
          <br />
          имиджевые
          <br />
          и обучающие
          <br />
          видео
        </h1>
      </div>
      <div>
        <img src="/settings.svg" alt="" />
        <h1>
          Обеспечиваем
          <br />
          производство
          <br />
          и техподдержку
          <br />
          корпоративных
          <br />
          видеоблогов
        </h1>
      </div>
      <div>
        <img src="/person.svg" alt="" />
        <h1>
          Организуем
          <br />
          и проводим
          <br />
          тематические
          <br />
          вебинары для
          <br />
          профессионалов
        </h1>
      </div>
      <div>
        <img src="/photo.svg" alt="" />
        <h1>
          Записываем
          <br />
          видеоподкасты
          <br />
          в любом удобном
          <br />
          для бизнеса
          <br />
          форматах
        </h1>
      </div>
    </div>
  </div>
</template>
<style>
.superpower {
  margin-top: 120px;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.superpower h1 {
  font-size: 60px;
  font-weight: 700;
  line-height: 63.6px;
  color: #008bf5;
  text-align: center;
}
.superpower-wrapper {
  margin-top: 80px;
  display: grid;
  width: 90%;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 50px;
}
.superpower-wrapper div {
  box-shadow: 1px 1px 20px 0px #00000026;
  border: 1px solid #e1e2e4;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 15px;
  height: 340px;
}
.superpower-wrapper div h1 {
  font-size: 22px;
  font-weight: 550;
  line-height: 26px;
  color: #000000;
  margin-top: 35px;
}
@media (max-width: 1000px) {
  .superpower-wrapper div h1 {
    font-size: 18px;
  }
}
@media (max-width: 900px) {
  .superpower-wrapper {
    grid-template-columns: 1fr 1fr;
  }
  .superpower-wrapper div h1 {
    font-size: 24px;
  }
}
@media (max-width: 500px) {
  .superpower h1 {
    font-size: 45px;
    line-height: 50px;
  }
  .superpower-wrapper {
    grid-template-columns: 1fr;
  }
  .superpower-wrapper div h1 {
    font-size: 28px;
  }
}
</style>
