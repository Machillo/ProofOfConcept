<?php

require_once('Car.php');
require_once('Account.php');

$car = new Car("904801", new Account("Kenneth Alvarado", "904801"));
$car->PrintDataCar();