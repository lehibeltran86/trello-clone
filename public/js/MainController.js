angular.module('Trello')

.controller('MainController', function ($scope, dataService) {
        dataService.getAllData()
            .then(function (response) {
                $scope.data = response.data;
                console.log(response);
            });

    $scope.addTask = function (index, newTask) {
        console.log(newTask);
        dataService.postData({index: index, task: newTask}).then(function(response){
            //put
            //dataService.addTask(listIndex, newTask)
            //$scope.lists[listIndex].tasks.push(response.data); to push that specific piece of code pushed
            console.log(response.status);
            $scope.data = response.data;
        })
    };
  // $http.get('/api/noob')
  //     .then(function(response){
  //         console.log("get: "+ response);
  //     });
  //   var newTask = {
  //       text: 'Do laundry.'
  //   };
  //   $http.post('/api/task', newTask)
  //       .then(function(response){
  //       console.log("post: " + response);
  //   });
});
