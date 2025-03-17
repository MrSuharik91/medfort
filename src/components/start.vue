<script>
export default {
  data() {
    return {
      d: false,
      formSent: false,
      menu: window.innerWidth < 750,
      email: "",
      name: "",
      number: "",
      inccorect: false,
    };
  },
  methods: {
    f() {
      if (this.d === false) {
        this.d = true;
      }
    },
    g() {
      if (this.d === true) {
        this.d = false;
      }
    },
    flipBlock() {
      if (this.email.includes("@") && this.email !== "" && this.number !== "") {
        this.formSent = true;
      } else {
        this.inccorect = true;
      }
    },
  },
};
</script>

<template>
  <header>
    <div class="order" v-if="d">
      <img class="close" src="/close.png" alt="" @click="g" />
      <div v-if="!formSent" class="callback">
        <h1>
          ЗАКАЗАТЬ ОБРАТНЫЙ
          <br />
          ЗВОНОК
        </h1>
        <input
          class="input-placeholder"
          placeholder="Имя"
          type="text"
          v-model="name"
        />
        <input
          class="input-placeholder"
          placeholder="Телефон"
          type="number"
          v-model="number"
        />
        <input
          class="input-placeholder"
          placeholder="Электронная почта"
          type="text"
          v-model="email"
        />
        <p class="inccorect" v-if="inccorect">Введены некоректные данные</p>
        <button @click="flipBlock">Oтправить</button>
      </div>
      <div v-else class="reverse">
        <img src="/recall.svg" alt="" />
        <h1>
          СПАСИБО!
          <br />
          МЫ ВАМ
          <br />
          ПЕРЕЗВОНИМ!
        </h1>
      </div>
    </div>
    <div class="header-wrapper">
      <div class="menu" v-if="menu">
        <input type="checkbox" id="burger-checkbox" class="burger-checkbox" />
        <label for="burger-checkbox" class="burger"></label>
        <ul class="menu-list">
          <li><a href="#" class="menu-item">Портфолио</a></li>
          <li><a href="#" class="menu-item">Как мы работам</a></li>
          <li><a href="#" class="menu-item">Цены</a></li>
          <li><a href="#" class="menu-item">Команда</a></li>
        </ul>
      </div>

      <img class="logo" src="/Logo.svg" alt="" />
      <div class="header-inner">
        <a href="">Портфолио</a>
        <a href="">Как мы работам</a>
        <a href="">Цены</a>
        <a href="">Команда</a>
        <button @click="f">Заказать звонок</button>
      </div>
    </div>
    <div class="div-header-big">
      <div class="first-div-header">
        <h1>
          Создаем
          <br />
          продающие
          <br />
          видео и подкасты
          <br />
          для бизнеса
        </h1>
        <div class="button-header-div">
          <button>Заполните бриф</button>
          <h2>
            Бриф дает понимание какой тип
            <br />
            видеоролика нужен вашему бизнесу
          </h2>
        </div>
      </div>
      <img src="/header-img.png" alt="" />
    </div>
  </header>
