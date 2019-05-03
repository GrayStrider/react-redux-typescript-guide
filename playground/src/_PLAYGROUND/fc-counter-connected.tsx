import Types from 'MyTypes';
import { connect } from 'react-redux';
import { countersActions, countersSelectors } from '../features/counters';
import * as React from 'react';

type Props = {
  label: string;
  count: number;
  onIncrement: () => void;
};

const FCCounter: React.FC<Props> = props => {
  const { label, count, onIncrement } = props;

  const handleIncrement = () => {
    onIncrement();
  };

  return (
    <div>
      <span>
        {label}: {count}
      </span>
      <button type="button" onClick={handleIncrement}>
        {`Increment`}
      </button>
    </div>
  );
};

const mapStateToProps = (state: Types.RootState) => ({
  count: countersSelectors.getReduxCounter(state.counters),
});

const dispatchProps = {
  onIncrement: countersActions.increment,
};

export const FCCounterConnected = connect(
  mapStateToProps,
  dispatchProps
)(FCCounter);
