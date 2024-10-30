/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Edit; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editor.scss */ "./src/editor.scss");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__);








const agentImage = __webpack_require__(/*! ./images/user.jpg */ "./src/images/user.jpg");
const {
  SelectControl,
  TextControl
} = wp.components;
const timezones = [{
  value: 'Africa/Abidjan',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Abidjan', 'click-to-dial')
}, {
  value: 'Africa/Accra',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Accra', 'click-to-dial')
}, {
  value: 'Africa/Addis_Ababa',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Addis_Ababa', 'click-to-dial')
}, {
  value: 'Africa/Algiers',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Algiers', 'click-to-dial')
}, {
  value: 'Africa/Asmara',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Asmara', 'click-to-dial')
}, {
  value: 'Africa/Asmera',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Asmera', 'click-to-dial')
}, {
  value: 'Africa/Bamako',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Bamako', 'click-to-dial')
}, {
  value: 'Africa/Bangui',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Bangui', 'click-to-dial')
}, {
  value: 'Africa/Banjul',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Banjul', 'click-to-dial')
}, {
  value: 'Africa/Bissau',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Bissau', 'click-to-dial')
}, {
  value: 'Africa/Blantyre',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Blantyre', 'click-to-dial')
}, {
  value: 'Africa/Brazzaville',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Brazzaville', 'click-to-dial')
}, {
  value: 'Africa/Bujumbura',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Bujumbura', 'click-to-dial')
}, {
  value: 'Africa/Cairo',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Cairo', 'click-to-dial')
}, {
  value: 'Africa/Casablanca',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Casablanca', 'click-to-dial')
}, {
  value: 'Africa/Ceuta',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Ceuta', 'click-to-dial')
}, {
  value: 'Africa/Conakry',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Conakry', 'click-to-dial')
}, {
  value: 'Africa/Dakar',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Dakar', 'click-to-dial')
}, {
  value: 'Africa/Dar_es_Salaam',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Dar_es_Salaam', 'click-to-dial')
}, {
  value: 'Africa/Djibouti',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Djibouti', 'click-to-dial')
}, {
  value: 'Africa/Douala',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Douala', 'click-to-dial')
}, {
  value: 'Africa/El_Aaiun',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/El_Aaiun', 'click-to-dial')
}, {
  value: 'Africa/Freetown',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Freetown', 'click-to-dial')
}, {
  value: 'Africa/Gaborone',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Gaborone', 'click-to-dial')
}, {
  value: 'Africa/Harare',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Harare', 'click-to-dial')
}, {
  value: 'Africa/Johannesburg',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Johannesburg', 'click-to-dial')
}, {
  value: 'Africa/Juba',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Juba', 'click-to-dial')
}, {
  value: 'Africa/Kampala',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Kampala', 'click-to-dial')
}, {
  value: 'Africa/Khartoum',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Khartoum', 'click-to-dial')
}, {
  value: 'Africa/Kigali',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Kigali', 'click-to-dial')
}, {
  value: 'Africa/Kinshasa',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Kinshasa', 'click-to-dial')
}, {
  value: 'Africa/Lagos',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Lagos', 'click-to-dial')
}, {
  value: 'Africa/Libreville',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Libreville', 'click-to-dial')
}, {
  value: 'Africa/Lome',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Lome', 'click-to-dial')
}, {
  value: 'Africa/Luanda',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Luanda', 'click-to-dial')
}, {
  value: 'Africa/Lubumbashi',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Lubumbashi', 'click-to-dial')
}, {
  value: 'Africa/Lusaka',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Lusaka', 'click-to-dial')
}, {
  value: 'Africa/Malabo',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Malabo', 'click-to-dial')
}, {
  value: 'Africa/Maputo',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Maputo', 'click-to-dial')
}, {
  value: 'Africa/Maseru',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Maseru', 'click-to-dial')
}, {
  value: 'Africa/Mbabane',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Mbabane', 'click-to-dial')
}, {
  value: 'Africa/Mogadishu',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Mogadishu', 'click-to-dial')
}, {
  value: 'Africa/Monrovia',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Monrovia', 'click-to-dial')
}, {
  value: 'Africa/Nairobi',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Nairobi', 'click-to-dial')
}, {
  value: 'Africa/Ndjamena',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Ndjamena', 'click-to-dial')
}, {
  value: 'Africa/Niamey',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Niamey', 'click-to-dial')
}, {
  value: 'Africa/Nouakchott',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Nouakchott', 'click-to-dial')
}, {
  value: 'Africa/Ouagadougou',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Ouagadougou', 'click-to-dial')
}, {
  value: 'Africa/Porto-Novo',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Porto-Novo', 'click-to-dial')
}, {
  value: 'Africa/Sao_Tome',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Sao_Tome', 'click-to-dial')
}, {
  value: 'Africa/Timbuktu',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Timbuktu', 'click-to-dial')
}, {
  value: 'Africa/Tripoli',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Tripoli', 'click-to-dial')
}, {
  value: 'Africa/Tunis',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Tunis', 'click-to-dial')
}, {
  value: 'Africa/Windhoek',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Windhoek', 'click-to-dial')
}, {
  value: 'America/Adak',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Adak', 'click-to-dial')
}, {
  value: 'America/Anchorage',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Anchorage', 'click-to-dial')
}, {
  value: 'America/Anguilla',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Anguilla', 'click-to-dial')
}, {
  value: 'America/Antigua',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Antigua', 'click-to-dial')
}, {
  value: 'America/Araguaina',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Araguaina', 'click-to-dial')
}, {
  value: 'America/Argentina/Buenos_Aires',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Argentina/Buenos_Aires', 'click-to-dial')
}, {
  value: 'America/Argentina/Catamarca',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Argentina/Catamarca', 'click-to-dial')
}, {
  value: 'America/Argentina/ComodRivadavia',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Argentina/ComodRivadavia', 'click-to-dial')
}, {
  value: 'America/Argentina/Cordoba',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Argentina/Cordoba', 'click-to-dial')
}, {
  value: 'America/Argentina/Jujuy',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Argentina/Jujuy', 'click-to-dial')
}, {
  value: 'America/Argentina/La_Rioja',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Argentina/La_Rioja', 'click-to-dial')
}, {
  value: 'America/Argentina/Mendoza',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Argentina/Mendoza', 'click-to-dial')
}, {
  value: 'America/Argentina/Rio_Gallegos',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Argentina/Rio_Gallegos', 'click-to-dial')
}, {
  value: 'America/Argentina/Salta',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Argentina/Salta', 'click-to-dial')
}, {
  value: 'America/Argentina/San_Juan',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Argentina/San_Juan', 'click-to-dial')
}, {
  value: 'America/Argentina/San_Luis',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Argentina/San_Luis', 'click-to-dial')
}, {
  value: 'America/Argentina/Tucuman',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Argentina/Tucuman', 'click-to-dial')
}, {
  value: 'America/Argentina/Ushuaia',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Argentina/Ushuaia', 'click-to-dial')
}, {
  value: 'America/Aruba',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Aruba', 'click-to-dial')
}, {
  value: 'America/Asuncion',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Asuncion', 'click-to-dial')
}, {
  value: 'America/Atikokan',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Atikokan', 'click-to-dial')
}, {
  value: 'America/Atka',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Atka', 'click-to-dial')
}, {
  value: 'America/Bahia',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Bahia', 'click-to-dial')
}, {
  value: 'America/Bahia_Banderas',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Bahia_Banderas', 'click-to-dial')
}, {
  value: 'America/Barbados',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Barbados', 'click-to-dial')
}, {
  value: 'America/Belem',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Belem', 'click-to-dial')
}, {
  value: 'America/Belize',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Belize', 'click-to-dial')
}, {
  value: 'America/Blanc-Sablon',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Blanc-Sablon', 'click-to-dial')
}, {
  value: 'America/Boa_Vista',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Boa_Vista', 'click-to-dial')
}, {
  value: 'America/Bogota',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Bogota', 'click-to-dial')
}, {
  value: 'America/Boise',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Boise', 'click-to-dial')
}, {
  value: 'America/Buenos_Aires',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Buenos_Aires', 'click-to-dial')
}, {
  value: 'America/Cambridge_Bay',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Cambridge_Bay', 'click-to-dial')
}, {
  value: 'America/Campo_Grande',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Campo_Grande', 'click-to-dial')
}, {
  value: 'America/Cancun',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Cancun', 'click-to-dial')
}, {
  value: 'America/Caracas',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Caracas', 'click-to-dial')
}, {
  value: 'America/Catamarca',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Catamarca', 'click-to-dial')
}, {
  value: 'America/Cayenne',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Cayenne', 'click-to-dial')
}, {
  value: 'America/Cayman',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Cayman', 'click-to-dial')
}, {
  value: 'America/Chicago',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Chicago', 'click-to-dial')
}, {
  value: 'America/Chihuahua',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Chihuahua', 'click-to-dial')
}, {
  value: 'America/Coral_Harbour',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Coral_Harbour', 'click-to-dial')
}, {
  value: 'America/Cordoba',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Cordoba', 'click-to-dial')
}, {
  value: 'America/Costa_Rica',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Costa_Rica', 'click-to-dial')
}, {
  value: 'America/Creston',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Creston', 'click-to-dial')
}, {
  value: 'America/Cuiaba',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Cuiaba', 'click-to-dial')
}, {
  value: 'America/Curacao',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Curacao', 'click-to-dial')
}, {
  value: 'America/Danmarkshavn',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Danmarkshavn', 'click-to-dial')
}, {
  value: 'America/Dawson',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Dawson', 'click-to-dial')
}, {
  value: 'America/Dawson_Creek',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Dawson_Creek', 'click-to-dial')
}, {
  value: 'America/Denver',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Denver', 'click-to-dial')
}, {
  value: 'America/Detroit',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Detroit', 'click-to-dial')
}, {
  value: 'America/Dominica',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Dominica', 'click-to-dial')
}, {
  value: 'America/Edmonton',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Edmonton', 'click-to-dial')
}, {
  value: 'America/Eirunepe',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Eirunepe', 'click-to-dial')
}, {
  value: 'America/El_Salvador',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/El_Salvador', 'click-to-dial')
}, {
  value: 'America/Ensenada',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Ensenada', 'click-to-dial')
}, {
  value: 'America/Fort_Nelson',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Fort_Nelson', 'click-to-dial')
}, {
  value: 'America/Fort_Wayne',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Fort_Wayne', 'click-to-dial')
}, {
  value: 'America/Fortaleza',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Fortaleza', 'click-to-dial')
}, {
  value: 'America/Glace_Bay',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Glace_Bay', 'click-to-dial')
}, {
  value: 'America/Godthab',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Godthab', 'click-to-dial')
}, {
  value: 'America/Goose_Bay',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Goose_Bay', 'click-to-dial')
}, {
  value: 'America/Grand_Turk',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Grand_Turk', 'click-to-dial')
}, {
  value: 'America/Grenada',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Grenada', 'click-to-dial')
}, {
  value: 'America/Guadeloupe',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Guadeloupe', 'click-to-dial')
}, {
  value: 'America/Guatemala',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Guatemala', 'click-to-dial')
}, {
  value: 'America/Guayaquil',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Guayaquil', 'click-to-dial')
}, {
  value: 'America/Guyana',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Guyana', 'click-to-dial')
}, {
  value: 'America/Halifax',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Halifax', 'click-to-dial')
}, {
  value: 'America/Havana',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Havana', 'click-to-dial')
}, {
  value: 'America/Hermosillo',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Hermosillo', 'click-to-dial')
}, {
  value: 'America/Indiana/Indianapolis',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Indiana/Indianapolis', 'click-to-dial')
}, {
  value: 'America/Indiana/Knox',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Indiana/Knox', 'click-to-dial')
}, {
  value: 'America/Indiana/Marengo',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Indiana/Marengo', 'click-to-dial')
}, {
  value: 'America/Indiana/Petersburg',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Indiana/Petersburg', 'click-to-dial')
}, {
  value: 'America/Indiana/Tell_City',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Indiana/Tell_City', 'click-to-dial')
}, {
  value: 'America/Indiana/Vevay',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Indiana/Vevay', 'click-to-dial')
}, {
  value: 'America/Indiana/Vincennes',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Indiana/Vincennes', 'click-to-dial')
}, {
  value: 'America/Indiana/Winamac',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Indiana/Winamac', 'click-to-dial')
}, {
  value: 'America/Indianapolis',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Indianapolis', 'click-to-dial')
}, {
  value: 'America/Inuvik',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Inuvik', 'click-to-dial')
}, {
  value: 'America/Iqaluit',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Iqaluit', 'click-to-dial')
}, {
  value: 'America/Jamaica',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Jamaica', 'click-to-dial')
}, {
  value: 'America/Jujuy',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Jujuy', 'click-to-dial')
}, {
  value: 'America/Juneau',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Juneau', 'click-to-dial')
}, {
  value: 'America/Kentucky/Louisville',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Kentucky/Louisville', 'click-to-dial')
}, {
  value: 'America/Kentucky/Monticello',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Kentucky/Monticello', 'click-to-dial')
}, {
  value: 'America/Knox_IN',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Knox_IN', 'click-to-dial')
}, {
  value: 'America/Kralendijk',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Kralendijk', 'click-to-dial')
}, {
  value: 'America/La_Paz',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/La_Paz', 'click-to-dial')
}, {
  value: 'America/Lima',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Lima', 'click-to-dial')
}, {
  value: 'America/Los_Angeles',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Los_Angeles', 'click-to-dial')
}, {
  value: 'America/Louisville',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Louisville', 'click-to-dial')
}, {
  value: 'America/Lower_Princes',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Lower_Princes', 'click-to-dial')
}, {
  value: 'America/Maceio',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Maceio', 'click-to-dial')
}, {
  value: 'America/Managua',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Managua', 'click-to-dial')
}, {
  value: 'America/Manaus',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Manaus', 'click-to-dial')
}, {
  value: 'America/Marigot',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Marigot', 'click-to-dial')
}, {
  value: 'America/Martinique',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Martinique', 'click-to-dial')
}, {
  value: 'America/Matamoros',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Matamoros', 'click-to-dial')
}, {
  value: 'America/Mazatlan',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Mazatlan', 'click-to-dial')
}, {
  value: 'America/Mendoza',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Mendoza', 'click-to-dial')
}, {
  value: 'America/Menominee',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Menominee', 'click-to-dial')
}, {
  value: 'America/Merida',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Merida', 'click-to-dial')
}, {
  value: 'America/Metlakatla',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Metlakatla', 'click-to-dial')
}, {
  value: 'America/Mexico_City',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Mexico_City', 'click-to-dial')
}, {
  value: 'America/Miquelon',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Miquelon', 'click-to-dial')
}, {
  value: 'America/Moncton',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Moncton', 'click-to-dial')
}, {
  value: 'America/Monterrey',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Monterrey', 'click-to-dial')
}, {
  value: 'America/Montevideo',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Montevideo', 'click-to-dial')
}, {
  value: 'America/Montreal',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Montreal', 'click-to-dial')
}, {
  value: 'America/Montserrat',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Montserrat', 'click-to-dial')
}, {
  value: 'America/Nassau',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Nassau', 'click-to-dial')
}, {
  value: 'America/New_York',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/New_York', 'click-to-dial')
}, {
  value: 'America/Nipigon',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Nipigon', 'click-to-dial')
}, {
  value: 'America/Nome',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Nome', 'click-to-dial')
}, {
  value: 'America/Noronha',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Noronha', 'click-to-dial')
}, {
  value: 'America/North_Dakota/Beulah',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/North_Dakota/Beulah', 'click-to-dial')
}, {
  value: 'America/North_Dakota/Center',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/North_Dakota/Center', 'click-to-dial')
}, {
  value: 'America/North_Dakota/New_Salem',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/North_Dakota/New_Salem', 'click-to-dial')
}, {
  value: 'America/Ojinaga',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Ojinaga', 'click-to-dial')
}, {
  value: 'America/Panama',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Panama', 'click-to-dial')
}, {
  value: 'America/Pangnirtung',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Pangnirtung', 'click-to-dial')
}, {
  value: 'America/Paramaribo',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Paramaribo', 'click-to-dial')
}, {
  value: 'America/Phoenix',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Phoenix', 'click-to-dial')
}, {
  value: 'America/Port-au-Prince',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Port-au-Prince', 'click-to-dial')
}, {
  value: 'America/Port_of_Spain',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Port_of_Spain', 'click-to-dial')
}, {
  value: 'America/Porto_Acre',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Porto_Acre', 'click-to-dial')
}, {
  value: 'America/Porto_Velho',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Porto_Velho', 'click-to-dial')
}, {
  value: 'America/Puerto_Rico',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Puerto_Rico', 'click-to-dial')
}, {
  value: 'America/Punta_Arenas',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Punta_Arenas', 'click-to-dial')
}, {
  value: 'America/Rainy_River',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Rainy_River', 'click-to-dial')
}, {
  value: 'America/Rankin_Inlet',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Rankin_Inlet', 'click-to-dial')
}, {
  value: 'America/Recife',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Recife', 'click-to-dial')
}, {
  value: 'America/Regina',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Regina', 'click-to-dial')
}, {
  value: 'America/Resolute',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Resolute', 'click-to-dial')
}, {
  value: 'America/Rio_Branco',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Rio_Branco', 'click-to-dial')
}, {
  value: 'America/Rosario',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Rosario', 'click-to-dial')
}, {
  value: 'America/Santa_Isabel',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Santa_Isabel', 'click-to-dial')
}, {
  value: 'America/Santarem',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Santarem', 'click-to-dial')
}, {
  value: 'America/Santiago',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Santiago', 'click-to-dial')
}, {
  value: 'America/Santo_Domingo',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Santo_Domingo', 'click-to-dial')
}, {
  value: 'America/Sao_Paulo',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Sao_Paulo', 'click-to-dial')
}, {
  value: 'America/Scoresbysund',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Scoresbysund', 'click-to-dial')
}, {
  value: 'America/Shiprock',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Shiprock', 'click-to-dial')
}, {
  value: 'America/Sitka',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Sitka', 'click-to-dial')
}, {
  value: 'America/St_Barthelemy',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/St_Barthelemy', 'click-to-dial')
}, {
  value: 'America/St_Johns',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/St_Johns', 'click-to-dial')
}, {
  value: 'America/St_Kitts',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/St_Kitts', 'click-to-dial')
}, {
  value: 'America/St_Lucia',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/St_Lucia', 'click-to-dial')
}, {
  value: 'America/St_Thomas',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/St_Thomas', 'click-to-dial')
}, {
  value: 'America/St_Vincent',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/St_Vincent', 'click-to-dial')
}, {
  value: 'America/Swift_Current',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Swift_Current', 'click-to-dial')
}, {
  value: 'America/Tegucigalpa',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Tegucigalpa', 'click-to-dial')
}, {
  value: 'America/Thule',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Thule', 'click-to-dial')
}, {
  value: 'America/Thunder_Bay',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Thunder_Bay', 'click-to-dial')
}, {
  value: 'America/Tijuana',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Tijuana', 'click-to-dial')
}, {
  value: 'America/Toronto',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Toronto', 'click-to-dial')
}, {
  value: 'America/Tortola',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Tortola', 'click-to-dial')
}, {
  value: 'America/Vancouver',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Vancouver', 'click-to-dial')
}, {
  value: 'America/Virgin',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Virgin', 'click-to-dial')
}, {
  value: 'America/Whitehorse',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Whitehorse', 'click-to-dial')
}, {
  value: 'America/Winnipeg',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Winnipeg', 'click-to-dial')
}, {
  value: 'America/Yakutat',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Yakutat', 'click-to-dial')
}, {
  value: 'America/Yellowknife',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Yellowknife', 'click-to-dial')
}, {
  value: 'Antarctica/Casey',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Antarctica/Casey', 'click-to-dial')
}, {
  value: 'Antarctica/Davis',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Antarctica/Davis', 'click-to-dial')
}, {
  value: 'Antarctica/DumontDUrville',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Antarctica/DumontDUrville', 'click-to-dial')
}, {
  value: 'Antarctica/Macquarie',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Antarctica/Macquarie', 'click-to-dial')
}, {
  value: 'Antarctica/Mawson',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Antarctica/Mawson', 'click-to-dial')
}, {
  value: 'Antarctica/McMurdo',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Antarctica/McMurdo', 'click-to-dial')
}, {
  value: 'Antarctica/Palmer',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Antarctica/Palmer', 'click-to-dial')
}, {
  value: 'Antarctica/Rothera',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Antarctica/Rothera', 'click-to-dial')
}, {
  value: 'Antarctica/South_Pole',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Antarctica/South_Pole', 'click-to-dial')
}, {
  value: 'Antarctica/Syowa',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Antarctica/Syowa', 'click-to-dial')
}, {
  value: 'Antarctica/Troll',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Antarctica/Troll', 'click-to-dial')
}, {
  value: 'Antarctica/Vostok',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Antarctica/Vostok', 'click-to-dial')
}, {
  value: 'Arctic/Longyearbyen',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Arctic/Longyearbyen', 'click-to-dial')
}, {
  value: 'Asia/Aden',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Aden', 'click-to-dial')
}, {
  value: 'Asia/Almaty',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Almaty', 'click-to-dial')
}, {
  value: 'Asia/Amman',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Amman', 'click-to-dial')
}, {
  value: 'Asia/Anadyr',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Anadyr', 'click-to-dial')
}, {
  value: 'Asia/Aqtau',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Aqtau', 'click-to-dial')
}, {
  value: 'Asia/Aqtobe',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Aqtobe', 'click-to-dial')
}, {
  value: 'Asia/Ashgabat',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Ashgabat', 'click-to-dial')
}, {
  value: 'Asia/Ashkhabad',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Ashkhabad', 'click-to-dial')
}, {
  value: 'Asia/Atyrau',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Atyrau', 'click-to-dial')
}, {
  value: 'Asia/Baghdad',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Baghdad', 'click-to-dial')
}, {
  value: 'Asia/Bahrain',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Bahrain', 'click-to-dial')
}, {
  value: 'Asia/Baku',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Baku', 'click-to-dial')
}, {
  value: 'Asia/Bangkok',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Bangkok', 'click-to-dial')
}, {
  value: 'Asia/Barnaul',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Barnaul', 'click-to-dial')
}, {
  value: 'Asia/Beirut',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Beirut', 'click-to-dial')
}, {
  value: 'Asia/Bishkek',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Bishkek', 'click-to-dial')
}, {
  value: 'Asia/Brunei',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Brunei', 'click-to-dial')
}, {
  value: 'Asia/Calcutta',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Calcutta', 'click-to-dial')
}, {
  value: 'Asia/Chita',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Chita', 'click-to-dial')
}, {
  value: 'Asia/Choibalsan',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Choibalsan', 'click-to-dial')
}, {
  value: 'Asia/Chongqing',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Chongqing', 'click-to-dial')
}, {
  value: 'Asia/Chungking',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Chungking', 'click-to-dial')
}, {
  value: 'Asia/Colombo',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Colombo', 'click-to-dial')
}, {
  value: 'Asia/Dacca',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Dacca', 'click-to-dial')
}, {
  value: 'Asia/Damascus',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Damascus', 'click-to-dial')
}, {
  value: 'Asia/Dhaka',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Dhaka', 'click-to-dial')
}, {
  value: 'Asia/Dili',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Dili', 'click-to-dial')
}, {
  value: 'Asia/Dubai',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Dubai', 'click-to-dial')
}, {
  value: 'Asia/Dushanbe',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Dushanbe', 'click-to-dial')
}, {
  value: 'Asia/Famagusta',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Famagusta', 'click-to-dial')
}, {
  value: 'Asia/Gaza',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Gaza', 'click-to-dial')
}, {
  value: 'Asia/Harbin',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Harbin', 'click-to-dial')
}, {
  value: 'Asia/Hebron',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Hebron', 'click-to-dial')
}, {
  value: 'Asia/Ho_Chi_Minh',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Ho_Chi_Minh', 'click-to-dial')
}, {
  value: 'Asia/Hong_Kong',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Hong_Kong', 'click-to-dial')
}, {
  value: 'Asia/Hovd',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Hovd', 'click-to-dial')
}, {
  value: 'Asia/Irkutsk',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Irkutsk', 'click-to-dial')
}, {
  value: 'Asia/Istanbul',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Istanbul', 'click-to-dial')
}, {
  value: 'Asia/Jakarta',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Jakarta', 'click-to-dial')
}, {
  value: 'Asia/Jayapura',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Jayapura', 'click-to-dial')
}, {
  value: 'Asia/Jerusalem',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Jerusalem', 'click-to-dial')
}, {
  value: 'Asia/Kabul',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Kabul', 'click-to-dial')
}, {
  value: 'Asia/Kamchatka',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Kamchatka', 'click-to-dial')
}, {
  value: 'Asia/Karachi',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Karachi', 'click-to-dial')
}, {
  value: 'Asia/Kashgar',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Kashgar', 'click-to-dial')
}, {
  value: 'Asia/Kathmandu',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Kathmandu', 'click-to-dial')
}, {
  value: 'Asia/Katmandu',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Katmandu', 'click-to-dial')
}, {
  value: 'Asia/Khandyga',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Khandyga', 'click-to-dial')
}, {
  value: 'Asia/Kolkata',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Kolkata', 'click-to-dial')
}, {
  value: 'Asia/Krasnoyarsk',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Krasnoyarsk', 'click-to-dial')
}, {
  value: 'Asia/Kuala_Lumpur',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Kuala_Lumpur', 'click-to-dial')
}, {
  value: 'Asia/Kuching',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Kuching', 'click-to-dial')
}, {
  value: 'Asia/Kuwait',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Kuwait', 'click-to-dial')
}, {
  value: 'Asia/Macao',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Macao', 'click-to-dial')
}, {
  value: 'Asia/Macau',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Macau', 'click-to-dial')
}, {
  value: 'Asia/Magadan',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Magadan', 'click-to-dial')
}, {
  value: 'Asia/Makassar',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Makassar', 'click-to-dial')
}, {
  value: 'Asia/Manila',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Manila', 'click-to-dial')
}, {
  value: 'Asia/Muscat',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Muscat', 'click-to-dial')
}, {
  value: 'Asia/Nicosia',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Nicosia', 'click-to-dial')
}, {
  value: 'Asia/Novokuznetsk',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Novokuznetsk', 'click-to-dial')
}, {
  value: 'Asia/Novosibirsk',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Novosibirsk', 'click-to-dial')
}, {
  value: 'Asia/Omsk',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Omsk', 'click-to-dial')
}, {
  value: 'Asia/Oral',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Oral', 'click-to-dial')
}, {
  value: 'Asia/Phnom_Penh',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Phnom_Penh', 'click-to-dial')
}, {
  value: 'Asia/Pontianak',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Pontianak', 'click-to-dial')
}, {
  value: 'Asia/Pyongyang',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Pyongyang', 'click-to-dial')
}, {
  value: 'Asia/Qatar',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Qatar', 'click-to-dial')
}, {
  value: 'Asia/Qyzylorda',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Qyzylorda', 'click-to-dial')
}, {
  value: 'Asia/Rangoon',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Rangoon', 'click-to-dial')
}, {
  value: 'Asia/Riyadh',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Riyadh', 'click-to-dial')
}, {
  value: 'Asia/Saigon',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Saigon', 'click-to-dial')
}, {
  value: 'Asia/Sakhalin',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Sakhalin', 'click-to-dial')
}, {
  value: 'Asia/Samarkand',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Samarkand', 'click-to-dial')
}, {
  value: 'Asia/Seoul',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Seoul', 'click-to-dial')
}, {
  value: 'Asia/Shanghai',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Shanghai', 'click-to-dial')
}, {
  value: 'Asia/Singapore',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Singapore', 'click-to-dial')
}, {
  value: 'Asia/Srednekolymsk',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Srednekolymsk', 'click-to-dial')
}, {
  value: 'Asia/Taipei',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Taipei', 'click-to-dial')
}, {
  value: 'Asia/Tashkent',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Tashkent', 'click-to-dial')
}, {
  value: 'Asia/Tbilisi',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Tbilisi', 'click-to-dial')
}, {
  value: 'Asia/Tehran',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Tehran', 'click-to-dial')
}, {
  value: 'Asia/Tel_Aviv',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Tel_Aviv', 'click-to-dial')
}, {
  value: 'Asia/Thimbu',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Thimbu', 'click-to-dial')
}, {
  value: 'Asia/Thimphu',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Thimphu', 'click-to-dial')
}, {
  value: 'Asia/Tokyo',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Tokyo', 'click-to-dial')
}, {
  value: 'Asia/Tomsk',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Tomsk', 'click-to-dial')
}, {
  value: 'Asia/Ujung_Pandang',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Ujung_Pandang', 'click-to-dial')
}, {
  value: 'Asia/Ulaanbaatar',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Ulaanbaatar', 'click-to-dial')
}, {
  value: 'Asia/Ulan_Bator',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Ulan_Bator', 'click-to-dial')
}, {
  value: 'Asia/Urumqi',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Urumqi', 'click-to-dial')
}, {
  value: 'Asia/Ust-Nera',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Ust-Nera', 'click-to-dial')
}, {
  value: 'Asia/Vientiane',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Vientiane', 'click-to-dial')
}, {
  value: 'Asia/Vladivostok',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Vladivostok', 'click-to-dial')
}, {
  value: 'Asia/Yakutsk',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Yakutsk', 'click-to-dial')
}, {
  value: 'Asia/Yangon',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Yangon', 'click-to-dial')
}, {
  value: 'Asia/Yekaterinburg',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Yekaterinburg', 'click-to-dial')
}, {
  value: 'Asia/Yerevan',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Yerevan', 'click-to-dial')
}, {
  value: 'Atlantic/Azores',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Atlantic/Azores', 'click-to-dial')
}, {
  value: 'Atlantic/Bermuda',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Atlantic/Bermuda', 'click-to-dial')
}, {
  value: 'Atlantic/Canary',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Atlantic/Canary', 'click-to-dial')
}, {
  value: 'Atlantic/Cape_Verde',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Atlantic/Cape_Verde', 'click-to-dial')
}, {
  value: 'Atlantic/Faeroe',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Atlantic/Faeroe', 'click-to-dial')
}, {
  value: 'Atlantic/Faroe',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Atlantic/Faroe', 'click-to-dial')
}, {
  value: 'Atlantic/Jan_Mayen',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Atlantic/Jan_Mayen', 'click-to-dial')
}, {
  value: 'Atlantic/Madeira',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Atlantic/Madeira', 'click-to-dial')
}, {
  value: 'Atlantic/Reykjavik',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Atlantic/Reykjavik', 'click-to-dial')
}, {
  value: 'Atlantic/South_Georgia',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Atlantic/South_Georgia', 'click-to-dial')
}, {
  value: 'Atlantic/St_Helena',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Atlantic/St_Helena', 'click-to-dial')
}, {
  value: 'Atlantic/Stanley',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Atlantic/Stanley', 'click-to-dial')
}, {
  value: 'Australia/ACT',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Australia/ACT', 'click-to-dial')
}, {
  value: 'Australia/Adelaide',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Australia/Adelaide', 'click-to-dial')
}, {
  value: 'Australia/Brisbane',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Australia/Brisbane', 'click-to-dial')
}, {
  value: 'Australia/Broken_Hill',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Australia/Broken_Hill', 'click-to-dial')
}, {
  value: 'Australia/Canberra',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Australia/Canberra', 'click-to-dial')
}, {
  value: 'Australia/Currie',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Australia/Currie', 'click-to-dial')
}, {
  value: 'Australia/Darwin',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Australia/Darwin', 'click-to-dial')
}, {
  value: 'Australia/Eucla',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Australia/Eucla', 'click-to-dial')
}, {
  value: 'Australia/Hobart',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Australia/Hobart', 'click-to-dial')
}, {
  value: 'Australia/LHI',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Australia/LHI', 'click-to-dial')
}, {
  value: 'Australia/Lindeman',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Australia/Lindeman', 'click-to-dial')
}, {
  value: 'Australia/Lord_Howe',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Australia/Lord_Howe', 'click-to-dial')
}, {
  value: 'Australia/Melbourne',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Australia/Melbourne', 'click-to-dial')
}, {
  value: 'Australia/NSW',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Australia/NSW', 'click-to-dial')
}, {
  value: 'Australia/North',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Australia/North', 'click-to-dial')
}, {
  value: 'Australia/Perth',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Australia/Perth', 'click-to-dial')
}, {
  value: 'Australia/Queensland',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Australia/Queensland', 'click-to-dial')
}, {
  value: 'Australia/South',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Australia/South', 'click-to-dial')
}, {
  value: 'Australia/Sydney',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Australia/Sydney', 'click-to-dial')
}, {
  value: 'Australia/Tasmania',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Australia/Tasmania', 'click-to-dial')
}, {
  value: 'Australia/Victoria',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Australia/Victoria', 'click-to-dial')
}, {
  value: 'Australia/West',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Australia/West', 'click-to-dial')
}, {
  value: 'Australia/Yancowinna',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Australia/Yancowinna', 'click-to-dial')
}, {
  value: 'Brazil/Acre',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Brazil/Acre', 'click-to-dial')
}, {
  value: 'Brazil/DeNoronha',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Brazil/DeNoronha', 'click-to-dial')
}, {
  value: 'Brazil/East',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Brazil/East', 'click-to-dial')
}, {
  value: 'Brazil/West',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Brazil/West', 'click-to-dial')
}, {
  value: 'CET',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('CET', 'click-to-dial')
}, {
  value: 'CST6CDT',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('CST6CDT', 'click-to-dial')
}, {
  value: 'Canada/Atlantic',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Canada/Atlantic', 'click-to-dial')
}, {
  value: 'Canada/Central',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Canada/Central', 'click-to-dial')
}, {
  value: 'Canada/Eastern',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Canada/Eastern', 'click-to-dial')
}, {
  value: 'Canada/Mountain',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Canada/Mountain', 'click-to-dial')
}, {
  value: 'Canada/Newfoundland',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Canada/Newfoundland', 'click-to-dial')
}, {
  value: 'Canada/Pacific',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Canada/Pacific', 'click-to-dial')
}, {
  value: 'Canada/Saskatchewan',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Canada/Saskatchewan', 'click-to-dial')
}, {
  value: 'Canada/Yukon',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Canada/Yukon', 'click-to-dial')
}, {
  value: 'Chile/Continental',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Chile/Continental', 'click-to-dial')
}, {
  value: 'Chile/EasterIsland',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Chile/EasterIsland', 'click-to-dial')
}, {
  value: 'Cuba',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Cuba', 'click-to-dial')
}, {
  value: 'EET',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('EET', 'click-to-dial')
}, {
  value: 'EST',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('EST', 'click-to-dial')
}, {
  value: 'EST5EDT',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('EST5EDT', 'click-to-dial')
}, {
  value: 'Egypt',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Egypt', 'click-to-dial')
}, {
  value: 'Eire',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Eire', 'click-to-dial')
}, {
  value: 'Etc/GMT',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Etc/GMT', 'click-to-dial')
}, {
  value: 'Etc/GMT+0',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Etc/GMT+0', 'click-to-dial')
}, {
  value: 'Etc/GMT+1',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Etc/GMT+1', 'click-to-dial')
}, {
  value: 'Etc/GMT+10',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Etc/GMT+10', 'click-to-dial')
}, {
  value: 'Etc/GMT+11',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Etc/GMT+11', 'click-to-dial')
}, {
  value: 'Etc/GMT+12',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Etc/GMT+12', 'click-to-dial')
}, {
  value: 'Etc/GMT+2',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Etc/GMT+2', 'click-to-dial')
}, {
  value: 'Etc/GMT+3',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Etc/GMT+3', 'click-to-dial')
}, {
  value: 'Etc/GMT+4',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Etc/GMT+4', 'click-to-dial')
}, {
  value: 'Etc/GMT+5',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Etc/GMT+5', 'click-to-dial')
}, {
  value: 'Etc/GMT+6',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Etc/GMT+6', 'click-to-dial')
}, {
  value: 'Etc/GMT+7',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Etc/GMT+7', 'click-to-dial')
}, {
  value: 'Etc/GMT+8',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Etc/GMT+8', 'click-to-dial')
}, {
  value: 'Etc/GMT+9',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Etc/GMT+9', 'click-to-dial')
}, {
  value: 'Etc/GMT-0',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Etc/GMT-0', 'click-to-dial')
}, {
  value: 'Etc/GMT-1',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Etc/GMT-1', 'click-to-dial')
}, {
  value: 'Etc/GMT-10',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Etc/GMT-10', 'click-to-dial')
}, {
  value: 'Etc/GMT-11',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Etc/GMT-11', 'click-to-dial')
}, {
  value: 'Etc/GMT-12',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Etc/GMT-12', 'click-to-dial')
}, {
  value: 'Etc/GMT-13',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Etc/GMT-13', 'click-to-dial')
}, {
  value: 'Etc/GMT-14',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Etc/GMT-14', 'click-to-dial')
}, {
  value: 'Etc/GMT-2',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Etc/GMT-2', 'click-to-dial')
}, {
  value: 'Etc/GMT-3',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Etc/GMT-3', 'click-to-dial')
}, {
  value: 'Etc/GMT-4',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Etc/GMT-4', 'click-to-dial')
}, {
  value: 'Etc/GMT-5',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Etc/GMT-5', 'click-to-dial')
}, {
  value: 'Etc/GMT-6',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Etc/GMT-6', 'click-to-dial')
}, {
  value: 'Etc/GMT-7',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Etc/GMT-7', 'click-to-dial')
}, {
  value: 'Etc/GMT-8',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Etc/GMT-8', 'click-to-dial')
}, {
  value: 'Etc/GMT-9',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Etc/GMT-9', 'click-to-dial')
}, {
  value: 'Etc/GMT0',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Etc/GMT0', 'click-to-dial')
}, {
  value: 'Etc/Greenwich',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Etc/Greenwich', 'click-to-dial')
}, {
  value: 'Etc/UCT',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Etc/UCT', 'click-to-dial')
}, {
  value: 'Etc/UTC',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Etc/UTC', 'click-to-dial')
}, {
  value: 'Etc/Universal',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Etc/Universal', 'click-to-dial')
}, {
  value: 'Etc/Zulu',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Etc/Zulu', 'click-to-dial')
}, {
  value: 'Europe/Amsterdam',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Amsterdam', 'click-to-dial')
}, {
  value: 'Europe/Andorra',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Andorra', 'click-to-dial')
}, {
  value: 'Europe/Astrakhan',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Astrakhan', 'click-to-dial')
}, {
  value: 'Europe/Athens',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Athens', 'click-to-dial')
}, {
  value: 'Europe/Belfast',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Belfast', 'click-to-dial')
}, {
  value: 'Europe/Belgrade',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Belgrade', 'click-to-dial')
}, {
  value: 'Europe/Berlin',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Berlin', 'click-to-dial')
}, {
  value: 'Europe/Bratislava',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Bratislava', 'click-to-dial')
}, {
  value: 'Europe/Brussels',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Brussels', 'click-to-dial')
}, {
  value: 'Europe/Bucharest',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Bucharest', 'click-to-dial')
}, {
  value: 'Europe/Budapest',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Budapest', 'click-to-dial')
}, {
  value: 'Europe/Busingen',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Busingen', 'click-to-dial')
}, {
  value: 'Europe/Chisinau',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Chisinau', 'click-to-dial')
}, {
  value: 'Europe/Copenhagen',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Copenhagen', 'click-to-dial')
}, {
  value: 'Europe/Dublin',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Dublin', 'click-to-dial')
}, {
  value: 'Europe/Gibraltar',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Gibraltar', 'click-to-dial')
}, {
  value: 'Europe/Guernsey',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Guernsey', 'click-to-dial')
}, {
  value: 'Europe/Helsinki',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Helsinki', 'click-to-dial')
}, {
  value: 'Europe/Isle_of_Man',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Isle_of_Man', 'click-to-dial')
}, {
  value: 'Europe/Istanbul',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Istanbul', 'click-to-dial')
}, {
  value: 'Europe/Jersey',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Jersey', 'click-to-dial')
}, {
  value: 'Europe/Kaliningrad',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Kaliningrad', 'click-to-dial')
}, {
  value: 'Europe/Kiev',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Kiev', 'click-to-dial')
}, {
  value: 'Europe/Kirov',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Kirov', 'click-to-dial')
}, {
  value: 'Europe/Lisbon',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Lisbon', 'click-to-dial')
}, {
  value: 'Europe/Ljubljana',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Ljubljana', 'click-to-dial')
}, {
  value: 'Europe/London',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/London', 'click-to-dial')
}, {
  value: 'Europe/Luxembourg',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Luxembourg', 'click-to-dial')
}, {
  value: 'Europe/Madrid',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Madrid', 'click-to-dial')
}, {
  value: 'Europe/Malta',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Malta', 'click-to-dial')
}, {
  value: 'Europe/Mariehamn',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Mariehamn', 'click-to-dial')
}, {
  value: 'Europe/Minsk',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Minsk', 'click-to-dial')
}, {
  value: 'Europe/Monaco',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Monaco', 'click-to-dial')
}, {
  value: 'Europe/Moscow',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Moscow', 'click-to-dial')
}, {
  value: 'Europe/Nicosia',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Nicosia', 'click-to-dial')
}, {
  value: 'Europe/Oslo',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Oslo', 'click-to-dial')
}, {
  value: 'Europe/Paris',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Paris', 'click-to-dial')
}, {
  value: 'Europe/Podgorica',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Podgorica', 'click-to-dial')
}, {
  value: 'Europe/Prague',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Prague', 'click-to-dial')
}, {
  value: 'Europe/Riga',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Riga', 'click-to-dial')
}, {
  value: 'Europe/Rome',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Rome', 'click-to-dial')
}, {
  value: 'Europe/Samara',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Samara', 'click-to-dial')
}, {
  value: 'Europe/San_Marino',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/San_Marino', 'click-to-dial')
}, {
  value: 'Europe/Sarajevo',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Sarajevo', 'click-to-dial')
}, {
  value: 'Europe/Saratov',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Saratov', 'click-to-dial')
}, {
  value: 'Europe/Simferopol',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Simferopol', 'click-to-dial')
}, {
  value: 'Europe/Skopje',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Skopje', 'click-to-dial')
}, {
  value: 'Europe/Sofia',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Sofia', 'click-to-dial')
}, {
  value: 'Europe/Stockholm',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Stockholm', 'click-to-dial')
}, {
  value: 'Europe/Tallinn',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Tallinn', 'click-to-dial')
}, {
  value: 'Europe/Tirane',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Tirane', 'click-to-dial')
}, {
  value: 'Europe/Tiraspol',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Tiraspol', 'click-to-dial')
}, {
  value: 'Europe/Ulyanovsk',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Ulyanovsk', 'click-to-dial')
}, {
  value: 'Europe/Uzhgorod',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Uzhgorod', 'click-to-dial')
}, {
  value: 'Europe/Vaduz',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Vaduz', 'click-to-dial')
}, {
  value: 'Europe/Vatican',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Vatican', 'click-to-dial')
}, {
  value: 'Europe/Vienna',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Vienna', 'click-to-dial')
}, {
  value: 'Europe/Vilnius',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Vilnius', 'click-to-dial')
}, {
  value: 'Europe/Volgograd',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Volgograd', 'click-to-dial')
}, {
  value: 'Europe/Warsaw',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Warsaw', 'click-to-dial')
}, {
  value: 'Europe/Zagreb',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Zagreb', 'click-to-dial')
}, {
  value: 'Europe/Zaporozhye',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Zaporozhye', 'click-to-dial')
}, {
  value: 'Europe/Zurich',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Zurich', 'click-to-dial')
}, {
  value: 'GB',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('GB', 'click-to-dial')
}, {
  value: 'GB-Eire',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('GB-Eire', 'click-to-dial')
}, {
  value: 'GMT',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('GMT', 'click-to-dial')
}, {
  value: 'GMT+0',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('GMT+0', 'click-to-dial')
}, {
  value: 'GMT-0',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('GMT-0', 'click-to-dial')
}, {
  value: 'GMT0',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('GMT0', 'click-to-dial')
}, {
  value: 'Greenwich',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Greenwich', 'click-to-dial')
}, {
  value: 'HST',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('HST', 'click-to-dial')
}, {
  value: 'Hongkong',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Hongkong', 'click-to-dial')
}, {
  value: 'Iceland',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Iceland', 'click-to-dial')
}, {
  value: 'Indian/Antananarivo',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Indian/Antananarivo', 'click-to-dial')
}, {
  value: 'Indian/Chagos',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Indian/Chagos', 'click-to-dial')
}, {
  value: 'Indian/Christmas',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Indian/Christmas', 'click-to-dial')
}, {
  value: 'Indian/Cocos',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Indian/Cocos', 'click-to-dial')
}, {
  value: 'Indian/Comoro',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Indian/Comoro', 'click-to-dial')
}, {
  value: 'Indian/Kerguelen',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Indian/Kerguelen', 'click-to-dial')
}, {
  value: 'Indian/Mahe',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Indian/Mahe', 'click-to-dial')
}, {
  value: 'Indian/Maldives',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Indian/Maldives', 'click-to-dial')
}, {
  value: 'Indian/Mauritius',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Indian/Mauritius', 'click-to-dial')
}, {
  value: 'Indian/Mayotte',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Indian/Mayotte', 'click-to-dial')
}, {
  value: 'Indian/Reunion',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Indian/Reunion', 'click-to-dial')
}, {
  value: 'Iran',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Iran', 'click-to-dial')
}, {
  value: 'Israel',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Israel', 'click-to-dial')
}, {
  value: 'Jamaica',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Jamaica', 'click-to-dial')
}, {
  value: 'Japan',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Japan', 'click-to-dial')
}, {
  value: 'Kwajalein',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Kwajalein', 'click-to-dial')
}, {
  value: 'Libya',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Libya', 'click-to-dial')
}, {
  value: 'MET',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('MET', 'click-to-dial')
}, {
  value: 'MST',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('MST', 'click-to-dial')
}, {
  value: 'MST7MDT',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('MST7MDT', 'click-to-dial')
}, {
  value: 'Mexico/BajaNorte',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Mexico/BajaNorte', 'click-to-dial')
}, {
  value: 'Mexico/BajaSur',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Mexico/BajaSur', 'click-to-dial')
}, {
  value: 'Mexico/General',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Mexico/General', 'click-to-dial')
}, {
  value: 'NZ',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('NZ', 'click-to-dial')
}, {
  value: 'NZ-CHAT',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('NZ-CHAT', 'click-to-dial')
}, {
  value: 'Navajo',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Navajo', 'click-to-dial')
}, {
  value: 'PRC',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('PRC', 'click-to-dial')
}, {
  value: 'PST8PDT',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('PST8PDT', 'click-to-dial')
}, {
  value: 'Pacific/Apia',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Apia', 'click-to-dial')
}, {
  value: 'Pacific/Auckland',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Auckland', 'click-to-dial')
}, {
  value: 'Pacific/Bougainville',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Bougainville', 'click-to-dial')
}, {
  value: 'Pacific/Chatham',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Chatham', 'click-to-dial')
}, {
  value: 'Pacific/Chuuk',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Chuuk', 'click-to-dial')
}, {
  value: 'Pacific/Easter',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Easter', 'click-to-dial')
}, {
  value: 'Pacific/Efate',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Efate', 'click-to-dial')
}, {
  value: 'Pacific/Enderbury',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Enderbury', 'click-to-dial')
}, {
  value: 'Pacific/Fakaofo',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Fakaofo', 'click-to-dial')
}, {
  value: 'Pacific/Fiji',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Fiji', 'click-to-dial')
}, {
  value: 'Pacific/Funafuti',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Funafuti', 'click-to-dial')
}, {
  value: 'Pacific/Galapagos',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Galapagos', 'click-to-dial')
}, {
  value: 'Pacific/Gambier',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Gambier', 'click-to-dial')
}, {
  value: 'Pacific/Guadalcanal',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Guadalcanal', 'click-to-dial')
}, {
  value: 'Pacific/Guam',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Guam', 'click-to-dial')
}, {
  value: 'Pacific/Honolulu',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Honolulu', 'click-to-dial')
}, {
  value: 'Pacific/Johnston',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Johnston', 'click-to-dial')
}, {
  value: 'Pacific/Kiritimati',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Kiritimati', 'click-to-dial')
}, {
  value: 'Pacific/Kosrae',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Kosrae', 'click-to-dial')
}, {
  value: 'Pacific/Kwajalein',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Kwajalein', 'click-to-dial')
}, {
  value: 'Pacific/Majuro',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Majuro', 'click-to-dial')
}, {
  value: 'Pacific/Marquesas',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Marquesas', 'click-to-dial')
}, {
  value: 'Pacific/Midway',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Midway', 'click-to-dial')
}, {
  value: 'Pacific/Nauru',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Nauru', 'click-to-dial')
}, {
  value: 'Pacific/Niue',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Niue', 'click-to-dial')
}, {
  value: 'Pacific/Norfolk',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Norfolk', 'click-to-dial')
}, {
  value: 'Pacific/Noumea',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Noumea', 'click-to-dial')
}, {
  value: 'Pacific/Pago_Pago',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Pago_Pago', 'click-to-dial')
}, {
  value: 'Pacific/Palau',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Palau', 'click-to-dial')
}, {
  value: 'Pacific/Pitcairn',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Pitcairn', 'click-to-dial')
}, {
  value: 'Pacific/Pohnpei',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Pohnpei', 'click-to-dial')
}, {
  value: 'Pacific/Ponape',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Ponape', 'click-to-dial')
}, {
  value: 'Pacific/Port_Moresby',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Port_Moresby', 'click-to-dial')
}, {
  value: 'Pacific/Rarotonga',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Rarotonga', 'click-to-dial')
}, {
  value: 'Pacific/Saipan',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Saipan', 'click-to-dial')
}, {
  value: 'Pacific/Samoa',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Samoa', 'click-to-dial')
}, {
  value: 'Pacific/Tahiti',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Tahiti', 'click-to-dial')
}, {
  value: 'Pacific/Tarawa',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Tarawa', 'click-to-dial')
}, {
  value: 'Pacific/Tongatapu',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Tongatapu', 'click-to-dial')
}, {
  value: 'Pacific/Truk',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Truk', 'click-to-dial')
}, {
  value: 'Pacific/Wake',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Wake', 'click-to-dial')
}, {
  value: 'Pacific/Wallis',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Wallis', 'click-to-dial')
}, {
  value: 'Pacific/Yap',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Yap', 'click-to-dial')
}, {
  value: 'Poland',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Poland', 'click-to-dial')
}, {
  value: 'Portugal',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Portugal', 'click-to-dial')
}, {
  value: 'ROC',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('ROC', 'click-to-dial')
}, {
  value: 'ROK',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('ROK', 'click-to-dial')
}, {
  value: 'Singapore',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Singapore', 'click-to-dial')
}, {
  value: 'Turkey',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Turkey', 'click-to-dial')
}, {
  value: 'UCT',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('UCT', 'click-to-dial')
}, {
  value: 'US/Alaska',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('US/Alaska', 'click-to-dial')
}, {
  value: 'US/Aleutian',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('US/Aleutian', 'click-to-dial')
}, {
  value: 'US/Arizona',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('US/Arizona', 'click-to-dial')
}, {
  value: 'US/Central',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('US/Central', 'click-to-dial')
}, {
  value: 'US/East-Indiana',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('US/East-Indiana', 'click-to-dial')
}, {
  value: 'US/Eastern',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('US/Eastern', 'click-to-dial')
}, {
  value: 'US/Hawaii',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('US/Hawaii', 'click-to-dial')
}, {
  value: 'US/Indiana-Starke',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('US/Indiana-Starke', 'click-to-dial')
}, {
  value: 'US/Michigan',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('US/Michigan', 'click-to-dial')
}, {
  value: 'US/Mountain',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('US/Mountain', 'click-to-dial')
}, {
  value: 'US/Pacific',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('US/Pacific', 'click-to-dial')
}, {
  value: 'US/Pacific-New',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('US/Pacific-New', 'click-to-dial')
}, {
  value: 'US/Samoa',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('US/Samoa', 'click-to-dial')
}, {
  value: 'UTC',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('UTC', 'click-to-dial')
}, {
  value: 'Universal',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Universal', 'click-to-dial')
}, {
  value: 'W-SU',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('W-SU', 'click-to-dial')
}, {
  value: 'WET',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('WET', 'click-to-dial')
}, {
  value: 'Zulu',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Zulu', 'click-to-dial')
}];
function Edit(props) {
  const {
    attributes,
    setAttributes
  } = props;
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
    sundayEnd
  } = attributes;
  const [filteredOptions, setFilteredOptions] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(timezones);
  function onInputChange(value) {
    setFilteredOptions(timezones.filter(timezone => timezone.label.toLowerCase().includes(value.toLowerCase())));
  }
  function onFontSizeChange(value) {
    setAttributes({
      timeZone: value
    });
  }
  const onSelectImage = image => {
    setAttributes({
      imageUrl: image.url
    });
  };
  const onChangeAlignment = newAlignment => {
    setAttributes({
      textAlignment: newAlignment
    });
  };
  const onChangeText = newText => {
    setAttributes({
      text: newText
    });
  };
  const advancedBtnInfo = newInfo => {
    setAttributes({
      info: newInfo
    });
  };
  const advancedBtnTitle = newTitle => {
    setAttributes({
      title: newTitle
    });
  };
  const advancedBtnOnlineBadge = newOnline => {
    setAttributes({
      online: newOnline
    });
  };
  const onIconTarget = onIconTargets => {
    setAttributes({
      iconTarget: onIconTargets
    });
  };
  const textClasses = classnames__WEBPACK_IMPORTED_MODULE_4___default()(`ctdButtons-align-${textAlignment}`);
  const basicBtn = classnames__WEBPACK_IMPORTED_MODULE_4___default()(`ctd-button-4 ctd-btn-bg`);
  const classes = classnames__WEBPACK_IMPORTED_MODULE_4___default()(`ctdButtons ctd-button-4 ctd-btn-bg`);
  const buttonSizeOptions = [{
    value: 'size-small',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Small', 'click-to-dial')
  }, {
    value: 'size-medium',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Medium', 'click-to-dial')
  }, {
    value: 'size-large',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Large', 'click-to-dial')
  }];
  const buttonTypeOptions = [{
    value: 'basic-button',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Basic Button', 'click-to-dial')
  }, {
    value: 'advance-button',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Advance Button', 'click-to-dial')
  }];
  const borderRadiusOptions = [{
    value: 'border-squared',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Border Squared', 'click-to-dial')
  }, {
    value: 'border-rounded',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Border Rounded', 'click-to-dial')
  }];
  const visibilityOn = [{
    value: '',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Everywhere', 'click-to-dial')
  }, {
    value: 'ctd-desktop-only',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Desktop only', 'click-to-dial')
  }, {
    value: 'ctd-tablet-only',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Tablets only', 'click-to-dial')
  }, {
    value: 'ctd-mobile-tablet-only',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Mobile and tablets', 'click-to-dial')
  }, {
    value: 'ctd-mobile-only',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Mobile only', 'click-to-dial')
  }];
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelBody, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Button Type', 'click-to-dial'),
    value: buttonType,
    options: buttonTypeOptions.map(_ref => {
      let {
        value,
        label
      } = _ref;
      return {
        value,
        label
      };
    }),
    onChange: newButton => {
      setAttributes({
        buttonType: newButton
      });
    }
  }))), buttonType === 'basic-button' ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Phone Number', 'click-to-dial'),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Number', 'click-to-dial'),
    value: numberInput,
    onChange: val => setAttributes({
      numberInput: val
    }),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Add your contact number.', 'click-to-dial')
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Button Style', 'click-to-dial'),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Button Text', 'click-to-dial'),
    value: text,
    onChange: val => setAttributes({
      text: val
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Button Size', 'click-to-dial'),
    value: buttonSize,
    options: buttonSizeOptions.map(_ref2 => {
      let {
        value,
        label
      } = _ref2;
      return {
        value,
        label
      };
    }),
    onChange: newSize => {
      setAttributes({
        buttonSize: newSize
      });
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Border Radius', 'click-to-dial'),
    value: borderRadius,
    options: borderRadiusOptions.map(_ref3 => {
      let {
        value,
        label
      } = _ref3;
      return {
        value,
        label
      };
    }),
    onChange: newSize => {
      setAttributes({
        borderRadius: newSize
      });
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Visibility on', 'click-to-dial'),
    value: visibility,
    options: visibilityOn.map(_ref4 => {
      let {
        value,
        label
      } = _ref4;
      return {
        value,
        label
      };
    }),
    onChange: newSize => {
      setAttributes({
        visibility: newSize
      });
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Icon', 'click-to-dial'),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Add Icon', 'click-to-dial'),
    checked: iconTarget,
    onChange: onIconTarget
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.BlockControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.AlignmentToolbar, {
    value: textAlignment,
    onChange: onChangeAlignment
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: `button-wrapper ctd-editor ${textClasses}`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("a", (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps)({
    className: `${basicBtn} ${buttonSize} ${borderRadius} ${visibility}`
  }), iconTarget && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", {
    className: "dashicons dashicons-phone"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText, {
    onChange: onChangeText,
    value: text,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('How can I help you?', 'click-to-dial'),
    tagName: "span",
    allowedFormats: []
  })))) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('General Settings', 'click-to-dial'),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Number', 'click-to-dial'),
    value: numberInput,
    onChange: val => setAttributes({
      numberInput: val
    }),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Add your contact number including country code eg: +880123456789', 'click-to-dial')
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.MediaUpload, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Agent Image', 'click-to-dial'),
    onSelect: onSelectImage,
    allowedTypes: ['image'],
    render: _ref5 => {
      let {
        open
      } = _ref5;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Button, {
        onClick: open,
        style: {
          marginBottom: '20px',
          fontSize: '16px'
        }
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", {
        style: {
          marginRight: '5px'
        },
        className: "dashicons dashicons-cloud-upload"
      }), ' ', "Agent photo");
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Agent Info', 'click-to-dial'),
    value: info,
    onChange: val => setAttributes({
      info: val
    }),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Write agent name & agent title', 'click-to-dial')
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Button Label', 'click-to-dial'),
    value: title,
    onChange: val => setAttributes({
      title: val
    }),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Add custom button label', 'click-to-dial')
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Online Badge Text', 'click-to-dial'),
    value: online,
    onChange: val => setAttributes({
      online: val
    }),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Add custom badget text when user in online.', 'click-to-dial')
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Offline Badge Text', 'click-to-dial'),
    value: offline,
    onChange: val => setAttributes({
      offline: val
    }),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Add custom badget text when user in offline.', 'click-to-dial')
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Chat Settings', 'click-to-dial'),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.ComboboxControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Timezone', 'click-to-dial'),
    value: timeZone,
    options: filteredOptions,
    onChange: onFontSizeChange,
    onInputChange: onInputChange,
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('When using the date and time from the user browser you can transform it to your current timezone (in case your user is in a different timezone)', 'click-to-dial')
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Monthday', 'click-to-dial'),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Start Time', 'click-to-dial'),
    value: mondayStart,
    onChange: val => setAttributes({
      mondayStart: val
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('00:00', 'click-to-dial')
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('End Time', 'click-to-dial'),
    value: mondayEnd,
    onChange: val => setAttributes({
      mondayEnd: val
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('24:00', 'click-to-dial')
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Tuesday', 'click-to-dial'),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Start Time', 'click-to-dial'),
    value: tuesdayStart,
    onChange: val => setAttributes({
      tuesdayStart: val
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('00:00', 'click-to-dial')
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('End Time', 'click-to-dial'),
    value: tuesdayEnd,
    onChange: val => setAttributes({
      tuesdayEnd: val
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('24:00', 'click-to-dial')
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Wednesday', 'click-to-dial'),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Start Time', 'click-to-dial'),
    value: wednesdayStart,
    onChange: val => setAttributes({
      wednesdayStart: val
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('00:00', 'click-to-dial')
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('End Time', 'click-to-dial'),
    value: wednesdayEnd,
    onChange: val => setAttributes({
      wednesdayEnd: val
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('24:00', 'click-to-dial')
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Thursday', 'click-to-dial'),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Start Time', 'click-to-dial'),
    value: thursdayStart,
    onChange: val => setAttributes({
      thursdayStart: val
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('00:00', 'click-to-dial')
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('End Time', 'click-to-dial'),
    value: thursdayEnd,
    onChange: val => setAttributes({
      thursdayEnd: val
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('24:00', 'click-to-dial')
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Friday', 'click-to-dial'),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Start Time', 'click-to-dial'),
    value: fridayStart,
    onChange: val => setAttributes({
      fridayStart: val
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('00:00', 'click-to-dial')
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('End Time', 'click-to-dial'),
    value: fridayEnd,
    onChange: val => setAttributes({
      fridayEnd: val
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('24:00', 'click-to-dial')
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Saturday', 'click-to-dial'),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Start Time', 'click-to-dial'),
    value: saturdayStart,
    onChange: val => setAttributes({
      saturdayStart: val
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('00:00', 'click-to-dial')
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('End Time', 'click-to-dial'),
    value: saturdayEnd,
    onChange: val => setAttributes({
      saturdayEnd: val
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('24:00', 'click-to-dial')
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Sunday', 'click-to-dial'),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Start Time', 'click-to-dial'),
    value: sundayStart,
    onChange: val => setAttributes({
      sundayStart: val
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('00:00', 'click-to-dial')
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('End Time', 'click-to-dial'),
    value: sundayEnd,
    onChange: val => setAttributes({
      sundayEnd: val
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('24:00', 'click-to-dial')
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Appearance settings', 'click-to-dial'),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Visibility on', 'click-to-dial'),
    value: visibility,
    options: visibilityOn.map(_ref6 => {
      let {
        value,
        label
      } = _ref6;
      return {
        value,
        label
      };
    }),
    onChange: newSize => {
      setAttributes({
        visibility: newSize
      });
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Size', 'click-to-dial'),
    value: buttonSize,
    options: buttonSizeOptions.map(_ref7 => {
      let {
        value,
        label
      } = _ref7;
      return {
        value,
        label
      };
    }),
    onChange: newSize => {
      setAttributes({
        buttonSize: newSize
      });
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Border Radius', 'click-to-dial'),
    value: borderRadius,
    options: borderRadiusOptions.map(_ref8 => {
      let {
        value,
        label
      } = _ref8;
      return {
        value,
        label
      };
    }),
    onChange: newSize => {
      setAttributes({
        borderRadius: newSize
      });
    }
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.BlockControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.AlignmentToolbar, {
    value: textAlignment,
    onChange: onChangeAlignment
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: `button-wrapper ctd-editor ${textClasses}`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("button", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps)({
    className: `avatar-active ${classes} ${buttonSize} ${borderRadius} ${visibility}`
  }), {
    "data-btnavailablety": `{ "monday":"${mondayStart}-${mondayEnd}", "tuesday":"${tuesdayStart}-${tuesdayEnd}", "wednesday":"${wednesdayStart}-${wednesdayEnd}", "thursday":"${thursdayStart}-${thursdayEnd}", "friday":"${fridayStart}-${fridayEnd}", "saturday":"${saturdayStart}-${saturdayEnd}", "sunday":"${sundayStart}-${sundayEnd}" }`,
    "data-timezone": timeZone
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("img", {
    src: imageUrl ? imageUrl : agentImage,
    alt: "agent"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "info-wrapper"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText, {
    onChange: advancedBtnInfo,
    value: info,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Robert / Sales Support', 'click-to-dial'),
    tagName: "p",
    allowedFormats: [],
    className: "info"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText, {
    onChange: advancedBtnTitle,
    value: title,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('How can I help you?', 'click-to-dial'),
    tagName: "p",
    allowedFormats: [],
    className: "title"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText, {
    onChange: advancedBtnOnlineBadge,
    value: online,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('I am online', 'click-to-dial'),
    tagName: "p",
    allowedFormats: [],
    className: "online"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText, {
    onChange: advancedBtnOnlineBadge,
    value: offline,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("I'm not available", 'click-to-dial'),
    tagName: "p",
    allowedFormats: [],
    className: "offline"
  }))))));
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../block.json */ "./block.json");





(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_4__.name, {
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ }),

/***/ "./src/save.js":
/*!*********************!*\
  !*** ./src/save.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ save; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);




const agentImage = __webpack_require__(/*! ./images/user.jpg */ "./src/images/user.jpg");
function save(_ref) {
  let {
    attributes
  } = _ref;
  const {
    buttonSize,
    borderRadius,
    buttonType,
    text,
    info,
    title,
    online,
    offline,
    textAlignment,
    visibility,
    border,
    iconTarget,
    imageUrl,
    numberInput,
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
    sundayEnd
  } = attributes;
  const textClasses = classnames__WEBPACK_IMPORTED_MODULE_3___default()(`ctdButtons-align-${textAlignment}`);
  const basicBtn = classnames__WEBPACK_IMPORTED_MODULE_3___default()(`ctd-button-4 ctd-btn-bg`);
  const classes = classnames__WEBPACK_IMPORTED_MODULE_3___default()(`ctdButtons ctd-button-4 ctd-btn-bg`);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, buttonType === 'basic-button' ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: `button-wrapper ${textClasses}`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("a", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps.save({
    className: `${basicBtn} ${buttonSize} ${borderRadius} ${visibility} ${border}`
  }), {
    href: `tel:${numberInput}`
  }), iconTarget && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", {
    className: "dashicons dashicons-phone"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
    tagName: "span",
    value: text
  }))) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: `button-wrapper ${textClasses}`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("button", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps.save({
    className: `${classes} ${buttonSize} ${borderRadius} ${visibility}`
  }), {
    "data-btnavailablety": `{ "monday":"${mondayStart}-${mondayEnd}", "tuesday":"${tuesdayStart}-${tuesdayEnd}", "wednesday":"${wednesdayStart}-${wednesdayEnd}", "thursday":"${thursdayStart}-${thursdayEnd}", "friday":"${fridayStart}-${fridayEnd}", "saturday":"${saturdayStart}-${saturdayEnd}", "sunday":"${sundayStart}-${sundayEnd}" }`,
    "data-timezone": timeZone
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("img", {
    src: imageUrl ? imageUrl : agentImage,
    alt: "agent"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "info-wrapper"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
    value: info,
    tagName: "p",
    className: "info"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
    value: title,
    tagName: "p",
    className: "title"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
    value: online,
    tagName: "p",
    className: "online"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
    value: offline,
    tagName: "p",
    className: "offline"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("a", {
    href: `tel:${numberInput}`
  }))));
}

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;
	var nativeCodeString = '[native code]';

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
					classes.push(arg.toString());
					continue;
				}

				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./src/editor.scss":
/*!*************************!*\
  !*** ./src/editor.scss ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/images/user.jpg":
/*!*****************************!*\
  !*** ./src/images/user.jpg ***!
  \*****************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "images/user.65223f50.jpg";

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _extends; }
/* harmony export */ });
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./block.json":
/*!********************!*\
  !*** ./block.json ***!
  \********************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"apiVersion":2,"name":"create-block/click-to-dial-button","title":"Click To Dial Button","category":"click-to-dial-block","icon":"phone","description":"Click to dial button block for Click to dial plugin.","textdomain":"click-to-dial","editorScript":"file:./build/index.js","editorStyle":"file:./build/index.css","style":"file:./build/style-index.css","supports":{"html":false,"color":{"background":true,"text":true,"gradients":true,"hover":true},"spacing":{},"typography":{}},"example":{"attributes":{"text":"How can I help you?","gradients":"red-to-blue","links":true}},"attributes":{"text":{"type":"string","default":"How can I help you?"},"info":{"type":"string","default":"Robert / Sales Support"},"title":{"type":"string","default":"How can I help you?"},"online":{"type":"string","default":"I am online"},"offline":{"type":"string","default":"I am offline"},"buttonType":{"type":"string","default":"basic-button"},"buttonSize":{"type":"string","default":"size-normal"},"borderRadius":{"type":"string","default":"border-radius-rounded"},"visibility":{"type":"string","default":""},"textAlignment":{"type":"string","default":"left"},"iconTarget":{"type":"boolean","default":false},"numberInput":{"type":"string","default":""},"imageUrl":{"type":"string","default":""},"timeZone":{"type":"string","default":""},"mondayStart":{"type":"string","default":"00:01"},"mondayEnd":{"type":"string","default":"23:59"},"tuesdayStart":{"type":"string","default":"00:01"},"tuesdayEnd":{"type":"string","default":"23:59"},"wednesdayStart":{"type":"string","default":"00:01"},"wednesdayEnd":{"type":"string","default":"23:59"},"thursdayStart":{"type":"string","default":"00:01"},"thursdayEnd":{"type":"string","default":"23:59"},"fridayStart":{"type":"string","default":"00:01"},"fridayEnd":{"type":"string","default":"23:59"},"saturdayStart":{"type":"string","default":"00:01"},"saturdayEnd":{"type":"string","default":"23:59"},"sundayStart":{"type":"string","default":"00:01"},"sundayEnd":{"type":"string","default":"05:00"}}}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0,
/******/ 			"style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkclick_to_dial_button"] = self["webpackChunkclick_to_dial_button"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["style-index"], function() { return __webpack_require__("./src/index.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map