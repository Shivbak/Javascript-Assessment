// event listener to result button

var event = document.getElementById("result");
    event.addEventListener('click',calculate,false);

// function for calculating lower or higher tax for diifrent amount 

function tax_calculate(tax_amount,tax_rate)
{
    return (tax_amount * tax_rate)/100;
}

// function that called when user click button and calculate salary

function calculate()
{
    var usersalary = parseInt(document.getElementById("salary").value);
    
    var allowance = 11000;
    
    var first_texamount = usersalary - allowance;
    
    var basic_tax_amount = 32000;
    
    var low_rate = 20;
    
    var higher_rate = 40;
    
    
    // when user salary is less than or equal 11,000
    
            if(usersalary <= allowance)
                
            {
                
            document.getElementById("output").innerHTML = "Your Salary is : " + usersalary + " £" +'<br>' + "Your Tax is : 0 £";
                
            }
    
            else if(usersalary> allowance)
            
            {
            
    // when user salary is greater than 11,000 but less than or equal 32,000
                
                if(first_texamount <= basic_tax_amount)
                 {
                    var low_tax = tax_calculate(first_texamount,low_rate);
                    
                    var final_salary = usersalary - low_tax;
                    
                    document.getElementById("output").innerHTML = "Your Net Salary is : " + final_salary + " £" + '<br>'
                                                              +   "Your Allowence is : " + allowance + " £" + '<br>'   
                                                              +   " Your tax is : " + low_tax + " £"; 
                 }
            
    // when user salary is greater than 32,000            
                else
                 {
                    var second_texamount = first_texamount - basic_tax_amount;
                    
                    var higher_tax = tax_calculate(second_texamount,higher_rate);
                    
                    var fix_tax = tax_calculate(basic_tax_amount,low_rate);
                    
                    var total_tax = higher_tax + fix_tax;
                    
                    var net_salary = usersalary - total_tax;
                    
                    document.getElementById("output").innerHTML = "Your Net Salary is : " + net_salary + " £" + '<br>'
                                                                +   "Your Allowence is : " + allowance + " £" + '<br>' 
                                                                + "Your tax is : " + total_tax + " £";
                    
                 }
            }
    
}