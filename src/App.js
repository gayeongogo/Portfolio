import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import GlobalStyle from './GlobalStyle';

const Container = styled.div`
  width: 1024px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`
const Intro = styled.section`
  height: 100vh;
  background: #FFFFFF;
  color: #222831;
  font-family: 'Pretendard-SemiBold';
`
const Header = styled.header`
  display: flex;
  justify-content: center;
  padding-top: 50px;
  font-size: 25px;
  div {
    position: relative;
    &:first-child{
      margin-right: 20px;
    }
    &::after {
      content: "";
      position: absolute;
      left: 0px;
      bottom: -10px;
      height: 3px;
      width: 100%;
      background: #222831;
    }
  }
`
const Main = styled.main`
  flex: 1;
  display: flex;
  justify-content: space-between;
`
const TextArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  line-height: 370%;
  p {
    font-size: 45px;
  }
  span {
    font-size: 32px;
  }
  b {
    font-size: 55px;
  }
`
const ImageArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex: 1;
  img {
    width: 37%;
  }
`
const Title = styled.h1`
  font-size: 3.5rem;
  font-family: 'Pretendard-SemiBold';
  margin-bottom: 4rem;
`
const SubTitle = styled.h2`
  font-size: 45px;
  font-family: 'Pretendard-SemiBold';
  margin-bottom: 30px;
  text-align: center;
  margin-bottom: 4rem;
`
const AboutMe = styled.section`
  padding: 6rem 0;
`

const Values = styled.article`
  font-size: 24px;
  position: relative;
  display: flex;
  justify-content: center;
  ul{
    background: #343439;
    padding: 40px 50px 40px 60px;
    list-style: disc;
    border-radius: 1rem;
    margin-left: -7rem;
    li {
      margin-bottom: 15px;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
  div {
    position: absolute;
    bottom: 0;
    right: -2.5rem;
    img {
      width: 72%;
    }
  }
`
const Skill = styled.article`
  padding: 6rem 0;
  div {
    background: #343439;
    border-radius: 1rem;
    margin-bottom: 2rem;
    padding: 30px 0;
    &:last-child {
      margin-bottom: 0;
    }
  }
  h3 {
    font-family: 'Pretendard-Medium';
    font-size: 30px;
    text-align: center;
    margin-bottom: 2rem;
  }
  ul {
    width: 65%;
    margin: 0 auto;
    text-align: center;
    font-size: 18px;
    li {
      display: inline-block;
      border-radius: 7px;
      background: #EEEEEE;
      color: #222831;
      padding: 7px 20px;
      margin-bottom: 10px;
      margin-right: 10px;
      img{
        width: 20px;
        margin-right: 7px;
        vertical-align: top;
      }
    }
  }
`
const Certi = styled.article`
  div {
    font-family: 'Pretendard-Medium';
    width: 70%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #343439;
    border-radius: 1rem;
    margin-bottom: 1rem;
    padding: 20px 40px;
    b{
      font-size: 1.7rem;
    }
    p{
      color: #A1A1A1;
    }
  }
`
const Experience = styled.section`
  display: flex;
  justify-content: space-between;
  main {
    flex-basis: 73%;
  }
`
const Nav = styled.nav`
  position: sticky;
  top: 3rem;
  align-self: flex-start;
  height: 100vh;
  font-family: 'Pretendard-SemiBold';
`
const NavItem = styled.p`
  font-size: 3.5rem;
  cursor: pointer;
  color: #EEEEEE0D;
  transition: .3s;
  ${({ $active }) => $active && 
    'font-size: 3.8rem; transition: .3s; color: #EEEEEE;'
  };
`

const Career = styled.article`
  margin-bottom: 6rem;
  span {
    font-size: 1.1rem;
    display: inline-block;
    color: #A1A1A1;
    font-family: 'Pretendard-Medium';
    margin-bottom: 1.2rem;
  }
  h3 {
    font-size: 1.7rem;
    font-family: 'Pretendard-Medium';
    margin-bottom: 0.5rem;
  }
  h4 {
    font-size: 1.15rem;
    font-family: 'Pretendard-Medium';
    margin-bottom: 2rem;
  }
  ul {
    font-size: 1.1rem;
    color: #A1A1A1;
    list-style: disc;
    padding-left: 1rem;
    line-height: 230%;
  }
`
const CareerBox = styled.div`
  background: #343439;
  border-radius: 1rem;
  padding: 1.5rem 2rem;
`
const Tech = styled.div`
  display: flex;
  margin-top: 4.5rem;
  div{
    width: 4.6rem;
    height: 4.6rem;
    background: #222831;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 10px;
    padding: 7px 5px;
  img {
    width: 42px;
    margin: auto 0;
  }
  p {
    display: flex;
    font-size: 10px;
  }
  }
`
const Project = styled.article`
  padding-bottom: 7rem;
`
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
`
const Card = styled.div`
  background: #343439;
  border-radius: 1rem;
