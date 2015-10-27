import 'angular';
import 'angular-ui-router';
import HomeController from "./components/home/homeController";

export default angular.module('app', ['ui.router'])
    .config(['$stateProvider', '$urlRouterProvider',
        ($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider) => {
            $urlRouterProvider.otherwise('/');
            $stateProvider
                .state('home', {
                    url: '/',
                    controller: HomeController,
                    controllerAs: 'vm',
                    templateUrl: 'components/home/homeView.html',
                    data: {
                        requiresLogin: false
                    }
                });
        }]
    )
    .name;
