<?php

get_header();
?>

<main id="primary" class="site-main">
    <section class=" section banner">

        <img class="banner-image" src="<?php echo esc_url(get_template_directory_uri() . '/assets/images/logo.png'); ?>"
            alt="Logo Fleurs d'oranger & chats errants">

    </section>

    <section id="story" class="section story">
        <h2>L'histoire</h2>
        <article id="" class="story__article">
            <p><?php echo get_theme_mod('story'); ?></p>
        </article>
        <?php
        $args = array(
            'post_type' => 'characters',
            'posts_per_page' => -1,
            'meta_key' => '_main_char_field',
            'orderby' => 'meta_value_num',

        );
        $characters_query = new WP_Query($args);
        ?>
        <article id="characters">
            <div class="main-character">
                <h3>Les personnages</h3>

            </div>
        </article>
        <?php
        // Inclure le template part
        $template_part = 'template-parts/characters-slider'; // Chemin relatif sans extension
        

        if (locate_template($template_part . '.php')) {
            get_template_part($template_part);
        } else {
            echo '<p>Le fichier characters-slider.php n\'a pas été trouvé dans les template-parts.</p>';
        }
        ?>
        <!-- section swiper -->
        <section class="section swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide">

                    <img src="wp-content/themes/foce-child/assets/images/Jaakuna.png" alt="Jaakuna">

                </div>
                <div class=" swiper-slide">

                    <img src="wp-content/themes/foce-child/assets/images/Kawaneko.png" alt="Kawaneko">

                </div>
                <div class="swiper-slide">

                    <img src="wp-content/themes/foce-child/assets/images/Orenjiiro.png" alt="Orenjiiro">

                </div>

                <div class="swiper-slide">

                    <img src="wp-content/themes/foce-child/assets/images/Pinku.png" alt="Pinku">

                </div>
                <div class="swiper-slide">

                    <img src="wp-content/themes/foce-child/assets/images/Tenshi.png" alt="Tenshi">

                </div>

            </div>
            <div class="swiper-pagination"></div>

        </section>
        <article id="place">
            <div>
                <h3>Le Lieu</h3>
                <p><?php echo get_theme_mod('place'); ?></p>
            </div>
            <!-- Ajout des images de nuages -->
            <div class="clouds">
                <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/big_cloud.png" alt="Gros nuage"
                    class="big-cloud blur">
                <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/little_cloud.png"
                    alt="Petit nuage" class="little-cloud blur">
            </div>

        </article>
    </section>


    <section id="studio" class="section studio">
        <h2>Studio Koukaki</h2>
        <div>
            <p>Acteur majeur de l’animation, Koukaki est un studio intégré fondé en 2012 qui créé, produit et distribue
                des programmes originaux dans plus de 190 pays pour les enfants et les adultes. Nous avons deux sections
                en activité : le long métrage et le court métrage. Nous développons des films fantastiques,
                principalement autour de la culture de notre pays natal, le Japon.</p>
            <p>Avec une créativité et une capacité d’innovation mondialement reconnues, une expertise éditoriale et
                commerciale à la pointe de son industrie, le Studio Koukaki se positionne comme un acteur incontournable
                dans un marché en forte croissance. Koukaki construit chaque année de véritables succès et capitalise
                sur de puissantes marques historiques. Cette année, il vous présente “Fleurs d’oranger et chats
                errants”.</p>
        </div>
    </section>

    <section id="oscars" class="section oscars">
        <div class="deux-fleurs">
            <img id="flower" src="wp-content/themes/foce-child/assets/images/Sunflower.png" alt="Sunflower">
            <img id="flower" src="wp-content/themes/foce-child/assets/images/orchid.png" alt="orchid">
        </div>
        <div class="oscars-content">
            <div class="h3-wrapper">
                <h3>Fleurs d’oranger & chats errants<span> est nominé aux Oscars </span>Short Film Animated de 2022 !
                </h3>
            </div>
            <img src="<?php echo esc_url(get_stylesheet_directory_uri() . '/assets/images/oscars.png'); ?>"
                alt="Nomination aux Oscars">
        </div>

    </section>
</main><!-- #main -->

<?php
get_footer();
