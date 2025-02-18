<?php
  
$annualExpenses = [
    "vacations" => 1000,
    "carRepairs" => 1000,    
];

$monthlyExpenses = [
    "rent" => 1500,
    "utilities" => 200,
    "healthInsurance" => 200
];

$grossSalary = 48150;
$socialSecurity = $grossSalary * .062;

$incomeSegments = [[9700, .88], [29775, .78], [8675, .76]];

// Annual salary after taxes
$netIncome = ($incomeSegments[0][0] * $incomeSegments[0][1]) + ($incomeSegments[1][0] * $incomeSegments[1][1]) + ($incomeSegments[2][0] * $incomeSegments[2][1]);

// Social security tax
$annualIncome = $netIncome - $socialSecurity;
echo "Total after social security: $annualIncome\n";

// Annual expenses
$annualIncome -= $annualExpenses["vacations"];
$annualIncome -= $annualExpenses["carRepairs"];
echo "Total after annual expenses: $annualIncome\n";

// Monthly income
$monthlyIncome = $annualIncome / 12;
echo "Monthly income: $monthlyIncome\n";

// Monthly income after expenses
$monthlyIncome -= $monthlyExpenses["rent"];
$monthlyIncome -= $monthlyExpenses["utilities"];
$monthlyIncome -= $monthlyExpenses["healthInsurance"];
echo "Monthly income after expenses: $monthlyIncome\n";

// Weekly income
$weeklyIncome = $monthlyIncome / 4.33;
echo "Weekly income: $weeklyIncome\n";

// Weekly expenses
$weeklyExpenses = [
  "gas" => 25, 
  "food" => 90,
  "entertainment" => 47
  ];

  // Weekly income after expenses
$weeklyIncome -= $weeklyIncome["gas"];
$weeklyIncome -= $weeklyIncome["food"];
$weeklyIncome -= $weeklyIncome["entertainment"];
echo "Weekly income after expenses: $weeklyIncome\n";

// Annual savings
$annualSavings = $weeklyIncome * 52;
echo "Annual savings: $annualSavings\n";
