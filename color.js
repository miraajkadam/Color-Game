var numSquares=6;
var colors= gererateRandonColors(6);
var squares=document.querySelectorAll(".square")
var pickedColor= pickColor();
var colorDisplay=document.getElementById("colorDisplay");
var messageDisplay=document.querySelector("#message");
var h1=document.querySelector("h1");
var resetButton=document.querySelector("#reset");
var easyBtn=document.querySelector("#easyBtn")
var hardBtn=document.querySelector("#hardBtn")

// resetButton.textContent="New Colors"

easyBtn.addEventListener("click",function()
{	
	hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    numSquares=3;
	colors=gererateRandonColors(numSquares);
	pickedColor=pickColor();
    colorDisplay.textContent=pickedColor;
    for(var i=0;i<squares.length;i++)
    {
        if(colors[i])
        {
            squares[i].style.backgroundColor=colors[i];
        }
        else
        {
            squares[i].style.display="none";
        }
    }

});

hardBtn.addEventListener("click",function()
{
	hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numSquares=6;
    colors=gererateRandonColors(numSquares);
	pickedColor=pickColor();
    colorDisplay.textContent=pickedColor;
    for(var i=0;i<squares.length;i++)
    {
        squares[i].style.backgroundColor=colors[i]; 
        squares[i].style.display="block";    
    }    
});

resetButton.addEventListener("click",function()
{    
    colors=gererateRandonColors(numSquares);  
    pickedColor=pickColor();
    colorDisplay.textContent=pickedColor;  
    messageDisplay.textContent=" ";  
    resetButton.textContent="NEW COLORS"
    for(var i=0;i<squares.length;i++)
    {
        squares[i].style.backgroundColor=colors[i];
    }
    h1.style.background="steelblue";

});

colorDisplay.textContent=pickedColor;

for(var i=0;i<squares.length;i++)
{
    squares[i].style.backgroundColor=colors[i];
    //add CLick listners to squares
    squares[i].addEventListener("click",function()
    {
        var clickedColor=this.style.backgroundColor;
        if(clickedColor===pickedColor)
        {   

            messageDisplay.textContent="Correct";
            changeColours(clickedColor);
            h1.style.backgroundColor=clickedColor;
            resetButton.textContent="Play Again?"
        }
        else
        {
            this.style.backgroundColor="#232323";
            messageDisplay.textContent="Try Again";
        }
    });
}

function changeColours(color)
{
    for(var i=0;i<squares.length;i++)
    {
        squares[i].style.background=color;
    }
}

function pickColor()
{
    var random=Math.floor(Math.random()* colors.length);
    return colors[random];
}

function gererateRandonColors(num)
{
    var arr=[];
    for(var i=0;i<num;i++)
    {   
        arr.push(randomColor());
    }
    return arr;
}

function randomColor()
{
    var r=Math.floor(Math.random() * 256);
    var g=Math.floor(Math.random() * 256);
    var b=Math.floor(Math.random() * 256);
    return("rgb("+r+", "+g+", "+b+")");
}