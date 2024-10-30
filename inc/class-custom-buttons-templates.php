<?php
 
class Ctd_Buttons_Template {
   public static $getData;

   function __construct( array $args ) {
      self::$getData = $args;
   }
   // Template Style 1
   public function ctd_button_s1() {
   $iterateData = self::$getData;
   $atts = $iterateData;

   // button settings
   $number =  $atts['number'];

   // visibility
   if ($atts['visibility'] == 'only-desktop') {
      $buttonVisibility = 'ctd-desktop-only';
    } elseif ($atts['visibility'] == 'only-tablet') {
      $buttonVisibility = 'ctd-tablet-only';
    } elseif ($atts['visibility'] == 'only-tablet-mobile') {
      $buttonVisibility = 'ctd-mobile-tablet-only';
    } else {
      echo "";
    }

   $buttonRounded = $atts['rounded'];
   $buttonSizes = $atts['sizes'];
   $agentPhoto = $atts['photo'];
   $agentName = $atts['name'];
   $agentDesignation = $atts['designation'];
   $labelText = $atts['label'];
   $onlineText = $atts['online'];
   $offlineText = $atts['offline'];
   // availablity
   $avlTimezone =  $atts['timezone'];
   $avlSunday = $atts['sunday'];
   $avlMonday = $atts['monday'];
   $avlTuesday = $atts['tuesday'];
   $avlWednesday = $atts['wednesday'];
   $avlThursday = $atts['thursday'];
   $avlFriday = $atts['friday'];
   $avlSaturday = $atts['saturday'];
?>
<div class="button-wrapper">
      <button data-number="<?php echo esc_attr($number); ?>" <?php if( $avlTimezone) { ?> data-timezone="<?php esc_attr($avlTimezone); ?>" <?php } ?> class="ctdButtons ctd-button-4 ctd-btn-bg <?php echo esc_attr($buttonVisibility); ?> <?php echo esc_attr($buttonRounded); ?> avatar-active <?php echo esc_attr($buttonSizes); ?>"  data-btnavailablety='{ "sunday":"<?php echo esc_attr( $avlSunday);?>", "monday":"<?php echo esc_attr( $avlMonday);?>", "tuesday":"<?php echo esc_attr( $avlTuesday);?>", "wednesday":"<?php echo esc_attr( $avlWednesday);?>", "thursday":"<?php echo esc_attr( $avlThursday);?>", "friday":"<?php echo esc_attr( $avlFriday);?>", "saturday":"<?php echo esc_attr( $avlSaturday);?>" }'>
         <?php if ($agentPhoto) { ?>
            <img src="<?php echo esc_attr( $agentPhoto ); ?>"/>
         <?php } ?>

            <div class="info-wrapper">
            <?php if( $agentName || $agentDesignation ) { ?>
               <p class="info"><?php if( $agentName ) { ?><?php echo esc_html( $agentName ); ?><?php } ?> <?php if( $agentDesignation ) { ?>/ <?php echo esc_html( $agentDesignation ); ?><?php } ?></p>
            <?php } ?>
            <?php if( $labelText ) { ?>
               <p class="title"><?php echo esc_html( $labelText ); ?></p>
            <?php } ?>
            <?php if( $onlineText ) { ?>
               <p class="online"><?php echo esc_html( $onlineText ); ?></p>
            <?php } ?>
            <?php if( $offlineText ) { ?>
               <p class="offline"><?php echo esc_html( $offlineText ); ?></p>
               <?php } ?>
            </div>
   </div>
      <?php
   } 

   // // Template style 2
   function ctd_button_s2 () {
      $iterateData = self::$getData;
      $atts = $iterateData;
      $number = esc_attr( $atts['number'] );
         // visibility
   if ($atts['visibility'] == 'only-desktop') {
      $buttonVisibility = 'ctd-desktop-only';
    } elseif ($atts['visibility'] == 'only-tablet') {
      $buttonVisibility = 'ctd-tablet-only';
    } elseif ($atts['visibility'] == 'only-tablet-mobile') {
      $buttonVisibility = 'ctd-mobile-tablet-only';
    } else {
      echo "";
    }
      $buttonSizes = $atts['sizes'];
      $buttonRounded = $atts['rounded'];
      $labelText = $atts['label'];
      ?>

      <div class="button-wrapper">
         <a href="tel:<?php echo $number; ?>" class="ctd-button-2 ctd-btn-bg <?php echo esc_attr($buttonSizes); ?> <?php echo esc_attr($buttonVisibility); ?> <?php echo esc_attr($buttonRounded); ?>" >
         <i class="fa-solid fa-phone"></i><?php echo esc_attr($labelText); ?>
         </a>
      </div>
      <?php
   }

} // End Class