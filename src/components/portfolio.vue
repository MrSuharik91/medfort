<template>
  <div class="wrapper-portfolio">
    <div class="line"></div>
    <button>ПРОЦЕСС НАШЕЙ РАБОТЫ</button>
    <div class="line"></div>
  </div>
</template>
<style scoped>
.line {
  background: #008bf5;
  width: 30%;
  height: 1px;
}
.wrapper-portfolio {
  margin-top: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 110px;
}
.wrapper-portfolio button {
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
@media (max-width: 1200px) {
  .wrapper-portfolio button {
    font-size: 24px;
  }
}
@media (max-width: 850px) {
  .wrapper-portfolio button {
    font-size: 20px;
  }
}
@media (max-width: 700px) {
  .wrapper-portfolio button {
    font-size: 16px;
    line-height: 30px;
  }
}
@media (max-width: 700px) {
  .wrapper-portfolio button {
    font-size: 13px;
    line-height: 20px;
  }
}
</style>
