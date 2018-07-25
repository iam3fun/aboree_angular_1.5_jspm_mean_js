/**
 * Start by defining the main module and adding the module dependencies
 */

import angular from 'angular';
import router from 'lookfirst/oclazyload-systemjs-router';
import futureRoutes from '../config/feauture.routes.json!';

import kernel from '../kernel.client.module';

import AuthInterceptor from '../services/interceptors/auth.interceptor.client.service.js'

const aboree = angular.module('network', [
  kernel.name
]);

aboree.config(router(aboree, futureRoutes));
aboree.service('authInterceptor', AuthInterceptor);

// Setting HTML5 Location Mode
aboree.config(['$locationProvider', '$httpProvider', '$qProvider',
  function ($locationProvider, $httpProvider, $qProvider) {
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    }).hashPrefix('!');

    $httpProvider.useApplyAsync(true);
    $httpProvider.interceptors.push('authInterceptor');

    $qProvider.errorOnUnhandledRejections(false);
  }
]);

// aboree.run(function ($rootScope, $state, Authentication) {
//
//   // Check authentication before changing state
//   $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
//     if (toState.data && toState.data.roles && toState.data.roles.length > 0) {
//       var allowed = false;
//       toState.data.roles.forEach(function (role) {
//         if (Authentication.user.roles !== undefined && Authentication.user.roles.indexOf(role) !== -1) {
//           allowed = true;
//           return true;
//         }
//       });
//
//       if (!allowed) {
//         event.preventDefault();
//         if (Authentication.user !== undefined && typeof Authentication.user === 'object') {
//           $state.go('forbidden');
//         } else {
//           $state.go('authentication.signin').then(function () {
//             storePreviousState(toState, toParams);
//           });
//         }
//       }
//     }
//   });
//
//   // Record previous state
//   $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
//     storePreviousState(fromState, fromParams);
//   });
//
//   // Store previous state
//   function storePreviousState(state, params) {
//     // only store this state if it shouldn't be ignored
//     if (!state.data || !state.data.ignoreState) {
//       $state.previous = {
//         state: state,
//         params: params,
//         href: $state.href(state, params)
//       };
//     }
//   }
// });

//Then define the init function for starting up the application
angular.element(document).ready(function () {
  //Fixing facebook bug with redirect
  if (window.location.hash && window.location.hash === '#_=_') {
    if (window.history && history.pushState) {
      window.history.pushState('', document.title, window.location.pathname);
    } else {
      // Prevent scrolling by storing the page's current scroll offset
      var scroll = {
        top: document.body.scrollTop,
        left: document.body.scrollLeft
      };
      window.location.hash = '';
      // Restore the scroll offset, should be flicker free
      document.body.scrollTop = scroll.top;
      document.body.scrollLeft = scroll.left;
    }
  }

  //Then init the app
  return angular.bootstrap(document, [aboree.name]);
});

export {aboree}
