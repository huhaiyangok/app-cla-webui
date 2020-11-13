module.exports = {
    signType: {
        corp: "企业",
        emp: "员工",
        individual: "个人",
        corpBt: "企业签署",
        empBt: "员工签署",
        individualBt: "个人签署",
        guideTitle: "CLA签署指引",
        corpStep1_1: "点击“",
        corpStep1_2: "”进入企业CLA签署页面",
        corpStep2: "填写各项信息，提交签署",
        corpStep3: "企业将接收到社区发出的签署企业CLA的文件，请按照邮件中的提示完成后续签署",
        corpStep4: "社区管理员审批企业签署的企业CLA文件，开通企业在该社区的Administrator账号",
        corpStep5: "企业收到包含Administrator账号的邮件，企业CLA签署成功",
        corpStep6_1: "企业登录",
        corpStep6_2:"增加员工管理员，下载企业CLA文件等",
        claSignPlatform: "CLA签署平台",
        empStep2:'同意CLA签署平台对您个人Gitee账号的访问授权跳转至员工CLA签署页面',
        empStep4:'等待您公司在该社区的管理员对您提交的签署进行激活',
        empStep5:'收到员工CLA签署生效的邮件签署完成',
        individualStep2:'同意CLA签署平台对您个人Gitee账号的访问授权跳转至个人CLA签署页面',
        individualStep4:'收到个人CLA签署生效的邮件签署完成',
    },
    signPage: {
        claTitle: "贡献者许可协议",
        corp: "企业",
        emp: "员工",
        individual: "个人",
        requireText: "为必填项",
        checkBoxText1: "我已经阅读了",
        privacy: "隐私政策",
        checkBoxText2: "，并同意在香港通过",
        claSignPlatform: "CLA签署平台",
        checkBoxText3: "处理我的数据",
        sendCode:'发送验证码',
        reSendCode:'{second}秒重发',
        sign:'签 署',
    },
    tips:{
        failedTitle:'失败',
        successTitle:'成功',
        dialogBt:'确定',
        no_cla_binding:'该组织没有可签署的贡献者许可协议',
        has_signed:'已签署过这份贡献者许可协议',
        invalid_parameter:'参数无效，无法签署',
        no_corp_manager:'该公司尚未添加任何管理员。你无法签署',
        has_not_signed:'该公司尚未签署',
        invalid_token:'Token已过期，请重新登录',
        missing_token:'Token无效，请重新登陆',
        unknown_token:'Token无效，请重新登陆',
        uncompleted_signing:'该公司的签署流程还未完成',
        unknown_email_platform:'目前不支持此类型的邮箱',
        failed_to_send_email:'发送邮件失败',
        wrong_verification_code:'验证码错误',
        expired_verification_code:'验证码已过期',
        pdf_has_not_uploaded:'未上传组织的签名',
        num_of_corp_managers_exceeded:'管理员人数超出限制',
        corp_manager_exists:'名称已存在',
        not_same_corp:'电子邮件不属于该公司',
        not_ready_to_sign:'组织尚未就绪',
        system_error:'系统错误，请重试',
        title_type_repeat:'填充了相同的标题或类型',
        individual_sign:'感谢你的签署',
        corp_sign:'已向您发送电子邮件，请按照邮件中的步骤完成签署',
        emp_sign:'已向您发送电子邮件，请检查签署文件',
        invalid_telephone_num:'无效的电话号码',
        not_fill_telephone_num:'请输入公司电话号码',
        not_fill_address:'请输入公司地址',
        invalid_email:'无效的电子邮件',
        sending_email:'已向您的电子邮件发送了验证码',
        not_fill_email:'请输入电子邮件',
        not_commit_email:'抱歉，无法从您的{platform}帐户获取提交代码的电子邮件，请检查电子邮件设置并重试',
        not_authorize_email:'你没有授权我们访问你的电子邮件，请检查并重试',
        lang_error:'语言错误',
        fill_name:'请输入名称',
        fill_corp_name:'请输入公司名称',
        fill_representative_title:'请输入代表职务',
        fill_representative_name:'请输入代表姓名',
        fill_date:'请输入日期',
        fill_verification_code:'请输入验证码',
        review_privacy:'请查看隐私声明',
        not_fill_id:'请输入ID',
        invalid_account_or_pw:'旧密码无效，请重试',
        fill_pwd:'请输入密码',
        id_pwd_err:'账号或者密码错误，请重试',

    },
    header:{
        home:'首页',
        manager:'管理员',
        emp:'员工',
        createManager:'创建管理员',
        resetPwd:'重置密码',
        corpCla:'CLA',
        loginOut:'退出',
    },
    corp:{
        id:'账号',
        name:'姓名',
        email:'邮箱',
        role:'角色',
        operation:'操作',
        delete:'删除',
        cancel:'取消',
        batch:'多选',
        deleteTips:'确定删除？',
        yes:'是',
        no:'否',
        submit:'提交',
        reset:'重置',
        manager_limit:'最多创建{limit}个管理员',
        fill_complete:'请填写完整的信息',
        input_old_pwd:'请输入旧密码',
        input_new_pwd:'请输入新密码',
        input_new_pwd_again:'请再次输入新密码',
        newPwd_diff_with_oldPwd:'新密码不能与旧密码相同',
        newPwd_diff:'两次输入的密码不同',
        pwd:'密码',
        forget_pwd:'忘记密码？',
        login_in:'登陆',
        inactive:'未激活',
        active:'已激活',
    },
    index:{
        org_login: '组织管理员',
        corp_login: '企业管理员',
    },
}
