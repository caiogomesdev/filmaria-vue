<template>
  <div id="Header">
      <router-link :to="{name : 'home'}" tag="h1">
          <a>Filmaria</a>
      </router-link>

      <router-link :to="{name: 'salvos'}" tag="button" class="salvos" :active-class="'actived'">
          SALVOS
      </router-link>
  </div>
</template>

<script>
export default {
    name: "Header",
}
</script>

<style scoped>
#Header {
    background-color: brown;
    box-shadow: 0px 1px 5px rgba(0,0,0,.1);
    padding: 15px 0px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    margin-bottom: 20px;
}
a{
    text-decoration: none;
    color: #FFF;
    font-weight: 100;
}
.salvos{
    cursor: pointer;
    padding: 0px 10px;
    border: none;
    border-radius: 3px;
    font-weight: bold;
    height: 25px;
    transition: all ease-in-out .4s;
    background-color: transparent;
    color: #FFF;
}
.actived{
    display: flex;
    align-items: flex-end;
    padding-bottom: 3px;
    box-shadow: none;
}

</style>