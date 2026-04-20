#!/usr/bin/env node
/**
 * Patches TR, AR, EN translation files by replacing the closing lines
 * with a version that includes the `pages` key.
 */

const fs = require('fs')
const path = require('path')

const dir = path.join(__dirname, '../src/lib/translations')

// ── PROJECT ITEMS (shared structure, translated per-locale) ──────────────
const projectSlugs = ['nexcommerce', 'finflow', 'aria-ai', 'medisync', 'launchpad', 'trackroute']

const patchFile = (filePath, pagesData) => {
  let content = fs.readFileSync(filePath, 'utf-8')
  // Remove any stray "pages added" comment we may have appended
  content = content.replace(/\/\/ pages added via script.*$/m, '').trimEnd()
  // Remove closing brace and export
  content = content.replace(/\}\s*\nexport default \w+\s*$/, '').trimEnd()
  // Append pages block + closing
  const varName = path.basename(filePath, '.ts')
  content += `\n  pages: ${JSON.stringify(pagesData, null, 4)},\n}\n\nexport default ${varName}\n`
  fs.writeFileSync(filePath, content, 'utf-8')
  console.log(`✓ Patched ${filePath}`)
}

// ── TURKISH ─────────────────────────────────────────────────────────────
const trPages = {
  projects: {
    title: 'Projelerimiz',
    subtitle: 'Dünya genelindeki iddialı markalar için hazırladığımız dijital deneyimlerden özenle seçilmiş bir vitrin.',
    filterAll: 'Tümü',
    backToHome: 'Ana Sayfaya Dön',
    viewDetail: 'Projeyi İncele →',
    projectItems: [
      { slug: 'nexcommerce', title: 'NexCommerce', category: 'E-Ticaret', tag: 'Web Geliştirme', description: 'Yapay zeka destekli ürün önerileri ile tam kapsamlı e-ticaret yeniden tasarımı.', fullDescription: 'NexCommerce, eski ve yavaş bir e-ticaret platformunu yapay zeka tabanlı modern bir alışveriş deneyimine dönüştürme hedefiyle tasarlandı. Dönüşüm oranlarını %240 artırdı.', challenge: 'Yüksek sıçrama oranı, yavaş sayfa yükleme süreleri ve mobil uyumsuz arayüz.', solution: 'Next.js App Router, edge caching ve kişiselleştirilmiş öneri motoru ile sıfırdan yeniden inşa edildi.', results: ['Dönüşüm +%240', 'Sayfa yükleme 0.8sn', 'Mobil gelir +%180', 'Sepet terk oranı -%45'], tech: ['Next.js 14', 'TypeScript', 'Stripe', 'OpenAI', 'Tailwind CSS', 'PostgreSQL'] },
      { slug: 'finflow', title: 'FinFlow Dashboard', category: 'Fintech', tag: 'UI/UX + Geliştirme', description: 'Canlı piyasa verileri ve tahmine dayalı modelleme ile gerçek zamanlı finansal analiz panosu.', fullDescription: 'FinFlow, portföy yöneticilerinin gerçek zamanlı piyasa verilerini izlemesini ve alarm kurmasını sağlayan kurumsal düzeyde bir analitik pano sistemidir.', challenge: 'Mevcut sistem günlük veri güncelliyordu, gerçek zamanlı analiz mümkün değildi.', solution: 'WebSocket tabanlı canlı veri akışı, D3.js grafikleri ve özelleştirilebilir widget sistemi geliştirildi.', results: ['0ms gecikme ile canlı veri', 'Karar süresi -%60', 'Kullanıcı memnuniyeti 4.9/5', '12 ajandan lisans anlaşması'], tech: ['React', 'D3.js', 'WebSocket', 'Node.js', 'Redis', 'TimescaleDB'] },
      { slug: 'aria-ai', title: 'Aria AI Asistan', category: 'Yapay Zeka', tag: 'Yapay Zeka Entegrasyonu', description: 'GPT-4 çekirdekli, çok dilli destekli kurumsal chatbot.', fullDescription: 'Aria, müşteri destek operasyonlarını otomatikleştirmek için tasarlanmış, GPT-4 tabanlı kurumsal yapay zeka asistanıdır. 18 dil destekler ve CRM sistemleriyle tam entegrasyon sağlar.', challenge: 'Yüksek hacimli destek taleplerine yanıt verebilecek ölçeklenebilir bir sistem gerekiyordu.', solution: 'RAG mimarisi, vektör veritabanı ve ince ayarlı domain modeli kullanılarak oluşturuldu.', results: ['Destek maliyeti -%60', 'Yanıt süresi 2.1sn', 'Müşteri memnuniyeti +%34', '18 dil desteği'], tech: ['GPT-4', 'LangChain', 'Pinecone', 'FastAPI', 'React', 'Docker'] },
      { slug: 'medisync', title: 'MediSync', category: 'Sağlık', tag: 'Mobil Uygulama', description: 'Randevu planlama, tele-tıp ve sağlık kaydı yönetimi ile hasta odaklı sağlık uygulaması.', fullDescription: 'MediSync; hastaların doktorlarıyla bağlantı kurabileceği, ilaçlarını takip edebileceği ve güvenli video ile tele-tıp hizmeti alabileceği kapsamlı bir sağlık platformudur.', challenge: 'HIPAA uyumu, güvenli veri depolama ve düşük gecikmeli video bağlantısı.', solution: 'React Native, end-to-end şifreli WebRTC video ve FHIR uyumlu sağlık veri modeli kullanıldı.', results: ['500K+ indirme', 'Klinik verimlilik +%45', 'Video kalite skoru %98', '47 klinik ile entegrasyon'], tech: ['React Native', 'WebRTC', 'Node.js', 'PostgreSQL', 'AWS', 'HIPAA'] },
      { slug: 'launchpad', title: 'LaunchPad SaaS', category: 'SaaS', tag: 'Marka + Web', description: 'A/B testi ve dinamik fiyatlandırma ile dönüşüm optimize edilmiş açılış sayfası.', fullDescription: 'LaunchPad, yeni SaaS ürünleri için hızla test edilebilir, dönüşüm odaklı açılış sayfası oluşturmak için geliştirilmiş kapsamlı bir platform şablon sistemidir.', challenge: 'Her ürün için ayrı açılış sayfası tasarlamak zaman alıcıydı ve tutarsız kalite üretiyordu.', solution: 'A/B testi motoru, CMS tabanlı özelleştirme ve Stripe entegrasyonuyla drag-drop editör geliştirildi.', results: ['Dönüşüm oranı ortalama %8.4', 'Kurulum süresi 2gün→4saat', '200+ aktif abonelik', 'Churn oranı -%23'], tech: ['Next.js', 'Framer Motion', 'Stripe', 'Sanity CMS', 'Vercel', 'PostHog'] },
      { slug: 'trackroute', title: 'TrackRoute', category: 'Lojistik', tag: 'Dijital Strateji', description: 'Rota optimizasyonu ve filo yönetimi ile gerçek zamanlı lojistik takip platformu.', fullDescription: 'TrackRoute, lojistik filolarını gerçek zamanlı olarak izleyen, otomatik rota optimizasyonu yapan ve sürücü performansı analiz eden kurumsal düzeyde bir operasyon platformudur.', challenge: 'Dağınık GPS verileri, manuel rota planlaması ve raporlama eksikliği ana sorunlardı.', solution: 'Google Maps Platform entegrasyonu, WebSocket tabanlı canlı takip ve ML tabanlı rota optimizasyonu uygulandı.', results: ['Yakıt maliyeti -%28', 'Teslimat süresi -%35', '1200+ araç takibi', 'Müşteri şikayeti -%60'], tech: ['React', 'Google Maps API', 'WebSocket', 'Python', 'TensorFlow', 'PostgreSQL'] },
    ],
  },
  about: {
    badge: 'Hikayemiz',
    title: 'Dijitali Yeniden Tanımlıyoruz',
    subtitle: 'Vizyon, teknoloji ve tasarımı bir araya getirerek markaları geleceğe taşıyan bir ekibiz.',
    storyBadge: 'Başlangıç',
    storyTitle: 'Nasıl Başladık',
    storyText: ["2017'de üç girişimci, dünyanın en iyi markalarının bile dijital dönüşümde neden bu kadar zorlandığını sorgulamaya başladı. Cevap her zaman aynıydı: strateji, tasarım ve teknoloji birbirinden kopuktu.", "GlobalDijital'ı kurmanın amacı bu boşluğu kapatmaktı. Stratejik düşünceyi estetik mükemmellikle ve teknik güçle birleştiren bir ajans.", "Bugün 12 ülkede 40'tan fazla marka ile çalışıyor, 150'den fazla projeyi hayata geçirdik. Ama en iyi projeyi henüz yapmadık — bir sonraki sizin projeniz olabilir."],
    valuesBadge: 'Değerlerimiz',
    valuesTitle: 'Bizi Biz Yapan',
    values: [
      { icon: '🎯', title: 'Amaç Odaklı', text: 'Her piksel, her satır kod bir amaca hizmet eder. Dekorasyon değil, dönüşüm.' },
      { icon: '🚀', title: 'Hız & Kalite', text: 'Hızlı teslimat ile mükemmel kaliteyi birlikte sunarız. Biri diğerini feda etmez.' },
      { icon: '🤝', title: 'Şeffaflık', text: 'Müşterilerimiz her aşamada ne yapıldığını, neden yapıldığını bilir.' },
      { icon: '🧠', title: 'Sürekli Öğrenme', text: 'Teknoloji hızla gelişir. Biz de. Her üyeye düzenli eğitim ve keşfetme süresi tanırız.' },
      { icon: '🌍', title: 'Global Bakış', text: '12 ülkedeki deneyimimiz yerel kültürleri anlamamızı sağlar, küresel bakışı koruruz.' },
      { icon: '💡', title: 'Yaratıcılık', text: 'Standart çözümler standart sonuçlar üretir. Biz her projeye taze gözle bakarız.' },
    ],
    teamBadge: 'Ekibimiz',
    teamTitle: 'Arkasındaki İnsanlar',
    team: [
      { name: 'Kemal Bircan', role: 'Kurucu & CEO', avatar: 'KB' },
      { name: 'Lena Müller', role: 'Tasarım Direktörü', avatar: 'LM' },
      { name: 'Amir Hassan', role: 'Teknoloji Direktörü', avatar: 'AH' },
      { name: 'Priya Nair', role: 'Strateji Direktörü', avatar: 'PN' },
      { name: 'Carlos Reis', role: 'Baş Geliştirici', avatar: 'CR' },
      { name: 'Yuki Tanaka', role: 'UX Araştırmacısı', avatar: 'YT' },
    ],
    timelineBadge: 'Yolculuğumuz',
    timelineTitle: 'Kilometre Taşlarımız',
    timeline: [
      { year: '2017', title: 'Girişim', text: "GlobalDijital, İstanbul'da 3 ortakla kuruldu." },
      { year: '2019', title: 'Global Büyüme', text: 'Avrupa ve Orta Doğuya adım attık, ilk 20 müşterimize ulaştık.' },
      { year: '2021', title: 'Yapay Zeka', text: 'AI & Otomasyon hizmet kolunu oluşturduk.' },
      { year: '2023', title: '150+ Proje', text: '12 ülkede 40+ markayla çalışarak 150 projeyi tamamladık.' },
      { year: '2025', title: 'Yeni Dönem', text: 'SaaS platformlarımızı launch ederek ürün şirketine dönüşümü başlattık.' },
    ],
    ctaTitle: 'Bir Sonraki Büyük Projenizi Birlikte Yapalım',
    ctaText: 'Hikayeniz burada başlıyor. Bize ulaşın.',
    ctaButton: 'İletişime Geç →',
  },
  contact: {
    badge: 'Bize Ulaşın',
    title: 'Konuşalım',
    subtitle: 'Projeniz hakkında konuşmaya hazırız. Formu doldurun ya da doğrudan ulaşın.',
    officeLabel: 'Ofisimiz',
    officeAddress: 'Maslak Mah. Büyükdere Cad. No:237, 34485 Sarıyer, İstanbul, Türkiye',
    phoneLabel: 'Telefon',
    faqBadge: 'SSS',
    faqTitle: 'Sık Sorulan Sorular',
    faqs: [
      { q: 'Bir proje ne kadar sürer?', a: 'Projenin kapsamına göre 4 hafta ile 6 ay arasında değişir. İlk görüşmede net bir zaman çerçevesi sunarız.' },
      { q: 'Fiyatlandırma nasıl çalışır?', a: 'Proje bazlı veya aylık retainer modeli sunarız. İlk danışma ücretsizdir.' },
      { q: 'Hangi teknolojileri kullanırsınız?', a: "Next.js, React, Node.js, Python, Three.js, AI/ML ve daha fazlası. Projenize en uygun stack'i seçeriz." },
      { q: 'Lansman sonrası destek var mı?', a: 'Evet. Tüm projeler 3 aylık garantili destek paketi ile teslim edilir.' },
      { q: 'Uzaktan çalışıyor musunuz?', a: 'Evet, 12 farklı ülkedeki müşterilerle tamamen uzaktan çalışıyoruz.' },
    ],
  },
}

