<?php
 /**
  * 
  * @package    Call to dial - WordPress plugin
  * @version    1.0
  * @author     ThemeAtelier
  * @Websites: https://themeatelier.net/
  *
  */
  if( ! defined( 'ABSPATH' ) ) {
    die( CTD_ALERT_MSG );
  }

/**
 * Call to dial buttons init
 *
 *
 */

function ctd_buttons_template_init( $args ) {
  $buttonObj = new Ctd_Buttons_Template( $args );

    if( !empty( $args['style'] ) ) {

    // Style Switch
    switch ( $args['style'] ) {
        case '1':
            $buttonObj->ctd_button_s1();
            break;
        case '2':
            $buttonObj->ctd_button_s2();
            break;
        default:
            $buttonObj->ctd_button_s1();
            break;
    }
  }
}

