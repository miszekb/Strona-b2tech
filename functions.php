<?php
    function fileImport() {
        wp_enqueue_style('style', get_template_directory_uri() . '/css/style.css', NULL, microtime());
        wp_enqueue_style('fonts', '//fonts.googleapis.com/css?family=Quicksand');
        wp_enqueue_script('javascript', get_theme_file_uri('/js/menu-script.js'), NULL, microtime(), true);
        wp_deregister_script('jquery');
        wp_enqueue_script('jquery', 'https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js', array(), null, true);
        add_theme_support('title-tag');
        add_theme_support('post-thumbnails');
        add_image_size('professorLandscape', 400, 260, true);

    }

    add_action('wp_enqueue_scripts', 'fileImport');
?>