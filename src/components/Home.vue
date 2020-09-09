<template>
    <!--container布局-->
    <el-container class="home-container">
        <!--头部-->
        <el-header class="el-header">
            <div>
                <img src="../assets/logo.png" style="width: 55px">
            </div>
            <span>资产管理平台</span>
            <el-button type="info" @click="logout">安全退出</el-button>
        </el-header>
        <!--主体-->
        <el-container>
            <!--侧边栏-->
            <el-aside width="150px" class="el-aside">
                <el-menu background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
                    <!--一级菜单                    -->
                    <el-submenu index="1">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>导航一</span>
                        </template>

                        <!--二级菜单                            -->
                        <el-menu-item index="1-1">
                            <template slot="title">
                                <i class="el-icon-location"></i>
                                <span>111</span>
                            </template>
                        </el-menu-item>
                    </el-submenu>
                </el-menu>
            </el-aside>
            <!--主题内容            -->
            <el-main class="el-main">Main</el-main>
        </el-container>
    </el-container>
</template>

<script>
    export default {
        data(){
          return{
              menuList:[

              ],
          }
        },
        methods: {
            logout() {
                //清楚session
                window.sessionStorage.clear();
                //回到登录页
                this.$router.push("/login")
            },
            getMenuList(){
                console.log("huoqu");
            }
        },
        //onload事件
        created() {
            this.getMenuList();
        }
    }
</script>

<style lang="less" scoped>
    @media screen and (max-width: 767px) {
        .home-container {
            background-color: white;
            width: 100%;
            height: 100%;
        }
    }

    @media screen and (min-width: 768px) {
        .home-container {
            background-color: white;
            width: 100%;
            height: 100%;
        }
    }

    @media screen and (min-width: 992px) {
        .home-container {
            background-color: white;
            width: 100%;
            height: 100%;
        }
    }

    @media screen and (min-width: 1200px) {
        .home-container {
            background-color: white;
            width: 100%;
            height: 100%;
        }
    }

    .el-header {
        background-color: #373d41;
        display: flex;
        justify-content: space-between;
        padding-left: 0px;
        color: white;
        font-size: 20px;
        text-align: center;
        align-items: center;

        div {
            img {
                border-radius: 20%;
            }
        }
    }

    .el-aside {
        background-color: #333744;
    }

    .el-main {
        /*background-color: #eaedf1;*/
        background-color: white;
    }
</style>