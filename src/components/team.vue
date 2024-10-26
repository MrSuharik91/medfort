<template>
  <div class="team-wrapper">
    <h1>КОМАНДА</h1>
    <div class="people">
      <div>
        <img src="/kate.png" alt="" />
        <h2>КАТЯ ЕЛИСЕЕВА</h2>
        <p>
          Креативный директор.
          <br />
          Придумывает идеи и создает
          <br />
          основную коммуникацию в
          <br />
          команде.
        </p>
      </div>
      <div>
        <img src="/petr.png" alt="" />
        <h2>ПЕТР ОСИПОВ</h2>
        <p>
          Креативный директор.
          <br />
          Придумывает идеи и создает
          <br />
          основную коммуникацию в
          <br />
          команде.
        </p>
      </div>
      <div>
        <img src="/igor.png" alt="" />
        <h2>ИГОРЬ КОРНЕЕВ</h2>
        <p>
          Креативный директор.
          <br />
          Придумывает идеи и создает
          <br />
          основную коммуникацию в
          <br />
          команде.
        </p>
      </div>
      <div>
        <img src="/david.png" alt="" />
        <h2>ДАВИД ОКОПЯН</h2>
        <p>
          Креативный директор.
          <br />
          Придумывает идеи и создает
          <br />
          основную коммуникацию в
          <br />
          команде.
        </p>
      </div>
    </div>
  </div>
</template>
<style>
.team-wrapper {
  text-align: center;
  margin-bottom: 130px;
}
.team-wrapper h1 {
  font-size: 50px;
  font-weight: 700;
  line-height: 53px;
  color: #0094ff;
  margin-bottom: 75px;
}
.people {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 100px;
  width: 90%;
  margin: 0 auto;
}
.people div {
  height: 415px;
}
.people div h2 {
  color: #008bf5;
  margin-top: 55px;
  margin-bottom: 25px;
  text-align: left;
}
.people div p {
  color: #24272c;
  font-size: 16px;
  font-weight: 500;
  line-height: 18.2px;
  text-align: left;
}
@media (max-width: 1400px) {
  .people {
    gap: 60px;
  }
}
@media (max-width: 1300px) {
  .people img {
    width: 200px;
  }
  .people div p {
    font-size: 14px;
  }
  .people div h2 {
    font-size: 16px;
  }
}
@media (max-width: 1100px) {
  .people {
    grid-template-columns: 1fr 1fr;
  }
  .people div {
    height: 415px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .people img {
    width: 250px;
  }
  .people div p {
    font-size: 20px;
  }
  .people div h2 {
    font-size: 22px;
  }
}
@media (max-width: 600px) {
  .people {
    grid-template-columns: 1fr;
  }
  .people {
    gap: 100px;
  }
}
</style>
