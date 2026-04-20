import type { Translations } from '../types'

const tr: Translations = {
  nav: {
    services: 'Hizmetler',
    work: 'Projeler',
    about: 'Hakkımızda',
    contact: 'İletişim',
    cta: 'İletişime Geç',
  },
  hero: {
    badge: 'Dünya Standartlarında Dijital Ajans',
    headline1: 'Dijital',
    headline2: 'Gelecekler İnşa Ediyoruz',
    craftLabel: 'Üretiyoruz',
    rotatingWords: [
      'Dijital Deneyimler',
      'Akıllı Sistemler',
      'Global Markalar',
      'Futuristik Ürünler',
    ],
    cta1: 'Projelerimizi Gör',
    cta2: 'Proje Başlat →',
    scrollLabel: 'Kaydır',
    stats: [
      { value: '150+', label: 'Proje' },
      { value: '8+', label: 'Yıl' },
      { value: '40+', label: 'Müşteri' },
      { value: '12', label: 'Ülke' },
    ],
  },
  services: {
    badge: 'Neler Yapıyoruz',
    title1: 'Markaları',
    title2: 'Harekete Geçiren Hizmetler',
    subtitle: 'Strateji\'den uygulamaya kadar tam bir dijital hizmet yelpazesi sunuyoruz — vizyonunuzu rekabet avantajına dönüştürmek için tasarlandı.',
    learnMore: 'Daha fazla',
    items: [
      {
        icon: '⚡',
        title: 'Web Geliştirme',
        description: 'Next.js, React ve modern araçlarla oluşturulmuş, hızlı ve piksel-mükemmel web deneyimleri.',
        color: '#00D4FF',
      },
      {
        icon: '📱',
        title: 'Mobil Uygulamalar',
        description: 'Kullanıcıların her gün keyifle kullandığı native ve cross-platform mobil uygulamalar.',
        color: '#7B2FBE',
      },
      {
        icon: '🎨',
        title: 'UI/UX Tasarım',
        description: 'Estetiği kusursuz kullanılabilirlikle dengeleyen insan odaklı tasarım sistemleri.',
        color: '#00D4FF',
      },
      {
        icon: '🤖',
        title: 'Yapay Zeka Entegrasyonu',
        description: 'Akıllı otomasyon, NLP ve ML modellerini doğrudan ürün iş akışlarınıza entegre edin.',
        color: '#7B2FBE',
      },
      {
        icon: '🚀',
        title: 'Dijital Strateji',
        description: 'Dönüşüm sağlayan veri odaklı yol haritaları, pazar konumlandırması ve pazara giriş stratejileri.',
        color: '#00D4FF',
      },
      {
        icon: '✦',
        title: 'Marka Kimliği',
        description: 'Premium konumlandırmayı pekiştiren tutarlı görsel kimlikler, logolar ve marka sistemleri.',
        color: '#7B2FBE',
      },
    ],
  },
  portfolio: {
    badge: 'Çalışmalarımız',
    title1: 'Seçili',
    title2: 'Projeler',
    subtitle: 'Dünyanın dört bir yanındaki iddialı markalar için hazırladığımız dijital deneyimlerden özenle seçilmiş bir vitrin.',
    viewProject: 'Projeye Bak',
    items: [
      {
        title: 'NexCommerce',
        category: 'E-Ticaret',
        description: 'Yapay zeka destekli ürün önerileri ve süper hızlı ödeme ile tam kapsamlı e-ticaret yeniden tasarımı.',
        tag: 'Web Geliştirme',
      },
      {
        title: 'FinFlow Dashboard',
        category: 'Fintech',
        description: 'Canlı piyasa verileri, portföy takibi ve tahmine dayalı modelleme ile gerçek zamanlı finansal analiz panosu.',
        tag: 'UI/UX + Geliştirme',
      },
      {
        title: 'Aria AI Asistan',
        category: 'Yapay Zeka Entegrasyonu',
        description: 'GPT-4 çekirdekli, çok dilli destekli ve CRM entegrasyonlu bağlam farkında kurumsal chatbot.',
        tag: 'Yapay Zeka',
      },
      {
        title: 'MediSync',
        category: 'Sağlık',
        description: 'Randevu planlaması, tele-tıp ve sağlık kaydı yönetimi ile hasta odaklı sağlık uygulaması.',
        tag: 'Mobil Uygulama',
      },
      {
        title: 'LaunchPad SaaS',
        category: 'SaaS',
        description: 'A/B testi, dinamik fiyatlandırma ve kusursuz onboarding akışı ile dönüşüm optimize edilmiş açılış sayfası.',
        tag: 'Marka + Web',
      },
      {
        title: 'TrackRoute',
        category: 'Lojistik',
        description: 'Rota optimizasyonu, filo yönetimi ve sürücü analitiği ile gerçek zamanlı lojistik takip platformu.',
        tag: 'Dijital Strateji',
      },
    ],
  },
  partners: {
    heading: 'Dünyanın En İyi Ekiplerinin Güveni',
  },
  about: {
    badge: 'Neden Biz',
    title1: 'Dijitalin',
    title2: 'Geleceği İçin İnşa Edildi',
    stats: [
      { value: 150, suffix: '+', label: 'Teslim Edilen Proje' },
      { value: 8, suffix: '+', label: 'Yıllık Deneyim' },
      { value: 40, suffix: '+', label: 'Dünya Genelinde Müşteri' },
      { value: 12, suffix: '', label: 'Ulaşılan Ülke' },
    ],
    manifesto: [
      'Biz GlobalDijital\'ız — her markanın dünya standartlarında bir dijital varlığa sahip olmayı hak ettiğine inanan strateji uzmanları, mühendisler ve tasarımcılardan oluşan bir kolektif.',
      'Hırslı girişimlerden Fortune 500 şirketlerine kadar sıradanlığı reddeden organizasyonlarla iş birliği yaptık. Sürecimiz iş birlikçi, icraatımız kararlı, sonuçlarımız ise kendi adına konuşuyor.',
      'Bu sadece web sitesi inşa etmekle ilgili değil. Bir miras inşa etmekle ilgili.',
    ],
    features: [
      'Çevik, iteratif teslimat modeli',
      'Tam sorumluluk alan özel ekip',
      'Lansman sonrası destek ve optimizasyon',
      'Şeffaf raporlama ve iletişim',
    ],
  },
  testimonials: {
    badge: 'Müşteri Hikayeleri',
    items: [
      {
        quote: 'GlobalDijital, dijital varlığımızı tamamen dönüştürdü. Nihai ürün her beklentimizi aştı — ayrıntılara verdikleri önem eşsiz.',
        name: 'Sarah Mitchell',
        company: 'NexCommerce CEO',
        avatar: 'SM',
        stars: 5,
      },
      {
        quote: 'Bu ekiple çalışmak ilk günden itibaren bir zevkti. Fintech panosunu zamanında, bütçe dahilinde teslim ettiler ve olağanüstü güzel görünüyor.',
        name: 'James Hargreaves',
        company: 'FinFlow CTO',
        avatar: 'JH',
        stars: 5,
      },
      {
        quote: 'İnşa ettikleri yapay zeka chatbotu destek yükümüzü %60 azalttı. İnanılmaz mühendislik ve düşünceli UX tasarımı bir arada.',
        name: 'Priya Sharma',
        company: 'Aria Technologies',
        avatar: 'PS',
        stars: 5,
      },
      {
        quote: 'Hasta uygulamamız konseptten App Store\'a 4 aydan kısa sürede ulaştı. Ekibin iletişimi ve profesyonelliği dünya standartlarındaydı.',
        name: 'Dr. Emre Yıldız',
        company: 'MediSync Kurucu',
        avatar: 'EY',
        stars: 5,
      },
      {
        quote: 'GlobalDijital\'ın stratejik içgörüleri tek başına yatırıma değerdi. Sonraki uygulama? Kusursuz. Her teknoloji liderine tavsiye ederim.',
        name: 'Clara Fontaine',
        company: 'LaunchPad CPO',
        avatar: 'CF',
        stars: 5,
      },
    ],
  },
  contact: {
    headline1: "Birlikte Harika Bir",
    headline2: "Şey İnşa Edelim",
    subtitle: 'Dijital varlığınızı dönüştürmeye hazır mısınız? Bize bir mesaj gönderin, 24 saat içinde yanıt veririz.',
    emailLabel: 'E-posta',
    followLabel: 'Bizi Takip Edin',
    expectLabel: 'Neler Beklemeli',
    expects: ['24 saat içinde yanıt', 'Ücretsiz 30 dakikalık keşif görüşmesi', 'Özel proje teklifi', 'Taahhüt gerektirmez'],
    form: {
      nameLabel: 'Adınız',
      namePlaceholder: 'Ahmet Yılmaz',
      emailLabel: 'E-posta Adresi',
      emailPlaceholder: 'ahmet@sirket.com',
      messageLabel: 'Mesajınız',
      messagePlaceholder: 'Projenizi anlatın...',
      submit: 'Mesaj Gönder →',
      sending: 'Gönderiliyor...',
      successTitle: 'Mesaj İletildi!',
      successText: '24 saat içinde sizinle iletişime geçeceğiz. Harika bir şey inşa etmeye hazır olun.',
    },
  },
  footer: {
    copyright: '© 2025 GlobalDijital. Tüm hakları saklıdır.',
  },
  pages: {
    "projects": {
        "title": "Projelerimiz",
        "subtitle": "Dünya genelindeki iddialı markalar için hazırladığımız dijital deneyimlerden özenle seçilmiş bir vitrin.",
        "filterAll": "Tümü",
        "backToHome": "Ana Sayfaya Dön",
        "viewDetail": "Projeyi İncele →",
        "projectItems": [
            {
                "slug": "nexcommerce",
                "title": "NexCommerce",
                "category": "E-Ticaret",
                "tag": "Web Geliştirme",
                "description": "Yapay zeka destekli ürün önerileri ile tam kapsamlı e-ticaret yeniden tasarımı.",
                "fullDescription": "NexCommerce, eski ve yavaş bir e-ticaret platformunu yapay zeka tabanlı modern bir alışveriş deneyimine dönüştürme hedefiyle tasarlandı. Dönüşüm oranlarını %240 artırdı.",
                "challenge": "Yüksek sıçrama oranı, yavaş sayfa yükleme süreleri ve mobil uyumsuz arayüz.",
                "solution": "Next.js App Router, edge caching ve kişiselleştirilmiş öneri motoru ile sıfırdan yeniden inşa edildi.",
                "results": [
                    "Dönüşüm +%240",
                    "Sayfa yükleme 0.8sn",
                    "Mobil gelir +%180",
                    "Sepet terk oranı -%45"
                ],
                "tech": [
                    "Next.js 14",
                    "TypeScript",
                    "Stripe",
                    "OpenAI",
                    "Tailwind CSS",
                    "PostgreSQL"
                ]
            },
            {
                "slug": "finflow",
                "title": "FinFlow Dashboard",
                "category": "Fintech",
                "tag": "UI/UX + Geliştirme",
                "description": "Canlı piyasa verileri ve tahmine dayalı modelleme ile gerçek zamanlı finansal analiz panosu.",
                "fullDescription": "FinFlow, portföy yöneticilerinin gerçek zamanlı piyasa verilerini izlemesini ve alarm kurmasını sağlayan kurumsal düzeyde bir analitik pano sistemidir.",
                "challenge": "Mevcut sistem günlük veri güncelliyordu, gerçek zamanlı analiz mümkün değildi.",
                "solution": "WebSocket tabanlı canlı veri akışı, D3.js grafikleri ve özelleştirilebilir widget sistemi geliştirildi.",
                "results": [
                    "0ms gecikme ile canlı veri",
                    "Karar süresi -%60",
                    "Kullanıcı memnuniyeti 4.9/5",
                    "12 ajandan lisans anlaşması"
                ],
                "tech": [
                    "React",
                    "D3.js",
                    "WebSocket",
                    "Node.js",
                    "Redis",
                    "TimescaleDB"
                ]
            },
            {
                "slug": "aria-ai",
                "title": "Aria AI Asistan",
                "category": "Yapay Zeka",
                "tag": "Yapay Zeka Entegrasyonu",
                "description": "GPT-4 çekirdekli, çok dilli destekli kurumsal chatbot.",
                "fullDescription": "Aria, müşteri destek operasyonlarını otomatikleştirmek için tasarlanmış, GPT-4 tabanlı kurumsal yapay zeka asistanıdır. 18 dil destekler ve CRM sistemleriyle tam entegrasyon sağlar.",
                "challenge": "Yüksek hacimli destek taleplerine yanıt verebilecek ölçeklenebilir bir sistem gerekiyordu.",
                "solution": "RAG mimarisi, vektör veritabanı ve ince ayarlı domain modeli kullanılarak oluşturuldu.",
                "results": [
                    "Destek maliyeti -%60",
                    "Yanıt süresi 2.1sn",
                    "Müşteri memnuniyeti +%34",
                    "18 dil desteği"
                ],
                "tech": [
                    "GPT-4",
                    "LangChain",
                    "Pinecone",
                    "FastAPI",
                    "React",
                    "Docker"
                ]
            },
            {
                "slug": "medisync",
                "title": "MediSync",
                "category": "Sağlık",
                "tag": "Mobil Uygulama",
                "description": "Randevu planlama, tele-tıp ve sağlık kaydı yönetimi ile hasta odaklı sağlık uygulaması.",
                "fullDescription": "MediSync; hastaların doktorlarıyla bağlantı kurabileceği, ilaçlarını takip edebileceği ve güvenli video ile tele-tıp hizmeti alabileceği kapsamlı bir sağlık platformudur.",
                "challenge": "HIPAA uyumu, güvenli veri depolama ve düşük gecikmeli video bağlantısı.",
                "solution": "React Native, end-to-end şifreli WebRTC video ve FHIR uyumlu sağlık veri modeli kullanıldı.",
                "results": [
                    "500K+ indirme",
                    "Klinik verimlilik +%45",
                    "Video kalite skoru %98",
                    "47 klinik ile entegrasyon"
                ],
                "tech": [
                    "React Native",
                    "WebRTC",
                    "Node.js",
                    "PostgreSQL",
                    "AWS",
                    "HIPAA"
                ]
            },
            {
                "slug": "launchpad",
                "title": "LaunchPad SaaS",
                "category": "SaaS",
                "tag": "Marka + Web",
                "description": "A/B testi ve dinamik fiyatlandırma ile dönüşüm optimize edilmiş açılış sayfası.",
                "fullDescription": "LaunchPad, yeni SaaS ürünleri için hızla test edilebilir, dönüşüm odaklı açılış sayfası oluşturmak için geliştirilmiş kapsamlı bir platform şablon sistemidir.",
                "challenge": "Her ürün için ayrı açılış sayfası tasarlamak zaman alıcıydı ve tutarsız kalite üretiyordu.",
                "solution": "A/B testi motoru, CMS tabanlı özelleştirme ve Stripe entegrasyonuyla drag-drop editör geliştirildi.",
                "results": [
                    "Dönüşüm oranı ortalama %8.4",
                    "Kurulum süresi 2gün→4saat",
                    "200+ aktif abonelik",
                    "Churn oranı -%23"
                ],
                "tech": [
                    "Next.js",
                    "Framer Motion",
                    "Stripe",
                    "Sanity CMS",
                    "Vercel",
                    "PostHog"
                ]
            },
            {
                "slug": "trackroute",
                "title": "TrackRoute",
                "category": "Lojistik",
                "tag": "Dijital Strateji",
                "description": "Rota optimizasyonu ve filo yönetimi ile gerçek zamanlı lojistik takip platformu.",
                "fullDescription": "TrackRoute, lojistik filolarını gerçek zamanlı olarak izleyen, otomatik rota optimizasyonu yapan ve sürücü performansı analiz eden kurumsal düzeyde bir operasyon platformudur.",
                "challenge": "Dağınık GPS verileri, manuel rota planlaması ve raporlama eksikliği ana sorunlardı.",
                "solution": "Google Maps Platform entegrasyonu, WebSocket tabanlı canlı takip ve ML tabanlı rota optimizasyonu uygulandı.",
                "results": [
                    "Yakıt maliyeti -%28",
                    "Teslimat süresi -%35",
                    "1200+ araç takibi",
                    "Müşteri şikayeti -%60"
                ],
                "tech": [
                    "React",
                    "Google Maps API",
                    "WebSocket",
                    "Python",
                    "TensorFlow",
                    "PostgreSQL"
                ]
            }
        ]
    },
    "about": {
        "badge": "Hikayemiz",
        "title": "Dijitali Yeniden Tanımlıyoruz",
        "subtitle": "Vizyon, teknoloji ve tasarımı bir araya getirerek markaları geleceğe taşıyan bir ekibiz.",
        "storyBadge": "Başlangıç",
        "storyTitle": "Nasıl Başladık",
        "storyText": [
            "2017'de üç girişimci, dünyanın en iyi markalarının bile dijital dönüşümde neden bu kadar zorlandığını sorgulamaya başladı. Cevap her zaman aynıydı: strateji, tasarım ve teknoloji birbirinden kopuktu.",
            "GlobalDijital'ı kurmanın amacı bu boşluğu kapatmaktı. Stratejik düşünceyi estetik mükemmellikle ve teknik güçle birleştiren bir ajans.",
            "Bugün 12 ülkede 40'tan fazla marka ile çalışıyor, 150'den fazla projeyi hayata geçirdik. Ama en iyi projeyi henüz yapmadık — bir sonraki sizin projeniz olabilir."
        ],
        "valuesBadge": "Değerlerimiz",
        "valuesTitle": "Bizi Biz Yapan",
        "values": [
            {
                "icon": "🎯",
                "title": "Amaç Odaklı",
                "text": "Her piksel, her satır kod bir amaca hizmet eder. Dekorasyon değil, dönüşüm."
            },
            {
                "icon": "🚀",
                "title": "Hız & Kalite",
                "text": "Hızlı teslimat ile mükemmel kaliteyi birlikte sunarız. Biri diğerini feda etmez."
            },
            {
                "icon": "🤝",
                "title": "Şeffaflık",
                "text": "Müşterilerimiz her aşamada ne yapıldığını, neden yapıldığını bilir."
            },
            {
                "icon": "🧠",
                "title": "Sürekli Öğrenme",
                "text": "Teknoloji hızla gelişir. Biz de. Her üyeye düzenli eğitim ve keşfetme süresi tanırız."
            },
            {
                "icon": "🌍",
                "title": "Global Bakış",
                "text": "12 ülkedeki deneyimimiz yerel kültürleri anlamamızı sağlar, küresel bakışı koruruz."
            },
            {
                "icon": "💡",
                "title": "Yaratıcılık",
                "text": "Standart çözümler standart sonuçlar üretir. Biz her projeye taze gözle bakarız."
            }
        ],
        "teamBadge": "Ekibimiz",
        "teamTitle": "Arkasındaki İnsanlar",
        "team": [
            {
                "name": "Kemal Bircan",
                "role": "Kurucu & CEO",
                "avatar": "KB"
            },
            {
                "name": "Lena Müller",
                "role": "Tasarım Direktörü",
                "avatar": "LM"
            },
            {
                "name": "Amir Hassan",
                "role": "Teknoloji Direktörü",
                "avatar": "AH"
            },
            {
                "name": "Priya Nair",
                "role": "Strateji Direktörü",
                "avatar": "PN"
            },
            {
                "name": "Carlos Reis",
                "role": "Baş Geliştirici",
                "avatar": "CR"
            },
            {
                "name": "Yuki Tanaka",
                "role": "UX Araştırmacısı",
                "avatar": "YT"
            }
        ],
        "timelineBadge": "Yolculuğumuz",
        "timelineTitle": "Kilometre Taşlarımız",
        "timeline": [
            {
                "year": "2017",
                "title": "Girişim",
                "text": "GlobalDijital, İstanbul'da 3 ortakla kuruldu."
            },
            {
                "year": "2019",
                "title": "Global Büyüme",
                "text": "Avrupa ve Orta Doğuya adım attık, ilk 20 müşterimize ulaştık."
            },
            {
                "year": "2021",
                "title": "Yapay Zeka",
                "text": "AI & Otomasyon hizmet kolunu oluşturduk."
            },
            {
                "year": "2023",
                "title": "150+ Proje",
                "text": "12 ülkede 40+ markayla çalışarak 150 projeyi tamamladık."
            },
            {
                "year": "2025",
                "title": "Yeni Dönem",
                "text": "SaaS platformlarımızı launch ederek ürün şirketine dönüşümü başlattık."
            }
        ],
        "ctaTitle": "Bir Sonraki Büyük Projenizi Birlikte Yapalım",
        "ctaText": "Hikayeniz burada başlıyor. Bize ulaşın.",
        "ctaButton": "İletişime Geç →"
    },
    "contact": {
        "badge": "Bize Ulaşın",
        "title": "Konuşalım",
        "subtitle": "Projeniz hakkında konuşmaya hazırız. Formu doldurun ya da doğrudan ulaşın.",
        "officeLabel": "Ofisimiz",
        "officeAddress": "Maslak Mah. Büyükdere Cad. No:237, 34485 Sarıyer, İstanbul, Türkiye",
        "phoneLabel": "Telefon",
        "faqBadge": "SSS",
        "faqTitle": "Sık Sorulan Sorular",
        "faqs": [
            {
                "q": "Bir proje ne kadar sürer?",
                "a": "Projenin kapsamına göre 4 hafta ile 6 ay arasında değişir. İlk görüşmede net bir zaman çerçevesi sunarız."
            },
            {
                "q": "Fiyatlandırma nasıl çalışır?",
                "a": "Proje bazlı veya aylık retainer modeli sunarız. İlk danışma ücretsizdir."
            },
            {
                "q": "Hangi teknolojileri kullanırsınız?",
                "a": "Next.js, React, Node.js, Python, Three.js, AI/ML ve daha fazlası. Projenize en uygun stack'i seçeriz."
            },
            {
                "q": "Lansman sonrası destek var mı?",
                "a": "Evet. Tüm projeler 3 aylık garantili destek paketi ile teslim edilir."
            },
            {
                "q": "Uzaktan çalışıyor musunuz?",
                "a": "Evet, 12 farklı ülkedeki müşterilerle tamamen uzaktan çalışıyoruz."
            }
        ]
    }
},
}

export default tr
