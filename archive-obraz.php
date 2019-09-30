<?php get_header();?>
    <div class="mainText">
        <div class="photo-container">
        <?php 
            while(have_posts()) {
                the_post();
                $image = get_field('obraz');
                ?>
                <a href="<?php the_permalink(); ?>">
                    <img
                        class="gallery-image" 
                        src="<?php echo $image['url']; ?>" 
                        alt="<?php the_title(); ?>"
                        title="<?php the_title();?>" 
                    />
                </a>
                <?php
            }
        ?>
        </div>
    </div>
    <div class="modal-window">
        <div class="modal-exit">X</div>
        <img class="modal-photo" src="<?php echo get_template_directory_uri() . '/images/img1.jpg'?>" alt="Photo Missing :(">
    </div>
<?php get_footer();?>
