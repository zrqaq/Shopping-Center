<template>
	<div>
		<div class="register_view">
			<div class="outTitle_view">
				<div class="outTilte">{{projectName}}注册</div>
			</div>
			<el-form :model="registerForm" class="register_form">
				<div class="list_item">
					<div class="list_label">商家账号：</div>
					<el-input class="list_inp"
						 v-model="registerForm.shangjiazhanghao" 
						 placeholder="请输入商家账号"
						 type="text"
						/>
				</div>
				<div class="list_item">
					<div class="list_label">密码：</div>
					<el-input class="list_inp"
						 v-model="registerForm.mima" 
						 placeholder="请输入密码"
						 type="password"
						 />
				</div>
				<div class="list_item">
					<div class="list_label">确认密码：</div>
					<el-input class="list_inp" v-model="registerForm.mima2" type="password" placeholder="请输入确认密码" />
				</div>
				<div class="list_item">
					<div class="list_label">头像：</div>
					<div :style='{}' class="list_file_list">
						<uploads
							action="file/upload" 
							tip="请上传头像"
							:fileUrls="registerForm.touxiang?registerForm.touxiang:''" 
							@change="touxiangUploadSuccess">
						</uploads>
					</div>
				</div>
				<div class="list_item">
					<div class="list_label">性别：</div>
					<el-select 
						class="list_sel"
						v-model="registerForm.xingbie" 
						placeholder="请选择性别"
						>
						<el-option v-for="item in shangjiaxingbieLists" :label="item" :value="item"></el-option>
					</el-select>
				</div>

				<div class="list_item">
					<div class="list_label">姓名：</div>
					<el-input class="list_inp"
						 v-model="registerForm.xingming" 
						 placeholder="请输入姓名"
						 type="text"
						/>
				</div>
				<div class="list_btn">
					<el-button class="register" type="success" @click="handleRegister">注册</el-button>
					<div class="r-login" @click="close">已有账号，直接登录</div>
				</div>
			</el-form>
		</div>
	</div>
</template>
<script setup>
	import {
		ref,
		getCurrentInstance,
		nextTick,
		onMounted,
	} from 'vue';
	const context = getCurrentInstance()?.appContext.config.globalProperties;
	const projectName = context?.$project.projectName
	//获取注册类型
	import { useRoute } from 'vue-router';
	const route = useRoute()
	const tableName = ref('shangjia')
	
	//公共方法
	const getUUID=()=> {
		return new Date().getTime();
	}
	const registerForm = ref({
        xingbie: '',
	})
	const shangjiaxingbieLists = ref([])
	const init=()=>{
		shangjiaxingbieLists.value = "男,女".split(',')
	}
    const touxiangUploadSuccess=(fileUrls)=> {
        registerForm.value.touxiang = fileUrls;
    }
	// 多级联动参数
	//注册按钮
	const handleRegister = () => {
		let url = tableName.value +"/register";
		if((!registerForm.value.shangjiazhanghao)){
			context?.$toolUtil.message(`商家账号不能为空`,'error')
			return false
		}
		if((!registerForm.value.mima)){
			context?.$toolUtil.message(`密码不能为空`,'error')
			return false
		}
		if(registerForm.value.mima!=registerForm.value.mima2){
			context?.$toolUtil.message('两次密码输入不一致','error')
			return false
		}
		if(registerForm.value.touxiang!=null){
			registerForm.value.touxiang = registerForm.value.touxiang.replace(new RegExp(context?.$config.url,"g"),"");
		}
		if((!registerForm.value.xingming)){
			context?.$toolUtil.message(`姓名不能为空`,'error')
			return false
		}
		context?.$http({
			url:url,
			method:'post',
			data:registerForm.value
		}).then(res=>{
			context?.$toolUtil.message('注册成功','success', obj=>{
				context?.$router.push({
					path: "/login"
				});
			})
		})
	}
	//返回登录
	const close = () => {
		context?.$router.push({
			path: "/login"
		});
	}
	init()
	onMounted(()=>{

	})
