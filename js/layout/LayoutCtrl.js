/**
 * Created by richard.smith on 16/10/2015.
 */
(function(){
    "use strict";
    angular
        .module('app')
        .controller('LayoutCtrl', LayoutCtrl);

        function LayoutCtrl(){
            var vm = this;
            vm.title = 'Blog Header'
        }
})();