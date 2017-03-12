angular
  .module('demo-directive-app')
  .directive('sortableTableHeaderTwoCol', sortableTableHeaderTwoCol);

  function sortableTableHeaderTwoCol(){

    return {
      scope: {
        thisCol : "=thisCol",
        innerReverse : "=innerReverse",
        innerType : "=innerType"
      },
      templateUrl: 'templates/directives/sortable-two-col-header-cell.html'
    };
  };