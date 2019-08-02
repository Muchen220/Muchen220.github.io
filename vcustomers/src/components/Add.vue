<template>
  <div id="add">
    <div class="container">
      <div class="row">
        <router-link class="btn btn-default" to="/" style="text-align: left">返回</router-link>
      </div>
      <Alert v-if="alert" v-bind:message="alert"></Alert>
      <h2 class="page-header">添加用户</h2>
      <form v-on:submit="addCustomer">
        <div class="well">
          <h4>用户信息</h4>
          <div class="form-group">
            <label>姓名</label>
            <input type="text" class="form-control" placeholder="name" v-model="customer.name">
          </div>
          <div class="form-group">
            <label>电话</label>
            <input type="text" class="form-control" placeholder="phone" v-model="customer.phone">
          </div>
          <div class="form-group">
            <label>邮箱</label>
            <input type="text" class="form-control" placeholder="email" v-model="customer.email">
          </div>
          <div class="form-group">
            <label>学历</label>
            <input type="text" class="form-control" placeholder="education" v-model="customer.education">
          </div>
          <div class="form-group">
            <label>毕业学校</label>
            <input type="text" class="form-control" placeholder="school" v-model="customer.school">
          </div>
          <div class="form-group">
            <label>职业</label>
            <input type="text" class="form-control" placeholder="profession" v-model="customer.profession">
          </div>
          <div class="form-group">
            <label>个人简介</label>
            <textarea class="form-control" rows="10" placeholder="profile" v-model="customer.profile">

            </textarea>
          </div>
          <button type="submit" class="btn btn-info">提交</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  import Alert from './Alert'
  export default {
    name: "add",
    //注册声明组件
    components: {Alert},
    data(){
      return {
        //创建customer这个对象
        customer:{},
        alert:''
      }
    },

    methods:{
      // //提交方法
      addCustomer(e){
          // 测试
          // console.log(123);
          //要求用户名/电话/邮箱不能为空
          if(!this.customer.name || !this.customer.phone || !this.customer.email){
            // console.log("请添加对应的内容！");
            this.alert="必填项不能为空，请添加对应内容！";
          }else{
            let newCustomer={
              name:this.customer.name,
              phone:this.customer.phone,
              email:this.customer.email,
              education:this.customer.education,
              school:this.customer.school,
              profession:this.customer.profession,
              profile:this.customer.profile
            }
            //使用post将值传递进去
            this.$http.post("http://localhost:3000/users",newCustomer)
              .then((response) =>{
                //测试能否成功显示数据
                // console.log(response);
                //添加成功了之后，就让它跳转到主页面中  query:{}  传递的是一个对象
                this.$router.push({path:'/',query:{alert:"用户信息添加成功!"}});
              })
            //preventDefault() 方法阻止元素发生默认的行为（例如，当点击提交按钮时阻止对表单的提交）。
            e.preventDefault();
          }
          e.preventDefault();
      }
    }
  }
</script>

<style scoped>
  div.row{
    text-align: left;
    margin-left: 5px;
  }
  form{
    text-align: left;
  }
</style>
