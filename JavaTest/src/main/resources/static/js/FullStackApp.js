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
        

            //capture salary on focus to be used later
			$scope.captureLast = function(tempSalary) {
				console.log(tempSalary);
				$scope.tempSalary = tempSalary;
			}

            //validate range , track by $index
            $scope.updateSalaryTo = function(salary, i) {
				console.log(i);
				
                //check if int or decimal
                if (salary % 1 != 0) {
                    alert("salary must be an integer (no decimals)");
                }
				if (salary > 500000 || salary < 10000) {
					alert("salary must be between $10,000 and $500,000")
					$scope.employees[i].salary = $scope.tempSalary; //reset to minimum
					
				}
			}

            //mock some data
            $scope.deptNames = [
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
			];
        
        /*$http.get('/departments/').success(function(data) {
        $scope.deptNames = data;
        })*/

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
