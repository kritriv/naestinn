<?php $current_page_url = "https://www.naestinn.com/contact-us";
$title = 'Næstinn | Contact Us';
include_once 'includes/header.php'; ?>

<section class="ai-tools-section section-space-top home-7-section-top-border">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-8">
                <div class="text-center">
                    <span class="rounded-1 bg-info-20 bg-opacity-2 clr-white fs-12 fw-bold px-4 py-2 d-inline-block mb-4 fadeIn_bottom">Contact
                        Us</span>
                    <h3 class="clr-neutral-90 fw-bold animate-line-3d">Connect for Custom Solutions</h3>
                </div>
            </div>
        </div>
        <div class="mt-10">
            <div class="row gy-4">
                <div class="col-lg-5">
                    <div class="py-sm-12 py-8 px-sm-8 px-5 rounded-5">
                        <h4 class="h4 mb-2 clr-neutral-90 fw-bold">Get in Touch with us!</h4>
                        <form id="contact-form" method="POST">
                            <div class="mt-8">
                                <label class="clr-neutral-80 mb-2">Full Name</label>
                                <input type="text" name="name" class="form-control border border-neutral-17 clr-neutral-90 :focus-clr-current rounded-2 py-4 px-4 bg-transparent placeholder-50 focus-bg-none" placeholder="Enter your name">
                            </div>
                            <div class="mt-8">
                                <label class="clr-neutral-80 mb-2">Email</label>
                                <input type="email" name="email" class="form-control border border-neutral-17 clr-neutral-90 :focus-clr-current rounded-2 py-4 px-4 bg-transparent placeholder-50 focus-bg-none" placeholder="Enter your email">
                            </div>
                            <div class="mt-8">
                                <label class="clr-neutral-80 mb-2">Mobile No.</label>
                                <input type="number" name="mobile" class="form-control border border-neutral-17 clr-neutral-90 :focus-clr-current rounded-2 py-4 px-4 bg-transparent placeholder-50 focus-bg-none" placeholder="Enter your Mobile no.">
                            </div>
                            <div class="mt-8">
                                <label class="clr-neutral-80 mb-2" for="service">Select one Service</label>
                                <select name="service" class="form-control border border-neutral-17 clr-neutral-90 :focus-clr-current rounded-2 py-4 px-4 bg-transparent placeholder-50 focus-bg-none">
                                    <option class="text-dark" value="Select Service">Services</option>
                                    <option class="text-dark" value="Software Development">Software Development</option>
                                    <option class="text-dark" value="Custom Software">Custom Software</option>
                                    <option class="text-dark" value="App Development">App Development</option>
                                    <option class="text-dark" value="Web Development">Web Development</option>
                                    <option class="text-dark" value="AIML Development">AIML Development</option>
                                    <option class="text-dark" value="Designing (UI/UX : Graphic)">Designing (UI/UX : Graphic)</option>
                                    <option class="text-dark" value="Digital Marketing">Digital Marketing</option>
                                    <option class="text-dark" value="Other">Other</option>
                                </select>

                            </div>
                            <div class="mt-8">
                                <label class="clr-neutral-80 mb-2">Message</label>
                                <textarea type="text" name="message" class="form-control border border-neutral-17 clr-neutral-90 :focus-clr-current rounded-2 py-4 px-4 bg-transparent placeholder-50 focus-bg-none" placeholder="Type Message or Project Requirement here..."></textarea>
                            </div>

                            <button type="submit" class="link d-inline-flex justify-content-center align-items-center gap-2 py-4 px-6 border border-primary-key bg-grad-6 rounded-1 fw-bold clr-white border-0 w-100 mt-8 :arrow-btn">
                                <span>Submit</span>
                                <i class="bi bi-arrow-right"></i>
                            </button>
                            <p class="ajax-response"></p>

                        </form>
                    </div>
                </div>
                <div class="col-lg-7">
                    <div class="row gy-4">
                        <div class="col-lg-12 col-md-6">
                            <div class="ai-tools-card text-center overflow-hidden py-10 px-8 h-100 fadeIn_bottom" data-tilt data-tilt-max="0" data-tilt-glare data-tilt-max-glare="0.15">
                                <div class="mt-2 mb-10 ai-tools-card-globe">
                                    <img src="assets/img/ai-tools-card-img-3-globe.png" alt="image" class="img-fluid">
                                    <img src="assets/img/ai-tools-card-img-3-flag.png" alt="image" class="img-fluid ai-tools-card-flag">
                                </div>
                                <h4 class="clr-neutral-90 fs-18 fw-semibold">Office Address</h4>
                                <p class="clr-neutral-80 mb-0">7, Friends Colony, Kanker Khera, Meerut, Uttar Pradesh, India - 250001</p>
                                <img src="assets/img/ai-tools-card-shape-3.png" alt="image" class="img-fluid ai-tools-card-shape">
                            </div>
                        </div>
                        <div class="col-lg-12 col-md-6">
                            <div class="ai-tools-card overflow-hidden py-10 px-8 h-100 fadeIn_bottom" data-tilt data-tilt-max="0" data-tilt-glare data-tilt-max-glare="0.15">
                                <h5 class="clr-neutral-90 fw-semibold">Contact us</h5>
                                <div class="row">
                                    <div class="col-md-4 col-sm-12">
                                        <p class="clr-neutral-80 mb-2"><a href="mailto:info@naestinn.com" class="text-decoration-none text-white"><i class="bi bi-envelope"></i> info@naestinn.com</a></p>
                                    </div>
                                    <div class="col-md-4 col-sm-12">
                                        <p class="clr-neutral-80 mb-2"><a href="mailto:hr@naestinn.com" class="text-decoration-none text-white"><i class="bi bi-envelope"></i> hr@naestinn.com</a></p>
                                    </div>
                                    <div class="col-md-4 col-sm-12">
                                        <p class="clr-neutral-80 mb-2"><a href="mailto:sales@naestinn.com" class="text-decoration-none text-white"><i class="bi bi-envelope"></i> sales@naestinn.com</a></p>
                                    </div>
                                </div>
                                <p class="clr-neutral-80 mb-2"><a href="tel:917078546814" class="text-decoration-none text-white"><i class="bi bi-phone"></i> +91 7078546814</a></p>
                                <div class="row mt-10">
                                    <div class="col-sm-12">
                                        <p class="fs-18 clr-neutral-90"> Follow us </p>
                                        <ul class="list list-row gap-4 flex-wrap">
                                            <li>
                                                <a href="https://linkedin.com/company/naestinn" class="link d-grid place-content-center w-12 h-12 bg_back_dark_3  :bg-grad-6 rounded-circle clr-white fs-20">
                                                    <i class="bi bi-linkedin"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://instagram.com/naestinn" class="link d-grid place-content-center w-12 h-12 bg_back_dark_3  :bg-grad-6 rounded-circle clr-white fs-20">
                                                    <i class="bi bi-instagram"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.facebook.com/naestinn" class="link d-grid place-content-center w-12 h-12 bg_back_dark_3  :bg-grad-6 rounded-circle clr-white fs-20">
                                                    <i class="bi bi-facebook"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://youtube.com/@naestinn" class="link d-grid place-content-center w-12 h-12 bg_back_dark_3  :bg-grad-6 rounded-circle clr-white fs-20">
                                                    <i class="bi bi-youtube"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://twitter.com/naestinn" class="link d-grid place-content-center w-12 h-12 bg_back_dark_3  :bg-grad-6 rounded-circle clr-white fs-20">
                                                    <i class="bi bi-twitter"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://github.com/naestinn" class="link d-grid place-content-center w-12 h-12 bg_back_dark_3  :bg-grad-6 rounded-circle clr-white fs-20">
                                                    <i class="bi bi-github"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://discord.com/naestinn" class="link d-grid place-content-center w-12 h-12 bg_back_dark_3  :bg-grad-6 rounded-circle clr-white fs-20">
                                                    <i class="bi bi-discord"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://dribbble.com/naestinn" class="link d-grid place-content-center w-12 h-12 bg_back_dark_3  :bg-grad-6 rounded-circle clr-white fs-20">
                                                    <i class="bi bi-dribbble"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.behance.net/naestinn" class="link d-grid place-content-center w-12 h-12 bg_back_dark_3  :bg-grad-6 rounded-circle clr-white fs-20">
                                                    <i class="bi bi-behance"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <img src="assets/img/ai-tools-card-shape-1.png" alt="image" class="img-fluid ai-tools-card-shape">
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </div>
    <img src="assets/img/ai-tools-shape-top-right.png" alt="image" class="img-fluid ai-tools-section-top-right-shape">
    <img src="assets/img/ai-tools-shape-left.png" alt="image" class="img-fluid ai-tools-section-left-shape">
    <img src="assets/img/ai-tools-shape-left-start.png" alt="image" class="img-fluid ai-tools-section-left-start parallax">
    <img src="assets/img/ai-tools-shape-right-start.png" alt="image" class="img-fluid ai-tools-section-right-start parallax">
</section>

<script>
    toastr.options = {
        closeButton: true,
        progressBar: true,
        positionClass: "toast-top-right"
    }

    document.addEventListener("DOMContentLoaded", function() {
        const form = document.getElementById("contact-form");

        form.addEventListener("submit", async function(event) {
            event.preventDefault();

            const formData = new FormData(form);

            try {
                console.log("formData", formData);
                const response = await fetch("form/send_contact.php", {
                    method: "POST",
                    body: formData
                });

                const contentType = response.headers.get('content-type');

                if (contentType && contentType.includes('application/json')) {
                    const data = await response.json();

                    if (data.status === "200") {
                        toastr.success(data.message);
                        form.reset();
                    } else {
                        toastr.error(data.message);
                    }
                } else {
                    console.error("Response is not in JSON format.");
                    toastr.error("An error occurred. Please try again later.");
                }
            } catch (error) {
                console.error("Error:", error);
                toastr.error("An error occurred. Please try again later.");
            }
        });
    });
</script>



<?php include_once 'includes/footer.php'; ?>