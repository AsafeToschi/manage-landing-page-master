document.addEventListener("DOMContentLoaded", function () {

    // Change navbar on scroll
    let navbar = document.getElementById("navbar");
    let scrollOffset = 20;

    function updateScrolledNavbar() {
        if (window.scrollY > scrollOffset) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    }

    updateScrolledNavbar();
    document.addEventListener("scroll", function (e) {
        updateScrolledNavbar();
    })


    // Mobile Navigation
    let mobileButton = navbar.querySelector(".mobile-navigation-button");
    let background = navbar.querySelector(".mobile-background");
    mobileButton.addEventListener("click", function () {
        navbar.classList.toggle("open");
    })
    
    background.addEventListener("click", function () {
        navbar.classList.remove("open");
    })

    window.addEventListener("resize", function () {
        if (window.innerWidth > 992) {
            navbar.classList.remove("open");
        }
    })

    // Form validation
    function addErrorMessage(element, message) {
        clearErrorMessage(element);
        element.classList.add("error");
        let elementWrapper = element.closest(".wrapper");

        // create error message span
        let errorElement = document.createElement("span");
        errorElement.classList.add("error-message"); 
        errorElement.innerText = message;

        elementWrapper.append(errorElement);
    };

    function clearErrorMessage(input) {
        input.classList.remove("error");
        let inputWrapper = input.closest(".wrapper");
        let errorElement = inputWrapper.querySelector(".error-message");

        if (!errorElement) return;
        errorElement.remove();
    }

    function showNewsletterSubscriptionMessage(form) {
        let successMessage = document.createElement("div");
        successMessage.innerText = "Thank you for subscribing!";
        form.replaceWith(successMessage);
    }

    let newsletterForm = document.getElementById("newsletter-form");
    let emailInput = newsletterForm.querySelector("input[name='email']");
    let submitButton = newsletterForm.querySelector("[type='submit'");

    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();

        let emailValue = emailInput.value;
        // using non-capturing group for study purposes, using capturing groups won't affect significantly the performance on this case
        let emailAddressRegex = /^(?:(?:[\w]+(?:\.[\w]+)*)|(?:\".+\"))@(?:(?:[\w]+\.)+[\w]{2,})$/;

        // named capturing group can be useful to test and extract some important data from the tested value
        /*
        let emailAddressRegex = /^(?:(?:[\w]+(?:\.[\w]+)*)|(?:\".+\"))@(?<domain>(?:[\w]+\.)+[\w]{2,})$/;
        let emailMatch = emailValue.match(emailAddressRegex);
        let domain = emailMatch.groups.domain;
        */


        if (!emailAddressRegex.test(emailValue)) {
            addErrorMessage(emailInput, "Email is required");
        } else if (!emailAddressRegex.test(emailValue)) {
            addErrorMessage(emailInput, "Please insert a valid email");
        }

        let formHasErros = newsletterForm.querySelectorAll(".error").length > 0;
        if (formHasErros) {
            submitButton.disabled = true;
            return;
        }
    
        showNewsletterSubscriptionMessage(newsletterForm);
    })

    emailInput.addEventListener("change", function (e) {
        console.log(e.target)
        clearErrorMessage(e.target);
        submitButton.disabled = false;
    })

    // Testimonial Slider
    class Slider {
        constructor(element) {
            this.slider = document.querySelector(element);
            this.wrapper = this.slider.querySelector(".slider-wrapper");
            this.slides = this.wrapper.querySelectorAll(".slide");
            this.totalSlides = this.slides.length;
            this.baseSlide = this.slides[0];
            this.slideWidth = this.baseSlide.offsetWidth;

            this.initializeSliderNavigation();
            this.setSlide(0);
            window.addEventListener("resize", function() {
                this.slideWidth = this.baseSlide.offsetWidth;
                this.updateSlidePosition();
            }.bind(this));

            this.loopInterval = 3000;
            this.autoplayLoop();
            this.stopAutoplayOnHover();
        }

        initializeSliderNavigation() {
            let navigation = document.createElement("div");
            navigation.classList.add("navigation");
            for (let i = 0; i < this.totalSlides; i++) {
                let slideNavButton = document.createElement("div");
                slideNavButton.classList.add("slider-nav-button");
                slideNavButton.dataset.slide = i;
                slideNavButton.addEventListener("click", function(e) {
                    let slideIndex = +e.target.dataset.slide
                    this.setSlide(slideIndex);

                    if(!this.loopIntervalId) return;
                    this.autoplayLoop(); // Reset slider loop
                }.bind(this));
                navigation.append(slideNavButton);
            }
            this.navigation = navigation;
            this.slider.append(navigation);
        }

        autoplayLoop() {
            clearInterval(this.loopIntervalId);
            this.loopIntervalId = setInterval(function () {
                let nextSlideIndex = +this.currentSlideIndex + 1;  
                if(nextSlideIndex > this.totalSlides - 1) {
                    nextSlideIndex = 0;
                }
                this.setSlide(nextSlideIndex);
            }.bind(this), this.loopInterval);
        }
        
        stopAutoplayOnHover() {
            if(!this.loopIntervalId) return;
            this.slider.addEventListener('mouseenter', function() {
                clearInterval(this.loopIntervalId);
            }.bind(this));

            this.slider.addEventListener('mouseleave', function() {
                this.autoplayLoop();
            }.bind(this));
        }

        setSlide(slideIndex) {
            if (slideIndex > (this.totalSlides - 1) || slideIndex < 0) return;
            
            this.currentSlideIndex = slideIndex;
            this.currentSlide = this.slides[this.currentSlideIndex];
            
            // slides state
            this.wrapper.querySelectorAll(".slide.active").forEach((slide) => {
                slide.classList.remove("active");
            })
            this.currentSlide.classList.add("active");

            this.updateNavigation();
            this.updateSlidePosition();
        }

        updateNavigation() {
            this.navigation.querySelectorAll(".slider-nav-button.active")
            .forEach((activeNavButton) => {
                activeNavButton.classList.remove("active");
            });

            let navButton = this.navigation.querySelector(`.slider-nav-button[data-slide="${this.currentSlideIndex}"]`);
            if (!navButton) return;
            navButton.classList.add("active");
        }

        updateSlidePosition() {
            let positionFromCenter = (document.body.clientWidth / 2) - (this.slideWidth / 2);
            let slidePosition = (this.currentSlide.offsetLeft * -1) + positionFromCenter;
            this.wrapper.style.transform = `translateX(${slidePosition}px)`;
        }
    }
    new Slider("#testimonials .testimonials-slider");
})
