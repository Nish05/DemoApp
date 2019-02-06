'use strict';

eventsApp.controller('EventController',
    function EventController($scope, eventData, $log, $anchorScroll, $routeParams, $route){

        $scope.sortorder= 'name';

        $scope.event = $route.current.locals.event;
        console.log($route.current.params.eventId);

        $scope.reload = function(){
          $route.reload();
        };
        // eventData.getEvent()
        //     .$promise
        //     .then(function(event) {$scope.event = event; console.log(event);})
        //     .catch(function(response) { console.log(response);});
        //     .
        // success(function(data, status, headers, config){
        //     $scope.event = data;
        // }).
        // error(function(data, status, headers, config){
        //     $log.warn(data, status, headers(), config);
        // })

        $scope.upVoteSession = function(session){
            session.upVoteCount++;
        };

        $scope.downVoteSession = function(session){
            session.upVoteCount--;
        };
        $scope.scrollToSession = function(){
            $anchorScroll();
        }
});