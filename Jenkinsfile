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
        }
        failure {
            echo "'${env.JOB_NAME} [${env.BUILD_NUMBER}]' 构建失败"
        }
    }
}
