import Image from "next/image";
import styles from "./page.module.css";

async function getResumeInfo() {
  const res = await fetch('https://raw.githubusercontent.com/HoJungwoo/first-deploy/refs/heads/main/src/service/resume_general_info_service.json');
  // API 응답이 성공적인지 확인
  if (!res.ok) {
    // 응답이 실패하면 오류를 던져 Next.js가 오류 페이지를 보여주도록 함
    throw new Error('Failed to fetch data');
  }
  return res.json();

  // // 로컬 JSON 파일 import
  // const resumeData = await import('../service/resume_general_info_service.json');
  // return resumeData.default;

}


async function getResumePortfolio() {
  const res = await fetch('https://raw.githubusercontent.com/HoJungwoo/first-deploy/refs/heads/main/src/service/resume_portfolio.json');
  // API 응답이 성공적인지 확인
  if (!res.ok) {
    // 응답이 실패하면 오류를 던져 Next.js가 오류 페이지를 보여주도록 함
    throw new Error('Failed to fetch portfolio data');
  }
  return res.json();
  
  // // 로컬 JSON 파일 import
  // const portfolioData = await import('../service/resume_portfolio.json');
  // return portfolioData.default;


}

export default async function Home() {

  // getResumeInfo 함수를 호출하여 데이터를 기다림
  const data_resumeInfo = await getResumeInfo();
  const data_resumePortfolio = await getResumePortfolio();

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {/* 헤더 섹션 - 이름과 프로필 사진 */}
        <header className={styles.header}>
          <div className={styles.profileSection}>
            <Image
              className={styles.profileImage}
              src="/흑백.png"
              alt="프로필 사진"
              width={200}
              height={200}
              priority
            />
            <div className={styles.nameSection}>
              <h1 className={styles.name}>{data_resumeInfo.name}</h1>
              <p className={styles.greeting}>안녕하세요</p>
              <p className={styles.description}>끊임없는 학습과 도전으로 꾸준히 성장하길 지향하는 {data_resumeInfo.name}입니다.</p>
            </div>
          </div>
          
          {/* 연락처 정보 */}
          <div className={styles.contactInfo}>
            <div className={styles.contactItem}>
              <span className={styles.icon}>✉️</span>
              <span>{data_resumeInfo.email}</span>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.icon}>📱</span>
              <span>{data_resumeInfo.phone}</span>
            </div>
            <div className={styles.contactItem}>
              <a href={data_resumeInfo.github} target="_blank" rel="noopener noreferrer" className={styles.githubButton}>
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </header>

        {/* 메인 콘텐츠 */}
        <div className={styles.content}>
          {/* 왼쪽 컬럼 */}
          <div className={styles.leftColumn}>
            {/* 학력사항 */}
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>학력사항</h2>
              <div className={styles.sectionContent}>
                <div className={styles.educationItem}>
                  <p className={styles.period}>동국대학교</p>
                  <p className={styles.period}>전자전기공학부 학사 졸업</p>
                  <p className={styles.detail}>학점 3.68/4.5 (전공학점: 3.91/4.5)</p>
                  <p className={styles.date}>2018.03 ~ 2023.08</p>
                </div>
                <div className={styles.educationItem}>
                  <p className={styles.period}>동국대학교</p>
                  <p className={styles.period}>미래전지융합공학과 지능형 ESS 융합전공 석사 졸업</p>
                  <p className={styles.detail}>학점 4.5/4.5</p>
                  <p className={styles.date}>2023.09 ~ 2025.02</p>
                </div>
              </div>
            </section>

            {/* 연구 성과 */}
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>연구 성과</h2>
              <div className={styles.sectionContent}>
                <div className={styles.researchItem}>
                  <h4 className={styles.subTitle}>학위논문</h4>
                  <p>CNN-Transformer 융합 모델을 활용한 전기자동차 이차전지의 SOC 추정 성능 향상에 관한 연구</p>
                </div>
                
                <div className={styles.researchItem}>
                  <h4 className={styles.subTitle}>해외학술발표</h4>
                  <p>A highly effective data modeling approach for transformers based on 1D CNN methods for improving SOC estimation accuracy</p>
                </div>

                <div className={styles.researchItem}>
                  <h4 className={styles.subTitle}>특허 출원</h4>
                  <ul className={styles.patentList}>
                    <li>전기 자동차용 배터리 SOH 추정에 특화된 트랜스포머 구조 기반 시계열 데이터 예측 알고리즘 (출원번호:10-2023-0180617)</li>
                    <li>분기 연결 구조와 신 개형 활성화 함수를 적용한 리튬이온 전지의 SOC 추정 특화 시계열 데이터 합성곱 딥 러닝 모델 (출원번호:10-2023-0180618)</li>
                    <li>Denoising 필터 및 보상 기법과 딥러닝 알고리즘을 이용한 높은 정확도를 가진 SOC 추정 방법 (출원번호:10-2023-0180619)</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 자격증 및 어학사항 */}
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>자격증 및 어학사항</h2>
              <div className={styles.sectionContent}>
                <div className={styles.skillItem}>
                  <p>• ADsP</p>
                  <p>• AWS Certification Cloud Practitioner</p>
                  <p>• 워드프로세서</p>
                  <p>• 정보기기운용기능사</p>
                  <p>• TOEIC Speaking - IH(150)</p>
                </div>
              </div>
            </section>
          </div>

          {/* 오른쪽 컬럼 */}
          <div className={styles.rightColumn}>
            {/* 기술 스택 */}
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>기술 스택</h2>
              <div className={styles.sectionContent}>
                <div className={styles.techStackGrid}>
                  <div className={styles.techItem}>
                    <div className={styles.techIcon}>
                      <Image
                        src="/c.svg"
                        alt="C"
                        width={80}
                        height={80}
                      />
                    </div>
                  </div>
                  <div className={styles.techItem}>
                    <div className={styles.techIcon}>
                      <Image
                        src="/C++.png"
                        alt="C++"
                        width={80}
                        height={80}
                      />
                    </div>
                  </div>
                  <div className={styles.techItem}>
                    <div className={styles.techIcon}>
                      <Image
                        src="/python.png"
                        alt="Python"
                        width={80}
                        height={80}
                      />
                    </div>
                  </div>
                  <div className={styles.techItem}>
                    <div className={styles.techIcon}>
                      <Image
                        src="/Matlab.png"
                        alt="MATLAB"
                        width={80}
                        height={80}
                      />
                    </div>
                  </div>
                  <div className={styles.techItem}>
                    <div className={styles.techIcon}>
                      <Image
                        src="/pytorch.png"
                        alt="PyTorch"
                        width={80}
                        height={80}
                      />
                    </div>
                  </div>
                  <div className={styles.techItem}>
                    <div className={styles.techIcon}>
                      <Image
                        src="/tensorflow.png"
                        alt="TensorFlow"
                        width={80}
                        height={80}
                      />
                    </div>
                  </div>
                  <div className={styles.techItem}>
                    <div className={styles.techIcon}>
                      <Image
                        src="/React.png"
                        alt="React"
                        width={80}
                        height={80}
                      />
                    </div>
                  </div>
                  <div className={styles.techItem}>
                    <div className={styles.techIcon}>
                      <Image
                        src="/java.svg"
                        alt="Java"
                        width={80}
                        height={80}
                      />
                    </div>
                  </div>
                  <div className={styles.techItem}>
                    <div className={styles.techIcon}>
                      <Image
                        src="/Spring.png"
                        alt="Spring"
                        width={80}
                        height={80}
                      />
                    </div>
                  </div>
                  <div className={styles.techItem}>
                    <div className={styles.techIcon}>
                      <Image
                        src="/aws.png"
                        alt="AWS"
                        width={80}
                        height={80}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 교육 사항 */}
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>교육 사항</h2>
              <div className={styles.sectionContent}>
                <div className={styles.educationItem}>
                  <p className={styles.period}>LG CNS AM INSPIRE CAMP (2025.07 ~ 2026.01)</p>
                  <p className={styles.detail}>AI 서비스 구현에 필요한 프론트엔드와 백엔드 지식을 학습하고, 클라우드·컨테이너·DevOps 등 MSA 기반 인프라 기술을 중점적으로 학습하였습니다.</p>
                </div>
                <div className={styles.educationItem}>
                  <p className={styles.period}>[카인사이드아웃] 자동차 구조학 강의 수강 - 현대엔지비</p>
                  <p className={styles.date}>2025.02 ~ 2025.03</p>
                  <p className={styles.detail}>자동차 구조, 내연기관, 전기차 구조 관련 교과목을 수강하며 차량 시스템의 작동 원리와 구조적 차이를 학습하였습니다. 내연기관과 전기 파워트레인의 구성 요소와 특성을 비교하며 친환경차 기술의 기초를 다졌습니다.</p>
                </div>
              </div>
            </section>

            {/* 주요프로젝트 */}
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>주요프로젝트</h2>
              <div className={styles.sectionContent}>

                {/* AI 기반 배터리 상태 추정 프로젝트 */}
                <div className={styles.projectCategory}>
                  <h3 className={styles.projectCategoryTitle}>
                    {data_resumePortfolio.project_bms_AI.title}
                    <a href={data_resumePortfolio.project_bms_AI.url} target="_blank" rel="noopener noreferrer" className={styles.githubLink}>
                      GitHub
                    </a>
                  </h3>
                  
                  <div className={styles.projectItem}>
                    <p className={styles.projectTitle}>배터리 데이터 맞춤 AI 모델 설계를 통한 48%의 성능 향상</p>
                    <p className={styles.date}>(2023.09 ~ 2024.09)</p>
                    <p className={styles.projectDetail}>전압과 전류 데이터의 상관관계를 기반으로한, '전류의 변화량'을 사용하는 딥러닝 모델 설계를 통해 추정 정확도 향상은 물론 기존 모델보다 경량화된 모델을 개발하였습니다.</p>
                  </div>

                  <div className={styles.projectItem}>
                    <p className={styles.projectTitle}>CNN-Transformer 융합 모델을 통한 고성능 배터리 상태 추정</p>
                    <p className={styles.date}>(2024.01 ~ 2025.01)</p>
                    <p className={styles.projectDetail}>지역적 정보 처리에 강점을 지닌 CNN을 Transformer 네트워크의 선형 계층 대신 적용함으로써, 시퀀스 데이터의 지역적 특성을 효과적으로 추출하는 배터리 상태 추정 모델을 개발하였습니다.</p>
                  </div>
                </div>

                {/* 임베디드 관련 프로젝트 */}
                <div className={styles.projectCategory}>
                  <h3 className={styles.projectCategoryTitle}>임베디드 관련 프로젝트</h3>
                  
                  <div className={styles.projectItem}>
                    <p className={styles.projectTitle}>임베디드 시스템 최적화 프로젝트</p>
                    <p className={styles.date}>(2022.09 ~ 2022.12)</p>
                    <p className={styles.projectDetail}>'임베디드신호처리시스템' 전공수업에서 STM32 프로세서를 이용하여 실시간 음성 신호 처리 임베디드 시스템 최적화 프로젝트를 진행하며, CPU 과부하 문제를 효과적으로 해결하였습니다.</p>
                    <p className={styles.projectDetail}>DMA 방식과 ARM의 arm_math.h 라이브러리를 활용하여 루프 지연 시간을 기존 평균 200µs에서 80µs로 60% 이상 단축하고, FFT 연산 속도를 3배 이상 개선하여 실시간 신호 처리율 100%를 확보했습니다.</p>
                  </div>

                  <div className={styles.projectItem}>
                    <p className={styles.projectTitle}>마이크로프로세서 창작 프로젝트</p>
                    <p className={styles.date}>(2022.03 ~ 2022.07)</p>
                    <p className={styles.projectDetail}>MSP430 프로세서를 이용한 팀 프로젝트에서 스위치 인터럽트의 채터링 현상으로 인한 시스템 오작동 문제를 소프트웨어적 디바운스 코드 적용으로 해결하여 하드웨어 문제를 소프트웨어로 보완한 부분을 높게 평가받았습니다.</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}