<template>
    <!--container布局-->
    <el-container class="home-container">
        <!--头部-->
        <el-header class="el-header">
            <div>
                <img src="../assets/logo1.png" style="width: 45px;margin-left: 10px; " alt="s">
            </div>
            <span style="margin-top: 25px">
                资产管理平台
                <p style="margin-top: -10px;font-size: 20px;">({{user1}})</p>
            </span>
            <el-button type="info" @click="logout">安全退出</el-button>
        </el-header>

        <el-container>
            <!--侧边栏-->
            <el-aside class="el-aside" :width="iscollapse?'64px':'150px'">
                <el-row>
                    <el-button class="unfold" type="info" @click="toggleCollapase()">|||</el-button>
                </el-row>
                <el-menu background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" unique-opened
                         :collapse=iscollapse :collapse-transition="false" :router="true" :default-active="activePath">
                    <!--一级菜单                    -->
                    <el-submenu :index="item.path" v-for="item in menuList" :key="item.id">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>{{item.title}}</span>
                        </template>

                        <!--二级菜单                            -->
                        <el-menu-item :index="it.path" v-for="it in item.sList" :key="it.id"
                                      @click="saveNavState(it.path)">
                            <template slot="title">
                                <i class="el-icon-location"></i>
                                <span>{{it.title}}</span>
                            </template>
                        </el-menu-item>
                    </el-submenu>
                </el-menu>
            </el-aside>
            <!--主题内容            -->
            <el-main class="el-main">
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
    export default {
        //onload事件
        created() {
            this.getMenuList();
            this.activePath = window.sessionStorage.getItem('activePath');
            this.user1 = window.sessionStorage.getItem('username')
        },

        data() {
            return {
                menuList: [],
                iscollapse: false,
                activePath: '/welcome',
                user1:""
            }
        },

        methods: {
            logout() {
                //清楚session
                window.sessionStorage.clear();
                //回到登录页
                this.$router.push("/login")
            },
            async getMenuList() {
                const {data: res} = await this.$http.get("/findmenu");
                console.log(res);
                if (res.flag !== 200) return this.$message.error("获取列表失败");
                this.menuList = res.menus;
            },
            toggleCollapase() {
                this.iscollapse = !this.iscollapse;
            },
            saveNavState(activePath) {
                window.sessionStorage.setItem("activePath", activePath);
                this.activePath = activePath;
            },
        },

    }
</script>

<style lang="less" scoped>

    .unfold {
        width: 100%;
    }

    .home-container {
        background-color: white;
        width: 100%;
        height: 100%;
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

        .el-menu {
            border-right: none;;
        }
    }

    .el-main {
        background-color: #eaedf1;

    }
</style>