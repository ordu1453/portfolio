export const tr = {
  nav: {
    about: "Hakkımda",
    experience: "Deneyim",
    education: "Eğitim",
    work: "Projeler",
    contact: "İletişim",
  },
  hero: {
    greeting: "Merhaba, benim adım",
    name: "Ali Ordu",
    title: "Yazılım, donanımın ruhudur — ben onu yazıyorum.",
    description:
      "<strong>Mikrodenetleyiciler</strong> için yazılım geliştiriyorum; RTOS, çevre birimleri ve haberleşme arayüzleriyle çalışıyorum. <strong>Yazılım</strong> ile <strong>donanımın</strong> birleştiği sistemler ilgimi çekiyor — <strong>elektroniğe</strong> zeka kazandıran <strong>gömülü</strong> çözümler tasarlıyorum",
    cta: "İletişime Geç",
  },
  about: {
    title: "Hakkımda",
    p1: "Ben <strong>Muzaffer Ali Ordu</strong>, <strong>donanım</strong> ile <strong>yazılım</strong> arasındaki köprüyü kuran güvenilir ve verimli <strong>gömülü sistem</strong> çözümleri geliştiriyorum. Uzmanlık alanım; <strong>mikrodenetleyiciler</strong>, gerçek zamanlı <strong>işletim sistemleri</strong> (RTOS), düşük seviyeli <strong>programlama</strong>, <strong>donanım</strong> arayüzleri ve daha fazlası",
    p2: " ",
    p3: "Son zamanlarda çalıştığım bazı <strong>teknolojiler</strong>:",
    technologies: ["C/C++", "Python", "STM32", "Linux", "Altium Designer", "KiCAD", "MATLAB/Simulink", "TI", "Renesas", "Raspberry PI", "Keil uVision", "STM32 CubeIDE", "MathCAD", "Git"],
  },
  experience: {
    title: "Çalıştığım Yerler",
    positions: [
      {
        company: "Bauman Moskova Devlet TÜ",
        title: "Yazılımcı",
        period: "Nisan - Kasım 2024",
        description: [
          "Elektronik kontrol ünitesi yazılımı geliştirme",
          "Yazılım mimarisi tasarlama",
          "Elektrik tahrik algoritmalarını uygulama",
          "İzleme ve güvenlik sistemlerini entegre etme",
          "Devre şemalarını çizme ve PCB tasarlama",
          "Endüstriyel dayanıklılık gerekliliklerini karşılama"
        ],
      },
      {
        company: "CPT TMH",
        title: "Lider Araştırma Mühendisi",
        period: "Kasım 2024 - günümüz",
        description: [
          "STM32, TI, Renesas ve NXP mikrodenetleyiciler üzerinde C/C++ ile güç dönüştürücü kontrol yazılımları geliştirme",
          "MATLAB/Simulink kullanarak dönüştürücü kontrol algoritmalarını modelleme, analiz ve optimizasyonu",
          "Altium Designer ve KiCad ile kontrol kartlarının şematik tasarımı ve PCB çizimi",
          "Enerji depolama sistemlerinin izlenmesi için gömülü Linux yazılımları geliştirme",
          "I2C, SPI ve CAN protokolleriyle çevre birimleriyle sürücü ve haberleşme arayüzleri geliştirme"
        ],
      },
    ],
  },
  education: {
    title: "Eğitim",
    schools: [
      {
        school: "Mühendislik Sınıfı",
        degree: "Kurçatov Moskova Devlet Lisesi",
        period: "2018 - 2021",
        coursework: [
          "Veri Yapıları ve Algoritmalar",
          "Object-Oriented Design",
          "Veritabanı Tasarımı",
          "Bilgisayar Sistemleri",
          "Yazılım Geliştirme",
          "Web Geliştirme",
        ],
        activities: [
          "Okul kullanımı için Swift dilinde bir dijital not defteri uygulaması geliştirme",
        ],
      },
      {
        school: "Elektrik ve Elektronik Mühendisliği",
        degree: "Bauman Moskova Devlet Teknik Üniversitesi",
        period: "2021 - 2025",
        gpa: "Lisans Derecesi",
        coursework: [
          "Elektrikli Araç Tasarımı",
          "Teknik Sistemlerin Kontrolü",
          "Elektrikli Araçların Hareket Teorisi",
          "Elektrikli Araçların Hesaplama ve Tasarım Yöntemleri",
          "Araç İçi Bilgi ve Kontrol Sistemleri",
          "Elektrikli Araçların Elektronik ve Mikroişlemci Teknolojisi",
          "Web Geliştirme",
          "ML Temelleri",
        ],
        activities: [
          "Çeşitli platformlarda teknik kurslar tamamlandı",
        ],
      },
    ],
    courseworkTitle: "İlgili Dersler",
    activitiesTitle: "Aktiviteler ve Başarılar",
  },
  projects: {
    title: "Yaptığım Bazı Projeler",
    featuredProject: "Öne Çıkan Proje",
    projects: [
      {
        title: "Invertör",
        images: ["/images/projects/vkr1.png", "/images/projects/vkr2.png", "/images/projects/vkr3.png", "/images/projects/vkr4.png", "/images/projects/vkr5.png", "/images/projects/vkr6.png"],
        description:
          "Elektrik motorunu kontrol etmek için bir inverter geliştirildi. Elektrik şeması ve baskı devre kartı (PCB) tasarlandı. Aynı zamanda Matlab Simulink ortamında kontrol algoritmaları modellendi ve doğrulandı. Bu proje, donanım ve yazılımın motor kontrolü özelinde başarılı bir şekilde entegre edilebileceğini gösterdi.",
        tech: ["C/C++", "STM32", "TI", "Altium Designer", "MATLAB/Simulink", "Power Electronics", "Thermal calculation"],
      },
      {
        title: "Converter Kontrol Sistemi",
        images: ["/images/projects/drv1.png", "/images/projects/drv2.png", "/images/projects/drv3.png", "/images/projects/drv4.png", "/images/projects/drv5.png"],
        description:
          "DC-DC dönüştürücü için bir kontrol sistemi geliştirildi. Elektrik şeması ve baskı devre kartı (PCB) tasarlandı. Kontrol algoritmaları Matlab Simulink ortamında gerçekleştirildi ve doğrulandı. Bu proje, güç elektroniği tasarımı ile dijital kontrol sistemini bir araya getirdi.",
        tech: ["C/C++", "SWD", "PCB", "CAN", "I2C", "Fiber Optic Transmitters", "ADC/DAC", "MATLAB/Simulink", "Power Systems"],
        github: "https://github.com/ordu1453/CSS_TMH",
        demo: ""
      },
      {
        title: "STM32 Modülleri",
        images: [
          "/images/projects/g1.png",
          "/images/projects/g2.png",

        ],
        description:
          "Gelecekteki projelerde kullanılmak üzere STM32 mikrodenetleyici içeren modüler bir PCB tasarlandı. Modüler mimari sayesinde farklı çevre birimleri ve kontrol yapılarıyla kolayca entegre edilebilir. Hata ayıklama, firmware güncelleme ve çeşitli haberleşme arayüzleri desteklenmektedir. Bu modül, gömülü sistemler için hızlı prototipleme ve geliştirme sürecini kolaylaştırmak amacıyla tasarlandı.",
        tech: ["STM32", "Modular design", "PCB", "Altium Designer"],
      },
    ],
  },
  contact: {
    preTitle: "Sırada Ne Var?",
    title: "İletişime Geç",
    description:
      "İş birliğine ve yeni mühendislik projelerine açığım. Projelerinizi ve iş tekliflerinizi istişare etmek için bana e-posta yoluyla ulaşabilirsiniz",
    cta: "Merhaba de",
  },
  languages: {
    en: "English",
    tr: "Türkçe",
    ru: "Русский",
  },
}
