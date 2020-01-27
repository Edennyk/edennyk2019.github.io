
function openPage(pageName,elmnt,color) {
  var i, tabcontent, tablinks;
  
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }
  document.getElementById(pageName).style.display = "block";
  elmnt.style.backgroundColor = color;
}

//default code
 window.onload = function () {
                startTab();
            };
 
function startTab()
{
 document.getElementById("defaultOpen").click();
}

function MetricCalculate() 
 {

    var gender = document.getElementById("gender").value;
    var weight = parseFloat(document.getElementById("weight").value);
    var height = parseFloat(document.getElementById("height").value);
    var age = parseFloat(document.getElementById("age").value);
    var mlevel = document.getElementById("mlevel").value;
	var Calories = 0;


    if(gender=="male") 
    
    //Metric-BMR = 66.5 + ( 13.75 x weight in kg ) + ( 5.003 x height in cm ) - ( 6.755 x age in years )
        {
            var val1 = 13.75 * weight;
            var val2 = 5.003 * height;
            var val3 = 6.755 * age;
            var result = 66.5 + val1 + val2 - val3;
            var val4 = mlevel;
        }

    else if (gender=="female")
    
    //Mertic: BMR = 655.1 + ( 9.563 x weight in kg ) + ( 1.850 x height in cm ) - ( 4.676 x age in years )
        {
            var val1 = 9.563 * weight;
            var val2 = 1.850 * height;
            var val3 = 4.676 * age;
            var result = 655.1 + val1 + val2 - val3;
            var val4 = mlevel;
        }


   switch(val4) 
      {
    	case "one":
      	Calories = result * 1.2;
				break;

        case "two":
      	Calories = result * 1.375;
      	break;

   		case "three":
	      Calories = result * 1.55;
        break;

    	case"four":
	       Calories = result * 1.725;
         break;
				 
		case "five":
 		    Calories = result * 1.9;
        break;
				
        }
       
        document.getElementById("bmr").innerHTML = result.toFixed(2);
        document.getElementById("calories").innerHTML = Calories.toFixed(2); 
 }
 function ImperialCalculate()
  {

    var gender = document.getElementById("gender").value;
    var wstone = parseFloat(document.getElementById("wstone").value);
    var wpound = parseFloat(document.getElementById("wpound").value);
    var hfeet = parseFloat(document.getElementById("hfeet").value);
    var hinch = parseFloat(document.getElementById("hinch").value);
    var agen = parseFloat(document.getElementById("agen").value);
    var activelevel = document.getElementById("activelevel").value;
	var Caloriesn = 0;


    if(gender=="male") 
    
    //imperial BMR = 66 + ( 6.2 x weight in pounds ) + ( 12.7 x height in inches ) - ( 6.76 x age in years )
        {
            var valw = 6.2 * (wstone * 14 ) + wpound;
            var valh = 12.7 *(hfeet * 12) + hinch;
            var valag = 6.76 * agen;
            var resultn = 66 + valw + valh - valag;
            var valal = activelevel;
        }

    else if (gender=="female")
    
    //imperial: BMR = 655.1 + ( 4.35 x weight in pounds ) + ( 4.7 x height in inches ) - ( 4.7 x age in years )
        {
            var valw = 4.35 * (wstone * 14) + wpound;
            var valh = 4.7 * (hfeet * 12) + hinch;
            var valag = 4.7 * agen;
            var resultn = 655.1 + valw + valh - valag;
            var valal = activelevel;
        }


   switch(valal) {
    	case "1":
      	Caloriesn = resultn * 1.2;
				break;

      case "2":
      	Caloriesn = resultn * 1.375;
      	break;

   		case "3":
	      Caloriesn = resultn * 1.55;
        break;

    	case"4":
	       Caloriesn = resultn * 1.725;
         break;
				 
		case "5":
 		    Caloriesn = resultn * 1.9;
        break;
       }
       document.getElementById("bmr2").innerHTML = resultn.toFixed(2);
       document.getElementById("calories2").innerHTML = Caloriesn.toFixed(2); 
      
}
