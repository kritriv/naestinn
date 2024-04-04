<?php include_once 'includes/header.php'; ?>

<!-- /Hero Section Start -->
<div class="hero-6 overflow-hidden">
    <div class="hero-6__inner section-space-sm-y">
        <div id="particles-js"></div>
        <div class="section-space-top section-space-sm-bottom">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-xl-8">
                        <h1 class="mb-6 clr-white text-center fw-extrabold animate-line-3d fs-1">
                            <span class="d-inline-block ff-3 fw-normal">We <span
                                    class="d-inline-block clr-grad-6">Næstinn, </span></span>
                            are where innovative solutions <p class="text-underline">ignite endless possibilities</p>
                        </h1>
                        <p
                            class="mb-12 text-center ff-1 fs-18 fw-normal clr-neutral-90 max-text-50 mx-auto animate-text-from-right">
                            At Næstinn, we pioneer cutting-edge solutions, transforming ideas into limitless digital
                            possibilities for your success. </p>
                        <div class="d-flex justify-content-center align-items-center flex-wrap gap-8 fadeIn_bottom">
                            <a href="#ourservices"
                                class="link d-inline-block py-4 px-6 ff-1 bg-grad-6 clr-white fw-bold rounded"> Explore
                                Services </a>
                            <a href="contact-us.php"
                                class="link d-inline-block py-4 px-6 ff-1 gradient-btn-4 clr-white fw-bold rounded"
                                data-cursor="We are waiting"> Get
                                Quote </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-xl-10">
                    <div class="position-relative z-1 fadeIn_bottom">
                        <a href="our-services.php" data-cursor="Explore Us"><img
                                src="assets/images/Home/hero_banner_img.webp" alt="Trulli"
                                class="img-fluid rounded-4 border border-8x border-outline border-opacity-2"></a>
                        <img src="assets/images/Home/hero-cartoon2.webp" alt="image"
                            class="img-fluid d-none d-lg-block hero-6__el hero-6__el-1" width="35%">
                        <img src="assets/images/Home/hero-el-1.png" alt="image"
                            class="img-fluid d-none d-lg-block hero-6__el hero-6__el-2">
                    </div>
                </div>
            </div>
        </div>
    </div>
    <span class="hero-6__blurred d-none d-md-block"></span>
    <img src="assets/images/Home/hero-el-2.png" alt="image" class="img-fluid d-none d-lg-block hero-6__el hero-6__el-3">
    <svg width="0" height="0" class="d-none">
        <filter id="grainy" x="0" y="0" width="100%" height="100%">
            <feTurbulence type="fractalNoise" baseFrequency=".537"></feTurbulence>
            <feColorMatrix type="saturate" values="0"></feColorMatrix>
            <feBlend mode="multiply" in="SourceGraphic" in2="floodFill"></feBlend>
        </filter>
    </svg>
</div>
<!-- /Hero Section End -->

<!-- Customer Rating Section  Start-->
<?php include_once 'components/customer_rating.php'; ?>
<!-- /Customer Rating Section  End-->

<!-- Skew Ticker Section  -->
<div class="ticker-section section-space-sm-y overflow-hidden mx-auto">
    <div class="ticker-section__content section-space-xsm-top">
        <div class="container-fluid p-0">
            <div class="row g-0">
                <div class="col-12">
                    <div class="scroller-x mb-4" data-direction="left" data-speed="slow">
                        <ul class="list list-row align-items-center gap-4 scroller-x__list">
                            <li>
                                <h2 class="mb-0 clr-neutral-90"> Take Your Tour to the </h2>
                            </li>
                            <li>
                                <img src="assets/img/icon-star-outline.png" alt="image" class="img-fluid">
                            </li>
                            <li>
                                <h2 class="mb-0 text-outline"> Naest Innovation </h2>
                            </li>
                            <li>
                                <img src="assets/img/icon-star-gradient.png" alt="image" class="img-fluid">
                            </li>
                            <li>
                                <h2 class="mb-0 clr-neutral-90"> Best Software Development Service</h2>
                            </li>
                            <li>
                                <img src="assets/img/icon-star-gradient.png" alt="image" class="img-fluid">
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- /Skew Ticker Section  -->

