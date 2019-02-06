'use strict';

eventsApp.controller('EditEventController',
    function EditEventController($scope, eventData){


    $scope.saveEvent = function(event, newEventForm){
            //console.log(newEventForm);
            if(newEventForm.$valid){
                //window.alert("event " + event.name + ' saved!');
                eventData.saveEvent(event)
                    .$promise
                    .then(function(response){console.log('success', response)},
                    function(response){console.log('error', response)});
            }
        };
        $scope.cancelEvent = function(){
            window.location = '/EventDetails.html';
        }
    }
);