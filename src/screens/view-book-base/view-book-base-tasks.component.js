import React from 'react';

import { Actions } from 'react-native-router-flux';

import {
  Container,
  Content,
  Text,
  Button,
  Footer, FooterTab, Icon,
  Picker
} from 'native-base';

const { Item } = Picker;

import {
  Image
} from 'react-native';

import styles from './view-book-base.styles';

import GoBack from '../../components/go-back/go-back.component';

export default class ViewBookBase extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
          selectedItem: undefined,
          selected1: 'key0',
          results: {
              items: []
          }
      }
  }
  onValueChange (value: string) {
      this.setState({
          selected1 : value
      });
  }
  render() {
    return (
      <Container>
        <Content>
          <Image
            style={styles.image}
            source={{ uri: 'https://cadernos-api.herokuapp.com/images/original/missing.jpg' }}
          />
          <Button style={
            {
              styles.myButton},
              position:'relative',
              top: '191px',
              left: '420px',
              right: '-420px',
              bottom: '-191px'

        }>
            <Text>Sair</Text>
          </Button>
        </Content>

        <Container>
            <Content>
                <Picker
                    supportedOrientations={['portrait','landscape']}
                    iosHeader="Select one"
                    mode="dropdown"
                    selectedValue={this.state.selected1}
                    onValueChange={this.onValueChange.bind(this)}>
                    <Item label="Categoria 1" value="key0" />
                    <Item label="Categoria 2" value="key1" />
                    <Item label="Categoria 3" value="key2" />
                    <Item label="Categoria 4" value="key3" />
               </Picker>
            </Content>
        </Container>
        <Footer >
          <FooterTab>
            <Button active vertical>
              <Icon name="md-checkbox" />
              <Text>Tarefas</Text>
            </Button>
            <Button vertical>
              <Icon name="md-people" />
              <Text>Colaboradores</Text>
            </Button>
            <Button vertical>
              <Icon active name="md-list" />
              <Text>Categorias</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
