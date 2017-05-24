import React from 'react';

import { Actions } from 'react-native-router-flux';

import {
  Container,
  Content,
  Text,
  Button,
  Input,
  Item
} from 'native-base';

import styles from './edit-task.styles';

import { GoBack } from '../../components';

export default class EditTask extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      title: this.props.task.title,
      content: this.props.task.content,
    }
  }

  handleFieldOnChange(field, value) {
    this.setState({
      [field]: value
    });
  }

  render() {
    return (
      <Container style={styles.container}>
        <GoBack />

        <Item regular style={styles.formItem}>
          <Input
            placeholder='Titulo da Atividade'
            returnKeyType='next'
            onChangeText={(text) => this.handleFieldOnChange('title', text)}
            value={this.state.title}
          />
        </Item>
        <Item regular style={styles.formItem}>
          <Input
            placeholder='Conteudo da Atividade'
            returnKeyType='next'
            onChangeText={(text) => this.handleFieldOnChange('content', text)}
            value={this.state.content}
          />
        </Item>
        <Content>
          <Button block bordered warning >
            <Text>Confirmar</Text>
          </Button>
        </Content>

      </Container>
    );
  }
}
