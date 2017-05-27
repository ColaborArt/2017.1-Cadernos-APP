import React, { Component, PropTypes } from 'react';

import { Actions } from 'react-native-router-flux';

import {
  Container,
  Content,
  View,
  List,
  ListItem,
  Text,
  Button,
  Spinner,
  Card,
  CardItem,
  Thumbnail,
  Left,
  Icon
} from 'native-base';

import { Image } from 'react-native';

import styles from './my-tasks-list.styles';



export default class ListMyTasksComponent extends Component {



  renderMyTasksListItem(task) {
    return (
      <ListItem>

        <Card style={styles.bookCard}>
          <CardItem cardBody style={styles.bookCardItem}>
            <Image
              source={{ uri: 'https://i.ytimg.com/vi/HcGYElbP5BQ/maxresdefault.jpg' }}
              style={styles.bookCardImage}
            />
          </CardItem>

          <CardItem style={styles.bookCardItem1}>
            <Text style={styles.title}>{task.title}</Text>
            <Text style={styles.title}>{task.description}</Text>
          </CardItem>
        </Card>
      </ListItem>
    );
  }

  render() {

    const task = {
      title: 'oiii',
      description: 'Uma tarefa da pesada'
    }

    return (
      <Container style={styles.container}>
        <View style={styles.listView}>

          <Content>
            <List>
              {this.renderMyTasksListItem(task)}
            </List>
          </Content>

        </View>
      </Container>
    );
  }
}
