import { applyMeteor } from '../../services/utils';
import actions from './api/actions';
export default {
	version: 1,
	settings: {
		$noVersionPrefix: true,
	},
	name: 'personalAccessTokens',
	mixins: [applyMeteor()], // TODO remove
	actions,
};
