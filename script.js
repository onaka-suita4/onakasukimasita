// テーマごとのパステルカラー
const themeColors = {
  self: "#ffd6e8",      // ピンク
  school: "#e6d9ff",    // ラベンダー
  food: "#fff0b3",      // クリーム
  travel: "#d6f2ff",    // 水色
  hobby: "#d6ffe8",     // ミント
  friends: "#ffe6d6",   // ピーチ
  culture: "#f2e6ff",   // すみれ
  future: "#e6fff5",    // ライトミント
  holiday: "#fff2ff",   // ベビーピンク
  dream: "#e6f0ff"      // ベビーブルー
};

// 10テーマ×各10問（JP/EN/CN）
const questions = {

self: {
  jp: ["名前は？","何歳？","どこ住み？","兄弟は？","好きな色は？","性格は？","朝型？夜型？","一言でいうと自分はどんな人？","得意なことは？","苦手なことは？"],
  en: ["Your name?","How old?","Where live?","Siblings?","Favorite color?","Personality?","Morning or night?","Describe yourself","Good at?","Bad at?"],
  cn: ["你叫什么？","几岁？","住哪里？","有兄弟吗？","喜欢颜色？","性格如何？","早型还是夜猫？","一句话形容自己","擅长什么？","不擅长什么？"]
},

school: {
  jp: ["学校楽しい？","好きな授業は？","嫌いな授業は？","部活は何してる？","友達多い？","先生優しい？","テスト得意？","宿題多い？","好きな場所は？","将来の夢は？"],
  en: ["Enjoy school?","Favorite subject?","Least favorite?","Club?","Many friends?","Kind teachers?","Good at tests?","Much homework?","Favorite place?","Future dream?"],
  cn: ["学校开心？","喜欢什么课？","讨厌什么课？","社团是？","朋友多吗？","老师温柔？","擅长考试？","作业多？","最爱地点？","未来梦想？"]
},

food: {
  jp: ["好きな食べ物は？","嫌いな食べ物は？","甘いor辛い　どっちが好き？","和食好き？","中華好き？","外食派？","自炊する？","好きなお菓子は？","ラーメン派？","今食べたい物は何？"],
  en: ["Favorite food?","Hate food?","Sweet or spicy?","Like Japanese?","Like Chinese?","Eat out?","Cook?","Favorite snack?","Ramen?","What eat now?"],
  cn: ["最爱食物？","讨厌食物？","甜还是辣？","喜欢日料？","喜欢中餐？","外食？","会做饭？","最爱零食？","拉面？","现在想吃？"]
},

travel: {
  jp: ["行きたい国は？","海or山？","一人旅する？","国内or海外？","飛行機好き？","思い出の旅は？","写真撮る？","人生で大事なことは？","現地で何食べる？","次の旅は？"],
  en: ["Dream country?","Sea or mountain?","Solo trip?","Domestic or abroad?","Like planes?","Best trip?","Take photos?","Most important?","Local food?","Next trip?"],
  cn: ["想去国家？","海还是山？","能独旅？","国内还是国外？","喜欢飞机？","难忘旅行？","爱拍照？","最重要？","当地美食？","下次去哪？"]
},

hobby: {
  jp: ["趣味は？","運動する？","音楽好き？","どんな音楽？","ゲームする？","本読む？","映画好き？","アニメ見る？","休日の趣味は？","何に挑戦したい？"],
  en: ["Your hobby?","Do sports?","Like music?","What type?","Play games?","Read books?","Like movies?","Watch anime?","Weekend hobby?","Want to try?"],
  cn: ["爱好？","做运动？","爱音乐？","什么类型？","玩游戏？","读书？","看电影？","看动漫？","周末爱好？","想尝试？"]
},

friends: {
  jp: ["親友いる？","どんな友達？","何して遊ぶ？","ケンカする？","仲直り方法は？","理想の友達は？","連絡LINE？","毎日会う？","プレゼントしたことあるものは？","？"],
  en: ["Best friend?","What kind?","What do together?","Ever fight?","How make up?","Ideal friend?","Use LINE?","Meet daily?","Gift give?","Important thing?"],
  cn: ["有好朋友？","什么样？","一起做啥？","吵过架？","怎么和好？","理想朋友？","用LINE？","天天见？","送啥礼物？","最重要？"]
},

culture: {
  jp: ["日本文化好き？","中国文化知ってる？","祭り行く？","伝統料理は？","着物好き？","言語学ぶの好き？","好きな行事は？","海外興味ある？","自分の国誇りある？","文化体験したことある？"],
  en: ["Like Japanese culture?","Know Chinese culture?","Go to festivals?","Traditional food?","Like kimono?","Languages fun?","Favorite event?","Interested abroad?","Proud?","Culture experience?"],
  cn: ["喜欢日文化？","了解中文化？","去节日？","传统美食？","喜欢和服？","语言有趣？","最爱活动？","对国外感兴趣？","骄傲吗？","文化体验？"]
},

future: {
  jp: ["10年後の予定は？","住みたい場所は？","やりたい仕事は？","結婚したい？","留学したい？","世界旅行したい？","有名になりたい？","幸せとは？","お金or夢？","不安は？"],
  en: ["In 10 years?","Where live?","Dream job?","Want marry?","Study abroad?","World trip?","Want fame?","What is happiness?","Money or dream?","Worry?"],
  cn: ["十年后？","想住哪？","理想工作？","想结婚？","想留学？","环游世界？","想出名？","幸福是什么？","钱还是梦？","担心啥？"]
},

holiday: {
  jp: ["休日何する？","寝るor外出？","朝早い？","カフェ行く？","友達と会う？","家族と過ごしてる？","映画見る？","勉強する？","スマホつつく時間長い？","理想の休日は？"],
  en: ["What do?","Sleep or out?","Wake early?","Go cafe?","Meet friends?","Family time?","Watch movie?","Study?","Phone long?","Ideal holiday?"],
  cn: ["休息日干嘛？","睡觉还是出门？","起得早？","去咖啡？","见朋友？","陪家人？","看电影？","学习？","玩手机久？","理想假日？"]
},

dream: {
  jp: ["将来の夢は？","なりたい職業は？","安定or挑戦？","海外就職したい？","大企業or個人？","好き→仕事？","リーダー向き？","チーム派？","お金orやりがい？","理想の働き方は？"],
  en: ["Future dream?","Desired job?","Stable or challenge?","Work abroad?","Big company or solo?","Hobby as job?","Leader type?","Team or solo?","Money or meaning?","Ideal work?"],
  cn: ["未来梦想？","想做职业？","稳定还是挑战？","国外工作？","大公司还是个人？","爱好当工作？","适合领导？","团队还是个人？","钱还是成就？","理想工作？"]
}

};

document.getElementById("drawBtn").addEventListener("click", function() {

  const lang = document.getElementById("language").value;
  const theme = document.getElementById("theme").value;

  // 効果音を鳴らす
  const sound = document.getElementById("clickSound");
  sound.currentTime = 0;
  sound.play();

  // ランダム質問
  const list = questions[theme][lang];
  const randomQ = list[Math.floor(Math.random() * list.length)];

  const bubble = document.getElementById("bubble");
  bubble.innerText = randomQ;

  // テーマごとに色を変更
  bubble.style.background = themeColors[theme];
  document.styleSheets[0].insertRule(
    `.bubble:after { border-color: ${themeColors[theme]} transparent transparent transparent; }`,
    document.styleSheets[0].cssRules.length
  );
});
