<?php

/**
 * 
 * @package    Click to dial - WordPress plugin
 * @version    1.0
 * @author     ThemeAtelier
 * @Websites: https://themeatelier.net/
 *
 */
if (!defined('ABSPATH')) {
	die(CTD_ALERT_MSG);
}

if (!class_exists('Ctd_Enqueue')) {
	class Ctd_Enqueue
	{
		public function __construct($args = array())
		{
			add_action('wp_enqueue_scripts', array($this, 'frontend_enqueue_scripts'));
			add_action('admin_enqueue_scripts', array($this, 'admin_enqueue_scripts'));
		}

		// Admin enqueueue

		public function admin_enqueue_scripts()
		{
			wp_enqueue_style('ctd-help', CTD_DIR_URL . 'assets/css/help.css', array(), '1.0', false);
		}

		// Front-End enqueue scripts
		public function frontend_enqueue_scripts()
		{
			wp_enqueue_style('fontawesome', CTD_DIR_URL . 'assets/css/all.min.css', array(), '1.0', false);
			wp_enqueue_style('ctd-main', CTD_DIR_URL . 'assets/css/ctd-main.css', array(), '1.0', false);
			/********************
				Js Enqueue
			 ********************/
			wp_enqueue_script('moment', array('jquery'), '1.0', true);
			wp_enqueue_script('moment-timezone', CTD_DIR_URL . 'assets/js/moment-timezone-with-data.min.js', array('jquery'), '1.0', true);
			wp_enqueue_script('ctd-main', CTD_DIR_URL . 'assets/js/ctd-main.js', array('jquery'), '1.0', true);
		}
	}

	$obj = new Ctd_Enqueue();
}
