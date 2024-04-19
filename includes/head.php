<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title><?php if (isset($title)) {
        echo $title;
    } else {
        echo "Næstinn | Best Software Development Company";
    } ?></title>

    <link rel="canonical"
        href="<?php if (isset($canonical)) {
            echo $canonical;
        } else {
            echo "https://www.naestinn.com";
        } ?>" />
    
    <!-- ------- Meta Tags ------------- -->
    <meta name='robots' content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes, maximum-scale=5.0">

    <meta name="description"
        content="<?php if (isset($description)) {
            echo $description;
        } else {
            echo "Naestinn Pvt Ltd is a leading software development and IT consulting company. We provide quality solutions for online businesses using cutting-edge web technologies and platforms. Our services are designed to transform your investment into revenue while providing you with the best for money.";
        } ?>" />
    
    <meta name="keywords"
        content="<?php if (isset($keywords)) {
            echo $keywords;
        } else {
            echo "Naestinn Pvt Ltd, Website Development, Software Development, App Development, UI/UX Design, Graphics Design, CRM, ERP, LMS, CMS, IT Services, Consultancy,app development company, top app development companies, app development companies, top app development company, mobile app development company, mobile app development companies.";
        } ?>" />

    <meta name="allow-search" content="yes"/>
    <meta property="og:locale" content="IT"/>
    <meta property="og:type" content="website"/>
    <meta property="og:title" content="Naestinn Pvt Ltd is a Software Company" />
    <meta property="og:description" content="Naestinn Pvt Ltd is a leading software development and IT consulting company. We provide quality solutions for online businesses using cutting-edge web technologies and platforms." />
    <meta property="og:url" content="https://www.naestinn.com" />
    <meta property="og:site_name" content="Naestinn Pvt Ltd" />
    <meta property="og:image" content="https://www.naestinn.com/assets/images/naestinn.png" />
    <meta name="twitter:card" content="summary_large_image" />

    <!-- Fav Icon -->
    <link rel="icon" href="assets/images/favicon.svg" type="image/x-icon" />

    <link rel="stylesheet" href="assets/css/fonts/ff-1.css">
    <link rel="stylesheet" href="assets/css/fonts/ff-3.css">
    <link rel="stylesheet" href="assets/css/fonts/bootstrap-icons.css">
    <link rel="stylesheet" href="assets/css/plugins.min.css">
    <link rel="stylesheet" href="assets/css/style.min.css">
    <link rel="stylesheet" href="assets/css/custom.min.css">

    <script src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js"></script>
    <script src="assets/js/custom.js"></script>

    <style>
        #particles-js {
            position: absolute;
            width: 100%;
            height: 100%;
            z-index: -5;
        }
    </style>
</head>