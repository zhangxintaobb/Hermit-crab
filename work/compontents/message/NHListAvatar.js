import React, { Component } from "react";
import { StyleSheet } from 'react-native'
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  List,
  ListItem,
  Text,
  Thumbnail,
  Left,
  Right,
  Body
} from "native-base";

const pratik = require("../../assets/zxt/Login/person.png");
const sanket = require("../../assets/zxt/Login/person.png");
const megha = require("../../assets/zxt/Login/person.png");
const atul = require("../../assets/zxt/Login/person.png");
const saurabh = require("../../assets/zxt/Login/person.png");
const varun = require("../../assets/zxt/Login/person.png");
const datas = [
  {
    img: pratik,
    text: "Kumar Pratik",
    note: "Its time to build a difference . .",
    time: "3:43 pm"
  },
  {
    img: sanket,
    text: "Kumar Sanket",
    note: "One needs courage to be happy and smiling all time . . ",
    time: "1:12 pm"
  },
  {
    img: megha,
    text: "Megha",
    note: "Live a life style that matchs your vision",
    time: "10:03 am"
  },
  {
    img: atul,
    text: "Atul Ranjan",
    note: "Failure is temporary, giving up makes it permanent",
    time: "5:47 am"
  },
  {
    img: saurabh,
    text: "Saurabh Sahu",
    note: "The biggest risk is a missed opportunity !!",
    time: "11:11 pm"
  },
  {
    img: varun,
    text: "Varun Sahu",
    note: "Wish I had a Time machine . .",
    time: "8:54 pm"
  }
];

class NHListAvatar extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Header style={{width:'100%',justifyContent:'center',alignItems:'center',flexDirection:'row'}} >
          <Body style={{width:'100%',justifyContent:'center',alignItems:'center'}}>
            <Title>消息列表</Title>
          </Body>
          {/* <Right /> */}
        </Header>

        <Content>
          <List>
            {datas.map((data, i) => (
              <ListItem avatar>
                <Left>
                  <Thumbnail small source={data.img} />
                </Left>
                <Body>
                  <Text>{data.text}</Text>
                  <Text numberOfLines={1} note>
                    {data.note}
                  </Text>
                </Body>
                <Right>
                  <Text note>{data.time}</Text>
                </Right>
              </ListItem>
            ))}
          </List>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
  },
});

export default NHListAvatar;