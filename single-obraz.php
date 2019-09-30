<?php get_header(); ?>
    <div class="mainText">
        <div class="photo-container">
        <?php
            while(have_posts()) {
                the_post();
                $image = get_field('obraz');
                ?>
                    <img class="photo-full" src="<?php echo $image['url']; ?>" alt="Photo Missing :("/>
                <?php
            }
        ?>
        </div>
    </div>
<?php get_footer(); ?>