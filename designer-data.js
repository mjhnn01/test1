// 2026 졸업전시회 디자이너 16인 상세 데이터
const DESIGNERS_DATA = {
  'designer-01': {
    id: 'designer-01',
    name: '강태민',
    nameEn: 'TAEMIN KANG',
    photo: 'images/designers/designer-01.jpg',
    field: 'Product & Mobility',
    studentId: '60221401',
    email: 'taemin.kang@university.ac.kr',
    sns: '@taemin_design',
    bio: '이동성의 미래와 인간 중심 인터페이스를 탐구하며, 기술과 감성의 자연스러운 공존을 지향합니다.',
    project1: {
      title: '기억의 지층',
      category: 'INDIVIDUAL PROJECT',
      aspect: '4:5',
      desc: '개인의 시간과 도시의 파편화된 기억을 물리적 조형으로 치환한 모듈형 모빌리티 오브젝트 디자인입니다.'
    },
    project2: {
      title: '넥서스 모빌리티 에코시스템',
      category: 'TEAM PROJECT',
      aspect: '16:9',
      desc: '도심 속 자율주행 라스트마일 모빌리티와 통합 스마트 인프라를 연결하는 미래형 공공 운송 시스템입니다.'
    }
  },
  'designer-02': {
    id: 'designer-02',
    name: '김민준',
    nameEn: 'MINJUN KIM',
    photo: 'images/designers/designer-02.jpg',
    field: 'Industrial Design',
    studentId: '60221402',
    email: 'minjun.kim@university.ac.kr',
    sns: '@minjun_id',
    bio: '사물의 근원적인 형태와 기능적 본질에 집중하여 일상 속 조용한 균형을 제안합니다.',
    project1: {
      title: '비가시적 파동',
      category: 'INDIVIDUAL PROJECT',
      aspect: '1:1',
      desc: '공기 청정과 음향 기능을 결합하여 보이지 않는 공기의 흐름을 촉각과 시각으로 시각화한 리빙 가전입니다.'
    },
    project2: {
      title: '아카이브 리빙 오브제',
      category: 'INDIVIDUAL PROJECT',
      aspect: '3:4',
      desc: '자연 소재의 질감과 정밀한 알루미늄 가공을 결합한 컴팩트 워크스페이스 라이팅 시스템입니다.'
    }
  },
  'designer-03': {
    id: 'designer-03',
    name: '박도현',
    nameEn: 'DOHYUN PARK',
    photo: 'images/designers/designer-03.jpg',
    field: 'Living & Spatial',
    studentId: '60221403',
    email: 'dohyun.park@university.ac.kr',
    sns: '@dohyun_space',
    bio: '공간의 여백과 사용자의 심리적 안정감을 연결하는 휴식 중심의 가구 및 조명 디자인을 연구합니다.',
    project1: {
      title: '도시 속의 쉼표',
      category: 'INDIVIDUAL PROJECT',
      aspect: '16:10',
      desc: '과밀화된 도시 주거 환경을 위해 변형 가능한 구조를 갖춘 모듈형 라운지 체어 및 조명 시스템입니다.'
    },
    project2: {
      title: '도시 자율주행 인터랙션',
      category: 'TEAM PROJECT',
      aspect: '16:9',
      desc: '탑승자와 도심 보행자가 직관적으로 소통할 수 있는 차세대 자율주행 차량 라이팅 및 공간 인터페이스입니다.'
    }
  },
  'designer-04': {
    id: 'designer-04',
    name: '배유진',
    nameEn: 'YUJIN BAE',
    photo: 'images/designers/designer-04.jpg',
    field: 'UX & Smart Device',
    studentId: '60221404',
    email: 'yujin.bae@university.ac.kr',
    sns: '@yujin_ux',
    bio: '사용자의 무의식적 인터랙션 패턴을 관찰하여 더 자연스럽고 매끄러운 스마트 디바이스 경험을 설계합니다.',
    project1: {
      title: '인공 정서의 잔상',
      category: 'INDIVIDUAL PROJECT',
      aspect: '3:4',
      desc: 'AI 기반 감성 케어 홈 디바이스로, 사용자의 생체 신호를 부드러운 빛과 앰비언트 사운드로 피드백합니다.'
    },
    project2: {
      title: '도시 자율주행 인터랙션',
      category: 'TEAM PROJECT',
      aspect: '16:9',
      desc: '탑승자와 도심 보행자가 직관적으로 소통할 수 있는 차세대 자율주행 차량 라이팅 및 공간 인터페이스입니다.'
    }
  },
  'designer-05': {
    id: 'designer-05',
    name: '송하은',
    nameEn: 'HAEUN SONG',
    photo: 'images/designers/designer-05.jpg',
    field: 'Design Engineering',
    studentId: '60221405',
    email: 'haeun.song@university.ac.kr',
    sns: '@haeun_song',
    bio: '공학적 정밀도와 미학적 완성도를 결합한 차세대 하드웨어 구조 및 매커니즘을 탐구합니다.',
    project1: {
      title: '활자의 리듬과 형태',
      category: 'INDIVIDUAL PROJECT',
      aspect: '4:3',
      desc: '물리적인 타이포그래피 구조와 키네틱 메커니즘을 결합한 디지털 입력 디바이스 콘셉트입니다.'
    },
    project2: {
      title: '도시 자율주행 인터랙션',
      category: 'TEAM PROJECT',
      aspect: '16:9',
      desc: '탑승자와 도심 보행자가 직관적으로 소통할 수 있는 차세대 자율주행 차량 라이팅 및 공간 인터페이스입니다.'
    }
  },
  'designer-06': {
    id: 'designer-06',
    name: '신재원',
    nameEn: 'JAEWON SHIN',
    photo: 'images/designers/designer-06.jpg',
    field: 'Mobility Design',
    studentId: '60221406',
    email: 'jaewon.shin@university.ac.kr',
    sns: '@jaewon_mobility',
    bio: '미래형 이동 수단의 형태미와 지속 가능한 순환 모빌리티 생태계를 디자인합니다.',
    project1: {
      title: '생태적 전환의 시각화',
      category: 'INDIVIDUAL PROJECT',
      aspect: '1:1',
      desc: '재생 바이오 복합 소재를 적용한 초경량 개인용 도심 이동 모빌리티 프로젝트입니다.'
    },
    project2: {
      title: '넥서스 모빌리티 에코시스템',
      category: 'TEAM PROJECT',
      aspect: '16:9',
      desc: '도심 속 자율주행 라스트마일 모빌리티와 통합 스마트 인프라를 연결하는 미래형 공공 운송 시스템입니다.'
    }
  },
  'designer-07': {
    id: 'designer-07',
    name: '오채원',
    nameEn: 'CHAEWON OH',
    photo: 'images/designers/designer-07.jpg',
    field: 'Healthcare Design',
    studentId: '60221407',
    email: 'chaewon.oh@university.ac.kr',
    sns: '@chaewon_oh',
    bio: '의료 및 웰니스 환경에서 사용자의 신체적·정서적 부담을 줄이는 포용적 헬스케어 기기를 디자인합니다.',
    project1: {
      title: '모호한 공간의 기록',
      category: 'INDIVIDUAL PROJECT',
      aspect: '2:3',
      desc: '홈 케어 환자의 심리적 안정과 자가 진단을 돕는 감성적 형태의 비침습 헬스 모니터링 디바이스입니다.'
    },
    project2: {
      title: '바이오-스마트 케어 플랫폼',
      category: 'TEAM PROJECT',
      aspect: '4:3',
      desc: '생체 신호 데이터와 환경 센싱을 결합하여 맞춤형 건강 환경을 능동적으로 조성하는 스마트 케어 기기입니다.'
    }
  },
  'designer-08': {
    id: 'designer-08',
    name: '윤도윤',
    nameEn: 'DOYOUN YOON',
    photo: 'images/designers/designer-08.jpg',
    field: 'Consumer Tech',
    studentId: '60221408',
    email: 'doyoun.yoon@university.ac.kr',
    sns: '@doyoun_yoon',
    bio: '소비자 가전의 복잡한 기능을 최소화된 제스처와 명료한 조형 언어로 직관화합니다.',
    project1: {
      title: '촉각적 인터페이스',
      category: 'INDIVIDUAL PROJECT',
      aspect: '4:5',
      desc: '미세 햅틱 피드백 표면 기술을 적용하여 화면을 보지 않고도 조작할 수 있는 스마트 컨트롤러입니다.'
    },
    project2: {
      title: '모듈러 오디오 스테이션',
      category: 'INDIVIDUAL PROJECT',
      aspect: '1:1',
      desc: '음악 감상과 홈 인테리어 오브제의 역할을 동시에 만족하는 모노크롬 알루미늄 사운드 유닛입니다.'
    }
  },
  'designer-09': {
    id: 'designer-09',
    name: '이서연',
    nameEn: 'SEOYEON LEE',
    photo: 'images/designers/designer-09.jpg',
    field: 'Eco & Sustainable',
    studentId: '60221409',
    email: 'seoyeon.lee@university.ac.kr',
    sns: '@seoyeon_eco',
    bio: '생산부터 폐기까지 전 생애 주기를 고려한 친환경 머티리얼과 자원 순환 디자인을 실천합니다.',
    project1: {
      title: '순간의 무게',
      category: 'INDIVIDUAL PROJECT',
      aspect: '16:10',
      desc: '생분해성 바이오 플라스틱과 재생 섬유를 결합하여 제작된 제로 웨이스트 포터블 라이프스타일 키트입니다.'
    },
    project2: {
      title: '서큘러 하우징 시스템',
      category: 'INDIVIDUAL PROJECT',
      aspect: '4:3',
      desc: '해체와 부품 교체가 용이하여 수명을 무한히 연장할 수 있는 조립식 생활 가전 프레임입니다.'
    }
  },
  'designer-10': {
    id: 'designer-10',
    name: '이준서',
    nameEn: 'JUNSEO LEE',
    photo: 'images/designers/designer-10.jpg',
    field: 'Public & Urban',
    studentId: '60221410',
    email: 'junseo.lee@university.ac.kr',
    sns: '@junseo_urban',
    bio: '공공장소에서의 시민 상호작용을 증진시키는 도시 가구 및 인터랙티브 시설물을 탐색합니다.',
    project1: {
      title: '다음 세대의 언어',
      category: 'INDIVIDUAL PROJECT',
      aspect: '3:4',
      desc: '다양한 신체 조건을 지닌 모든 도시민이 편안하게 머무를 수 있는 유니버설 벤치 & 쉘터 모듈입니다.'
    },
    project2: {
      title: '인프라스트럭처 그리드',
      category: 'INDIVIDUAL PROJECT',
      aspect: '16:9',
      desc: '스마트 시티의 조명, 충전, 긴급 알림을 하나로 통합한 미니멀 타워 시스템입니다.'
    }
  },
  'designer-11': {
    id: 'designer-11',
    name: '정수빈',
    nameEn: 'SUBIN JUNG',
    photo: 'images/designers/designer-11.jpg',
    field: 'Material & Craft',
    studentId: '60221411',
    email: 'subin.jung@university.ac.kr',
    sns: '@subin_craft',
    bio: '아날로그 공예의 깊이 있는 촉감과 디지털 제조의 정밀성을 결합한 CMF 디자인을 추구합니다.',
    project1: {
      title: '경계의 잔향',
      category: 'INDIVIDUAL PROJECT',
      aspect: '1:1',
      desc: '도자기와 금속 세공의 결합 기법을 현대 리빙웨어에 적용한 감성적 테이블웨어 시리즈입니다.'
    },
    project2: {
      title: '텍스처 인센스 버너',
      category: 'INDIVIDUAL PROJECT',
      aspect: '4:5',
      desc: '연기의 흐름에 따라 변화하는 표면 그림자를 조각적으로 표현한 황동 오브제입니다.'
    }
  },
  'designer-12': {
    id: 'designer-12',
    name: '조하람',
    nameEn: 'HARAM CHO',
    photo: 'images/designers/designer-12.jpg',
    field: 'Interactive Product',
    studentId: '60221412',
    email: 'haram.cho@university.ac.kr',
    sns: '@haram_interactive',
    bio: '사람의 미세한 움직임과 감정에 반응하는 감응형 인터랙티브 제품을 개발합니다.',
    project1: {
      title: '물성의 확장',
      category: 'INDIVIDUAL PROJECT',
      aspect: '4:5',
      desc: '손길이 닿는 압력에 따라 탄력적으로 형태가 반응하며 빛의 강도를 조절하는 유연 소재 램프입니다.'
    },
    project2: {
      title: '앰비언트 미러 디스플레이',
      category: 'INDIVIDUAL PROJECT',
      aspect: '3:4',
      desc: '사용자의 시선 방향을 감지하여 필요한 일상 정보를 은은하게 투사하는 스마트 거울입니다.'
    }
  },
  'designer-13': {
    id: 'designer-13',
    name: '최지우',
    nameEn: 'JIWOO CHOI',
    photo: 'images/designers/designer-13.jpg',
    field: 'Smart Living',
    studentId: '60221413',
    email: 'jiwoo.choi@university.ac.kr',
    sns: '@jiwoo_living',
    bio: '기술이 공간 속에 보이지 않게 스며들어 일상의 피로를 덜어주는 스마트 리빙 솔루션을 연구합니다.',
    project1: {
      title: '유동하는 구조',
      category: 'INDIVIDUAL PROJECT',
      aspect: '16:10',
      desc: '주거 환경의 시간대별 변화에 맞춰 형태를 최적화하는 가변형 스마트 수납 & 파티션 시스템입니다.'
    },
    project2: {
      title: '바이오-스마트 케어 플랫폼',
      category: 'TEAM PROJECT',
      aspect: '4:3',
      desc: '생체 신호 데이터와 환경 센싱을 결합하여 맞춤형 건강 환경을 능동적으로 조성하는 스마트 케어 기기입니다.'
    }
  },
  'designer-14': {
    id: 'designer-14',
    name: '한예린',
    nameEn: 'YERIN HAN',
    photo: 'images/designers/designer-14.jpg',
    field: 'Interface & CMF',
    studentId: '60221414',
    email: 'yerin.han@university.ac.kr',
    sns: '@yerin_cmf',
    bio: '색상, 소재, 마감(CMF)이 만들어내는 섬세한 촉각적 경험과 시각적 조화를 디자인합니다.',
    project1: {
      title: '파편화된 시간',
      category: 'INDIVIDUAL PROJECT',
      aspect: '3:4',
      desc: '빛의 굴절과 반투명 아크릴 층을 활용하여 시간의 흐름을 은유적으로 표현한 아날로그-디지털 하이브리드 시계입니다.'
    },
    project2: {
      title: '바이오-스마트 케어 플랫폼',
      category: 'TEAM PROJECT',
      aspect: '4:3',
      desc: '생체 신호 데이터와 환경 센싱을 결합하여 맞춤형 건강 환경을 능동적으로 조성하는 스마트 케어 기기입니다.'
    }
  },
  'designer-15': {
    id: 'designer-15',
    name: '홍길동',
    nameEn: 'GILDONG HONG',
    photo: 'images/designers/designer-15.jpg',
    field: 'Mobility System',
    studentId: '60221415',
    email: 'gildong.hong@university.ac.kr',
    sns: '@gildong_mobility',
    bio: '대형 모빌리티와 도심 물류 시스템의 효율적인 이동 경험 및 하드웨어 아키텍처를 설계합니다.',
    project1: {
      title: '중첩의 미학',
      category: 'INDIVIDUAL PROJECT',
      aspect: '1:1',
      desc: '공기역학적 효율성을 극대화한 카본 복합재 기반 미래형 고속 딜리버리 드론입니다.'
    },
    project2: {
      title: '넥서스 모빌리티 에코시스템',
      category: 'TEAM PROJECT',
      aspect: '16:9',
      desc: '도심 속 자율주행 라스트마일 모빌리티와 통합 스마트 인프라를 연결하는 미래형 공공 운송 시스템입니다.'
    }
  },
  'designer-16': {
    id: 'designer-16',
    name: '황시우',
    nameEn: 'SIWOO HWANG',
    photo: 'images/designers/designer-16.jpg',
    field: 'Design Solution',
    studentId: '60221416',
    email: 'siwoo.hwang@university.ac.kr',
    sns: '@siwoo_design',
    bio: '다양한 사회적 문제의 해법을 디자인적 사고와 실용적 제품화 기술로 제시합니다.',
    project1: {
      title: '보이지 않는 연결',
      category: 'INDIVIDUAL PROJECT',
      aspect: '2:3',
      desc: '긴급 재난 상황에서 통신망이 단절되어도 서로를 구조할 수 있는 P2P 응급 통신 단말기입니다.'
    },
    project2: {
      title: '도시 자율주행 인터랙션',
      category: 'TEAM PROJECT',
      aspect: '16:9',
      desc: '탑승자와 도심 보행자가 직관적으로 소통할 수 있는 차세대 자율주행 차량 라이팅 및 공간 인터페이스입니다.'
    }
  }
};
