import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Text,
  Button,
  Icon,
  Left,
  Right,
  Body,
  Segment
} from "native-base";
import {  View } from 'react-native'
import OfficeCard from "./OfficeCard";
import StudyRoomCard from "./StudyRoomCard";
const srcard=[
  {date:'2020-02-20 23:59',money:'100',limit:'无门槛使用'},
  {date:'2020-02-20 23:59',money:'150',limit:'无门槛使用'},
  {date:'2020-02-20 23:59',money:'20',limit:'无门槛使用'},
  {date:'2020-02-20 23:59',money:'85',limit:'满1000可用'}
]
const ofcard=[
  {date:'2020-02-20 23:59',money:'10',limit:'无门槛使用'},
  {date:'2020-02-20 23:59',money:'12',limit:'无门槛使用'}
]
export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
          seg: 0
        };
      }
      render() {
        return (
          <Container>
            <Header hasTabs>
              <Left>
                <Button transparent onPress={() => this.props.navigation.goBack()}>
                  <Icon name="arrow-back" />
                </Button>
              </Left>
              <Body>
                <Title>红包/卡券</Title>
              </Body>
              
            </Header>
            <Segment>
              <Button
                first
                active={this.state.seg === 0 ? true : false}
                onPress={() => this.setState({ seg: 0 })}
              >
                <Text>自习室</Text>
              </Button>
              <Button
                active={this.state.seg === 1 ? true : false}
                onPress={() => this.setState({ seg: 1 })}
              >
                <Text>办公室</Text>
              </Button>
            </Segment>
            <Content padder style={{backgroundColor:'#ccc'}}>
            {this.state.seg === 0 && srcard.map((data, i) => (
                <StudyRoomCard carddata={data}/>
              ))}
              {this.state.seg === 1 && ofcard.map((data, i) => (
                <OfficeCard carddata={data}/>
              ))}
             
            </Content>
          </Container>
        );
      }
}
