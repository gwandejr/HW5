/* First make sure the page is ready to accept javascript */
    /* runs javascript once all html elements are loaded on the page */
$(document).ready(function()
    { 
    /* Changes the format of the spin button */
    function modifySpinButton()
        {
            $("#spin").addClass("modifySpin");
            $("#spin").text("SPIN NOW");
        }
    
    /* Restores the default format of the spin button */
    function restoreSpinButton()
        {
            $("#spin").removeClass("modifySpin");
            $("#spin").text("Spin Again");
        }
    
    /* Changes the format of the user message */
    function modifyMsg()
        {
            $("#msg").addClass("won");
        }
    
    /* Restores the format of the user message */
    function restoreMsg()
        {
            $("#msg").removeClass("won");
        }
    
    /* Gets a random number from 0 to 9 */
    function getRandomNum()
        {
            var randomNum = Math.floor(Math.random() * 10);
            return randomNum;
        }
    
    /* Gets a random number between 1 and 3 out of 0-9 possible numbers */
    /*  -if the number is 0 or >=4, it generates another number until it gets a 1,2,or 3 */
    /* The above step iterates 10 times */
    function getClassNumber()
        {
            for(var counter = 1; counter <= 10; counter++)
               {
                    var classNumber = "";
                    while(true)
                    {
                        var Number = getRandomNum()
                        if((Number == 0) || (Number >= 4))
                            {
                                continue;
                            }
                        if(Number == 1)
                            {
                                classNumber = "one";
                                break;
                            }
                        if(Number == 2)
                            {
                                classNumber = "two";
                                break;
                            }
                        if(Number == 3)
                            {
                                classNumber = "three";
                                break;
                            }  
                    }
                    return classNumber;
                }
        }
    
    /* Reloads the current page */
    function reloadPage()
        {
            location.reload();
        }
    
    /* Fades out game elements and fades in final message */
    function endGame()
        {
            var endMsg = "Thanks for Playing, Goodbye"
            $(".headers").fadeOut(2000);
            $(".text_boxes").fadeOut(2000);
            $("#spin").fadeOut(2000);
            $("#end_game").fadeOut(2000);
            $("#msg").addClass("end_the_game");
            $("#msg").text(endMsg);
            $("#msg").fadeIn(2000);
        }
    
    /* When user moves the mouse over the spin button changes the format */
    $("#spin").on("mouseover", function()
        {
            modifySpinButton();
        });
    
    /* When user moves mouse away from the spin button changes the format */
    $("#spin").on("mouseleave", function()
        {
            restoreSpinButton();
        });
    
    /* When user clicks the spin button */
    $("#spin").on("click", function()
        {  
            /* Removes the class from each text box */
            $("input").each(function()
                {
                    $(this).removeClass("one");
                    $(this).removeClass("two");
                    $(this).removeClass("three");
                });
            
            /* Adds a class to each text box based on the random number generated */
            $("input").each(function()
                {   
                    var randomResult = getClassNumber();
                    $(this).addClass(randomResult); 
                });
            
            /* Gives user a message based on if text box color matches */
            var msgWon = "Congratulations, you won!"
            var msgLost = "Sorry, try again."
            
            if(($("#box1").css("background-color") === $("#box2").css("background-color"))
               && ($("#box1").css("background-color") === $("#box3").css("background-color")))
                {
                    $("#msg").addClass("won")
                    $("#msg").text(msgWon);
                }
            else
                {
                    $("#msg").removeClass("won")
                    $("#msg").text(msgLost);
                }
        });
        
        /* When user clicks the start over button */
        $("#start_over").on("click", function()
            {
                reloadPage();
            });
    
        /* When user clicks the end game button */
        $("#end_game").on("click", function()
            {
                endGame();  
            });   
    });