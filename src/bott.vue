<template>
  <div class="bott-wrapper">
    <div class="bott-inner">
      <div>
        <img src="/Logo.svg" alt="" />
        <span class="">
          <p>+7 495 139-0993</p>
          <h3>info@medford.media</h3>
        </span>
      </div>
      <div>
        <h1>
          ЕСЛИ У ВАС ЕСТЬ КАКОЙ-ТО ВОПРОС, ОСТАВЬТЕ ВАШ ТЕЛЕФОН И МЫ
          <br />
          ВАМ СРАЗУ ЖЕ ПЕРЕЗВОНИМ
        </h1>
        <div class="button-bott">
          <input placeholder="Введите номер" type="number" />
          <button>отправить</button>
        </div>
      </div>
    </div>
    <div class="line"></div>
    <div class="bott-bott">
      <div>
        <h2>MEDFORD MEDIA@2022</h2>
      </div>
      <div>
        <p>Портфолио</p>
        <p>Как мы работам</p>
        <p>Цены</p>
        <p>Команда</p>
      </div>
    </div>
  </div>
</template>
<style>
.bott-wrapper {
  background: linear-gradient(
    180deg,
    #008bf5 0%,
    #038ef3 43.23%,
    #06d5f1 95.83%
  );
  height: 380px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.bott-inner {
  width: 90%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 90px;
}
.bott-wrapper div span p {
  font-size: 20px;
  font-weight: 500;
  line-height: 24.8px;
  color: white;
}
.bott-wrapper div span {
  display: flex;
  gap: 50px;
  margin-top: 73px;
}
.bott-wrapper div span h3 {
  font-size: 20px;
  font-weight: 700;
  line-height: 24.8px;
  color: white;
}
.bott-inner h1 {
  font-size: 18px;
  font-weight: 700;
  line-height: 22.32px;
  text-align: right;
  color: white;
}
.button-bott {
  display: flex;
  justify-content: end;
  gap: 22px;
  margin-top: 67px;
}
.button-bott button {
  width: 270px;
  height: 47px;
  border-radius: 40px;
  border: 2px solid #ffffff;
  color: white;
  background: transparent;
}
.button-bott input {
  width: 270px;
  height: 47px;
  border-radius: 40px;
  border: none;
  padding-left: 20px;
}
.button-bott input:focus {
  outline: none;
  border: none;
}
.line {
  width: 90%;
  height: 1px;
  background: white;
  margin: 0 auto;
}
.bott-bott {
  width: 90%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;
}
.bott-bott h2 {
  color: white;
  font-size: 14px;
  font-weight: 600;
  line-height: 17.36px;
}
.bott-bott div {
  display: flex;
  gap: 35px;
}
.bott-bott div p {
  font-size: 14px;
  font-weight: 500;
  line-height: 17.36px;
  color: white;
}
@media (max-width: 1200px) {
  .bott-inner h1 {
    font-size: 14px;
  }
  .button-bott button {
    width: 240px;
  }
  .button-bott input {
    width: 220px;
  }
  .bott-wrapper div span h3 {
    font-size: 16px;
  }
  .bott-wrapper div span p {
    font-size: 16px;
  }
}
@media (max-width: 1000px) {
  .bott-inner {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .button-bott {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .bott-inner h1 {
    text-align: center;
    margin-top: 20px;
  }
}
@media (max-width: 600px) {
  .bott-inner h1 {
    font-size: 12px;
  }
}
</style>