<!-- Our Services  -->
<div class="what-todo-section section-space-sm-y" id="ourservices">
    <div class="section-space-sm-bottom">
        <div class="container">
            <div class="row g-4 justify-content-between">
                <div class="col-md-4">
                    <div class="d-flex align-items-center gap-4 flex-wrap">
                        <div class="w-30 subtitle-flush-x subtitle_line_1"></div>
                        <h3 class="mb-0 fs-18 clr-neutral-90 fw-extrabold animate-text-from-right"> Our Services </h3>
                        <p class="mb-0 clr-neutral-90 fw-normal animate-line-3d fs-5"> Unleashing Innovation: <span
                                class="clr-grad-6">Næstinn's </span> Digital Excellence Solutions Redefining Your
                            Business Success. </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row g-4">
            <div class="col-md-5 ">
                <nav class="todo-nav" id="toDoScrollspy">
                    <ul class="list gap-7 todo-nav__menu">
                        <li>
                            <a href="#softwaredevelopment" class="nav-link link todo-nav__link"> Software Development
                            </a>
                        </li>
                        <li>
                            <a href="#applicationdevelopment" class="nav-link link todo-nav__link"> Application
                                Development </a>
                        </li>
                        <li>
                            <a href="#webdevelopment" class="nav-link link todo-nav__link"> Web Development </a>
                        </li>
                        <li>
                            <a href="#uiuxdesign" class="nav-link link todo-nav__link"> UI/UX Design </a>
                        </li>
                        <li>
                            <a href="#graphicsdesign" class="nav-link link todo-nav__link"> Graphics Design </a>
                        </li>
                        <li>
                            <a href="#digitalmarketing" class="nav-link link todo-nav__link">Digital Marketing </a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div class="col-md-7 order-xl-2">
                <div data-bs-spy="scroll" data-bs-target="#toDoScrollspy" data-bs-smooth-scroll="true">
                    <div id="softwaredevelopment">
                        <div class="todo-box position-relative z-1 bg_back_dark_2  pe-10">
                            <h4 class="clr-neutral-90 animate-line-3d"> Software Development </h4>
                            <p class="mb-6 clr-neutral-80 animate-text-from-right"> Experience the magic of Næstinn's
                                tech wizards. We turn ideas into digital wonders, making your journey to success smooth
                                and extraordinary.</p>
                        </div>
                        <div class="todo-img">
                            <a href="#"><img src="assets/images/Services/Website-development-service-home.png"
                                    alt="image" class="img-fluid rounded-1 parallax-image "></a>
                            <!-- <img src="assets/img/todo-img-1.png" alt="image" class="img-fluid todo-img__1"> -->
                            <!-- <img src="assets/img/todo-img-2.png" alt="image" class="img-fluid todo-img__2"> -->
                        </div>
                    </div>
                    <div id="applicationdevelopment">
                        <div class="todo-box position-relative z-1 bg_back_dark_2 py-10 pe-10">
                            <h4 class="clr-neutral-90 animate-line-3d"> Application Development </h4>
                            <p class="mb-6 clr-neutral-80 animate-text-from-right"> Step into the world of Næstinn's
                                app maestros. We create apps that are super easy to use, high-performing, and leave a
                                lasting impression. </p>
                        </div>
                        <div class="todo-img">
                            <a href="#"><img src="assets/images/Services/Website-development-service-home.png"
                                    alt="image" class="img-fluid rounded-1 parallax-image "></a>
                            <!-- <img src="assets/img/todo-img-1.png" alt="image" class="img-fluid todo-img__1"> -->
                            <!-- <img src="assets/img/todo-img-2.png" alt="image" class="img-fluid todo-img__2"> -->
                        </div>
                    </div>
                    <div id="webdevelopment">
                        <div class="todo-box position-relative z-1 bg_back_dark_2 py-10 pe-10">
                            <h4 class="clr-neutral-90 animate-line-3d"> Web Development </h4>
                            <p class="mb-6 clr-neutral-80 animate-text-from-right"> Let Næstinn weave the web for you.
                                Your online story is crafted with care, making every click a delightful adventure
                                tailored just for you. </p>
                        </div>
                        <div class="todo-img">
                            <a href="#"><img src="assets/images/Services/Website-development-service-home.png"
                                    alt="image" class="img-fluid rounded-1 parallax-image "></a>
                            <!-- <img src="assets/img/todo-img-1.png" alt="image" class="img-fluid todo-img__1"> -->
                            <!-- <img src="assets/img/todo-img-2.png" alt="image" class="img-fluid todo-img__2"> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- /Our Services  -->

