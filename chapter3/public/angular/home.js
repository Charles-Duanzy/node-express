/**
 * Created by Administrator on 2017/1/5.
 */
var app = angular.module('myApp', [])
    .controller('homeCtrl',function ($scope,$http) {
        $scope.aaa = 111;
        /*提交方法*/
        $scope.submit = function () {
            var user = $scope.user;
            console.log(user);
            $http({
                method:'POST',
                url:'/submitForm',
                // params:user
                data:user
            })
        };

        /*请求方法*/
        $scope.getData = function () {
            $http({
                method:'GET',
                url:'/getSomeData'
            }).success(function (res) {
                console.log(res);
            })
        }
    });

app.config(['$interpolateProvider', function($interpolateProvider) {
    $interpolateProvider.startSymbol('{$');
    $interpolateProvider.endSymbol('$}');
}]);

