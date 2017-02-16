angular.module('FullStackApp', [])
  .controller('employees', function($scope, $http) {

      $scope.employees = [
				{
					id: 1,
					firstName: "Jerry",
					lastName: "Relunia",
					salary: 55000,
					department: 
						{name: "Public Relations"}
					
				},
				{
					id: 2,
					firstName: "Jono",
					lastName: "Relunia",
					salary: 60000,
					department: 
						{name: "Human Resources"}
					
					
				},
				{
					id:3,
					firstName: "Joseph",
					lastName: "Relunia",
					salary: 70000,
					department: 
						{name: "Accounting"}
					
				}
			];

            //validate range , track by $index
            $scope.employees.updateSalaryTo = function(salary, i) {
				console.log(i);
				console.log(typeof(salary))
				if (salary > 50000 || salary < 10000) {
					alert("salary must be between $10,000 and $50,000")
					$scope.employees[i].salary = 10000; //reset to minimum
					
				}
			}
        /*$http.get('/employees/').success(function(data) {
            $scope.employees = data;
        })*/
    })
  .controller('departments', function($scope, $http) {

      $scope.departments = [
				{
					name: "Human Resources"
				},
				{
					name: "Accounting"
				},
				{
					name: "Public Relations"
				},
				{
					name: "Accounts Payable"
				},
				{
					name: "Accounts Receivable"
				}
			]

        /*$http.get('/departments/').success(function(data) {
        $scope.departments = data;
        })*/
    });
