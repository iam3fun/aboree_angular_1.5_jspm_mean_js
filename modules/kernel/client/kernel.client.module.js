import angular from 'angular';

import 'angular-resource';
import 'angular-animate';
import 'angular-messages';
import 'angular-ui-router';
import 'angular-file-upload';

import kernelRoutes from './config/kernel.client.routes';

import KernelController from './controllers/kernel.client.controller';

const kernel = angular.module('kernel', [
  'ngResource',
  'ngAnimate',
  'ngMessages',
  'ui.router',
  'ngFileUpload'
]);

kernel.config(kernelRoutes);

kernel.controller('KernelController', KernelController);

export default kernel
