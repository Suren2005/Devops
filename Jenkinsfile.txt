pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                echo 'Building the TO-DO app...'
            }
        }
        stage('Test') {
            steps {
                echo 'Running tests...'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying TO-DO app...'
            }
        }
    }
}
