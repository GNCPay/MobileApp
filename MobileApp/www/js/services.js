angular.module('sideMenuApp.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('MenuService', function() {

  var menuItems = [
      { text: 'Trang chủ', iconClass: 'icon ion-home', link: 'home'},
      { text: 'Giới thiệu', iconClass: 'icon ion-cube', link: 'about'},
      { text: 'Đăng nhập', iconClass: 'icon ion-person', link: 'three' }
  ];

  return {
    all: function() {
      return menuItems;
    }
  }
});
