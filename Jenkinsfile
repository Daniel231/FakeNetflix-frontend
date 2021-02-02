pipeline {
    agent {
        docker {
            image 'node:6-alpine'
            args '-p 3000:3000'
        }
    }
    environment { 
        CI = 'true'
    }
    stages {
        stage('Build') {
            steps {
                echo 'build'
            }
        }
        stage('Test') {
            steps {
                echo 'test'
            }
        }
        stage('Deliver') { 
            steps {
                echo 'deliver'
            }
        }
    }
}
