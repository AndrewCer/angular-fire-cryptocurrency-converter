app.controller('CurrencyController', ['$scope', '$firebaseObject', function ($scope, $firebaseObject) {
  var bitcoinRef = new Firebase('https://publicdata-cryptocurrency.firebaseio.com');
  console.log($firebaseObject(bitcoinRef));
  $scope.bitcoinData = $firebaseObject(bitcoinRef)
  $scope.currencyChanger = function (input) {
    if (!input) {
      $scope.dogey = false;
      $scope.litey = false;
      $scope.bitty = false;
    }
    if (input === 'bitcoin') {
      $scope.chosenCurrency = 'BTC'
      $scope.dogey = false;
      $scope.litey = false;
      $scope.bitty = true;
    }
    if (input === 'dogecoin') {
      $scope.chosenCurrency = 'XDG'
      $scope.litey = false;
      $scope.bitty = false;
      $scope.dogey = true;
    }
    if (input === 'litecoin') {
      $scope.chosenCurrency = 'LTC'
      $scope.bitty = false;
      $scope.dogey = false;
      $scope.litey = true;
    }
  }
}])
