<!-- 编辑代理商 -->
<template>
    <div class="advertisingDetail" id="advertisingDetail">
        <h3 class="detail-title">广告发布
            <el-button class="fr back" type="primary" @click="save">保存</el-button>
            <el-button class="fr back" @click="closePage">关闭</el-button>
        </h3>
        <el-form ref="form" class="form" :model="form">
            <el-form-item label="广告标题：" label-width="100px" prop="region" :rules="$validate({required:true})" >
                <el-input type="text" v-model="form.cityConfigVtamsDomain"></el-input>
            </el-form-item>
            <el-form-item label="广告发布平台：" prop="type" :rules="$validate({required:true})">
                <el-checkbox-group v-model="form.list">
                    <el-checkbox label="超级骊-Web" name="type"></el-checkbox>
                    <el-checkbox label="运输企业-Web" name="type"></el-checkbox>
                    <el-checkbox label="检测企业-Web" name="type"></el-checkbox>
                    <el-checkbox label="超级骊-App" name="type"></el-checkbox>
                    <el-checkbox label="金车汇-App" name="type"></el-checkbox>
                </el-checkbox-group>
            </el-form-item>
            <el-form-item label="投放地区：" prop="list" label-width="100px" :rules="$validate({required:true})">
                <a-tree-select
                    :treeData="allCityList"
                    :value="treeValue"
                    @change="onChange"
                    treeCheckable
                    :showCheckedStrategy="SHOW_PARENT"
                    searchPlaceholder="Please select"
                />
            </el-form-item>
            <el-form-item prop="list" :rules="$validate({required:false})">
                <div>
                    <span> <i class="red">*</i> 指定企业：</span>
                    <span style="margin-left:610px;">已选企业：</span>
                </div>
                <div class="selelct_wrap">
                    <div class="select_header">
                        <span class="select_count">12/133项</span>
                        <el-tabs v-model="activeName1" @tab-click="handleClick">
                            <el-tab-pane label="维修企业" name="tab1"></el-tab-pane>
                            <el-tab-pane label="运输企业" name="tab2"></el-tab-pane>
                            <el-tab-pane label="检测企业" name="tab3"></el-tab-pane>
                        </el-tabs>
                    </div>
                    <div class="select_search">
                        <el-input placeholder="请输入内容" v-model="selectIptValue1" class="select_ipt">
                            <el-button slot="append" icon="el-icon-search"></el-button>
                        </el-input>
                        <el-checkbox-group v-model="selectCheckValue1" class="select_check">
                            <el-checkbox label="一类" name="1"></el-checkbox>
                            <el-checkbox label="二类" name="2"></el-checkbox>
                            <el-checkbox label="三类" name="3"></el-checkbox>
                        </el-checkbox-group>
                        <el-button icon="el-icon-plus" size="small" class="select_btn">选择主修品牌</el-button>
                    </div>
                    <div class="select_table">
                        <el-table
                        border
                        :data="selectTableData1"
                        v-loading="loading"
                        class="tableBorder"
                        @selection-change="handleSelectionChange1"
                        height="300"
                        style="width: 100%;">
                            <el-table-column
                            type="selection"
                            width="55">
                            </el-table-column>
                            <el-table-column
                            prop="num"
                            align="left"
                            label="经营类别"
                            min-width="10%">
                            </el-table-column>
                            <el-table-column
                            prop="num"
                            align="left"
                            label="企业名称"
                            min-width="30%">
                            </el-table-column>
                            <el-table-column
                            prop="num"
                            align="left"
                            label="主修品牌"
                            min-width="20%">
                            </el-table-column>
                        </el-table>
                        <div class="pagination clearfix">
                            <el-pagination
                                style="float:right"
                                @size-change="handleSizeChange1"
                                @current-change="handleCurrentChange1"
                                :current-page="pageNum1"
                                :page-sizes="[10, 20, 30, 40, 50, 100]"
                                :page-size="pageSize1"
                                layout="total, sizes, prev, pager, next, jumper"
                                :total="total1">
                            </el-pagination>
                        </div>
                    </div>
                </div>
                <div class="cross_div">
                    <i class="el-icon-caret-right crossIcon active"></i>
                    <br>
                    <i class="el-icon-caret-left crossIcon"></i>
                </div>
                <div class="selelct_wrap small_wrap">
                    <div class="select_header">
                        <span class="select_count">12/133项</span>
                        <el-tabs v-model="activeName1" @tab-click="handleClick">
                            <el-tab-pane label="维修企业" name="tab1"></el-tab-pane>
                            <el-tab-pane label="运输企业" name="tab2"></el-tab-pane>
                            <el-tab-pane label="检测企业" name="tab3"></el-tab-pane>
                        </el-tabs>
                    </div>
                    <div class="select_search">
                        <el-input placeholder="请输入内容" v-model="selectIptValue1" class="select_ipt">
                            <el-button slot="append" icon="el-icon-search"></el-button>
                        </el-input>
                        <!-- <el-checkbox-group v-model="selectCheckValue1" class="select_check">
                            <el-checkbox label="一类" name="1"></el-checkbox>
                            <el-checkbox label="二类" name="2"></el-checkbox>
                            <el-checkbox label="三类" name="3"></el-checkbox>
                        </el-checkbox-group> -->
                        <!-- <el-button icon="el-icon-plus" size="small" class="select_btn">选择主修企业</el-button> -->
                    </div>
                    <div class="select_table">
                        <el-table
                        border
                        :data="selectTableData1"
                        v-loading="loading"
                        class="tableBorder"
                        @selection-change="handleSelectionChange1"
                        height="300"
                        style="width: 100%;">
                            <el-table-column
                            type="selection"
                            width="55">
                            </el-table-column>
                            <el-table-column
                            prop="num"
                            align="left"
                            label="经营类别"
                            min-width="12%">
                            </el-table-column>
                            <el-table-column
                            prop="num"
                            align="left"
                            label="企业名称"
                            min-width="30%">
                            </el-table-column>
                            <el-table-column
                            prop="num"
                            align="left"
                            label="主修品牌"
                            min-width="20%">
                            </el-table-column>
                        </el-table>
                        <div class="pagination clearfix">
                            <el-pagination
                                style="float:right"
                                @size-change="handleSizeChange1"
                                @current-change="handleCurrentChange1"
                                :current-page="pageNum1"
                                :page-sizes="[10, 20, 30, 40, 50, 100]"
                                :page-size="pageSize1"
                                layout="total, sizes, prev, pager, next, jumper"
                                :total="total1">
                            </el-pagination>
                        </div>
                    </div>
                </div>
            </el-form-item>
            <el-form-item prop="list" :rules="$validate({required:false})">
                <div>
                    <span> <i class="red">*</i> 指定车主：</span>
                    <span style="margin-left:610px;">已选车主：</span>
                </div>
                <div class="selelct_wrap">
                    <div class="select_header">
                        <span class="select_count">12/133项</span>
                    </div>
                    <div class="select_search">
                        <el-input placeholder="请输入内容" v-model="selectIptValue1" class="select_ipt" style="width:460px;">
                            <el-button slot="append" icon="el-icon-search"></el-button>
                        </el-input>
                        <el-button icon="el-icon-plus" size="small" class="select_btn" style="vertical-align:top;">选择汽车品牌</el-button>
                    </div>
                    <div class="select_table">
                        <el-table
                        border
                        :data="selectTableData1"
                        v-loading="loading"
                        class="tableBorder"
                        @selection-change="handleSelectionChange1"
                        height="300"
                        style="width: 100%;">
                            <el-table-column
                            type="selection"
                            width="55">
                            </el-table-column>
                            <el-table-column
                            prop="num"
                            align="left"
                            label="经营类别"
                            min-width="10%">
                            </el-table-column>
                            <el-table-column
                            prop="num"
                            align="left"
                            label="企业名称"
                            min-width="30%">
                            </el-table-column>
                            <el-table-column
                            prop="num"
                            align="left"
                            label="主修品牌"
                            min-width="20%">
                            </el-table-column>
                        </el-table>
                        <div class="pagination clearfix">
                            <el-pagination
                                style="float:right"
                                @size-change="handleSizeChange1"
                                @current-change="handleCurrentChange1"
                                :current-page="pageNum1"
                                :page-sizes="[10, 20, 30, 40, 50, 100]"
                                :page-size="pageSize1"
                                layout="total, sizes, prev, pager, next, jumper"
                                :total="total1">
                            </el-pagination>
                        </div>
                    </div>
                </div>
                <div class="cross_div">
                    <i class="el-icon-caret-right crossIcon active"></i>
                    <br>
                    <i class="el-icon-caret-left crossIcon"></i>
                </div>
                <div class="selelct_wrap small_wrap">
                    <div class="select_header">
                        <span class="select_count">12/133项</span>
                    </div>
                    <div class="select_search">
                        <el-input placeholder="请输入内容" v-model="selectIptValue1" class="select_ipt">
                            <el-button slot="append" icon="el-icon-search"></el-button>
                        </el-input>
                    </div>
                    <div class="select_table">
                        <el-table
                        border
                        :data="selectTableData1"
                        v-loading="loading"
                        class="tableBorder"
                        @selection-change="handleSelectionChange1"
                        height="300"
                        style="width: 100%;">
                            <el-table-column
                            type="selection"
                            width="55">
                            </el-table-column>
                            <el-table-column
                            prop="num"
                            align="left"
                            label="经营类别"
                            min-width="12%">
                            </el-table-column>
                            <el-table-column
                            prop="num"
                            align="left"
                            label="企业名称"
                            min-width="30%">
                            </el-table-column>
                            <el-table-column
                            prop="num"
                            align="left"
                            label="主修品牌"
                            min-width="20%">
                            </el-table-column>
                        </el-table>
                        <div class="pagination clearfix">
                            <el-pagination
                                style="float:right"
                                @size-change="handleSizeChange1"
                                @current-change="handleCurrentChange1"
                                :current-page="pageNum1"
                                :page-sizes="[10, 20, 30, 40, 50, 100]"
                                :page-size="pageSize1"
                                layout="total, sizes, prev, pager, next, jumper"
                                :total="total1">
                            </el-pagination>
                        </div>
                    </div>
                </div>
            </el-form-item>
            <div class="sub_title">
                广告类型
                &nbsp;&nbsp;
                <el-checkbox v-model="checked">Banner广告</el-checkbox>
            </div>
            <el-row>
                <el-col :span="8">
                    <el-form-item label="投放开始时间：" label-width="130px" prop="region" :rules="$validate({required:true})" >
                        <el-date-picker
                        v-model="form.a"
                        type="datetime"
                        placeholder="请选择开始时间">
                        </el-date-picker>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="投放结束时间：" label-width="130px" prop="region" :rules="$validate({required:true})" >
                        <el-date-picker
                        v-model="form.a"
                        type="datetime"
                        placeholder="请选择结束时间">
                        </el-date-picker>
                    </el-form-item>
                </el-col>
                <el-col :span="24" class="sub_label" style="margin-top:28px;">
                    <i class="red">*</i>
                    上传Banner图片&nbsp;<span style="color:#999999;">(支持jpg/png格式，小于5M)</span>
                </el-col>
                <!-- 超级里web -->
                <el-col :span="8" class="img_item">
                    <div class="img_header">
                        <label for="">轮播位置</label>
                        <el-select v-model="form.value" placeholder="请选择">
                            <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                        <el-radio v-model="form.radio" label="1">随机</el-radio>
                    </div>
                    <el-upload
                        class="avatar-uploader"
                        :action="uploadUrl + 'attachment/file/upload'"
                        :show-file-list="false"
                        :on-success="handleAvatarSuccess"
                        :before-upload="beforeAvatarUpload">
                        <img v-if="form.imageUrl" :src="form.imageUrl" class="avatar">
                        <i v-if="!form.imageUrl" class="el-icon-plus avatar-uploader-icon"></i>
                        <p class="color9 mb1" v-if="!form.imageUrl">建议尺寸：320 * 180 px</p>
                    </el-upload>
                    <p class="img_dec">超级骊-web</p>
                </el-col>
                <!-- 运输企业 -->
                <el-col :span="8" class="img_item">
                    <div class="img_header">
                        <label for="">轮播位置</label>
                        <el-select v-model="form.value" placeholder="请选择">
                            <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                        <el-radio v-model="form.radio" label="1">随机</el-radio>
                    </div>
                    <el-upload
                        class="avatar-uploader"
                        :action="uploadUrl + 'attachment/file/upload'"
                        :show-file-list="false"
                        :on-success="handleAvatarSuccess"
                        :before-upload="beforeAvatarUpload">
                        <img v-if="form.imageUrl" :src="form.imageUrl" class="avatar">
                        <i v-if="!form.imageUrl" class="el-icon-plus avatar-uploader-icon"></i>
                        <p class="color9 mb1" v-if="!form.imageUrl">建议尺寸：1600 * 430 px</p>
                    </el-upload>
                    <p class="img_dec">运输企业-web</p>
                </el-col>
                <!-- 检测企业 -->
                <el-col :span="8" class="img_item">
                    <div class="img_header">
                        <label for="">轮播位置</label>
                        <el-select v-model="form.value" placeholder="请选择">
                            <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                        <el-radio v-model="form.radio" label="1">随机</el-radio>
                    </div>
                    <el-upload
                        class="avatar-uploader"
                        :action="uploadUrl + 'attachment/file/upload'"
                        :show-file-list="false"
                        :on-success="handleAvatarSuccess"
                        :before-upload="beforeAvatarUpload">
                        <img v-if="form.imageUrl" :src="form.imageUrl" class="avatar">
                        <i v-if="!form.imageUrl" class="el-icon-plus avatar-uploader-icon"></i>
                        <p class="color9 mb1" v-if="!form.imageUrl">建议尺寸：1630 * 340 px</p>
                    </el-upload>
                    <p class="img_dec">检测企业-web</p>
                </el-col>
                <!-- 金车会 -->
                <el-col :span="8" class="img_item">
                    <div class="img_header">
                        <label for="">轮播位置</label>
                        <el-select v-model="form.value" placeholder="请选择">
                            <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                        <el-radio v-model="form.radio" label="1">随机</el-radio>
                    </div>
                    <el-upload
                        class="avatar-uploader"
                        :action="uploadUrl + 'attachment/file/upload'"
                        :show-file-list="false"
                        :on-success="handleAvatarSuccess"
                        :before-upload="beforeAvatarUpload">
                        <img v-if="form.imageUrl" :src="form.imageUrl" class="avatar">
                        <i v-if="!form.imageUrl" class="el-icon-plus avatar-uploader-icon"></i>
                        <p class="color9 mb1" v-if="!form.imageUrl">建议尺寸：1080 * 690 px</p>
                    </el-upload>
                    <p class="img_dec">金车汇-APP</p>
                </el-col>
                <!-- 超级里app -->
                <el-col :span="8" class="img_item">
                    <div class="img_header">
                        <label for="">轮播位置</label>
                        <el-select v-model="form.value" placeholder="请选择">
                            <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                        <el-radio v-model="form.radio" label="1">随机</el-radio>
                    </div>
                    <el-upload
                        class="avatar-uploader"
                        :action="uploadUrl + 'attachment/file/upload'"
                        :show-file-list="false"
                        :on-success="handleAvatarSuccess"
                        :before-upload="beforeAvatarUpload">
                        <img v-if="form.imageUrl" :src="form.imageUrl" class="avatar">
                        <i v-if="!form.imageUrl" class="el-icon-plus avatar-uploader-icon"></i>
                        <p class="color9 mb1" v-if="!form.imageUrl">建议尺寸：1080 * 690 px</p>
                    </el-upload>
                    <p class="img_dec">超级骊-APP</p>
                </el-col>
            </el-row>
            <div class="sub_title" style="margin-top:20px;">
                广告类型
                &nbsp;&nbsp;
                <el-checkbox v-model="checked">弹窗广告</el-checkbox>
            </div>
            <el-row>
                <el-col :span="8">
                    <el-form-item label="投放开始时间：" label-width="130px" prop="region" :rules="$validate({required:true})" >
                        <el-date-picker
                        v-model="form.a"
                        type="datetime"
                        placeholder="请选择开始时间">
                        </el-date-picker>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="投放结束时间：" label-width="130px" prop="region" :rules="$validate({required:true})" >
                        <el-date-picker
                        v-model="form.a"
                        type="datetime"
                        placeholder="请选择结束时间">
                        </el-date-picker>
                    </el-form-item>
                </el-col>
                <el-col :span="24" class="sub_label" style="margin-top:28px;">
                    <i class="red">*</i>
                    上传弹窗图片&nbsp;<span style="color:#999999;">(支持jpg/png格式，小于5M)</span>
                </el-col>
                <!-- 超级里web -->
                <el-col :span="8" class="img_item">
                    <el-upload
                        class="avatar-uploader"
                        :action="uploadUrl + 'attachment/file/upload'"
                        :show-file-list="false"
                        :on-success="handleAvatarSuccess"
                        :before-upload="beforeAvatarUpload">
                        <img v-if="form.imageUrl" :src="form.imageUrl" class="avatar">
                        <i v-if="!form.imageUrl" class="el-icon-plus avatar-uploader-icon"></i>
                        <p class="color9 mb1" v-if="!form.imageUrl">建议尺寸：320 * 180 px</p>
                    </el-upload>
                    <p class="img_dec">web端</p>
                </el-col>
                <el-col :span="8" class="img_item">
                    <el-upload
                        class="avatar-uploader"
                        :action="uploadUrl + 'attachment/file/upload'"
                        :show-file-list="false"
                        :on-success="handleAvatarSuccess"
                        :before-upload="beforeAvatarUpload">
                        <img v-if="form.imageUrl" :src="form.imageUrl" class="avatar">
                        <i v-if="!form.imageUrl" class="el-icon-plus avatar-uploader-icon"></i>
                        <p class="color9 mb1" v-if="!form.imageUrl">建议尺寸：320 * 180 px</p>
                    </el-upload>
                    <p class="img_dec">app/小程序</p>
                </el-col>
            </el-row>
            <div class="sub_title" style="margin-top:20px;">
                广告形式
                &nbsp;&nbsp;
                <el-radio v-model="form.radio" label="1">图片广告</el-radio>
                <el-radio v-model="form.radio" label="2">链接广告</el-radio>
                <el-button size="small" icon="el-icon-plus" @click="addOwner">新增广告主</el-button>
            </div>
            <el-row>
                <el-col :span="8" class="img_item">
                    <el-upload
                        class="avatar-uploader"
                        :action="uploadUrl + 'attachment/file/upload'"
                        :show-file-list="false"
                        :on-success="handleAvatarSuccess"
                        :before-upload="beforeAvatarUpload">
                        <img v-if="form.imageUrl" :src="form.imageUrl" class="avatar">
                        <i v-if="!form.imageUrl" class="el-icon-plus avatar-uploader-icon"></i>
                        <p class="color9 mb1" v-if="!form.imageUrl">建议尺寸：320 * 180 px</p>
                    </el-upload>
                    <p class="img_dec" style="margin-top:10px;">H5页面地址
                        <el-input type="text" style="width:250px;" placeholder="自动填入上传后的图片链接地址" ></el-input>
                    </p>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="8" v-for="(item,index) in advOwnerList" :key="item.id">
                    <div class="ownerBox">
                        <i class="el-icon-circle-close ownerClose" @click="delOwner(index)"></i>
                        <div class="ownerHeader">广告{{index+1}}</div>
                        <div class="ownerItem">
                            <label>H5链接：</label>
                            <el-input class="ownerIpt" type="text" placeholder="请输入" ></el-input>
                        </div>
                        <div class="ownerItem">
                            <label>广告主名：</label>
                            <el-input class="ownerIpt" type="text" placeholder="请输入" ></el-input>
                        </div>
                        <div class="ownerItem">
                            <label>广告图片：</label>
                            <el-upload
                                class="avatar-uploader"
                                :action="uploadUrl + 'attachment/file/upload'"
                                :show-file-list="false"
                                :on-success="handleAvatarSuccess"
                                :before-upload="beforeAvatarUpload">
                                <img v-if="form.imageUrl" :src="form.imageUrl" class="avatar">
                                <i v-if="!form.imageUrl" class="el-icon-plus avatar-uploader-icon"></i>
                            </el-upload>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </el-form>
    </div>
