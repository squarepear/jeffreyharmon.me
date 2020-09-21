<template lang="pug">
.dock-container
  .dock
    router-link.home(to="/")
      fa-icon(:icon="['fas', 'home']")
    router-link.about(to="/about")
      fa-icon(:icon="['fas', 'user']")
    a.github(href="https://github.com/SquarePear", target="_blank", rel="noopener")
      fa-icon(:icon="['fab', 'github']")
</template>

<style lang="scss" scoped>
.dock-container {
  display: flex;
  flex-flow: row nowrap;
  align-items: flex-end;
  justify-content: center;

  > .dock {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;
    margin: 1vh;
    background-color: $dock-background;
    border-radius: 20px;

    > a {
      display: flex;
      width: 6vh;
      height: 6vh;
      flex-flow: row nowrap;
      align-items: center;
      justify-content: center;
      margin: 2vh 0.75vh;
      background-color: $app-background;
      border-radius: 15px;
      color: $app-color;
      font-size: 4vh;

      &.home {
        background-color: #f7f7f7;
        color: #ffb833;
      }

      &.about {
        background-color: #963aff;
        color: #e2de00;
      }

      // &.github {
      //   background-color: black;
      //   color: white;
      // }
    }

    > :first-child, > :last-child {
      margin: 2vh;
    }
  }
}
</style>
