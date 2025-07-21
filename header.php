<?php


/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Fleurs_d\'oranger_&_Chats_errants
 */


?>
<!doctype html>
<html <?php language_attributes(); ?>>


<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="profile" href="https://gmpg.org/xfn/11">


    <?php wp_head(); ?>
</head>


<body <?php body_class(); ?>>
    <?php wp_body_open(); ?>
    <div id="page" class="site">
        <a class="skip-link screen-reader-text" href="#primary"><?php esc_html_e('Skip to content', 'foce'); ?></a>




        <header id="masthead" class="site-header">
            <nav id="site-navigation" class="main-navigation">
                <div class="site-title">
                    <a href="<?php echo esc_url(home_url('/')); ?>" rel="home">Fleurs d'orangers & chats errants</a>
                </div>
                <button id="burger-menu" class="menu-toggle">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </nav>




            <div id="menu-overlay" class="menu-container">
                <div class="menu-content">
                    <img class="logo-menu"
                        src="<?php echo esc_url(get_stylesheet_directory_uri() . '/assets/images/logo.png'); ?>"
                        alt="Koukaki logo">
                    <ul>
                        <li class="menu-item menu-item-story"><a href="#story">Histoire</a></li>
                        <li class="menu-item menu-item-characters"><a href="#characters">Personnages</a></li>
                        <li class="menu-item menu-item-place"><a href="#place">Lieu</a></li>
                        <li class="menu-item menu-item-studio"><a href="#studio">Studio Koukaki</a></li>
                    </ul>
                    <div class="footer-link">
                        <a href="#">Studio Koukaki</a>
                    </div>
                </div>
            </div>


        </header>