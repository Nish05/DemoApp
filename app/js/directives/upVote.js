'use strict';

eventsApp.directive('upvote', function(){
    return {
        restrict: 'E',
        replace: true,
        templateUrl: '/templates/directives/upVote.html',
        scope: {
            upvote: "&",
            downvote: "&",
            count: "="
        }
    }
});