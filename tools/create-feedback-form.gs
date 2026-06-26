/**
 * Creates a no-login Google Form for the Pokemon GO beginner guide.
 *
 * How to run:
 * 1. Open https://script.google.com/
 * 2. Create a new project.
 * 3. Paste this whole file into Code.gs.
 * 4. Run createPokemonGoFeedbackForm().
 * 5. Approve the Google permission prompt.
 * 6. Copy the logged "Published form URL" and share it with Codex.
 */
function createPokemonGoFeedbackForm() {
  const form = FormApp.create("Pokemon GO 뉴비 가이드 피드백");

  form.setDescription(
    [
      "더 보고 싶은 컨텐츠, 궁금한 상황, 잘못된 정보가 있으면 자유롭게 남겨주세요.",
      "로그인 없이 제출할 수 있도록 이메일 수집과 1회 응답 제한은 꺼둡니다.",
    ].join("\n")
  );

  form.setCollectEmail(false);
  form.setLimitOneResponsePerUser(false);
  form.setAllowResponseEdits(false);
  form.setShowLinkToRespondAgain(true);
  form.setPublishingSummary(false);
  form.setConfirmationMessage(
    "의견 감사합니다. 다음 페이지 업데이트 때 우선순위를 보고 반영해볼게요."
  );

  form
    .addParagraphTextItem()
    .setTitle("보고 싶은 컨텐츠")
    .setHelpText("예: 레이드 보스별 공략, 포켓몬 보관 기준, 아이템 부족 해결법")
    .setRequired(true);

  form
    .addTextItem()
    .setTitle("현재 트레이너 레벨")
    .setHelpText("예: 27")
    .setRequired(false);

  form
    .addParagraphTextItem()
    .setTitle("궁금한 상황")
    .setHelpText("지금 막히는 상황을 편하게 적어주세요.")
    .setRequired(true);

  form
    .addCheckboxItem()
    .setTitle("관심 주제")
    .setChoiceValues([
      "레이드",
      "포켓몬 보관 기준",
      "아이템 부족",
      "GO 배틀리그",
      "로켓단",
      "이벤트/커뮤니티데이",
      "초보 루틴",
      "기타",
    ])
    .setRequired(false);

  form
    .addParagraphTextItem()
    .setTitle("잘못된 정보 제보")
    .setHelpText("틀린 내용, 오래된 정보, 표현이 헷갈리는 부분이 있으면 적어주세요.")
    .setRequired(false);

  form
    .addTextItem()
    .setTitle("닉네임")
    .setHelpText("선택 입력입니다.")
    .setRequired(false);

  const spreadsheet = SpreadsheetApp.create("Pokemon GO 뉴비 가이드 피드백 응답");
  form.setDestination(FormApp.DestinationType.SPREADSHEET, spreadsheet.getId());

  Logger.log("Published form URL: " + form.getPublishedUrl());
  Logger.log("Edit form URL: " + form.getEditUrl());
  Logger.log("Responses spreadsheet URL: " + spreadsheet.getUrl());

  return {
    publishedFormUrl: form.getPublishedUrl(),
    editFormUrl: form.getEditUrl(),
    responsesSpreadsheetUrl: spreadsheet.getUrl(),
  };
}
