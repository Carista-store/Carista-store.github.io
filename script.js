let slideIndex = 0;
showSlides();

// Hàm tự động chuyển đổi hình ảnh
function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    
    // Ẩn tất cả các slide
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }

    // Đặt lại chỉ số slide
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    

    // Xóa trạng thái "active" khỏi tất cả dấu chấm
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Hiển thị slide hiện tại và đặt dấu chấm "active"
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";

    // Tự động chuyển đổi sau 3 giây
    setTimeout(showSlides, 3000); // Thay đổi hình ảnh sau mỗi 3 giây
}

// Hàm điều khiển bằng tay
function plusSlides(n) {
    showSlideManually(slideIndex += n);
}

function currentSlide(n) {
    showSlideManually(slideIndex = n);
}

function showSlideManually(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}

    // Ẩn tất cả các slide
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }

    // Xóa trạng thái "active" khỏi các dấu chấm
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Hiển thị slide được chọn và đặt dấu chấm "active"
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}
