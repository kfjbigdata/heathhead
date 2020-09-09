<template>
    <div class="container">
        <!--登陆块-->
        <div class="login">
            <!--logo-->
            <div class="logo">
                <img src="../assets/logo1.png">
            </div>
            <div style="text-align: center; margin-bottom: 30px">
                <b style="font-size: 30px">资产管理平台</b>
            </div>
            <!--表单区域-->
            <el-form ref="loginFormRef" :rules="rules" :model="loginForm" class="login_form" label-width="0">
                <!--用户名-->
                <el-form-item prop="username" >
                    <el-input icon="el-icon-user" prefix-icon="iconfont icon-yonghu"
                              v-model="loginForm.username" placeholder="用户名"></el-input>
                </el-form-item>
                <!--密码                -->
                <el-form-item prop="password">
                    <el-input icon="el-icon-edit" prefix-icon="iconfont icon-mima"
                              v-model="loginForm.password" placeholder="密码"></el-input>
                </el-form-item>
                <!--按钮                -->
                <el-form-item class="btn">
                    <el-button type="primary" @click="login">提交</el-button>
                    <el-button type="info" @click="reset">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<!--export 和export default 的区别在于：export 可以导出多个命名模块
export default 只能导出一个默认模块，这个模块可以匿名-->
<script>
    import 'bootstrap/dist/css/bootstrap.min.css'
    import 'bootstrap/dist/js/bootstrap.min.js'

    export default {
        data() {
            return {
                loginForm: {
                    username: "admin",
                    password: "123456"
                },
                rules: {
                    username:[
                        { required: true, message: '请输入用户名', trigger: 'blur' },
                        { min: 3, max: 12, message: '长度在 5 到 12 个字符', trigger: 'blur' }
                    ],
                    password:[
                        { required: true, message: '请输入密码', trigger: 'blur' },
                        { min: 6, max: 10, message: '长度在 6 到 10 个字符', trigger: 'blur' }
                    ]
                }

            }
        },
        methods: {
            reset(){
                this.$refs.loginFormRef.resetFields();
            },
            login(){
                this.$refs.loginFormRef.validate(async valid =>{
                    if (!valid){
                        return ;
                    };
                    const {data:res} = await this.$http.post("/login", this.loginForm);
                    console.log(res);
                    if ( res.flag == "ok"){
                        this.$message({
                            type:"success",
                            message:"登陆成功",
                            center:true
                        });
                        window.sessionStorage.setItem("user",res.user)
                        await this.$router.push({
                            path: "/home",
                        });
                    }else {
                        this.$message({
                            type:"error",
                            message:"账号或密码错误",
                            center:"true"
                        })
                    }
                })
            }
        }
    }
</script>
<!--scoped是局部作用域的意思，lang使用less语法解析-->
<style lang="less" scoped>
    @media screen and (max-width: 767px) {
        .container {
            background-color: white;
            width: 300px;
            height: 100%;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
        }
    }
    @media screen and (min-width: 768px) {
        .container {
            background-color: white;
            width: 350px;
            height: 100%;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
        }
    }
    @media screen and (min-width: 992px) {
        .container {
            background-color: white;
            width: 380px;
            height: 100%;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
        }
    }
    @media screen and (min-width: 1200px) {
        .container {
            background-color: white;
            width: 350px;
            height: 100%;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
        }
    }

    .login {
        /*width: 450px;*/
        /*height: 300px;*/
        width: 100%;
        border-radius: 3px;
        margin: auto;
        position: relative;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);

        .logo {
            width: 130px;
            height: 130px;
            border: 1px solid #eee;
            border-radius: 50%;
            padding: 10px;
            box-shadow: 0 0 10px #ddd;
            position: relative;
            left: 50%;
            top: -30%;
            transform: translate(-50%, -50%);

            img {
                width: 100%;
                height: 100%;
                border-radius: 50%;
            }
        }

        .btn {
            display: flex;
            justify-content: flex-end;
        }


    }
</style>