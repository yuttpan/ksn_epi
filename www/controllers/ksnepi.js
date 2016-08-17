angular.module('starter')

.controller('ksnEpiController',function ($scope,$state) {

console.log('Login Controller Start.');

   // $scope.txt_cid = "" ;
   
   $scope.form = {} ;
  
//var cid = $scope.form.txt_cid ;
    $scope.btnFind = function(){
   console.log($scope.form.txt_cid);
   var cid = $scope.form.txt_cid ;
       $state.go('ksn_epi', { 'cid':  cid} );

    }

      

    
})

.controller('ksnEpiResult',function($scope,$state,$http,$stateParams){
var var_cid = $stateParams.cid ;
    console.log(var_cid);
 $http.get('http://118.175.76.244:81/ksn_hdc_api/ksn_epi.php?cid='+ var_cid).success(function(result) {
    $scope.data = result;
$scope.personname= $scope.data[0].name ;


    });
});