</script>
<style lang="scss" scoped>
	
	.register_view {
        background-image: url("http://clfile.zggen.cn/20240915/a73f5498f32c456cb7a486ef5f5a4b36.webp");
		// 标题盒子
		.outTitle_view {
			.outTilte {
			}
		}
		// 表单盒子
		.register_form {
		}
		// item盒子
		.list_item {
			// label
			.list_label {
			}
			// 输入框
			:deep(.list_inp) {
			}
		}
		//下拉框样式
		:deep(.list_sel) {
			//去掉默认样式
			.select-trigger{
				height: 100%;
				.el-input{
					height: 100%;
				}
			}
		}
		//按钮盒子
		.list_btn {
			//注册按钮
			.register {
			}
			//注册按钮悬浮样式
			.register:hover {
			}
			//已有账号
			.r-login {
			}
		}
		//图片上传样式
		.list_file_list  {
			//提示语
			:deep(.el-upload__tip){
			}
			//外部盒子
			:deep(.el-upload--picture-card){
				//图标
				.el-icon{
				}
			}
			:deep(.el-upload-list__item) {
			}
		}
	}
</style>
<style>
.register_view {
    min-height: 100vh;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-image: url(http://clfile.zggen.cn/20240911/1b9f5df04d774ec78e508c38dbd9c715.jpg);
    background-position: center center;
    background-size: 100% 100% !important;
    background-repeat: no-repeat;
    background-attachment: initial;
    background-origin: initial;
    background-clip: initial;
    background-color: initial;
}


.register_form{ width:1000px; margin:0 auto; padding:20px 50px 30px 500px; background:url(http://clfile.zggen.cn/20240911/d6c0600bc69f41499dc098d5138a8482.png) no-repeat 80px center,#fff; font-size:16px; border-radius:0px; transform:scale(1); -webkit-transform:scale(1); -ms-transform:scale(1); z-index:5; box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0); }

.register_form:before { content: ""; width: 100%; height: 0px; border-radius: 10px;  position: absolute;  top: -10px; background: rgba(255, 255, 255, .6);  left: 0; transform: scale(.95); -webkit-transform: scale(.95);  -ms-transform: scale(.95);  z-index: -1; }


.register_form .title_view{  width:calc(100% + 100px); float:left; line-height:46px; font-size:18px; font-weight:600; letter-spacing:0.5px; background:#339933;  color:#fff; position:relative; margin-bottom:20px; margin-left:-100px; padding-left:40px; }
.register_form .title_view:before { content: "";  width: 0px; height: 100%;  position: absolute;  top: 0; left: -50px; background: #8b5c7e; }


.register_view .outTitle_view{
    display: flex;
    align-items: center;
    padding: 30px 0px 30px;
}

.register_view .outTitle_view .outTilte{
    color: rgb(255, 255, 255);
    font-size: 30px;
    text-shadow:0 -4px 4px rgba(0, 0, 0, 0.25);
}


.register_form .list_item { display: flex; align-items: center; width: 100%;  justify-content: flex-start;  margin: 10px auto; }
.register_form .list_item .list_label{ display:block; margin-right:10px; white-space:nowrap; font-size:16px;  }
.register_form .list_item .list_label i {  font-size:24px; color:#999;  }
.register_form .list_item .el-input .el-input__inner{ width:100%; border:none; border-bottom:1px solid #ddd; height:40px; line-height:40px; border-radius:0; font-size:16px; color:#999;   }
.register_form .list_item .el-select { width:100%; }
.register_form .list_type{ margin-bottom:20px;  }
.register_form .list_code{  }
.register_form .list_code .el-input .el-input__inner{ width:100%; border:none; border-bottom:1px solid #ddd; height:40px; line-height:40px; border-radius:0; font-size:16px; color:#999;   }


.register_form .list_item .list_file_list{ width: 100%;  margin:10px 20px 10px 0px; flex:1; }

.register_form .list_item .list_file_list .el-upload{ background-color: rgb(255, 255, 255);  width: 100px;  height: 60px; line-height: 68px;  text-align: center;  border: 1px solid rgb(221, 221, 221);  border-radius: 0px; cursor: pointer; }

.register_form .list_item .list_file_list .el-upload .el-icon{ font-size: 26px; color: rgb(187, 187, 187); }

.register_form .list_item .list_file_list .img-uploader .el-upload__tip{ font-size: 16px;  color: rgb(102, 102, 102);margin: 7px 0px 0px; display: flex; align-items: center;  justify-content: flex-start; }


.register_form .list_item .el-upload-dragger{ background-color: rgb(255, 255, 255); border: 1px solid rgb(221, 221, 221);  border-radius: 0px;  box-sizing: border-box;  width: 100%; height: auto; text-align: center; cursor: pointer; overflow: hidden; padding: 4px 20px 8px; }

.register_form .list_item .el-upload-dragger .el-icon--upload{ font-size: 48px; color: #5293d3; line-height: 40px;  margin: 0px; }

.register_form .list_item .upload-demo .el-upload__tip{ font-size: 16px; color: rgb(102, 102, 102); margin: 7px 0px 0px; }

.register_form .list_item .el-upload-dragger .el-upload__text{  font-size: 16px;  }
.register_form .list_item .el-upload-dragger .el-upload__text em{ color: #5293d3; }


.register_form .list_item .list_radio{ display: flex; width: 80%; align-items: center; flex-wrap: wrap; background: none; height: 36px; flex: 1; }

.register_form .list_item .list_radio .el-radio{ width: auto; margin: 0px 20px 0px 0px; display: flex; justify-content: center; align-items: center; }

.register_form .list_item .list_radio .el-radio .el-radio__label { font-size: 16px; color: rgb(153, 153, 153); }

.register_form .list_item .list_radio .el-radio.is-checked .el-radio__label { color:#5293d3; }

.register_form .list_item .list_radio .el-radio .el-radio__input .el-radio__inner{ border-color: rgb(153, 153, 153); background: rgb(255, 255, 255); }

.register_form .list_item .list_radio .el-radio .el-radio__input.is-checked .el-radio__inner{ border-color: #5293d3; background: #5293d3;  }


.register_form .list_item .list_checkbox { display: flex; width: 80%;  flex-wrap: wrap; align-items: center; background: none; height: 36px; flex:1; }

.register_form .list_item .list_checkbox .el-checkbox{ width: auto; margin: 0px 20px 0px 0px; display: flex;  justify-content: center;  align-items: center; }

.register_form .list_item .list_checkbox .el-checkbox .el-checkbox__label { color: rgb(153, 153, 153);  font-size: 16px; }

.register_form .list_item .list_checkbox .el-checkbox.is-checked .el-checkbox__label { color: #5293d3; }

.register_form .list_item .list_checkbox .el-checkbox .el-checkbox__input .el-checkbox__inner{ border-color: rgb(153, 153, 153);  background: rgb(255, 255, 255); }

.register_form .list_item .list_checkbox .el-checkbox.is-checked .el-checkbox__input .el-checkbox__inner{ border-color: #5293d3; background: #5293d3; }


.register_form .list_code{ display: flex; align-items: center; width: 100%; margin: 10px auto; }
.register_form .list_code .list_code_label{ font-size:16px; }

.register_form .list_code .list_code_item{ width: calc(100% - 130px); display: flex; align-items: center; flex:1; }

.register_form .list_code .list_code_item .list_code_inp{  font-size:16px; color:#999; }

.register_form .list_code .list_code_item .list_code_btn{ width: 150px; height: 36px; line-height: 36px; padding: 0px; border: 0px solid rgb(73, 189, 227); background: #5293d3; border-radius: 0px; color: rgb(255, 255, 255); font-size: 16px; }


.register_form .list_btn{  margin-top:20px; text-align:center;  }
.register_form .list_btn .register{ width: 100%; height: 46px; line-height: 46px; background:linear-gradient(0deg, rgba(164,220,245,1) 0%, rgba(164,220,245,1) 50%, rgba(212,242,252,1) 50%, rgba(212,242,252,1) 100%); border: 0px solid #ccc; font-weight: 600; font-size: 20px; color: #5293d3; letter-spacing: 4px; margin-bottom:20px; padding:0; border-radius:0px;  } 
.register_form .list_btn .register:hover { } 
.register_form .list_btn .r-login{  font-size: 16px; color: #999; } 
.register_form .list_btn .r-login:hover{ cursor:pointer; text-decoration:underline; } 
.register_form .el-select,.el-input {
  border: none;
}

</style>