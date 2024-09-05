import React from 'react';
import styled from 'styled-components';
import GlobalStyle from './GlobalStyle';

const Container = styled.main`
  width: 1200px;
  margin: 0 auto;
`
const Intro = styled.section`
  background: #FFFFFF;
  color: #222831;
`
const AboutMe = styled.section`
`
const Values = styled.article`
`
const Skill = styled.article`
`
const Certi = styled.article`
`
const Career = styled.section`
`
const Project = styled.section`
`
const Thanks = styled.section`
  background: #FFFFFF;
  color: #222831;
`

function App() {
  return (
    <div>
      <GlobalStyle/>
      <Intro>
        <Container>
          <header>
            <div>github</div>
            <div>velog</div>
          </header>
          <div>
            <p><span>안녕하세요.</span>
            <br/>매일의 작은 성공을 실천하며,
            <br/>포기하지 않는 <span>프론트엔드 개발자</span>
            <br/><span>고가연입니다.</span></p>
          </div>
          <div>가연 이미지</div>
        </Container>
      </Intro>
      <AboutMe>
        <Container>
          <h1>About Me</h1>
          <Values>
            <ul>
              <li>개발 과정에서 항상 사용자의 입장을 생각해요.</li>
              <li>꾸준한 기록으로 성장의 발판을 만들어요.</li>
              <li>빠른 적응력과 흡수력으로 <br/>배움과 도전을 두려워하지 않아요.</li>
              <li>React, Javascript 그리고 UX Design을 <br/>지속적으로 공부합니다.</li>
            </ul>
            <div>미모티콘 이미지</div>
          </Values>
          <Skill>
            <h2>⚙ Skill & Tools</h2>
            <div>
              <h3>많이 해봤어요</h3>
              <ul>
                <li>React.js</li>
                <li>Javascript&#40;ES6+&#41;</li>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>styled-components</li>
                <li>Tailwind CSS</li>
                <li>Markdown</li>
                <li>Github</li>
                <li>Figma</li>
                <li>Photoshop</li>
              </ul>
            </div>
            <div>
              <h3>해본 적 있어요</h3>
              <ul>
                <li>React Native</li>
                <li>Jquery</li>
                <li>Typescript</li>
                <li>Bootstrap</li>
                <li>Firebase</li>
              </ul>
            </div>
          </Skill>
          <Certi>
            <h2>🏅 Certifications</h2>
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
      <Career>
        <div>
          <p>2023.07 &#126; 2024.01</p>
          <p>(주)디로그</p>
          <p>디자인, 퍼블리싱, 프론트엔드 개발 담당</p>
          <ul>
            <li>Figma를 이용한 디자인 작업</li>
            <li>HTML, CSS를 활용해 웹 표준 및 웹 접근성을 고려한 퍼블리싱 작업</li>
            <li>법무법인 웹사이트 리뉴얼&#40;리디자인 및 반응형 페이지&#41;</li>
            <li>React를 사용한 에너지 중개 사이트 개발 참여</li>
            <li>React Native를 사용한 북마크 앱 디자인 및 개발 참여</li>
            <li>제안서 및 산출물 디자인 요소 작업</li>
          </ul>
          <div>
            <div>React.js</div>
            <div>Tailwind</div>
            <div>Figma</div>
            <div>React Native</div>
          </div>
        </div>
      </Career>
      <Project>
        <div>
          <div>
            <div>컵일기 이미지</div>
            <h3>컵일기</h3>
            <p>2024.06 &#126; 2024.07</p>
            <p>그날의 일기를 다녀온 카페에 대한 평가와 함께 기록할 수 있는 사이트 입니다.</p>
            <ul>
              <li>개인</li>
              <li>React</li>
              <li>styled-components</li>
              <li>Firebase</li>
            </ul>
          </div>
          <div>
            <div>매거진 메이커 이미지</div>
            <h3>매거진 메이커</h3>
            <p>2024.06 &#126; 2024.07</p>
            <p>SNS용 매거진을 쉽고 빠르게 제작할 수 있는 사이트 입니다.</p>
            <ul>
              <li>개인</li>
              <li>HTML</li>
              <li>styled-components</li>
              <li>Javascript</li>
            </ul>
          </div>
          <div>
            <div>법무법인 이미지</div>
            <h3>법무법인 웹사이트 리뉴얼</h3>
            <p>2024.06 &#126; 2024.07</p>
            <p>기존 사이트를 리디자인하고 반응형 페이지로 개선하는 프로젝트에 참여했습니다.</p>
            <ul>
              <li>팀</li>
              <li>외주</li>
              <li>React</li>
              <li>Tailwind CSS</li>
              <li>반응형</li>
            </ul>
          </div>
          <div>
            <div>북마크 이미지</div>
            <h3>북마크 안드로이드 앱</h3>
            <p>2024.06 &#126; 2024.07</p>
            <p>관심있는 링크를 저장하고 분류별로 모아 관리할 수 있는 북마크 앱 개발에 참여했습니다.</p>
            <ul>
              <li>팀</li>
              <li>React Native</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>
          <div>
            <div>REC 이미지</div>
            <h3>에너지 거래 중개 사이트</h3>
            <p>2024.06 &#126; 2024.07</p>
            <p>정부 공동투자형 개발 사업으로 진행된 에너지 거래 중개 사이트 개발에 참여했습니다.</p>
            <ul>
              <li>팀</li>
              <li>React</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>
          <div>
            <div>포트폴리오 이미지</div>
            <h3>개인 포트폴리오 사이트</h3>
            <p>2024.06 &#126; 2024.07</p>
            <p>개인 포트폴리오 사이트 입니다.</p>
            <ul>
              <li>개인</li>
              <li>React</li>
              <li>styled-components</li>
            </ul>
          </div>
        </div>
      </Project>
      <Thanks>
        <Container>
          <p>Thank You</p>
          <p>저와 함께 작업하고 싶거나, 더 많은 정보를 원하신다면 언제든지 연락주세요.
          <br/>끝까지 봐주셔서 감사합니다.</p>
          <button>Send Mail</button>
        </Container>
      </Thanks>
    </div>
  );
}

export default App;
