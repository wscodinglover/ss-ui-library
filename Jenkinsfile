pipeline {
    agent any
    stages {
        stage('Environment Ckeck ') {
            steps {
                script {
                    echo "Start building"
                    if(!env.BRANCH_NAME.startsWith('feature-') && !env.BRANCH_NAME.startsWith('release-')){
                        error("The name of the automatic build branch must start with feature- or release-, and the current branch name is: ${env.BRANCH_NAME}")
                    }

                    if (env.BRANCH_NAME.startsWith('feature-') ) {
                        env.env = "beta"
                    }
                    if (env.BRANCH_NAME.startsWith('release-')) {
                        env.env = "stage"
                    }

                    sh "echo Current branch : ${env.BRANCH_NAME}"
                    sh "echo Current environment : ${env.env}"
                    sh "echo Current submission : ${env.commit}"
                    sh "echo WORKSPACE : ${env.WORKSPACE}"
                    sh "echo GIT_BRANCH : ${env.GIT_BRANCH}"
                    sh "echo BUILD_NUMBER : ${env.BUILD_NUMBER}"
                    sh "echo JOB_NAME : ${env.JOB_NAME}"
                }
            }
        }
        stage("Pack DOC"){
           steps{
                script {
                    echo "start package document"
                    sh "npm site"
                }
           }
        }
    }
    post {
        always {
            echo 'I will always say Hello again!'
        }
    }
}