</template>
<style scoped>
header {
  background: linear-gradient(
    180deg,
    #0185ff 0%,
    rgba(0, 224, 255, 0.28) 70.83%,
    rgba(0, 224, 255, 0) 100%
  );
  height: 900px;
}
.header-wrapper button {
  border: 1px solid #ffffff;
  border-radius: 40px;
  width: 157px;
  height: 50px;
  background-color: transparent;
  cursor: pointer;
  color: #f5f5f5;
  font-size: 14px;
  line-height: 17.36px;
}
.header-wrapper button:hover {
  background-color: blue;
  border: none;
  transition: 0.6s;
}
.header-wrapper {
  display: flex;
  padding-top: 40px;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin: 0 auto;
}
.header-wrapper img {
  width: 231px;
  height: 62px;
}
.div-header-big {
  display: flex;
  margin: 0 auto;
  width: 90%;
  justify-content: space-between;
  margin-top: 120px;
  align-items: center;
}
.div-header-big img {
  width: 765px;
  height: 631px;
}
.header-inner {
  display: flex;
  gap: 40px;
  align-items: center;
}
.button-header-div {
  display: flex;
  gap: 20px;
  align-items: center;
  margin-top: 70px;
}
.button-header-div button {
  cursor: pointer;
  background: linear-gradient(180deg, #008bf5 0%, #00d7f5 100%);
  border: none;
  width: 189px;
  height: 49px;
  border-radius: 40px;
  color: white;
  font-size: 15px;
  line-height: 18.6px;
}
.button-header-div h2 {
  color: blue;
  font-size: 16px;
  line-height: 20px;
}
.first-div-header h1 {
  color: white;
  font-size: 70px;
  font-weight: 700;
  line-height: 78px;
}
.order {
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.816);
  display: flex;
  justify-content: center;
  align-items: center;
}
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.close {
  width: 40px;
  height: 40px;
  position: absolute;
  top: 50px;
  right: 50px;
  cursor: pointer;
}
.reverse {
  width: 30%;
  height: 437px;
  border-radius: 20px;
  background: #008bf5;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  flex-direction: column;
}
.reverse img {
  width: 44.64px;
  height: 51.53px;
}
.callback {
  width: 30%;
  height: 437px;
  border-radius: 20px;
  background: #008bf5;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  flex-direction: column;
  transition: 0.6s;
}
.input-placeholder {
  text-align: center;
  border: none;
  border-bottom: 1px solid white;
  background-color: transparent;
  width: 267px;
  height: 40px;
  outline: none;
}
.input-placeholder::placeholder {
  color: white;
}
.callback button {
  width: 201px;
  height: 47px;
  border: none;
  border-radius: 40px;
  cursor: pointer;
  margin-top: 20px;
}
.callback h1 {
  color: #ffffff;
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  line-height: 25px;
}
.callback-enter-active,
.reverse-enter-active {
  opacity: 1;
  transform: translateY(0);
}
.reverse {
  transition: 0.6s;
}
.reverse h1 {
  color: #f2f2f2;
  font-size: 26px;
  font-weight: 700;
  line-height: 31.2px;
  text-align: center;
  margin-top: 45px;
}
.callback-leave-active,
.reverse-leave-active {
  opacity: 0;
  transform: translateY(10px);
}
.menu-hide {
  width: 40%;
  background-color: black;
  height: 100vh;
  z-index: 10;
  position: fixed;
  animation: slideIn 0.3s ease-in-out forwards;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
}
.menu-hide div {
  width: 100%;
  height: 10%;
  background: rgba(87, 81, 81, 0.284);
  display: flex;
  justify-content: center;
  align-items: center;
}
.menu-hide p {
  color: white;
  cursor: pointer;
}
.inccorect {
  font-size: 16px;
  color: blue;
}
.exit {
  width: 50px;
  height: 50px;
  position: absolute;
  right: 10px;
  top: 10px;
}
.burger-checkbox {
  position: absolute;
  visibility: hidden;
}
.burger {
  z-index: 1;
  cursor: pointer;
  display: block;
  position: relative;
  border: none;
  background: transparent;
  width: 50px;
  height: 26px;
}
.burger::before,
.burger::after {
  content: "";
  left: 0;
  position: absolute;
  display: block;
  width: 100%;
  height: 4px;
  border-radius: 10px;
  background: #000;
}
.burger::before {
  top: 0;
  box-shadow: 0 11px 0 #000;
  transition: box-shadow 0.3s 0.15s, top 0.3s 0.15s, transform 0.3s;
}
.burger::after {
  bottom: 0;
  transition: bottom 0.3s 0.15s, transform 0.3s;
}
.burger-checkbox:checked + .burger::before {
  top: 11px;
  transform: rotate(45deg);
  box-shadow: 0 6px 0 rgba(0, 0, 0, 0);
  transition: box-shadow 0.15s, top 0.3s, transform 0.3s 0.15s;
}
.burger-checkbox:checked + .burger::after {
  bottom: 11px;
  transform: rotate(-45deg);
  transition: bottom 0.3s, transform 0.3s 0.15s;
}
.menu-list {
  top: 0;
  left: 0;
  position: absolute;
  display: grid;
  gap: 60px;
  padding: 42px 0;
  margin: 0;
  background: orange;
  list-style-type: none;
  transform: translateX(-100%);
  transition: 0.3s;
  width: 60vw;
}
.menu-item {
  display: block;
  padding: 8px;
  color: white;
  font-size: 18px;
  text-align: center;
  text-decoration: none;
}
.menu-item:hover {
  background: rgba(255, 255, 255, 0.2);
}
.burger-checkbox:checked ~ .menu-list {
  transform: translateX(0);
}
@keyframes slideIn {
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
@media (max-width: 1300px) {
  .div-header-big img {
    width: 600px;
    height: 501px;
  }
}
@media (max-width: 1200px) {
  .div-header-big img {
    width: 500px;
    height: 401px;
  }
  .first-div-header h1 {
    font-size: 60px;
  }
  .button-header-div h2 {
    font-size: 14px;
  }
}
@media (max-width: 950px) {
  .input-placeholder {
    width: 90%;
  }
  .callback h1 {
    font-size: 20px;
  }
  .header-wrapper button {
    width: 140px;
    height: 40px;
    font-size: 12px;
  }
  .header-wrapper img {
    width: 200px;
    height: 52px;
  }
  .div-header-big img {
    width: 400px;
    height: 350px;
  }
  .first-div-header h1 {
    font-size: 50px;
  }
  .button-header-div {
    flex-direction: column;
    align-items: start;
  }
  .header-inner {
    gap: 30px;
  }
  a {
    font-size: 14px;
  }
}
@media (max-width: 750px) {
  .close {
    width: 30px;
    height: 30px;
  }
  .reverse {
    width: 50%;
  }
  .callback button {
    width: 80%;
  }
  .callback h1 {
    font-size: 16px;
  }
  .first-div-header h1 {
    font-size: 40px;
    line-height: 60px;
  }
  .logo {
    display: none;
  }
  a {
    display: none;
  }
  .div-header-big img {
    width: 300px;
    height: 250px;
  }
  .callback {
    width: 50%;
  }
}
@media (max-width: 500px) {
  .callback h1 {
    font-size: 14px;
  }
  .callback {
    width: 75%;
  }
  .reverse {
    width: 75%;
  }
  .button-header-div button {
    width: 250px;
    height: 49px;
  }
  .button-header-div h2 {
    font-size: 16px;
    margin-top: 20px;
  }
  .button-header-div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .div-header-big {
    flex-direction: column;
  }
  .div-header-big img {
    width: 250px;
    height: 250px;
    margin-top: 30px;
  }
  .first-div-header {
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;
  }
  .first-div-header h1 {
    font-size: 32px;
    line-height: 34px;
  }
}
</style>
