<?php
add_action('wp_enqueue_scripts', 'theme_enqueue_styles');
function theme_enqueue_styles()
{
    wp_enqueue_style('parent-style', get_template_directory_uri() . '/style.css');
    // Enqueue fichiers main.css et main.js
    wp_enqueue_style('mon-theme-main-style', get_stylesheet_directory_uri() . '/assets/css/main.css');
    wp_enqueue_script('mon-theme-main-script', get_stylesheet_directory_uri() . '/js/main.js');

}

// Get customizer options form parent theme
if (get_stylesheet() !== get_template()) {
    add_filter('pre_update_option_theme_mods_' . get_stylesheet(), function ($value, $old_value) {
        update_option('theme_mods_' . get_template(), $value);
        return $old_value; // prevent update to child theme mods
    }, 10, 2);
    add_filter('pre_option_theme_mods_' . get_stylesheet(), function ($default) {
        return get_option('theme_mods_' . get_template(), $default);
    });
}
function enqueue_swiper_assets()
{
    // Enqueue Swiper CSS
    wp_enqueue_style('swiper-css', 'https://unpkg.com/swiper/swiper-bundle.min.css', array(), null);

    // Enqueue Swiper JS
    wp_enqueue_script('swiper-js', 'https://unpkg.com/swiper/swiper-bundle.min.js', array(), null, true);

    // Ajouter son propre code Swiper
    wp_enqueue_script('swiper-init', get_stylesheet_directory_uri() . '/js/swiper-init.js', array('swiper-js'), null, true);
}

add_action('wp_enqueue_scripts', 'enqueue_swiper_assets');