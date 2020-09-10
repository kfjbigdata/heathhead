<template>
    <div>用户列表
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>活动管理</el-breadcrumb-item>
            <el-breadcrumb-item>活动列表</el-breadcrumb-item>
            <el-breadcrumb-item>活动详情</el-breadcrumb-item>
        </el-breadcrumb>
        <!--主体部分        -->
        <el-card>
            <el-row :gutter="20">
                <!--添加搜索        -->
                <el-col :span="15">
                    <el-input placeholder="搜索">
                        <el-button slot="append" icon="el-icon-search" style="width: 5px"></el-button>
                    </el-input>
                </el-col>
                <!--按钮            -->
                <el-col :span="3">
                    <el-button type="primary" @click="add = true" style="width: 90px">添加用户</el-button>
                </el-col>
            </el-row>

            <!--用户列表            -->
            <el-table :data="userList" border stripe style="margin-top: 30px">
                <el-table-column type="index"></el-table-column>
                <el-table-column label="用户名" prop="username"></el-table-column>
                <el-table-column label="密码" prop="password"></el-table-column>
                <el-table-column label="邮箱" prop="email"></el-table-column>
                <el-table-column label="角色" prop="role"></el-table-column>
                <el-table-column label="状态" prop="state">
                    <!-- scope.row 就是当前行的信息 -->
                    <template slot-scope="scope">
                        <el-switch v-model="scope.row.state" @change="userStateChanged(scope.row)"></el-switch>
                    </template>
                </el-table-column>

                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <!-- 修改 -->
                        <el-button type="primary" icon="el-icon-edit" size="mini" @click="showEditDialog(scope.row.id)"></el-button>
                        <!-- 删除 -->
                        <el-button type="danger" icon="el-icon-delete" size="mini" @click="deleteUser(scope.row.id)"></el-button>
                        <!-- 权限 -->
                        <el-tooltip effect="dark" content="分配权限" placement="top-start" :enterable="false">
                            <el-button type="warning" icon="el-icon-setting" size="mini"></el-button>
                        </el-tooltip>
                    </template>
                </el-table-column>
            </el-table>
        </el-card>
    </div>
</template>

<script>
    export default {
        created() {
            this.getUserList();
        },
        data() {
            return {
                //查询信息实体类
                queryInfo: {
                    query: "",//查询信息username
                    pageNum: 1,//当前页
                    pageSize: 5,//每页最大数
                },
                userList: [],//用户列表
                total: 0,//总记录数
            }
        },
        methods: {
            //获取所有用户
            async getUserList() {
                const {data: res} = await this.$http.get("/alluser", {params: this.queryInfo});
                this.userList = res.data;
                this.total = res.number;
                console.log(res);
            }
        }

    }
</script>

<style lang="less" scoped>

</style>