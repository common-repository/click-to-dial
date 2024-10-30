<?php

/**
 * 
 * @package    Click to dial Wp plugin
 * @version    1.0
 * @author     ThemeAtelier
 * @Websites: https://themeatelier.net/
 *
 */

add_shortcode('ctd', 'ctd_custom_buttons_shortcode');
function ctd_custom_buttons_shortcode($atts)
{
  $atts = shortcode_atts(array(
    'style' => '1',
    'photo' => CTD_DIR_URL . 'assets/image/user.webp',
    'name' => esc_html__('Robert', 'click-to-dial'),
    'designation' => esc_html__('Sales Support', 'click-to-dial'),
    'label' => esc_html__('How can I help you?', 'click-to-dial'),
    'online' => esc_html__('I\'m avaiable', 'click-to-dial'),
    'offline'  => esc_html__('I\'m offline', 'click-to-dial'),
    'number' => esc_html__('008801813381520', 'click-to-dial'),
    'visibility' => 'ctd-show-everywhere',
    'sizes' => 'ctd-btn-md',
    'rounded' => 'ctd-btn-rounded',
    'sunday' => esc_html__('00:00-23:59', 'click-to-dial'),
    'monday' => esc_html__('00:00-23:59', 'click-to-dial'),
    'tuesday' => esc_html__('00:00-23:59', 'click-to-dial'),
    'wednesday' => esc_html__('00:00-23:59', 'click-to-dial'),
    'thursday' => esc_html__('00:00-23:59', 'click-to-dial'),
    'friday' => esc_html__('00:00-23:59', 'click-to-dial'),
    'saturday' => esc_html__('00:00-23:59', 'click-to-dial'),
  ), $atts);

  ob_start();

  ctd_buttons_template_init($atts);

  return ob_get_clean();
}
