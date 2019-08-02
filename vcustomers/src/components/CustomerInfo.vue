<template>
  <div id="customerInfo" class="container">
    <div class="row">
      <router-link class="btn btn-default" to="/" style="text-align: left">返回</router-link>
    </div>
    <h1>内容详细界面</h1>
     <h2 class="page-header">
       <span><i class="glyphicon glyphicon-user"></i> {{customer.name}}</span>
       <span class="pull-right">
         <router-link class="btn btn-primary" v-bind:to=" '/edit/' + customer.id">编辑</router-link>
         <button class="btn btn-danger" v-on:click="deleteCustomer(customer.id)">删除</button>
       </span>

     </h2>
    <ul class="list-group">
        <li class="list-group-item">
          <span class="glyphicon glyphicon-phone"> {{customer.phone}}</span>
        </li>
        <li class="list-group-item">
          <span class="glyphicon glyphicon-envelope"> {{customer.email}}</span>
        </li>
    </ul>

    <ul class="list-group">
      <li class="list-group-item">
        <span class="glyphicon glyphicon-education"> {{customer.education}}</span>
      </li>
      <li class="list-group-item">
        <span class="glyphicon glyphicon-home"> {{customer.school}}</span>
      </li>
      <li class="list-group-item">
        <span class="glyphicon glyphicon-asterisk"> {{customer.profession}}</span>
      </li>
      <li class="list-group-item">
        <span class="glyphicon glyphicon-book"> {{customer.profile}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "customerInfo",
      data(){
          return{
            customer:{}
          }
      },
      methods:{
          //根据用户id查询用户信息
          fetchCustomers(id){
            this.$http.get("http://localhost:3000/users/"+id)
              .then((response) => {
                this.customer=response.data;
              })
          },
        //根据用户id删除用户信息
        deleteCustomer(id){
            //测试，看能否获取到用户id
            //console.log(id);
          this.$http.delete("http://localhost:3000/users/"+id)
            .then((response) =>{
              this.$router.push({path:"/",query:{alert:"用户删除成功！"}});
            })
        }
      },
      created() {
          this.fetchCustomers(this.$route.params.id);
      }
    }
</script>

<style scoped>
  div.row,h2.page-header{
    text-align: left;
    margin-left: 5px;
  }
  ul li{
    text-align: left;
  }
</style>
