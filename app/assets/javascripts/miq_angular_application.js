ManageIQ.angular.app = angular.module('ManageIQ', [
  'ui.bootstrap',
  'patternfly',
  'frapontillo.bootstrap-switch',
]);
miqHttpInject(ManageIQ.angular.app);

function miqHttpInject(angular_app) {
  angular_app.config(['$httpProvider', function($httpProvider) {
    $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');
  }]);

  return angular_app;
}

function miq_bootstrap(selector, app) {
  app = app || 'ManageIQ';

  return angular.bootstrap($(selector), [app], { strictDi: true });
}
