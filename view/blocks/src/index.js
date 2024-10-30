import { registerBlockType } from '@wordpress/blocks';
import './style.scss';
import Edit from './edit';
import save from './save';
import metaData from '../block.json';

registerBlockType( metaData.name, {
	edit: Edit,
	save,
} );
