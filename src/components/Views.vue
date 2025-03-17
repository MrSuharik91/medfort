<template>
  <div class="views">
    <h1 class="views-h1">
      Каким бывает контент
      <br />
      и почему видео
      <br />
      Быстро приводит
      <br />
      клиентов
    </h1>
    <div class="grid-views">
      <div>
        <img src="/hero.png" alt="" />
        <span>
          <h1>
            Имиджевые
            <br />
            видео
          </h1>
          <p>
            Этот контент это ответ на
            <br />
            вопрос
            <br />
            «Как мы (как бренд) собираемся
            <br />
            помочь нашим потребителям
            <br />
            найти то, что они ищут?»
            <br />
            <br />
            Бренды не должны огульно
            <br />
            выпускать видео просто потому,
            <br />
            что их целевая аудитория чем-то
            <br />
            интересуется.
          </p>
        </span>

        <h2 class="hero">
          Hero - редко и дорого
          <br />
          <br />
        </h2>
      </div>
      <div>
        <img class="hub" src="/hub.png" alt="" />
        <span class="views-span-1">
          <h1>
            Эпизодический
            <br />
            контент для
            <br />
            взаимодействия
            <br />
            с сообществом
          </h1>
          <p>
            Этот контент это ответ на
            <br />
            вопрос
            <br />
            «Как мы (как бренд) собираемся
            <br />
            помочь нашим потребителям
            <br />
            найти то, что они ищут?»
            <br />
            <br />
            Бренды не должны огульно
            <br />
            выпускать видео просто потому,
            <br />
            что их целевая аудитория чем-то
            <br />
            интересуется. Вместо этого HELP
            <br />
            контент должен создаваться на
            <br />
            пересечении экспертизы бренда и
            <br />
            популярных поисковых запросах.
          </p>
        </span>
        <h2 class="hub">
          Hub - основной фокус
          <br />
          бренда
        </h2>
      </div>
      <div>
        <img class="help" src="/help.png" alt="" />
        <span class="views-span-2">
          <h1>
            Справочный контент,
            <br />
            содержащий
            <br />
            информацию о
            <br />
            бренде по
            <br />
            популярным
            <br />
            поисковым
            <br />
            запросам.
          </h1>
          <p>
            Этот контент это ответ на
            <br />
            вопрос
            <br />
            «Как мы (как бренд) собираемся
            <br />
            помочь нашим потребителям
            <br />
            найти то, что они ищут?»
            <br />
            <br />
            Бренды не должны огульно
            <br />
            выпускать видео просто потому,
            <br />
            что их целевая аудитория чем-то
            <br />
            интересуется. Вместо этого HELP
            <br />
            контент должен создаваться на
            <br />
            пересечении экспертизы бренда и
            <br />
            популярных поисковых запросах.
          </p>
        </span>
        <h2 class="help">
          Help - часто на основе
          <br />
          трендов бренда
        </h2>
      </div>
    </div>
  </div>
</template>
<style scoped>
.views-h1 {
  font-size: 45px;
  font-weight: 700;
  line-height: 53.55px;
  text-align: center;
  margin-top: 110px;
  color: #0094ff;
}
.views {
  width: 90%;
  margin: 0 auto;
}
.grid-views {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 25px;
  justify-content: center;
  align-items: center;
}
.grid-views div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
span {
  border-radius: 65px;
  padding-bottom: 45px;
  padding-top: 30px;
  padding-left: 40px;
  background: #0094ff;
  width: 100%;
}
span h1 {
  color: white;
  font-weight: 700;
  line-height: 32.5px;
}
span p {
  font-size: 18px;
  font-weight: 500;
  line-height: 23.4px;
  color: white;
  margin-top: 10px;
}
.views-span-1 {
  background: #05c3dd;
  margin-top: 50px;
}
.views-span-1 p {
  margin-top: 30px;
}
.views-span-2 {
  background: #ff6231;
  margin-top: 20px;
}
.views-span-2 p {
  margin-top: 30px;
}
.grid-views div h2 {
  font-size: 25px;
  font-weight: 700;
  line-height: 26px;
  margin: 36px;
}
.hero {
  color: #0094ff;
}
.hub {
  color: #05c3dd;
}
.help {
  color: #ff6231;
}
@media (max-width: 1200px) {
  span h1 {
    font-size: 26px;
  }
  .grid-views div h2 {
    font-size: 22px;
  }
}
@media (max-width: 1000px) {
  span h1 {
    font-size: 22px;
    line-height: 28px;
  }
  span p {
    font-size: 14px;
  }
  .grid-views div h2 {
    font-size: 18px;
    white-space: nowrap;
  }
  .help {
    width: 200px;
  }
  .hub {
    width: 180px;
  }
}
@media (max-width: 850px) {
  .grid-views div h2 {
    font-size: 16px;
    white-space: nowrap;
  }
  span h1 {
    font-size: 20px;
    line-height: 28px;
  }
  span p {
    font-size: 14px;
  }
  span {
    padding-left: 30px;
  }
  .views {
    width: 95%;
  }
}
@media (max-width: 750px) {
  .grid-views {
    gap: 15px;
  }
  br {
    display: none;
  }
  span p {
    white-space: wrap;
    padding-right: 10px;
  }
  .grid-views div {
    padding-right: 10px;
  }
  .help {
    width: 170px;
  }
  .hub {
    width: 140px;
  }
}
@media (max-width: 600px) {
  .grid-views {
    grid-template-columns: 1fr;
    gap: 35px;
  }
  br {
    display: block;
  }
  span {
    width: 60%;
  }
  .grid-views div h2 {
    font-size: 24px;
    white-space: nowrap;
  }
  span h1 {
    font-size: 24px;
    line-height: 28px;
  }
  span p {
    font-size: 16px;
  }

  .help {
    width: 270px;
  }
  .hub {
    width: 240px;
  }
  .views-h1 {
    margin-bottom: 100px;
  }
}
@media (max-width: 500px) {
  .views-h1 {
    font-size: 38px;
    line-height: 45px;
  }
  .views {
    width: 90%;
  }
  span {
    width: 100%;
    box-sizing: border-box;
  }
  .grid-views div {
    padding-right: 0;
  }
}
</style>
