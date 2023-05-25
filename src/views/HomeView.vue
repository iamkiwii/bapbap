<template>
  <div class="home-wrapper">
    <div class="buttons-wrapper">
      <RouterLink to="/patchnotes" class="patchnotes button">
        <div class="left-side">
          <div class="btn-text">Patchnotes</div>
          <div class="material-symbols-rounded">description</div>
        </div>
        <div class="right-side">
          <div class="material-symbols-rounded">
            arrow_forward_ios
          </div>
        </div>
      </RouterLink>
      <RouterLink to="/characters" class="builds button">
        <div class="left-side">
          <div class="btn-text">Builds</div>
          <div class="material-symbols-rounded">handyman</div>
        </div>
        <div class="right-side">
          <div class="material-symbols-rounded">
            arrow_forward_ios
          </div>
        </div>
      </RouterLink>
      <RouterLink to="/ranks" class="ranks button">
        <div class="left-side">
          <div class="btn-text">Ranks</div>
          <div class="material-symbols-rounded">star</div>
        </div>
        <div class="right-side">
          <div class="material-symbols-rounded">
            arrow_forward_ios
          </div>
        </div>
      </RouterLink>
    </div>
    <div class="divider"></div>
    <div class="recent-patch">
      <div class="title">RECENT PATCH</div>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.home-wrapper {
  display: flex;
  flex-direction: row;
  height: 100%;

  .buttons-wrapper {
    margin-top: 5vh;
    width: 35%;

    .button {
      transition: 0.2s ease-in-out;
      display: flex;
      transform: skew(-5deg);
      margin-top: 5vh;
      width: 100%;
      height: 25%;
      background-color: #091335;
      cursor: pointer;
      box-shadow: 6px 6px 0px rgba($color: #fed606, $alpha: 1), 12px 12px 20px rgba($color: #000000, $alpha: 0.3);

      .left-side {
        height: 100%;
        width: 70%;
        display: flex;
        flex-direction: column-reverse;
        transform: skew(5deg);


        .btn-text {
          margin-left: 1vw;
          margin-bottom: 1vh;
          text-transform: uppercase;
          align-self: flex-start;
          font-size: 1.8rem;
          color: white;
          margin-top: 2vh;
        }

        .material-symbols-rounded {
          margin-left: 1vw;
          font-size: 5rem;
          color: white;
          margin-bottom: -1vh;
        }
      }

      .right-side {
        height: fit-content;
        align-self: center;
        width: 30%;
        text-align: center;

        .material-symbols-rounded {
          transition: 0.2s ease-in-out;
          color: white;
          font-size: 5rem;
          margin-top: auto;
        }

      }
    }

    .button:hover {
      transition: 0.2s ease-in-out;
      transform: scale(1.048) skew(-5deg);
      box-shadow: 18px 18px 0px rgba($color: #fed606, $alpha: 1), 20px 20px 20px rgba($color: #000000, $alpha: 0.3);

      .right-side {
        .material-symbols-rounded {
          transition: 0.2s ease-in-out;
          transform: translateX(10px);
        }
      }
    }
  }

  .divider {
    width: 10%;
  }

  .recent-patch {
    transform: skew(-5deg);
    margin-top: 10vh;
    width: 35%;
    background-color: #091335;
    cursor: pointer;
    box-shadow: 6px 6px 0px rgba($color: #fed606, $alpha: 1), 12px 12px 20px rgba($color: #000000, $alpha: 0.3);

    .title {
      margin-top: 4%;
      text-align: center;
      color: white;
      font-size: 2.5rem;
    }

  }


}
</style>
