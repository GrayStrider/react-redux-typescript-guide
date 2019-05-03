import * as React from 'react';

import FCCounter from '../components/fc-counter.usage';
import FCSpreadAttributes from '../components/fc-spread-attributes.usage';
import ClassCounter from '../components/class-counter.usage';
import ClassCounterWithDefaultProps from '../components/class-counter-with-default-props.usage';
import UserListUsage from '../components/generic-list.usage';
import { FCCounterConnected } from '../_PLAYGROUND/fc-counter-connected';

export default () => {
  return (
    <section>
      <FCCounter />
      <FCSpreadAttributes />
      <ClassCounter />
      <ClassCounterWithDefaultProps />
      <UserListUsage />
      <FCCounterConnected label="Label test"/>
    </section>
  );
};
