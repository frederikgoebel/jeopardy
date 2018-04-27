import React from "react";
import { connect } from "react-redux";
import { fetchBoard } from '../actions/fetch'

class Loader extends React.Component {
  componentDidMount() {
    this.props.onLoad()
  }
  render() {
    const {error, loading} = this.props;

    if (error) {
      return <div className="overlay">Error! {error.message}</div>;
    } else if (loading) {
      return (<div className="overlay">Loading...</div>);
    }

    return null
  }
}

const mapStateToProps = state => {
  return ({
    loading: state.loading.isLoading,
    error: state.loading.error
  })
}

const mapDispatchToProps = dispatch => ({
  onLoad: () => {
    fetchBoard(dispatch)
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Loader)
