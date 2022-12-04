import { Button, Text, View } from "react-native";
import Card from "../UI/Card";

export default function List(props) {
  const DUMMY_LISTS = [
    {
      id: "board1",
      loc: "서울",
      title: "원딜러 구해요",
      nickName: "굿딜러",
      date: "2022-12-01",
      viewCount: 34,
      comentCount: 2,
    },
    {
      id: "board2",
      loc: "서울",
      title: "서포터 구해요",
      nickName: "굿도구",
      date: "2022-12-01",
      viewCount: 55,
      comentCount: 2,
    },
    {
      id: "board3",
      loc: "울산",
      title: "미드 구해요",
      nickName: "굿미드",
      date: "2022-12-01",
      viewCount: 22,
      comentCount: 2,
    },
  ];
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      {DUMMY_LISTS.map((list) => (
        <Card
          key={list.id}
          title={list.title}
          loc={list.loc}
          date={list.date}
          viewCount={list.viewCount}
          commentCount={list.comentCount}
        />
      ))}
      <Button title="Go To Pofile" onPress={() => this.props.navigation.naviate()}></Button>
    </View>
  );
}
