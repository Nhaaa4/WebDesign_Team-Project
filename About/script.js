const profileHtml = document.getElementById('profile');
const icon = document.getElementById('icon');
profileHtml.style.display = 'none';

function clickProfile()
{
    profileHtml.style.display = 'block';
    icon.style.display = 'none';
}
function clickcloseProfile()
{
    profileHtml.style.display = 'none';
    icon.style.display = 'block';
}
