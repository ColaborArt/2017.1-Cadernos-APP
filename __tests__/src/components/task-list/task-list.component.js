import 'react-native';
import React from 'react';

import { shallow } from 'enzyme';
import { expect } from 'chai';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

import TaskListComponent from '../../../../src/components/task-list/task-list.component';

import {
  List,
  ListItem,
  Spinner,
  Button,
  Text
} from 'native-base';

describe("TaskListComponent Component", () => {
  it("display a createTask Button when is a logged user", () => {

    const book = {
      id: 1,
      userId: 1,
      title: 'abc'
    }
    const user = {
      id: 1
    }

    const wrapper = shallow(
      <TaskListComponent
        tasks={[]}
        isVisitor={false}
        user={user}
        book={book}
        //onBookSelected={() => {}}
      />
    );

    expect(
      wrapper.find(Button).length
    ).to.equal(1);
  });
  it("won't display createTask Button when is visitor", () => {

    const book = {
      id: 1,
      userId: 1,
      title: 'abc'
    }
    const user = {
      id: 1
    }

    const wrapper = shallow(
      <TaskListComponent
        tasks={[]}
        isVisitor={true}
        user={user}
        book={book}
      />
    );

    expect(
      wrapper.find(Button).length
    ).to.equal(0);
  });
});