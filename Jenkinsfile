pipeline {
  agent {
    docker {
      image 'node:6-alpine'
      args '-p 3000:3000'
    }

  }
  stages {

    stage('Install dependecies') {
      steps {
        sh 'npm install'
      }
    }

    stage('Build') {
      steps {
        echo 'build'
      }
    }

    stage('Test') {
      steps {
        sh 'npm run test'
      }
    }

    stage('Deliver') {
      steps {
        echo 'deliver'
      }
    }

  }
  environment {
    CI = 'true'
  }
}