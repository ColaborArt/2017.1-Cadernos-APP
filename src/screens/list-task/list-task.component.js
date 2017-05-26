import React, { Component } from 'react';
import { Container, Content, Picker, List, ListItem, Text } from 'native-base';

const { Item } = Picker;

export default class ListaTarefas extends Component {
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
        );
    }
}
