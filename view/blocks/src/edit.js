import {
    AlignmentToolbar,
    BlockControls,
    InspectorControls,
    MediaUpload,
    RichText,
    useBlockProps,
} from '@wordpress/block-editor';
import {
    Button,
    ComboboxControl,
    PanelBody,
    ToggleControl,
} from '@wordpress/components';
import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import classnames from 'classnames';
import './editor.scss';
const agentImage = require( './images/user.jpg' );

const { SelectControl, TextControl } = wp.components;

const timezones = [
	{
		value: 'Africa/Abidjan',
		label: __( 'Africa/Abidjan', 'click-to-dial' ),
	},
	{
		value: 'Africa/Accra',
		label: __( 'Africa/Accra', 'click-to-dial' ),
	},
	{
		value: 'Africa/Addis_Ababa',
		label: __( 'Africa/Addis_Ababa', 'click-to-dial' ),
	},
	{
		value: 'Africa/Algiers',
		label: __( 'Africa/Algiers', 'click-to-dial' ),
	},
	{
		value: 'Africa/Asmara',
		label: __( 'Africa/Asmara', 'click-to-dial' ),
	},
	{
		value: 'Africa/Asmera',
		label: __( 'Africa/Asmera', 'click-to-dial' ),
	},
	{
		value: 'Africa/Bamako',
		label: __( 'Africa/Bamako', 'click-to-dial' ),
	},
	{
		value: 'Africa/Bangui',
		label: __( 'Africa/Bangui', 'click-to-dial' ),
	},
	{
		value: 'Africa/Banjul',
		label: __( 'Africa/Banjul', 'click-to-dial' ),
	},
	{
		value: 'Africa/Bissau',
		label: __( 'Africa/Bissau', 'click-to-dial' ),
	},
	{
		value: 'Africa/Blantyre',
		label: __( 'Africa/Blantyre', 'click-to-dial' ),
	},
	{
		value: 'Africa/Brazzaville',
		label: __( 'Africa/Brazzaville', 'click-to-dial' ),
	},
	{
		value: 'Africa/Bujumbura',
		label: __( 'Africa/Bujumbura', 'click-to-dial' ),
	},
	{
		value: 'Africa/Cairo',
		label: __( 'Africa/Cairo', 'click-to-dial' ),
	},
	{
		value: 'Africa/Casablanca',
		label: __( 'Africa/Casablanca', 'click-to-dial' ),
	},
	{
		value: 'Africa/Ceuta',
		label: __( 'Africa/Ceuta', 'click-to-dial' ),
	},
	{
		value: 'Africa/Conakry',
		label: __( 'Africa/Conakry', 'click-to-dial' ),
	},
	{
		value: 'Africa/Dakar',
		label: __( 'Africa/Dakar', 'click-to-dial' ),
	},
	{
		value: 'Africa/Dar_es_Salaam',
		label: __( 'Africa/Dar_es_Salaam', 'click-to-dial' ),
	},
	{
		value: 'Africa/Djibouti',
		label: __( 'Africa/Djibouti', 'click-to-dial' ),
	},
	{
		value: 'Africa/Douala',
		label: __( 'Africa/Douala', 'click-to-dial' ),
	},
	{
		value: 'Africa/El_Aaiun',
		label: __( 'Africa/El_Aaiun', 'click-to-dial' ),
	},
	{
		value: 'Africa/Freetown',
		label: __( 'Africa/Freetown', 'click-to-dial' ),
	},
	{
		value: 'Africa/Gaborone',
		label: __( 'Africa/Gaborone', 'click-to-dial' ),
	},
	{
		value: 'Africa/Harare',
		label: __( 'Africa/Harare', 'click-to-dial' ),
	},
	{
		value: 'Africa/Johannesburg',
		label: __( 'Africa/Johannesburg', 'click-to-dial' ),
	},
	{
		value: 'Africa/Juba',
		label: __( 'Africa/Juba', 'click-to-dial' ),
	},
	{
		value: 'Africa/Kampala',
		label: __( 'Africa/Kampala', 'click-to-dial' ),
	},
	{
		value: 'Africa/Khartoum',
		label: __( 'Africa/Khartoum', 'click-to-dial' ),
	},
	{
		value: 'Africa/Kigali',
		label: __( 'Africa/Kigali', 'click-to-dial' ),
	},
	{
		value: 'Africa/Kinshasa',
		label: __( 'Africa/Kinshasa', 'click-to-dial' ),
	},
	{
		value: 'Africa/Lagos',
		label: __( 'Africa/Lagos', 'click-to-dial' ),
	},
	{
		value: 'Africa/Libreville',
		label: __( 'Africa/Libreville', 'click-to-dial' ),
	},
	{
		value: 'Africa/Lome',
		label: __( 'Africa/Lome', 'click-to-dial' ),
	},
	{
		value: 'Africa/Luanda',
		label: __( 'Africa/Luanda', 'click-to-dial' ),
	},
	{
		value: 'Africa/Lubumbashi',
		label: __( 'Africa/Lubumbashi', 'click-to-dial' ),
	},
	{
		value: 'Africa/Lusaka',
		label: __( 'Africa/Lusaka', 'click-to-dial' ),
	},
	{
		value: 'Africa/Malabo',
		label: __( 'Africa/Malabo', 'click-to-dial' ),
	},
	{
		value: 'Africa/Maputo',
		label: __( 'Africa/Maputo', 'click-to-dial' ),
	},
	{
		value: 'Africa/Maseru',
		label: __( 'Africa/Maseru', 'click-to-dial' ),
	},
	{
		value: 'Africa/Mbabane',
		label: __( 'Africa/Mbabane', 'click-to-dial' ),
	},
	{
		value: 'Africa/Mogadishu',
		label: __( 'Africa/Mogadishu', 'click-to-dial' ),
	},
	{
		value: 'Africa/Monrovia',
		label: __( 'Africa/Monrovia', 'click-to-dial' ),
	},
	{
		value: 'Africa/Nairobi',
		label: __( 'Africa/Nairobi', 'click-to-dial' ),
	},
	{
		value: 'Africa/Ndjamena',
		label: __( 'Africa/Ndjamena', 'click-to-dial' ),
	},
	{
		value: 'Africa/Niamey',
		label: __( 'Africa/Niamey', 'click-to-dial' ),
	},
	{
		value: 'Africa/Nouakchott',
		label: __( 'Africa/Nouakchott', 'click-to-dial' ),
	},
	{
		value: 'Africa/Ouagadougou',
		label: __( 'Africa/Ouagadougou', 'click-to-dial' ),
	},
	{
		value: 'Africa/Porto-Novo',
		label: __( 'Africa/Porto-Novo', 'click-to-dial' ),
	},
	{
		value: 'Africa/Sao_Tome',
		label: __( 'Africa/Sao_Tome', 'click-to-dial' ),
	},
	{
		value: 'Africa/Timbuktu',
		label: __( 'Africa/Timbuktu', 'click-to-dial' ),
	},
	{
		value: 'Africa/Tripoli',
		label: __( 'Africa/Tripoli', 'click-to-dial' ),
	},
	{
		value: 'Africa/Tunis',
		label: __( 'Africa/Tunis', 'click-to-dial' ),
	},
	{
		value: 'Africa/Windhoek',
		label: __( 'Africa/Windhoek', 'click-to-dial' ),
	},
	{
		value: 'America/Adak',
		label: __( 'America/Adak', 'click-to-dial' ),
	},
	{
		value: 'America/Anchorage',
		label: __( 'America/Anchorage', 'click-to-dial' ),
	},
	{
		value: 'America/Anguilla',
		label: __( 'America/Anguilla', 'click-to-dial' ),
	},
	{
		value: 'America/Antigua',
		label: __( 'America/Antigua', 'click-to-dial' ),
	},
	{
		value: 'America/Araguaina',
		label: __( 'America/Araguaina', 'click-to-dial' ),
	},
	{
		value: 'America/Argentina/Buenos_Aires',
		label: __( 'America/Argentina/Buenos_Aires', 'click-to-dial' ),
	},
	{
		value: 'America/Argentina/Catamarca',
		label: __( 'America/Argentina/Catamarca', 'click-to-dial' ),
	},
	{
		value: 'America/Argentina/ComodRivadavia',
		label: __( 'America/Argentina/ComodRivadavia', 'click-to-dial' ),
	},
	{
		value: 'America/Argentina/Cordoba',
		label: __( 'America/Argentina/Cordoba', 'click-to-dial' ),
	},
	{
		value: 'America/Argentina/Jujuy',
		label: __( 'America/Argentina/Jujuy', 'click-to-dial' ),
	},
	{
		value: 'America/Argentina/La_Rioja',
		label: __( 'America/Argentina/La_Rioja', 'click-to-dial' ),
	},
	{
		value: 'America/Argentina/Mendoza',
		label: __( 'America/Argentina/Mendoza', 'click-to-dial' ),
	},
	{
		value: 'America/Argentina/Rio_Gallegos',
		label: __( 'America/Argentina/Rio_Gallegos', 'click-to-dial' ),
	},
	{
		value: 'America/Argentina/Salta',
		label: __( 'America/Argentina/Salta', 'click-to-dial' ),
	},
	{
		value: 'America/Argentina/San_Juan',
		label: __( 'America/Argentina/San_Juan', 'click-to-dial' ),
	},
	{
		value: 'America/Argentina/San_Luis',
		label: __( 'America/Argentina/San_Luis', 'click-to-dial' ),
	},
	{
		value: 'America/Argentina/Tucuman',
		label: __( 'America/Argentina/Tucuman', 'click-to-dial' ),
	},
	{
		value: 'America/Argentina/Ushuaia',
		label: __( 'America/Argentina/Ushuaia', 'click-to-dial' ),
	},
	{
		value: 'America/Aruba',
		label: __( 'America/Aruba', 'click-to-dial' ),
	},
	{
		value: 'America/Asuncion',
		label: __( 'America/Asuncion', 'click-to-dial' ),
	},
	{
		value: 'America/Atikokan',
		label: __( 'America/Atikokan', 'click-to-dial' ),
	},
	{
		value: 'America/Atka',
		label: __( 'America/Atka', 'click-to-dial' ),
	},
	{
		value: 'America/Bahia',
		label: __( 'America/Bahia', 'click-to-dial' ),
	},
	{
		value: 'America/Bahia_Banderas',
		label: __( 'America/Bahia_Banderas', 'click-to-dial' ),
	},
	{
		value: 'America/Barbados',
		label: __( 'America/Barbados', 'click-to-dial' ),
	},
	{
		value: 'America/Belem',
		label: __( 'America/Belem', 'click-to-dial' ),
	},
	{
		value: 'America/Belize',
		label: __( 'America/Belize', 'click-to-dial' ),
	},
	{
		value: 'America/Blanc-Sablon',
		label: __( 'America/Blanc-Sablon', 'click-to-dial' ),
	},
	{
		value: 'America/Boa_Vista',
		label: __( 'America/Boa_Vista', 'click-to-dial' ),
	},
	{
		value: 'America/Bogota',
		label: __( 'America/Bogota', 'click-to-dial' ),
	},
	{
		value: 'America/Boise',
		label: __( 'America/Boise', 'click-to-dial' ),
	},
	{
		value: 'America/Buenos_Aires',
		label: __( 'America/Buenos_Aires', 'click-to-dial' ),
	},
	{
		value: 'America/Cambridge_Bay',
		label: __( 'America/Cambridge_Bay', 'click-to-dial' ),
	},
	{
		value: 'America/Campo_Grande',
		label: __( 'America/Campo_Grande', 'click-to-dial' ),
	},
	{
		value: 'America/Cancun',
		label: __( 'America/Cancun', 'click-to-dial' ),
	},
	{
		value: 'America/Caracas',
		label: __( 'America/Caracas', 'click-to-dial' ),
	},
	{
		value: 'America/Catamarca',
		label: __( 'America/Catamarca', 'click-to-dial' ),
	},
	{
		value: 'America/Cayenne',
		label: __( 'America/Cayenne', 'click-to-dial' ),
	},
	{
		value: 'America/Cayman',
		label: __( 'America/Cayman', 'click-to-dial' ),
	},
	{
		value: 'America/Chicago',
		label: __( 'America/Chicago', 'click-to-dial' ),
	},
	{
		value: 'America/Chihuahua',
		label: __( 'America/Chihuahua', 'click-to-dial' ),
	},
	{
		value: 'America/Coral_Harbour',
		label: __( 'America/Coral_Harbour', 'click-to-dial' ),
	},
	{
		value: 'America/Cordoba',
		label: __( 'America/Cordoba', 'click-to-dial' ),
	},
	{
		value: 'America/Costa_Rica',
		label: __( 'America/Costa_Rica', 'click-to-dial' ),
	},
	{
		value: 'America/Creston',
		label: __( 'America/Creston', 'click-to-dial' ),
	},
	{
		value: 'America/Cuiaba',
		label: __( 'America/Cuiaba', 'click-to-dial' ),
	},
	{
		value: 'America/Curacao',
		label: __( 'America/Curacao', 'click-to-dial' ),
	},
	{
		value: 'America/Danmarkshavn',
		label: __( 'America/Danmarkshavn', 'click-to-dial' ),
	},
	{
		value: 'America/Dawson',
		label: __( 'America/Dawson', 'click-to-dial' ),
	},
	{
		value: 'America/Dawson_Creek',
		label: __( 'America/Dawson_Creek', 'click-to-dial' ),
	},
	{
		value: 'America/Denver',
		label: __( 'America/Denver', 'click-to-dial' ),
	},
	{
		value: 'America/Detroit',
		label: __( 'America/Detroit', 'click-to-dial' ),
	},
	{
		value: 'America/Dominica',
		label: __( 'America/Dominica', 'click-to-dial' ),
	},
	{
		value: 'America/Edmonton',
		label: __( 'America/Edmonton', 'click-to-dial' ),
	},
	{
		value: 'America/Eirunepe',
		label: __( 'America/Eirunepe', 'click-to-dial' ),
	},
	{
		value: 'America/El_Salvador',
		label: __( 'America/El_Salvador', 'click-to-dial' ),
	},
	{
		value: 'America/Ensenada',
		label: __( 'America/Ensenada', 'click-to-dial' ),
	},
	{
		value: 'America/Fort_Nelson',
		label: __( 'America/Fort_Nelson', 'click-to-dial' ),
	},
	{
		value: 'America/Fort_Wayne',
		label: __( 'America/Fort_Wayne', 'click-to-dial' ),
	},
	{
		value: 'America/Fortaleza',
		label: __( 'America/Fortaleza', 'click-to-dial' ),
	},
	{
		value: 'America/Glace_Bay',
		label: __( 'America/Glace_Bay', 'click-to-dial' ),
	},
	{
		value: 'America/Godthab',
		label: __( 'America/Godthab', 'click-to-dial' ),
	},
	{
		value: 'America/Goose_Bay',
		label: __( 'America/Goose_Bay', 'click-to-dial' ),
	},
	{
		value: 'America/Grand_Turk',
		label: __( 'America/Grand_Turk', 'click-to-dial' ),
	},
	{
		value: 'America/Grenada',
		label: __( 'America/Grenada', 'click-to-dial' ),
	},
	{
		value: 'America/Guadeloupe',
		label: __( 'America/Guadeloupe', 'click-to-dial' ),
	},
	{
		value: 'America/Guatemala',
		label: __( 'America/Guatemala', 'click-to-dial' ),
	},
	{
		value: 'America/Guayaquil',
		label: __( 'America/Guayaquil', 'click-to-dial' ),
	},
	{
		value: 'America/Guyana',
		label: __( 'America/Guyana', 'click-to-dial' ),
	},
	{
		value: 'America/Halifax',
		label: __( 'America/Halifax', 'click-to-dial' ),
	},
	{
		value: 'America/Havana',
		label: __( 'America/Havana', 'click-to-dial' ),
	},
	{
		value: 'America/Hermosillo',
		label: __( 'America/Hermosillo', 'click-to-dial' ),
	},
	{
		value: 'America/Indiana/Indianapolis',
		label: __( 'America/Indiana/Indianapolis', 'click-to-dial' ),
	},
	{
		value: 'America/Indiana/Knox',
		label: __( 'America/Indiana/Knox', 'click-to-dial' ),
	},
	{
		value: 'America/Indiana/Marengo',
		label: __( 'America/Indiana/Marengo', 'click-to-dial' ),
	},
	{
		value: 'America/Indiana/Petersburg',
		label: __( 'America/Indiana/Petersburg', 'click-to-dial' ),
	},
	{
		value: 'America/Indiana/Tell_City',
		label: __( 'America/Indiana/Tell_City', 'click-to-dial' ),
	},
	{
		value: 'America/Indiana/Vevay',
		label: __( 'America/Indiana/Vevay', 'click-to-dial' ),
	},
	{
		value: 'America/Indiana/Vincennes',
		label: __( 'America/Indiana/Vincennes', 'click-to-dial' ),
	},
	{
		value: 'America/Indiana/Winamac',
		label: __( 'America/Indiana/Winamac', 'click-to-dial' ),
	},
	{
		value: 'America/Indianapolis',
		label: __( 'America/Indianapolis', 'click-to-dial' ),
	},
	{
		value: 'America/Inuvik',
		label: __( 'America/Inuvik', 'click-to-dial' ),
	},
	{
		value: 'America/Iqaluit',
		label: __( 'America/Iqaluit', 'click-to-dial' ),
	},
	{
		value: 'America/Jamaica',
		label: __( 'America/Jamaica', 'click-to-dial' ),
	},
	{
		value: 'America/Jujuy',
		label: __( 'America/Jujuy', 'click-to-dial' ),
	},
	{
		value: 'America/Juneau',
		label: __( 'America/Juneau', 'click-to-dial' ),
	},
	{
		value: 'America/Kentucky/Louisville',
		label: __( 'America/Kentucky/Louisville', 'click-to-dial' ),
	},
	{
		value: 'America/Kentucky/Monticello',
		label: __( 'America/Kentucky/Monticello', 'click-to-dial' ),
	},
	{
		value: 'America/Knox_IN',
		label: __( 'America/Knox_IN', 'click-to-dial' ),
	},
	{
		value: 'America/Kralendijk',
		label: __( 'America/Kralendijk', 'click-to-dial' ),
	},
	{
		value: 'America/La_Paz',
		label: __( 'America/La_Paz', 'click-to-dial' ),
	},
	{
		value: 'America/Lima',
		label: __( 'America/Lima', 'click-to-dial' ),
	},
	{
		value: 'America/Los_Angeles',
		label: __( 'America/Los_Angeles', 'click-to-dial' ),
	},
	{
		value: 'America/Louisville',
		label: __( 'America/Louisville', 'click-to-dial' ),
	},
	{
		value: 'America/Lower_Princes',
		label: __( 'America/Lower_Princes', 'click-to-dial' ),
	},
	{
		value: 'America/Maceio',
		label: __( 'America/Maceio', 'click-to-dial' ),
	},
	{
		value: 'America/Managua',
		label: __( 'America/Managua', 'click-to-dial' ),
	},
	{
		value: 'America/Manaus',
		label: __( 'America/Manaus', 'click-to-dial' ),
	},
	{
		value: 'America/Marigot',
		label: __( 'America/Marigot', 'click-to-dial' ),
	},
	{
		value: 'America/Martinique',
		label: __( 'America/Martinique', 'click-to-dial' ),
	},
	{
		value: 'America/Matamoros',
		label: __( 'America/Matamoros', 'click-to-dial' ),
	},
	{
		value: 'America/Mazatlan',
		label: __( 'America/Mazatlan', 'click-to-dial' ),
	},
	{
		value: 'America/Mendoza',
		label: __( 'America/Mendoza', 'click-to-dial' ),
	},
	{
		value: 'America/Menominee',
		label: __( 'America/Menominee', 'click-to-dial' ),
	},
	{
		value: 'America/Merida',
		label: __( 'America/Merida', 'click-to-dial' ),
	},
	{
		value: 'America/Metlakatla',
		label: __( 'America/Metlakatla', 'click-to-dial' ),
	},
	{
		value: 'America/Mexico_City',
		label: __( 'America/Mexico_City', 'click-to-dial' ),
	},
	{
		value: 'America/Miquelon',
		label: __( 'America/Miquelon', 'click-to-dial' ),
	},
	{
		value: 'America/Moncton',
		label: __( 'America/Moncton', 'click-to-dial' ),
	},
	{
		value: 'America/Monterrey',
		label: __( 'America/Monterrey', 'click-to-dial' ),
	},
	{
		value: 'America/Montevideo',
		label: __( 'America/Montevideo', 'click-to-dial' ),
	},
	{
		value: 'America/Montreal',
		label: __( 'America/Montreal', 'click-to-dial' ),
	},
	{
		value: 'America/Montserrat',
		label: __( 'America/Montserrat', 'click-to-dial' ),
	},
	{
		value: 'America/Nassau',
		label: __( 'America/Nassau', 'click-to-dial' ),
	},
	{
		value: 'America/New_York',
		label: __( 'America/New_York', 'click-to-dial' ),
	},
	{
		value: 'America/Nipigon',
		label: __( 'America/Nipigon', 'click-to-dial' ),
	},
	{
		value: 'America/Nome',
		label: __( 'America/Nome', 'click-to-dial' ),
	},
	{
		value: 'America/Noronha',
		label: __( 'America/Noronha', 'click-to-dial' ),
	},
	{
		value: 'America/North_Dakota/Beulah',
		label: __( 'America/North_Dakota/Beulah', 'click-to-dial' ),
	},
	{
		value: 'America/North_Dakota/Center',
		label: __( 'America/North_Dakota/Center', 'click-to-dial' ),
	},
	{
		value: 'America/North_Dakota/New_Salem',
		label: __( 'America/North_Dakota/New_Salem', 'click-to-dial' ),
	},
	{
		value: 'America/Ojinaga',
		label: __( 'America/Ojinaga', 'click-to-dial' ),
	},
	{
		value: 'America/Panama',
		label: __( 'America/Panama', 'click-to-dial' ),
	},
	{
		value: 'America/Pangnirtung',
		label: __( 'America/Pangnirtung', 'click-to-dial' ),
	},
	{
		value: 'America/Paramaribo',
		label: __( 'America/Paramaribo', 'click-to-dial' ),
	},
	{
		value: 'America/Phoenix',
		label: __( 'America/Phoenix', 'click-to-dial' ),
	},
	{
		value: 'America/Port-au-Prince',
		label: __( 'America/Port-au-Prince', 'click-to-dial' ),
	},
	{
		value: 'America/Port_of_Spain',
		label: __( 'America/Port_of_Spain', 'click-to-dial' ),
	},
	{
		value: 'America/Porto_Acre',
		label: __( 'America/Porto_Acre', 'click-to-dial' ),
	},
	{
		value: 'America/Porto_Velho',
		label: __( 'America/Porto_Velho', 'click-to-dial' ),
	},
	{
		value: 'America/Puerto_Rico',
		label: __( 'America/Puerto_Rico', 'click-to-dial' ),
	},
	{
		value: 'America/Punta_Arenas',
		label: __( 'America/Punta_Arenas', 'click-to-dial' ),
	},
	{
		value: 'America/Rainy_River',
		label: __( 'America/Rainy_River', 'click-to-dial' ),
	},
	{
		value: 'America/Rankin_Inlet',
		label: __( 'America/Rankin_Inlet', 'click-to-dial' ),
	},
	{
		value: 'America/Recife',
		label: __( 'America/Recife', 'click-to-dial' ),
	},
	{
		value: 'America/Regina',
		label: __( 'America/Regina', 'click-to-dial' ),
	},
	{
		value: 'America/Resolute',
		label: __( 'America/Resolute', 'click-to-dial' ),
	},
	{
		value: 'America/Rio_Branco',
		label: __( 'America/Rio_Branco', 'click-to-dial' ),
	},
	{
		value: 'America/Rosario',
		label: __( 'America/Rosario', 'click-to-dial' ),
	},
	{
		value: 'America/Santa_Isabel',
		label: __( 'America/Santa_Isabel', 'click-to-dial' ),
	},
	{
		value: 'America/Santarem',
		label: __( 'America/Santarem', 'click-to-dial' ),
	},
	{
		value: 'America/Santiago',
		label: __( 'America/Santiago', 'click-to-dial' ),
	},
	{
		value: 'America/Santo_Domingo',
		label: __( 'America/Santo_Domingo', 'click-to-dial' ),
	},
	{
		value: 'America/Sao_Paulo',
		label: __( 'America/Sao_Paulo', 'click-to-dial' ),
	},
	{
		value: 'America/Scoresbysund',
		label: __( 'America/Scoresbysund', 'click-to-dial' ),
	},
	{
		value: 'America/Shiprock',
		label: __( 'America/Shiprock', 'click-to-dial' ),
	},
	{
		value: 'America/Sitka',
		label: __( 'America/Sitka', 'click-to-dial' ),
	},
	{
		value: 'America/St_Barthelemy',
		label: __( 'America/St_Barthelemy', 'click-to-dial' ),
	},
	{
		value: 'America/St_Johns',
		label: __( 'America/St_Johns', 'click-to-dial' ),
	},
	{
		value: 'America/St_Kitts',
		label: __( 'America/St_Kitts', 'click-to-dial' ),
	},
	{
		value: 'America/St_Lucia',
		label: __( 'America/St_Lucia', 'click-to-dial' ),
	},
	{
		value: 'America/St_Thomas',
		label: __( 'America/St_Thomas', 'click-to-dial' ),
	},
	{
		value: 'America/St_Vincent',
		label: __( 'America/St_Vincent', 'click-to-dial' ),
	},
	{
		value: 'America/Swift_Current',
		label: __( 'America/Swift_Current', 'click-to-dial' ),
	},
	{
		value: 'America/Tegucigalpa',
		label: __( 'America/Tegucigalpa', 'click-to-dial' ),
	},
	{
		value: 'America/Thule',
		label: __( 'America/Thule', 'click-to-dial' ),
	},
	{
		value: 'America/Thunder_Bay',
		label: __( 'America/Thunder_Bay', 'click-to-dial' ),
	},
	{
		value: 'America/Tijuana',
		label: __( 'America/Tijuana', 'click-to-dial' ),
	},
	{
		value: 'America/Toronto',
		label: __( 'America/Toronto', 'click-to-dial' ),
	},
	{
		value: 'America/Tortola',
		label: __( 'America/Tortola', 'click-to-dial' ),
	},
	{
		value: 'America/Vancouver',
		label: __( 'America/Vancouver', 'click-to-dial' ),
	},
	{
		value: 'America/Virgin',
		label: __( 'America/Virgin', 'click-to-dial' ),
	},
	{
		value: 'America/Whitehorse',
		label: __( 'America/Whitehorse', 'click-to-dial' ),
	},
	{
		value: 'America/Winnipeg',
		label: __( 'America/Winnipeg', 'click-to-dial' ),
	},
	{
		value: 'America/Yakutat',
		label: __( 'America/Yakutat', 'click-to-dial' ),
	},
	{
		value: 'America/Yellowknife',
		label: __( 'America/Yellowknife', 'click-to-dial' ),
	},
	{
		value: 'Antarctica/Casey',
		label: __( 'Antarctica/Casey', 'click-to-dial' ),
	},
	{
		value: 'Antarctica/Davis',
		label: __( 'Antarctica/Davis', 'click-to-dial' ),
	},
	{
		value: 'Antarctica/DumontDUrville',
		label: __( 'Antarctica/DumontDUrville', 'click-to-dial' ),
	},
	{
		value: 'Antarctica/Macquarie',
		label: __( 'Antarctica/Macquarie', 'click-to-dial' ),
	},
	{
		value: 'Antarctica/Mawson',
		label: __( 'Antarctica/Mawson', 'click-to-dial' ),
	},
	{
		value: 'Antarctica/McMurdo',
		label: __( 'Antarctica/McMurdo', 'click-to-dial' ),
	},
	{
		value: 'Antarctica/Palmer',
		label: __( 'Antarctica/Palmer', 'click-to-dial' ),
	},
	{
		value: 'Antarctica/Rothera',
		label: __( 'Antarctica/Rothera', 'click-to-dial' ),
	},
	{
		value: 'Antarctica/South_Pole',
		label: __( 'Antarctica/South_Pole', 'click-to-dial' ),
	},
	{
		value: 'Antarctica/Syowa',
		label: __( 'Antarctica/Syowa', 'click-to-dial' ),
	},
	{
		value: 'Antarctica/Troll',
		label: __( 'Antarctica/Troll', 'click-to-dial' ),
	},
	{
		value: 'Antarctica/Vostok',
		label: __( 'Antarctica/Vostok', 'click-to-dial' ),
	},
	{
		value: 'Arctic/Longyearbyen',
		label: __( 'Arctic/Longyearbyen', 'click-to-dial' ),
	},
	{
		value: 'Asia/Aden',
		label: __( 'Asia/Aden', 'click-to-dial' ),
	},
	{
		value: 'Asia/Almaty',
		label: __( 'Asia/Almaty', 'click-to-dial' ),
	},
	{
		value: 'Asia/Amman',
		label: __( 'Asia/Amman', 'click-to-dial' ),
	},
	{
		value: 'Asia/Anadyr',
		label: __( 'Asia/Anadyr', 'click-to-dial' ),
	},
	{
		value: 'Asia/Aqtau',
		label: __( 'Asia/Aqtau', 'click-to-dial' ),
	},
	{
		value: 'Asia/Aqtobe',
		label: __( 'Asia/Aqtobe', 'click-to-dial' ),
	},
	{
		value: 'Asia/Ashgabat',
		label: __( 'Asia/Ashgabat', 'click-to-dial' ),
	},
	{
		value: 'Asia/Ashkhabad',
		label: __( 'Asia/Ashkhabad', 'click-to-dial' ),
	},
	{
		value: 'Asia/Atyrau',
		label: __( 'Asia/Atyrau', 'click-to-dial' ),
	},
	{
		value: 'Asia/Baghdad',
		label: __( 'Asia/Baghdad', 'click-to-dial' ),
	},
	{
		value: 'Asia/Bahrain',
		label: __( 'Asia/Bahrain', 'click-to-dial' ),
	},
	{
		value: 'Asia/Baku',
		label: __( 'Asia/Baku', 'click-to-dial' ),
	},
	{
		value: 'Asia/Bangkok',
		label: __( 'Asia/Bangkok', 'click-to-dial' ),
	},
	{
		value: 'Asia/Barnaul',
		label: __( 'Asia/Barnaul', 'click-to-dial' ),
	},
	{
		value: 'Asia/Beirut',
		label: __( 'Asia/Beirut', 'click-to-dial' ),
	},
	{
		value: 'Asia/Bishkek',
		label: __( 'Asia/Bishkek', 'click-to-dial' ),
	},
	{
		value: 'Asia/Brunei',
		label: __( 'Asia/Brunei', 'click-to-dial' ),
	},
	{
		value: 'Asia/Calcutta',
		label: __( 'Asia/Calcutta', 'click-to-dial' ),
	},
	{
		value: 'Asia/Chita',
		label: __( 'Asia/Chita', 'click-to-dial' ),
	},
	{
		value: 'Asia/Choibalsan',
		label: __( 'Asia/Choibalsan', 'click-to-dial' ),
	},
	{
		value: 'Asia/Chongqing',
		label: __( 'Asia/Chongqing', 'click-to-dial' ),
	},
	{
		value: 'Asia/Chungking',
		label: __( 'Asia/Chungking', 'click-to-dial' ),
	},
	{
		value: 'Asia/Colombo',
		label: __( 'Asia/Colombo', 'click-to-dial' ),
	},
	{
		value: 'Asia/Dacca',
		label: __( 'Asia/Dacca', 'click-to-dial' ),
	},
	{
		value: 'Asia/Damascus',
		label: __( 'Asia/Damascus', 'click-to-dial' ),
	},
	{
		value: 'Asia/Dhaka',
		label: __( 'Asia/Dhaka', 'click-to-dial' ),
	},
	{
		value: 'Asia/Dili',
		label: __( 'Asia/Dili', 'click-to-dial' ),
	},
	{
		value: 'Asia/Dubai',
		label: __( 'Asia/Dubai', 'click-to-dial' ),
	},
	{
		value: 'Asia/Dushanbe',
		label: __( 'Asia/Dushanbe', 'click-to-dial' ),
	},
	{
		value: 'Asia/Famagusta',
		label: __( 'Asia/Famagusta', 'click-to-dial' ),
	},
	{
		value: 'Asia/Gaza',
		label: __( 'Asia/Gaza', 'click-to-dial' ),
	},
	{
		value: 'Asia/Harbin',
		label: __( 'Asia/Harbin', 'click-to-dial' ),
	},
	{
		value: 'Asia/Hebron',
		label: __( 'Asia/Hebron', 'click-to-dial' ),
	},
	{
		value: 'Asia/Ho_Chi_Minh',
		label: __( 'Asia/Ho_Chi_Minh', 'click-to-dial' ),
	},
	{
		value: 'Asia/Hong_Kong',
		label: __( 'Asia/Hong_Kong', 'click-to-dial' ),
	},
	{
		value: 'Asia/Hovd',
		label: __( 'Asia/Hovd', 'click-to-dial' ),
	},
	{
		value: 'Asia/Irkutsk',
		label: __( 'Asia/Irkutsk', 'click-to-dial' ),
	},
	{
		value: 'Asia/Istanbul',
		label: __( 'Asia/Istanbul', 'click-to-dial' ),
	},
	{
		value: 'Asia/Jakarta',
		label: __( 'Asia/Jakarta', 'click-to-dial' ),
	},
	{
		value: 'Asia/Jayapura',
		label: __( 'Asia/Jayapura', 'click-to-dial' ),
	},
	{
		value: 'Asia/Jerusalem',
		label: __( 'Asia/Jerusalem', 'click-to-dial' ),
	},
	{
		value: 'Asia/Kabul',
		label: __( 'Asia/Kabul', 'click-to-dial' ),
	},
	{
		value: 'Asia/Kamchatka',
		label: __( 'Asia/Kamchatka', 'click-to-dial' ),
	},
	{
		value: 'Asia/Karachi',
		label: __( 'Asia/Karachi', 'click-to-dial' ),
	},
	{
		value: 'Asia/Kashgar',
		label: __( 'Asia/Kashgar', 'click-to-dial' ),
	},
	{
		value: 'Asia/Kathmandu',
		label: __( 'Asia/Kathmandu', 'click-to-dial' ),
	},
	{
		value: 'Asia/Katmandu',
		label: __( 'Asia/Katmandu', 'click-to-dial' ),
	},
	{
		value: 'Asia/Khandyga',
		label: __( 'Asia/Khandyga', 'click-to-dial' ),
	},
	{
		value: 'Asia/Kolkata',
		label: __( 'Asia/Kolkata', 'click-to-dial' ),
	},
	{
		value: 'Asia/Krasnoyarsk',
		label: __( 'Asia/Krasnoyarsk', 'click-to-dial' ),
	},
	{
		value: 'Asia/Kuala_Lumpur',
		label: __( 'Asia/Kuala_Lumpur', 'click-to-dial' ),
	},
	{
		value: 'Asia/Kuching',
		label: __( 'Asia/Kuching', 'click-to-dial' ),
	},
	{
		value: 'Asia/Kuwait',
		label: __( 'Asia/Kuwait', 'click-to-dial' ),
	},
	{
		value: 'Asia/Macao',
		label: __( 'Asia/Macao', 'click-to-dial' ),
	},
	{
		value: 'Asia/Macau',
		label: __( 'Asia/Macau', 'click-to-dial' ),
	},
	{
		value: 'Asia/Magadan',
		label: __( 'Asia/Magadan', 'click-to-dial' ),
	},
	{
		value: 'Asia/Makassar',
		label: __( 'Asia/Makassar', 'click-to-dial' ),
	},
	{
		value: 'Asia/Manila',
		label: __( 'Asia/Manila', 'click-to-dial' ),
	},
	{
		value: 'Asia/Muscat',
		label: __( 'Asia/Muscat', 'click-to-dial' ),
	},
	{
		value: 'Asia/Nicosia',
		label: __( 'Asia/Nicosia', 'click-to-dial' ),
	},
	{
		value: 'Asia/Novokuznetsk',
		label: __( 'Asia/Novokuznetsk', 'click-to-dial' ),
	},
	{
		value: 'Asia/Novosibirsk',
		label: __( 'Asia/Novosibirsk', 'click-to-dial' ),
	},
	{
		value: 'Asia/Omsk',
		label: __( 'Asia/Omsk', 'click-to-dial' ),
	},
	{
		value: 'Asia/Oral',
		label: __( 'Asia/Oral', 'click-to-dial' ),
	},
	{
		value: 'Asia/Phnom_Penh',
		label: __( 'Asia/Phnom_Penh', 'click-to-dial' ),
	},
	{
		value: 'Asia/Pontianak',
		label: __( 'Asia/Pontianak', 'click-to-dial' ),
	},
	{
		value: 'Asia/Pyongyang',
		label: __( 'Asia/Pyongyang', 'click-to-dial' ),
	},
	{
		value: 'Asia/Qatar',
		label: __( 'Asia/Qatar', 'click-to-dial' ),
	},
	{
		value: 'Asia/Qyzylorda',
		label: __( 'Asia/Qyzylorda', 'click-to-dial' ),
	},
	{
		value: 'Asia/Rangoon',
		label: __( 'Asia/Rangoon', 'click-to-dial' ),
	},
	{
		value: 'Asia/Riyadh',
		label: __( 'Asia/Riyadh', 'click-to-dial' ),
	},
	{
		value: 'Asia/Saigon',
		label: __( 'Asia/Saigon', 'click-to-dial' ),
	},
	{
		value: 'Asia/Sakhalin',
		label: __( 'Asia/Sakhalin', 'click-to-dial' ),
	},
	{
		value: 'Asia/Samarkand',
		label: __( 'Asia/Samarkand', 'click-to-dial' ),
	},
	{
		value: 'Asia/Seoul',
		label: __( 'Asia/Seoul', 'click-to-dial' ),
	},
	{
		value: 'Asia/Shanghai',
		label: __( 'Asia/Shanghai', 'click-to-dial' ),
	},
	{
		value: 'Asia/Singapore',
		label: __( 'Asia/Singapore', 'click-to-dial' ),
	},
	{
		value: 'Asia/Srednekolymsk',
		label: __( 'Asia/Srednekolymsk', 'click-to-dial' ),
	},
	{
		value: 'Asia/Taipei',
		label: __( 'Asia/Taipei', 'click-to-dial' ),
	},
	{
		value: 'Asia/Tashkent',
		label: __( 'Asia/Tashkent', 'click-to-dial' ),
	},
	{
		value: 'Asia/Tbilisi',
		label: __( 'Asia/Tbilisi', 'click-to-dial' ),
	},
	{
		value: 'Asia/Tehran',
		label: __( 'Asia/Tehran', 'click-to-dial' ),
	},
	{
		value: 'Asia/Tel_Aviv',
		label: __( 'Asia/Tel_Aviv', 'click-to-dial' ),
	},
	{
		value: 'Asia/Thimbu',
		label: __( 'Asia/Thimbu', 'click-to-dial' ),
	},
	{
		value: 'Asia/Thimphu',
		label: __( 'Asia/Thimphu', 'click-to-dial' ),
	},
	{
		value: 'Asia/Tokyo',
		label: __( 'Asia/Tokyo', 'click-to-dial' ),
	},
	{
		value: 'Asia/Tomsk',
		label: __( 'Asia/Tomsk', 'click-to-dial' ),
	},
	{
		value: 'Asia/Ujung_Pandang',
		label: __( 'Asia/Ujung_Pandang', 'click-to-dial' ),
	},
	{
		value: 'Asia/Ulaanbaatar',
		label: __( 'Asia/Ulaanbaatar', 'click-to-dial' ),
	},
	{
		value: 'Asia/Ulan_Bator',
		label: __( 'Asia/Ulan_Bator', 'click-to-dial' ),
	},
	{
		value: 'Asia/Urumqi',
		label: __( 'Asia/Urumqi', 'click-to-dial' ),
	},
	{
		value: 'Asia/Ust-Nera',
		label: __( 'Asia/Ust-Nera', 'click-to-dial' ),
	},
	{
		value: 'Asia/Vientiane',
		label: __( 'Asia/Vientiane', 'click-to-dial' ),
	},
	{
		value: 'Asia/Vladivostok',
		label: __( 'Asia/Vladivostok', 'click-to-dial' ),
	},
	{
		value: 'Asia/Yakutsk',
		label: __( 'Asia/Yakutsk', 'click-to-dial' ),
	},
	{
		value: 'Asia/Yangon',
		label: __( 'Asia/Yangon', 'click-to-dial' ),
	},
	{
		value: 'Asia/Yekaterinburg',
		label: __( 'Asia/Yekaterinburg', 'click-to-dial' ),
	},
	{
		value: 'Asia/Yerevan',
		label: __( 'Asia/Yerevan', 'click-to-dial' ),
	},
	{
		value: 'Atlantic/Azores',
		label: __( 'Atlantic/Azores', 'click-to-dial' ),
	},
	{
		value: 'Atlantic/Bermuda',
		label: __( 'Atlantic/Bermuda', 'click-to-dial' ),
	},
	{
		value: 'Atlantic/Canary',
		label: __( 'Atlantic/Canary', 'click-to-dial' ),
	},
	{
		value: 'Atlantic/Cape_Verde',
		label: __( 'Atlantic/Cape_Verde', 'click-to-dial' ),
	},
	{
		value: 'Atlantic/Faeroe',
		label: __( 'Atlantic/Faeroe', 'click-to-dial' ),
	},
	{
		value: 'Atlantic/Faroe',
		label: __( 'Atlantic/Faroe', 'click-to-dial' ),
	},
	{
		value: 'Atlantic/Jan_Mayen',
		label: __( 'Atlantic/Jan_Mayen', 'click-to-dial' ),
	},
	{
		value: 'Atlantic/Madeira',
		label: __( 'Atlantic/Madeira', 'click-to-dial' ),
	},
	{
		value: 'Atlantic/Reykjavik',
		label: __( 'Atlantic/Reykjavik', 'click-to-dial' ),
	},
	{
		value: 'Atlantic/South_Georgia',
		label: __( 'Atlantic/South_Georgia', 'click-to-dial' ),
	},
	{
		value: 'Atlantic/St_Helena',
		label: __( 'Atlantic/St_Helena', 'click-to-dial' ),
	},
	{
		value: 'Atlantic/Stanley',
		label: __( 'Atlantic/Stanley', 'click-to-dial' ),
	},
	{
		value: 'Australia/ACT',
		label: __( 'Australia/ACT', 'click-to-dial' ),
	},
	{
		value: 'Australia/Adelaide',
		label: __( 'Australia/Adelaide', 'click-to-dial' ),
	},
	{
		value: 'Australia/Brisbane',
		label: __( 'Australia/Brisbane', 'click-to-dial' ),
	},
	{
		value: 'Australia/Broken_Hill',
		label: __( 'Australia/Broken_Hill', 'click-to-dial' ),
	},
	{
		value: 'Australia/Canberra',
		label: __( 'Australia/Canberra', 'click-to-dial' ),
	},
	{
		value: 'Australia/Currie',
		label: __( 'Australia/Currie', 'click-to-dial' ),
	},
	{
		value: 'Australia/Darwin',
		label: __( 'Australia/Darwin', 'click-to-dial' ),
	},
	{
		value: 'Australia/Eucla',
		label: __( 'Australia/Eucla', 'click-to-dial' ),
	},
	{
		value: 'Australia/Hobart',
		label: __( 'Australia/Hobart', 'click-to-dial' ),
	},
	{
		value: 'Australia/LHI',
		label: __( 'Australia/LHI', 'click-to-dial' ),
	},
	{
		value: 'Australia/Lindeman',
		label: __( 'Australia/Lindeman', 'click-to-dial' ),
	},
	{
		value: 'Australia/Lord_Howe',
		label: __( 'Australia/Lord_Howe', 'click-to-dial' ),
	},
	{
		value: 'Australia/Melbourne',
		label: __( 'Australia/Melbourne', 'click-to-dial' ),
	},
	{
		value: 'Australia/NSW',
		label: __( 'Australia/NSW', 'click-to-dial' ),
	},
	{
		value: 'Australia/North',
		label: __( 'Australia/North', 'click-to-dial' ),
	},
	{
		value: 'Australia/Perth',
		label: __( 'Australia/Perth', 'click-to-dial' ),
	},
	{
		value: 'Australia/Queensland',
		label: __( 'Australia/Queensland', 'click-to-dial' ),
	},
	{
		value: 'Australia/South',
		label: __( 'Australia/South', 'click-to-dial' ),
	},
	{
		value: 'Australia/Sydney',
		label: __( 'Australia/Sydney', 'click-to-dial' ),
	},
	{
		value: 'Australia/Tasmania',
		label: __( 'Australia/Tasmania', 'click-to-dial' ),
	},
	{
		value: 'Australia/Victoria',
		label: __( 'Australia/Victoria', 'click-to-dial' ),
	},
	{
		value: 'Australia/West',
		label: __( 'Australia/West', 'click-to-dial' ),
	},
	{
		value: 'Australia/Yancowinna',
		label: __( 'Australia/Yancowinna', 'click-to-dial' ),
	},
	{
		value: 'Brazil/Acre',
		label: __( 'Brazil/Acre', 'click-to-dial' ),
	},
	{
		value: 'Brazil/DeNoronha',
		label: __( 'Brazil/DeNoronha', 'click-to-dial' ),
	},
	{
		value: 'Brazil/East',
		label: __( 'Brazil/East', 'click-to-dial' ),
	},
	{
		value: 'Brazil/West',
		label: __( 'Brazil/West', 'click-to-dial' ),
	},
	{
		value: 'CET',
		label: __( 'CET', 'click-to-dial' ),
	},
	{
		value: 'CST6CDT',
		label: __( 'CST6CDT', 'click-to-dial' ),
	},
	{
		value: 'Canada/Atlantic',
		label: __( 'Canada/Atlantic', 'click-to-dial' ),
	},
	{
		value: 'Canada/Central',
		label: __( 'Canada/Central', 'click-to-dial' ),
	},
	{
		value: 'Canada/Eastern',
		label: __( 'Canada/Eastern', 'click-to-dial' ),
	},
	{
		value: 'Canada/Mountain',
		label: __( 'Canada/Mountain', 'click-to-dial' ),
	},
	{
		value: 'Canada/Newfoundland',
		label: __( 'Canada/Newfoundland', 'click-to-dial' ),
	},
	{
		value: 'Canada/Pacific',
		label: __( 'Canada/Pacific', 'click-to-dial' ),
	},
	{
		value: 'Canada/Saskatchewan',
		label: __( 'Canada/Saskatchewan', 'click-to-dial' ),
	},
	{
		value: 'Canada/Yukon',
		label: __( 'Canada/Yukon', 'click-to-dial' ),
	},
	{
		value: 'Chile/Continental',
		label: __( 'Chile/Continental', 'click-to-dial' ),
	},
	{
		value: 'Chile/EasterIsland',
		label: __( 'Chile/EasterIsland', 'click-to-dial' ),
	},
	{
		value: 'Cuba',
		label: __( 'Cuba', 'click-to-dial' ),
	},
	{
		value: 'EET',
		label: __( 'EET', 'click-to-dial' ),
	},
	{
		value: 'EST',
		label: __( 'EST', 'click-to-dial' ),
	},
	{
		value: 'EST5EDT',
		label: __( 'EST5EDT', 'click-to-dial' ),
	},
	{
		value: 'Egypt',
		label: __( 'Egypt', 'click-to-dial' ),
	},
	{
		value: 'Eire',
		label: __( 'Eire', 'click-to-dial' ),
	},
	{
		value: 'Etc/GMT',
		label: __( 'Etc/GMT', 'click-to-dial' ),
	},
	{
		value: 'Etc/GMT+0',
		label: __( 'Etc/GMT+0', 'click-to-dial' ),
	},
	{
		value: 'Etc/GMT+1',
		label: __( 'Etc/GMT+1', 'click-to-dial' ),
	},
	{
		value: 'Etc/GMT+10',
		label: __( 'Etc/GMT+10', 'click-to-dial' ),
	},
	{
		value: 'Etc/GMT+11',
		label: __( 'Etc/GMT+11', 'click-to-dial' ),
	},
	{
		value: 'Etc/GMT+12',
		label: __( 'Etc/GMT+12', 'click-to-dial' ),
	},
	{
		value: 'Etc/GMT+2',
		label: __( 'Etc/GMT+2', 'click-to-dial' ),
	},
	{
		value: 'Etc/GMT+3',
		label: __( 'Etc/GMT+3', 'click-to-dial' ),
	},
	{
		value: 'Etc/GMT+4',
		label: __( 'Etc/GMT+4', 'click-to-dial' ),
	},
	{
		value: 'Etc/GMT+5',
		label: __( 'Etc/GMT+5', 'click-to-dial' ),
	},
	{
		value: 'Etc/GMT+6',
		label: __( 'Etc/GMT+6', 'click-to-dial' ),
	},
	{
		value: 'Etc/GMT+7',
		label: __( 'Etc/GMT+7', 'click-to-dial' ),
	},
	{
		value: 'Etc/GMT+8',
		label: __( 'Etc/GMT+8', 'click-to-dial' ),
	},
	{
		value: 'Etc/GMT+9',
		label: __( 'Etc/GMT+9', 'click-to-dial' ),
	},
	{
		value: 'Etc/GMT-0',
		label: __( 'Etc/GMT-0', 'click-to-dial' ),
	},
	{
		value: 'Etc/GMT-1',
		label: __( 'Etc/GMT-1', 'click-to-dial' ),
	},
	{
		value: 'Etc/GMT-10',
		label: __( 'Etc/GMT-10', 'click-to-dial' ),
	},
	{
		value: 'Etc/GMT-11',
		label: __( 'Etc/GMT-11', 'click-to-dial' ),
	},
	{
		value: 'Etc/GMT-12',
		label: __( 'Etc/GMT-12', 'click-to-dial' ),
	},
	{
		value: 'Etc/GMT-13',
		label: __( 'Etc/GMT-13', 'click-to-dial' ),
	},
	{
		value: 'Etc/GMT-14',
		label: __( 'Etc/GMT-14', 'click-to-dial' ),
	},
	{
		value: 'Etc/GMT-2',
		label: __( 'Etc/GMT-2', 'click-to-dial' ),
	},
	{
		value: 'Etc/GMT-3',
		label: __( 'Etc/GMT-3', 'click-to-dial' ),
	},
	{
		value: 'Etc/GMT-4',
		label: __( 'Etc/GMT-4', 'click-to-dial' ),
	},
	{
		value: 'Etc/GMT-5',
		label: __( 'Etc/GMT-5', 'click-to-dial' ),
	},
	{
		value: 'Etc/GMT-6',
		label: __( 'Etc/GMT-6', 'click-to-dial' ),
	},
	{
		value: 'Etc/GMT-7',
		label: __( 'Etc/GMT-7', 'click-to-dial' ),
	},
	{
		value: 'Etc/GMT-8',
		label: __( 'Etc/GMT-8', 'click-to-dial' ),
	},
	{
		value: 'Etc/GMT-9',
		label: __( 'Etc/GMT-9', 'click-to-dial' ),
	},
	{
		value: 'Etc/GMT0',
		label: __( 'Etc/GMT0', 'click-to-dial' ),
	},
	{
		value: 'Etc/Greenwich',
		label: __( 'Etc/Greenwich', 'click-to-dial' ),
	},
	{
		value: 'Etc/UCT',
		label: __( 'Etc/UCT', 'click-to-dial' ),
	},
	{
		value: 'Etc/UTC',
		label: __( 'Etc/UTC', 'click-to-dial' ),
	},
	{
		value: 'Etc/Universal',
		label: __( 'Etc/Universal', 'click-to-dial' ),
	},
	{
		value: 'Etc/Zulu',
		label: __( 'Etc/Zulu', 'click-to-dial' ),
	},
	{
		value: 'Europe/Amsterdam',
		label: __( 'Europe/Amsterdam', 'click-to-dial' ),
	},
	{
		value: 'Europe/Andorra',
		label: __( 'Europe/Andorra', 'click-to-dial' ),
	},
	{
		value: 'Europe/Astrakhan',
		label: __( 'Europe/Astrakhan', 'click-to-dial' ),
	},
	{
		value: 'Europe/Athens',
		label: __( 'Europe/Athens', 'click-to-dial' ),
	},
	{
		value: 'Europe/Belfast',
		label: __( 'Europe/Belfast', 'click-to-dial' ),
	},
	{
		value: 'Europe/Belgrade',
		label: __( 'Europe/Belgrade', 'click-to-dial' ),
	},
	{
		value: 'Europe/Berlin',
		label: __( 'Europe/Berlin', 'click-to-dial' ),
	},
	{
		value: 'Europe/Bratislava',
		label: __( 'Europe/Bratislava', 'click-to-dial' ),
	},
	{
		value: 'Europe/Brussels',
		label: __( 'Europe/Brussels', 'click-to-dial' ),
	},
	{
		value: 'Europe/Bucharest',
		label: __( 'Europe/Bucharest', 'click-to-dial' ),
	},
	{
		value: 'Europe/Budapest',
		label: __( 'Europe/Budapest', 'click-to-dial' ),
	},
	{
		value: 'Europe/Busingen',
		label: __( 'Europe/Busingen', 'click-to-dial' ),
	},
	{
		value: 'Europe/Chisinau',
		label: __( 'Europe/Chisinau', 'click-to-dial' ),
	},
	{
		value: 'Europe/Copenhagen',
		label: __( 'Europe/Copenhagen', 'click-to-dial' ),
	},
	{
		value: 'Europe/Dublin',
		label: __( 'Europe/Dublin', 'click-to-dial' ),
	},
	{
		value: 'Europe/Gibraltar',
		label: __( 'Europe/Gibraltar', 'click-to-dial' ),
	},
	{
		value: 'Europe/Guernsey',
		label: __( 'Europe/Guernsey', 'click-to-dial' ),
	},
	{
		value: 'Europe/Helsinki',
		label: __( 'Europe/Helsinki', 'click-to-dial' ),
	},
	{
		value: 'Europe/Isle_of_Man',
		label: __( 'Europe/Isle_of_Man', 'click-to-dial' ),
	},
	{
		value: 'Europe/Istanbul',
		label: __( 'Europe/Istanbul', 'click-to-dial' ),
	},
	{
		value: 'Europe/Jersey',
		label: __( 'Europe/Jersey', 'click-to-dial' ),
	},
	{
		value: 'Europe/Kaliningrad',
		label: __( 'Europe/Kaliningrad', 'click-to-dial' ),
	},
	{
		value: 'Europe/Kiev',
		label: __( 'Europe/Kiev', 'click-to-dial' ),
	},
	{
		value: 'Europe/Kirov',
		label: __( 'Europe/Kirov', 'click-to-dial' ),
	},
	{
		value: 'Europe/Lisbon',
		label: __( 'Europe/Lisbon', 'click-to-dial' ),
	},
	{
		value: 'Europe/Ljubljana',
		label: __( 'Europe/Ljubljana', 'click-to-dial' ),
	},
	{
		value: 'Europe/London',
		label: __( 'Europe/London', 'click-to-dial' ),
	},
	{
		value: 'Europe/Luxembourg',
		label: __( 'Europe/Luxembourg', 'click-to-dial' ),
	},
	{
		value: 'Europe/Madrid',
		label: __( 'Europe/Madrid', 'click-to-dial' ),
	},
	{
		value: 'Europe/Malta',
		label: __( 'Europe/Malta', 'click-to-dial' ),
	},
	{
		value: 'Europe/Mariehamn',
		label: __( 'Europe/Mariehamn', 'click-to-dial' ),
	},
	{
		value: 'Europe/Minsk',
		label: __( 'Europe/Minsk', 'click-to-dial' ),
	},
	{
		value: 'Europe/Monaco',
		label: __( 'Europe/Monaco', 'click-to-dial' ),
	},
	{
		value: 'Europe/Moscow',
		label: __( 'Europe/Moscow', 'click-to-dial' ),
	},
	{
		value: 'Europe/Nicosia',
		label: __( 'Europe/Nicosia', 'click-to-dial' ),
	},
	{
		value: 'Europe/Oslo',
		label: __( 'Europe/Oslo', 'click-to-dial' ),
	},
	{
		value: 'Europe/Paris',
		label: __( 'Europe/Paris', 'click-to-dial' ),
	},
	{
		value: 'Europe/Podgorica',
		label: __( 'Europe/Podgorica', 'click-to-dial' ),
	},
	{
		value: 'Europe/Prague',
		label: __( 'Europe/Prague', 'click-to-dial' ),
	},
	{
		value: 'Europe/Riga',
		label: __( 'Europe/Riga', 'click-to-dial' ),
	},
	{
		value: 'Europe/Rome',
		label: __( 'Europe/Rome', 'click-to-dial' ),
	},
	{
		value: 'Europe/Samara',
		label: __( 'Europe/Samara', 'click-to-dial' ),
	},
	{
		value: 'Europe/San_Marino',
		label: __( 'Europe/San_Marino', 'click-to-dial' ),
	},
	{
		value: 'Europe/Sarajevo',
		label: __( 'Europe/Sarajevo', 'click-to-dial' ),
	},
	{
		value: 'Europe/Saratov',
		label: __( 'Europe/Saratov', 'click-to-dial' ),
	},
	{
		value: 'Europe/Simferopol',
		label: __( 'Europe/Simferopol', 'click-to-dial' ),
	},
	{
		value: 'Europe/Skopje',
		label: __( 'Europe/Skopje', 'click-to-dial' ),
	},
	{
		value: 'Europe/Sofia',
		label: __( 'Europe/Sofia', 'click-to-dial' ),
	},
	{
		value: 'Europe/Stockholm',
		label: __( 'Europe/Stockholm', 'click-to-dial' ),
	},
	{
		value: 'Europe/Tallinn',
		label: __( 'Europe/Tallinn', 'click-to-dial' ),
	},
	{
		value: 'Europe/Tirane',
		label: __( 'Europe/Tirane', 'click-to-dial' ),
	},
	{
		value: 'Europe/Tiraspol',
		label: __( 'Europe/Tiraspol', 'click-to-dial' ),
	},
	{
		value: 'Europe/Ulyanovsk',
		label: __( 'Europe/Ulyanovsk', 'click-to-dial' ),
	},
	{
		value: 'Europe/Uzhgorod',
		label: __( 'Europe/Uzhgorod', 'click-to-dial' ),
	},
	{
		value: 'Europe/Vaduz',
		label: __( 'Europe/Vaduz', 'click-to-dial' ),
	},
	{
		value: 'Europe/Vatican',
		label: __( 'Europe/Vatican', 'click-to-dial' ),
	},
	{
		value: 'Europe/Vienna',
		label: __( 'Europe/Vienna', 'click-to-dial' ),
	},
	{
		value: 'Europe/Vilnius',
		label: __( 'Europe/Vilnius', 'click-to-dial' ),
	},
	{
		value: 'Europe/Volgograd',
		label: __( 'Europe/Volgograd', 'click-to-dial' ),
	},
	{
		value: 'Europe/Warsaw',
		label: __( 'Europe/Warsaw', 'click-to-dial' ),
	},
	{
		value: 'Europe/Zagreb',
		label: __( 'Europe/Zagreb', 'click-to-dial' ),
	},
	{
		value: 'Europe/Zaporozhye',
		label: __( 'Europe/Zaporozhye', 'click-to-dial' ),
	},
	{
		value: 'Europe/Zurich',
		label: __( 'Europe/Zurich', 'click-to-dial' ),
	},
	{
		value: 'GB',
		label: __( 'GB', 'click-to-dial' ),
	},
	{
		value: 'GB-Eire',
		label: __( 'GB-Eire', 'click-to-dial' ),
	},
	{
		value: 'GMT',
		label: __( 'GMT', 'click-to-dial' ),
	},
	{
		value: 'GMT+0',
		label: __( 'GMT+0', 'click-to-dial' ),
	},
	{
		value: 'GMT-0',
		label: __( 'GMT-0', 'click-to-dial' ),
	},
	{
		value: 'GMT0',
		label: __( 'GMT0', 'click-to-dial' ),
	},
	{
		value: 'Greenwich',
		label: __( 'Greenwich', 'click-to-dial' ),
	},
	{
		value: 'HST',
		label: __( 'HST', 'click-to-dial' ),
	},
	{
		value: 'Hongkong',
		label: __( 'Hongkong', 'click-to-dial' ),
	},
	{
		value: 'Iceland',
		label: __( 'Iceland', 'click-to-dial' ),
	},
	{
		value: 'Indian/Antananarivo',
		label: __( 'Indian/Antananarivo', 'click-to-dial' ),
	},
	{
		value: 'Indian/Chagos',
		label: __( 'Indian/Chagos', 'click-to-dial' ),
	},
	{
		value: 'Indian/Christmas',
		label: __( 'Indian/Christmas', 'click-to-dial' ),
	},
	{
		value: 'Indian/Cocos',
		label: __( 'Indian/Cocos', 'click-to-dial' ),
	},
	{
		value: 'Indian/Comoro',
		label: __( 'Indian/Comoro', 'click-to-dial' ),
	},
	{
		value: 'Indian/Kerguelen',
		label: __( 'Indian/Kerguelen', 'click-to-dial' ),
	},
	{
		value: 'Indian/Mahe',
		label: __( 'Indian/Mahe', 'click-to-dial' ),
	},
	{
		value: 'Indian/Maldives',
		label: __( 'Indian/Maldives', 'click-to-dial' ),
	},
	{
		value: 'Indian/Mauritius',
		label: __( 'Indian/Mauritius', 'click-to-dial' ),
	},
	{
		value: 'Indian/Mayotte',
		label: __( 'Indian/Mayotte', 'click-to-dial' ),
	},
	{
		value: 'Indian/Reunion',
		label: __( 'Indian/Reunion', 'click-to-dial' ),
	},
	{
		value: 'Iran',
		label: __( 'Iran', 'click-to-dial' ),
	},
	{
		value: 'Israel',
		label: __( 'Israel', 'click-to-dial' ),
	},
	{
		value: 'Jamaica',
		label: __( 'Jamaica', 'click-to-dial' ),
	},
	{
		value: 'Japan',
		label: __( 'Japan', 'click-to-dial' ),
	},
	{
		value: 'Kwajalein',
		label: __( 'Kwajalein', 'click-to-dial' ),
	},
	{
		value: 'Libya',
		label: __( 'Libya', 'click-to-dial' ),
	},
	{
		value: 'MET',
		label: __( 'MET', 'click-to-dial' ),
	},
	{
		value: 'MST',
		label: __( 'MST', 'click-to-dial' ),
	},
	{
		value: 'MST7MDT',
		label: __( 'MST7MDT', 'click-to-dial' ),
	},
	{
		value: 'Mexico/BajaNorte',
		label: __( 'Mexico/BajaNorte', 'click-to-dial' ),
	},
	{
		value: 'Mexico/BajaSur',
		label: __( 'Mexico/BajaSur', 'click-to-dial' ),
	},
	{
		value: 'Mexico/General',
		label: __( 'Mexico/General', 'click-to-dial' ),
	},
	{
		value: 'NZ',
		label: __( 'NZ', 'click-to-dial' ),
	},
	{
		value: 'NZ-CHAT',
		label: __( 'NZ-CHAT', 'click-to-dial' ),
	},
	{
		value: 'Navajo',
		label: __( 'Navajo', 'click-to-dial' ),
	},
	{
		value: 'PRC',
		label: __( 'PRC', 'click-to-dial' ),
	},
	{
		value: 'PST8PDT',
		label: __( 'PST8PDT', 'click-to-dial' ),
	},
	{
		value: 'Pacific/Apia',
		label: __( 'Pacific/Apia', 'click-to-dial' ),
	},
	{
		value: 'Pacific/Auckland',
		label: __( 'Pacific/Auckland', 'click-to-dial' ),
	},
	{
		value: 'Pacific/Bougainville',
		label: __( 'Pacific/Bougainville', 'click-to-dial' ),
	},
	{
		value: 'Pacific/Chatham',
		label: __( 'Pacific/Chatham', 'click-to-dial' ),
	},
	{
		value: 'Pacific/Chuuk',
		label: __( 'Pacific/Chuuk', 'click-to-dial' ),
	},
	{
		value: 'Pacific/Easter',
		label: __( 'Pacific/Easter', 'click-to-dial' ),
	},
	{
		value: 'Pacific/Efate',
		label: __( 'Pacific/Efate', 'click-to-dial' ),
	},
	{
		value: 'Pacific/Enderbury',
		label: __( 'Pacific/Enderbury', 'click-to-dial' ),
	},
	{
		value: 'Pacific/Fakaofo',
		label: __( 'Pacific/Fakaofo', 'click-to-dial' ),
	},
	{
		value: 'Pacific/Fiji',
		label: __( 'Pacific/Fiji', 'click-to-dial' ),
	},
	{
		value: 'Pacific/Funafuti',
		label: __( 'Pacific/Funafuti', 'click-to-dial' ),
	},
	{
		value: 'Pacific/Galapagos',
		label: __( 'Pacific/Galapagos', 'click-to-dial' ),
	},
	{
		value: 'Pacific/Gambier',
		label: __( 'Pacific/Gambier', 'click-to-dial' ),
	},
	{
		value: 'Pacific/Guadalcanal',
		label: __( 'Pacific/Guadalcanal', 'click-to-dial' ),
	},
	{
		value: 'Pacific/Guam',
		label: __( 'Pacific/Guam', 'click-to-dial' ),
	},
	{
		value: 'Pacific/Honolulu',
		label: __( 'Pacific/Honolulu', 'click-to-dial' ),
	},
	{
		value: 'Pacific/Johnston',
		label: __( 'Pacific/Johnston', 'click-to-dial' ),
	},
	{
		value: 'Pacific/Kiritimati',
		label: __( 'Pacific/Kiritimati', 'click-to-dial' ),
	},
	{
		value: 'Pacific/Kosrae',
		label: __( 'Pacific/Kosrae', 'click-to-dial' ),
	},
	{
		value: 'Pacific/Kwajalein',
		label: __( 'Pacific/Kwajalein', 'click-to-dial' ),
	},
	{
		value: 'Pacific/Majuro',
		label: __( 'Pacific/Majuro', 'click-to-dial' ),
	},
	{
		value: 'Pacific/Marquesas',
		label: __( 'Pacific/Marquesas', 'click-to-dial' ),
	},
	{
		value: 'Pacific/Midway',
		label: __( 'Pacific/Midway', 'click-to-dial' ),
	},
	{
		value: 'Pacific/Nauru',
		label: __( 'Pacific/Nauru', 'click-to-dial' ),
	},
	{
		value: 'Pacific/Niue',
		label: __( 'Pacific/Niue', 'click-to-dial' ),
	},
	{
		value: 'Pacific/Norfolk',
		label: __( 'Pacific/Norfolk', 'click-to-dial' ),
	},
	{
		value: 'Pacific/Noumea',
		label: __( 'Pacific/Noumea', 'click-to-dial' ),
	},
	{
		value: 'Pacific/Pago_Pago',
		label: __( 'Pacific/Pago_Pago', 'click-to-dial' ),
	},
	{
		value: 'Pacific/Palau',
		label: __( 'Pacific/Palau', 'click-to-dial' ),
	},
	{
		value: 'Pacific/Pitcairn',
		label: __( 'Pacific/Pitcairn', 'click-to-dial' ),
	},
	{
		value: 'Pacific/Pohnpei',
		label: __( 'Pacific/Pohnpei', 'click-to-dial' ),
	},
	{
		value: 'Pacific/Ponape',
		label: __( 'Pacific/Ponape', 'click-to-dial' ),
	},
	{
		value: 'Pacific/Port_Moresby',
		label: __( 'Pacific/Port_Moresby', 'click-to-dial' ),
	},
	{
		value: 'Pacific/Rarotonga',
		label: __( 'Pacific/Rarotonga', 'click-to-dial' ),
	},
	{
		value: 'Pacific/Saipan',
		label: __( 'Pacific/Saipan', 'click-to-dial' ),
	},
	{
		value: 'Pacific/Samoa',
		label: __( 'Pacific/Samoa', 'click-to-dial' ),
	},
	{
		value: 'Pacific/Tahiti',
		label: __( 'Pacific/Tahiti', 'click-to-dial' ),
	},
	{
		value: 'Pacific/Tarawa',
		label: __( 'Pacific/Tarawa', 'click-to-dial' ),
	},
	{
		value: 'Pacific/Tongatapu',
		label: __( 'Pacific/Tongatapu', 'click-to-dial' ),
	},
	{
		value: 'Pacific/Truk',
		label: __( 'Pacific/Truk', 'click-to-dial' ),
	},
	{
		value: 'Pacific/Wake',
		label: __( 'Pacific/Wake', 'click-to-dial' ),
	},
	{
		value: 'Pacific/Wallis',
		label: __( 'Pacific/Wallis', 'click-to-dial' ),
	},
	{
		value: 'Pacific/Yap',
		label: __( 'Pacific/Yap', 'click-to-dial' ),
	},
	{
		value: 'Poland',
		label: __( 'Poland', 'click-to-dial' ),
	},
	{
		value: 'Portugal',
		label: __( 'Portugal', 'click-to-dial' ),
	},
	{
		value: 'ROC',
		label: __( 'ROC', 'click-to-dial' ),
	},
	{
		value: 'ROK',
		label: __( 'ROK', 'click-to-dial' ),
	},
	{
		value: 'Singapore',
		label: __( 'Singapore', 'click-to-dial' ),
	},
	{
		value: 'Turkey',
		label: __( 'Turkey', 'click-to-dial' ),
	},
	{
		value: 'UCT',
		label: __( 'UCT', 'click-to-dial' ),
	},
	{
		value: 'US/Alaska',
		label: __( 'US/Alaska', 'click-to-dial' ),
	},
	{
		value: 'US/Aleutian',
		label: __( 'US/Aleutian', 'click-to-dial' ),
	},
	{
		value: 'US/Arizona',
		label: __( 'US/Arizona', 'click-to-dial' ),
	},
	{
		value: 'US/Central',
		label: __( 'US/Central', 'click-to-dial' ),
	},
	{
		value: 'US/East-Indiana',
		label: __( 'US/East-Indiana', 'click-to-dial' ),
	},
	{
		value: 'US/Eastern',
		label: __( 'US/Eastern', 'click-to-dial' ),
	},
	{
		value: 'US/Hawaii',
		label: __( 'US/Hawaii', 'click-to-dial' ),
	},
	{
		value: 'US/Indiana-Starke',
		label: __( 'US/Indiana-Starke', 'click-to-dial' ),
	},
	{
		value: 'US/Michigan',
		label: __( 'US/Michigan', 'click-to-dial' ),
	},
	{
		value: 'US/Mountain',
		label: __( 'US/Mountain', 'click-to-dial' ),
	},
	{
		value: 'US/Pacific',
		label: __( 'US/Pacific', 'click-to-dial' ),
	},
	{
		value: 'US/Pacific-New',
		label: __( 'US/Pacific-New', 'click-to-dial' ),
	},
	{
		value: 'US/Samoa',
		label: __( 'US/Samoa', 'click-to-dial' ),
	},
	{
		value: 'UTC',
		label: __( 'UTC', 'click-to-dial' ),
	},
	{
		value: 'Universal',
		label: __( 'Universal', 'click-to-dial' ),
	},
	{
		value: 'W-SU',
		label: __( 'W-SU', 'click-to-dial' ),
	},
	{
		value: 'WET',
		label: __( 'WET', 'click-to-dial' ),
	},
	{
		value: 'Zulu',
		label: __( 'Zulu', 'click-to-dial' ),
	},
];

