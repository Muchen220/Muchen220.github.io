<template>
    <div id="customers">
      <!--弹窗有内容显示，没内容隐藏-->
      <alert v-if="alert" v-bind:message="alert"></alert>
      <div class="container">
        <h1 class="page-header">用户管理系统</h1>
        <!--搜索框-->
        <input type="text" class="form-control" placeholder="搜索" v-model="filterInput">
        <br>

        <table class="table table-striped">
          <thead>
            <tr>
              <th>姓名</th>
              <th>电话</th>
              <th>邮箱</th>
              <th>用户ID</th>
              <th>查看详情</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="customer in filterBy(customers,filterInput)" style="text-align: left">
              <td>{{customer.name}}</td>
              <td>{{customer.phone}}</td>
              <td>{{customer.email}}</td>
              <td>{{customer.id}}</td>
              <td><router-link class="btn btn-info" v-bind:to=" '/customerInfo/'+customer.id ">详情</router-link></td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
</template>

<script>
  //引入弹窗组件Alert
  import Alert from './Alert'
    export default {
        name: "customers",
        data(){
          return {
            customers:[],
            alert:'',
            filterInput:''
          }
        },
        methods:{
          fetchCustomers(){
            this.$http.get("http://localhost:3000/users")
              .then((response) =>{
                //打印测试看是否能够成功拿到数据
                // console.log(response);
                //将请求中body里面的数据赋值给数组customers
                //axios使用的时候es6语法，使用function的话，下面的this已经找不到了，所以我们需要改为箭头函数
                // this.customers=response.body
                this.customers=response.data;
              })
          },
          filterBy(customers,value){
            return customers.filter(function (customer) {
              return customer.name.match(value);
            })
          }
        },
      //创建前调用函数
      created() {
          //判断是否能够获取的query对象的属性  有的话就给就给值赋予它
          if(this.$route.query.alert){
            this.alert=this.$route.query.alert;
          }
          this.fetchCustomers();
      },
      //数据更新时执行方法
      updated() {

      },
      //注册声明组件
      components:{
        'alert':Alert
      }
    }
</script>

<style scoped>
  h1{
    text-align: left;
  }

</style>
