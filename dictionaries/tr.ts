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
    title: "Donanımı zeka ile birleştiriyorum.",
    description:
      "Mikrodenetleyiciler için yazılım geliştiriyorum; RTOS, çevre birimleri ve haberleşme arayüzleriyle çalışıyorum. Yazılım ile donanımın birleştiği sistemler ilgimi çekiyor — elektronik bileşenlere zeka kazandıran gömülü çözümler tasarlıyorum",
    cta: "İletişime Geç",
  },
  about: {
    title: "Hakkımda",
    p1: "Ben Muzaffer Ali Ordu, donanım ile yazılım arasındaki köprüyü kuran güvenilir ve verimli gömülü sistem çözümleri geliştiriyorum. Uzmanlık alanım; mikrodenetleyiciler, gerçek zamanlı işletim sistemleri (RTOS), düşük seviyeli programlama ve donanım arayüzleridir ve daha fazlası",
    p2: " ",
    p3: "Son zamanlarda çalıştığım bazı teknolojiler:",
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
          "Elektronik kontrol ünitesinin yazılımını geliştirdim",
          "Yazılım mimarisini tasarladım",
          "Elektrik tahrik algoritmalarını uyguladım",
          "İzleme ve güvenlik sistemlerini entegre ettim",
          "Devre şemalarını çizdim ve PCB tasarladım",
          "Endüstriyel dayanıklılık gerekliliklerini karşıladım"
        ],
      },
      {
        company: "CPT TMH",
        title: "Baş Araştırma Mühendisi",
        period: "Kasım 2024 - günümüz",
        description: [
          "STM32, TI, Renesas ve NXP mikrodenetleyiciler üzerinde C/C++ ile güç dönüştürücü kontrol yazılımları geliştiriyorum",
          "MATLAB/Simulink kullanarak dönüştürücü kontrol algoritmalarının modelleme, analiz ve optimizasyonunu yapıyorum",
          "Altium Designer ve KiCad ile kontrol kartlarının şematik tasarımını ve PCB çizimini yapıyorum",
          "Enerji depolama sistemlerinin izlenmesi için gömülü Linux yazılımları geliştiriyorum",
          "I2C, SPI ve CAN protokolleriyle çevre birimleriyle sürücü ve haberleşme arayüzleri geliştiriyorum"
        ],
      },
    ],
  },
  education: {
    title: "Eğitim",
    schools: [
      {
        school: "Mühendislik Sınıfı",
        degree: "Kurçatov Okulu",
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
          "Okul kullanımı için Swift dilinde bir dijital not defteri uygulaması geliştirdim",
        ],
      },
      {
        school: "Elektrik Enerjisi ve Elektrik Mühendisliği",
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
          "Machine Learning Temelleri",
        ],
        activities: [
          "Çeşitli platformlarda teknik kursları tamamladım",
          "Teknoloji konferanslarına ve atölye çalışmalarına düzenli olarak katılıyorum",
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
          "DC-DC dönüştürücü için bir kontrol sistemi geliştirdim. Elektrik şemasını ve baskı devre kartını (PCB) tasarladım, donanımın kararlı çalışmasını sağladım. Kontrol algoritmalarını Matlab Simulink ortamında gerçekleştirdim ve doğruladım. Bu proje, güç elektroniği tasarımı ile dijital kontrol sistemini bir araya getirdi.",
        tech: ["C/C++", "STM32", "TI", "Altium Designer", "MATLAB/Simulink", "Power Electronics", "Thermal calculation"],
      },
      {
        title: "Converter Kontrol Sistemi",
        images: ["/images/projects/drv1.png", "/images/projects/drv2.png", "/images/projects/drv3.png", "/images/projects/drv4.png", "/images/projects/drv5.png"],
        description:
          "DC-DC dönüştürücü için bir kontrol sistemi geliştirdim. Elektrik şemasını ve baskı devre kartını (PCB) tasarladım, donanımın kararlı çalışmasını sağladım. Kontrol algoritmalarını Matlab Simulink ortamında gerçekleştirdim ve doğruladım. Bu proje, güç elektroniği tasarımı ile dijital kontrol sistemini bir araya getirdi.",
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
          "Gelecekteki projelerde kullanılmak üzere STM32 mikrodenetleyici içeren modüler bir PCB tasarladım. Modüler mimari sayesinde farklı çevre birimleri ve kontrol yapılarıyla kolayca entegre edilebilir. Hata ayıklama, firmware güncelleme ve çeşitli haberleşme arayüzleri desteklenmektedir. Bu modül, gömülü sistemler için hızlı prototipleme ve geliştirme sürecini kolaylaştırmak amacıyla tasarlandı.",
        tech: ["STM32", "Modular design", "PCB", "Altium Designer"],
      },
    ],
  },
  contact: {
    preTitle: "Sırada Ne Var?",
    title: "İletişime Geç",
    description:
      "İş birliğine ve yeni mühendislik projelerine açığım. Projelerinizi konuşmak için bana e-posta yoluyla ulaşabilirsiniz",
    cta: "Merhaba de",
  },
  languages: {
    en: "English",
    tr: "Türkçe",
    ru: "Русский",
  },
}
