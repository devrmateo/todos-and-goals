import React from 'react';
import {connect} from 'react-redux';
import {
  handleAddGoal,
  handleDeleteGoal
} from '../actions/goals';
import List from './list';

class Goals extends React.Component {
  addItem = (e) => {
    e.preventDefault();

    this.props.dispatch(handleAddGoal(
      this.input.value, () => this.input.value = ''
    ));
  }

  removeItem = (goal) => {
    this.props.dispatch(handleDeleteGoal(goal));
  }

  render() {
    const {goals} = this.props;

    return (
      <div>
        <h1>Goals</h1>
        <input
          type="text"
          placeholder="Add Goal"
          ref={(input) => this.input = input}
        />
        <button
          onClick={this.addItem}
        >Add Goal
        </button>
        <List items={goals} removeItem={this.removeItem}/>
      </div>
    )
  }
}

export default connect((state) => ({
  goals: state.goals
}))(Goals);