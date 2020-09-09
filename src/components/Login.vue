<template>
    <div class="container row">
        <!--登陆块-->
        <div class="login col-md-4">
            <!--logo-->
            <div class="logo">
                <img src="../assets/logo1.png">
            </div>
            <div style="text-align: center; margin-bottom: 30px">
                <b style="font-size: 30px">资产管理平台</b>
            </div>
            <!--表单区域-->
            <el-form ref="loginFormRef" :model="loginForm" class="login_form" label-width="0">
                <!--用户名-->
                <el-form-item>
                    <el-input icon="el-icon-user" prefix-icon="iconfont icon-yonghu"
                              v-model="loginForm.username"></el-input>
                </el-form-item>
                <!--密码                -->
                <el-form-item>
                    <el-input icon="el-icon-edit" prefix-icon="iconfont icon-mima"
                              v-model="loginForm.password"></el-input>
                </el-form-item>
                <!--按钮                -->
                <el-form-item class="btn">
                    <el-button type="primary">提交</el-button>
                    <el-button type="info">重置</el-button>
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
                    username: "username",
                    password: "password"
                }
            }
        }
    }
</script>
<!--scoped是局部作用域的意思，lang使用less语法解析-->
<style lang="less" scoped>
    .container {
        background-color: white;
        width: 100%;
        height: 100%;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }

    .login {
        width: 450px;
        height: 300px;
        border-radius: 3px;
        margin-top: auto;
        position: absolute;
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
            position: absolute;
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