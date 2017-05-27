import React, { Component, PropTypes } from 'react';

import {
  Container,
  Content,
  Button,
  Text,
  View
} from 'native-base';

import { Actions } from 'react-native-router-flux';
import styles from './my-tasks.styles';
import SharedFooter from '../../components/header/header.component';
import ListMyTasks from '../../components/my-tasks-list/my-tasks-list.component';

export default class HomeScreen extends Component {

  render() {
    return (

      <Container style={{ flex: 1 }}>
        <View>
          <SharedFooter
            activeTab='MyTasks'
            isVisitor = {false}
          />
        </View>
        <View style={{ flex: 8 }}>
          <ListMyTasks
          />
        </View>






      </Container>
    );
  }
}