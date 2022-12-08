var slideIndex = 1;
 showSlides(slideIndex);
function plusSlides(n) {
   showSlides(slideIndex += n);
 }
function currentSlide(n) {
   showSlides(slideIndex = n);
 }
function showSlides(n) {
   var i;
   var slides = document.getElementsByClassName("mySlides");
   var dots = document.getElementsByClassName("dot");
   if (n > slides.length) {slideIndex = 1}
   if (n < 1) {slideIndex = slides.length}
   for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";
   }
   for (i = 0; i < dots.length; i++) {
       dots[i].className = dots[i].className.replace(" active", "");
   }
   slides[slideIndex-1].style.display = "block";
   dots[slideIndex-1].className += " active";
 }
/* giải thick javascript 
đầu tiên đặt slideindex = 1 ( ảnh đầu tiên);
sau đó gọi showdiv để hiển thị ảnh đầu tiên;
người dùng nhấn vào 1 trong các nút gọi plusdiv;
hàm plusidv trừ hoặc thêm 1 slideindex;
hàm showdiv ẩn tất cả các phầ tử có tên lớp 'myslide' và hiển thị các phần tử có slideindex đã cho;
nếu slideindex cao hơn số phần tử thì slideindex dc đặt thành 0 ;
nếu slideindex nhỏ hơn 1 thì nó dc đặt thành số phần tử
*/

function discover() {
    location.assign()
}