const profileHtml = document.getElementById('profile');
let click = true;
function clickProfile()
{
    if (click == true)
    {
        profileHtml.style.display = 'none';
        click = false;
    }else if(click == false)
    {
        profileHtml.style.display = 'block';
        click = true;
    }
}