</template>

<script>
import { TreeSelect } from 'ant-design-vue'
const SHOW_PARENT = TreeSelect.SHOW_PARENT
export default {
    name: 'advertisingDetail',
    data () {
        return {
            advOwnerList: [
                {
                    id: 1,
                    link: '',
                    name: '',
                    img: ''
                }
            ],
            uploadUrl: window.uploadURL,
            options: [
                {
                    value: 1,
                    label: '头部'
                }
            ],
            checked: '',
            pageNum1: 1,
            pageSize1: 10,
            total1: 0,
            loading: false,
            selectTableData1: [1, 2, 3, 4, 1, 1, 1, 1, 1, 2, 2],
            activeName1: 'tab1',
            selectIptValue1: '',
            selectCheckValue1: [],
            allCityList: [],
            treeValue: [],
            SHOW_PARENT,
            propsOption: {
                label: 'regionName',
                children: 'childList',
                value: 'regionCode'
            },
            form: {
                imageUrl: '',
                list: [],
                region: '',
                cityConfigVtamsDomain: '',
                cityConfigVtamsServicerName: '',
                cityConfigVtamsServicerTel: '',
                cityConfigVtamsServicerComplaintTel: '',
                cityConfigDetectLock: 0,
                cityConfigPayMethod: 0,
                cityConfigFileMethod: 0,
                cityConfigQqGroup: '',
                cityAgreementFix2TotalFee: 12,
                cityAgreementFix2TransportFee: 6,
                cityAgreementFix2FixFee: 6,
                cityAgreementFix2TestTotalFee: 12,
                cityAgreementFix2TestTransportFee: 6,
                cityAgreementFix2TestFixFee: 6,
                cityAgreementFix2GradeTotalFee: 12,
                cityAgreementFix2GradeTransportFee: 6,
                cityAgreementFix2GradeFixFee: 6,
                cityAgreementFix2OthercityTotalFee: 6,
                cityAgreementFix2OthercityTransportFee: 6,
                cityConfigVehicleYearPrice: 200
            }
        }
    },
    // components: {
    //     TreeSelect
    // },
    created () {
        this.getAllCity()
    },
    mounted () {
        if (this.$route.query.id) {
            this.getDetail()
        }
    },
    methods: {
        delOwner (index) {
            this.advOwnerList.splice(index, 1)
        },
        addOwner () {
            this.advOwnerList.push({})
        },
        handleAvatarSuccess (res) {
            this.form.imageUrl = res.data
            console.log(this.form.imageUrl)
        },
        beforeAvatarUpload (file) {
            const isJPG = /jpeg|png/.test(file.type)
            const isLt2M = file.size / 1024 / 1024 < 5
            if (!isJPG) {
                this.$message.error('上传图片只能是 JPG/JPEG/GIF/PNG 格式!')
            }
            if (!isLt2M) {
                this.$message.error('上传图片大小不能超过 5MB!')
            }
            return isJPG && isLt2M
        },
        handleSizeChange1 (val) {},
        handleCurrentChange1 (val) {},
        handleSelectionChange1 (val) {},
        handleClick () {},
        onChange (value) {
            console.log('onChange ', value)
            this.treeValue = value
        },
        getAllCity () {
            this.$get('comm/citys/areas/tree').then(res => {
                if (res.code === 0) {
                    res.data.forEach(e => {
                        e.title = e.areaName
                        e.value = e.areaCode
                        e.children && e.children.forEach(f => {
                            f.title = f.provinceName
                            f.value = f.provinceCode
                            f.children && f.children.forEach(g => {
                                g.title = g.cityName
                                g.value = g.cityCode
                            })
                        })
                    })
                    this.allCityList = res.data
                }
            })
        },
        getDetail () {
            this.$post(`/cityConfig/vtams/view/${this.$route.query.id}`, {
            }).then(res => {
                if (res.code === 0) {
                    res.data.region = [res.data.cityConfigVtamsMarketArea, res.data.cityConfigVtamsProvince, res.data.cityConfigVtamsCity]
                    this.form = res.data
                    this.$refs['form'].resetFields()
                }
            })
        },
        save () {
            this.$refs.form.validate((valid) => {
                if (valid) {
                }
            })
        },
        closePage () {
            this.$store.dispatch('closePage', {
                nextPath: '/vtamsCityConfig',
                refresh: 'cityOpen'
            })
        },
        handlePayChanged (val) {
            console.log(val)
            this.form.cityConfigFileMethod = val
            if (!val) {
                this.form.cityAgreementFix2TotalFee = 12
                this.form.cityAgreementFix2TransportFee = 6
                this.form.cityAgreementFix2FixFee = 6
                this.form.cityAgreementFix2TestTotalFee = 12
                this.form.cityAgreementFix2TestTransportFee = 6
                this.form.cityAgreementFix2TestFixFee = 6
                this.form.cityAgreementFix2GradeTotalFee = 12
                this.form.cityAgreementFix2GradeTransportFee = 6
                this.form.cityAgreementFix2GradeFixFee = 6
                this.form.cityAgreementFix2OthercityTotalFee = 6
                this.form.cityAgreementFix2OthercityTransportFee = 6
            }
        }
    }
}
</script>

