angular.module("my_app", [])
    .controller('LoginController', ($scope, $http) => {
        $scope.title = 'Login Form';

        $scope.ds = function() {
            let user = {
                email: $scope.email,
                password: $scope.password
            }

            $http.post('http://localhost:3000/login', JSON.stringify(user)).then(res => {
                if (res.data) {
                    localStorage.setItem('data_', JSON.stringify(res.data))

                    window.location.replace("http://localhost:8000/work");
                }
            }).catch(err => {
                console.log(err);
            })
        }
    })