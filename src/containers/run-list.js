import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getAllRuns } from '../actions/run-list';
import RunList from '../components/runs-list/';

class RunListContainer extends Component {
  componentDidMount() {
    this.props.getAllRuns();
  }

  render() {
    return (<RunList {...this.props} />);
  }
}

const mapStateToProps = ({ runs }) => ({
  runs
});

const mapDispatchToProps = (dispatch) => ({
  getAllRuns: () => {
    dispatch(getAllRuns())
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(RunListContainer);