app.controller('CurrencyController', ['$scope', '$firebaseObject', function ($scope, $firebaseObject) {
  var bitcoinRef = new Firebase('https://publicdata-cryptocurrency.firebaseio.com/bitcoin');
  $scope.bitcoinData = $firebaseObject(bitcoinRef)
}])
