<template>
  <div class="price-wrapper">
    <h1>Стоимость услуг</h1>
    <div class="price-grid">
      <div>
        <h2>
          ВИДЕОРОЛИК
          <br />
          ДЛЯ БЛОГА
        </h2>
        <p>
          Создаем имиджевые
          <br />
          и обучающие видео о
          <br />
          продуктах и услугах
          <br />
          бизнеса
        </p>
        <span>от 150 000 ₽</span>
        <button>Заказать просчет</button>
      </div>
      <div>
        <h2>
          ВИДЕОРОЛИК
          <br />
          ДЛЯ БЛОГА
        </h2>
        <p>
          Создаем имиджевые
          <br />
          и обучающие видео о
          <br />
          продуктах и услугах
          <br />
          бизнеса
        </p>
        <span>от 150 000 ₽</span>
        <button>Заказать просчет</button>
      </div>
      <div>
        <h2>
          ВИДЕОРОЛИК
          <br />
          ДЛЯ БЛОГА
        </h2>
        <p>
          Создаем имиджевые
          <br />
          и обучающие видео о
          <br />
          продуктах и услугах
          <br />
          бизнеса
        </p>
        <span>от 150 000 ₽</span>
        <button>Заказать просчет</button>
      </div>
      <div>
        <h2>
          ВИДЕОРОЛИК
          <br />
          ДЛЯ БЛОГА
        </h2>
        <p>
          Создаем имиджевые
          <br />
          и обучающие видео о
          <br />
          продуктах и услугах
          <br />
          бизнеса
        </p>
        <span>от 150 000 ₽</span>
        <button>Заказать просчет</button>
      </div>
    </div>
  </div>
</template>
<style scopes>
.price-wrapper h1 {
  color: #0094ff;
  font-size: 50px;
  font-weight: 700;
  line-height: 82px;
  text-align: center;
  margin-bottom: 80px;
}
.price-grid div {
  box-shadow: 1px 1px 20px 0px #00000026;
  background: #0094ff;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 448px;
}
.price-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 60px;
  width: 90%;
  margin: 0 auto;
  margin-bottom: 120px;
}
.price-grid div h2 {
  font-size: 22px;
  font-weight: 700;
  line-height: 23.32px;
  color: white;
  text-align: center;
  margin-bottom: 30px;
}
.price-grid div p {
  font-size: 16px;
  font-weight: 500;
  line-height: 19.84px;
  text-align: center;
  color: #ffffff;
}
.price-grid div span {
  margin-top: 65px;
  font-size: 32px;
  font-weight: 700;
  line-height: 39.68px;
  color: white;
}
.price-grid div button {
  margin-top: 40px;
  width: 201.49px;
  height: 47px;
  border-radius: 40px;
  border: none;
  background: white;
  color: #0094ff;
  cursor: pointer;
}
@media (max-width: 1150px) {
  .price-grid div button {
    width: 170px;
    height: 47px;
  }
  .price-grid div span {
    font-size: 28px;
  }
  .price-grid div h2 {
    font-size: 20px;
  }
}
@media (max-width: 1000px) {
  .price-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    width: 90%;
    margin: 0 auto;
    margin-bottom: 120px;
  }
  .price-grid div h2 {
    font-size: 30px;
    line-height: 35px;
  }
  .price-grid div p {
    font-size: 24px;
    line-height: 24px;
  }
  .price-grid div button {
    width: 240px;
    height: 47px;
  }
}
@media (max-width: 700px) {
  .price-grid div span {
    margin-top: 35px;
  }
  .price-grid div h2 {
    font-size: 26px;
    line-height: 30px;
  }
  .price-grid div p {
    font-size: 20px;
    line-height: 20px;
  }
  .price-grid div button {
    width: 200px;
    height: 47px;
  }
}
@media (max-width: 600px) {
  .price-grid {
    grid-template-columns: 1fr;
  }
  .price-grid div h2 {
    font-size: 30px;
    line-height: 30px;
  }
  .price-grid div p {
    font-size: 26px;
    line-height: 24px;
  }
  .price-grid div button {
    width: 240px;
    height: 47px;
  }
}
</style>
