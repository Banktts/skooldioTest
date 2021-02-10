
import styled from 'styled-components'
import { Button } from './component/CustomButton'
import axios from "axios";
import React, { useState, useEffect } from 'react';

const APP = styled.div`
  width: 476px;
  height: 534px;
  padding: 10px 17px 0px 24px;
  margin:auto;
`
const RectangleCopy = styled.div`
  width: 442px;
  height: 493px;
  margin: 0px 16px 0px 18px;
  padding: 0px 0px 0px 20px;
  border-radius: 5px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.3);
  background-color: var(--white-0);
`
const ImgCover = styled.img`
  margin-left:22px;
  margin-right:20px;
  width:80px;
  height:80px;

`
const Content = styled.div`
  display:flex;
  flex-direction:column;
  text-align: ${props => props.align ? props.align : "left"};
`
const Headers = styled.div`
  max-height:126px;
  padding-top:20px;
  padding-bottom:20px;
  display: flex;
`
const Row = styled.div`
  margin-top:5px;
  width: 500px;
  margin-bottom:5px;
  max-height: 29px;
  display:flex;
  flex-direction:row;
`
const RowR = styled(Row)`
  margin-bottom:${props => props.marginB};
  justify-content:space-between;
  max-width: 420px;
`
export const H1 = styled.h1`
  width: 335.4px;
  height: 16px;
  font-family: Prompt;
  font-size: 24px;
  margin: 0px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.67;
  letter-spacing: normal;
  text-align: left;
  color: #ff5a5a;
`
export const H2 = styled.h2`
  width: 203px;
  height: 16px;
  margin-top: 5px;
  font-family: Prompt;
  font-size: 20px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.8;
  letter-spacing: normal;
  text-align: left;
  color: #9b9b9b;
`
export const H3 = styled.h3`
  height: 21px;
  margin-top:3px;
  font-family: Prompt;
  font-size: 20px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.01;
  text-align: ${props => props.align};
  color: white;
`
export const H3St = styled(H3)`

  font-size: ${props => props.size};
  letter-spacing: normal;
  color: #5f5f5f;
`
export const H6 = styled.h6`
  height: 16px;
  margin: 0px;
  font-family: Prompt;
  font-size: ${props => props.size};
  font-weight: ${props => props.bold ? "600" : "300"};
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  text-align: ${props => props.align};
  color: ${props => props.red ? "#ff5a5a" : "#9b9b9b"};
  
`
const Divided = styled.hr`
  width: 420px;
  background: #d8d8d8;
  border: solid 1px #d8d8d8;
`
const Oval = styled.button`
  width: 29px;
  height: 29px;
  margin-left:4px;
  margin-right:4px;
  border-radius: 50%;
  background-color: ${props => props.active ? "#2ecc71" : "#d8d8d8"};
`
function App() {

  const [img, setImg] = useState("");
  const [textDepartment, setTextDepartment] = useState("");
  const [textMajor, setTextMajor] = useState("");
  const [textUni, setTextUni] = useState("");
  const [rounds, setRounds] = useState([]);
  const [round, setRound] = useState(1);
  const [st, setSt] = useState("");
  const [year, setYear] = useState("");
  const [min, setMin] = useState("");
  const [avg, setAvg] = useState("");
  const [max, setMaxx] = useState("");
  const [likes, setLikes] = useState("");
  const listItems = rounds.map((e, i) => e > 1 ? <Oval onClick={() => roundClick(i)} active><H3 align="center">{i + 1}</H3></Oval> : <Oval disabled ><H3 align="center">{i + 1}</H3></Oval>);

  const roundClick = (i) => {
    setRound(i + 1)

  }

  useEffect(async () => {
    let tmpData = await axios.get('https://tcas-assets.skooldio.com/tmp/mock_tcaster_api.json')
    setImg(tmpData.data[0].logo)
    setTextDepartment(tmpData.data[0].name)
    setTextMajor(tmpData.data[0].faculty.name)
    setTextUni(tmpData.data[0].faculty.university.name)
    setRounds(tmpData.data[0].roundSeats)
    if (tmpData.data[0].score !== null) {
      setSt(tmpData.data[0].score.scoreType)
      setYear(tmpData.data[0].score.year)
      setMin(tmpData.data[0].score.min)
      setAvg(tmpData.data[0].score.avg)
      setMaxx(tmpData.data[0].score.max)
    }
    setLikes(tmpData.data[0].likes)

  }, [])

  return (
    <APP>
      <RectangleCopy>
        <Headers>
          <ImgCover src={img} />
          <Content>
            <H1>{textDepartment}</H1>
            <H2>{textMajor}</H2>
            <H6 size="14px">{textUni}</H6>
          </Content>
        </Headers>
        <Divided />
        <Content>
          <Row>
            <H3St>รอบที่เปิด</H3St>
            {listItems}
          </Row>
          <Row>
            <H6 red bold align="left" size="20px">
              รอบที่ {round} : {st}
            </H6>
            <Button text={"แก้ไขคะแนน"} />
          </Row>
          <RowR marginB="55px" >
            <div />
            <Content align="right">
              <H6 size="20px" >
                คะแนนของคุณคือ
          </H6>
              <br />
              <H3St size={"42px"}>23,453</H3St>
            </Content>
          </RowR>

          <RowR marginB="40px">
            <Content align="left">
              <H3St size={"24px"}>{min} </H3St>
              <H3St size={"12px"}>คะแนนต่ำสุด {year}</H3St>
            </Content>
            <Content align="center">
              <H3St size={"24px"}>{avg} </H3St>
              <H3St size={"12px"}>คะแนนเฉลี่ย {year}</H3St>
            </Content>
            <Content align="right">
              <H3St size={"24px"}>{max} </H3St>
              <H3St size={"12px"}>คะแนนสูงสุด {year}</H3St>
            </Content>
          </RowR>
          <Divided />
          <RowR marginB="10px">
          <H6  className="more" align="left" size="20px">
              ดูสัดส่วนคะแนน
            </H6>
          </RowR>
          <Divided />
          <RowR marginB="10px">
          <H6  align="left" size="15px">
              {likes} คนที่สนใจ
            </H6>
          </RowR>
        </Content>
      </RectangleCopy>
    </APP>
  );
}

export default App;
