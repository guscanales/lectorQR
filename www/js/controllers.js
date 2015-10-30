angular.module('lectorQR.controllers',['ionic','ngCordova'])
	.controller("lectorCtrl", function($scope, $cordovaBarcodeScanner, $cordovaInAppBrowser)
	{
		$scope.leerCodigoQR = function()
		{
			$cordovaBarcodeScanner.scan().then 
			(
				function(imagenEscaneada)
				{
					alert(imagenEscaneada.text, "Lectura");
				}, 
				function(error)
				{
					alert("Error: " + error);
				}
			);

			
		};
		$scope.abrirQR = function()
		{
			$cordovaBarcodeScanner.scan().then 
			(
				function(imagenEscaneada)
				{
					var options = 
					{
				      	location: 'yes',
				      	clearcache: 'yes',
				      	toolbar: 'yes'
			    	};
					 $cordovaInAppBrowser.open(imagenEscaneada.text, '_blank', options)
				}, 
				function(error)
				{
					alert("Error: " + error);
				}
			);

			
		};		
	}
	);