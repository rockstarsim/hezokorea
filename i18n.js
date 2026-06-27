window.HEZO_I18N = (function () {
  'use strict';

  var en = {
    meta: { title: 'HezoKorea — Everything You Want in Korea', description: 'HezoKorea — Your trusted concierge for documents, proxy shopping, and life in Korea.' },
    keys: {
      'nav.services': 'Services', 'nav.documents': 'Documents', 'nav.process': 'How It Works', 'nav.contact': 'Contact',
      'nav.login': 'Log in', 'nav.cta': 'Get Started', 'nav.language': 'Language', 'nav.menuOpen': 'Open menu', 'nav.menuClose': 'Close menu', 'nav.menuOpen': 'Open menu', 'nav.menuClose': 'Close menu',
      'hero.badge': 'Korea concierge · Est. for expats & visitors',
      'hero.title1': 'Everything you want,', 'hero.title2': 'delivered from Korea.',
      'hero.subtitle': 'Documents, proxy shopping, and local logistics — one trusted team handling the complexity so you don\'t have to.',
      'hero.cta1': 'Start a request', 'hero.cta2': 'See the process',
      'hero.stat1': 'Avg. response', 'hero.stat2': 'Countries shipped', 'hero.stat3': 'Client rating',
      'hero.card.label': 'Active request', 'hero.card.title': 'Proxy · Coupang order', 'hero.card.status': 'In transit',
      'hero.card.s1t': 'Link received', 'hero.card.s1d': 'Verified · In stock',
      'hero.card.s2t': 'Payment confirmed', 'hero.card.s2d': '₩142,000 + service fee',
      'hero.card.s3t': 'Purchased locally', 'hero.card.s3d': 'Repackaging for DHL',
      'hero.card.s4t': 'Global delivery', 'hero.card.s4d': 'Est. 5–7 business days',
      'hero.float': '📦 Shipped to 40+ countries',
      'stores.label': 'Supported marketplaces',
      'svc.label': 'What we do', 'svc.title': 'Two services.<br/>One reliable team.',
      'svc.subtitle': 'Whether you\'re settling in or shopping from abroad, we handle the details with care.',
      'svc.doc.title': 'Document Services', 'svc.doc.desc': 'Immigration, visas, ARC, notarization, and certified translation — guided step by step.',
      'svc.doc.link': 'View all categories', 'svc.proxy.title': 'Proxy Shopping',
      'svc.proxy.desc': 'We buy Korean goods on your behalf and ship worldwide. Transparent fees, zero language barrier.',
      'svc.proxy.link': 'View 5-step process', 'svc.f1t': 'Secure payments', 'svc.f1d': 'Clear pricing breakdown before every purchase.',
      'svc.f2t': 'Global shipping', 'svc.f2d': 'DHL & UPS to 40+ countries worldwide.', 'svc.f3t': 'Multilingual support', 'svc.f3d': 'Real humans, fast replies — no bots.',
      'doc.label': 'Document Consulting', 'doc.title': 'Expert document guidance for foreigners in Korea',
      'doc.subtitle': 'We prepare checklists, review documents, and guide you through official processes. Document preparation and process guidance only — complex legal matters are referred to licensed professionals when needed.',
      'doc.tabCurrent': 'Current services', 'doc.tabExpanded': 'Expanded (coming soon)',
      'doc.common': 'Common requests', 'doc.notes': 'Important notes', 'doc.caseByCase': 'Case-by-case',
      'doc.expandedNote': 'Expanded legal-adjacent services (apostille, POA, contracts, legal consultation) will launch once our attorney partnership is finalized. Pricing below is indicative (KRW).',
      'doc.thNum': '#', 'doc.thCat': 'Category', 'doc.thCovers': 'Covers', 'doc.thPrice': 'Pricing (KRW)', 'doc.flexible': 'Flexible',
      'doc.contactLabel': 'Submit by email', 'doc.contactDesc': 'Send your case to info@hezokorea.com — we\'ll reply within 2 hours by email.',
      'doc.cta': 'Submit a case inquiry →',
      'proc.label': 'How it works', 'proc.title': 'From link to doorstep<br/>in five steps.',
      'proc.subtitle': 'Our proxy shopping flow is designed to be transparent at every stage — no surprises, no guesswork.',
      'proc.s1t': 'Share the link', 'proc.s1d': 'Paste any Korean marketplace URL — Coupang, Naver, Bunjang, and more.',
      'proc.s2t': 'We verify', 'proc.s2d': 'Stock, condition, and shipping feasibility checked within hours.',
      'proc.s3t': 'You pay', 'proc.s3d': 'Item price + flat service fee. Full breakdown before you commit.',
      'proc.s4t': 'We purchase', 'proc.s4d': 'Our local team buys immediately using established seller accounts.',
      'proc.s5t': 'Delivered', 'proc.s5d': 'Repackaged and shipped to your door via DHL or UPS.',
      'contact.label': 'Get in touch', 'contact.title': 'Tell us what<br/>you need.',
      'contact.subtitle': 'Submit the form below — our coordinator will respond by email within 2 hours.',
      'contact.emailLabel': 'Inquiries', 'contact.emailNote': 'All first contact is by email only.',
      'contact.response': 'Response time', 'contact.responseVal': 'Within 2 hours, Mon–Sat',
      'form.name': 'Name', 'form.email': 'Email', 'form.service': 'Service type', 'form.message': 'Message',
      'form.submit': 'Send request', 'form.sending': 'Sending…', 'form.select': 'Select...',
      'form.doc': 'Document Services', 'form.proxy': 'Proxy Purchasing', 'form.general': 'General Inquiry',
      'form.docCat': 'Case category', 'form.selectCat': 'Select a category...',
      'form.link': 'Product link', 'form.phone': 'Phone', 'form.addr': 'Shipping address', 'form.notes': 'Options & notes',
      'form.catRequired': 'Please select a document category.',
      'form.successTitle': 'Request received', 'form.successBody': 'We\'ll reply by email within <strong>2 hours</strong>. Please check your inbox.',
      'form.reset': 'Send another request',
      'ph.name': 'Your name', 'ph.email': 'you@email.com', 'ph.message': 'Describe your request...',
      'ph.link': 'https://...', 'ph.phone': '+1 555 000 0000', 'ph.addr': 'Full address', 'ph.notes': 'Size, color, quantity...',
      'login.title': 'Welcome back', 'login.subtitle': 'Sign in to track your requests',
      'login.google': 'Continue with Google', 'login.apple': 'Continue with Apple', 'login.or': 'or',
      'login.emailPh': 'Email', 'login.passPh': 'Password', 'login.submit': 'Sign in', 'login.close': 'Close',
      'footer.contact': 'Contact', 'footer.privacy': 'Privacy',
      'cat.visa': 'Visa & Immigration', 'cat.arc': 'ARC & Residence', 'cat.translation': 'Document Translation & Certification',
      'cat.family': 'Family & Personal Documents', 'cat.business': 'Business & Corporate Documents', 'cat.custom': 'Custom Request', 'cat.other': 'Other'
    },
    docs: [
      { covers: 'All visa-related document help', requests: 'Visa application documents, invitation letters, visa extension, change of status, K-ETA support, visa rejection appeal documents', notes: 'Document preparation, checklist, and process guidance only.', price: '$130 – $325', priceM: '$130 – $325 USD' },
      { covers: 'Alien Registration Card and staying in Korea', requests: 'New ARC application, ARC renewal, residence issues, address change', notes: 'Document guidance and application support.', price: '$110 – $250', priceM: '$110 – $250 USD' },
      { covers: 'Translation and official certification', requests: 'Certified Korean translation, notarized translation, translation of official immigration/government letters', notes: 'High-volume service. Can partner with certified translators.', price: '$60 – $145 / doc', priceM: '$60 – $145 / doc USD' },
      { covers: 'Marriage, birth, family matters', requests: 'Marriage registration, birth certificate, divorce documents, family relation certificate', notes: 'Document preparation and process support. Complex family law cases will be referred to a licensed attorney.', price: '$110 – $250', priceM: '$110 – $250 USD' },
      { covers: 'Company and business related', requests: 'Business registration documents, sole proprietorship setup, basic corporate documents', notes: 'Limited to document preparation and guidance. Formal legal or corporate legal work will be referred to an attorney.', price: '$145 – $290', priceM: '$145 – $290 USD' },
      { covers: 'Specific request that doesn\'t fit other categories', requests: 'Defined but unique document or process requests', notes: 'Price depends on complexity and time required.', price: '$110 – $250', priceM: '$110 – $250 USD' },
      { covers: 'General or unusual inquiries', requests: 'General inquiry, unclear situations, or multiple combined issues', notes: 'Pricing and scope will be discussed after understanding the request.', price: 'Case-by-case', priceM: 'Case-by-case' }
    ],
    expanded: [
      ['Visa & Immigration', 'Visa docs, extension, K-ETA, appeal', '₩180,000 – 450,000'],
      ['ARC & Residence', 'ARC new/renewal, address change, re-entry', '₩150,000 – 350,000'],
      ['Translation & Certification', 'Certified / notarized translation', '₩80,000 – 200,000'],
      ['Legalization & Apostille', 'Apostille, embassy legalization', '₩120,000 – 250,000'],
      ['Power of Attorney', 'Property, bank, contract POA', '₩250,000 – 450,000'],
      ['Family & Personal', 'Marriage, birth, divorce, inheritance', '₩150,000 – 400,000'],
      ['Business & Corporate', 'Registration, tax, sole prop setup', '₩200,000 – 500,000+'],
      ['Contracts & Agreements', 'Rental, employment, business contracts', '₩150,000 – 350,000+'],
      ['Legal Consultation', 'Immigration/labor/civil guidance', '₩100,000 – 200,000 / session'],
      ['Custom Request', 'Unique one-off requests', '₩150,000 – 350,000'],
      ['Other', 'General / combined issues', 'flex']
    ],
    hints: {
      visa: '<strong>Visa & Immigration</strong> · $130–$325 · Visa docs, extension, K-ETA, appeal. Guidance only.',
      arc: '<strong>ARC & Residence</strong> · $110–$250 · New ARC, renewal, address change.',
      translation: '<strong>Translation & Certification</strong> · $60–$145/doc · Certified & notarized translation.',
      family: '<strong>Family & Personal</strong> · $110–$250 · Marriage, birth, divorce. Complex cases → attorney referral.',
      business: '<strong>Business & Corporate</strong> · $145–$290 · Registration, sole prop. Formal legal work → attorney.',
      custom: '<strong>Custom Request</strong> · $110–$250 · Unique requests, price by complexity.',
      other: '<strong>Other</strong> · Flexible pricing · General or combined issues.'
    },
    catKeys: ['visa', 'arc', 'translation', 'family', 'business', 'custom', 'other']
  };

  var zh = JSON.parse(JSON.stringify(en));
  Object.assign(zh.meta, { title: 'HezoKorea — 您在韩国想要的一切', description: 'HezoKorea — 您在韩国可信赖的文件、代购与生活服务。' });
  Object.assign(zh.keys, {
    'nav.services':'服务','nav.documents':'文件服务','nav.process':'流程','nav.contact':'联系','nav.login':'登录','nav.cta':'开始','nav.language':'语言',
    'hero.badge':'韩国礼宾 · 为外籍人士与访客服务','hero.title1':'您在韩国想要的一切，','hero.title2':'我们帮您实现。',
    'hero.subtitle':'文件办理、代购韩国商品、本地物流 — 一个可信赖的团队为您处理所有复杂事务。',
    'hero.cta1':'提交请求','hero.cta2':'了解流程','hero.stat1':'平均回复','hero.stat2':'配送国家','hero.stat3':'客户评分',
    'hero.card.label':'进行中的请求','hero.card.title':'代购 · Coupang订单','hero.card.status':'运输中',
    'hero.card.s1t':'链接已收到','hero.card.s1d':'已验证 · 有货','hero.card.s2t':'付款已确认','hero.card.s2d':'₩142,000 + 服务费',
    'hero.card.s3t':'已在韩国购买','hero.card.s3d':'DHL重新包装中','hero.card.s4t':'全球配送','hero.card.s4d':'预计5–7个工作日',
    'hero.float':'📦 配送至40+国家','stores.label':'支持的平台',
    'svc.label':'我们的服务','svc.title':'两项服务。<br/>一个可靠团队。','svc.subtitle':'无论您是定居还是海外购物，我们都细心处理每个细节。',
    'svc.doc.title':'文件服务','svc.doc.desc':'移民、签证、外国人登录证、公证及认证翻译 — 逐步英文指导。',
    'svc.doc.link':'查看所有类别','svc.proxy.title':'代购服务','svc.proxy.desc':'代您购买韩国商品并全球配送。费用透明，无语言障碍。',
    'svc.proxy.link':'查看5步流程','svc.f1t':'安全付款','svc.f1d':'每次购买前提供清晰价格明细。','svc.f2t':'全球配送','svc.f2d':'DHL和UPS配送至40+国家。','svc.f3t':'多语言支持','svc.f3d':'真人客服，快速回复。',
    'doc.label':'文件咨询','doc.title':'在韩外国人专业文件指导','doc.subtitle':'我们准备清单、审阅文件并指导官方流程。仅提供文件准备与流程指导 — 复杂法律事项将转介Licensed专业人士。',
    'doc.tabCurrent':'现有服务','doc.tabExpanded':'扩展服务（即将推出）','doc.common':'常见请求','doc.notes':'重要说明','doc.caseByCase':'视情况而定',
    'doc.expandedNote':'扩展法律服务（海牙认证、委托书、合同等）将在律师合作确定后推出。以下价格为参考（韩元）。',
    'doc.thNum':'#','doc.thCat':'类别','doc.thCovers':'涵盖内容','doc.thPrice':'价格（韩元）','doc.flexible':'灵活定价',
    'doc.contactLabel':'通过邮件提交','doc.contactDesc':'请将案件发送至 info@hezokorea.com — 我们将在2小时内通过邮件回复。',
    'doc.cta':'提交案件咨询 →',
    'proc.label':'流程','proc.title':'从链接到 doorstep<br/>只需五步。','proc.subtitle':'代购流程全程透明 — 无隐藏费用，无猜测。',
    'proc.s1t':'分享链接','proc.s1d':'粘贴任何韩国购物网站链接 — Coupang、Naver、Bunjang等。','proc.s2t':'我们核实','proc.s2d':'数小时内核实库存、状况及配送可行性。',
    'proc.s3t':'您付款','proc.s3d':'商品价格 + 固定服务费。承诺前提供完整明细。','proc.s4t':'我们购买','proc.s4d':'本地团队立即通过Established账户购买。',
    'proc.s5t':'送达','proc.s5d':'重新包装后通过DHL或UPS送至您家门口。',
    'contact.label':'联系我们','contact.title':'告诉我们<br/>您的需求。','contact.subtitle':'填写下方表单 — 协调员将在2小时内通过邮件回复。',
    'contact.emailLabel':'咨询邮箱','contact.emailNote':'首次联系仅通过邮件。','contact.response':'回复时间','contact.responseVal':'2小时内，周一至周六',
    'form.name':'姓名','form.email':'邮箱','form.service':'服务类型','form.message':'留言','form.submit':'发送请求','form.sending':'发送中…',
    'form.select':'请选择...','form.doc':'文件服务','form.proxy':'代购服务','form.general':'一般咨询','form.docCat':'案件类别','form.selectCat':'选择类别...',
    'form.link':'商品链接','form.phone':'电话','form.addr':'配送地址','form.notes':'选项与备注','form.catRequired':'请选择文件类别。',
    'form.successTitle':'请求已收到','form.successBody':'我们将在<strong>2小时</strong>内通过邮件回复。请查收收件箱。','form.reset':'再发一条请求',
    'ph.name':'您的姓名','ph.email':'you@email.com','ph.message':'描述您的需求...','ph.link':'https://...','ph.phone':'+86 138 0000 0000','ph.addr':'完整地址','ph.notes':'尺码、颜色、数量...',
    'login.title':'欢迎回来','login.subtitle':'登录以跟踪您的请求','login.google':'使用 Google 继续','login.apple':'使用 Apple 继续','login.or':'或',
    'login.emailPh':'邮箱','login.passPh':'密码','login.submit':'登录','login.close':'关闭','footer.contact':'联系','footer.privacy':'隐私',
    'cat.visa':'签证与移民','cat.arc':'外国人登录证与居留','cat.translation':'文件翻译与认证','cat.family':'家庭与个人文件','cat.business':'商业与公司文件','cat.custom':'定制请求','cat.other':'其他'
  });
  zh.docs = [
    { covers:'所有签证相关文件协助', requests:'签证申请文件、邀请函、签证延期、身份变更、K-ETA支持、拒签申诉文件', notes:'仅提供文件准备、清单及流程指导。', price:'$130 – $325', priceM:'$130 – $325 USD' },
    { covers:'外国人登录证及在韩居留', requests:'新办ARC、ARC续期、居留问题、地址变更', notes:'文件指导及申请支持。', price:'$110 – $250', priceM:'$110 – $250 USD' },
    { covers:'翻译与官方认证', requests:'韩语认证翻译、公证翻译、移民/政府公函翻译', notes:'高频服务。可合作认证翻译员。', price:'$60 – $145 / 份', priceM:'$60 – $145 / 份 USD' },
    { covers:'婚姻、出生、家庭事务', requests:'婚姻登记、出生证明、离婚文件、家庭关系证明', notes:'文件准备与流程支持。复杂家庭法案件转介律师。', price:'$110 – $250', priceM:'$110 – $250 USD' },
    { covers:'公司与商业相关', requests:'商业登记文件、个体户设立、基本公司文件', notes:'限于文件准备与指导。正式法律工作转介律师。', price:'$145 – $290', priceM:'$145 – $290 USD' },
    { covers:'不符合其他类别的特定请求', requests:'明确但独特的文件或流程请求', notes:'价格取决于复杂程度与所需时间。', price:'$110 – $250', priceM:'$110 – $250 USD' },
    { covers:'一般或特殊咨询', requests:'一般咨询、情况不明或多问题Combined', notes:'了解需求后讨论价格与范围。', price:'视情况而定', priceM:'视情况而定' }
  ];
  zh.expanded = [['签证与移民','签证文件、延期、K-ETA、申诉','₩180,000 – 450,000'],['外国人登录证与居留','新办/续期、地址变更、再入境','₩150,000 – 350,000'],['翻译与认证','认证/公证翻译','₩80,000 – 200,000'],['合法化与海牙认证','海牙认证、使馆认证','₩120,000 – 250,000'],['委托书','房产、银行、合同委托','₩250,000 – 450,000'],['家庭与个人','婚姻、出生、离婚、继承','₩150,000 – 400,000'],['商业与公司','登记、税务、个体户','₩200,000 – 500,000+'],['合同与协议','租赁、雇佣、商业合同','₩150,000 – 350,000+'],['法律咨询','移民/劳动/民事指导','₩100,000 – 200,000 / 次'],['定制请求','一次性特殊请求','₩150,000 – 350,000'],['其他','一般/综合问题','flex']];
  zh.hints = { visa:'<strong>签证与移民</strong> · $130–$325 · 签证文件、延期、K-ETA、申诉。仅指导。', arc:'<strong>外国人登录证</strong> · $110–$250 · 新办、续期、地址变更。', translation:'<strong>翻译与认证</strong> · $60–$145/份 · 认证及公证翻译。', family:'<strong>家庭与个人</strong> · $110–$250 · 婚姻、出生、离婚。复杂案件→律师。', business:'<strong>商业与公司</strong> · $145–$290 · 登记、个体户。正式法律→律师。', custom:'<strong>定制请求</strong> · $110–$250 · 特殊请求，按复杂度定价。', other:'<strong>其他</strong> · 灵活定价 · 一般或综合问题。' };

  var ja = JSON.parse(JSON.stringify(en));
  Object.assign(ja.meta, { title: 'HezoKorea — 韓国で欲しいものすべて', description: 'HezoKorea — 書類、代行購入、韓国生活の頼れるパートナー。' });
  Object.assign(ja.keys, {
    'nav.services':'サービス','nav.documents':'書類','nav.process':'流れ','nav.contact':'お問合せ','nav.login':'ログイン','nav.cta':'始める','nav.language':'言語',
    'hero.badge':'韓国コンシェルジュ · 外国人・訪問者向け','hero.title1':'韓国で欲しいもの、','hero.title2':'すべてお届けします。',
    'hero.subtitle':'書類、代行購入、現地ロジスティクス — 信頼できるチームが複雑さを代行します。',
    'hero.cta1':'リクエスト開始','hero.cta2':'流れを見る','hero.stat1':'平均返信','hero.stat2':'配送国','hero.stat3':'評価',
    'hero.card.label':'進行中','hero.card.title':'代行 · Coupang注文','hero.card.status':'配送中',
    'hero.card.s1t':'リンク受領','hero.card.s1d':'確認済 · 在庫あり','hero.card.s2t':'支払い確認','hero.card.s2d':'₩142,000 + 手数料',
    'hero.card.s3t':'現地購入済','hero.card.s3d':'DHL梱包中','hero.card.s4t':'国際配送','hero.card.s4d':'5–7営業日',
    'hero.float':'📦 40カ国以上に配送','stores.label':'対応マーケット',
    'svc.label':'サービス','svc.title':'2つのサービス。<br/>1つの信頼できるチーム。','svc.subtitle':'定住も海外からの購入も、丁寧にサポートします。',
    'svc.doc.title':'書類サービス','svc.doc.desc':'移民、ビザ、ARC、公証、認証翻訳 — ステップごとに案内。',
    'svc.doc.link':'全カテゴリを見る','svc.proxy.title':'代行購入','svc.proxy.desc':'韓国商品を代購し世界配送。透明な料金、言語の壁なし。',
    'svc.proxy.link':'5ステップを見る','svc.f1t':'安全な決済','svc.f1d':'購入前に明確な内訳。','svc.f2t':'世界配送','svc.f2d':'DHL・UPSで40カ国以上。','svc.f3t':'多言語サポート','svc.f3d':'人間が迅速に対応。',
    'doc.label':'書類コンサル','doc.title':'韓国在住外国人向け書類ガイド','doc.subtitle':'チェックリスト作成、書類確認、手続き案内。書類準備とプロセス案内のみ — 複雑な法律問題は専門家へ。',
    'doc.tabCurrent':'現在のサービス','doc.tabExpanded':'拡張（近日）','doc.common':'よくある依頼','doc.notes':'重要事項','doc.caseByCase':'案件による',
    'doc.expandedNote':'アポスティーユ、委任状、契約等は弁護士提携後に開始。価格は参考（ウォン）。',
    'doc.contactLabel':'メールでお問合せ','doc.contactDesc':'info@hezokorea.com へ — 2時間以内にメールで返信します。',
    'doc.cta':'案件を送信 →',
    'proc.label':'流れ','proc.title':'リンクから玄関まで<br/>5ステップ。','proc.subtitle':'代行購入は各段階で透明 — サプライズなし。',
    'proc.s1t':'リンク共有','proc.s1d':'Coupang、Naver、Bunjang等のURLを貼付。','proc.s2t':'在庫確認','proc.s2d':'数時間以内に在庫・状態・配送可否を確認。',
    'proc.s3t':'お支払い','proc.s3d':'商品代 + 手数料。確定前に全内訳。','proc.s4t':'現地購入','proc.s4d':'現地チームが即購入。','proc.s5t':'お届け','proc.s5d':'DHLまたはUPSで再梱包配送。',
    'contact.label':'お問合せ','contact.title':'ご要望を<br/>お聞かせください。','contact.subtitle':'フォーム送信後、2時間以内にメールで返信します。',
    'contact.emailLabel':'お問合せ','contact.emailNote':'初回連絡はメールのみ。','contact.response':'返信時間','contact.responseVal':'2時間以内（月〜土）',
    'form.name':'お名前','form.email':'メール','form.service':'サービス','form.message':'メッセージ','form.submit':'送信','form.sending':'送信中…',
    'form.select':'選択...','form.doc':'書類サービス','form.proxy':'代行購入','form.general':'一般問合せ','form.docCat':'案件カテゴリ','form.selectCat':'カテゴリを選択...',
    'form.catRequired':'書類カテゴリを選択してください。','form.successTitle':'受付完了','form.successBody':'<strong>2時間</strong>以内にメールで返信します。','form.reset':'もう一度送信',
    'ph.name':'お名前','ph.message':'ご要望を記入...','login.title':'おかえりなさい','login.google':'Googleで続行','login.apple':'Appleで続行',
    'cat.visa':'ビザ・移民','cat.arc':'ARC・居留','cat.translation':'翻訳・認証','cat.family':'家族・個人書類','cat.business':'ビジネス書類','cat.custom':'カスタム','cat.other':'その他'
  });
  ja.docs = [
    { covers:'ビザ関連書類全般', requests:'ビザ申請書類、招請状、延長、在留資格変更、K-ETA、拒否Appeal', notes:'書類準備・チェックリスト・手続き案内のみ。', price:'$130 – $325', priceM:'$130 – $325 USD' },
    { covers:'外国人登録証と在韓滞在', requests:'新規ARC、更新、在留問題、住所変更', notes:'書類案内と申請サポート。', price:'$110 – $250', priceM:'$110 – $250 USD' },
    { covers:'翻訳と公証', requests:'認証韓国語翻訳、公証翻訳、移民/政府公函', notes:'高需要。認定翻訳者と連携可。', price:'$60 – $145 / 件', priceM:'$60 – $145 / 件 USD' },
    { covers:'婚姻、出生、家族', requests:'婚姻登録、出生証明、離婚、家族関係証明', notes:'書類準備支援。複雑な案件は弁護士へ。', price:'$110 – $250', priceM:'$110 – $250 USD' },
    { covers:'会社・ビジネス', requests:'事業登録、個人事業、基本法人書類', notes:'書類準備・案内に限定。正式Legal workは弁護士へ。', price:'$145 – $290', priceM:'$145 – $290 USD' },
    { covers:'他カテゴリに該当しない依頼', requests:'明確だが独特な書類・手続き', notes:'複雑さと時間により価格決定。', price:'$110 – $250', priceM:'$110 – $250 USD' },
    { covers:'一般・特殊問合せ', requests:'一般問合せ、不明確、複合問題', notes:'内容確認後に価格・範囲を協議。', price:'案件による', priceM:'案件による' }
  ];

  var vi = JSON.parse(JSON.stringify(en));
  Object.assign(vi.meta, { title: 'HezoKorea — Mọi thứ bạn muốn ở Hàn Quốc', description: 'HezoKorea — Dịch vụ giấy tờ, mua hộ và hỗ trợ cuộc sống tại Hàn.' });
  Object.assign(vi.keys, {
    'nav.services':'Dịch vụ','nav.documents':'Giấy tờ','nav.process':'Quy trình','nav.contact':'Liên hệ','nav.login':'Đăng nhập','nav.cta':'Bắt đầu','nav.language':'Ngôn ngữ',
    'hero.badge':'Concierge Hàn Quốc · Cho expat & du khách','hero.title1':'Mọi thứ bạn muốn,','hero.title2':'giao từ Hàn Quốc.',
    'hero.subtitle':'Giấy tờ, mua hộ, logistics — một đội ngũ tin cậy xử lý mọi phức tạp.',
    'hero.cta1':'Gửi yêu cầu','hero.cta2':'Xem quy trình','hero.stat1':'Phản hồi TB','hero.stat2':'Quốc gia giao','hero.stat3':'Đánh giá',
    'stores.label':'Sàn hỗ trợ','svc.label':'Dịch vụ','svc.title':'Hai dịch vụ.<br/>Một đội tin cậy.',
    'doc.label':'Tư vấn giấy tờ','doc.title':'Hướng dẫn giấy tờ chuyên nghiệp cho người nước ngoài tại Hàn',
    'doc.contactLabel':'Gửi qua email','doc.contactDesc':'Gửi đến info@hezokorea.com — phản hồi trong 2 giờ.',
    'contact.subtitle':'Gửi form — điều phối viên trả lời email trong 2 giờ.','contact.emailLabel':'Liên hệ','contact.emailNote':'Liên hệ đầu tiên chỉ qua email.',
    'form.submit':'Gửi yêu cầu','form.successTitle':'Đã nhận yêu cầu','form.successBody':'Phản hồi email trong <strong>2 giờ</strong>.',
    'cat.visa':'Visa & Nhập cư','cat.arc':'ARC & Cư trú','cat.translation':'Dịch thuật & Công chứng','cat.family':'Gia đình & Cá nhân','cat.business':'Doanh nghiệp','cat.custom':'Yêu cầu riêng','cat.other':'Khác'
  });

  var ko = JSON.parse(JSON.stringify(en));
  Object.assign(ko.meta, { title: 'HezoKorea — 한국에서 원하는 모든 것', description: 'HezoKorea — 서류, 구매 대행, 한국 생활을 위한 신뢰할 수 있는 파트너.' });
  Object.assign(ko.keys, {
    'nav.services':'서비스','nav.documents':'서류','nav.process':'이용 방법','nav.contact':'문의','nav.login':'로그인','nav.cta':'시작하기','nav.language':'언어',
    'hero.badge':'한국 컨시어지 · 외국인·방문객을 위해','hero.title1':'원하는 모든 것,','hero.title2':'한국에서 전해드립니다.',
    'hero.subtitle':'서류, 구매 대행, 현지 물류 — 신뢰할 수 있는 팀이 복잡함을 대신합니다.',
    'hero.cta1':'문의하기','hero.cta2':'프로세스 보기','hero.stat1':'평균 응답','hero.stat2':'배송 국가','hero.stat3':'고객 평점',
    'stores.label':'지원 마켓플레이스','svc.label':'서비스','svc.title':'두 가지 서비스.<br/>하나의 신뢰.',
    'doc.label':'서류 컨설팅','doc.title':'한국 체류 외국인을 위한 전문 서류 안내',
    'doc.contactLabel':'이메일로 문의','doc.contactDesc':'info@hezokorea.com 으로 보내주세요 — 2시간 내 답변드립니다.',
    'contact.subtitle':'양식을 제출해 주시면 2시간 내 이메일로 답변드립니다.','contact.emailLabel':'문의','contact.emailNote':'첫 문의는 이메일로만 받습니다.',
    'form.submit':'요청 보내기','form.successTitle':'접수 완료','form.successBody':'<strong>2시간</strong> 내 이메일로 답변드립니다.',
    'cat.visa':'비자·이민','cat.arc':'외국인등록증·체류','cat.translation':'번역·인증','cat.family':'가족·개인 서류','cat.business':'사업·법인 서류','cat.custom':'맞춤 요청','cat.other':'기타'
  });
  ko.docs = [
    { covers:'비자 관련 서류 전반', requests:'비자 신청 서류, 초청장, 연장, 체류 자격 변경, K-ETA, 거절 이의', notes:'서류 준비, 체크리스트, 절차 안내만 제공.', price:'$130 – $325', priceM:'$130 – $325 USD' },
    { covers:'외국인등록증 및 한국 체류', requests:'신규 ARC, 갱신, 체류 문제, 주소 변경', notes:'서류 안내 및 신청 지원.', price:'$110 – $250', priceM:'$110 – $250 USD' },
    { covers:'번역 및 공증', requests:'공인 번역, 공증 번역, 출입국/정부 공문 번역', notes:'고빈도 서비스. 공인 번역사 협력 가능.', price:'$60 – $145 / 건', priceM:'$60 – $145 / 건 USD' },
    { covers:'혼인, 출생, 가족', requests:'혼인 신고, 출생증명, 이혼, 가족관계증명', notes:'서류 준비 지원. 복잡한 가사는 변호사 연계.', price:'$110 – $250', priceM:'$110 – $250 USD' },
    { covers:'사업·법인 관련', requests:'사업자 등록, 개인사업자, 기본 법인 서류', notes:'서류 준비·안내 한정. 공식 법률 업무는 변호사 연계.', price:'$145 – $290', priceM:'$145 – $290 USD' },
    { covers:'기타 카테고리에 해당하지 않는 요청', requests:'명확하지만 독특한 서류·절차', notes:'복잡도와 시간에 따라 가격 결정.', price:'$110 – $250', priceM:'$110 – $250 USD' },
    { covers:'일반·특수 문의', requests:'일반 문의, 불명확, 복합 문제', notes:'요청 파악 후 가격·범위 협의.', price:'건별 협의', priceM:'건별 협의' }
  ];

  function cloneWithFallback(base, overrides) {
    var c = JSON.parse(JSON.stringify(base));
    if (overrides.keys) Object.assign(c.keys, overrides.keys);
    if (overrides.meta) Object.assign(c.meta, overrides.meta);
    if (overrides.docs) c.docs = overrides.docs;
    if (overrides.expanded) c.expanded = overrides.expanded;
    if (overrides.hints) c.hints = overrides.hints;
    return c;
  }

  var th = cloneWithFallback(en, { meta: { title: 'HezoKorea — ทุกสิ่งที่คุณต้องการในเกาหลี' }, keys: {
    'nav.services':'บริการ','nav.documents':'เอกสาร','nav.process':'ขั้นตอน','nav.contact':'ติดต่อ','nav.login':'เข้าสู่ระบบ','nav.cta':'เริ่มต้น',
    'hero.title1':'ทุกสิ่งที่คุณต้องการ,','hero.title2':'ส่งตรงจากเกาหลี','hero.cta1':'ส่งคำขอ','doc.contactDesc':'ส่งไปที่ info@hezokorea.com — ตอบภายใน 2 ชม.',
    'contact.emailNote':'ติดต่อครั้งแรกทางอีเมลเท่านั้น','form.submit':'ส่งคำขอ','cat.visa':'วีซ่าและต immigr','cat.arc':'ARC และที่พัก'
  }});
  var id = cloneWithFallback(en, { meta: { title: 'HezoKorea — Semua yang Anda inginkan di Korea' }, keys: {
    'nav.services':'Layanan','nav.documents':'Dokumen','nav.process':'Proses','nav.contact':'Kontak','nav.login':'Masuk','nav.cta':'Mulai',
    'hero.title1':'Semua yang Anda inginkan,','hero.title2':'dikirim dari Korea.','hero.cta1':'Kirim permintaan',
    'doc.contactDesc':'Kirim ke info@hezokorea.com — balasan dalam 2 jam.','contact.emailNote':'Kontak awal hanya via email.',
    'form.submit':'Kirim permintaan','cat.visa':'Visa & Imigrasi','cat.arc':'ARC & Tempat Tinggal'
  }});
  var ru = cloneWithFallback(en, { meta: { title: 'HezoKorea — Всё, что вы хотите в Корее' }, keys: {
    'nav.services':'Услуги','nav.documents':'Документы','nav.process':'Как это работает','nav.contact':'Контакты','nav.login':'Войти','nav.cta':'Начать',
    'hero.title1':'Всё, что вы хотите,','hero.title2':'из Кореи.','hero.cta1':'Отправить запрос',
    'doc.contactDesc':'На info@hezokorea.com — ответ в течение 2 часов.','contact.emailNote':'Первый контакт только по email.',
    'form.submit':'Отправить','cat.visa':'Виза и иммиграция','cat.arc':'ARC и проживание'
  }});
  var es = cloneWithFallback(en, { meta: { title: 'HezoKorea — Todo lo que quieres en Corea' }, keys: {
    'nav.services':'Servicios','nav.documents':'Documentos','nav.process':'Cómo funciona','nav.contact':'Contacto','nav.login':'Iniciar sesión','nav.cta':'Empezar',
    'hero.title1':'Todo lo que quieres,','hero.title2':'desde Corea.','hero.cta1':'Enviar solicitud',
    'doc.contactDesc':'A info@hezokorea.com — respuesta en 2 horas.','contact.emailNote':'Primer contacto solo por email.',
    'form.submit':'Enviar solicitud','cat.visa':'Visa e inmigración','cat.arc':'ARC y residencia'
  }});
  var fr = cloneWithFallback(en, { meta: { title: 'HezoKorea — Tout ce que vous voulez en Corée' }, keys: {
    'nav.services':'Services','nav.documents':'Documents','nav.process':'Comment ça marche','nav.contact':'Contact','nav.login':'Connexion','nav.cta':'Commencer',
    'hero.title1':'Tout ce que vous voulez,','hero.title2':'depuis la Corée.','hero.cta1':'Envoyer une demande',
    'doc.contactDesc':'À info@hezokorea.com — réponse sous 2 h.','contact.emailNote':'Premier contact par email uniquement.',
    'form.submit':'Envoyer','cat.visa':'Visa et immigration','cat.arc':'ARC et séjour'
  }});
  var de = cloneWithFallback(en, { meta: { title: 'HezoKorea — Alles, was Sie in Korea wollen' }, keys: {
    'nav.services':'Leistungen','nav.documents':'Dokumente','nav.process':'Ablauf','nav.contact':'Kontakt','nav.login':'Anmelden','nav.cta':'Starten',
    'hero.title1':'Alles, was Sie wollen,','hero.title2':'aus Korea.','hero.cta1':'Anfrage senden',
    'doc.contactDesc':'An info@hezokorea.com — Antwort innerhalb von 2 Std.','contact.emailNote':'Erstkontakt nur per E-Mail.',
    'form.submit':'Senden','cat.visa':'Visum & Einwanderung','cat.arc':'ARC & Aufenthalt'
  }});
  var tl = cloneWithFallback(en, { meta: { title: 'HezoKorea — Lahat ng gusto mo sa Korea' }, keys: {
    'nav.services':'Serbisyo','nav.documents':'Dokumento','nav.process':'Proseso','nav.contact':'Makipag-ugnayan','nav.login':'Mag-log in','nav.cta':'Magsimula',
    'hero.title1':'Lahat ng gusto mo,','hero.title2':'mula sa Korea.','hero.cta1':'Magpadala ng request',
    'doc.contactDesc':'Sa info@hezokorea.com — sagot sa loob ng 2 oras.','contact.emailNote':'Unang contact sa email lamang.',
    'form.submit':'Ipadala','cat.visa':'Visa at Imigrasyon','cat.arc':'ARC at Paninirahan'
  }});

  var all = { en: en, zh: zh, ja: ja, vi: vi, ko: ko, th: th, id: id, ru: ru, es: es, fr: fr, de: de, tl: tl };

  function get(lang) {
    var pack = all[lang] || en;
    var merged = JSON.parse(JSON.stringify(en));
    if (pack.meta) Object.assign(merged.meta, pack.meta);
    Object.keys(pack.keys || {}).forEach(function (key) { merged.keys[key] = pack.keys[key]; });
    if (pack.docs) merged.docs = JSON.parse(JSON.stringify(pack.docs));
    if (pack.expanded) merged.expanded = JSON.parse(JSON.stringify(pack.expanded));
    if (pack.hints) merged.hints = JSON.parse(JSON.stringify(pack.hints));
    return merged;
  }

  function extend(lang, patch) {
    if (!all[lang]) all[lang] = JSON.parse(JSON.stringify(en));
    var pack = all[lang];
    if (patch.meta) Object.assign(pack.meta, patch.meta);
    if (patch.keys) Object.assign(pack.keys, patch.keys);
    if (patch.docs) pack.docs = patch.docs;
    if (patch.expanded) pack.expanded = patch.expanded;
    if (patch.hints) pack.hints = patch.hints;
  }

  return { get: get, extend: extend, codes: { en:'EN', zh:'ZH', ja:'JA', vi:'VI', th:'TH', id:'ID', ru:'RU', es:'ES', fr:'FR', de:'DE', tl:'TL', ko:'KO' } };
})();