<style lang='less' scoped>
// @import '~ant-design-vue/dist/antd.css';
// @media screen and (max-width: 1500px) {
//     .advertisingDetail {
//         zoom: 0.8;
//         transition: .2s all ease-in
//     }
// }
.advertisingDetail {
    min-width: 1270px;
    // overflow-x: scroll;
    h5 {
        color: #252631;
        font-size: 14px;
    }
    .ownerBox {
        background: #FAFAFA;
        width: 340px;
        height: 250px;
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        margin-top: 20px;
        position: relative;
        .ownerClose {
            position: absolute;
            right: 0;
            top: 0;
            cursor: pointer;
            color: #F5222D;
            font-size: 16px;
            padding: 10px;
        }
        .ownerHeader {
            color: #262626;
            line-height: 36px;
            text-align: center;
            font-weight: 600;
        }
        .ownerItem {
            margin-top: 10px;
            label {
                width: 100px;
                color: #262626;
                display: inline-block;
                text-align: right;
            }
            .ownerIpt {
                width: 191px;
            }
        }
    }
    .selelct_wrap {
        float: left;
        // display: inline-block;
        font-size: 12px;
        position: relative;
        width: 620px;
        border: 1px solid rgba(0,0,0,0.15);
        // &.small_wrap {
        //     width: 520px;
        // }
        .select_header {
            height: 44px;
            line-height: 44px;
            .select_count {
                position: absolute;
                left: 10px;
            }
            border-bottom: 1px solid rgba(0,0,0,0.15);
        }
        .select_search {
            padding: 10px 10px 0 10px;
            .select_ipt {
                width: 232px;
            }
            .select_check {
                display: inline-block;
                margin-left: 10px;
            }
            .select_btn {
                margin-left: 10px;
            }
        }
        .select_table {
            padding: 10px;
        }
    }
    .small_wrap {
        width: 520px;
        .select_search {
            .select_ipt {
                width: 100%;
            }
        }
    }
    .cross_div {
        // display: inline-block;
        width: 60px;
        text-align: center;
        padding-top: 200px;
        float: left;
        .crossIcon {
            font-size: 24px;
            cursor: pointer;
            &.active {
                color: #4D7CFE;
            }
        }
    }
    .sub_label {
        color: #666666;
    }
    .sub_title {
        font-size: 16px;
        color:#333;
        font-weight: 600;
        margin-bottom: 10px;
    }
    .img_item {
        margin-top: 18px;
        .img_header {
            width: 340px;
            text-align: center;
            margin-bottom: 10px;
            .el-select {
                margin: 0 10px;
            }
        }
        .img_dec {
            width: 340px;
            text-align: center;
            line-height: 30px;
        }
    }
    .detail-title {
        height:60px;
        line-height: 60px;
        margin:0 30px;
        font-weight: 600;
        // border-bottom: 1px solid #E8ECEF;
        font-size: 16px;
        color:#333;
        .back {
            margin-top:20px;
            height: 36px;
            padding: 0;
            width: 78px;
            margin-right: 24px;
        }
    }
    .form {
        width: 100%;
        box-sizing: border-box;
        padding: 0 30px 30px;
        color: #666;
        .line {
            width: 100%;
            height: 1px;
            background: #E8E8E8;
            margin: 10px 0;
        }
        .bot {
            border: 1px solid #E8E8E8;
        }
        .s-title {
            margin-top: 10px;
        }
    }
}
</style>

