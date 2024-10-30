<?php
/*
 *  Plugin Name:    Click to dial
 *  Plugin URI:     https://themeatelier.net/plugins/chat-plugins/
 *  Description:    Can easily create Bubble & buttons for call in any WordPress site. Gutenberg, Elementor and shortcodes supported. 
 *  Author:         ThemeAtelier
 *  Author URI:     http://themeatelier.net/
 *  Requirements:   PHP 7.0 or above, WordPress 4.0 or above.
 *  Version:       1.2.0
 * Text Domain:  click-to-dial
 * Domain Path:  /languages
 */

// Block Direct access
if (!defined('ABSPATH')) {
    die('You should not access this file directly!.');
}

// Define Constants for direct access alert message.
if (!defined('CTD_ALERT_MSG'))
    define('CTD_ALERT_MSG', esc_html__('You should not access this file directly.!', 'click-to-dial'));

// telegram chat support version

if (!defined('CLICK_TO_DIAL_VERSION'))
    define('CLICK_TO_DIAL_VERSION', '1.2.0');

// Define constants for plugin directory path.
if (!defined('CTD_DIR_PATH'))
    define('CTD_DIR_PATH', plugin_dir_path(__FILE__));


// Define constants for view directory path.
if (!defined('CTD_VIEW_DIR_PATH'))
    define('CTD_VIEW_DIR_PATH', CTD_DIR_PATH . 'view/');

// Define constants for elementor widget directory path.
if (!defined('CTD_EW_DIR_PATH'))
    define('CTD_EW_DIR_PATH', CTD_VIEW_DIR_PATH . 'elementor-widgets/');


// Define constants for plugin directory path.
if (!defined('CTD_DIR_URL'))
    define('CTD_DIR_URL', plugin_dir_url(__FILE__));

// load text domain from plugin folder
function ctd_load_textdomain()
{
    load_plugin_textdomain('', false, dirname(__FILE__) . "/languages");
}
add_action("plugins_loaded", 'ctd_load_textdomain');

// Plugin settings in plugin list
add_filter('plugin_action_links_' . plugin_basename(__FILE__), 'ctd_settings_link');
function ctd_settings_link(array $links)
{
    $url = get_admin_url() . "admin.php?page=ctd";
    $settings_link = '<a href="' . esc_url($url) . '">' . esc_html__('Settings', 'click-to-dial') . '</a>';
    $links[] = $settings_link;
    return $links;
}

// Pro version link
add_filter('plugin_action_links_' . plugin_basename(__FILE__), 'ctd_pro_link');
function ctd_pro_link(array $links)
{
    $url = "https://1.envato.market/n17Pv7";
    $settings_link = '<a style="color: #289951; font-weight: 700;" href="' . esc_url($url) . '">' . esc_html__('Go Pro!', 'click-to-dial') . '</a>';
    $links[] = $settings_link;
    return $links;
}

// Register block
function create_ctd_block_init()
{
    register_block_type_from_metadata(CTD_VIEW_DIR_PATH . 'blocks/');
}
add_action('init', 'create_ctd_block_init');

// Register block category 

function ctd_plugin_block_categories($categories)
{
    return array_merge(
        $categories,
        [
            [
                'slug'  => 'click-to-dial-block',
                'title' => __('Click to dial block', 'click-to-dial'),
            ],
        ]
    );
}
add_action('block_categories', 'ctd_plugin_block_categories', 10, 2);



// Script enqueue class include
require_once CTD_DIR_PATH . 'inc/class-enqueue.php';
// View Shortcodes
require_once CTD_DIR_PATH . '/view/elementor-widgets/elementor-widget.php';
require_once CTD_DIR_PATH . 'view/shortcodes/custom-shortcode.php';

// buttons functions
require_once CTD_DIR_PATH . 'inc/functions.php';
// Button template class
require_once CTD_DIR_PATH . 'inc/class-custom-buttons-templates.php';

// single chat bubble template
require_once CTD_DIR_PATH . '/view/chat-bubbles/chat-bubbles.php';

// include framework for admin panel
require_once CTD_DIR_PATH . 'admin/codestar-framework.php';
require_once CTD_DIR_PATH . 'inc/ctd-plugin-options.php';

// pro version notice

function click_to_dial_cyber_week_sale_notice()
{
?>
    <div class="notice notice-success is-dismissible" style="display:flex;align-items:center;gap:20px;justify-content:space-between">
        <!-- <h3>Upgrade to the premium version of the WhatsApp plugin</h3> -->
        <a href="https://1.envato.market/ta-plugins" target="_blank"><img src="https://i.ibb.co/tMQ5R34/envato-onsale.webp" alt="ThemeAtelier Items On Sale at Envato">
        </a>
        <div>
            <a href="https://1.envato.market/n17Pv7" target="_blank" style="color:#fff;text-transform: uppercase; letter-spacing: 1px; display: inline-block; background: #249B55; text-decoration: none; padding: 12px 22px; margin-top: 10px; margin-bottom: 10px;text-align:center">Upgrade click to dial</a>
        </div>
    </div>

<?php
}
add_action('admin_notices', 'click_to_dial_cyber_week_sale_notice');

/**
 * Initialize the plugin tracker
 *
 * @return void
 */
function Ctd_appsero_init()
{

    if (!class_exists('CtdAppSero\Insights')) {
        require_once CTD_DIR_PATH . 'admin/appsero/Client.php';
    }

    $client = new CtdAppSero\Client('9ead1183-9a70-4b15-8191-ff8984e04b28', 'Click To Dial', __FILE__);

    // Active insights
    $client->insights()->init();
}

Ctd_appsero_init();
