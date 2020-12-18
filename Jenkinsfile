pipeline {
    agent any
    options {
        //设置管道运行的超时时间，在此之后，Jenkins将中止管道
        timeout(time: 20, unit: 'MINUTES')
        // 失败重试次数
        retry(2)
        //输出时间戳
        timestamps()
    }
    stages {
        stage('Stage 1') {
            steps {
                echo 'Hello world!'
            }
        }
    }
    post {
        success {
            echo "'${env.JOB_NAME} [${env.BUILD_NUMBER}]' 构建成功"
            emailext (
                subject: "'${env.JOB_NAME} [${env.BUILD_NUMBER}]' 构建成功",
                body: """
                详情：
                SUCCESSFUL: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]'
                状态：${env.JOB_NAME} jenkins 更新运行正常
                URL ：${env.BUILD_URL}
                项目名称 ：${env.JOB_NAME}
                项目更新进度：${env.BUILD_NUMBER}
                """,
                to: "1078624522@qq.com",
                recipientProviders: [[$class: 'DevelopersRecipientProvider']]
            )
        }
        failure {
            echo "'${env.JOB_NAME} [${env.BUILD_NUMBER}]' 构建失败"
            emailext (
                subject: "'${env.JOB_NAME} [${env.BUILD_NUMBER}]' 构建失败",
                body: """
                详情：
                SUCCESSFUL: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]'
                状态：${env.JOB_NAME} jenkins 运行失败
                URL ：${env.BUILD_URL}
                项目名称 ：${env.JOB_NAME}
                项目更新进度：${env.BUILD_NUMBER}
                """,
                to: "1078624522@qq.com",
                recipientProviders: [[$class: 'DevelopersRecipientProvider']]
            )
        }
    }
}
