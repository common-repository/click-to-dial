<?php

namespace Ctdelementor\Widgets;

use Elementor\Widget_Base;
use Elementor\Controls_Manager;

// Exit if accessed directly
if (!defined('ABSPATH')) {
    exit;
}
/**
 *
 * Laamya elementor about page section widget.
 *
 * @since 1.0
 */
class Ctd_Buttons extends Widget_Base
{

    public function get_name()
    {
        return 'ctd-buttons';
    }

    public function get_title()
    {
        return esc_html__('Click to dial buttons', 'click-to-dial');
    }

    public function get_icon()
    {
        return 'eicon-headphones';
    }

    public function get_categories()
    {
        return ['ctd-elements'];
    }

    protected function _register_controls()
    {


        // ----------------------------------------  Click to dial Buttons Settings ------------------------------

        $this->start_controls_section(
            'ctd__general__settings',
            [
                'label' => esc_html__('General settings', 'click-to-dial'),
                'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
            ]
        );

        $this->add_control(
            'number',
            [
                'label'     => esc_html__('Number', 'click-to-dial'),
                'description' => esc_html__('Add your contact number including country code. eg: +880123456189', 'click-to-dial'),
                'label_block' => false,
                'type'      => Controls_Manager::TEXT,
            ]
        );

        $this->add_control(
            'style',
            [
                'label' => esc_html__('Style', 'click-to-dial'),
                'type'  => Controls_Manager::SELECT,
                'label_block' => false,
                'default' => '1',
                'options' => array(
                    '1'  => esc_html__('Advanced button', 'click-to-dial'),
                    '2'  => esc_html__('Basic button', 'click-to-dial'),
                )

            ]
        );

        $this->add_control(
            'agent__photo',
            [
                'label' => esc_html__('Agent photo', 'click-to-dial'),
                'description' => esc_html__('Add agent photo to show in button.', 'click-to-dial'),
                'type'  => Controls_Manager::MEDIA,
                'label_block' => true,
                'default' => [
                    'url' => CTD_DIR_URL . 'assets/image/user.webp',
                ],
                'condition' => [
                    'style' => '1',
                ],
            ]
        );

        $this->add_control(
            'agent__name',
            [
                'label' => esc_html__('Agent name', 'click-to-dial'),
                'description' => esc_html__('Write agent name to show in button.', 'click-to-dial'),
                'type'  => Controls_Manager::TEXT,
                'label_block' => false,
                'default' => esc_html__('Robert', 'click-to-dial'),
                'condition' => [
                    'style' => '1',
                ],
            ]
        );

        $this->add_control(
            'agent__designation',
            [
                'label' => esc_html__('Agent designation', 'click-to-dial'),
                'description' => esc_html__('Write agent designation to show in button.', 'click-to-dial'),
                'type'  => Controls_Manager::TEXT,
                'label_block' => false,
                'default' => esc_html__('Sales Support', 'click-to-dial'),
                'condition' => [
                    'style' => '1',
                ],
            ]
        );

        $this->add_control(
            'custom__button__label',
            [
                'label' => esc_html__('Button label', 'click-to-dial'),
                'description' => esc_html__('Add custom button label.', 'click-to-dial'),
                'type'  => Controls_Manager::TEXT,
                'label_block' => true,
                'default' => esc_html__('How can I help you?', 'click-to-dial'),
            ]
        );

        $this->add_control(
            'online__text',
            [
                'label' => esc_html__('Online badget text', 'click-to-dial'),
                'description' => esc_html__('Add custom badget text when user in online.', 'click-to-dial'),
                'type'  => Controls_Manager::TEXT,
                'label_block' => false,
                'default' => esc_html__('I\'m avaiable', 'click-to-dial'),
                'condition' => [
                    'style' => '1',
                ],
            ]
        );

        $this->add_control(
            'offline__text',
            [
                'label' => esc_html__('Offline badget text', 'click-to-dial'),
                'description' => esc_html__('Add custom badget text when user in offline.', 'click-to-dial'),
                'type'  => Controls_Manager::TEXT,
                'label_block' => false,
                'default' => esc_html__('I\'m offline', 'click-to-dial'),
                'condition' => [
                    'style' => '1',
                ],
            ]
        );

        $this->end_controls_section(); // End section top content


        $this->start_controls_section(
            'ctd__availablity__manager',
            [
                'label' => esc_html__('Chat settings', 'click-to-dial'),
                'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
                'condition' => [
                    'style' => '1',
                ],
            ]
        );



        $this->add_control(
            'timezone',
            [
                'label' => esc_html__('Timezone', 'click-to-dial'),
                'description' => esc_html__('When using the date and time from the user browser you can transform it to your current timezone (in case your user is in a different timezone)', 'click-to-dial'),
                'type'  => Controls_Manager::SELECT2,
                'label_block' => true,
                'multiple' => false,
                'default' => '1',
                'options' => array(
                    '1' => esc_html__('Select timezone', 'click-to-dial'),
                    'Africa/Abidjan' => esc_html__('Africa/Abidjan', 'click-to-dial'),
                    'Africa/Accra' => esc_html__('Africa/Accra', 'click-to-dial'),
                    'Africa/Addis_Ababa' => esc_html__('Africa/Addis_Ababa', 'click-to-dial'),
                    'Africa/Algiers' => esc_html__('Africa/Algiers', 'click-to-dial'),
                    'Africa/Asmara' => esc_html__('Africa/Asmara', 'click-to-dial'),
                    'Africa/Asmera' => esc_html__('Africa/Asmera', 'click-to-dial'),
                    'Africa/Bamako' => esc_html__('Africa/Bamako', 'click-to-dial'),
                    'Africa/Bangui' => esc_html__('Africa/Bangui', 'click-to-dial'),
                    'Africa/Banjul' => esc_html__('Africa/Banjul', 'click-to-dial'),
                    'Africa/Bissau' => esc_html__('Africa/Bissau', 'click-to-dial'),
                    'Africa/Blantyre' => esc_html__('Africa/Blantyre', 'click-to-dial'),
                    'Africa/Brazzaville' => esc_html__('Africa/Brazzaville', 'click-to-dial'),
                    'Africa/Bujumbura' => esc_html__('Africa/Bujumbura', 'click-to-dial'),
                    'Africa/Cairo' => esc_html__('Africa/Cairo', 'click-to-dial'),
                    'Africa/Casablanca' => esc_html__('Africa/Casablanca', 'click-to-dial'),
                    'Africa/Ceuta' => esc_html__('Africa/Ceuta', 'click-to-dial'),
                    'Africa/Conakry' => esc_html__('Africa/Conakry', 'click-to-dial'),
                    'Africa/Dakar' => esc_html__('Africa/Dakar', 'click-to-dial'),
                    'Africa/Dar_es_Salaam' => esc_html__('Africa/Dar_es_Salaam', 'click-to-dial'),
                    'Africa/Djibouti' => esc_html__('Africa/Djibouti', 'click-to-dial'),
                    'Africa/Douala' => esc_html__('Africa/Douala', 'click-to-dial'),
                    'Africa/El_Aaiun' => esc_html__('Africa/El_Aaiun', 'click-to-dial'),
                    'Africa/Freetown' => esc_html__('Africa/Freetown', 'click-to-dial'),
                    'Africa/Gaborone' => esc_html__('Africa/Gaborone', 'click-to-dial'),
                    'Africa/Harare' => esc_html__('Africa/Harare', 'click-to-dial'),
                    'Africa/Johannesburg' => esc_html__('Africa/Johannesburg', 'click-to-dial'),
                    'Africa/Juba' => esc_html__('Africa/Juba', 'click-to-dial'),
                    'Africa/Kampala' => esc_html__('Africa/Kampala', 'click-to-dial'),
                    'Africa/Khartoum' => esc_html__('Africa/Khartoum', 'click-to-dial'),
                    'Africa/Kigali' => esc_html__('Africa/Kigali', 'click-to-dial'),
                    'Africa/Kinshasa' => esc_html__('Africa/Kinshasa', 'click-to-dial'),
                    'Africa/Lagos' => esc_html__('Africa/Lagos', 'click-to-dial'),
                    'Africa/Libreville' => esc_html__('Africa/Libreville', 'click-to-dial'),
                    'Africa/Lome' => esc_html__('Africa/Lome', 'click-to-dial'),
                    'Africa/Luanda' => esc_html__('Africa/Luanda', 'click-to-dial'),
                    'Africa/Lubumbashi' => esc_html__('Africa/Lubumbashi', 'click-to-dial'),
                    'Africa/Lusaka' => esc_html__('Africa/Lusaka', 'click-to-dial'),
                    'Africa/Malabo' => esc_html__('Africa/Malabo', 'click-to-dial'),
                    'Africa/Maputo' => esc_html__('Africa/Maputo', 'click-to-dial'),
                    'Africa/Maseru' => esc_html__('Africa/Maseru', 'click-to-dial'),
                    'Africa/Mbabane' => esc_html__('Africa/Mbabane', 'click-to-dial'),
                    'Africa/Mogadishu' => esc_html__('Africa/Mogadishu', 'click-to-dial'),
                    'Africa/Monrovia' => esc_html__('Africa/Monrovia', 'click-to-dial'),
                    'Africa/Nairobi' => esc_html__('Africa/Nairobi', 'click-to-dial'),
                    'Africa/Ndjamena' => esc_html__('Africa/Ndjamena', 'click-to-dial'),
                    'Africa/Niamey' => esc_html__('Africa/Niamey', 'click-to-dial'),
                    'Africa/Nouakchott' => esc_html__('Africa/Nouakchott', 'click-to-dial'),
                    'Africa/Ouagadougou' => esc_html__('Africa/Ouagadougou', 'click-to-dial'),
                    'Africa/Porto-Novo' => esc_html__('Africa/Porto-Novo', 'click-to-dial'),
                    'Africa/Sao_Tome' => esc_html__('Africa/Sao_Tome', 'click-to-dial'),
                    'Africa/Timbuktu' => esc_html__('Africa/Timbuktu', 'click-to-dial'),
                    'Africa/Tripoli' => esc_html__('Africa/Tripoli', 'click-to-dial'),
                    'Africa/Tunis' => esc_html__('Africa/Tunis', 'click-to-dial'),
                    'Africa/Windhoek' => esc_html__('Africa/Windhoek', 'click-to-dial'),
                    'America/Adak' => esc_html__('America/Adak', 'click-to-dial'),
                    'America/Anchorage' => esc_html__('America/Anchorage', 'click-to-dial'),
                    'America/Anguilla' => esc_html__('America/Anguilla', 'click-to-dial'),
                    'America/Antigua' => esc_html__('America/Antigua', 'click-to-dial'),
                    'America/Araguaina' => esc_html__('America/Araguaina', 'click-to-dial'),
                    'America/Argentina/Buenos_Aires' => esc_html__('America/Argentina/Buenos_Aires', 'click-to-dial'),
                    'America/Argentina/Catamarca' => esc_html__('America/Argentina/Catamarca', 'click-to-dial'),
                    'America/Argentina/ComodRivadavia' => esc_html__('America/Argentina/ComodRivadavia', 'click-to-dial'),
                    'America/Argentina/Cordoba' => esc_html__('America/Argentina/Cordoba', 'click-to-dial'),
                    'America/Argentina/Jujuy' => esc_html__('America/Argentina/Jujuy', 'click-to-dial'),
                    'America/Argentina/La_Rioja' => esc_html__('America/Argentina/La_Rioja', 'click-to-dial'),
                    'America/Argentina/Mendoza' => esc_html__('America/Argentina/Mendoza', 'click-to-dial'),
                    'America/Argentina/Rio_Gallegos' => esc_html__('America/Argentina/Rio_Gallegos', 'click-to-dial'),
                    'America/Argentina/Salta' => esc_html__('America/Argentina/Salta', 'click-to-dial'),
                    'America/Argentina/San_Juan' => esc_html__('America/Argentina/San_Juan', 'click-to-dial'),
                    'America/Argentina/San_Luis' => esc_html__('America/Argentina/San_Luis', 'click-to-dial'),
                    'America/Argentina/Tucuman' => esc_html__('America/Argentina/Tucuman', 'click-to-dial'),
                    'America/Argentina/Ushuaia' => esc_html__('America/Argentina/Ushuaia', 'click-to-dial'),
                    'America/Aruba' => esc_html__('America/Aruba', 'click-to-dial'),
                    'America/Asuncion' => esc_html__('America/Asuncion', 'click-to-dial'),
                    'America/Atikokan' => esc_html__('America/Atikokan', 'click-to-dial'),
                    'America/Atka' => esc_html__('America/Atka', 'click-to-dial'),
                    'America/Bahia' => esc_html__('America/Bahia', 'click-to-dial'),
                    'America/Bahia_Banderas' => esc_html__('America/Bahia_Banderas', 'click-to-dial'),
                    'America/Barbados' => esc_html__('America/Barbados', 'click-to-dial'),
                    'America/Belem' => esc_html__('America/Belem', 'click-to-dial'),
                    'America/Belize' => esc_html__('America/Belize', 'click-to-dial'),
                    'America/Blanc-Sablon' => esc_html__('America/Blanc-Sablon', 'click-to-dial'),
                    'America/Boa_Vista' => esc_html__('America/Boa_Vista', 'click-to-dial'),
                    'America/Bogota' => esc_html__('America/Bogota', 'click-to-dial'),
                    'America/Boise' => esc_html__('America/Boise', 'click-to-dial'),
                    'America/Buenos_Aires' => esc_html__('America/Buenos_Aires', 'click-to-dial'),
                    'America/Cambridge_Bay' => esc_html__('America/Cambridge_Bay', 'click-to-dial'),
                    'America/Campo_Grande' => esc_html__('America/Campo_Grande', 'click-to-dial'),
                    'America/Cancun' => esc_html__('America/Cancun', 'click-to-dial'),
                    'America/Caracas' => esc_html__('America/Caracas', 'click-to-dial'),
                    'America/Catamarca' => esc_html__('America/Catamarca', 'click-to-dial'),
                    'America/Cayenne' => esc_html__('America/Cayenne', 'click-to-dial'),
                    'America/Cayman' => esc_html__('America/Cayman', 'click-to-dial'),
                    'America/Chicago' => esc_html__('America/Chicago', 'click-to-dial'),
                    'America/Chihuahua' => esc_html__('America/Chihuahua', 'click-to-dial'),
                    'America/Coral_Harbour' => esc_html__('America/Coral_Harbour', 'click-to-dial'),
                    'America/Cordoba' => esc_html__('America/Cordoba', 'click-to-dial'),
                    'America/Costa_Rica' => esc_html__('America/Costa_Rica', 'click-to-dial'),
                    'America/Creston' => esc_html__('America/Creston', 'click-to-dial'),
                    'America/Cuiaba' => esc_html__('America/Cuiaba', 'click-to-dial'),
                    'America/Curacao' => esc_html__('America/Curacao', 'click-to-dial'),
                    'America/Danmarkshavn' => esc_html__('America/Danmarkshavn', 'click-to-dial'),
                    'America/Dawson' => esc_html__('America/Dawson', 'click-to-dial'),
                    'America/Araguaina' => esc_html__('America/Araguaina', 'click-to-dial'),
                    'America/Denver' => esc_html__('America/Denver', 'click-to-dial'),
                    'America/Araguaina' => esc_html__('America/Araguaina', 'click-to-dial'),
                    'America/Dominica' => esc_html__('America/Dominica', 'click-to-dial'),
                    'America/Edmonton' => esc_html__('America/Edmonton', 'click-to-dial'),
                    'America/Eirunepe' => esc_html__('America/Eirunepe', 'click-to-dial'),
                    'America/El_Salvador' => esc_html__('America/El_Salvador', 'click-to-dial'),
                    'America/Ensenada' => esc_html__('America/Ensenada', 'click-to-dial'),
                    'America/Fort_Nelson' => esc_html__('America/Fort_Nelson', 'click-to-dial'),
                    'America/Fort_Wayne' => esc_html__('America/Fort_Wayne', 'click-to-dial'),
                    'America/Fortaleza' => esc_html__('America/Fortaleza', 'click-to-dial'),
                    'America/Glace_Bay' => esc_html__('America/Glace_Bay', 'click-to-dial'),
                    'America/Godthab' => esc_html__('America/Godthab', 'click-to-dial'),
                    'America/Goose_Bay' => esc_html__('America/Goose_Bay', 'click-to-dial'),
                    'America/Grand_Turk' => esc_html__('America/Grand_Turk', 'click-to-dial'),
                    'America/Grenada' => esc_html__('America/Grenada', 'click-to-dial'),
                    'America/Guadeloupe' => esc_html__('America/Guadeloupe', 'click-to-dial'),
                    'America/Guatemala' => esc_html__('America/Guatemala', 'click-to-dial'),
                    'America/Guayaquil' => esc_html__('America/Guayaquil', 'click-to-dial'),
                    'America/Guyana' => esc_html__('America/Guyana', 'click-to-dial'),
                    'America/Halifax' => esc_html__('America/Halifax', 'click-to-dial'),
                    'America/Havana' => esc_html__('America/Havana', 'click-to-dial'),
                    'America/Hermosillo' => esc_html__('America/Hermosillo', 'click-to-dial'),
                    'America/Indiana/Indianapolis' => esc_html__('Indiana/Indianapolis', 'click-to-dial'),
                    'America/Indiana/Knox' => esc_html__('America/Indiana/Knox', 'click-to-dial'),
                    'America/Indiana/Marengo' => esc_html__('America/Indiana/Marengo', 'click-to-dial'),
                    'America/Indiana/Petersburg' => esc_html__('America/Indiana/Petersburg', 'click-to-dial'),
                    'America/Indiana/Tell_City' => esc_html__('America/Indiana/Tell_City', 'click-to-dial'),
                    'America/Indiana/Vevay' => esc_html__('America/Indiana/Vevay', 'click-to-dial'),
                    'America/Indiana/Vincennes' => esc_html__('America/Indiana/Vincennes', 'click-to-dial'),
                    'America/Indiana/Winamac' => esc_html__('America/Indiana/Winamac', 'click-to-dial'),
                    'America/Indianapolis' => esc_html__('America/Indianapolis', 'click-to-dial'),
                    'America/Inuvik' => esc_html__('America/Inuvik', 'click-to-dial'),
                    'America/Iqaluit' => esc_html__('America/Iqaluit', 'click-to-dial'),
                    'America/Jamaica' => esc_html__('America/Jamaica', 'click-to-dial'),
                    'America/Jujuy' => esc_html__('America/Jujuy', 'click-to-dial'),
                    'America/Juneau' => esc_html__('America/Juneau', 'click-to-dial'),
                    'America/Kentucky/Louisville' => esc_html__('America/Kentucky/Louisville', 'click-to-dial'),
                    'America/Kentucky/Monticello' => esc_html__('America/Kentucky/Monticello', 'click-to-dial'),
                    'America/Knox_IN' => esc_html__('America/Knox_IN', 'click-to-dial'),
                    'America/Kralendijk' => esc_html__('America/Kralendijk', 'click-to-dial'),
                    'America/La_Paz' => esc_html__('America/La_Paz', 'click-to-dial'),
                    'America/Lima' => esc_html__('America/Lima', 'click-to-dial'),
                    'America/Los_Angeles' => esc_html__('America/Los_Angeles', 'click-to-dial'),
                    'America/Louisville' => esc_html__('America/Louisville', 'click-to-dial'),
                    'America/Lower_Princes' => esc_html__('America/Lower_Princes', 'click-to-dial'),
                    'America/Maceio' => esc_html__('America/Maceio', 'click-to-dial'),
                    'America/Managua' => esc_html__('America/Managua', 'click-to-dial'),
                    'America/Manaus' => esc_html__('America/Manaus', 'click-to-dial'),
                    'America/Marigot' => esc_html__('America/Marigot', 'click-to-dial'),
                    'America/Martinique' => esc_html__('America/Martinique', 'click-to-dial'),
                    'America/Matamoros' => esc_html__('America/Matamoros', 'click-to-dial'),
                    'America/Mazatlan' => esc_html__('America/Mazatlan', 'click-to-dial'),
                    'America/Mendoza' => esc_html__('America/Mendoza', 'click-to-dial'),
                    'America/Menominee' => esc_html__('America/Menominee', 'click-to-dial'),
                    'America/Merida' => esc_html__('America/Merida', 'click-to-dial'),
                    'America/Metlakatla' => esc_html__('America/Metlakatla', 'click-to-dial'),
                    'America/Mexico_City' => esc_html__('America/Mexico_City', 'click-to-dial'),
                    'America/Miquelon' => esc_html__('America/Miquelon', 'click-to-dial'),
                    'America/Moncton' => esc_html__('America/Moncton', 'click-to-dial'),
                    'America/Monterrey' => esc_html__('America/Monterrey', 'click-to-dial'),
                    'America/Montevideo' => esc_html__('America/Montevideo', 'click-to-dial'),
                    'America/Montreal' => esc_html__('America/Montreal', 'click-to-dial'),
                    'America/Montserrat' => esc_html__('America/Montserrat', 'click-to-dial'),
                    'America/Nassau' => esc_html__('America/Nassau', 'click-to-dial'),
                    'America/New_York' => esc_html__('America/New_York', 'click-to-dial'),
                    'America/Nipigon' => esc_html__('America/Nipigon', 'click-to-dial'),
                    'America/Nome' => esc_html__('America/Nome', 'click-to-dial'),
                    'America/Noronha' => esc_html__('America/Noronha', 'click-to-dial'),
                    'America/North_Dakota/Beulah' => esc_html__('America/North_Dakota/Beulah', 'click-to-dial'),
                    'America/North_Dakota/Center' => esc_html__('America/North_Dakota/Center', 'click-to-dial'),
                    'America/North_Dakota/New_Salem' => esc_html__('America/North_Dakota/New_Salem', 'click-to-dial'),
                    'America/Ojinaga' => esc_html__('America/Ojinaga', 'click-to-dial'),
                    'America/Panama' => esc_html__('America/Panama', 'click-to-dial'),
                    'America/Pangnirtung' => esc_html__('America/Pangnirtung', 'click-to-dial'),
                    'America/Paramaribo' => esc_html__('America/Paramaribo', 'click-to-dial'),
                    'America/Phoenix' => esc_html__('America/Phoenix', 'click-to-dial'),
                    'America/Port-au-Prince' => esc_html__('America/Port-au-Prince', 'click-to-dial'),
                    'America/Port_of_Spain' => esc_html__('America/Port_of_Spain', 'click-to-dial'),
                    'America/Porto_Acre' => esc_html__('America/Porto_Acre', 'click-to-dial'),
                    'America/Porto_Velho' => esc_html__('America/Porto_Velho', 'click-to-dial'),
                    'America/Puerto_Rico' => esc_html__('America/Puerto_Rico', 'click-to-dial'),
                    'America/Punta_Arenas' => esc_html__('America/Punta_Arenas', 'click-to-dial'),
                    'America/Rainy_River' => esc_html__('America/Rainy_River', 'click-to-dial'),
                    'America/Rankin_Inlet' => esc_html__('America/Rankin_Inlet', 'click-to-dial'),
                    'America/Recife' => esc_html__('America/Recife', 'click-to-dial'),
                    'America/Regina' => esc_html__('America/Regina', 'click-to-dial'),
                    'America/Resolute' => esc_html__('America/Resolute', 'click-to-dial'),
                    'America/Rio_Branco' => esc_html__('America/Rio_Branco', 'click-to-dial'),
                    'America/Rosario' => esc_html__('America/Rosario', 'click-to-dial'),
                    'America/Santa_Isabel' => esc_html__('America/Santa_Isabel', 'click-to-dial'),
                    'America/Santarem' => esc_html__('America/Santarem', 'click-to-dial'),
                    'America/Santiago' => esc_html__('America/Santiago', 'click-to-dial'),
                    'America/Santo_Domingo' => esc_html__('America/Santo_Domingo', 'click-to-dial'),
                    'America/Sao_Paulo' => esc_html__('America/Sao_Paulo', 'click-to-dial'),
                    'America/Scoresbysund' => esc_html__('America/Scoresbysund', 'click-to-dial'),
                    'America/Shiprock' => esc_html__('America/Shiprock', 'click-to-dial'),
                    'America/Sitka' => esc_html__('America/Sitka', 'click-to-dial'),
                    'America/St_Barthelemy' => esc_html__('America/St_Barthelemy', 'click-to-dial'),
                    'America/St_Johns' => esc_html__('America/St_Johns', 'click-to-dial'),
                    'America/St_Kitts' => esc_html__('America/St_Kitts', 'click-to-dial'),
                    'America/St_Lucia' => esc_html__('America/St_Lucia', 'click-to-dial'),
                    'America/St_Thomas' => esc_html__('America/St_Thomas', 'click-to-dial'),
                    'America/St_Vincent' => esc_html__('America/St_Vincent', 'click-to-dial'),
                    'America/Swift_Current' => esc_html__('America/Swift_Current', 'click-to-dial'),
                    'America/Tegucigalpa' => esc_html__('America/Tegucigalpa', 'click-to-dial'),
                    'America/Thule' => esc_html__('America/Thule', 'click-to-dial'),
                    'America/Thunder_Bay' => esc_html__('America/Thunder_Bay', 'click-to-dial'),
                    'America/Tijuana' => esc_html__('America/Tijuana', 'click-to-dial'),
                    'America/Toronto' => esc_html__('America/Toronto', 'click-to-dial'),
                    'America/Tortola' => esc_html__('America/Tortola', 'click-to-dial'),
                    'America/Vancouver' => esc_html__('America/Vancouver', 'click-to-dial'),
                    'America/Virgin' => esc_html__('America/Virgin', 'click-to-dial'),
                    'America/Whitehorse' => esc_html__('America/Whitehorse', 'click-to-dial'),
                    'America/Winnipeg' => esc_html__('America/Winnipeg', 'click-to-dial'),
                    'America/Yakutat' => esc_html__('America/Yakutat', 'click-to-dial'),
                    'America/Yellowknife' => esc_html__('America/Yellowknife', 'click-to-dial'),
                    'Antarctica/Casey' => esc_html__('Antarctica/Casey', 'click-to-dial'),
                    'Antarctica/Davis' => esc_html__('Antarctica/Davis', 'click-to-dial'),
                    'Antarctica/DumontDUrville' => esc_html__('Antarctica/DumontDUrville', 'click-to-dial'),
                    'Antarctica/Macquarie' => esc_html__('Antarctica/Macquarie', 'click-to-dial'),
                    'Antarctica/Mawson' => esc_html__('Antarctica/Mawson', 'click-to-dial'),
                    'Antarctica/McMurdo' => esc_html__('Antarctica/McMurdo', 'click-to-dial'),
                    'Antarctica/Palmer' => esc_html__('Antarctica/Palmer', 'click-to-dial'),
                    'Antarctica/Rothera' => esc_html__('Antarctica/Rothera', 'click-to-dial'),
                    'Antarctica/South_Pole' => esc_html__('Antarctica/South_Pole', 'click-to-dial'),
                    'Antarctica/Syowa' => esc_html__('Antarctica/Syowa', 'click-to-dial'),
                    'Antarctica/Troll' => esc_html__('Antarctica/Troll', 'click-to-dial'),
                    'Antarctica/Vostok' => esc_html__('Antarctica/Vostok', 'click-to-dial'),
                    'Arctic/Longyearbyen' => esc_html__('Arctic/Longyearbyen', 'click-to-dial'),
                    'Asia/Aden' => esc_html__('Asia/Aden', 'click-to-dial'),
                    'Asia/Almaty' => esc_html__('Asia/Almaty', 'click-to-dial'),
                    'Asia/Amman' => esc_html__('Asia/Amman', 'click-to-dial'),
                    'Asia/Anadyr' => esc_html__('Asia/Anadyr', 'click-to-dial'),
                    'Asia/Aqtau' => esc_html__('Asia/Aqtau', 'click-to-dial'),
                    'Asia/Aqtobe' => esc_html__('Asia/Aqtobe', 'click-to-dial'),
                    'Asia/Ashgabat' => esc_html__('Asia/Ashgabat', 'click-to-dial'),
                    'Asia/Ashkhabad' => esc_html__('Asia/Ashkhabad', 'click-to-dial'),
                    'Asia/Atyrau' => esc_html__('Asia/Atyrau', 'click-to-dial'),
                    'Asia/Baghdad' => esc_html__('Asia/Baghdad', 'click-to-dial'),
                    'Asia/Bahrain' => esc_html__('Asia/Bahrain', 'click-to-dial'),
                    'Asia/Baku' => esc_html__('Asia/Baku', 'click-to-dial'),
                    'Asia/Bangkok' => esc_html__('Asia/Bangkok', 'click-to-dial'),
                    'Asia/Barnaul' => esc_html__('Asia/Barnaul', 'click-to-dial'),
                    'Asia/Beirut' => esc_html__('Asia/Beirut', 'click-to-dial'),
                    'Asia/Bishkek' => esc_html__('Asia/Bishkek', 'click-to-dial'),
                    'Asia/Brunei' => esc_html__('Asia/Brunei', 'click-to-dial'),
                    'Asia/Calcutta' => esc_html__('Asia/Calcutta', 'click-to-dial'),
                    'Asia/Chita' => esc_html__('Asia/Chita', 'click-to-dial'),
                    'Asia/Choibalsan' => esc_html__('Asia/Choibalsan', 'click-to-dial'),
                    'Asia/Chongqing' => esc_html__('Asia/Chongqing', 'click-to-dial'),
                    'Asia/Chungking' => esc_html__('Asia/Chungking', 'click-to-dial'),
                    'Asia/Colombo' => esc_html__('Asia/Colombo', 'click-to-dial'),
                    'Asia/Dacca' => esc_html__('Asia/Dacca', 'click-to-dial'),
                    'Asia/Damascus' => esc_html__('Asia/Damascus', 'click-to-dial'),
                    'Asia/Dhaka' => esc_html__('Asia/Dhaka', 'click-to-dial'),
                    'Asia/Dili' => esc_html__('Asia/Dili', 'click-to-dial'),
                    'Asia/Dubai' => esc_html__('Asia/Dubai', 'click-to-dial'),
                    'Asia/Dushanbe' => esc_html__('Asia/Dushanbe', 'click-to-dial'),
                    'Asia/Famagusta' => esc_html__('Asia/Famagusta', 'click-to-dial'),
                    'Asia/Gaza' => esc_html__('Asia/Gaza', 'click-to-dial'),
                    'Asia/Harbin' => esc_html__('Asia/Harbin', 'click-to-dial'),
                    'Asia/Hebron' => esc_html__('Asia/Hebron', 'click-to-dial'),
                    'Asia/Ho_Chi_Minh' => esc_html__('Asia/Ho_Chi_Minh', 'click-to-dial'),
                    'Asia/Hong_Kong' => esc_html__('Asia/Hong_Kong', 'click-to-dial'),
                    'Asia/Hovd' => esc_html__('Asia/Hovd', 'click-to-dial'),
                    'Asia/Irkutsk' => esc_html__('Asia/Irkutsk', 'click-to-dial'),
                    'Asia/Istanbul' => esc_html__('Asia/Istanbul', 'click-to-dial'),
                    'Asia/Jakarta' => esc_html__('Asia/Jakarta', 'click-to-dial'),
                    'Asia/Jayapura' => esc_html__('Asia/Jayapura', 'click-to-dial'),
                    'Asia/Jerusalem' => esc_html__('Asia/Jerusalem', 'click-to-dial'),
                    'Asia/Kabul' => esc_html__('Asia/Kabul', 'click-to-dial'),
                    'Asia/Kamchatka' => esc_html__('Asia/Kamchatka', 'click-to-dial'),
                    'Asia/Karachi' => esc_html__('Asia/Karachi', 'click-to-dial'),
                    'Asia/Kashgar' => esc_html__('Asia/Kashgar', 'click-to-dial'),
                    'Asia/Kathmandu' => esc_html__('Asia/Kathmandu', 'click-to-dial'),
                    'Asia/Katmandu' => esc_html__('Asia/Katmandu', 'click-to-dial'),
                    'Asia/Khandyga' => esc_html__('Asia/Khandyga', 'click-to-dial'),
                    'Asia/Kolkata' => esc_html__('Asia/Kolkata', 'click-to-dial'),
                    'Asia/Krasnoyarsk' => esc_html__('Asia/Krasnoyarsk', 'click-to-dial'),
                    'Asia/Kuala_Lumpur' => esc_html__('Asia/Kuala_Lumpur', 'click-to-dial'),
                    'Asia/Kuching' => esc_html__('Asia/Kuching', 'click-to-dial'),
                    'Asia/Kuwait' => esc_html__('Asia/Kuwait', 'click-to-dial'),
                    'Asia/Macao' => esc_html__('Asia/Macao', 'click-to-dial'),
                    'Asia/Macau' => esc_html__('Asia/Macau', 'click-to-dial'),
                    'Asia/Magadan' => esc_html__('Asia/Magadan', 'click-to-dial'),
                    'Asia/Makassar' => esc_html__('Asia/Makassar', 'click-to-dial'),
                    'Asia/Manila' => esc_html__('Asia/Manila', 'click-to-dial'),
                    'Asia/Muscat' => esc_html__('Asia/Muscat', 'click-to-dial'),
                    'Asia/Nicosia' => esc_html__('Asia/Nicosia', 'click-to-dial'),
                    'Asia/Novokuznetsk' => esc_html__('Asia/Novokuznetsk', 'click-to-dial'),
                    'Asia/Novosibirsk' => esc_html__('Asia/Novosibirsk', 'click-to-dial'),
                    'Asia/Omsk' => esc_html__('Asia/Omsk', 'click-to-dial'),
                    'Asia/Oral' => esc_html__('Asia/Oral', 'click-to-dial'),
                    'Asia/Phnom_Penh' => esc_html__('Asia/Phnom_Penh', 'click-to-dial'),
                    'Asia/Pontianak' => esc_html__('Asia/Pontianak', 'click-to-dial'),
                    'Asia/Pyongyang' => esc_html__('Asia/Pyongyang', 'click-to-dial'),
                    'Asia/Qatar' => esc_html__('Asia/Qatar', 'click-to-dial'),
                    'Asia/Qyzylorda' => esc_html__('Asia/Qyzylorda', 'click-to-dial'),
                    'Asia/Rangoon' => esc_html__('Asia/Rangoon', 'click-to-dial'),
                    'Asia/Riyadh' => esc_html__('Asia/Riyadh', 'click-to-dial'),
                    'Asia/Saigon' => esc_html__('Asia/Saigon', 'click-to-dial'),
                    'Asia/Sakhalin' => esc_html__('Asia/Sakhalin', 'click-to-dial'),
                    'Asia/Samarkand' => esc_html__('Asia/Samarkand', 'click-to-dial'),
                    'Asia/Seoul' => esc_html__('Asia/Seoul', 'click-to-dial'),
                    'Asia/Shanghai' => esc_html__('Asia/Shanghai', 'click-to-dial'),
                    'Asia/Singapore' => esc_html__('Asia/Singapore', 'click-to-dial'),
                    'Asia/Srednekolymsk' => esc_html__('Asia/Srednekolymsk', 'click-to-dial'),
                    'Asia/Taipei' => esc_html__('Asia/Taipei', 'click-to-dial'),
                    'Asia/Tashkent' => esc_html__('Asia/Tashkent', 'click-to-dial'),
                    'Asia/Tbilisi' => esc_html__('Asia/Tbilisi', 'click-to-dial'),
                    'Asia/Tehran' => esc_html__('Asia/Tehran', 'click-to-dial'),
                    'Asia/Tel_Aviv' => esc_html__('Asia/Tel_Aviv', 'click-to-dial'),
                    'Asia/Thimbu' => esc_html__('Asia/Thimbu', 'click-to-dial'),
                    'Asia/Thimphu' => esc_html__('Asia/Thimphu', 'click-to-dial'),
                    'Asia/Tokyo' => esc_html__('Asia/Tokyo', 'click-to-dial'),
                    'Asia/Tomsk' => esc_html__('Asia/Tomsk', 'click-to-dial'),
                    'Asia/Ujung_Pandang' => esc_html__('Asia/Ujung_Pandang', 'click-to-dial'),
                    'Asia/Ulaanbaatar' => esc_html__('Asia/Ulaanbaatar', 'click-to-dial'),
                    'Asia/Ulan_Bator' => esc_html__('Asia/Ulan_Bator', 'click-to-dial'),
                    'Asia/Urumqi' => esc_html__('Asia/Urumqi', 'click-to-dial'),
                    'Asia/Ust-Nera' => esc_html__('Asia/Ust-Nera', 'click-to-dial'),
                    'Asia/Vientiane' => esc_html__('Asia/Vientiane', 'click-to-dial'),
                    'Asia/Vladivostok' => esc_html__('Asia/Vladivostok', 'click-to-dial'),
                    'Asia/Yakutsk' => esc_html__('Asia/Yakutsk', 'click-to-dial'),
                    'Asia/Yangon' => esc_html__('Asia/Yangon', 'click-to-dial'),
                    'Asia/Yekaterinburg' => esc_html__('Asia/Yekaterinburg', 'click-to-dial'),
                    'Asia/Yerevan' => esc_html__('Asia/Yerevan', 'click-to-dial'),
                    'Atlantic/Azores' => esc_html__('Atlantic/Azores', 'click-to-dial'),
                    'Atlantic/Bermuda' => esc_html__('Atlantic/Bermuda', 'click-to-dial'),
                    'Atlantic/Canary' => esc_html__('Atlantic/Canary', 'click-to-dial'),
                    'Atlantic/Cape_Verde' => esc_html__('Atlantic/Cape_Verde', 'click-to-dial'),
                    'Atlantic/Faeroe' => esc_html__('Atlantic/Faeroe', 'click-to-dial'),
                    'Atlantic/Faroe' => esc_html__('Atlantic/Faroe', 'click-to-dial'),
                    'Atlantic/Jan_Mayen' => esc_html__('Atlantic/Jan_Mayen', 'click-to-dial'),
                    'Atlantic/Madeira' => esc_html__('Atlantic/Madeira', 'click-to-dial'),
                    'Atlantic/Reykjavik' => esc_html__('Atlantic/Reykjavik', 'click-to-dial'),
                    'Atlantic/South_Georgia' => esc_html__('Atlantic/South_Georgia', 'click-to-dial'),
                    'Atlantic/St_Helena' => esc_html__('Atlantic/St_Helena', 'click-to-dial'),
                    'Atlantic/Stanley' => esc_html__('Atlantic/Stanley', 'click-to-dial'),
                    'Australia/ACT' => esc_html__('Australia/ACT', 'click-to-dial'),
                    'Australia/Adelaide' => esc_html__('Australia/Adelaide', 'click-to-dial'),
                    'Australia/Brisbane' => esc_html__('Australia/Brisbane', 'click-to-dial'),
                    'Australia/Broken_Hill' => esc_html__('Asia/Broken_Hill', 'click-to-dial'),
                    'Australia/Canberra' => esc_html__('Australia/Canberra', 'click-to-dial'),
                    'Australia/Currie' => esc_html__('Australia/Currie', 'click-to-dial'),
                    'Australia/Darwin' => esc_html__('Australia/Darwin', 'click-to-dial'),
                    'Australia/Eucla' => esc_html__('Australia/Eucla', 'click-to-dial'),
                    'Australia/Hobart' => esc_html__('Australia/Hobart', 'click-to-dial'),
                    'Australia/LHI' => esc_html__('Australia/LHI', 'click-to-dial'),
                    'Australia/Lindeman' => esc_html__('Australia/Lindeman', 'click-to-dial'),
                    'Australia/Lord_Howe' => esc_html__('Australia/Lord_Howe', 'click-to-dial'),
                    'Australia/Melbourne' => esc_html__('Australia/Melbourne', 'click-to-dial'),
                    'Australia/NSW' => esc_html__('Australia/NSW', 'click-to-dial'),
                    'Australia/North' => esc_html__('Australia/North', 'click-to-dial'),
                    'Australia/Perth' => esc_html__('Australia/Perth', 'click-to-dial'),
                    'Australia/Queensland' => esc_html__('Australia/Queensland', 'click-to-dial'),
                    'Australia/South' => esc_html__('Australia/South', 'click-to-dial'),
                    'Australia/Sydney' => esc_html__('Australia/Sydney', 'click-to-dial'),
                    'Australia/Tasmania' => esc_html__('Australia/Tasmania', 'click-to-dial'),
                    'Australia/Victoria' => esc_html__('Australia/Victoria', 'click-to-dial'),
                    'Australia/West' => esc_html__('Australia/West', 'click-to-dial'),
                    'Australia/Yancowinna' => esc_html__('Australia/Yancowinna', 'click-to-dial'),
                    'Brazil/Acre' => esc_html__('Brazil/Acre', 'click-to-dial'),
                    'Brazil/DeNoronha' => esc_html__('Brazil/DeNoronha', 'click-to-dial'),
                    'Brazil/East' => esc_html__('Brazil/East', 'click-to-dial'),
                    'Brazil/West' => esc_html__('Brazil/West', 'click-to-dial'),
                    'CET' => esc_html__('CET', 'click-to-dial'),
                    'CST6CDT' => esc_html__('CST6CDT', 'click-to-dial'),
                    'Canada/Atlantic' => esc_html__('Canada/Atlantic', 'click-to-dial'),
                    'Canada/Central' => esc_html__('Canada/Central', 'click-to-dial'),
                    'Canada/Eastern' => esc_html__('Canada/Eastern', 'click-to-dial'),
                    'Canada/Mountain' => esc_html__('Canada/Mountain', 'click-to-dial'),
                    'Canada/Newfoundland' => esc_html__('Canada/Newfoundland', 'click-to-dial'),
                    'Canada/Pacific' => esc_html__('Canada/Pacific', 'click-to-dial'),
                    'Canada/Saskatchewan' => esc_html__('Canada/Saskatchewan', 'click-to-dial'),
                    'Canada/Yukon' => esc_html__('Canada/Yukon', 'click-to-dial'),
                    'Chile/Continental' => esc_html__('Chile/Continental', 'click-to-dial'),
                    'Chile/EasterIsland' => esc_html__('Chile/EasterIsland', 'click-to-dial'),
                    'Cuba' => esc_html__('Cuba', 'click-to-dial'),
                    'EET' => esc_html__('EET', 'click-to-dial'),
                    'EST' => esc_html__('EST', 'click-to-dial'),
                    'EST5EDT' => esc_html__('EST5EDT', 'click-to-dial'),
                    'Egypt' => esc_html__('Egypt', 'click-to-dial'),
                    'Eire' => esc_html__('Eire', 'click-to-dial'),
                    'Etc/GMT' => esc_html__('Etc/GMT', 'click-to-dial'),
                    'Etc/GMT+0' => esc_html__('Etc/GMT+0', 'click-to-dial'),
                    'Etc/GMT+1' => esc_html__('Etc/GMT+1', 'click-to-dial'),
                    'Etc/GMT+10' => esc_html__('Etc/GMT+10', 'click-to-dial'),
                    'Etc/GMT+11' => esc_html__('Etc/GMT+11', 'click-to-dial'),
                    'Etc/GMT+12' => esc_html__('Etc/GMT+12', 'click-to-dial'),
                    'Etc/GMT+2' => esc_html__('Etc/GMT+2', 'click-to-dial'),
                    'Etc/GMT+3' => esc_html__('Etc/GMT+3', 'click-to-dial'),
                    'Etc/GMT+4' => esc_html__('Etc/GMT+4', 'click-to-dial'),
                    'Etc/GMT+5' => esc_html__('Etc/GMT+5', 'click-to-dial'),
                    'Etc/GMT+6' => esc_html__('Etc/GMT+6', 'click-to-dial'),
                    'Etc/GMT+7' => esc_html__('Etc/GMT+7', 'click-to-dial'),
                    'Etc/GMT+8' => esc_html__('Etc/GMT+8', 'click-to-dial'),
                    'Etc/GMT+9' => esc_html__('Etc/GMT+9', 'click-to-dial'),
                    'Etc/GMT-0' => esc_html__('Etc/GMT-0', 'click-to-dial'),
                    'Etc/GMT-1' => esc_html__('Etc/GMT-1', 'click-to-dial'),
                    'Etc/GMT-10' => esc_html__('Etc/GMT-10', 'click-to-dial'),
                    'Etc/GMT-11' => esc_html__('Etc/GMT-11', 'click-to-dial'),
                    'Etc/GMT-12' => esc_html__('Etc/GMT-12', 'click-to-dial'),
                    'Etc/GMT-13' => esc_html__('Etc/GMT-13', 'click-to-dial'),
                    'Etc/GMT-14' => esc_html__('Etc/GMT-14', 'click-to-dial'),
                    'Etc/GMT-2' => esc_html__('Etc/GMT-2', 'click-to-dial'),
                    'Etc/GMT-3' => esc_html__('Etc/GMT-3', 'click-to-dial'),
                    'Etc/GMT-4' => esc_html__('Etc/GMT-4', 'click-to-dial'),
                    'Etc/GMT-5' => esc_html__('Etc/GMT-5', 'click-to-dial'),
                    'Etc/GMT-6' => esc_html__('Etc/GMT-6', 'click-to-dial'),
                    'Etc/GMT-7' => esc_html__('Etc/GMT-7', 'click-to-dial'),
                    'Etc/GMT-8' => esc_html__('Etc/GMT-8', 'click-to-dial'),
                    'Etc/GMT-9' => esc_html__('Etc/GMT-9', 'click-to-dial'),
                    'Etc/GMT0' => esc_html__('Etc/GMT0', 'click-to-dial'),
                    'Etc/Greenwich' => esc_html__('Etc/Greenwich', 'click-to-dial'),
                    'Etc/UCT' => esc_html__('Etc/UCT', 'click-to-dial'),
                    'Etc/UTC' => esc_html__('Etc/UTC', 'click-to-dial'),
                    'Etc/Universal' => esc_html__('Etc/Universal', 'click-to-dial'),
                    'Etc/Zulu' => esc_html__('Etc/Zulu', 'click-to-dial'),
                    'Europe/Amsterdam' => esc_html__('Europe/Amsterdam', 'click-to-dial'),
                    'Europe/Andorra' => esc_html__('Europe/Andorra', 'click-to-dial'),
                    'Europe/Astrakhan' => esc_html__('Europe/Astrakhan', 'click-to-dial'),
                    'Europe/Athens' => esc_html__('Europe/Athens', 'click-to-dial'),
                    'Europe/Belfast' => esc_html__('Europe/Belfast', 'click-to-dial'),
                    'Europe/Belgrade' => esc_html__('Europe/Belgrade', 'click-to-dial'),
                    'Europe/Berlin' => esc_html__('Europe/Berlin', 'click-to-dial'),
                    'Europe/Bratislava' => esc_html__('Europe/Bratislava', 'click-to-dial'),
                    'Europe/Brussels' => esc_html__('Europe/Brussels', 'click-to-dial'),
                    'Europe/Bucharest' => esc_html__('Europe/Bucharest', 'click-to-dial'),
                    'Europe/Budapest' => esc_html__('Europe/Budapest', 'click-to-dial'),
                    'Europe/Busingen' => esc_html__('Europe/Busingen', 'click-to-dial'),
                    'Europe/Chisinau' => esc_html__('Europe/Chisinau', 'click-to-dial'),
                    'Europe/Copenhagen' => esc_html__('Europe/Copenhagen', 'click-to-dial'),
                    'Europe/Dublin' => esc_html__('Europe/Dublin', 'click-to-dial'),
                    'Europe/Gibraltar' => esc_html__('Europe/Gibraltar', 'click-to-dial'),
                    'Europe/Guernsey' => esc_html__('Europe/Guernsey', 'click-to-dial'),
                    'Europe/Helsinki' => esc_html__('Europe/Helsinki', 'click-to-dial'),
                    'Europe/Isle_of_Man' => esc_html__('Europe/Isle_of_Man', 'click-to-dial'),
                    'Europe/Istanbul' => esc_html__('Europe/Istanbul', 'click-to-dial'),
                    'Europe/Jersey' => esc_html__('Europe/Jersey', 'click-to-dial'),
                    'Europe/Kaliningrad' => esc_html__('Europe/Kaliningrad', 'click-to-dial'),
                    'Europe/Kiev' => esc_html__('Europe/Kiev', 'click-to-dial'),
                    'Europe/Kirov' => esc_html__('Europe/Kirov', 'click-to-dial'),
                    'Europe/Lisbon' => esc_html__('Europe/Lisbon', 'click-to-dial'),
                    'Europe/Ljubljana' => esc_html__('Europe/Ljubljana', 'click-to-dial'),
                    'Europe/London' => esc_html__('Europe/London', 'click-to-dial'),
                    'Europe/Luxembourg' => esc_html__('Europe/Luxembourg', 'click-to-dial'),
                    'Europe/Madrid' => esc_html__('Europe/Madrid', 'click-to-dial'),
                    'Europe/Malta' => esc_html__('Europe/Malta', 'click-to-dial'),
                    'Europe/Mariehamn' => esc_html__('Europe/Mariehamn', 'click-to-dial'),
                    'Europe/Minsk' => esc_html__('Europe/Minsk', 'click-to-dial'),
                    'Europe/Monaco' => esc_html__('Europe/Monaco', 'click-to-dial'),
                    'Europe/Moscow' => esc_html__('Europe/Moscow', 'click-to-dial'),
                    'Europe/Nicosia' => esc_html__('Europe/Nicosia', 'click-to-dial'),
                    'Europe/Oslo' => esc_html__('Europe/Oslo', 'click-to-dial'),
                    'Europe/Paris' => esc_html__('Europe/Paris', 'click-to-dial'),
                    'Europe/Podgorica' => esc_html__('Europe/Podgorica', 'click-to-dial'),
                    'Europe/Prague' => esc_html__('Europe/Prague', 'click-to-dial'),
                    'Europe/Riga' => esc_html__('Europe/Riga', 'click-to-dial'),
                    'Europe/Rome' => esc_html__('Europe/Rome', 'click-to-dial'),
                    'Europe/Samara' => esc_html__('Europe/Samara', 'click-to-dial'),
                    'Europe/San_Marino' => esc_html__('Europe/San_Marino', 'click-to-dial'),
                    'Europe/Sarajevo' => esc_html__('Europe/Sarajevo', 'click-to-dial'),
                    'Europe/Saratov' => esc_html__('Europe/Saratov', 'click-to-dial'),
                    'Europe/Simferopol' => esc_html__('Europe/Simferopol', 'click-to-dial'),
                    'Europe/Skopje' => esc_html__('Europe/Skopje', 'click-to-dial'),
                    'Europe/Sofia' => esc_html__('Europe/Sofia', 'click-to-dial'),
                    'Europe/Stockholm' => esc_html__('Europe/Stockholm', 'click-to-dial'),
                    'Europe/Tallinn' => esc_html__('Europe/Tallinn', 'click-to-dial'),
                    'Europe/Tirane' => esc_html__('Europe/Tirane', 'click-to-dial'),
                    'Europe/Tiraspol' => esc_html__('Europe/Tiraspol', 'click-to-dial'),
                    'Europe/Ulyanovsk' => esc_html__('Europe/Ulyanovsk', 'click-to-dial'),
                    'Europe/Uzhgorod' => esc_html__('Europe/Uzhgorod', 'click-to-dial'),
                    'Europe/Vaduz' => esc_html__('Europe/Vaduz', 'click-to-dial'),
                    'Europe/Vatican' => esc_html__('Europe/Vatican', 'click-to-dial'),
                    'Europe/Vienna' => esc_html__('Europe/Vienna', 'click-to-dial'),
                    'Europe/Vilnius' => esc_html__('Europe/Vilnius', 'click-to-dial'),
                    'Europe/Volgograd' => esc_html__('Europe/Volgograd', 'click-to-dial'),
                    'Europe/Warsaw' => esc_html__('Europe/Warsaw', 'click-to-dial'),
                    'Europe/Zagreb' => esc_html__('Europe/Zagreb', 'click-to-dial'),
                    'Europe/Zaporozhye' => esc_html__('Europe/Zaporozhye', 'click-to-dial'),
                    'Europe/Zurich' => esc_html__('Europe/Zurich', 'click-to-dial'),
                    'GB' => esc_html__('GB', 'click-to-dial'),
                    'GB-Eire' => esc_html__('GB-Eire', 'click-to-dial'),
                    'GMT' => esc_html__('GMT', 'click-to-dial'),
                    'GMT+0' => esc_html__('GMT+0', 'click-to-dial'),
                    'GMT-0' => esc_html__('GMT-0', 'click-to-dial'),
                    'GMT0' => esc_html__('GMT0', 'click-to-dial'),
                    'Greenwich' => esc_html__('Greenwich', 'click-to-dial'),
                    'HST' => esc_html__('HST', 'click-to-dial'),
                    'Hongkong' => esc_html__('Hongkong', 'click-to-dial'),
                    'Iceland' => esc_html__('Iceland', 'click-to-dial'),
                    'Indian/Antananarivo' => esc_html__('Indian/Antananarivo', 'click-to-dial'),
                    'Indian/Chagos' => esc_html__('Indian/Chagos', 'click-to-dial'),
                    'Indian/Christmas' => esc_html__('Indian/Christmas', 'click-to-dial'),
                    'Indian/Cocos' => esc_html__('Indian/Cocos', 'click-to-dial'),
                    'Indian/Comoro' => esc_html__('Indian/Comoro', 'click-to-dial'),
                    'Indian/Kerguelen' => esc_html__('Indian/Kerguelen', 'click-to-dial'),
                    'Indian/Mahe' => esc_html__('Indian/Mahe', 'click-to-dial'),
                    'Indian/Maldives' => esc_html__('Indian/Maldives', 'click-to-dial'),
                    'Indian/Mauritius' => esc_html__('Indian/Mauritius', 'click-to-dial'),
                    'Indian/Mayotte' => esc_html__('Indian/Mayotte', 'click-to-dial'),
                    'Indian/Reunion' => esc_html__('Indian/Reunion', 'click-to-dial'),
                    'Iran' => esc_html__('Iran', 'click-to-dial'),
                    'Israel' => esc_html__('Israel', 'click-to-dial'),
                    'Jamaica' => esc_html__('Jamaica', 'click-to-dial'),
                    'Japan' => esc_html__('Japan', 'click-to-dial'),
                    'Kwajalein' => esc_html__('Kwajalein', 'click-to-dial'),
                    'Libya' => esc_html__('Libya', 'click-to-dial'),
                    'MET' => esc_html__('MET', 'click-to-dial'),
                    'MST' => esc_html__('MST', 'click-to-dial'),
                    'MST7MDT' => esc_html__('MST7MDT', 'click-to-dial'),
                    'Mexico/BajaNorte' => esc_html__('Mexico/BajaNorte', 'click-to-dial'),
                    'Mexico/BajaSur' => esc_html__('Mexico/BajaSur', 'click-to-dial'),
                    'Mexico/General' => esc_html__('Mexico/General', 'click-to-dial'),
                    'NZ' => esc_html__('NZ', 'click-to-dial'),
                    'NZ-CHAT' => esc_html__('NZ-CHAT', 'click-to-dial'),
                    'Navajo' => esc_html__('Navajo', 'click-to-dial'),
                    'PRC' => esc_html__('PRC', 'click-to-dial'),
                    'PST8PDT' => esc_html__('PST8PDT', 'click-to-dial'),
                    'Pacific/Apia' => esc_html__('Pacific/Apia', 'click-to-dial'),
                    'Pacific/Auckland' => esc_html__('Pacific/Auckland', 'click-to-dial'),
                    'Pacific/Bougainville' => esc_html__('Pacific/Bougainville', 'click-to-dial'),
                    'Pacific/Chatham' => esc_html__('Pacific/Chatham', 'click-to-dial'),
                    'Pacific/Chuuk' => esc_html__('Pacific/Chuuk', 'click-to-dial'),
                    'Pacific/Easter' => esc_html__('Pacific/Easter', 'click-to-dial'),
                    'Pacific/Efate' => esc_html__('Pacific/Efate', 'click-to-dial'),
                    'Pacific/Enderbury' => esc_html__('Pacific/Enderbury', 'click-to-dial'),
                    'Pacific/Fakaofo' => esc_html__('Pacific/Fakaofo', 'click-to-dial'),
                    'Pacific/Fiji' => esc_html__('Pacific/Fiji', 'click-to-dial'),
                    'Pacific/Funafuti' => esc_html__('Pacific/Funafuti', 'click-to-dial'),
                    'Pacific/Galapagos' => esc_html__('Pacific/Galapagos', 'click-to-dial'),
                    'Pacific/Gambier' => esc_html__('Pacific/Gambier', 'click-to-dial'),
                    'Pacific/Guadalcanal' => esc_html__('Pacific/Guadalcanal', 'click-to-dial'),
                    'Pacific/Guam' => esc_html__('Pacific/Guam', 'click-to-dial'),
                    'Pacific/Honolulu' => esc_html__('Pacific/Honolulu', 'click-to-dial'),
                    'Pacific/Johnston' => esc_html__('Pacific/Johnston', 'click-to-dial'),
                    'Pacific/Kiritimati' => esc_html__('Pacific/Kiritimati', 'click-to-dial'),
                    'Pacific/Kosrae' => esc_html__('Pacific/Kosrae', 'click-to-dial'),
                    'Pacific/Kwajalein' => esc_html__('Pacific/Kwajalein', 'click-to-dial'),
                    'Pacific/Majuro' => esc_html__('Pacific/Majuro', 'click-to-dial'),
                    'Pacific/Marquesas' => esc_html__('Pacific/Marquesas', 'click-to-dial'),
                    'Pacific/Midway' => esc_html__('Pacific/Midway', 'click-to-dial'),
                    'Pacific/Nauru' => esc_html__('Pacific/Nauru', 'click-to-dial'),
                    'Pacific/Niue' => esc_html__('Pacific/Niue', 'click-to-dial'),
                    'Pacific/Norfolk' => esc_html__('Pacific/Norfolk', 'click-to-dial'),
                    'Pacific/Noumea' => esc_html__('Pacific/Noumea', 'click-to-dial'),
                    'Pacific/Pago_Pago' => esc_html__('Pacific/Pago_Pago', 'click-to-dial'),
                    'Pacific/Palau' => esc_html__('Pacific/Palau', 'click-to-dial'),
                    'Pacific/Pitcairn' => esc_html__('Pacific/Pitcairn', 'click-to-dial'),
                    'Pacific/Pohnpei' => esc_html__('Pacific/Pohnpei', 'click-to-dial'),
                    'Pacific/Ponape' => esc_html__('Pacific/Ponape', 'click-to-dial'),
                    'Pacific/Port_Moresby' => esc_html__('Pacific/Port_Moresby', 'click-to-dial'),
                    'Pacific/Rarotonga' => esc_html__('Pacific/Rarotonga', 'click-to-dial'),
                    'Pacific/Saipan' => esc_html__('Pacific/Saipan', 'click-to-dial'),
                    'Pacific/Samoa' => esc_html__('Pacific/Samoa', 'click-to-dial'),
                    'Pacific/Tahiti' => esc_html__('Pacific/Tahiti', 'click-to-dial'),
                    'Pacific/Tarawa' => esc_html__('Pacific/Tarawa', 'click-to-dial'),
                    'Pacific/Tongatapu' => esc_html__('Pacific/Tongatapu', 'click-to-dial'),
                    'Pacific/Truk' => esc_html__('Pacific/Truk', 'click-to-dial'),
                    'Pacific/Wake' => esc_html__('Pacific/Wake', 'click-to-dial'),
                    'Pacific/Wallis' => esc_html__('Pacific/Wallis', 'click-to-dial'),
                    'Pacific/Yap' => esc_html__('Pacific/Yap', 'click-to-dial'),
                    'Poland' => esc_html__('Poland', 'click-to-dial'),
                    'Portugal' => esc_html__('Portugal', 'click-to-dial'),
                    'ROC' => esc_html__('ROC', 'click-to-dial'),
                    'ROK' => esc_html__('ROK', 'click-to-dial'),
                    'Singapore' => esc_html__('Singapore', 'click-to-dial'),
                    'Turkey' => esc_html__('Turkey', 'click-to-dial'),
                    'UCT' => esc_html__('UCT', 'click-to-dial'),
                    'US/Alaska' => esc_html__('US/Alaska', 'click-to-dial'),
                    'US/Aleutian' => esc_html__('US/Aleutian', 'click-to-dial'),
                    'US/Arizona' => esc_html__('US/Arizona', 'click-to-dial'),
                    'US/Central' => esc_html__('US/Central', 'click-to-dial'),
                    'US/East-Indiana' => esc_html__('US/East-Indiana', 'click-to-dial'),
                    'US/Eastern' => esc_html__('US/Eastern', 'click-to-dial'),
                    'US/Hawaii' => esc_html__('US/Hawaii', 'click-to-dial'),
                    'US/Indiana-Starke' => esc_html__('US/Indiana-Starke', 'click-to-dial'),
                    'US/Michigan' => esc_html__('US/Michigan', 'click-to-dial'),
                    'US/Mountain' => esc_html__('US/Mountain', 'click-to-dial'),
                    'US/Pacific' => esc_html__('US/Pacific', 'click-to-dial'),
                    'US/Pacific-New' => esc_html__('US/Pacific-New', 'click-to-dial'),
                    'US/Samoa' => esc_html__('US/Samoa', 'click-to-dial'),
                    'UTC' => esc_html__('UTC', 'click-to-dial'),
                    'Universal' => esc_html__('Universal', 'click-to-dial'),
                    'W-SU' => esc_html__('W-SU', 'click-to-dial'),
                    'WET' => esc_html__('WET', 'click-to-dial'),
                )
            ]
        );


        // start sunday popover
        $this->add_control(
            'popover-sunday',
            [
                'label' => esc_html__('Sunday', 'ta-chat'),
                'type' => \Elementor\Controls_Manager::POPOVER_TOGGLE,
            ]
        );


        $this->start_popover();
        $this->add_control(
            'sunday__start',
            [
                'label' => esc_html__('Start time', 'click-to-dial'),
                'type'  => Controls_Manager::TEXT,
                'label_block' => false,
                'default' => '00:00',
                'condition' => [
                    'popover-sunday' => 'yes',
                ],
            ]
        );

        $this->add_control(
            'sunday__end',
            [
                'label' => esc_html__('End time', 'click-to-dial'),
                'type'  => Controls_Manager::TEXT,
                'label_block' => false,
                'default' => '23:59',
                'condition' => [
                    'popover-sunday' => 'yes',
                ],
            ]
        );

        $this->end_popover();
        // end sunday popover

        // start monday popover
        $this->add_control(
            'popover-monday',
            [
                'label' => esc_html__('Monday', 'ta-chat'),
                'type' => \Elementor\Controls_Manager::POPOVER_TOGGLE,
            ]
        );

        $this->start_popover();
        $this->add_control(
            'monday__start',
            [
                'label' => esc_html__('Start time', 'click-to-dial'),
                'type'  => Controls_Manager::TEXT,
                'label_block' => false,
                'default' => '00:00',
                'condition' => [
                    'popover-monday' => 'yes',
                ],
            ]
        );

        $this->add_control(
            'monday__end',
            [
                'label' => esc_html__('End time', 'click-to-dial'),
                'type'  => Controls_Manager::TEXT,
                'label_block' => false,
                'default' => '23:59',
                'condition' => [
                    'popover-monday' => 'yes',
                ],
            ]
        );

        $this->end_popover();
        // end monday popover

        // start tuesday popover
        $this->add_control(
            'popover-tuesday',
            [
                'label' => esc_html__('Tuesday', 'ta-chat'),
                'type' => \Elementor\Controls_Manager::POPOVER_TOGGLE,
            ]
        );

        $this->start_popover();
        $this->add_control(
            'tuesday__start',
            [
                'label' => esc_html__('Start time', 'click-to-dial'),
                'type'  => Controls_Manager::TEXT,
                'label_block' => false,
                'default' => '00:00',
                'condition' => [
                    'popover-tuesday' => 'yes',
                ],
            ]
        );

        $this->add_control(
            'tuesday__end',
            [
                'label' => esc_html__('End time', 'click-to-dial'),
                'type'  => Controls_Manager::TEXT,
                'label_block' => false,
                'default' => '23:59',
                'condition' => [
                    'popover-tuesday' => 'yes',
                ],
            ]
        );

        $this->end_popover();
        // end tuesday popover

        // start wednesday popover
        $this->add_control(
            'popover-wednesday',
            [
                'label' => esc_html__('Wednesday', 'ta-chat'),
                'type' => \Elementor\Controls_Manager::POPOVER_TOGGLE,
            ]
        );

        $this->start_popover();
        $this->add_control(
            'wednesday__start',
            [
                'label' => esc_html__('Start time', 'click-to-dial'),
                'type'  => Controls_Manager::TEXT,
                'label_block' => false,
                'default' => '00:00',
                'condition' => [
                    'popover-wednesday' => 'yes',
                ],
            ]
        );

        $this->add_control(
            'wednesday__end',
            [
                'label' => esc_html__('End time', 'click-to-dial'),
                'type'  => Controls_Manager::TEXT,
                'label_block' => false,
                'default' => '23:59',
                'condition' => [
                    'popover-wednesday' => 'yes',
                ],
            ]
        );

        $this->end_popover();
        // end wednesday popover

        // start sunday popover
        $this->add_control(
            'popover-thursday',
            [
                'label' => esc_html__('Thursday', 'ta-chat'),
                'type' => \Elementor\Controls_Manager::POPOVER_TOGGLE,
            ]
        );

        $this->start_popover();
        $this->add_control(
            'thursday__start',
            [
                'label' => esc_html__('Start time', 'click-to-dial'),
                'type'  => Controls_Manager::TEXT,
                'label_block' => false,
                'default' => '00:00',
                'condition' => [
                    'popover-thursday' => 'yes',
                ],
            ]
        );

        $this->add_control(
            'thursday__end',
            [
                'label' => esc_html__('End time', 'click-to-dial'),
                'type'  => Controls_Manager::TEXT,
                'label_block' => false,
                'default' => '23:59',
                'condition' => [
                    'popover-thursday' => 'yes',
                ],
            ]
        );

        $this->end_popover();
        // end thursday popover

        // start sunday popover
        $this->add_control(
            'popover-friday',
            [
                'label' => esc_html__('Friday', 'ta-chat'),
                'type' => \Elementor\Controls_Manager::POPOVER_TOGGLE,
            ]
        );

        $this->start_popover();
        $this->add_control(
            'friday__start',
            [
                'label' => esc_html__('Start time', 'click-to-dial'),
                'type'  => Controls_Manager::TEXT,
                'label_block' => false,
                'default' => '00:00',
                'condition' => [
                    'popover-friday' => 'yes',
                ],
            ]
        );

        $this->add_control(
            'friday__end',
            [
                'label' => esc_html__('End time', 'click-to-dial'),
                'type'  => Controls_Manager::TEXT,
                'label_block' => false,
                'default' => '23:59',
                'condition' => [
                    'popover-friday' => 'yes',
                ],
            ]
        );

        $this->end_popover();
        // end friday popover

        $this->add_control(
            'popover-saturday',
            [
                'label' => esc_html__('Saturday', 'ta-chat'),
                'type' => \Elementor\Controls_Manager::POPOVER_TOGGLE,
            ]
        );

        $this->start_popover();
        $this->add_control(
            'saturday__start',
            [
                'label' => esc_html__('Start time', 'click-to-dial'),
                'type'  => Controls_Manager::TEXT,
                'label_block' => false,
                'default' => '00:00',
                'condition' => [
                    'popover-saturday' => 'yes',
                ],
            ]
        );

        $this->add_control(
            'saturday__end',
            [
                'label' => esc_html__('End time', 'click-to-dial'),
                'type'  => Controls_Manager::TEXT,
                'label_block' => false,
                'default' => '23:59',
                'condition' => [
                    'popover-saturday' => 'yes',
                ],
            ]
        );
        $this->end_popover();

        $this->end_controls_section(); // End section top content

        $this->start_controls_section(
            'ctd__appearance',
            [
                'label' => esc_html__('Appearance settings', 'click-to-dial'),
                'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
            ]
        );

        $this->add_control(
            'visibility',
            [
                'label' => esc_html__('Visibility on', 'click-to-dial'),
                'type'  => Controls_Manager::SELECT2,
                'label_block' => false,
                'default' => 'ctd-show-everywhere',
                'options' => array(
                    'ctd-show-everywhere'  => esc_html__('Everywhere', 'click-to-dial'),
                    'ctd-desktop-only'  => esc_html__('Desktops only', 'click-to-dial'),
                    'ctd-tablet-only'  => esc_html__('Tablets only', 'click-to-dial'),
                    'ctd-mobile-tablet-only'  => esc_html__('Mobile and tablets', 'click-to-dial'),
                    'ctd-mobile-only'  => esc_html__('Mobile only', 'click-to-dial'),
                )

            ]
        );

        $this->add_control(
            'button__sizes',
            [
                'label' => esc_html__('Size', 'click-to-dial'),
                'type'  => Controls_Manager::SELECT,
                'label_block' => false,
                'default' => 'ctd-btn-md',
                'options' => array(
                    'ctd-btn-sm' => esc_html__('Small', 'click-to-dial'),
                    'ctd-btn-md' => esc_html__('Medium', 'click-to-dial'),
                    'ctd-btn-lg' => esc_html__('Large', 'click-to-dial'),
                )
            ]
        );

        $this->add_control(
            'bg__color',
            [
                'label' => esc_html__('Backgound color', 'click-to-dial'),
                'type' => \Elementor\Controls_Manager::COLOR,
                'default' => '#289951',
                'selectors' => [
                    '{{WRAPPER}} [class*="ctd-button-"].ctd-btn-bg' => 'background-color: {{VALUE}}'
                ],
            ]
        );

        $this->add_control(
            'bg__color__hover',
            [
                'label' => esc_html__('Hover backgound color', 'click-to-dial'),
                'type' => \Elementor\Controls_Manager::COLOR,
                'default' => '#20663a',
                'selectors' => [
                    '{{WRAPPER}} [class*="ctd-button-"].ctd-btn-bg:hover' => 'background-color: {{VALUE}}'
                ],
            ]
        );

        $this->add_control(
            'text__color',
            [
                'label' => esc_html__('Text color', 'click-to-dial'),
                'type' => \Elementor\Controls_Manager::COLOR,
                'default' => '#ffffff',
                'selectors' => [
                    '{{WRAPPER}} [class*="ctd-button-"].ctd-btn-bg' => 'color: {{VALUE}}',
                ],
            ]
        );

        $this->add_control(
            'text__color__hover',
            [
                'label' => esc_html__('Hover text color', 'click-to-dial'),
                'type' => \Elementor\Controls_Manager::COLOR,
                'default' => '#ffffff',
                'selectors' => [
                    '{{WRAPPER}} [class*="ctd-button-"].ctd-btn-bg:hover' => 'color: {{VALUE}}',
                ],
            ]
        );


        $this->add_group_control(
            \Elementor\Group_Control_Border::get_type(),
            [
                'name' => 'border',
                'label' => esc_html__('Border', 'click-to-dial'),
                'selector' => '{{WRAPPER}} .ctdButtons, {{WRAPPER}} .ctd-button-2',
                'fields_options' => [
                    'border' => [
                        'label' => esc_html__('Border', 'click-to-dial'),
                        'default' => 'solid',
                    ],
                    'width' => [
                        'default' => [
                            'top' => '1',
                            'right' => '1',
                            'bottom' => '1',
                            'left' => '1',
                            'isLinked' => false,
                        ],
                    ],
                    'color' => [
                        'default' => '#289951',
                    ],
                ],
            ]
        );

        $this->add_group_control(
            \Elementor\Group_Control_Border::get_type(),
            [
                'name' => 'border__hover',
                'label' => esc_html__('Hover border', 'click-to-dial'),
                'default' => '#20663a',
                'selector' => '{{WRAPPER}} .ctdButtons:hover, {{WRAPPER}} .ctd-button-2:hover',
                'fields_options' => [
                    'border' => [
                        'label' => esc_html__('Hover border', 'click-to-dial'),
                        'default' => 'solid',
                    ],
                    'width' => [
                        'default' => [
                            'top' => '1',
                            'right' => '1',
                            'bottom' => '1',
                            'left' => '1',
                            'isLinked' => false,
                        ],
                    ],
                    'color' => [
                        'default' => '#20663a',
                    ],
                ],
            ]
        );

        $this->add_control(
            'button__icon',
            [
                'label' => esc_html__('Change icon', 'click-to-dial'),
                'type' => \Elementor\Controls_Manager::ICONS,
                'default' => [
                    'value' => 'fa-solid fa-phone',
                ],
                'condition' => [
                    'style' => '2',
                ],
                'recommended' => [
                    'fa-solid' => [
                        'envelope',
                        'envelope-open',
                        'facebook-messenger',
                    ],
                    'fa-regular' => [
                        'envelope',
                        'envelope-open',
                    ],

                ],
            ]
        );

        $this->add_control(
            'icon__color',
            [
                'label' => esc_html__('Icon color', 'click-to-dial'),
                'type' => \Elementor\Controls_Manager::COLOR,
                'default' => '#289951',
                'selectors' => [
                    '{{WRAPPER}} [class*="ctd-button-"].ctd-btn-bg i' => 'color: {{VALUE}}',
                ],
                'condition' => [
                    'style' => '2',
                ],
            ]
        );

        $this->add_control(
            'icon__color__hover',
            [
                'label' => esc_html__('Icon hover color', 'click-to-dial'),
                'type' => \Elementor\Controls_Manager::COLOR,
                'default' => '#20663a',
                'selectors' => [
                    '{{WRAPPER}} [class*="ctd-button-"].ctd-btn-bg:hover i' => 'color: {{VALUE}}',
                ],
                'condition' => [
                    'style' => '2',
                ],
            ]
        );

        $this->add_control(
            'show__icon__bg__color',
            [
                'label' => esc_html__('Want bg in icon?', 'click-to-dial'),
                'type' => \Elementor\Controls_Manager::SWITCHER,
                'label_on' => esc_html__('Yes', 'click-to-dial'),
                'label_off' => esc_html__('No', 'click-to-dial'),
                'return_value' => 'ctd-button-3',
                'condition' => [
                    'style' => '2',
                ],
            ]
        );

        $this->add_control(
            'icon__bg__color',
            [
                'label' => esc_html__('Icon bg color', 'click-to-dial'),
                'type' => \Elementor\Controls_Manager::COLOR,
                'default' => '#fff',
                'selectors' => [
                    '{{WRAPPER}} [class*="ctd-button-"].ctd-button-3.ctd-btn-bg i' => 'background-color: {{VALUE}}',
                ],
                'condition' => [
                    'style' => '2',
                    'show__icon__bg__color' => 'ctd-button-3',
                ],
            ]
        );

        $this->add_control(
            'icon__bg__color__hover',
            [
                'label' => esc_html__('Icon hover bg color', 'click-to-dial'),
                'type' => \Elementor\Controls_Manager::COLOR,
                'default' => '#ffffff',
                'selectors' => [
                    '{{WRAPPER}} [class*="ctd-button-"].ctd-button-3.ctd-btn-bg:hover i' => 'background-color: {{VALUE}}',
                ],
                'condition' => [
                    'style' => '2',
                    'show__icon__bg__color' => 'ctd-button-3',
                ],
            ]
        );

        $this->add_control(
            'rounded',
            [
                'label' => esc_html__('Rounded?', 'click-to-dial'),
                'type' => \Elementor\Controls_Manager::SWITCHER,
                'label_on' => esc_html__('Yes', 'click-to-dial'),
                'label_off' => esc_html__('No', 'click-to-dial'),
                'return_value' => 'ctd-btn-rounded',
            ]
        );

        $this->add_control(
            'text_align',
            [
                'label' => esc_html__('Alignment', 'click-to-dial'),
                'type' => \Elementor\Controls_Manager::CHOOSE,
                'options' => [
                    'left' => [
                        'title' => esc_html__('Left', 'click-to-dial'),
                        'icon' => 'eicon-text-align-left',
                    ],
                    'center' => [
                        'title' => esc_html__('Center', 'click-to-dial'),
                        'icon' => 'eicon-text-align-center',
                    ],
                    'right' => [
                        'title' => esc_html__('Right', 'click-to-dial'),
                        'icon' => 'eicon-text-align-right',
                    ],
                ],
                'default' => 'left',
                'toggle' => true,
                'selectors' => [
                    '{{WRAPPER}} .button-wrapper' => 'text-align: {{VALUE}};',
                ],
            ]
        );

        $this->end_controls_section(); // End section top content


    }

