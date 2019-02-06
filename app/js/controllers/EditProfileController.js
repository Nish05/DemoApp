'use strict';

eventsApp.controller('EditProfileController',
    function EditProfileController($scope, userData, gravatarUrlBuilder){
        $scope.user = [];

        $scope.getGravatarUrl = function(email){
            return gravatarUrlBuilder.buildGravatarUrl(email);
        }
        $scope.saveUser = function(user, profileForm){
            //console.log(newEventForm);
            if(profileForm.$valid){
                //window.alert("event " + event.name + ' saved!');
                userData.save(user)
                    .$promise.then(function(response){console.log('success', response)},
                    function(response){console.log('error', response)});
            }
        };
    });