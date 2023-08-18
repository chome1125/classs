import { useState } from "react";
import {
  Wrapper,
  Title,
  Wrapper1,
  Wrapper_s,
  Wrapper_s1,
  Box,
  ContentsBox,
  Label1,
  Label2,
  Btn,
  Uploadbox,
  Check,
  Text,
  Subject,
  SubjectWrapper,
  Contents,
  ContentWrapper,
  AddressWrapper,
  Address,
  AddBox,
  Box2,
  Youtube,
  YoutubeWrapper,
  YoutubeBox,
  Submit,
  MiniBox,
} from "../../../styles/emotion.js";

export default function New() {
  const [name, setName] = useState("");
  const [pw, setPw] = useState("");
  const [message1, setMessage1] = useState("");
  const [message2, setMessage2] = useState("");

  const names = (event) => {
    setName(event.target.value);
    if (event.target.value !== "") {
      setMessage1("");
    }
  };

  const pass = (event) => {
    setPw(event.target.value);
    if (event.target.value !== "") {
      setMessage2("");
    }
  };

  const check = () => {
    if (!name) {
      setMessage1("작성자가 비어있어요. 다시한번 확인해주세요 😊");
    }
    if (!pw) {
      setMessage2("비밀번호가 비어있어요. 다시한번 확인해주세요 😊");
    }
    if (!name && !pw) {
      alert("등록이 완료되었습니다.");
    }
  };

  return (
    <Wrapper>
      <Title>게시물 등록</Title>

      <Submit onClick={check}>게시물 등록</Submit>
      <Wrapper1>
        <Wrapper_s1>
          <Label1>작성자</Label1>

          <Box
            onChange={names}
            type="text"
            placeholder="이름을 적어주세요"
          ></Box>
          <MiniBox>{message1}</MiniBox>
        </Wrapper_s1>

        <Wrapper_s1>
          <Label1>비밀번호</Label1>
          <Box
            onChange={pass}
            type="password"
            placeholder="비밀번호를 작성해주세요"
          ></Box>
          <div className="box2">{message2}</div>
        </Wrapper_s1>
      </Wrapper1>

      <SubjectWrapper>
        <Subject>제목</Subject>
        <Box type="text" placeholder="제목을 작성해주세요"></Box>
      </SubjectWrapper>

      <ContentWrapper>
        <Contents>내용</Contents>
        <ContentsBox placeholder="내용을 작성해주세요"></ContentsBox>
      </ContentWrapper>

      <Address>주소</Address>
      <AddressWrapper>
        <AddBox placeholder="07250"></AddBox>
        <Btn>우편번호 검색</Btn>
      </AddressWrapper>
      <Box2></Box2>
      <Box2></Box2>

      <YoutubeWrapper>
        <Youtube>유튜브</Youtube>
        <YoutubeBox placeholder="링크를 복사해주세요."></YoutubeBox>
      </YoutubeWrapper>

      <Wrapper_s>
        <Label2>사진 첨부</Label2>
        <Uploadbox></Uploadbox>
        <Uploadbox></Uploadbox>
        <Uploadbox></Uploadbox>
      </Wrapper_s>

      <Wrapper_s>
        <Label2>메인 설정</Label2>
        <Check type="radio"></Check>
        <Text>유튜브</Text>
        <Check type="radio"></Check>
        <Text>사진</Text>
      </Wrapper_s>
    </Wrapper>
  );
}