`
const CardImg = styled.div`
  width: 100%;
  aspect-ratio: 3 / 2;
  overflow: hidden;
  img{
    border-top-right-radius: 1rem;
    border-top-left-radius: 1rem;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
const CardInfo = styled.div`
  padding: 1rem 1.2rem;
  h3 {
    font-family: 'Pretendard-Medium';
    font-size: 1.4rem;
    margin-bottom: 5px;
  }
  span {
    display: inline-block;
    color: #A1A1A1;
    margin-bottom: 14px;
  }
  p {
    font-size: 1.1rem;
    margin-bottom: 17px;
    line-height: 130%;
  }
  ul {
    li {
      display: inline-block;
      background: green;
      border-radius: 7px;
      padding: 5px 9px;
      margin: 0 8px 8px 0;
    }
  }

`
const Thanks = styled.section`
  height: 100vh;
  background: #FFFFFF;
  color: #222831;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  h1 {
    font-family: 'Pretendard-Bold';
    font-size: 10rem;
    color: #27272A1A;
    margin-top: 10rem;
  }
  h2 {
    font-family: 'Pretendard-SemiBold';
    font-size: 1.5rem;
    line-height: 135%;
    margin: -1rem 0 5rem 0;
  }
`
const Contact = styled.div`
  margin-top: 0;
  display: flex;
  justify-content: center;
  text-align: center;
  a {
    img {
      width: 60px;
    }
  }
`
const Github = styled.div`
  margin-right: 2rem;
`
const Email = styled.div`
  position: relative;
  p {
    position: absolute;
    top: 50%;
    left: 4.7rem;
    transform:translate(0,-50%);
  }
`
const Footer = styled.footer`
  font-size: 14px;
  margin-bottom: 1.5rem;
  color: #C6C6C6;
`

function App() {
  const careerRef = useRef(null);
  const projectRef = useRef(null);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const careerArea = careerRef.current;
    const projectArea = projectRef.current;

    const observerOptions = {
      root: null, // 뷰포트 기준으로 감지
      rootMargin: '0px',
      threshold: 0.3, // 섹션의 30%가 보이면 활성화
    }
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      })
    }, observerOptions)

    if (careerArea) observer.observe(careerArea);
    if (projectArea) observer.observe(projectArea);

    return () => {
      observer.unobserve(careerArea);
      observer.unobserve(projectArea);
    };
  }, [])

  const handleNavClick = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView();
    }
  };


  return (
    <div>
      <GlobalStyle/>
      <Intro>
        <Container>
          <Header>
            <div>github</div>
            <div>velog</div>
          </Header>
          <Main>
            <TextArea>
              <p><span>안녕하세요.</span>
              <br/>매일의 작은 성공을 실천하며,
              <br/>포기하지 않는 <span>프론트엔드 개발자</span>
              <br/><b>고가연입니다.</b></p>
            </TextArea>
            <ImageArea>
              <img src={`${process.env.PUBLIC_URL}/images/mainphoto.png`} alt='가연'/>
            </ImageArea>
          </Main>
        </Container>
      </Intro>
      <AboutMe>
        <Container>
          <Title>About Me</Title>
          <Values>
            <ul>
              <li>개발 과정에서 항상 사용자의 입장을 생각해요.</li>
              <li>꾸준한 기록으로 성장의 발판을 만들어요.</li>
              <li>빠른 적응력과 흡수력으로 <br/>배움과 도전을 두려워하지 않아요.</li>
              <li>React, Javascript 그리고 UX Design을 <br/>지속적으로 공부합니다.</li>
            </ul>
            <div>
              <img src={`${process.env.PUBLIC_URL}/images/mimoticon.png`} alt='미모티콘'/>
            </div>
          </Values>
          <Skill>
            <SubTitle>⚙️ Skill & Tools</SubTitle>
            <div>
              <h3>많이 해봤어요</h3>
              <ul>
                <li><img src={`${process.env.PUBLIC_URL}/images/react.svg`} alt='React.js'/>React.js</li>
                <li><img src={`${process.env.PUBLIC_URL}/images/javascript.svg`} alt=''/>Javascript&#40;ES6+&#41;</li>
                <li><img src={`${process.env.PUBLIC_URL}/images/file-type-html.svg`} alt='HTML5'/>HTML5</li>
                <li><img src={`${process.env.PUBLIC_URL}/images/file-type-css.svg`} alt='CSS3'/>CSS3</li>
                <li><img src={`${process.env.PUBLIC_URL}/images/file-type-styled.svg`} alt='styled-components'/>styled-components</li>
                <li><img src={`${process.env.PUBLIC_URL}/images/tailwind-css.svg`} alt='Tailwind CSS'/>Tailwind CSS</li>
                <li><img src={`${process.env.PUBLIC_URL}/images/markdown.svg`} alt='Markdown'/>Markdown</li>
                <li><img src={`${process.env.PUBLIC_URL}/images/github.svg`} alt='Github'/>Github</li>
                <li><img src={`${process.env.PUBLIC_URL}/images/figma.svg`} alt='Figma'/>Figma</li>
                <li><img src={`${process.env.PUBLIC_URL}/images/adobe-photoshop.svg`} alt='Photoshop'/>Photoshop</li>
              </ul>
            </div>
            <div>
              <h3>해본 적 있어요</h3>
              <ul>
                <li><img src={`${process.env.PUBLIC_URL}/images/react.svg`} alt='React Native'/>React Native</li>
                <li><img src={`${process.env.PUBLIC_URL}/images/jquery-plain.svg`} alt='Jquery'/>Jquery</li>
                <li><img src={`${process.env.PUBLIC_URL}/images/typescript.svg`} alt='Typescript'/>Typescript</li>
                <li><img src={`${process.env.PUBLIC_URL}/images/bootstrap.svg`} alt='Bootstrap'/>Bootstrap</li>
                <li><img src={`${process.env.PUBLIC_URL}/images/file-type-firebase.svg`} alt='Firebase'/>Firebase</li>
              </ul>
            </div>
          </Skill>
          <Certi>
            <SubTitle>🏅 Certifications</SubTitle>
            <div>
              <b>정보처리기사</b>
              <p>과학기술정보통신부, 2024년 9월 취득</p>
            </div>
            <div>
              <b>GTQ&#40;그래픽기술자격&#41; 1급</b>
              <p>한국생산성본부, 2022년 3월 취득</p>
            </div>
            <div>
              <b>컴퓨터활용능력 2급</b>
              <p>대한상공회의소, 2022년 2월 취득</p>
            </div>
          </Certi>
        </Container>
      </AboutMe>
      
      <Container>
        <Experience>
          <Nav>
            <NavItem 
              $active={activeSection === 'career'}
              onClick={() => handleNavClick(careerRef)}
            >
              Career
            </NavItem>
            <NavItem 
              $active={activeSection === 'project'}
              onClick={() => handleNavClick(projectRef)}
            >
              Project
            </NavItem>
          </Nav>
          <main>
            <Career id="career" ref={careerRef}>
              <CareerBox>
                <span>2023.07 &#126; 2024.01</span>
                <h3>(주)디로그</h3>
                <h4>디자인, 퍼블리싱, 프론트엔드 개발 담당</h4>
                <ul>
                  <li>Figma를 이용한 디자인 작업</li>
                  <li>HTML, CSS를 활용해 웹 표준 및 웹 접근성을 고려한 퍼블리싱 작업</li>
                  <li>법무법인 웹사이트 리뉴얼&#40;리디자인 및 반응형 페이지&#41;</li>
                  <li>React를 사용한 에너지 중개 사이트 개발 참여</li>
                  <li>React Native를 사용한 북마크 앱 디자인 및 개발 참여</li>
                  <li>제안서 및 산출물 디자인 요소 작업</li>
                </ul>
                <Tech>
                  <div>
                    <img src={`${process.env.PUBLIC_URL}/images/react.svg`} alt='React.js'/>
                    <p>React.js</p>
                  </div>
                  <div>
                    <img src={`${process.env.PUBLIC_URL}/images/tailwind-css.svg`} alt='React.js'/>
                    <p>Tailwind</p>
                  </div>
                  <div>
                    <img src={`${process.env.PUBLIC_URL}/images/figma.svg`} alt='React.js'/>
                    <p>Figma</p>
                  </div>
                  <div>
                    <img src={`${process.env.PUBLIC_URL}/images/react.svg`} alt='React.js'/>
                    <p>React Native</p>
                  </div>
                </Tech>
              </CareerBox>
            </Career>
            <Project id="project" ref={projectRef}>
              <Cards>
                <Card>
                  <CardImg>
                    <img src={`${process.env.PUBLIC_URL}/images/imsi.jpg`} alt='임'/>
                  </CardImg>
                  <CardInfo>
                    <h3>컵일기</h3>
                    <span>2024.06 &#126; 2024.07</span>
                    <p>그날의 일기를 다녀온 카페에 대한 평가와 함께 기록할 수 있는 사이트 입니다.</p>
                    <ul>
                      <li>개인</li>
                      <li>React</li>
                      <li>styled-components</li>
                      <li>Firebase</li>
                    </ul>
                  </CardInfo>
                </Card>
                <Card>
                  <CardImg>
                    <img src={`${process.env.PUBLIC_URL}/images/imsi.jpg`} alt='임'/>
                  </CardImg>
                  <CardInfo>
                    <h3>매거진 메이커</h3>
                    <span>2024.06 &#126; 2024.07</span>
                    <p>SNS용 매거진을 쉽고 빠르게 제작할 수 있는 사이트 입니다.</p>
                    <ul>
                      <li>개인</li>
                      <li>HTML</li>
                      <li>styled-components</li>
                      <li>Javascript</li>
                    </ul>
                  </CardInfo>
                </Card>
                <Card>
                  <CardImg>
                    <img src={`${process.env.PUBLIC_URL}/images/imsi.jpg`} alt='임'/>
                  </CardImg>
                  <CardInfo>
                    <h3>법무법인 웹사이트 리뉴얼</h3>
                    <span>2024.06 &#126; 2024.07</span>
                    <p>기존 사이트를 리디자인하고 반응형 페이지로 개선하는 프로젝트에 참여했습니다.</p>
                    <ul>
                      <li>팀</li>
                      <li>외주</li>
                      <li>React</li>
                      <li>Tailwind CSS</li>
                      <li>반응형</li>
                    </ul>
                  </CardInfo>
                </Card>
                <Card>
                  <CardImg>
                    <img src={`${process.env.PUBLIC_URL}/images/imsi.jpg`} alt='임'/>
                  </CardImg>
                  <CardInfo>
                    <h3>북마크 안드로이드 앱</h3>
                    <span>2024.06 &#126; 2024.07</span>
                    <p>관심있는 링크를 저장하고 분류별로 모아 관리할 수 있는 북마크 앱 개발에 참여했습니다.</p>
                    <ul>
                      <li>팀</li>
                      <li>React Native</li>
                      <li>Tailwind CSS</li>
                    </ul>
                  </CardInfo>
                </Card>
                <Card>
                  <CardImg>
                    <img src={`${process.env.PUBLIC_URL}/images/imsi.jpg`} alt='임'/>
                  </CardImg>
                  <CardInfo>
                    <h3>에너지 거래 중개 사이트</h3>
                    <span>2024.06 &#126; 2024.07</span>
                    <p>정부 공동투자형 개발 사업으로 진행된 에너지 거래 중개 사이트 개발에 참여했습니다.</p>
                    <ul>
                      <li>팀</li>
                      <li>React</li>
                      <li>Tailwind CSS</li>
                    </ul>
                  </CardInfo>
                </Card>
                <Card>
                  <CardImg>
                    <img src={`${process.env.PUBLIC_URL}/images/imsi.jpg`} alt='임'/>
                  </CardImg>
                  <CardInfo>
                    <h3>개인 포트폴리오 사이트</h3>
                    <span>2024.06 &#126; 2024.07</span>
                    <p>다양한 프로젝트와 경험을 담아낸 개인 포트폴리오 사이트 입니다.</p>
                    <ul>
                      <li>개인</li>
                      <li>React</li>
                      <li>styled-components</li>
                    </ul>
                  </CardInfo>
                </Card>
              </Cards>
            </Project>
          </main>
        </Experience>
      </Container>
      <Thanks>
        <div>
          <h1>Thank You</h1>
          <h2>저와 함께 작업하고 싶거나, 더 많은 정보를 원하신다면 언제든지 연락주세요.
          <br/>끝까지 봐주셔서 감사합니다.</h2>
          <Contact>
            <Github>
              <a href="https://github.com">
                <img src={`${process.env.PUBLIC_URL}/images/contact-github.png`} alt="github"/>
              </a>
            </Github>
            <Email>
              <a href="/">
                <img src={`${process.env.PUBLIC_URL}/images/contact-mail.png`} alt="email" />
              </a>
              <p>rkdus1357@gmail.com</p>
            </Email>
          </Contact>
        </div>
        <Footer>
          <p>
            본 페이지는 상업적 목적이 아닌 개인 포트폴리오용으로 만들어진 사이트입니다.
            <br/>Copyright 2024. gogayeon all rights reserved.
          </p>
        </Footer>
      </Thanks>
    </div>
  );
}

export default App;
