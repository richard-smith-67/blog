/**
 * Created by richard.smith on 16/10/2015.
 */
(function(){
    "use strict";
    angular.module('app')
           .config(function($stateProvider, $urlRouterProvider){

                $urlRouterProvider.otherwise('/login');

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

                    $stateProvider
                    .state('login', {

                        url:'/login',
                        templateUrl:'partials/login.html',
                        controller: LoginCtrl,
                        controllerAs: 'login'

                    });

                function LoginCtrl(){
                    var vm = this;
                    vm.submit = submit;

                    function submit(){
                        console.log(vm.user.email + ' ' + vm.user.password);
                    }
                }

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