export default function Edit( props ) {
	const { attributes, setAttributes } = props;

	const {
		buttonSize,
		buttonType,
		borderRadius,
		text,
		info,
		title,
		online,
		offline,
		textAlignment,
		iconTarget,
		visibility,
		numberInput,
		imageUrl,
		timeZone,
		mondayStart,
		mondayEnd,
		tuesdayStart,
		tuesdayEnd,
		wednesdayStart,
		wednesdayEnd,
		thursdayStart,
		thursdayEnd,
		fridayStart,
		fridayEnd,
		saturdayStart,
		saturdayEnd,
		sundayStart,
		sundayEnd,
	} = attributes;

	const [ filteredOptions, setFilteredOptions ] = useState( timezones );

	function onInputChange( value ) {
		setFilteredOptions(
			timezones.filter( ( timezone ) =>
				timezone.label.toLowerCase().includes( value.toLowerCase() )
			)
		);
	}

	function onFontSizeChange( value ) {
		setAttributes( { timeZone: value } );
	}
	const onSelectImage = ( image ) => {
		setAttributes( {
			imageUrl: image.url,
		} );
	};
	const onChangeAlignment = ( newAlignment ) => {
		setAttributes( { textAlignment: newAlignment } );
	};
	const onChangeText = ( newText ) => {
		setAttributes( { text: newText } );
	};
	const advancedBtnInfo = ( newInfo ) => {
		setAttributes( { info: newInfo } );
	};
	const advancedBtnTitle = ( newTitle ) => {
		setAttributes( { title: newTitle } );
	};
	const advancedBtnOnlineBadge = ( newOnline ) => {
		setAttributes( { online: newOnline } );
	};
	const onIconTarget = ( onIconTargets ) => {
		setAttributes( { iconTarget: onIconTargets } );
	};

	const textClasses = classnames( `ctdButtons-align-${ textAlignment }` );

	const basicBtn = classnames( `ctd-button-4 ctd-btn-bg` );
	const classes = classnames( `ctdButtons ctd-button-4 ctd-btn-bg` );

	const buttonSizeOptions = [
		{ value: 'size-small', label: __( 'Small', 'click-to-dial' ) },
		{ value: 'size-medium', label: __( 'Medium', 'click-to-dial' ) },
		{ value: 'size-large', label: __( 'Large', 'click-to-dial' ) },
	];
	const buttonTypeOptions = [
		{ value: 'basic-button', label: __( 'Basic Button', 'click-to-dial' ) },
		{
			value: 'advance-button',
			label: __( 'Advance Button', 'click-to-dial' ),
		},
	];
	const borderRadiusOptions = [
		{
			value: 'border-squared',
			label: __( 'Border Squared', 'click-to-dial' ),
		},
		{
			value: 'border-rounded',
			label: __( 'Border Rounded', 'click-to-dial' ),
		},
	];
	const visibilityOn = [
		{ value: '', label: __( 'Everywhere', 'click-to-dial' ) },
		{
			value: 'ctd-desktop-only',
			label: __( 'Desktop only', 'click-to-dial' ),
		},
		{
			value: 'ctd-tablet-only',
			label: __( 'Tablets only', 'click-to-dial' ),
		},
		{
			value: 'ctd-mobile-tablet-only',
			label: __( 'Mobile and tablets', 'click-to-dial' ),
		},
		{
			value: 'ctd-mobile-only',
			label: __( 'Mobile only', 'click-to-dial' ),
		},
	];

	return (
		<>
			<InspectorControls>
				<PanelBody>
					<SelectControl
						label={ __( 'Button Type', 'click-to-dial' ) }
						value={ buttonType }
						options={ buttonTypeOptions.map(
							( { value, label } ) => ( {
								value,
								label,
							} )
						) }
						onChange={ ( newButton ) => {
							setAttributes( { buttonType: newButton } );
						} }
					/>
				</PanelBody>
			</InspectorControls>
			{ buttonType === 'basic-button' ? (
				<>
					<InspectorControls>
						<PanelBody
							title={ __( 'Phone Number', 'click-to-dial' ) }
							initialOpen={ false }
						>
							<TextControl
								label={ __( 'Number', 'click-to-dial' ) }
								value={ numberInput }
								onChange={ ( val ) =>
									setAttributes( { numberInput: val } )
								}
								help={ __(
									'Add your contact number.',
									'click-to-dial'
								) }
							/>
						</PanelBody>
						<PanelBody
							title={ __( 'Button Style', 'click-to-dial' ) }
							initialOpen={ false }
						>
							<TextControl
								label={ __( 'Button Text', 'click-to-dial' ) }
								value={ text }
								onChange={ ( val ) =>
									setAttributes( { text: val } )
								}
							/>
							<SelectControl
								label={ __( 'Button Size', 'click-to-dial' ) }
								value={ buttonSize }
								options={ buttonSizeOptions.map(
									( { value, label } ) => ( {
										value,
										label,
									} )
								) }
								onChange={ ( newSize ) => {
									setAttributes( { buttonSize: newSize } );
								} }
							/>
							<SelectControl
								label={ __( 'Border Radius', 'click-to-dial' ) }
								value={ borderRadius }
								options={ borderRadiusOptions.map(
									( { value, label } ) => ( {
										value,
										label,
									} )
								) }
								onChange={ ( newSize ) => {
									setAttributes( { borderRadius: newSize } );
								} }
							/>
							<SelectControl
								label={ __( 'Visibility on', 'click-to-dial' ) }
								value={ visibility }
								options={ visibilityOn.map(
									( { value, label } ) => ( {
										value,
										label,
									} )
								) }
								onChange={ ( newSize ) => {
									setAttributes( { visibility: newSize } );
								} }
							/>
						</PanelBody>
						<PanelBody
							title={ __( 'Icon', 'click-to-dial' ) }
							initialOpen={ false }
						>
							<ToggleControl
								label={ __( 'Add Icon', 'click-to-dial' ) }
								checked={ iconTarget }
								onChange={ onIconTarget }
							/>
						</PanelBody>
					</InspectorControls>
					<BlockControls>
						<AlignmentToolbar
							value={ textAlignment }
							onChange={ onChangeAlignment }
						/>
					</BlockControls>
					<div
						className={ `button-wrapper ctd-editor ${ textClasses }` }
					>
						<a
							{ ...useBlockProps( {
								className: `${ basicBtn } ${ buttonSize } ${ borderRadius } ${ visibility }`,
							} ) }
						>
							{ iconTarget && (
								<span className="dashicons dashicons-phone"></span>
							) }
							<RichText
								onChange={ onChangeText }
								value={ text }
								placeholder={ __(
									'How can I help you?',
									'click-to-dial'
								) }
								tagName="span"
								allowedFormats={ [] }
							/>
						</a>
					</div>
				</>
			) : (
				<>
					<InspectorControls>
						<PanelBody
							title={ __( 'General Settings', 'click-to-dial' ) }
							initialOpen={ false }
						>
							<TextControl
								label={ __( 'Number', 'click-to-dial' ) }
								value={ numberInput }
								onChange={ ( val ) =>
									setAttributes( { numberInput: val } )
								}
								help={ __(
									'Add your contact number including country code eg: +880123456789',
									'click-to-dial'
								) }
							/>
							<MediaUpload
								label={ __( 'Agent Image', 'click-to-dial' ) }
								onSelect={ onSelectImage }
								allowedTypes={ [ 'image' ] }
								render={ ( { open } ) => (
									<Button
										onClick={ open }
										style={ {
											marginBottom: '20px',
											fontSize: '16px',
										} }
									>
										<span
											style={ { marginRight: '5px' } }
											className="dashicons dashicons-cloud-upload"
										></span>{ ' ' }
										Agent photo
									</Button>
								) }
							/>
							<TextControl
								label={ __( 'Agent Info', 'click-to-dial' ) }
								value={ info }
								onChange={ ( val ) =>
									setAttributes( { info: val } )
								}
								help={ __(
									'Write agent name & agent title',
									'click-to-dial'
								) }
							/>
							<TextControl
								label={ __( 'Button Label', 'click-to-dial' ) }
								value={ title }
								onChange={ ( val ) =>
									setAttributes( { title: val } )
								}
								help={ __(
									'Add custom button label',
									'click-to-dial'
								) }
							/>
							<TextControl
								label={ __(
									'Online Badge Text',
									'click-to-dial'
								) }
								value={ online }
								onChange={ ( val ) =>
									setAttributes( { online: val } )
								}
								help={ __(
									'Add custom badget text when user in online.',
									'click-to-dial'
								) }
							/>
							<TextControl
								label={ __(
									'Offline Badge Text',
									'click-to-dial'
								) }
								value={ offline }
								onChange={ ( val ) =>
									setAttributes( { offline: val } )
								}
								help={ __(
									'Add custom badget text when user in offline.',
									'click-to-dial'
								) }
							/>
						</PanelBody>
						<PanelBody
							title={ __( 'Chat Settings', 'click-to-dial' ) }
							initialOpen={ false }
						>
							<ComboboxControl
								label={ __( 'Timezone', 'click-to-dial' ) }
								value={ timeZone }
								options={ filteredOptions }
								onChange={ onFontSizeChange }
								onInputChange={ onInputChange }
								help={ __(
									'When using the date and time from the user browser you can transform it to your current timezone (in case your user is in a different timezone)',
									'click-to-dial'
								) }
							/>
							<PanelBody
								title={ __( 'Monthday', 'click-to-dial' ) }
								initialOpen={ false }
							>
								<TextControl
									label={ __( 'Start Time', 'click-to-dial' ) }
									value={ mondayStart }
									onChange={ ( val ) =>
										setAttributes( { mondayStart: val } )
									}
									placeholder={ __(
										'00:00',
										'click-to-dial'
									) }
								/>
								<TextControl
									label={ __( 'End Time', 'click-to-dial' ) }
									value={ mondayEnd }
									onChange={ ( val ) =>
										setAttributes( { mondayEnd: val } )
									}
									placeholder={ __(
										'24:00',
										'click-to-dial'
									) }
								/>
							</PanelBody>
							<PanelBody
								title={ __( 'Tuesday', 'click-to-dial' ) }
								initialOpen={ false }
							>
								<TextControl
									label={ __( 'Start Time', 'click-to-dial' ) }
									value={ tuesdayStart }
									onChange={ ( val ) =>
										setAttributes( { tuesdayStart: val } )
									}
									placeholder={ __(
										'00:00',
										'click-to-dial'
									) }
								/>
								<TextControl
									label={ __( 'End Time', 'click-to-dial' ) }
									value={ tuesdayEnd }
									onChange={ ( val ) =>
										setAttributes( { tuesdayEnd: val } )
									}
									placeholder={ __(
										'24:00',
										'click-to-dial'
									) }
								/>
							</PanelBody>
							<PanelBody
								title={ __( 'Wednesday', 'click-to-dial' ) }
								initialOpen={ false }
							>
								<TextControl
									label={ __( 'Start Time', 'click-to-dial' ) }
									value={ wednesdayStart }
									onChange={ ( val ) =>
										setAttributes( { wednesdayStart: val } )
									}
									placeholder={ __(
										'00:00',
										'click-to-dial'
									) }
								/>
								<TextControl
									label={ __( 'End Time', 'click-to-dial' ) }
									value={ wednesdayEnd }
									onChange={ ( val ) =>
										setAttributes( { wednesdayEnd: val } )
									}
									placeholder={ __(
										'24:00',
										'click-to-dial'
									) }
								/>
							</PanelBody>
							<PanelBody
								title={ __( 'Thursday', 'click-to-dial' ) }
								initialOpen={ false }
							>
								<TextControl
									label={ __( 'Start Time', 'click-to-dial' ) }
									value={ thursdayStart }
									onChange={ ( val ) =>
										setAttributes( { thursdayStart: val } )
									}
									placeholder={ __(
										'00:00',
										'click-to-dial'
									) }
								/>
								<TextControl
									label={ __( 'End Time', 'click-to-dial' ) }
									value={ thursdayEnd }
									onChange={ ( val ) =>
										setAttributes( { thursdayEnd: val } )
									}
									placeholder={ __(
										'24:00',
										'click-to-dial'
									) }
								/>
							</PanelBody>
							<PanelBody
								title={ __( 'Friday', 'click-to-dial' ) }
								initialOpen={ false }
							>
								<TextControl
									label={ __( 'Start Time', 'click-to-dial' ) }
									value={ fridayStart }
									onChange={ ( val ) =>
										setAttributes( { fridayStart: val } )
									}
									placeholder={ __(
										'00:00',
										'click-to-dial'
									) }
								/>
								<TextControl
									label={ __( 'End Time', 'click-to-dial' ) }
									value={ fridayEnd }
									onChange={ ( val ) =>
										setAttributes( { fridayEnd: val } )
									}
									placeholder={ __(
										'24:00',
										'click-to-dial'
									) }
								/>
							</PanelBody>
							<PanelBody
								title={ __( 'Saturday', 'click-to-dial' ) }
								initialOpen={ false }
							>
								<TextControl
									label={ __( 'Start Time', 'click-to-dial' ) }
									value={ saturdayStart }
									onChange={ ( val ) =>
										setAttributes( { saturdayStart: val } )
									}
									placeholder={ __(
										'00:00',
										'click-to-dial'
									) }
								/>
								<TextControl
									label={ __( 'End Time', 'click-to-dial' ) }
									value={ saturdayEnd }
									onChange={ ( val ) =>
										setAttributes( { saturdayEnd: val } )
									}
									placeholder={ __(
										'24:00',
										'click-to-dial'
									) }
								/>
							</PanelBody>
							<PanelBody
								title={ __( 'Sunday', 'click-to-dial' ) }
								initialOpen={ false }
							>
								<TextControl
									label={ __( 'Start Time', 'click-to-dial' ) }
									value={ sundayStart }
									onChange={ ( val ) =>
										setAttributes( { sundayStart: val } )
									}
									placeholder={ __(
										'00:00',
										'click-to-dial'
									) }
								/>
								<TextControl
									label={ __( 'End Time', 'click-to-dial' ) }
									value={ sundayEnd }
									onChange={ ( val ) =>
										setAttributes( { sundayEnd: val } )
									}
									placeholder={ __(
										'24:00',
										'click-to-dial'
									) }
								/>
							</PanelBody>
						</PanelBody>
						<PanelBody
							title={ __(
								'Appearance settings',
								'click-to-dial'
							) }
							initialOpen={ false }
						>
							<SelectControl
								label={ __( 'Visibility on', 'click-to-dial' ) }
								value={ visibility }
								options={ visibilityOn.map(
									( { value, label } ) => ( {
										value,
										label,
									} )
								) }
								onChange={ ( newSize ) => {
									setAttributes( { visibility: newSize } );
								} }
							/>
							<SelectControl
								label={ __( 'Size', 'click-to-dial' ) }
								value={ buttonSize }
								options={ buttonSizeOptions.map(
									( { value, label } ) => ( {
										value,
										label,
									} )
								) }
								onChange={ ( newSize ) => {
									setAttributes( { buttonSize: newSize } );
								} }
							/>
							<SelectControl
								label={ __( 'Border Radius', 'click-to-dial' ) }
								value={ borderRadius }
								options={ borderRadiusOptions.map(
									( { value, label } ) => ( {
										value,
										label,
									} )
								) }
								onChange={ ( newSize ) => {
									setAttributes( { borderRadius: newSize } );
								} }
							/>
						</PanelBody>
					</InspectorControls>
					<BlockControls>
						<AlignmentToolbar
							value={ textAlignment }
							onChange={ onChangeAlignment }
						/>
					</BlockControls>
					<div
						className={ `button-wrapper ctd-editor ${ textClasses }` }
					>
						<button
							{ ...useBlockProps( {
								className: `avatar-active ${ classes } ${ buttonSize } ${ borderRadius } ${ visibility }`,
							} ) }
							data-btnavailablety={ `{ "monday":"${ mondayStart }-${ mondayEnd }", "tuesday":"${ tuesdayStart }-${ tuesdayEnd }", "wednesday":"${ wednesdayStart }-${ wednesdayEnd }", "thursday":"${ thursdayStart }-${ thursdayEnd }", "friday":"${ fridayStart }-${ fridayEnd }", "saturday":"${ saturdayStart }-${ saturdayEnd }", "sunday":"${ sundayStart }-${ sundayEnd }" }` }
							data-timezone={ timeZone }
						>
							<img
								src={ imageUrl ? imageUrl : agentImage }
								alt="agent"
							/>
							<div className="info-wrapper">
								<RichText
									onChange={ advancedBtnInfo }
									value={ info }
									placeholder={ __(
										'Robert / Sales Support',
										'click-to-dial'
									) }
									tagName="p"
									allowedFormats={ [] }
									className="info"
								/>
								<RichText
									onChange={ advancedBtnTitle }
									value={ title }
									placeholder={ __(
										'How can I help you?',
										'click-to-dial'
									) }
									tagName="p"
									allowedFormats={ [] }
									className="title"
								/>
								<RichText
									onChange={ advancedBtnOnlineBadge }
									value={ online }
									placeholder={ __(
										'I am online',
										'click-to-dial'
									) }
									tagName="p"
									allowedFormats={ [] }
									className="online"
								/>
								<RichText
									onChange={ advancedBtnOnlineBadge }
									value={ offline }
									placeholder={ __(
										"I'm not available",
										'click-to-dial'
									) }
									tagName="p"
									allowedFormats={ [] }
									className="offline"
								/>
							</div>
						</button>
					</div>
				</>
			) }
		</>
	);
}
