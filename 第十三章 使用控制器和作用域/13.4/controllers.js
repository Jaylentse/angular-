/**
 * Created by Jaylen on 16/1/9.
 */
var app = angular.module('exampleApp4',[]);

app.controller('topLevelCtrl',function($scope){


    /*直接在定义域上定义属性
    * ng-model指令会隐式创建并覆盖父控制器*/

    //$scope.dataValue = 'Hello, Jaylen';

    /*使用一个对象作为中介者
    * 可以确保ng-model会对在父作用域上定义的数据值进行更新*/

    $scope.data = {
        dataValue: 'Hello, Jaylen'
    }
    $scope.reverseText = function(){
        $scope.data.dataValue = $scope.data.dataValue.split('').reverse().join('');
    };

    $scope.changeCase = function(){
        var result = [];
        angular.forEach($scope.data.dataValue.split(''),function(char, index){
            result.push(index%2==1?char.toUpperCase():char.toLowerCase());
        });
        $scope.data.dataValue = result.join('');
    };
});

app.controller('firstChildCtrl',function($scope){
    $scope.changeCase = function(){
        $scope.data.dataValue = $scope.data.dataValue.toUpperCase();
    };
});
app.controller('secondChildCtrl',function($scope){
    $scope.changeCase = function(){
        $scope.data.dataValue = $scope.data.dataValue.toLowerCase();
    };
    $scope.shiftFour = function(){
        var result = [];
        angular.forEach($scope.data.dataValue.split(''),function(char, index){
            result.push(index<4?char.toUpperCase():char);
        });
        $scope.data.dataValue = result.join('');
    }
});
