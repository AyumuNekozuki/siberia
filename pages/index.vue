<template>
  <div id="top">
    <div class="title">
      <p>ユーザー企画</p>
      <h1><span class="red">超</span>シベリア送り</h1>
      <p>Coming Soon</p>
    </div>
    <footer>
      &copy; 2020-2022 AyumuNekozuki
    </footer>

    <a id="to_2020" href="/2020/">
      <p>2020はこちら</p>
    </a>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
}

body{
  margin: 0;
  padding: 0;
}

#top{
    background: repeating-linear-gradient(90deg, rgba(255, 227, 227, 0.75), rgba(255, 227, 227, 0.75) 1px, transparent 1px, transparent 20px), repeating-linear-gradient(0deg, rgba(255, 227, 227, 0.75), rgba(255, 227, 227, 0.75) 1px, #fff 1px, #fff 20px);
    min-height: 100vh;
    position: relative;

  .title{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    height: calc(100vh - 40px);

    h1{
      font-size: 48px;
      font-weight: 900;
      line-height: 1;
      letter-spacing: 0.1em;
      color: #252525;
      font-family: "M PLUS Rounded 1c",sans-serif;

      .red{
        color: #e73a47;
      }
    }

    p{
      margin: 1rem;
      color: #252525;
      font-family: "M PLUS Rounded 1c",sans-serif;
      font-size: 24px;
    }
  }

  footer{
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    height: 40px;
    width: 100%;
    font-size: 12px;
    background: #e73a47;
    color: white;
  }

  #to_2020{
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    font-family: "M PLUS Rounded 1c",sans-serif;
    font-weight: 600;
    color: #e73a47;
    box-shadow: 0 0 3px #e73a47;
    font-size: 22px;
    margin: 20px;
    padding: 10px 30px;
    background: white;
    text-decoration: none;
    border-radius: 30px;
    transition: box-shadow ease .1s;

    &:hover{
      box-shadow: 0 0 5px #e73a47;
    }
  }
}
</style>