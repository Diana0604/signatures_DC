const constants = require('./constants');

let displayDiv = document.getElementById('display');
const fs = require('fs');

let html = '<p style="font-family: arial black; font-size: 18px; color: #00a29e; line-height: 5px;">FULL_NAME</p>\n<p style="font-family: arial; color: #00a29e; font-size: 16px; line-height: 5px;">COMPANY_ROLE</p>\n<p style="font-family: arial; line-height: 5px; color: #00a29e; font-size: 16px;">PHONE_NUMBER</p>\n<p style="line-height: 1px;"><a style="color: #00a29e; font-family: arial; text-decoration: none;" href="mailto:EMAIL">EMAIL</a></p>\n<p><a href="http://www.diversecity.org.uk/"><img style="width: 200px; height: 44px;" src="https://diversecity.org.uk/wp-content/uploads/2021/06/Diverse-City-Horizontal.png" alt="Diverse City logo written in a bold font in purple to teal-coloured gradient." width="206" height="44" /></a></p>\n<p><a style="padding-top: 10px;" href="https://platform.nationalfundingscheme.org/EXTR003?charity=EXTR003#.Xzv2oy2ZMWo"><img src="https://diversecity.org.uk/wp-content/uploads/2021/06/Diverse-City-Values.gif" alt="GIF: Purple watercolour background and words written in white bold font: Creativity, Optimism, Justice Collaboration. Support our movement, click here to donate today." width="190px" /></a></p>\n<p style="font-family: arial black; color: #443483; font-size: 12px;">Our doors are still wide open. Get in touch for support, play and connection.</p>\n<p><a style="color: #00a29e; font-size: 14px; text-decoration: underline; font-family: arial black; line-height: 5px;" href="http://www.diversecity.org.uk/newsletter/">Click here to sign up to our newsletter.</a></p>\n<p><a style="padding-right: 5px;" href="https://www.instagram.com/diverse_city1"><img src="http://www.diversecity.org.uk/wp-content/uploads/2018/08/Diverse-City-Instagram.png" width="40px" /></a> <a style="padding-right: 5px;" href="https://twitter.com/Diversecity1"><img src="http://www.diversecity.org.uk/wp-content/uploads/2018/08/Diverse-City-Twitter.png" width="40px" /></a> <a style="padding-right: 5px;" href="https://www.facebook.com/Diversecity1"><img src="http://www.diversecity.org.uk/wp-content/uploads/2018/08/Diverse-City-Facebook.png" width="40px" /></a> <a style="padding-right: 5px;" href="https://www.youtube.com/channel/UCyu13TjBToC_Or3sQsN0GAw"><img src="http://www.diversecity.org.uk/wp-content/uploads/2018/08/Diverse-City-Youtube.png" width="40px" /></a></p>\n<p style="font-family: arial; font-size: 10px;">Charity Number: 1176855</p>\n<p style="font-family: arial black; font-size: 12px; line-height: 35px;"><a href="http://www.extraordinarybodies.org.uk"><img style="float: left; padding: 0px 10px 0px 0px;" src="https://www.extraordinarybodies.org.uk/wp-content/uploads/2017/04/EB-Logo-2017-e1496138589336.jpg" alt="Extraordinary Bodies logo: black rounded font and soft red circle on the left." width="130px" /></a> We run Extraordinary Bodies, the UK\'s leading integrated circus company, in collaboration with Cirque Bijou.</p>';
/*

const filename = './src/html.txt';
fs.readFile(filename,  'utf8', function(err, data) {
    if (err) throw err;
    html = data;
});
*/


function display(display_type, elements){
    new_html = html.replaceAll('FULL_NAME',elements[0].value).replaceAll('COMPANY_ROLE',elements[1].value).replaceAll('PHONE_NUMBER', elements[2].value).replaceAll('EMAIL',elements[3].value);
    if(display_type == constants.HTML){
        displayDiv.innerText = new_html;
    }
    if(display_type == constants.RENDERED){
        displayDiv.innerHTML = new_html;
        console.log('rendered');
    }
}

module.exports.display = display;