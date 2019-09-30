<?php
    get_header();

    while(have_posts()) {
        the_post();
        ?>
        <div class="mainText">
           <?php echo the_content(); ?>
        </div>
        <?php
    }   
    get_footer();
?>