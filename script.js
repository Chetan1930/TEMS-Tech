function orderNow() {
    alert('Thank you for your order!');
}


new Swiper('.testimonial-slider', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    }
});


document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
});




document.getElementById("search-button").addEventListener("click", function () {
    hide.style.display="block";
    const query = document.getElementById("search-input").value.trim().toLowerCase();
    const resultsContainer = document.getElementById("search-results");


    // Filter results based on the query
    const results = data.filter(item => item.includes(query));

    // Display results
    resultsContainer.innerHTML = results.length
        ? `<ul>${results.map(item => `<li>${item}</li>`).join("")}</ul>`
        : "<p>No results found</p>";
});

