console.log("main");
var pageLinks = document.getElementsByClassName("page");
var aboutPage = document.getElementById("about");
var projectPage = document.getElementById("project");
var resumePage = document.getElementById("resume");
for (let  i = 0; i < pageLinks.length; i++)
{
    /*credit: https://stackoverflow.com/questions/1300242/passing-a-function-with-parameters-as-a-parameter 
    user Ferdinand Beyer*/
    pageLinks[i].addEventListener('click', function() {
        return displayFunction(i);
    });
}

function displayFunction(index)
{
    if (index == 0)
    {
        aboutPage.style.display =  'inline';
        projectPage.style.display = 'none';
        resumePage.style.display = 'none';
    }
    else if (index == 1)
    {
        aboutPage.style.display =  'none';
        projectPage.style.display = 'inline';
        resumePage.style.display = 'none';
    }
    else if (index == 2)
    {
        aboutPage.style.display =  'none';
        projectPage.style.display = 'none';
        resumePage.style.display = 'inline';
    }
}