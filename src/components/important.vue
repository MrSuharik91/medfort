<template>
  <div class="wrapper-important">
    <div class="line"></div>
    <button>ЧТО ВАЖНО В ВИДЕО</button>
    <div class="line"></div>
  </div>
</template>
<style scoped>
.line {
  background: #008bf5;
  width: 30%;
  height: 1px;
}
.wrapper-important {
  margin-top: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 110px;
}
.wrapper-important button {
  width: 40%;
  cursor: pointer;
  font-size: 35px;
  font-weight: 700;
  line-height: 37.1px;
  border: none;
  height: 74px;
  border-radius: 50px;
  background: #008bf5;
  color: #ffffff;
}
@media (max-width: 800px) {
  .wrapper-important button {
    font-size: 26px;
  }
}
@media (max-width: 600px) {
  .wrapper-important button {
    font-size: 20px;
  }
}
@media (max-width: 500px) {
  .wrapper-important button {
    font-size: 16px;
    line-height: 24px;
  }
}
</style>