// ── ARABIC ─────────────────────────────────────────────────────────────
const arPages = {
  projects: {
    title: 'مشاريعنا',
    subtitle: 'عرض منتقى من التجارب الرقمية التي صنعناها للعلامات التجارية الطموحة حول العالم.',
    filterAll: 'الكل',
    backToHome: 'العودة للرئيسية',
    viewDetail: 'استعرض المشروع →',
    projectItems: [
      { slug: 'nexcommerce', title: 'NexCommerce', category: 'التجارة الإلكترونية', tag: 'تطوير الويب', description: 'إعادة تصميم شاملة للتجارة الإلكترونية مع توصيات المنتجات بالذكاء الاصطناعي.', fullDescription: 'صُمِّمت NexCommerce لتحويل منصة تجارة إلكترونية قديمة وبطيئة إلى تجربة تسوق حديثة تعتمد على الذكاء الاصطناعي. ارتفعت معدلات التحويل بنسبة 240٪.', challenge: 'معدل الارتداد المرتفع وبطء تحميل الصفحات وواجهة غير متوافقة مع الجوال.', solution: 'أُعيد البناء كليًا باستخدام Next.js App Router وتخزين مؤقت عالي الأداء ومحرك توصيات مخصص.', results: ['تحويل +240٪', 'تحميل 0.8ث', 'إيرادات الجوال +180٪', 'تخلٍّ عن العربة -45٪'], tech: ['Next.js 14', 'TypeScript', 'Stripe', 'OpenAI', 'Tailwind CSS', 'PostgreSQL'] },
      { slug: 'finflow', title: 'FinFlow Dashboard', category: 'التكنولوجيا المالية', tag: 'UI/UX + تطوير', description: 'لوحة تحليل مالي في الوقت الفعلي مع بيانات السوق المباشرة والنمذجة التنبؤية.', fullDescription: 'FinFlow نظام لوحة تحكم تحليلية على مستوى المؤسسات يتيح لمديري المحافظ مراقبة بيانات السوق الفعلية وتشغيل نماذج تنبؤية.', challenge: 'كان النظام القديم يحدّث البيانات يوميًا فقط مما أعاق التحليل الفوري.', solution: 'تم تطوير تدفق بيانات مباشر عبر WebSocket مع رسوم D3.js وأدوات قابلة للتخصيص.', results: ['بيانات فورية بتأخير 0ms', 'وقت اتخاذ القرار -60٪', 'رضا المستخدم 4.9/5', 'ترخيص من 12 وكالة'], tech: ['React', 'D3.js', 'WebSocket', 'Node.js', 'Redis', 'TimescaleDB'] },
      { slug: 'aria-ai', title: 'Aria AI Assistant', category: 'الذكاء الاصطناعي', tag: 'دمج الذكاء الاصطناعي', description: 'روبوت محادثة مؤسسي واعٍ بالسياق مدعوم بـ GPT-4 وبدعم متعدد اللغات.', fullDescription: 'Aria مساعد ذكاء اصطناعي مؤسسي للمحادثة مبني على GPT-4 مصمم لأتمتة عمليات دعم العملاء. يدعم 18 لغة ويتكامل مع أنظمة CRM.', challenge: 'كان بحاجة إلى نظام قابل للتوسع يستجيب لحجم كبير من طلبات الدعم دون انقطاع.', solution: 'بُني باستخدام بنية RAG وقاعدة بيانات متجهة ونموذج نطاق مضبوط دقيقًا.', results: ['تكلفة الدعم -60٪', 'وقت الاستجابة 2.1 ث', 'رضا العملاء +34٪', 'دعم 18 لغة'], tech: ['GPT-4', 'LangChain', 'Pinecone', 'FastAPI', 'React', 'Docker'] },
      { slug: 'medisync', title: 'MediSync', category: 'الرعاية الصحية', tag: 'تطبيق جوال', description: 'تطبيق صحي يتمحور حول المريض مع جدولة المواعيد والطب عن بُعد.', fullDescription: 'MediSync منصة صحية شاملة تتيح للمرضى التواصل مع أطبائهم وتتبع أدويتهم وتلقي خدمات الطب عن بُعد عبر فيديو آمن.', challenge: 'الامتثال لمعايير HIPAA والتخزين الآمن للبيانات واتصال الفيديو منخفض التأخير.', solution: 'React Native مع تشفير WebRTC الكامل ونموذج بيانات صحية متوافق مع FHIR.', results: ['500K+ تنزيل', 'كفاءة سريرية +45٪', 'جودة الفيديو 98٪', 'تكامل مع 47 عيادة'], tech: ['React Native', 'WebRTC', 'Node.js', 'PostgreSQL', 'AWS', 'HIPAA'] },
      { slug: 'launchpad', title: 'LaunchPad SaaS', category: 'البرمجيات كخدمة', tag: 'علامة + ويب', description: 'صفحة هبوط مُحسَّنة للتحويل مع اختبار A/B والتسعير الديناميكي.', fullDescription: 'LaunchPad نظام قوالب منصة شامل طُوِّر لإنشاء صفحات هبوط قابلة للاختبار السريع والمُحسَّنة للتحويل لمنتجات SaaS الجديدة.', challenge: 'تصميم صفحة هبوط منفصلة لكل منتج كان يستغرق وقتًا طويلاً ويُنتج جودة متفاوتة.', solution: 'طُوِّر محرك اختبار A/B مع تخصيص عبر CMS ومحرر سحب وإفلات مدمج مع Stripe.', results: ['معدل تحويل متوسط 8.4٪', 'وقت الإعداد من يومين إلى 4 ساعات', '+200 اشتراك نشط', 'معدل التسرب -23٪'], tech: ['Next.js', 'Framer Motion', 'Stripe', 'Sanity CMS', 'Vercel', 'PostHog'] },
      { slug: 'trackroute', title: 'TrackRoute', category: 'اللوجستيات', tag: 'الاستراتيجية الرقمية', description: 'منصة تتبع لوجستيات في الوقت الفعلي مع تحسين المسارات وإدارة الأسطول.', fullDescription: 'TrackRoute منصة عمليات على مستوى المؤسسات تتتبع أساطير اللوجستيات في الوقت الفعلي وتُحسِّن المسارات تلقائيًا وتحلل أداء السائقين.', challenge: 'بيانات GPS متشتتة وتخطيط مسارات يدوي وغياب التقارير كانت المشاكل الرئيسية.', solution: 'تم تطبيق تكامل Google Maps Platform وتتبع مباشر عبر WebSocket وتحسين مسارات قائم على ML.', results: ['تكلفة الوقود -28٪', 'وقت التوصيل -35٪', 'تتبع 1200+ مركبة', 'شكاوى العملاء -60٪'], tech: ['React', 'Google Maps API', 'WebSocket', 'Python', 'TensorFlow', 'PostgreSQL'] },
    ],
  },
  about: {
    badge: 'قصتنا',
    title: 'نعيد تعريف الرقمي',
    subtitle: 'فريق يجمع بين الرؤية والتكنولوجيا والتصميم لنقل العلامات التجارية إلى المستقبل.',
    storyBadge: 'البداية',
    storyTitle: 'كيف بدأنا',
    storyText: ['في عام 2017، بدأ ثلاثة رواد أعمال في التساؤل عن سبب معاناة حتى أفضل العلامات التجارية في العالم مع التحول الرقمي. كانت الإجابة دائمًا نفسها: الاستراتيجية والتصميم والتقنية منفصلة عن بعضها.', 'كان الهدف من تأسيس GlobalDijital سد هذه الفجوة. وكالة تجمع التفكير الاستراتيجي مع التميز الجمالي والقوة التقنية.', 'اليوم نعمل مع أكثر من 40 علامة تجارية في 12 دولة وأنجزنا أكثر من 150 مشروعًا. لكننا لم نُنجز أفضل مشروع بعد — ربما يكون مشروعك.'],
    valuesBadge: 'قيمنا',
    valuesTitle: 'ما يميّزنا',
    values: [
      { icon: '🎯', title: 'هادف', text: 'كل بيكسل وكل سطر كود يخدم غرضًا. تحويل لا زخرفة.' },
      { icon: '🚀', title: 'السرعة والجودة', text: 'نقدم التسليم السريع مع جودة لا مثيل لها. لا يُضحَّى بأحدهما.' },
      { icon: '🤝', title: 'الشفافية', text: 'يعرف عملاؤنا في كل مرحلة ما يُفعَل ولماذا.' },
      { icon: '🧠', title: 'التعلم المستمر', text: 'التقنية تتطور بسرعة. نحن أيضًا. نخصص وقتًا منتظمًا لكل عضو للتدريب والاكتشاف.' },
      { icon: '🌍', title: 'منظور عالمي', text: 'تجربتنا في 12 دولة تمنحنا فهمًا للثقافات المحلية مع الحفاظ على رؤية عالمية.' },
      { icon: '💡', title: 'الإبداع', text: 'الحلول المعيارية تُنتج نتائج معيارية. نحن ننظر إلى كل مشروع بعين جديدة.' },
    ],
    teamBadge: 'فريقنا',
    teamTitle: 'الأشخاص خلف النجاح',
    team: [
      { name: 'كمال بيرجان', role: 'المؤسس والرئيس التنفيذي', avatar: 'KB' },
      { name: 'لينا مولر', role: 'مديرة التصميم', avatar: 'LM' },
      { name: 'أمير حسن', role: 'مدير التقنية', avatar: 'AH' },
      { name: 'بريا نير', role: 'مديرة الاستراتيجية', avatar: 'PN' },
      { name: 'كارلوس ريس', role: 'كبير المطورين', avatar: 'CR' },
      { name: 'يوكي تاناكا', role: 'باحثة تجربة المستخدم', avatar: 'YT' },
    ],
    timelineBadge: 'رحلتنا',
    timelineTitle: 'معالمنا',
    timeline: [
      { year: '2017', title: 'التأسيس', text: 'تأسست GlobalDijital في إسطنبول بثلاثة شركاء.' },
      { year: '2019', title: 'التوسع العالمي', text: 'دخلنا أوروبا والشرق الأوسط ووصلنا إلى أول 20 عميل.' },
      { year: '2021', title: 'الذكاء الاصطناعي', text: 'أطلقنا خط خدمات الذكاء الاصطناعي والأتمتة.' },
      { year: '2023', title: '+150 مشروع', text: 'أكملنا 150 مشروعًا مع أكثر من 40 علامة تجارية في 12 دولة.' },
      { year: '2025', title: 'حقبة جديدة', text: 'أطلقنا منصات SaaS الخاصة بنا لنبدأ التحول نحو شركة منتجات.' },
    ],
    ctaTitle: 'لنبني مشروعك الكبير القادم معًا',
    ctaText: 'قصتك تبدأ هنا. تواصل معنا.',
    ctaButton: 'تواصل معنا →',
  },
  contact: {
    badge: 'تواصل معنا',
    title: 'لنتحدث',
    subtitle: 'نحن مستعدون للحديث عن مشروعك. أكمل النموذج أو تواصل معنا مباشرة.',
    officeLabel: 'مكتبنا',
    officeAddress: 'ماسلاك، بيوكديره جاد. 237، 34485 سارير، إسطنبول، تركيا',
    phoneLabel: 'الهاتف',
    faqBadge: 'التعليمات',
    faqTitle: 'الأسئلة الشائعة',
    faqs: [
      { q: 'كم يستغرق المشروع؟', a: 'يتراوح بين 4 أسابيع و6 أشهر حسب النطاق. نقدم جدولًا زمنيًا واضحًا في الاجتماع الأول.' },
      { q: 'كيف يعمل التسعير؟', a: 'نقدم تسعيرًا بالمشروع أو نموذج تعاقد شهري. الاستشارة الأولى مجانية.' },
      { q: 'ما التقنيات التي تستخدمونها؟', a: 'Next.js وReact وNode.js وPython وThree.js والذكاء الاصطناعي والمزيد. نختار الأنسب لمشروعك.' },
      { q: 'هل يوجد دعم بعد الإطلاق؟', a: 'نعم. جميع المشاريع تُسلَّم مع حزمة دعم مضمونة لمدة 3 أشهر.' },
      { q: 'هل تعملون عن بُعد؟', a: 'نعم، نعمل عن بُعد كليًا مع عملاء في 12 دولة مختلفة.' },
    ],
  },
}

