var app=angular.module("myApp",[]);

app.controller
(
    "myCtr" , function ($scope) //$scope is a keyword
    {
        $scope.names=['Habib','Safa','Souha','Nada','Sana'];
        $scope.degree='Engeneer';
    }
);