<!-- Portfolio Section  Start-->
<?php include_once 'components/portfolio_sec.php'; ?>
<!-- /Portfolio Section  End-->

<!-- Case Study Start -->
<?php include_once 'components/case_study_sec.php'; ?>
<!-- /Case Study End-->

<!-- Latest Tech We Work Start -->
<?php include_once 'components/techstack_sec.php'; ?>
<!-- /Latest Tech We Work  End-->

<!-- Integration software Section -->
<section class="ai-application-section section-space-sm-top section-space-bottom">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-7 col-xxl-5">
                <div class="text-center">
                    <span
                        class="rounded-1 bg-primary-key bg-opacity-2 clr-white fs-12 fw-bold px-4 py-2 d-inline-block mb-4 fadeIn_bottom">Custom
                        Software</span>
                    <h4 class="clr-neutral-90 fs-2 fw-normal animate-line-3d">Unleashing the Power of Custom Software
                    </h4>
                </div>
            </div>
        </div>
        <div class="mt-10 ai-application-item-wrapper">
            <div class="row gy-4 align-items-center justify-content-center">
                <div class="col-sm-6 col-lg-4 col-xxl-3">
                    <div class="ai-app-item text-center fadeIn_bottom">
                        <img src="assets/img/ai-application-icon-1.png" alt="image" class="img-fluid">
                        <h4 class="fs-18 fw-bold clr-neutral-90 mt-4 mb-3">AI Integration: Transforming Insights</h4>
                        <p class="mb-0 clr-neutral-80">"Elevate insights with AI, turning data into decisive actions."
                        </p>
                    </div>
                    <div class="ai-app-item text-center fadeIn_bottom">
                        <img src="assets/img/ai-application-icon-3.png" alt="image" class="img-fluid">
                        <h4 class="fs-18 fw-bold clr-neutral-90 mt-4 mb-3">Effortless Software-Cloud Integration</h4>
                        <p class="mb-0 clr-neutral-80">"Ensure smooth cloud connectivity for secure, real-time updates."
                        </p>
                    </div>
                </div>
                <div class="d-none d-lg-block col-lg-4 col-xxl-3 fadeIn_bottom">
                    <div class="radar-logo-wrapper">
                        <div class="radar">
                            <div class="animated-text-wrapper">
                                <p class="cd-headline slide mb-0">
                                    <span class="cd-words-wrapper">
                                        <b class="is-visible"> Software <br> Integration</b>
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div class="logo-wrapper d-flex justify-content-center align-items-center">
                            <img src="assets/images/logo2.svg" alt="image" class="img-fluid hero-7-logo">
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-lg-4 col-xxl-3">
                    <div class="ai-app-item text-center fadeIn_bottom">
                        <img src="assets/images/Home/Software-Integration/social-integration.svg" alt="image"
                            class="img-fluid">
                        <h4 class="fs-18 fw-bold clr-neutral-90 mt-4 mb-3">Social App Fusion: Unified Engagement</h4>
                        <p class="mb-0 clr-neutral-80">"Merge social apps seamlessly, enhancing digital collaboration."
                        </p>
                    </div>
                    <div class="ai-app-item text-center fadeIn_bottom">
                        <img src="assets/img/ai-application-icon-4.png" alt="image" class="img-fluid">
                        <h4 class="fs-18 fw-bold clr-neutral-90 mt-4 mb-3">Cross-Platform Harmony: Efficiency Boost</h4>
                        <p class="mb-0 clr-neutral-80">"Foster collaboration with seamless software integration."</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <img src="assets/img/ai-application-shape-line-left.png" alt="image"
        class="img-fluid ai-application-shape ai-application-shape-left">
    <img src="assets/img/ai-application-shape-line-right.png" alt="image"
        class="img-fluid ai-application-shape ai-application-shape-right">
</section>
<!-- /Integration software Section -->

<!-- Testimonial Section Start-->
<?php include_once 'components/testimonial_sec.php'; ?>
<!-- /Testimonial Section End-->

<!-- Blogs Section Start-->
<?php include_once 'components/blog_sec.php'; ?>
<!-- /Blogs Section End-->

<?php include_once 'includes/footer.php'; ?>