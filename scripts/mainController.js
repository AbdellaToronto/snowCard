/**
 * Created by Della on 12/11/13.
 */

angular.module('card')
    .controller('mainCtrl', function ($scope, $timeout) {
        $scope.locationName = {};
        $scope.locationName['CMAS'] = "Childminding Monitoring Advisory & Support (CMAS)";

        $scope.sceneDisplayed = false;
        $scope.secondSceneDisplayed = false;

        $timeout(function(){
            $scope.sceneDisplayed = true;

            $timeout(function(){
                $scope.sceneDisplayed = false;

                $timeout(function(){
                    $scope.secondSceneDisplayed = true;

                    $timeout(function(){
                        $scope.secondSceneDisplayed = false;

                        $timeout(function() {
                            $scope.message = "A wonderful Holiday Season";
                            $scope.secondSceneDisplayed = true;

                        }, 2000)

                    },2000);

                },2000);

            },2000);

        },2000);

        $scope.message = "We would like to wish you, your family and friends";
    });