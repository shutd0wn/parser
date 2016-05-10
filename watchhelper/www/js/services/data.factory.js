angular.module('watchHelper').factory('filmFactory', ['$http', '$q', function ($http, $q) {
    var addFilmUrl = 'http://localhost:3000/addfilm/token=myapp';

    return {
        getFilmData : function (_url) {
            var deferred = $q.defer();

            $http.post(_url).then(
                function (response) {
                    deferred.resolve(response.data);
                },
                function (error) {
                    console.error('ERROR! ', error);
                }
            );

            return deferred.promise;
        },
        
        addFilm : function (_url) {
            var deferred = $q.defer();

            $http.post(addFilmUrl, {filmUrl : _url}).then(
                function (response) {
                    deferred.resolve(response.data);
                },
                function (error) {
                    console.error('ERROR! ', error);
                }
            );

            return deferred.promise;
        }
    }
}]);