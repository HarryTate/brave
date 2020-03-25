<?php

function enqueue_scripts_styles() {
  wp_enqueue_style('styles', get_template_directory_uri() . "/assets/styles/style.css");
  wp_enqueue_script('webpack-js', get_template_directory_uri() . '/assets/js/public.min.js', array('jquery') , '', true);
}

add_action('wp_enqueue_scripts', 'enqueue_scripts_styles');
