import { connect } from 'react-redux';

import RunList from '../components/runs-list/';

const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(RunList);