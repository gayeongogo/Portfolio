import React from 'react'
import styled from 'styled-components';
import GlobalStyle from './GlobalStyle';
import { FaGithub, FaLink } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

const IconGithub = styled(FaGithub)`
  color: #EEEEEE;
  margin: 0 5px 2px 0;
`
const IconLink = styled(FaLink)`
  color: #EEEEEE;
  margin: 0 5px 2px 0;
`
const IconClose = styled(IoClose)`
  color: #EEEEEE;
  font-size: 2rem;
`

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(2px);
`;

const ModalContent = styled.div`
  position: relative;
  width: 1024px;
  box-shadow: 0 0 20px rgba(0,0,0,0.7);
  max-height: 90vh;
  border-radius: 1rem;
  overflow: auto;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
  header {
    width: 100%;
    padding: 1.2rem 2rem;
    background: #343439;
    color: #EEEEEE;
    text-align: center;
    h2 {
      font-size: 2.2rem;
      font-family: 'Pretendard-SemiBold';
      margin-bottom: 10px;
    }
    h3 {
      color: #A1A1A1;
      margin-bottom: 10px;
    }
  }
  main {
    color: #222831;
    background-color: #FFFFFF;
    padding: 2rem 5rem 5rem;
    p {
      line-height: 160%;
      width: 60%;
      text-align: center;
      position: relative;
      margin: 2rem 0;
      &::before {
        content: "";
        position: absolute;
        left: 50%;
        top: -1.5rem;
        transform:translate(-50%, 0);
        height: 2px;
        width: 3rem;
        border-radius: 20px;
        background: #222831;
      }
    }
    h4 {
      font-family: 'Pretendard-SemiBold';
      font-size: 1.7rem;
      margin-bottom: 10px;
    }
    li {
      list-style: disc;
      padding: 7px 0;
      margin-left: 3rem;
      line-height: 160%;
    }
  }
`;
const CloseBtn = styled.button`
  position: fixed;
  padding: 1.5rem;
  top: 0;
  right: 0;
  border-radius: 50%;
`
const Keyword = styled.li`
  font-size: 15px;
  display: inline-block;
  margin-right: 5px;
  padding: 5px 12px;
  background: #222831;
  border-radius: 7px;
`
const MainDesc = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
`
const ModalImg = styled.div`
  width: 60%;
  aspect-ratio: 5 / 3;
  overflow: hidden;
  margin-bottom: 1rem;
  border-radius: 1rem;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
const Feature = styled.div`
  margin-bottom: 2rem;
`
const LinkTo = styled.div`
  display: flex;
  margin: 1rem 2rem;
  a {
    font-size: 14px;
    color: #EEEEEE;
    background: #222831;
    /* box-shadow: 0 0 10px rgba(0,0,0,0.2); */
    border-radius: 2rem;
    padding: 7px 10px;
    &:first-child {
      margin-right: 7px;
    }
  }
`
const B = styled.span`
  padding: .15rem .3rem;
  background: #ECECEC;
  border-radius: .25rem;
  font-family: 'Pretendard-Medium';
