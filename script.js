$(function() {
    $('.logo').css('opacity', 1);
    $('#btn-clarity').click(function(){
        setTimeout(function() {
            $('.banner-left').animate({ right: '10%' }, 500); // Move to the right
            $('.banner-right').animate({ left: '10%' }, 500); // Move to the left
        }, 2000);
    });
    const textElement = document.getElementById('speach-macei');
const text = "Dear One-World citizen, this is your refuge. Your loyalty is a credit to you. I know your every thought, your every desire, your every dream... and your local F8 agent.";
const textArray = text.split("");
let index = 0;

function writeText() {
    textElement.textContent += textArray[index];

    if (index < textArray.length - 1) {
        index++;
        setTimeout(writeText, 50); 
    }
}

writeText();
});