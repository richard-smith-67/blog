/**
 * Created by richard.smith on 16/10/2015.
 */
(function(){
    "use strict";
    angular.module('app')
           .config(function($stateProvider, $urlRouterProvider){

                $urlRouterProvider.otherwise('/about');

                $stateProvider
                    .state('about', {

                        url:'/about',
                        templateUrl:'partials/about.html',
                        controller: AboutCtrl,
                        controllerAs: 'about'

                    });

                $stateProvider
                    .state('posts', {

                        url:'/posts',
                        templateUrl:'partials/posts.html',
                        controller: PostsCtrl,
                        controllerAs: 'p'

                    });

                function AboutCtrl(){
                    var vm = this;

                    vm.title = 'About page';

                }

                function PostsCtrl(){
                    var vm = this;

                    vm.title = 'Posts page';

                    vm.posts = [
                        {
                            title: '1st post',
                            date: '10 Oct',
                            body: 'some body for the post'
                        },
                        {
                            title: '2nd post',
                            date: '10 Oct',
                            body: 'some body for the post'
                        }
                    ]
                }
            })
})();