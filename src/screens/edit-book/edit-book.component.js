import React, { Component } from 'react';

import { Actions } from 'react-native-router-flux';


import {
  Container,
  Content,
  Text,
  Button,
  Input,
  Item,
  Spinner
} from 'native-base';

import styles from './edit-book.styles';

import GoBack from '../../components/go-back/go-back.component';

import ListErrors from '../../components/list-errors/list-errors.component'
export default class EditBook extends Component {

  constructor(props) {
    super(props);

    this.state = {
      title: '',
    }
  }

  componentDidMount() {
    this.setState({ title: this.props.book.title });
    this.props.clearErrors();
  }

  handleFieldOnChange(field, value) {
    this.setState({
      [field]: value
    });
  }


  getBookData() {
    const book = {
      ...this.props.book,
      title: this.state.title
    }

    return book;
  }

  render() {
    return (
      <Container style={styles.container}>
        <GoBack />

        <Item regular style={styles.formItem}>
          <Input
            placeholder='Nome do caderno'
            returnKeyType='next'
            onChangeText={(text) => this.handleFieldOnChange('title', text)}
            value={this.state.title}
          />
        </Item>

        <ListErrors errors={this.props.book.errors.title} />

        <Content>
          <Text>{'Sending data:'+this.props.book.sendingData}</Text>
          <Text>id do usuário: {this.props.book.userId}</Text>
          <Text>id do livro: {this.props.book.id}</Text>
          <Text>editado: {this.props.book.edited}</Text>
        </Content>

        <Content>
          {
            this.props.book.sendingData ?
            <Spinner />
            :
          <Button block bordered warning
            onPress={() => this.props.editBook(this.getBookData())}
          >
            <Text>Confirmar</Text>
          </Button>
          }
        </Content>
      </Container>
    );
  }
}