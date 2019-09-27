angular.module('my_app', [])
    .controller('WorkController', ($scope, $http) => {
        $scope.title = "Edit Work"
        $scope.add_ = function() {

            let add_work = { name_work: $scope.name_work, _id: JSON.parse(localStorage.getItem('data_'))._id }

            $http.post('http://localhost:3000/work', JSON.stringify(add_work)).then(res => {
                if (res.docs) {
                    alert('ADD ok');
                }
            })
        }
        $scope.edit_ = function() {
            let edit_work = {
                name_work: $scope.name_work,
                full_name: $scope.full_name
            }
            $http.post('http://localhost:3000/edit_work', JSON.stringify(edit_work)).then(res => {
                if (res.docs) {
                    console.log('saved.')
                }
            })
        }
        $scope.delete_ = function(_id) {
            let delete_ = {
                name_work: $scope.name_work,
                _id: JSON.parse(localStorage.getItem('data_'))._id
            }
            $http.delete('http://localhost:3000/delete_work/' + _id).then(res => {
                if (res.docs) {
                    console.log("1 document deleted.");
                }
            })
        }
        $http.get("http://localhost:8000/get_work")
            .then(response => {
                {
                    $scope.work = response.data;
                    $scope.check = getLocal().full_name;

                }
            });

        $scope.get = function(id) {
            $http.get("http://localhost:8000/get_id/" + id)
                .then(response => {
                    $scope.name_work = response.data.name_work;
                    // $scope.check = response.data.person_;
                });
            $http.get("http://localhost:8000/get_name_id/" + id)
                .then(response => {
                    // $scope.name_work = response.data.name_work;
                    $scope.full_name = response.data;
                });
        }
        $scope.delete_local = function() {
            localStorage.removeItem('data_')
        }
    })


function getLocal() {
    return JSON.parse(localStorage.getItem("data_"));
}