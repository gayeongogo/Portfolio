import React, { useState, useEffect, useRef } from 'react';
import Modal from './Modal';
import styled from 'styled-components';
import GlobalStyle from './GlobalStyle';
import { motion } from "framer-motion"
import { SiVelog } from "react-icons/si";
import { FaGithub } from "react-icons/fa6";

const IconGithub = styled(FaGithub)`
  margin-right: 7px;
`
const IconVelog = styled(SiVelog)`
  margin-right: 7px;
`
const Container = styled.div`
  width: 1024px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`
const Intro = styled(motion.section)`
  height: 100vh;
  background: #FFFFFF;
  color: #222831;
  font-family: 'Pretendard-SemiBold';
`
const Header = styled(motion.header)`
  display: flex;
  justify-content: center;
  padding-top: 50px;
  font-size: 25px;
  div {
    position: relative;
    transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
    transition-duration: 400ms;
    transition-property: color;
    &:first-child{
      margin-right: 1.5rem;
    }
    &:hover{
      color: #222222;
    }
    &:hover::after{
      width: 100%;
      left: 0%;
    }
    &::after {
      content: "";
      background: #222222;
      pointer-events: none;
      bottom: -10px;
      left: 50%;
      position: absolute;
      width: 0%;
      height: 3px;
      transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
      transition-duration: 400ms;
      transition-property: width, left;
    }
  }
`
const Main = styled.main`
  flex: 1;
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
`
const TextArea = styled(motion.div)`
  width: 55%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  p {
    margin-bottom: 8px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  div {
    font-size: 28px;
    &:last-child {
      font-size: 20px;
      margin-top: 2rem;
      line-height: 170%;
      font-family: 'Pretendard-Medium';
      span {
        font-size: 18px;
        padding: .15rem .3rem;
        background: #ECECEC;
        border-radius: .25rem;
        font-family: 'Pretendard-SemiBold';
      }
    }
  }
  span {
    font-size: 45px;
  }
  b {
    font-size: 60px;
  }
`
const ImageArea = styled(motion.div)`
  display: flex;
  justify-content: right;
  align-items: flex-end;
  flex: 1;
  img {
    width: 57%;
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
const AboutMe = styled(motion.section)`
  padding: 6rem 0;
