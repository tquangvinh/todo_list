angular.module("my_app", [])
    .controller('RegisterController', ($scope, $http) => {
        $scope.title = 'Register Form';

        $scope.ds = function() {
            let user = {
                email: $scope.email,
                password: $scope.password,

                full_name: $scope.full_name
            }
            $http.post('http://localhost:3000/register', JSON.stringify(user)).then(res => {

                if (res.data.err) {
                    alert(res.data.err)
                } else
                    window.location.replace("http://localhost:8000/");


            }).catch(err => {
                console.log(err);
            })
        }

    });