<style lang="less">
// @import '~ant-design-vue/dist/antd.css';
.ant-select-dropdown {
    *,
    *::before,
        *::after {
        box-sizing: border-box;
    }
}
.advertisingDetail {
    .el-tabs__nav-wrap {
        padding-left: 200px;
    }
    .small_wrap {
        .el-tabs__nav-wrap {
            padding-left: 140px;
        }
    }
    // .el-tabs__nav-scroll {
    //     &:after {
    //         content: '';
    //     }
    // }
    .el-tabs__nav-wrap::after {
        height: 0;
    }
    .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
        background: #FAFAFA;
    }
    .avatar-uploader .el-upload:hover {
        border-color: #409EFF;
    }
    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 340px;
        height: 53px;
        line-height: 90px;
        text-align: center;
    }
    .avatar {
        width: 340px;
        height: 90px;
        display: block;
    }
    .el-upload--picture-card {
        width: 340px;
        height: 90px;
        line-height: 90px;
    }
    .ownerBox {
        .avatar {
            display: inline-block;
            width: 90px;
            height: 90px;
        }
        .avatar-uploader {
            display: inline-block;
            vertical-align: top;
        }
        .avatar-uploader-icon {
            width: 90px;
            height: 90px;
        }
    }
    // .el-form-item {
    //     width: 80%;
    //     padding-bottom: 20px;
    //     .el-form-item__content {
    //         width: 100%;
    //     }
    //     .el-row {
    //         width: 100%;
    //         box-sizing: border-box;
    //         overflow: hidden;
    //     }
    //     .el-input__inner {
    //         width: 100%;
    //     }
    //     .el-input-group--append{
    //         margin-top: 2px;
    //         width: 100%;
    //     }
    //     .el-cascader {
    //         line-height: 36px;
    //         width: 100%;
    //     }
    // }
}
#advertisingDetail {
    .el-table th.is-leaf {
        padding: 0;
    }
}
</style>
