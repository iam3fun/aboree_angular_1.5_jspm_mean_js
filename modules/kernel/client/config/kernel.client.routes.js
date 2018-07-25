let kernelRoutes;

kernelRoutes = ($stateProvider, $urlRouterProvider) => {

  $stateProvider
    .state('welcome', {
      url: '/',
      templateUrl: 'modules/kernel/client/views/welcome.client.view.html',
      controller: "KernelController",
      controllerAs: "welcome"
    })
    .state('not-found', {
      url: '/not-found',
      templateUrl: 'modules/kernel/client/views/404.client.view.html',
      data: {
        ignoreState: true
      }
    })
    .state('bad-request', {
      url: '/bad-request',
      templateUrl: 'modules/kernel/client/views/400.client.view.html',
      data: {
        ignoreState: true
      }
    })
    .state('forbidden', {
      url: '/forbidden',
      templateUrl: 'modules/kernel/client/views/403.client.view.html',
      data: {
        ignoreState: true
      }
    });

  // Redirect to 404 when route not found
  $urlRouterProvider.otherwise(function ($injector, $location) {
    $injector.get('$state').transitionTo('not-found', null, {
      location: false
    });
  });
};

export default kernelRoutes;
