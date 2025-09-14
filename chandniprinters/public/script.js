const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    // Animation for hamburger
    hamburger.classList.toggle('toggle');
});
const serviceItems = document.querySelectorAll('.service-list ul li');
const serviceImg = document.getElementById('service-img');
const serviceDesc = document.getElementById('service-desc');

serviceItems.forEach(item => {
    item.addEventListener('click', () => {
        // Remove active class
        serviceItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');

        // Update image and description
        serviceImg.style.opacity = 0;
        serviceDesc.style.opacity = 0;

        setTimeout(() => {
            serviceImg.src = `../assets/images/${item.dataset.img}`;
            serviceDesc.textContent = item.dataset.desc;
            serviceImg.style.opacity = 1;
            serviceDesc.style.opacity = 1;
        }, 200);
    });
});
const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", function(e){
    e.preventDefault();
    alert("Thank you for contacting us! We will get back to you soon.");
    contactForm.reset();
});
