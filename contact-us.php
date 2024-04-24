<?php $current_page_url = "https://www.naestinn.com/contact-us";
$title = 'Næstinn | Contact Us';
include_once 'includes/header.php'; ?>

<section class="ai-tools-section section-space-top home-7-section-top-border">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-8">
                <div class="text-center">
                    <span class="rounded-1 bg-grad-6 bg-opacity-2 clr-white fs-12 fw-bold px-4 py-2 d-inline-block mb-4 fadeIn_bottom">Contact
                        Us</span>
                    <h3 class="clr-neutral-90 fw-bold animate-line-3d">We will get back to you soon</h3>
                </div>
            </div>
        </div>
        <div class="mt-10">
            <div class="row gy-4">
                <div class="col-lg-5">
                    <div class="py-sm-12 py-8 px-sm-8 px-5 rounded-5">
                        <h4 class="h4 mb-2 clr-neutral-90 fw-bold">Get Quote </h4>
                        <p class="clr-neutral-80">Get Started with 10,000 Free Words</p>
                        <form id="contact-form" method="POST">
                            <div class="mt-8">
                                <label class="clr-neutral-80 mb-2">Full Name</label>
                                <input type="text" name="name" class="form-control border border-neutral-17 clr-neutral-90 :focus-clr-current rounded-2 py-4 px-4 bg-transparent placeholder-50 focus-bg-none" placeholder="Enter your name" >
                            </div>
                            <div class="mt-8">
                                <label class="clr-neutral-80 mb-2">Email</label>
                                <input type="email" name="email" class="form-control border border-neutral-17 clr-neutral-90 :focus-clr-current rounded-2 py-4 px-4 bg-transparent placeholder-50 focus-bg-none" placeholder="Enter your email" >
                            </div>
                            <div class="mt-8">
                                <label class="clr-neutral-80 mb-2">Mobile No.</label>
                                <input type="number" name="mobile" class="form-control border border-neutral-17 clr-neutral-90 :focus-clr-current rounded-2 py-4 px-4 bg-transparent placeholder-50 focus-bg-none" placeholder="Enter your Mobile no." >
                            </div>
                            <div class="mt-8">
                                <select name="service" class="form-control border border-neutral-17 clr-neutral-90 :focus-clr-current rounded-2 py-4 px-4 bg-transparent placeholder-50 focus-bg-none" >
                                    <option class="text-dark" value="Select Service">Select Service</option>
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
                                <textarea type="text" name="message" class="form-control border border-neutral-17 clr-neutral-90 :focus-clr-current rounded-2 py-4 px-4 bg-transparent placeholder-50 focus-bg-none" placeholder="Type Message or Project Requirement here..." ></textarea>
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
                                <h4 class="clr-neutral-90 fs-18 fw-semibold">Advance Dashboard</h4>
                                <p class="clr-neutral-80 mb-0">AI-powered translation tools Save per day on ad
                                    management</p>
                                <img src="assets/img/ai-tools-card-shape-3.png" alt="image" class="img-fluid ai-tools-card-shape">
                            </div>
                        </div>
                        <div class="col-lg-12 col-md-6">
                            <div class="ai-tools-card text-center overflow-hidden py-10 px-8 h-100 fadeIn_bottom" data-tilt data-tilt-max="0" data-tilt-glare data-tilt-max-glare="0.15">
                                <img src="assets/img/ai-tools-card-img-1.png" alt="image" class="img-fluid mt-2 mb-5 img-gray">
                                <h4 class="clr-neutral-90 fs-18 fw-semibold">Advance Dashboard</h4>
                                <p class="clr-neutral-80 mb-0">AI-powered translation tools Save per day on ad
                                    management</p>
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

<?php include_once 'includes/footer.php'; ?>