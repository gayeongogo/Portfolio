# 개인 프로젝트 '컵일기'

### 📑Description
카페 탐방 취미를 더욱 즐겁고 의미 있게 만들어 줄 수 있는 사이트를 구상했습니다. 보통의 리뷰는 객관적인 평가에 치중되지만, 일기와 함께 기록하면 그날의 감정과 분위기를 담아 더 특별한 의미를 만들 수 있습니다.

### 💡Feature
* 다녀온 카페의 이름, 위치, 카페의 분위기, 메뉴, 서비스 등의 정보 입력
* 구체적인 리뷰를 작성하고 총점을 별점으로 평가
* 카페 내부, 메뉴, 방문한 날의 분위기 등을 기록하기 위한 사진 업로드 기능
* 날짜별 일기 작성 및 글 등록, 수정, 삭제 기능
* 체험 사용자는 브라우저에서 데이터를 유지할 수 있고, 이후 로그인 시 데이터를 서버로 전송 가능

### 🙋‍♀️Contribution
* Figma를 사용하여 전반적인 디자인 및 스토리보드 구성
* Firebase를 사용하여 서버 CRUD 기능을 신속하게 구현
* 회원가입 시 <B>Firebase 인증 기능</B>을 활용해 <B>switch case문</B>으로 다향한 오류 사항의 유효성을 검사하여 처리
* 모든 필드 입력 후 글 등록 및 업데이트가 가능하도록 <B>useEffect</B>로 양식 검사 후 완료 버튼 활성화
* 로그인 이전에는 데이터를 <B>local storage</B>에 저장하고, 로그인 후에는 <B>Firebase</B>를 통해 서버에 업로드하여 관리
* 사용자가 선택한 이미지를 미리보기 형태로 보여주기 위해 <B>FileReader API</B>를 사용해 데이터 URL로 변환 후 화면에 렌더링
* <B>Datepicker</B>를 사용해 사용자가 날짜를 선택할 수 있도록 구현하고, 선택한 날짜는 ISO 형식으로 변환해 저장
* <B>postcode API</B>를 사용해 우편번호를 검색하여 주소 입력을 보다 간편하게 이용할 수 있도록 구현
* 하트 모양의 아이콘을 클릭해 사용자가 카페에 대한 평점을 입력할 수 있는 <B>인터렉티브 UI</B> 구현
