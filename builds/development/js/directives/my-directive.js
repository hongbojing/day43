angular
  .module('myApp')
  .directive('myDirective',myDirective);

function myDirective(){
  return {
    restrict:'A',
    replace:'true',
    scope:{
      myUrl:'@',
      myLinkText:'@',
      myClass:'@'
    },
    template:'<a href="{{myUrl}}" class="{{myClass}}">{{myLinkText}}</a>'
  }
}
