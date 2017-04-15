import React, { Component } from 'react';

import {
  Container,
  Content,
  Button,
  Text,
  View,
  H1,
  Form,
  Item,
  Input,
  Label
} from "native-base";

import { StyleSheet } from 'react-native';

import { styles } from './sign-in.style';

export class SignInComponent extends Component {
  render() {
    return (
      <Container style={styles.mainWrapper}>

        <View style={styles.tittleWrapper}>
          <H1 style={StyleSheet.flatten([styles.text, styles.titleText])}>ENTRAR</H1>
          <Text style={StyleSheet.flatten([styles.text, styles.subTitleText])}>
            Feliz por te ver mais uma vez aqui
          </Text>
        </View>

        <View style={styles.formWrapper}>
          <Content>
            <Form>

              <Item floatingLabel>
                <Label style={styles.label}>Seu Email</Label>
                <Input />
              </Item>

              <Item floatingLabel last>
                <Label style={styles.label}>Senha</Label>
                <Input secureTextEntry/>
              </Item>

            </Form>

            <Button warning full rounded style={styles.button}>
              <Text>CRIAR CONTA</Text>
            </Button>
          </Content>
        </View>

      </Container>
    );
  }
}
