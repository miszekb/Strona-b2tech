<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <?php wp_enqueue_script("jquery"); ?>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" href="<?php echo get_template_directory_uri() . '/favicon.png'?>">
    <script src="http://code.jquery.com/jquery-1.11.2.min.js"></script>
    <script type="text/javascript" src="photoSlider.js"></script>
    <?php wp_head(); ?>
</head>
<title>b2tech</title>
<body>
<header class="site-header">
    <img class="logo" src="<?php echo get_template_directory_uri() . '/logo.PNG'?>" alt="No Image">
    <div class="button_container">
        <a href="<?php echo site_url('/'); ?>">
            <div class="button">Strona Główna</div>
        </a>
        <a href="<?php echo site_url('/aktualnosci'); ?>">
                <div class="button">Aktualności</div>
            </a>
        <a href="<?php echo get_post_type_archive_link('obraz') ?>">
            <div class="button">Realizacje</div>
        </a>
        <a href="<?php echo site_url('/consulting');?>">
            <div class="button">Consulting</div>
        </a>
        <a href="<?php echo site_url('/kontakt');?>">
            <div class="button">Kontakt</div>
        </a>
    </div>
    <div class="menu-burger">
        <button class="menu-exit">X</button>
        <div class="burger-icon">
            <div class="burger-parts"></div>
            <div class="burger-parts"></div>
            <div class="burger-parts"></div>
        </div>

        <button class="menu-exit"></button>
        <ul class="menu-list">
        <li>
            <a href="<?php echo site_url('/'); ?>">
                <div class="button">Strona Główna</div>
            </a>
        </li>
        <li>
            <a href="<?php echo site_url('/aktualnosci'); ?>">
                <div class="button">Aktualności</div>
            </a>
        </li>
        <li>
            <a href="<?php echo get_post_type_archive_link('obraz') ?>">
                <div class="button">Realizacje</div>
            </a>
        </li>
        <li>
            <a href="<?php echo site_url('/consulting');?>">
                <div class="button">Consulting</div>
            </a>
        </li>
        <li>
            <a href="<?php echo site_url('/kontakt');?>">
                <div class="button">Kontakt</div>
            </a>
        </li>
    </ul>
    </div>
</header>
