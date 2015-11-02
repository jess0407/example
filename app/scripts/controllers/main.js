'use strict';

/**
 * @ngdoc function
 * @name angularmaterialApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularmaterialApp
 */
angular.module('angularmaterialApp')
  .controller('MainCtrl', function ($scope) {

    $scope.breakdowns = {
      environment: [
        {
          label: 'Domain',
          value: 'domain'
        },
        {
          label: 'SSP',
          value: 'ssp'
        },
        {
          label: 'Creative size',
          value: 'creative_size'
        },
        {
          label: 'Deal ID',
          value: 'deal_id'
        }
      ],
      structure: [
        {
          label: 'Line Item',
          value: 'line_item'
        },
        {
          label: 'Ad Unit',
          value: 'ad_unit'
        },
        {
          label: 'Creative',
          value: 'creative'
        },
        {
          label: 'Creative role',
          value: 'creative_role'
        }
      ],
      time: [
        {
          checked: true,
          label: 'None'
        },
        {
          label: 'Daily',
          value: 'daily'
        },
        {
          label: 'Monthly',
          value: 'monthly'
        },
        {
          label: 'Yearly',
          value: 'yearly'
        }
      ],
      video: [
        {
          label: 'Video',
          value: 'video'
        }
      ]
    };

    $scope.timeBreakdowns = $scope.breakdowns.time;
    $scope.otherBreakdowns = $scope.breakdowns.environment.concat($scope.breakdowns.structure).concat($scope.breakdowns.video);
    $scope.selectedMatrics = [];
    $scope.addTimeMatric = function (matric) {
        angular.forEach($scope.timeBreakdowns, function (timeBreakdown) {
            if (timeBreakdown.selected) {
                var index = $scope.selectedMatrics.findIndex(function (element) {
                    return element.label === timeBreakdown.label;
                });
                // TODO: looking into it.
                if (index > -1) {
                  $scope.selectedMatrics.splice(index, 1);
                }
                timeBreakdown.selected = false;
            }
        });
        $scope.selectedMatrics.push(matric);
        matric.selected = true;
    };

    $scope.addMatric = function (matric) {
        $scope.selectedMatrics.push(matric);
        matric.selected = true;
    };


    $scope.$watch('selectedMatrics', function (nv, ov) {
        // when user try to enter random selection
        if (typeof nv[nv.length-1] !== 'object') {
          nv.pop();

        } else {
          // removing a chip
          if (nv.length < ov.length) {
             var removedBreakdown = ov[ov.length - 1],
             index = $scope.otherBreakdowns.findIndex(function (element) {
                 return element.label === removedBreakdown.label;
             });

             if (index > -1) {
                $scope.otherBreakdowns[index].selected = false;
             } else {
                 index = $scope.timeBreakdowns.findIndex(function (element) {
                     return element.label === removedBreakdown.label;
                 });
                 $scope.timeBreakdowns[index].selected = false;
             }
          }
        }


    }, true);

  });
