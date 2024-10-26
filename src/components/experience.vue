<template>
  <div class="bg">
    <h1>
      МЫ ПРОФЕССИОНАЛЬНЫЙ
      <br />
      ВИДЕОПРОДАКШН
      <br />
      C 20ЛЕТНИМ СТАЖЕМ
      <br />
      В НИШЕ МЕДИЦИНСКОГО
      <br />
      ВИДЕОМАРКЕТИНГА
    </h1>
  </div>
</template>
<style>
.bg {
  background-image: url(/public/bg-foto.png);
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 840px;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
}
.bg h1 {
  font-size: 64px;
  font-weight: 700;
  line-height: 71.36px;
  text-align: center;
  color: white;
}
@media (max-width: 1200px) {
  .bg {
    background-size: contain;
  }
}
@media (max-width: 1100px) {
  .bg h1 {
    font-size: 54px;
  }
}
@media (max-width: 900px) {
  .bg h1 {
    font-size: 44px;
    line-height: 50px;
  }
}
@media (max-width: 650px) {
  .bg h1 {
    font-size: 34px;
    line-height: 40px;
  }
}
@media (max-width: 500px) {
  .bg h1 {
    font-size: 26px;
    line-height: 38px;
  }
}
</style>
