angular.module('Trello')
    .factory('dataService', function($http){
        var service = {};
        service.getAllData =  function(){
            return $http.get('/api/lists');
        };

        service.putData = function (listIndex, newTask){
            return $http.put('/api/lists' + listIndex, {text: newTask});
        };
        
        service.postData = function (obj){
            return $http.post('/api/lists', obj);
        };

        return service;
    })