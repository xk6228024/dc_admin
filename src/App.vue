<template>
    <div id="app" v-cloak style="background-image:url(/img/sky.png)">
        <transition name="el-fade-in-linear" mode="out-in">
            <router-view/>
       </transition>
    </div>
</template>

<script>
export default {
    data () {
        return {
        }
    },
    mounted () {
        // 点击输入框自动选中文本
        document.body.addEventListener('click', function (e) {
            const target = e.target
            if (target.className === 'el-input__inner' && target.value.length) {
                const length = target.value.length
                // 只有当未选中文本时触发
                if ((target.selectionStart === 0 || target.selectionStart === length) && (target.selectionEnd === length)) {
                    target.select && target.select()
                }
            }
        })
    }
}
</script>

<style lang="less">
// // 覆盖antui样式
// *, *::before, *::after {
//     box-sizing: content-box;
//     -webkit-box-sizing: content-box;
// }
.el-tooltip__popper {
    max-width: 500px!important;
}
#app {
    // 覆盖antui样式
    // *, *::before, *::after {
    //     box-sizing: content-box;
    //     -webkit-box-sizing: content-box;
    // }
    // [class*="el-col-"] {
    //     -webkit-box-sizing: border-box;
    //     box-sizing: border-box;
    // }
    // img {
    //     vertical-align: initial;
    // }
    // .el-button {
    //     box-sizing: border-box;
    //     -webkit-box-sizing: border-box;
    // }
    // 覆盖antui样式
    // --themeColor: #4D7CFE;
    // --themeFontColor: #4D7CFE;
    // --themeFontColorL: #4D7CFE;
    // --activeColor: #eeeeee;
    // --themeFontColorA: #4D7CFE;
    // --themeFontColorAL: #ffffff;
    // --tabColor: #778CA2;
    transition: .2s all ease;
    background-size: 100% 100%;
    word-break: break-all;
    textarea {
        font-family: '\5FAE\8F6F\96C5\9ED1', 'Microsoft Yahei', sans-serif;
    }
    // .el-menu-item:focus, .el-menu-item:hover {
    //     background-color: transparent!important;
    // }
    .img_with_border {
        padding: 8px;
        border: 1px solid rgba(0, 0, 0, .15);
        border-radius: 4px;
    }
    .tableBorder {
        // border: 1px solid #e3e7ea;
        th {
            background: #F8FAFB;
        }
        .el-table__header {
            th {
                background: #F8FAFB;
            }
            background: #F8FAFB;
        }
    }
    .el-table__row:hover {
        background: #E6F7FF;
    }
    // .el-table_1_column_1 {
    //     padding-left: 10px!important;
    // }
    .el-table--enable-row-transition .el-table__body .el-table__row td:nth-child(1) {
        padding-left: 10px!important;
    }
    .el-table__header .has-gutter th:nth-child(1) {
        padding-left: 10px!important;
    }
    // .el-table__row td {
    //     padding-left: 20px;
    // }
    .el-form-item.is-success .el-input__inner, .el-form-item.is-success .el-input__inner:focus, .el-form-item.is-success .el-textarea__inner, .el-form-item.is-success .el-textarea__inner:focus {
        border-color: #67c23a;
    }
    .el-form-item.is-success .el-input__inner, .el-form-item.is-success .el-textarea__inner {
        border-color: #dcdfe6;
    }
    .computeHeight {
        height: calc(100vh - 300px);
        min-height: 300px;
        .el-table__body-wrapper {
            height: calc(100vh - 368px);
            overflow-y: auto;
        }
    }
    .hhide {
        visibility: hidden;
        width: 0;
        padding: 0;
        margin-left: 0;
    }
    .fontIcon {
        display: inline-block;
    }
    .el-table {
        font-size: 13px;
    }
    .myTable {
        // border-color: rgba(232,236,239,1);
        border: none;
        border-top: 1px solid #eeeeee;
        border-left: 1px solid #eeeeee;
        td {
            border-right: 1px solid #eeeeee;
            border-bottom: 1px solid #eeeeee;
        }
        .blueTilte {
            background: rgb(242, 244, 246);
            font-weight: bold;
        }
    }
    .detailTable {
        text-align: center;
        border: none;
        border-top: 1px solid #eeeeee;
        border-left: 1px solid #eeeeee;
        // table-layout:fixed;
        word-break:break-all;
        td {
            height: 44px;
            // padding: 0 10px 0 20px;
            box-sizing: border-box;
            border-right: 1px solid #eeeeee;
            border-bottom: 1px solid #eeeeee;
        }
        .label {
            width: 10%;
            text-align: right;
            padding-right: 8px;
        }
        .value {
            width: 15%;
            text-align: left;
            padding-left: 10px;
        }
        .blueTilte {
            background: rgb(242, 244, 246);
            font-weight: bold;
            padding-left: 20px;
        }
    }
    // 时间选择器
    .el-date-editor .el-range__icon {
        // margin-top: -5px;
    }
    .el-range-separator {
        // margin-top: -5px;
        // margin-right: 2px;
    }
    .el-date-editor {
        .el-range-input {
            width: 39%;
        }
    }
    // 下拉框
    .el-select {
        .el-input__inner {
            padding-left: 11px;
        }
    }
    .el-select .el-input .el-select__caret {
        line-height: 32px;
    }
    .fontColor {
        color: #252631;
    }
    .blueTilte {
        font-weight: bold;
    }
    height: 100%;
    // 长传图片
    .mt17 {
        margin-top: 21px;
        margin-bottom: 17px;
    }
    // 组件表单
    .el-form {
        .el-form-item__label {
            line-height: 36px;
        }
        .el-form-item__content {
            line-height: 36px;
        }
        .el-form-item {
            margin-bottom: 20px;
            &:last-child {
                margin-bottom: 0;
            }
        }
    }
    // 组件表格
    .el-table th > .cell {
        color: #666666;
    }
    .el-table th.is-leaf {
        padding: 10px 0;
    }
    .el-table--enable-row-transition .el-table__body td {
        padding: 10px 0;
    }
    .el-table .cell {
        color: #252631;
    }
    .el-table__empty-block {
        width: 100% !important;
    }
    // 组件按钮
    .el-button--text {
        padding: 0;
    }
    // .el-input__inner {
    //     height: 32px;
    //     line-height: 32px;
    // }
    .el-input {
        .el-input__suffix-inner {
            .el-input__icon {
                // line-height: 32px;
                // height: 32px;
            }
        }
    }
    // 组件弹框
    .el-message-box__status.el-icon-warning {
        color: #ffa600;
    }
    // 组件分页
    .el-pagination {
        margin-top: 20px;
        text-align: right;
        .el-input__inner {
            height: 32px;
            color: #98A9BC;
        }
        .el-pagination__sizes {
            height: 32px;
            line-height: 32px;
        }
        .el-pagination__total {
            height: 32px;
            line-height: 32px;
            color: #98A9BC;
        }
        .el-pagination__editor {
            height: 32px;
            line-height: 32px;
            color: #98A9BC;
        }
        .el-pagination__jump {
            color: #98A9BC;
        }
        button {
            height: 32px;
            line-height: 32px;
            border: 1px solid #D9D9D9;
            border-radius: 4px;
            padding: 0 6px;
            margin-right: 8px;
            color: #98A9BC;
        }
        .el-pager li {
            height: 32px;
            line-height: 32px;
            border: 1px solid #D9D9D9;
            color: #98A9BC;
            margin-right: 8px;
            border-radius: 4px;
            transition: all .2s;
            font-weight: normal;
            &:hover {
                color: #4D7CFE;
                border: 1px solid #4D7CFE;
            }
            &.active {
                color: #4D7CFE;
                border: 1px solid #4D7CFE;
            }
        }
    }
    // 新详情页样式
    .detailPage {
        padding-bottom: 40px;
        position: relative;
        height: calc(100% - 100px);
        overflow: auto;
        &::-webkit-scrollbar {/*滚动条整体样式*/
            width: 8px;     /*高宽分别对应横竖滚动条的尺寸*/
            height: 1px;
        }
        &::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
            border-radius: 8px;
            background: #cccccc;
        }
        &::-webkit-scrollbar-track {/*滚动条里面轨道*/
            border-radius: 8px;
            background: #eeeeee;
        }
        .detail_header {
            height: 58px;
            line-height: 75px;
            padding-right: 32px;
            position: fixed;
            top: 134px;
            right: 30px;
            background: #fff;
            z-index: 2;
            h1 {
                font-weight: 600;
                font-size: 16px;
                color: #252631;
            }
            .btn {
                float: right;
                height: 36px;
                margin-top: 20px;
                line-height: 0.9;
                margin-left: 20px;
                min-width: 78px;
            }
        }
        .detail_content {
            padding: 0 32px;
            .detail_model {
                &.noBorder {
                    border-bottom: none;
                }
                padding: 18px 0;
                border-bottom: 1px solid #E8E8E8;
                &:last-child {
                    border-bottom: none;
                }
                h4 {
                    font-weight: 600;
                    color: #252631;
                    font-size: 16px;
                    line-height: 40px;
                    .h4_btn {
                        margin-left: 20px;
                    }
                }
                .detail_item {
                    float: left;
                    width: 33%;
                    font-size: 14px;
                    color: #595959;
                    // margin-bottom: 20px;
                    line-height: 40px;
                    label {
                        color:rgba(38,38,38,1);
                    }
                }
                .detail_item100 {
                    width: 100%;
                }
            }
        }
        .edit_content {
            .edit_input {
                margin-right: 50px;
                width: 80%;
            }
            .detail_item {
                margin-bottom: 15px;
                input {
                    height: 32px;
                    line-height: 32px;
                }
                .el-range-input {
                    height: 30px;
                    line-height: 30px;
                }
            }
            .required {
                color: #8c8c8c;
                margin-left: 5px;
            }
        }
    }
}
// 组件弹框
.el-dialog {
    .el-dialog__footer {
        .el-button {
            padding: 0;
            height: 32px;
            min-width: 65px;
        }
    }
    // .el-input__inner {
    //     height: 32px;
    //     line-height: 32px;
    // }
    // .el-select {
    //     height: 32px;
    //     line-height: 32px;
    // }
    .el-form-item {
        margin-bottom: 18px;
    }
    .el-form-item__content {
        line-height: 34px;
    }
    .el-form-item__label {
        line-height: 34px;
    }
    .el-dialog__header {
        padding: 13px 24px;
        border-bottom: 1px solid #d9d9d9;
        .el-dialog__title {
            font-size: 16px;
        }
    }
}

</style>