`

const Values = styled(motion.article)`
  font-size: 1.5rem;
  position: relative;
  display: flex;
  justify-content: center;
  ul{
    width: 70%;
    background: #343439;
    padding: 40px 50px 40px 60px;
    list-style: disc;
    border-radius: 1rem;
    margin-left: -7rem;
    line-height: 140%;
    li {
      padding: 10px 0 10px 0;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
  div {
    position: absolute;
    bottom: 0;
    right: -5.5rem;
    img {
      width: 72%;
    }
  }
`
const B = styled.span`
  font-size: 1.4rem;
  padding: .15rem .3rem;
  background: #222222;
  border-radius: .25rem;
`;
const Skill = styled(motion.article)`
  padding: 6rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  div {
    width: 90%;
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
    }
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
const CareerBox = styled(motion.div)`
  background: #343439;
  border-radius: 1rem;
  padding: 1.5rem 2rem;
`
const Tech = styled(motion.div)`
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
const Cards = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.7rem;
`
const Card = styled.div`
  background: #343439;
  border-radius: 1rem;
  cursor: pointer;
  position: relative;
  bottom: 0;
  transition: ease-in-out .3s;
  &:hover {
    bottom: 7px;
    box-shadow: 0 0 20px rgba(0,0,0,0.3);
  }
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
      border-radius: 7px;
      padding: 5px 9px;
      margin: 0 8px 8px 0;
    }
  }
`
const Keyword = styled.li`
  color: #FFFFFF;
  background: ${(props) => {
    switch (props.$keyword) {
      case '개인':
        return '#7EA883';
      case '팀':
        return '#B15959';
      case 'React':
        return '#8C8CCD';
      case 'Javascript':
        return '#CDB17B';
      case 'HTML':
        return '#D07F7F';
      case 'styled-components':
        return '#D18BC6';
      case 'Tailwind CSS':
        return '#7394E8';
      case 'React Native':
        return '#D0956A';
      case 'Firebase':
        return '#6DB4CA';
      case '외주':
        return '#757881';
      case '반응형':
        return '#3CA38A';
      default:
        return 'gray';
    }
  }};
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
const Contact = styled(motion.div)`
  margin-top: 0;
  display: flex;
  justify-content: center;
  text-align: center;
  a, button {
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
    left: 3.7rem;
    opacity: 0;
    transform:translate(0,-50%);
    transition: ease-in-out .3s;
  }
  
`
const EmailLink = styled.button`
  &:hover ~ p {
    left: 4.7rem;
    opacity: 1;
    transition: ease-in-out .3s;
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
  const [activeSection, setActiveSection] = useState(''); //navigation 활성화

  useEffect(() => {
    const careerArea = careerRef.current;
    const projectArea = projectRef.current;

    const observerOptions = {
      root: null, // 뷰포트 기준으로 감지
      rootMargin: '0px',
      threshold: 0.1, // 섹션의 30%가 보이면 활성화
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

  const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible
  };

  const handleCopyClipBoard = async(text) => {
    try {
      await navigator.clipboard.writeText(text);
      alert('이메일 주소가 복사되었습니다.');
    } catch (error) {
      console.log('이메일 주소 복사 실패')
    }
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (cardName) => {
    setSelectedCard(cardName);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCard(null);
  };

  if (isModalOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }

  return (
    <div>
      <GlobalStyle/>
      <Intro
        initial="hidden"
        whileInView="visible"
        variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
      >
        <Container>
          <Header
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible
            }}
          >
            <a href="https://github.com/gayeongogo" target="_blank" rel="noreferrer noopener"><div><IconGithub/>github</div></a>
            <a href="https://velog.io/@gayeongogo/posts" target="_blank" rel="noreferrer noopener"><div><IconVelog/>velog</div></a>
          </Header>
          <Main>
            <TextArea
              variants={itemVariants}
            >
              <div>
                <p><span>매일의 작은 성공</span>을 쌓아가며,</p>
                <p>포기하지 않고 <span>도전</span>하는 프론트엔드 개발자</p>
                <p><b>고가연입니다.</b></p>
                
              </div>
              <div>사용자와 상호작용하는 <span>직관적</span>이고 <span>인터랙티브</span>한 화면을 
              <br/>개발하는데 열정을 가지고 있습니다. 빠르게 변화하는 환경에서도 
              <br/>유연하게 적응하기 위해 <span>새로운 기술</span>을 학습하며,
              <br/><span>사용자 경험을 향상</span>시키는 인터페이스 구현에 주력하는 개발자로서
              <br/>성장하고 있습니다.</div>
            </TextArea>
            <ImageArea
              initial={{ opacity: 0,}}
              whileInView={{ opacity: 1,}}
              viewport={{ once: false }}
              transition={{
                ease: 'easeInOut',
                duration: 1,
                delay: .5,
              }}
            >
              <img src={`${process.env.PUBLIC_URL}/images/mainphoto.png`} alt='가연'/>
            </ImageArea>
          </Main>
        </Container>
      </Intro>
      <AboutMe>
        <Container>
          <Title>About Me</Title>
          <Values
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{
              ease: 'easeInOut',
              duration: 1,
              x: { duration: .7 },
            }}
          >
            <ul>
              <li>항상 <B>사용자의 입장</B>을 최우선으로 생각하며, <B>사용자 경험 향상</B>을 위해 끊임없이 고민합니다.</li>
              <li>개발 과정에서 팀원 간의 원활한 <B>소통과 협업</B>을 중요시하고, <br/><B>피드백</B>을 소중히 여기며 적극 반영합니다.</li>
              <li><B>꾸준한 기록</B>으로 지속적인 성장의 발판을 만들어 나갑니다.</li>
              <li><B>빠른 적응력</B>과 <B>흡수력</B>으로 배움과 도전을 두려워하지 않습니다.</li>
              <li><B>React</B>, <B>Javascript</B> 그리고 <B>UX Design</B>을 공부하며 <br/>역량을 강화하고 있습니다.</li>
            </ul>
            <div>
              <img src={`${process.env.PUBLIC_URL}/images/mimoticon.png`} alt='미모티콘'/>
            </div>
          </Values>
          <Skill>
            <SubTitle>⚙️ Skill & Tools</SubTitle>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{
                ease: 'easeInOut',
                duration: 1,
                y: { duration: .7 },
              }}
            >
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
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{
                ease: 'easeInOut',
                duration: 1,
                y: { duration: .7 },
              }}
            >
              <h3>해본 적 있어요</h3>
              <ul>
                <li><img src={`${process.env.PUBLIC_URL}/images/react.svg`} alt='React Native'/>React Native</li>
                <li><img src={`${process.env.PUBLIC_URL}/images/jquery-plain.svg`} alt='Jquery'/>Jquery</li>
                <li><img src={`${process.env.PUBLIC_URL}/images/typescript.svg`} alt='Typescript'/>Typescript</li>
                <li><img src={`${process.env.PUBLIC_URL}/images/bootstrap.svg`} alt='Bootstrap'/>Bootstrap</li>
                <li><img src={`${process.env.PUBLIC_URL}/images/file-type-firebase.svg`} alt='Firebase'/>Firebase</li>
              </ul>
            </motion.div>
          </Skill>
          <Certi>
            <SubTitle>🏅 Certifications</SubTitle>
            <motion.div
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{
                ease: 'easeInOut',
                duration: 1,
                y: { duration: .7 },
              }}
            >
              <div>
                <b>정보처리기사</b>
                <p>한국산업인력공단, 2024년 9월 취득</p>
              </div>
              <div>
                <b>GTQ&#40;그래픽기술자격&#41; 1급</b>
                <p>한국생산성본부, 2022년 3월 취득</p>
              </div>
              <div>
                <b>컴퓨터활용능력 2급</b>
                <p>대한상공회의소, 2022년 2월 취득</p>
              </div>
            </motion.div>
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
            <Career 
              id="career" 
              ref={careerRef}
            >
              <CareerBox
                initial={{ opacity: 0, x: 70 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{
                  ease: 'easeInOut',
                  duration: 1,
                  x: { duration: .7 },
                }}
              >
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
                <Tech
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{
                    ease: 'easeInOut',
                    duration: 1,
                    y: { duration: .7 },
                  }}
                >
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
              <Cards
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{
                  ease: 'easeInOut',
                  duration: 1,
                  y: { duration: .7 },
                }}
              >
                <Card onClick={() => handleCardClick('Card 1')}>
                  <CardImg>
                    <img src={`${process.env.PUBLIC_URL}/images/project_diary.png`} alt='컵일기'/>
                  </CardImg>
                  <CardInfo>
                    <h3>컵일기</h3>
                    <span>2024.06 &#126; 2024.08</span>
                    <p>카페 탐방 취미를 위해 카페 리뷰와 일기를 함께 기록할 수 있는 사이트입니다.</p>
                    <ul>
                      <Keyword $keyword="개인">개인</Keyword>
                      <Keyword $keyword="React">React</Keyword>
                      <Keyword $keyword="styled-components">styled-components</Keyword>
                      <Keyword $keyword="Firebase">Firebase</Keyword>
                    </ul>
                  </CardInfo>
                </Card>
                <Card onClick={() => handleCardClick('Card 2')}>
                  <CardImg>
                    <img src={`${process.env.PUBLIC_URL}/images/project_magazine.png`} alt='매거진 메이커'/>
                  </CardImg>
                  <CardInfo>
                    <h3>매거진 메이커</h3>
                    <span>2024.04 &#126; 2024.05</span>
                    <p>SNS 매거진을 쉽고 빠르게 제작할 수 있는 사이트입니다.</p>
                    <ul>
                      <Keyword $keyword="개인">개인</Keyword>
                      <Keyword $keyword="HTML">HTML</Keyword>
                      <Keyword $keyword="styled-components">styled-components</Keyword>
                      <Keyword $keyword="Javascript">Javascript</Keyword>
                    </ul>
                  </CardInfo>
                </Card>
                <Card onClick={() => handleCardClick('Card 3')}>
                  <CardImg>
                    <img src={`${process.env.PUBLIC_URL}/images/project_law.png`} alt='법무법인 웹사이트 리뉴얼'/>
                  </CardImg>
                  <CardInfo>
                    <h3>법무법인 웹사이트 리뉴얼</h3>
                    <span>2023.08 &#126; 2023.09</span>
                    <p>기존 사이트를 리디자인하고 반응형 페이지로 개선하는 프로젝트에 참여했습니다.</p>
                    <ul>
                      <Keyword $keyword="팀">팀</Keyword>
                      <Keyword $keyword="외주">외주</Keyword>
                      <Keyword $keyword="React">React</Keyword>
                      <Keyword $keyword="Tailwind CSS">Tailwind CSS</Keyword>
                      <Keyword $keyword="반응형">반응형</Keyword>
                    </ul>
                  </CardInfo>
                </Card>
                <Card onClick={() => handleCardClick('Card 4')}>
                  <CardImg>
                    <img src={`${process.env.PUBLIC_URL}/images/project_bookmark.png`} alt='북마크 안드로이드 앱'/>
                  </CardImg>
                  <CardInfo>
                    <h3>북마크 안드로이드 앱</h3>
                    <span>2023.11 &#126; 2024.01</span>
                    <p>관심있는 링크를 저장하고 분류별로 모아 관리할 수 있는 북마크 앱 개발에 참여했습니다.</p>
                    <ul>
                      <Keyword $keyword="팀">팀</Keyword>
                      <Keyword $keyword="React Native">React Native</Keyword>
                      <Keyword $keyword="Tailwind CSS">Tailwind CSS</Keyword>
                    </ul>
                  </CardInfo>
                </Card>
                <Card onClick={() => handleCardClick('Card 5')}>
                  <CardImg>
                    <img src={`${process.env.PUBLIC_URL}/images/project_rec.jpg`} alt='재생에너지 거래 중개 플랫폼'/>
                  </CardImg>
                  <CardInfo>
                    <h3>재생에너지 거래 중개 플랫폼</h3>
                    <span>2023.09 &#126; 2024.01</span>
                    <p>재생에너지 전력 거래를 위한 REC 중개 플랫폼 개발에 참여했습니다.</p>
                    <ul>
                      <Keyword $keyword="팀">팀</Keyword>
                      <Keyword $keyword="React Native">React Native</Keyword>
                      <Keyword $keyword="Tailwind CSS">Tailwind CSS</Keyword>
                    </ul>
                  </CardInfo>
                </Card>
                <Card onClick={() => handleCardClick('Card 6')}>
                  <CardImg>
                    <img src={`${process.env.PUBLIC_URL}/images/project_portfolio.png`} alt='개인 포트폴리오 사이트'/>
                  </CardImg>
                  <CardInfo>
                    <h3>개인 포트폴리오 사이트</h3>
                    <span>2024.08 &#126; 2024.09</span>
                    <p>다양한 프로젝트와 경험을 담아낸 개인 포트폴리오 사이트 입니다.</p>
                    <ul>
                      <Keyword $keyword="개인">개인</Keyword>
                      <Keyword $keyword="React">React</Keyword>
                      <Keyword $keyword="styled-components">styled-components</Keyword>
                    </ul>
                  </CardInfo>
                </Card>
              </Cards>
              {isModalOpen && <Modal selectedCard={selectedCard} onClose={closeModal} />}
            </Project>
          </main>
        </Experience>
      </Container>
      <Thanks>
        <div>
          <h1>Thank You!</h1>
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{
              ease: 'easeInOut',
              duration: 1.3,
              y: { duration: .7 },
            }}
          >
            저와 함께 작업하고 싶거나, 더 많은 정보를 원하신다면 언제든지 연락주세요.
          <br/>끝까지 봐주셔서 감사합니다.
          </motion.h2>
          <Contact
            initial={{ opacity: 0}}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{
              ease: 'easeInOut',
              duration: 1.5,
            }}
          >
            <Github>
              <a href="https://github.com/gayeongogo" target="_blank" rel="noreferrer noopener">
                <img src={`${process.env.PUBLIC_URL}/images/contact-github.png`} alt="github"/>
              </a>
            </Github>
            <Email>
              <EmailLink onClick={() => handleCopyClipBoard('rkdus1357@gmail.com')}>
                <img src={`${process.env.PUBLIC_URL}/images/contact-mail.png`} alt="email" />
              </EmailLink>
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
