pipeline {
    options {
        buildDiscarder(logRotator(numToKeepStr: '7', artifactNumToKeepStr: '10', daysToKeepStr: '5'))
        timeout(time: 12, unit: 'MINUTES')
        disableConcurrentBuilds()
    }
    agent any

    environment {
        JOB_NAME = 'ss-ui-library'
    }

    parameters {
            booleanParam(name: 'FAST_MODE', defaultValue: false, description: '此操作将会跳过单元测试以及代码质量检查。')
    }

    stages {
        stage('pipeline环境准备') {

            steps {
                script {
                    echo "开始构建"
                    if(!env.BRANCH_NAME.startsWith('feature-') && !env.BRANCH_NAME.startsWith('release-')){
                        error("自动构建分支名称必须以feature-或release-开头，当前分支名称为: ${env.BRANCH_NAME}")
                    }

                    if (env.BRANCH_NAME.startsWith('feature-') ) {
                        env.env = "beta"
                    }
                    if (env.BRANCH_NAME.startsWith('release-')) {
                        env.env = "stage"
                    }

                    sh "echo 当前分支 : ${env.BRANCH_NAME}"
                    sh "echo 当前环境 : ${env.env}"
                    sh "echo 当前提交 : ${env.commit}"
                    sh "echo WORKSPACE : ${env.WORKSPACE}"
                    sh "echo GIT_BRANCH : ${env.GIT_BRANCH}"
                    sh "echo BUILD_NUMBER : ${env.BUILD_NUMBER}"
                    sh "echo JOB_NAME : ${env.JOB_NAME}"
                }
            }
        }

        stage("打包文档"){
            when{
                expression {
                    params.FAST_MODE == false
                }
            }
           steps{
                script {
                    echo "开始打包文档"
                    sh "npm site"
                }
           }
        }

        stage("发布应用") {
            steps {
                script {
                    echo "开始发布"
                    sh "curl --location --request POST 'http://0.0.0.0:8080/job/${env.JOB_NAME}/buildWithParameters' \
                        --header 'Authorization: ${env.ecarx_jenkins_auth}' \
                        --form 'env=${env.env}' \
                        --form 'branchname=origin/${env.BRANCH_NAME}'"
                }
            }
        }
    }
}