    protected function render()
    {
        $settings = $this->get_settings_for_display();
        // button settings
        $style = $settings['style'];
        $number =  $settings['number'];
        $timezone =  $settings['timezone'];
        $visibility = $settings['visibility'];
        $icon = '';
        if (isset($settings['button__icon'])) {
            $icon = $settings['button__icon']['value'];
        }
        $rounded = $settings['rounded'];
        $icon__bg = $settings['show__icon__bg__color'];
        $sizes = $settings['button__sizes'];
        $photo = '';
        if (isset($settings['agent__photo'])) {
            $photo = $settings['agent__photo']['url'];
        }
        $name = $settings['agent__name'];
        $designation = $settings['agent__designation'];
        $labelText = $settings['custom__button__label'];
        $onlineText = $settings['online__text'];
        $offlineText = $settings['offline__text'];
        // availablity

        $sunday = ($settings['sunday__start'] ? $settings['sunday__start'] : "0:00") . "-" . ($settings['sunday__end'] ? $settings['sunday__end'] : "23:59");
        $monday = ($settings['monday__start'] ? $settings['monday__start'] : "0:00") . "-" . ($settings['monday__end'] ? $settings['monday__end'] : "23:59");
        $tuesday = ($settings['tuesday__start'] ? $settings['tuesday__start'] : "0:00") . "-" . ($settings['tuesday__end'] ? $settings['tuesday__end'] : "23:59");
        $wednesday = ($settings['wednesday__start'] ? $settings['wednesday__start'] : "0:00") . "-" . ($settings['wednesday__end'] ? $settings['wednesday__end'] : "23:59");
        $thursday = ($settings['thursday__start'] ? $settings['thursday__start'] : "0:00") . "-" . ($settings['thursday__end'] ? $settings['thursday__end'] : "23:59");
        $friday = ($settings['friday__start'] ? $settings['friday__start'] : "0:00") . "-" . ($settings['friday__end'] ? $settings['friday__end'] : "23:59");
        $saturday = ($settings['saturday__start'] ? $settings['saturday__start'] : "0:00") . "-" . ($settings['saturday__end'] ? $settings['saturday__end'] : "23:59");
        $ctdIcon = $icon ? $icon : "fa-solid fa-phone";

?>
        <?php if ($style == '1') : ?>
            <div class="button-wrapper">

                <button data-number="<?php echo esc_attr($number); ?>" <?php if ($timezone) { ?> data-timezone="<?php esc_attr($timezone); ?>" <?php } ?> class="ctdButtons ctd-button-4 ctd-btn-bg <?php echo esc_attr($visibility); ?> <?php echo esc_attr($rounded); ?> avatar-active <?php echo esc_attr($sizes); ?>" data-btnavailablety='{ "sunday":"<?php echo esc_attr($sunday); ?>", "monday":"<?php echo esc_attr($monday); ?>", "tuesday":"<?php echo esc_attr($tuesday); ?>", "wednesday":"<?php echo esc_attr($wednesday); ?>", "thursday":"<?php echo esc_attr($thursday); ?>", "friday":"<?php echo esc_attr($friday); ?>", "saturday":"<?php echo esc_attr($saturday); ?>" }'>
                    <?php if ($photo) { ?>
                        <img src="<?php echo esc_attr($photo); ?>" />
                    <?php } ?>
                    <div class="info-wrapper">
                        <?php if ($name || $designation) { ?>
                            <p class="info"><?php if ($name) { ?><?php echo esc_html($name); ?><?php } ?> <?php if ($designation) { ?>/ <?php echo esc_html($designation); ?><?php } ?></p>
                        <?php } ?>
                        <?php if ($labelText) { ?>
                            <p class="title"><?php echo esc_html($labelText); ?></p>
                        <?php } ?>
                        <?php if ($onlineText) { ?>
                            <p class="online"><?php echo esc_html($onlineText); ?></p>
                        <?php } ?>
                        <?php if ($offlineText) { ?>
                            <p class="offline"><?php echo esc_html($offlineText); ?></p>
                        <?php } ?>
                    </div>
            </div>
        <?php else : ?>
            <div class="button-wrapper">
                <a href="tel:<?php echo $number; ?>" class="ctd-button-2 <?php echo esc_attr($icon__bg); ?> ctd-btn-bg <?php echo esc_attr($visibility); ?> <?php echo esc_attr($rounded); ?> <?php echo esc_attr($sizes); ?>">
                    <i class="<?php echo $ctdIcon; ?>"></i> <?php if ($labelText) { ?><span><?php echo esc_html($labelText); ?></span><?php } ?>
                </a>
            </div>
        <?php endif; ?>
<?php }
}
