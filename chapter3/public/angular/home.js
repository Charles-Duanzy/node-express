/**
 * Created by Administrator on 2017/1/5.
 */
angular.module('myApp', [])
    .controller('homeCtrl',function ($scope,$http) {
        /*提交方法*/
        $scope.submit = function () {
            var user = $scope.user;
            console.log(user);
            $http({
                method:'POST',
                url:'/submitForm',
                params:user
            })
        }
    });