// ── ENGLISH ─────────────────────────────────────────────────────────────
const enPages = {
  projects: {
    title: 'Our Projects',
    subtitle: 'A curated showcase of digital experiences crafted for ambitious brands worldwide.',
    filterAll: 'All',
    backToHome: 'Back to Home',
    viewDetail: 'View Project →',
    projectItems: [
      { slug: 'nexcommerce', title: 'NexCommerce', category: 'E-Commerce', tag: 'Web Development', description: 'Full-stack e-commerce redesign with AI-powered product recommendations and lightning-fast checkout.', fullDescription: 'NexCommerce was designed to transform a legacy e-commerce platform into a modern, AI-driven shopping experience. Powered by Next.js 14, Stripe, and OpenAI, the platform increased conversion rates by 240%.', challenge: 'High bounce rates, slow page load times, and a mobile-incompatible interface were the key problems.', solution: 'Rebuilt from scratch using Next.js App Router, edge caching, and a personalized product recommendations engine.', results: ['Conversion +240%', 'Page load 0.8s', 'Mobile revenue +180%', 'Cart abandonment -45%'], tech: ['Next.js 14', 'TypeScript', 'Stripe', 'OpenAI', 'Tailwind CSS', 'PostgreSQL'] },
      { slug: 'finflow', title: 'FinFlow Dashboard', category: 'Fintech', tag: 'UI/UX + Dev', description: 'Real-time financial analytics dashboard with live market data and predictive modeling.', fullDescription: 'FinFlow is an enterprise-grade analytics dashboard system that enables portfolio managers to monitor real-time market data, run predictive models, and set alerts.', challenge: 'The existing system updated data daily, making real-time analysis impossible.', solution: 'Developed a WebSocket-based live data stream, D3.js charts, and a customizable widget system.', results: ['Live data with 0ms delay', 'Decision time -60%', 'User satisfaction 4.9/5', 'License from 12 agencies'], tech: ['React', 'D3.js', 'WebSocket', 'Node.js', 'Redis', 'TimescaleDB'] },
      { slug: 'aria-ai', title: 'Aria AI Assistant', category: 'AI Integration', tag: 'AI Integration', description: 'Context-aware enterprise chatbot with GPT-4 backbone and multilingual support.', fullDescription: 'Aria is a context-aware enterprise AI assistant built on GPT-4, designed to automate customer support operations. It supports 18 languages and provides full CRM integration.', challenge: 'A scalable system was needed to respond to high-volume support requests without interruption.', solution: 'Built using RAG architecture, a vector database, and a fine-tuned domain model.', results: ['Support cost -60%', 'Response time 2.1s', 'Customer satisfaction +34%', '18 languages supported'], tech: ['GPT-4', 'LangChain', 'Pinecone', 'FastAPI', 'React', 'Docker'] },
      { slug: 'medisync', title: 'MediSync', category: 'Healthcare', tag: 'Mobile App', description: 'Patient-centric health app with appointment scheduling, telemedicine, and health record management.', fullDescription: 'MediSync is a comprehensive health platform where patients can connect with doctors, track their medications, and receive telemedicine services via secure video.', challenge: 'HIPAA compliance, secure data storage, and low-latency video connection were the requirements.', solution: 'React Native with end-to-end encrypted WebRTC video and a FHIR-compliant health data model.', results: ['500K+ downloads', 'Clinical efficiency +45%', 'Video quality score 98%', 'Integration with 47 clinics'], tech: ['React Native', 'WebRTC', 'Node.js', 'PostgreSQL', 'AWS', 'HIPAA'] },
      { slug: 'launchpad', title: 'LaunchPad SaaS', category: 'SaaS', tag: 'Brand + Web', description: 'Conversion-optimized landing page platform with A/B testing and dynamic pricing.', fullDescription: 'LaunchPad is a comprehensive platform template system developed to rapidly create testable, conversion-focused landing pages for new SaaS products.', challenge: 'Designing a separate landing page for each product was time-consuming and produced inconsistent quality.', solution: 'Developed an A/B testing engine with CMS-based customization and a drag-and-drop editor with Stripe integration.', results: ['Average conversion rate 8.4%', 'Setup time 2 days → 4 hours', '200+ active subscriptions', 'Churn rate -23%'], tech: ['Next.js', 'Framer Motion', 'Stripe', 'Sanity CMS', 'Vercel', 'PostHog'] },
      { slug: 'trackroute', title: 'TrackRoute', category: 'Logistics', tag: 'Digital Strategy', description: 'Real-time logistics tracking platform with route optimization and fleet management.', fullDescription: 'TrackRoute is an enterprise-grade operations platform that tracks logistics fleets in real time, automatically optimizes routes, and analyzes driver performance.', challenge: 'Fragmented GPS data, manual route planning, and lack of reporting were the main problems.', solution: 'Applied Google Maps Platform integration, WebSocket-based live tracking, and ML-based route optimization.', results: ['Fuel cost -28%', 'Delivery time -35%', '1200+ vehicles tracked', 'Customer complaints -60%'], tech: ['React', 'Google Maps API', 'WebSocket', 'Python', 'TensorFlow', 'PostgreSQL'] },
    ],
  },
  about: {
    badge: 'Our Story',
    title: 'Redefining Digital',
    subtitle: 'A team that combines vision, technology, and design to take brands into the future.',
    storyBadge: 'Origins',
    storyTitle: 'How We Started',
    storyText: ['In 2017, three entrepreneurs began questioning why even the world\'s best brands struggled so much with digital transformation. The answer was always the same: strategy, design, and technology were disconnected.', 'The purpose of founding GlobalDijital was to close this gap. An agency that combines strategic thinking with aesthetic excellence and technical power.', 'Today we work with over 40 brands in 12 countries and have brought more than 150 projects to life. But we haven\'t done our best project yet — it could be yours.'],
    valuesBadge: 'Our Values',
    valuesTitle: 'What Makes Us Us',
    values: [
      { icon: '🎯', title: 'Purpose-Driven', text: 'Every pixel, every line of code serves a purpose. Conversion, not decoration.' },
      { icon: '🚀', title: 'Speed & Quality', text: 'We deliver fast and flawlessly. Neither is sacrificed for the other.' },
      { icon: '🤝', title: 'Transparency', text: 'Our clients know at every stage what is being done and why.' },
      { icon: '🧠', title: 'Continuous Learning', text: 'Technology evolves fast. So do we. We give every team member regular time for training and exploration.' },
      { icon: '🌍', title: 'Global Perspective', text: 'Our experience in 12 countries gives us deep cultural understanding while maintaining a global vision.' },
      { icon: '💡', title: 'Creativity', text: 'Standard solutions produce standard results. We look at every project with fresh eyes.' },
    ],
    teamBadge: 'Our Team',
    teamTitle: 'The People Behind It',
    team: [
      { name: 'Kemal Bircan', role: 'Founder & CEO', avatar: 'KB' },
      { name: 'Lena Müller', role: 'Design Director', avatar: 'LM' },
      { name: 'Amir Hassan', role: 'CTO', avatar: 'AH' },
      { name: 'Priya Nair', role: 'Strategy Director', avatar: 'PN' },
      { name: 'Carlos Reis', role: 'Lead Developer', avatar: 'CR' },
      { name: 'Yuki Tanaka', role: 'UX Researcher', avatar: 'YT' },
    ],
    timelineBadge: 'Our Journey',
    timelineTitle: 'Milestones',
    timeline: [
      { year: '2017', title: 'Founded', text: 'GlobalDijital was founded in Istanbul with 3 partners.' },
      { year: '2019', title: 'Global Growth', text: 'Expanded into Europe and the Middle East, reached our first 20 clients.' },
      { year: '2021', title: 'AI Services', text: 'Launched our AI & Automation service line.' },
      { year: '2023', title: '150+ Projects', text: 'Completed 150 projects with 40+ brands across 12 countries.' },
      { year: '2025', title: 'New Era', text: 'Launched our own SaaS platforms, beginning the transition to a product company.' },
    ],
    ctaTitle: "Let's Build Your Next Big Project Together",
    ctaText: 'Your story starts here. Reach out to us.',
    ctaButton: 'Get in Touch →',
  },
  contact: {
    badge: 'Contact Us',
    title: "Let's Talk",
    subtitle: "We're ready to discuss your project. Fill out the form or reach out directly.",
    officeLabel: 'Our Office',
    officeAddress: 'Maslak Mah. Büyükdere Cad. No:237, 34485 Sarıyer, Istanbul, Turkey',
    phoneLabel: 'Phone',
    faqBadge: 'FAQ',
    faqTitle: 'Frequently Asked Questions',
    faqs: [
      { q: 'How long does a project take?', a: 'It varies between 4 weeks and 6 months depending on scope. We provide a clear timeline in the first meeting.' },
      { q: 'How does pricing work?', a: 'We offer project-based pricing or a monthly retainer model. The first consultation is free.' },
      { q: 'What technologies do you use?', a: 'Next.js, React, Node.js, Python, Three.js, AI/ML, and more. We choose the best stack for your project.' },
      { q: 'Is there post-launch support?', a: 'Yes. All projects are delivered with a guaranteed 3-month support package.' },
      { q: 'Do you work remotely?', a: 'Yes, we work fully remote with clients in 12 different countries.' },
    ],
  },
}

// ── PATCH ─────────────────────────────────────────────────────────────
patchFile(path.join(dir, 'tr.ts'), trPages)
patchFile(path.join(dir, 'ar.ts'), arPages)
patchFile(path.join(dir, 'en.ts'), enPages)

console.log('All translation files patched successfully!')
