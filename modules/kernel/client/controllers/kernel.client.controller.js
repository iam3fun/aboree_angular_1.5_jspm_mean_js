class KernelController {
  constructor() {
    console.log('loads welcome controller');

    this.testVar = 'works, okey';
  }
}

KernelController.$inject = [];

export default KernelController;

//
//
//
// 'use strict';
//
// angular
//   .module('core')
//   .controller('HomeController', HomeController);
//
// HomeController.$inject = ['$scope', 'Authentication'];
//
// function HomeController($scope, Authentication) {
//   var vm = this;
//   vm.$scope = $scope;
//
//   init();
//
//   function init() {
//     vm.$scope.authentication = Authentication;
//
//     console.log(vm.$scope.authentication);
//   }
// }