`;

export default function Modal({ selectedCard, onClose }) {
  const cardDetails = {
    'Card 1': {
      title: '컵일기',
      period: '2024.06 - 2024.08',
      description: '카페 탐방 취미를 더욱 즐겁고 의미 있게 만들어 줄 수 있는 사이트를 구상했습니다. 보통의 리뷰는 객관적인 평가에 치중되지만, 일기와 함께 기록하면 그날의 감정과 분위기를 담아 더 특별한 의미를 만들 수 있습니다.',
      feature: [
        `다녀온 카페의 이름, 위치, 카페의 분위기, 메뉴, 서비스 등의 정보 입력`,
        '구체적인 리뷰를 작성하고 총점을 별점으로 평가',
        '카페 내부, 메뉴, 방문한 날의 분위기 등을 기록하기 위한 사진 업로드 기능',
        '날짜별 일기 작성 및 글 등록, 수정, 삭제 기능',
        '체험 사용자는 브라우저에서 데이터를 유지할 수 있고, 이후 로그인 시 데이터를 서버로 전송 가능',
      ],
      Contribution: [
        <><B>figma</B>를 사용하여 전반적인 디자인 및 스토리보드 구성</>,
        <><B>Firebase</B>를 사용하여 서버 CRUD 기능을 신속하게 구현</>,
        <>회원가입 시 <B>Firebase 인증 기능</B>을 활용해 <B>switch case문</B>으로 다향한 오류 사항의 유효성을 검사하여 처리</>,
        <>모든 필드 입력 후 글 등록 및 업데이트가 가능하도록 <B>useEffect</B>로 양식 검사 후 완료 버튼 활성화</>,
        <>로그인 이전에는 데이터를 <B>local storage</B>에 저장하고, 로그인 후에는 <B>Firebase</B>를 통해 서버에 업로드하여 관리</>,
        <>사용자가 선택한 이미지를 미리보기 형태로 보여주기 위해 <B>FileReader API</B>를 사용해 데이터 URL로 변환 후 화면에 렌더링</>,
        <><B>Datepicker</B>를 사용해 사용자가 날짜를 선택할 수 있도록 구현하고, 선택한 날짜는 ISO 형식으로 변환해 저장</>,
        <><B>postcode API</B>를 사용해 우편번호를 검색하여 주소 입력을 보다 간편하게 이용할 수 있도록 구현</>,
        <>하트 모양의 아이콘을 클릭해 사용자가 카페에 대한 평점을 입력할 수 있는 <B>인터렉티브 UI</B> 구현</>
      ],
      keywords: ['개인', 'React', 'styled-components', 'Firebase'],
      image: 'project_diary.png',
      github: 'https://github.com/gayeongogo/Cafe',
      url: 'https://diary-87df1.web.app/',
    },
    'Card 2': {
      title: '매거진 메이커',
      period: '2024.04 - 2024.05',
      description: '정보 전달용 매거진을 카드뉴스 형태로 쉽게 제작할 수 있는 사이트를 구상했습니다. 디자인 툴을 다루지 못하는 사람도 누구나 손쉽게 사용 가능하도록 직관적인 UI 구현을 목적으로 하였습니다.',
      feature: [
        '복잡한 디자인 작업 없이 버튼 선택과 텍스트 입력만으로 간편하게 이미지 제작',
        '사용자의 인터랙션에 따라 선택 및 입력 사항을 즉각적으로 반영하여 실시간 미리보기 제공',
        '제목, 부제목, 본문을 숨기거나 표시하는 레이아웃 버튼을 통해 다양한 콘텐츠 구성을 제공',
        '텍스트 그림자 효과와 색상 반전 옵션을 통해 커스터마이즈 가능',
        '배경은 랜덤 색상 또는 사용자가 원하는 이미지로 설정할 수 있으며, 가독성을 위해 배경 레이어도 추가 선택 가능',
        '사용자가 편집한 매거진 이미지를 즉시 이미지 파일로 저장'
      ],
      Contribution: [
        <>텍스트 입력 값을 <B>실시간으로 화면에 반영</B>하여 직관적인 사용 경험 제공</>,
        <>랜덤 색상 버튼 클릭 시 무작위 색상을 배경으로 설정하는 <B>randomRGB 함수</B>를 구현하여 사용자에게 다양성 제공</>,
        <>사용자가 <B>로컬 파일을 업로드</B> 하거나 <B>URL을 입력</B>하여 배경 이미지를 설정</>,
        <>제작자 버튼 클릭 시 <B>prompt</B>를 사용해 제작자 이름을 입력하고 콘텐츠에 표시할 수 있도록 구현</>,
        <><B>html2canvas 라이브러리</B>를 사용하여 현재 편집한 콘텐츠를 간단하게 캡쳐하고 이미지로 변환하여 저장</>,
      ],
      keywords: ['개인', 'HTML', 'styled-components', 'Javascript'],
      image: 'project_magazine.png',
      github: 'https://github.com/gayeongogo/magazine-maker',
      url: 'https://gayeongogo.github.io/magazine-maker/',
    },
    'Card 3': {
      title: '법무법인 웹사이트 리뉴얼',
      period: '2023.08 - 2023.09',
      description: '외주 프로젝트로 기존 페이지의 디자인과 구성 전반을 변화시키고 반응형 페이지로 리뉴얼을 진행했습니다. 클라이언트의 요구사항을 충족하며 웹 표준을 준수하여 제작하였습니다.',
      feature: [
        '메인 페이지에서 사용자가 관심 있는 업무 분야와 변호사 항목을 선택하면 상세 페이지의 해당 섹션으로 바로 이동할 수 있도록 구성',
        '전반적인 페이지의 디자인을 해당 법무법인의 이미지와 어울리는 구성으로 변경',
        '모바일, 태블릿, 데스크탑 환경에 대응 가능한 반응형 페이지로 개선',
        '법무법인 소식, 승소 사례, 법률 정보 등 탐색이 필요한 주요 페이지에 검색 기능 구현'
      ],
      Contribution: [
        <><B>Figma</B>를 사용하여 법무법인 브랜드 아이덴티티를 반영한 비주얼 디자인과 UI/UX 흐름을 설계</>,
        <>기존의 어두운 색상 테마를 법무법인의 로고와 조화를 이루는 색상으로 재구성하여 일관된 브랜드 이미지를 강화</>,
        <><B>MediaQuery</B>를 활용하여 모든 화면 크기에서 최적화된 반응형 웹 페이지로 개선</>,
        <><B>Grid 레이아웃</B>을 적용하여 카드형 페이지에서 한 개, 두 개 또는 여러 개의 아이템을 선택적으로 볼 수 있는 뷰 전환 기능 제공</>,
        <><B>filter</B>와 <B>includes 함수</B>를 활용한 검색 기능을 구현하여 사용자가 입력한 키워드를 기반으로 원하는 정보를 빠르게 탐색할 수 있도록 개선</>,
        <>특정 페이지의 내비게이션 메뉴 선택 시 <B>window.scrollto</B>를 활용하여 해당 섹션으로 부드럽게 이동하며, 스크롤을 통해 상하단 콘텐츠를 탐색할 수 있는 기능 구현</>,
      ],
      keywords: ['팀', '외주', 'React', 'Tailwind CSS', '반응형'],
      image: 'project_law.png',
      url: 'https://jdlawfirm.co.kr/',
    },
    'Card 4': {
      title: '북마크 안드로이드 앱',
      period: '2023.11 - 2024.01',
      description: '카테고리별로 URL을 모아 관리하고 여러 플랫폼의 실시간 인기 게시물을 한눈에 확인할 수 있는 북마크 안드로이드 앱 개발에 참여했습니다. React Native를 사용하며 모바일 사용자를 위한 인터페이스 구현을 경험할 수 있었습니다.',
      feature: [
        '저장할 URL과 상세 정보를 입력하고, 카테고리를 선택하여 효율적으로 관리',
        '해당 링크의 메타데이터를 통해 기본 정보를 자동으로 업로드하고, 사용자가 필요에 따라 원하는 방식으로 수정',
        '모바일 인터페이스에 맞는 내비게이션 설계와 입력 시트 사용',
      ],
      Contribution: [
        <><B>Figma</B>를 사용하여 전체적인 디자인과 카테고리 관리 및 페이지 이동 흐름을 설계</>,
        <>글 작성 시 모바일 사용자에게 익숙한 <B>Bottom Sheet</B>를 사용해 화면 공간을 효율적으로 활용하고 직관적인 사용자 경험을 제공</>,
        <>여러 입력 시트 간 발생할 수 있는 오류를 줄이기 위해 <B>Context API</B>를 사용하여 Prop 전달 체계를 전역적으로 관리</>,
        <><B>Axios</B>를 활용한 데이터 처리로 서버와의 통신 기능을 간결하고 직관적으로 구현</>,
        <><B>Stack Navigation</B>과 <B>Tab Navigation</B>을 혼합하여 각 페이지별 탐색과 섹션 간 이동을 설계</>,
        <>맞춤형 추천 게시물 제공을 위해 회원가입 시 입력된 정보와 함께 추가적으로 연령대, 성별, 관심사를 수집하는 단계를 추가</>,
        <>로그인 및 회원가입 페이지에서 <B>정규 표현식</B>을 사용해 입력된 데이터의 유효성을 검사하고 오류 메시지를 제공</>,
      ],
      keywords: ['팀', 'React Native', 'Tailwind CSS',],
      image: 'project_bookmark.png',
    },
    'Card 5': {
      title: '재생에너지 거래 중개 플랫폼',
      period: '2023.09 - 2024.01',
      description: '재생에너지 판매자와 구매자가 효율적인 재생에너지 전력 거래를 할 수 있는 REC 거래 중개 플랫폼 프로젝트에 참여했습니다.',
      feature: [
        '발전소에서 생성된 재생에너지에 대한 인증서를 구매자와 판매자 간에 거래할 수 있는 플랫폼 제공',
        '판매자(발전소 보유자)와 구매자의 요구 사항에 따라 각각 다른 형태의 페이지 구현',
      ],
      Contribution: [
        <><B>Tailwind CSS</B>를 사용하여 스타일을 빠르게 수정하고 재사용 가능하도록 구현</>,
        <>사용자가 상품의 위치, 등록순, 판매 상태 등을 드롭 다운 메뉴를 통해 선택하고 조회할 수 있는 <B>필터링 기능</B> 제공</>,
        <><B>Axios</B>를 사용해 상품 조회 시 데이터를 서버로부터 간결하고 직관적으로 요청한 데이터 통신 구현</>,
        <><B>사업자등록정보 진위확인 및 상태조회 API</B>를 활용하여 입력된 사업자등록번호의 유효성을 검증하고 계속사업자, 휴업, 폐업 여부 등의 상태 확인 로직 구현</>,
        <>발전소 정보 등록 시 <B>카드 형태의 리스트</B>를 추가하여 사용자가 각 발전소의 주요 정보를 한눈에 확인하고 쉽게 관리할 수 있도록 구성</>,
        <>회원가입 화면에서 <B>진행률을 단계별로 표시</B>하여 사용자의 현재 절차와 남은 절차를 시각적으로 명확히 파악할 수 있도록 구현</>,
      ],
      keywords: ['팀', 'React', 'Tailwind CSS',],
      image: 'project_rec.jpg',
    },
    'Card 6': {
      title: '개인 포트폴리오 사이트',
      period: '2024.08 - 2024.09',
      description: '자체적으로 제작한 개인 포트폴리오 사이트 입니다. 다양한 프로젝트와 경험을 효과적으로 나타내기 위해 직접 기획, 디자인하고 정보를 쉽게 전달할 수 있도록 전체적인 구상을 깊이 고민하며 구현했습니다.',
      feature: [
        '소개, 경력, 프로젝트 순으로 점층적으로 정보를 배치하여 단계적으로 경험과 역량을 쉽게 이해할 수 있도록 구성',
        '심플한 디자인과 간결한 구성으로 정보를 효과적으로 전달하며 사용자들이 쉽게 내용을 이해할 수 있도록 제작',
        '스크롤에 따라 애니메이션을 적용하여 부드러운 전환 효과 제공',
        '프로젝트의 상세 내용을 확인할 수 있는 모달 창 제공',
        '프로젝트 작업 시의 기록물을 확인할 수 있도록 github, 개발블로그(velog) 바로가기 링크 첨부'
      ],
      Contribution: [
        <><B>Figma</B>를 사용하여 전체적인 디자인 및 스토리보드 구성</>,
        <><B>Framer-motion</B> 라이브러리를 사용해 화면 사이트 전반에 애니메이션 효과를 적용하여 부드러운 인터랙션 경험을 제공</>,
        <><B>Intersection Observer API</B>를 사용하여 Career과 Project 화면 간 스크롤에 따라 내비게이션 메뉴의 활성화 상태가 자동으로 변경되도록 구현</>,
        <>이메일 버튼 클릭 시 <B>navigator.clipboard.writeText</B>를 사용해 사용자가 클릭 한 번으로 이메일 주소를 손쉽게 복사할 수 있는 기능 구현</>,
      ],
      keywords: ['개인', 'React', 'styled-components'],
      image: 'project_portfolio.png',
      github: 'https://github.com/gayeongogo/Portfolio',
      url: 'https://gayeongogo.github.io/Portfolio/',
    },
  };

  const { title, period, description, feature, Contribution, keywords, image, github, url} = cardDetails[selectedCard];

  return (
    <div>
      <GlobalStyle/>
      <ModalOverlay onClick={onClose}>
        <ModalContent onClick={(e) => e.stopPropagation()}>
          <header>
            <h3>{period}</h3>
            <h2>{title}</h2>
            <ul>
              {keywords.map((keyword, index) => (
                <Keyword key={index}>{keyword}</Keyword>
              ))}
            </ul>
          </header>
          <main>
            <MainDesc>
              <ModalImg>
                <img src={`${process.env.PUBLIC_URL}/images/${image}`} alt="" />
              </ModalImg>
              {(github || url) &&
                <LinkTo>
                  {github && <a href={github} target="_blank" rel="noreferrer noopener"><IconGithub/>github 바로가기</a>}
                  {url && <a href={url} target="_blank" rel="noreferrer noopener"><IconLink/>배포 링크</a>}
                </LinkTo>
              }
              
              <p>{description}</p>
            </MainDesc>
            <Feature>
              <h4>💡Feature</h4>
              <ul>
                {feature.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </Feature>
            <div>
              <h4>🙋‍♀️Contribution</h4>
              <ul>
              {Contribution.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
              </ul>
            </div>
          </main>
          <CloseBtn onClick={onClose}><IconClose/></CloseBtn>
        </ModalContent>
      </ModalOverlay>
    </div>
  )
}
