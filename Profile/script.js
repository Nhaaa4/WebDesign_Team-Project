const profileHtml = document.getElementById('profile');
let click = true;
function clickProfile()
{
    if (click == true)
    {
        profileHtml.parentNode.removeChild(profileHtml);
        click = false;
    }else if(click == false)
    {
        click = true;
    }
}
