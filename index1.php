<?php
/*
//echo 'hi hi hi';

//$Fullintel;
//$no1 = "AWS";
//$no2 = 5;
//echo 'Fullintel';
//arrays
//1.indexed
$fruits = array("Naam","Neem");
//add array
$fruits[2] = 'Blue Berry';
$fruits[] = 'Black Berry';
// array declared in simple way
$no =[1 , 2 , 3];
 
//echo $fruits[1]; 
//echo count($fruits);
//var_dump($fruits);
//print_r($no);


//associateive arrays
$fruits = array("Naam"=>"Red","Neem"=>"Green");
$name = [1=>"Sarath", 2=>"Vineeth"];
//echo $name[2];

//multi dmentional arrays
$pets = array( array('cat', 'blue'), array('Dog' , 'white'));

//echo $pets[0][1];


//loops
//forloop

for ($i=0; $i <5 ; $i++) { 
//	echo $i;
//	echo '<br>';
}

//while loop

$i1=0;
while ($i1<5){
//	echo $i1;
	$i1++;
}


//do while

$i=0;
do {
//	echo $i++;
} while ($i<6);

//functions 

function two($name){
	echo "welcome : $name";
}
function add($no1 , $no2){ //adding two numbers
	echo "$no1"+"$no2";


}
add(5 , 5);

//styles
//lower case or underscore
$my_name = 1;
//upper case or pascal case
$MyName = 2;
//camel case 
$myName = 3; 


//functios

function one(){
	echo "hi";
}
function two($name){
	echo "$name";
}
function three($name){
	echo "welcome : $name";
	echo "<br>";
}

$n = 10;
$h = 10;//if you have stored the values means to enter the variable($n and $h)to print that value.
function add(&$no1 , &$no2){ //it's not work sometime means add & symbol
	echo "$no1"+"$no2";
}
add($h ,$n);

*/

function three($name){
	return "welcome : $name";
	echo "<br>";
}
echo three("Sarath")




?>
