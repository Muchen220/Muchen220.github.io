<template>
  <div id="alert" class="container">
    <!--警告框1-->
    <div class="alert alert-warning alert-dismissible" role="alert">
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
      {{message}}
    </div>

  </div>
</template>

<script>
  export default {
    name: "alert",
    //动态地绑定父组件的数据到子组件模板的 props
    props:["message"],
    data(){
      return{

      }
    }
  }
</script>

<style scoped>

</style>
