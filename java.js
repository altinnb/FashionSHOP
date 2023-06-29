function setNewImage()
{
    document.getElementById("img1").src ="images/tomford2.webp";
}
function setOldImage()
{
    document.getElementById("img1").src ="images/tomford1.webp";
}
function setNewImage1()
{
    document.getElementById("img2").src ="images/pantss1.webp";
}
function setOldImage1()
{
    document.getElementById("img2").src ="images/pantss2.webp";
}
function setNewImage2()
{
    document.getElementById("img3").src ="images/givenchy2.webp";
}
function setOldImage2()
{
    document.getElementById("img3").src ="images/givenchy1.webp";
}
function setNewImage3()
{
    document.getElementById("img4").src ="images/hoodie2.webp";
}
function setOldImage3()
{
    document.getElementById("img4").src ="images/hoodie1.webp";
}
function setNewImage4()
{
    document.getElementById("img5").src ="images/tshirt2.webp";
}
function setOldImage4()
{
    document.getElementById("img5").src ="images/tshirt1.webp";
}
function setNewImage5()
{
    document.getElementById("img6").src ="images/jacket2.webp";
}
function setOldImage5()
{
    document.getElementById("img6").src ="images/jacket1.webp";
}
function setNewImage6()
{
    document.getElementById("img7").src ="images/tshirt4.webp";
}
function setOldImage6()
{
    document.getElementById("img7").src ="images/tshirt3.webp";
}
function setNewImage7()
{
    document.getElementById("img8").src ="images/pants4.webp";
}
function setOldImage7()
{
    document.getElementById("img8").src ="images/pants3.webp";
}
function setNewImage8()
{
    document.getElementById("img9").src ="images/piana4.webp";
}
function setOldImage8()
{
    document.getElementById("img9").src ="images/piana3.webp";
}


        var slides = document.querySelectorAll('.slide');
        var dots = document.querySelectorAll('.dot');
        var index = 0;
        function changeSlide(){
            if(index>slides.length-1)
                index=0;
                
            if(index<0)
            index=slides.length-1;

            for(let i=0; i<slides.length; i++){
                slides[i].style.display="none";

                dots[i].classList.remove("active");
            }

            slides[index].style.display="block";
            dots[index].classList.add("active");
        }

        function prevSlide(n){
            index += n; 
            changeSlide();

        }
        function nextSlide(n){
            index += n;
            changeSlide();
        }
        changeSlide();