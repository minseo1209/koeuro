import React, { useState, useEffect } from 'react';

function Madang() {
  const [agree, setAgree] = useState(false);
  const [termsViewed, setTermsViewed] = useState(false);

  useEffect(() => {
    const submitBtn = document.getElementById('submitBtn');
    const termsBtn = document.getElementById('terms');
    const message = document.getElementById('message');

    const handleMouseEnter = () => {
      if (submitBtn.disabled || termsBtn.disabled) {
        message.style.display = 'block';
      }
    };

    submitBtn.addEventListener('mouseenter', handleMouseEnter);
    termsBtn.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      submitBtn.removeEventListener('mouseenter', handleMouseEnter);
      termsBtn.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  useEffect(() => {
    const submitBtn = document.getElementById('submitBtn');
    if (agree && termsViewed) {
      submitBtn.disabled = false;
      submitBtn.style.backgroundColor = '';
    } else {
      submitBtn.disabled = true;
      submitBtn.style.backgroundColor = 'gray';
    }
  }, [agree, termsViewed]);

  const handleAgreeChange = (event) => {
    setAgree(event.target.checked);
    const termsBtn = document.getElementById('terms');
    if (event.target.checked) {
      termsBtn.style.display = 'inline';
      termsBtn.disabled = false;
    } else {
      termsBtn.style.display = 'none';
      setTermsViewed(false);
      document.getElementById('hide').style.display = 'none';
    }
  };

  const viewTerms = () => {
    setTermsViewed(true);
    document.getElementById('hide').style.display = 'block';
  };

  function handleFormSubmit() {
    console.log('Form submit handler called');
    window.location.href = 'https://esignon.page.link/gjk6u3dxyPRvJzbU6';
  }

  return (
    <div className="container mt-5">
      <div className="main"></div>
      <div>
        <h3 className="AboutTitle">마케팅 당장에서 시작하세요.</h3>
        <h2 className="AboutBrandStory">마당 문의</h2>
        <div className="OnelineIntroductison">
          <strong>
            마당은 소상공인을 위해 마케팅, 디자인, 웹을 기획 제공하는
            서비스입니다.
          </strong>
        </div>
      </div>
      <img
        src="../assets/images/banner/MADANG.jpg"
        alt="MADANG"
        className="MadangImg"
      />
      <div>
        <div id="hide" style={{ display: 'none' }}>
          <div className="madangBox">
            <div style={{ textAlign: 'center', fontWeight: '900' }}>
              <h5>주식회사 코유로 마케팅 제휴 약관</h5>
            </div>
            <div className="Marketing">
              <p className="madangContents">
                (이하 “파트너”이라 칭한다) ㈜코유로 [MADANG](이하 “솔루션사”이라
                한다) 는 아래와 같이 마케팅 제휴 계약을 체결한다
              </p>
              <b>제 1조 (목적)</b>
              <p className="madangContents">
                본 계약은 “파트너”가 “솔루션사”에게 회사(제품)의 마케팅 업무를
                의뢰하고 “솔루션사”의 마케팅 업무 수행 및 이와 관련된 권리
                의무사항을 규율을 목적으로 한다.
              </p>
              <b>제 2조 (수행 업무)</b>
              <p className="madangContents">
                1. 본 계약에 의해 “솔루션사”가 수행하는 마케팅 업무는 기획,
                디자인, 매체 집행, 결과의 캠페인 절차상 기획 업무 및 특정 영역에
                한정하여 수행한다.
              </p>
              <p className="madangContents">
                2. 본 계약에 따른 마케팅 기획 업무의 범위는 별도의 사유가 없는
                한 솔루션사의 제공 서비스 업무 내용에 대한 상호 협의로 대신하며
                당해 업무의 기본 계약은 본 계약서의 제반 조항 및 별첨 내용에
                따른다.
              </p>
              <b>제 3조 (계약기간)</b>
              <p className="madangContents">
                1. 본 계약의 계약기간은 ( ) 개월로 한다.
              </p>
              <p className="madangContents">
                2. 계약 연장을 원할 경우 계약기간 만료일로부터 2주 이전에 상호
                협의하여 새로운 계약을 진행하도록 한다.
                <br />* 계약 연장 시 본 계약과 동일한 기간으로 연장된다.
              </p>
              <b>제 4조 (계약대금)</b>
              <p className="madangContents">
                1. “파트너”는 상기 2조에 따른 “솔루션사”의 제공 내용에 대하여
                매월 _____________원 ( 일금 _____________ 원 ) VAT 별도의 비용을
                선 지급한다.
              </p>
              <p className="madangContents">
                2. “솔루션사”는 비용이 선 지급되지 않을 경우 업무를 중단할 수
                있다.
              </p>
              <p className="madangContents">
                3. 마케팅 집행 시 필요한 실비(마케팅 매체 집행 비용)는 별도
                비용이 발생한다.
              </p>
              <b className="madangTitle">제 5조 (추가업무)</b>
              <p className="madangContents">
                1. 본 계약 외 ”파트너”가 “솔루션사”에게 실질적인 추가 업무를
                희망하는 경우 상호 협의하여 진행할 수 있다.
              </p>
              <p className="madangContents">
                2. 1항의 경우 “솔루션사”는 실질적인 마케팅 집행 시 필요한 견적을
                사전에 “파트너”에게 전달하고 비용 선 지급 시 해당 업무를
                진행하기로 한다.
              </p>
              <b className="madangTitle">제 6조 (지적재산권)</b>
              <p className="madangContents">
                1. “솔루션사”가 제공한 최종 결과물에 대한 저작권은 “파트너”에게
                부여되는 것으로 한다.
                <br />
                단, “파트너”가 채택하지 않은 내용에 대한 저작권은 “솔루션사”에게
                귀속 되며 “파트너”는 이에 대한 모든 권리를 포기해야 한다.
                <br />
                a. “솔루션사”가 “파트너”에게 제공한 전략 기획, 광고 소재 등의
                콘텐츠는 사용이 가능하며 “솔루션사”의 레퍼런스로 온/
                오프라인에서 활동 된다.
                <br />
                b. 단, 레퍼런스 용으로 파트너 사와 사전 공유가 없던 신규 내용은
                사용 불가하다.
              </p>
              <p className="madangContents">
                2. 계약기간 내 기록된 데이터(콘텐츠, 성과, 매출액 등)는
                “솔루션사”가 개발하고 있는 S/W앱 내에서 데이터로 활용할 수 있다.
              </p>
              <p className="madangContents">
                3. “솔루션사”는 본 계약에 따라 “파트너”에게 제공한 결과물이 제
                3자의 지식재산권 및 기타 권리를 침해하지 않음을 보장 하며, 이를
                위반하여 “파트너”가 제 3자와 분쟁이 발생할 경우, “솔루션사”의
                책임과 비용으로 이를 해결하여야 한다.
                <br />
                a. “파트너”는 “솔루션사”가 제공하는 결과물의 사용권 및 저작권
                범위를 인지해야 한다.
                <br />
                b. 단, “솔루션사”가 제공한 결과물을 계약 종료 이후 사전 협의
                없이 2차 가공, 목적 및 사용처 변경 등을 임의로 진행할 경우 이로
                인해 발생하는 문제에 대해서는 책임지지 아니한다.
              </p>
              <b className="madangTitle">
                제 7조 (권리 의무 위임 및 양도 금지)
              </b>
              <p className="madangContents">
                본 계약의 각 당사자는 상대방의 서면에 의한 사전 동의 없이 본
                계약에 관한 권리 및 의무의 전부 또는 일부를 제3자에게 위임하거나
                양도할 수 없으며 본 계약과 관련한 채권을 양도하거나 담보로
                제공할 수 없다.
              </p>
              <b className="madangTitle">제 8조 (계약의 변경 및 해지)</b>
              <p className="madangContents">
                1. “파트너”와 “솔루션사”는 상호 합의에 의해서 계약 내용을 변경
                또는 수정할 수 있다.
              </p>
              <p className="madangContents">
                2. 본 계약의 각 당사자는 다음 각 호 중 하나의 사유가 발생할 경우
                별도의 최고 없이 상대방에 대한 서면통보로써 본 계약을 해제 또는
                해지할 수 있다.
                <br />
                a. 스스로 또는 제3자로부터 파산이나 회생절차 개시, 워크아웃 기타
                이와 유사한 절차의 신청이 있거나 해산, 청산에 대한 결의가 있는
                경우.
                <br />
                b. 가압류, 가처분, 압류, 경매신청, 체납처분 등을 받아 본 계약의
                의무를 불이행하는 경우.
                <br />
                c. 본 조 각 항 외에 “파트너” 나 “솔루션사” 중 일방이 본 계약을
                위반하여 해지하는 경우, 상대방이 지출한 변호사 비용을 포함하여
                상대방의 모든 손해를 배상하여야 한다.
                <br />
                d. 별첨에 첨부되어 있는 MADANG의 기획, 디자인, 집행 업무가
                진행되지 않을 경우.
              </p>
              <b className="madangTitle">제 9조 (불가항력)</b>
              <p className="madangContents">
                전쟁, 천재지변 등 각 당사자의 합리적인 지배를 넘어서는 사건이
                발생하거나 법령 또는 정부의 규제로 인하여 본 계약상의 의무가
                불이행되는 경우, 그 범위를 한도로 상대방에게 그 책임을 지지
                않는다.
              </p>
              <b className="madangTitle">제 10조 (비밀 준수)</b>
              <p className="madangContents">
                1. “솔루션사”는 “파트너”에게 제공한 결과물은 타 파트너에게
                공개할 수 있으며, 결과물의 일정 부분을 활용하여 영업활동에
                활용할 수 있다.
              </p>
              <p className="madangContents">
                2. 그 외 당사자 쌍방은 본 계약과 관련하여 취득한 상대방의 경영
                정보와 자료를 법령에 의하지 아니하고는 제3자에게 누설하지
                않는다.
              </p>
              <p className="madangContents">
                3. 본 계약상 권리 의무는 당사자 쌍방의 합의 없이 제3자에게
                양도할 수 없다.
              </p>
              <b className="madangTitle">제 11조 (손해배상)</b>
              <p className="madangContents">
                본 계약이 해지되거나 당사자 일방이 본 계약을 위반하는 경우, 귀책
                사유 있는 당사자는 이로 인하여 상대방에게 발생하는 모든 손해를
                배상하여야 한다.
              </p>
              <b>제 12조 (위약금)</b>
              <p className="madangContents">
                1. “솔루션사”의 계약불이행이나, 제8조의 사유가 발생하지
                않았음에도 “파트너”가 임의로 계약을 해지하는 경우, 잔여기간에
                대한 계약대금의 60%를 “솔루션사”에게 일괄 지급하여야 한다.
              </p>
              <p className="madangContents">
                2. 명시된 위약금은 계약 해지 통보 후 7일 이내 지급을 완료하여야
                한다.
              </p>
              <p className="madangContents">
                3. 단, “솔루션사”의 계약 불이행이나 제 8조의 “솔루션사” 사유가
                발생하였을 경우 해당 월 입금은 전액 “파트너”에게 반환한다.
              </p>
              <b>제 13조 (분쟁 해결)</b>
              <p className="madangContents">
                1. 본 계약과 관련하여 양 당사자간의 분쟁이 발생한 경우,
                원칙적으로 “파트너”와 “솔루션사” 상호간의 합의에 의해 해결한다.
              </p>
              <p className="madangContents">
                2. 제1항에도 불구하고 분쟁이 해결되지 않을 경우 “솔루션사”의
                주소지 관할 지방법원을 그 관할로 하여 재판함으로써 해결한다.
              </p>
              <b>제 14조 (기타사항)</b>
              <p className="madangContents">
                1. 계약의 당사자는 본 계약의 내용을 신의성실에 의거하여
                준수하여야 한다.
              </p>
              <p className="madangContents">
                2. 계약 기간 중 계약의 변경은 당사자의 서면 합의에 의해서만
                변경될 수 있으며, 서면날인 된 문서를 본 계약서의 말미에
                첨부한다.
              </p>
              <p className="madangContents">
                3. 본 계약서에서 명시되지 않은 부분에 대하여는 관련 법규 및
                상관습에 따르기로 한다.
              </p>
              <b>제 15조 (특약사항)</b>
              <p className="madangContents">
                1. “솔루션사”는 업무 진행 상황에 대한 판단 하에 소통이 원활하지
                않거나 과한 업무를 반복적 요구할 경우 “파트너”와 계약을 해지할
                수 있다.
              </p>
              <p className="madangContents">
                2. 단, “파트너”와 상호 소통을 충분히 진행하며 제 15조 1항에 따라
                본 계약이 해지되는 경우에는 제 12조 위약금에 대한 비용이
                발생하지 아니한다.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="assent">
            <div>
              <strong className="InstructionsTitle mb-30">
                개인정보 수집 및 이용 동의 안내
              </strong>
            </div>
            <div className="instructions-box">
              <p className="mb-30" style={{ fontSize: '13px' }}>
                회사는 정보 주체의 개인정보를 수집 및 이용하는 목적으로 아래와
                같은 항목을 수집하고 있습니다. 개인정보의 수집 및 이용은 회원
                가입 및 관리, 재화 또는 서비스 제공, 고충 처리 등의 목적으로
                이루어지며, 아래의 내용에 동의하신다면 버튼을 클릭하여 다음
                단계로 진행할 수 있습니다.
              </p>
              <p className="mb-30" style={{ fontSize: '13px' }}>
                1. 수집하는 개인정보 항목
                <br />
                - 필수항목 : 이름, 연락처, 이메일 주소
                <br />- 선택항목 : 회사명, 직책
              </p>
              <p className="mb-30" style={{ fontSize: '13px' }}>
                2. 개인정보의 수집 및 이용 목적
                <br />- 회원 가입 의사 확인, 회원제 서비스 제공에 따른 본인 식별
                및 인증, 회원 자격 유지 및 관리, 서비스 부정 이용 방지, 각종
                고지 및 통지, 고충 처리 등을 목적으로 개인정보를 이용합니다.
              </p>
              <p className="mb-30" style={{ fontSize: '13px' }}>
                3. 개인정보의 보유 및 이용 기간
                <br />- 개인정보는 수집 및 이용 목적이 달성된 후에는 해당 정보를
                지체 없이 파기합니다.
              </p>
              <p className="mb-30" style={{ fontSize: '13px' }}>
                4. 동의를 거부할 권리 및 동의 거부에 따른 불이익
                <br />- 귀하는 개인정보 수집 및 이용에 대한 동의를 거부할 권리가
                있습니다. 그러나 동의를 거부할 경우 서비스 이용에 제한이 있을 수
                있습니다.
              </p>
              <p>
                <strong className="madangTitle">4. 개인정보 보호책임자</strong>
              </p>
              <p>
                - 회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보
                처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와
                같이 개인정보 보호책임자를 지정하고 있습니다.
              </p>
              <table>
                <thead>
                  <tr>
                    <th className="Instructions_table_th">
                      개인정보 보호책임자
                    </th>
                    <th className="Instructions_table_th">
                      개인정보 민원처리 담당부서
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="Instructions_table_td">
                      성명 : 이름
                      <br />
                      직책 : 직함
                      <br />
                      연락처 : 번호
                      <br />
                      이메일 : koeuro@hutengroup.com
                    </td>
                    <td className="Instructions_table_td">
                      부서명 : 부서
                      <br />
                      이메일 : koeuro@hutengroup.com
                    </td>
                  </tr>
                </tbody>
              </table>
              <p>
                이용자께서는 회사의 서비스를 이용하시면서 발생한 모든 개인정보
                보호 관련 문의, 불만처리, 피해구제 등에 관한 사항을 개인정보
                민원처리 담당부서 및 책임자에게 문의하실 수 있습니다. 회사는
                이용자의 문의에 대해 지체 없이 답변 및 처리해드릴 것입니다.
              </p>
            </div>
          </div>
        </div>

        <form>
          <div className="form-group" id="checkBox">
            <input
              type="checkbox"
              id="agree"
              checked={agree}
              onChange={handleAgreeChange}
            />
            <label htmlFor="agree" className="agreement">
              개인정보 수집 및 이용에 동의합니다.
            </label>
          </div>
          <div id="buttonContainer">
            <button
              id="submitBtn"
              type="button"
              className="btn btn-primary"
              style={{ backgroundColor: 'gray' }}
              onClick={handleFormSubmit}
            >
              신청하러 가기
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={viewTerms}
              id="terms"
              style={{ display: 'none', backgroundColor: agree ? '' : 'gray' }}
            >
              약관보기
            </button>
          </div>
          <div style={{ height: '9em' }}>
            <div id="message" style={{ display: 'none' }}>
              <p>
                신청을 진행하려면 다음 단계를 완료해야 합니다 : <br />
                1. 개인정보 이용동의를 체크해주세요. <br />
                2. 약관을 확인해주세요 <br />
                3. "신청하기" 버튼을 클릭해주세요.
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Madang;
