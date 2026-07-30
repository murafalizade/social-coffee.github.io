(function () {
    const translations = {
        az: {
            meta: { title: `Social Coffee - Qoşul. Yaşa. Unut.` },
            nav: { how: `Necə İşləyir`, app: `Mobil Tətbiq`, faq: `TVS`, contact: `Əlaqə`, partner: `Tərəfdaş Ol` },
            hero: {
                badge: `Social Coffee`,
                title: `QR kodu skan et, real insanlarla tanış ol`,
                description: `Daimi profillər yoxdur, sonsuz mesajlaşmalar yoxdur. Sadəcə real həyatda olduğu kimi real əlaqələr. Məkandan ayrıldığınız anda hər şey silinir.`,
                ctaPrimary: `Erkən Girişə Qoşul`,
                ctaSecondary: `Necə İşləyir?`
            },
            phone: {
                scanStatus: `QR Kod Skan Edilir...`,
                radarStatus: `Yaxınlıqdakılar Axtarılır...`,
                matchBanner: `🎉 Yeni Uyğunlaşma!`,
                chatIn: `Salam! ☕ Birlikdə söhbət edək?`,
                chatOut: `Salam! Əlbəttə, mən pəncərə tərəfdəyəm.`,
                chatStatus: `Aktiv Söhbət`,
                resetTitle: `Sessiya Bitdi`,
                resetDesc: `Məkandan ayrıldınız. Bütün söhbət keçmişi və məlumatlar birdəfəlik silindi!`,
                resetStatus: `Məlumatlar Silindi`
            },
            how: {
                title: `Social Coffee Necə İşləyir?`,
                step1: { title: `QR Kodu Skan Edin`, text: `Hər bir kafe, restoran və ya sosial məkanda unikal QR kod var. Həmin məkandakı müvəqqəti icmaya qoşulmaq və kimlərin orada olduğunu öyrənmək üçün gəldiyiniz zaman QR kodu skan edin.` },
                step2: { title: `Statusunuzu Təyin Edin`, text: `Nə cür əlaqələr axtardığınızı seçin: şəbəkələşmə (networking), dostluq, birlikdə dərs oxumaq və ya sadəcə çay/kofe yoldaşı. Maraqlarınızı və uyğunluq vaxtınızı qeyd edin.` },
                step3: { title: `Uyğunlaşın və Əlaqə Qurun`, text: `Eyni məkanda olan oxşar düşüncəli insanlarla uyğunlaşın. Söhbətə başlayın, təcrübələrinizi paylaşın və bir fincan kofe arxasında real əlaqələr qurun.` },
                step4: { title: `Tərk Edin və Sıfırlayın`, text: `Kafenidən ayrıldıqda, avtomatik olaraq bütün söhbətlərdən çıxarılırsınız. Mesajlar silinir, uyğunlaşmalar başa çatır, bu da tam məxfiliyi təmin edir və real dünyada görüşləri təşviq edir.` }
            },
            insights: {
                title: `Niyə Social Coffee?`,
                card1: { title: `Real Əlaqələr`, text: `Saxta profillər və ya sonsuz sürüşdürmələr (scrolling) yoxdur. Eyni fiziki məkanda və eyni vaxtda olan real insanlarla əlaqə saxlayın.` },
                card2: { title: `Tam Məxfilik`, text: `Məkandan ayrıldıqda söhbətləriniz silinir. Daimi rəqəmsal iz, məlumat toplanması və ya alqoritm manipulyasiyası yoxdur. Sadəcə səmimi, müvəqqəti insan əlaqəsi.` },
                card3: { title: `Məqsədli Şəbəkələşmə`, text: `Frilanserlər, məsafədən işləyənlər və yerli əlaqələrini genişləndirmək istəyən hər kəs üçün mükəmməldir. Süni və məcburi görünməyən peşəkar networking.` }
            },
            app: {
                title: `Tətbiqi Yükləyin`,
                text: `Social Coffee tezliklə iOS və Android platformalarında rəsmi olaraq istifadəyə veriləcək. Sevdiyiniz kafelərdə və yerli məkanlarda müvəqqəti sosial şəbəkəni ilk təcrübə edənlərdən olmaq üçün erkən giriş proqramımıza qoşulun.`,
                soon: `Yaxında`,
                appStore: `App Store`,
                googlePlay: `Google Play`,
                roadmap1: { step: `Mərhələ 1`, status: `Aktiv`, title: `Erkən Giriş və Qeydiyyat`, text: `İlkin sınaq mərhələsinə qoşulun və platformadakı yerinizi ilk tutanlardan olun.` },
                roadmap2: { step: `Mərhələ 2`, status: `Hazırlanır`, title: `Bakıda Pilot Layihə`, text: `Seçilmiş məkanlarda QR kodların yerləşdirilməsi.` },
                roadmap3: { step: `Mərhələ 3`, status: `Tezliklə`, title: `Rəsmi Buraxılış (Payız 2026)`, text: `Tətbiqin App Store və Google Play-də hamı üçün tam istifadəyə verilməsi.` }
            },
            faq: {
                title: `Tez-tez Verilən Suallar`,
                q1: `Məkanın təsdiqlənməsi necə işləyir?`, a1: `Həqiqətən məkanda olduğunuzu təmin etmək üçün QR kod skanından və GPS yoxlanışından istifadə edirik. QR kod əsas yoxlama üsuludur, GPS isə koordinatların saxtalaşdırılmasının qarşısını almaq üçün köməkçi vasitədir.`,
                q2: `Məkandan ayrıldıqda məlumatlarıma nə olur?`, a2: `Bir məkandan ayrıldığınız zaman bütün söhbətlər, uyğunlaşmalar və məkana aid məlumatlar birdəfəlik silinir. Biz söhbət tarixçəsini saxlamırıq və müəyyən məkanlara bağlı daimi profillər saxlamırıq.`,
                q3: `Məkandan ayrıldıqdan sonra kiminləsə yenidən əlaqə saxlaya bilərəm?`, a3: `Xeyr, elə məqsəd də budur! Social Coffee real həyatda əlaqə qurmağı təşviq edir. Əlaqədə qalmaq istəyirsinizsə, hər ikiniz oradayken əlaqə məlumatlarınızı mübadilə edin.`,
                q4: `Saxta profillərin və ya narahatlığın qarşısını necə alırsınız?`, a4: `İstifadəçilərin iştirak etmək üçün fiziki olaraq məkanda olması vacib olduğundan saxta profillər təbii olaraq məhdudlaşır. Eyni zamanda güclü şikayət etmə sistemimiz var və qaydaları pozan istifadəçiləri müəyyən məkanlardan və ya tamamilə platformadan bloklaya bilərik.`,
                q5: `Hansı növ məkanlarda QR kodlar olacaq?`, a5: `İlk olaraq kafelər, kovorkinq məkanları, barlar və şəbəkələşmə tədbirlərindən başlayırıq. Gələcəkdə idman zalları, kitabxanalar, parklar, konfranslar və insanların sosial əlaqə yaratmaq istəyəcəyi hər bir yerə genişlənəcəyik.`,
                q6: `Social Coffee-dən istifadə pulsuzdur?`, a6: `Əsas funksiyalar tamamilə pulsuzdur. Söhbət vaxtının uzadılması, təkmilləşdirilmiş filtrlər və biznes kartı paylaşma kimi premium xüsusiyyətlər abunəlik şəklində təklif olunacaq.`
            },
            footer: {
                brandText: `Məkana əsaslanan, müvəqqəti şəbəkələşmə vasitəsilə sosial əlaqələrdə inqilab edirik. Səmimi şəkildə əlaqə qurun və buraxın.`,
                productHeading: `Məhsul`, linkHow: `Necə İşləyir`, linkPrivacy: `Gizlilik Siyasəti`, linkTerms: `İstifadə Şərtləri`, linkSafety: `Təhlükəsizlik Qaydaları`,
                contactHeading: `Əlaqə`, supportLabel: `Dəstək:`,
                copyright: `© 2026 Social Coffee. Bütün hüquqlar qorunur. Məsuliyyətlə əlaqə qurun.`
            },
            common: { backHome: `← Ana Səhifə`, legalCopyright: `© 2026 Social Coffee. Bütün hüquqlar qorunur.` },
            privacy: {
                meta: { title: `Gizlilik Siyasəti - Social Coffee` },
                h1: `Gizlilik Siyasəti`, lastUpdated: `Son yenilənmə: 30 İyul 2026`,
                intro: `Social Coffee olaraq, gizliliyiniz bizim üçün ən üstün prioritetdir. Biz ephemeral (müvəqqəti) ünsiyyət konsepsiyasını dəstəkləyirik və tətbiqimiz vasitəsilə paylaşdığınız məlumatların təhlükəsizliyini qorumağa tam sadiqik.`,
                highlight: `Qısa Xülasə: Kafelərdə və digər sosial məkanlarda qurduğunuz söhbətlər daimi deyil. Məkandan ayrıldığınız anda bütün mesajlar və uyğunlaşmalar silinir.`,
                h2_1: `1. Topladığımız Məlumatlar`, p1: `Xidmətlərimizdən istifadə edərkən sizdən minimum miqdarda məlumat tələb olunur:`,
                li1_1: `<strong>Məkan Məlumatı:</strong> Sizin həqiqətən QR kodu skan etdiyiniz məkanda olduğunuzu təsdiqləmək üçün GPS koordinatlarınız yoxlanılır. Bu məlumat yalnız həmin məkanda qaldığınız müddətdə istifadə olunur və heç bir verilənlər bazasında daimi saxlanılmır.`,
                li1_2: `<strong>Profil Seçimləri:</strong> Cari məkanda digər istifadəçilərə göstəriləcək maraq dairəniz və axtardığınız əlaqə növü (networking, dostluq, söhbət).`,
                li1_3: `<strong>Müvəqqəti Mesajlar:</strong> Məkan daxilində göndərdiyiniz mesajlar şifrələnir və yalnız siz məkandan ayrılana qədər yaddaşda saxlanılır.`,
                h2_2: `2. Məlumatların İstifadə Qaydası`, p2: `Toplanmış məlumatlar aşağıdakı məqsədlər üçün istifadə olunur:`,
                li2_1: `Sizi eyni məkanda olan digər istifadəçilərlə uyğunlaşdırmaq.`, li2_2: `Spam və saxta yer bildirişlərinin qarşısını almaq üçün məkan doğrulaması aparmaq.`, li2_3: `Platformada təhlükəsizlik və icma qaydalarına nəzarət etmək.`,
                h2_3: `3. Məlumatların Silinməsi və Ephemerallıq`, p3: `Məkan əsaslı sessiyanız başa çatdıqda (məkandan uzaqlaşdıqda və ya tətbiqi bağladıqda) aşağıdakı məlumatlar avtomatik və geri dönməz şəkildə silinir:`,
                li3_1: `Həmin məkandakı söhbət keçmişiniz (mesajlar).`, li3_2: `Həmin sessiyada baş tutan uyğunlaşmalar.`, li3_3: `Məkandakı aktiv profil statusunuz.`,
                h2_4: `4. Üçüncü Tərəflərlə Məlumat Paylaşımı`, p4: `Biz sizin şəxsi məlumatlarınızı heç bir reklam şirkətinə və ya digər üçüncü tərəflərə satmırıq, kirayəyə vermirik və ya paylaşmırıq. Bütün məlumat mübadiləsi yalnız tətbiq daxilində real vaxt rejimində həyata keçirilir.`,
                h2_5: `5. Təhlükəsizlik`, p5: `Şəxsi məlumatlarınızı qorumaq üçün sənaye standartlarına uyğun təhlükəsizlik tədbirlərindən (SSL şifrələməsi, müvəqqəti RAM yaddaş idarəçiliyi) istifadə edirik. Lakin internet üzərindən heç bir ötürülmə üsulunun 100% təhlükəsiz olduğunu zəmanət vermək mümkün deyil.`,
                h2_6: `6. Əlaqə`, p6: `Gizlilik Siyasəti ilə bağlı hər hansı sualınız yaranarsa, bizimlə əlaqə saxlaya bilərsiniz:`, email: `E-poçt: support@social-coffee.com`
            },
            terms: {
                meta: { title: `İstifadə Şərtləri - Social Coffee` },
                h1: `İstifadə Şərtləri`, lastUpdated: `Son yenilənmə: 30 İyul 2026`,
                intro: `Social Coffee tətbiqinə və veb-saytına xoş gəlmisiniz. Xidmətlərimizdən istifadə etməklə siz aşağıdakı istifadə şərtləri ilə tam razılaşdığınızı bəyan edirsiniz. Xahiş edirik, bu şərtləri diqqətlə oxuyun.`,
                highlight: `Qeyd: Social Coffee yalnız real vaxtda və fiziki olaraq müəyyən məkanlarda olan istifadəçilər arasında ünsiyyəti asanlaşdırmaq üçün nəzərdə tutulub. Hər hansı saxtalaşdırma və ya qayda pozuntusu hesabınızın bloklanması ilə nəticələnəcək.`,
                h2_1: `1. Şərtlərin Qəbul Edilməsi`, p1: `Hesab yaradaraq və ya Social Coffee QR kodlarını skan edərək, siz bu İstifadə Şərtləri və tətbiq daxilində təqdim olunan digər təlimatlarla razılaşmış olursunuz. Əgər bu şərtlərlə razı deyilsinizsə, lütfən xidmətlərimizdən istifadə etməyin.`,
                h2_2: `2. İstifadəçi Uyğunluğu və Qeydiyyat`,
                li2_1: `Xidmətdən istifadə etmək üçün ən azı 18 yaşınız (və ya yaşadığınız ölkənin qanunvericiliyinə görə yetkinlik yaşına) olmalıdır.`, li2_2: `Qeydiyyat zamanı təqdim etdiyiniz məlumatların doğru və aktual olmasına cavabdehsiniz.`, li2_3: `Siz yalnız öz adınızdan çıxış edə bilərsiniz; saxta profil yaratmaq və ya özünü başqası kimi qələmə vermək qəti qadağandır.`,
                h2_3: `3. Məkan Doğrulaması və QR Kodlar`, p2: `Social Coffee məkana bağlı ephemeral sosial şəbəkədir:`,
                li3_1: `Sessiyaya qoşulmaq üçün fiziki olaraq həmin məkanda olmalı və orada yerləşən rəsmi QR kodu skan etməlisiniz.`, li3_2: `GPS koordinatlarınızı saxtalaşdırmaq (location spoofing) və ya məkanda olmadan QR kodu kənardan skan etməyə cəhd göstərmək sistemdən kənarlaşdırılmağınıza səbəb olacaq.`,
                h2_4: `4. Qadağan Olunmuş Davranışlar`, p3: `Platformada digər istifadəçilərə qarşı hörmətli davranmaq məcburidir. Aşağıdakı hərəkətlər qətiyyən yolverilməzdir:`,
                li4_1: `Digər istifadəçiləri təqib etmək, təhdid etmək və ya narahat etmək (harassment).`, li4_2: `Uyğunsuz, təhqiramiz, zorakı və ya diskriminasiya xarakterli kontent paylaşmaq.`, li4_3: `Digər istifadəçilərin razılığı olmadan onların şəxsi məlumatlarını toplamaq və ya yaymaq.`, li4_4: `Sistemə zərər verə biləcək spam, virus və ya zərərli proqram təminatı yaymaq.`,
                h2_5: `5. Məsuliyyətin Məhdudlaşdırılması`, p4: `Social Coffee real dünyada görüşləri asanlaşdıran bir platformadır. İstifadəçilərin fiziki görüşlər zamanı davranışlarına görə biz heç bir hüquqi və ya mənəvi məsuliyyət daşımırıq. Hər bir istifadəçi öz təhlükəsizliyini qorumalı və ehtiyatlı davranmalıdır.`,
                h2_6: `6. Xidmətin Dayandırılması`, p5: `Biz istənilən vaxt, əvvəlcədən xəbərdarlıq etmədən, bu şərtləri pozan istifadəçilərin fəaliyyətini məhdudlaşdırmaq və ya tamamilə dayandırmaq hüququnu özümüzdə saxlayırıq.`,
                h2_7: `7. Dəyişikliklər`, p6: `İstifadə Şərtləri zamanla yenilənə bilər. Dəyişikliklər bu səhifədə dərc olunduğu andan qüvvəyə minir. Davamlı istifadəniz yeni şərtləri qəbul etdiyiniz mənasına gəlir.`,
                h2_8: `8. Əlaqə`, p7: `Bu şərtlərlə bağlı suallarınız üçün bizimlə əlaqə saxlayın:`, email: `E-poçt: support@social-coffee.com`
            },
            safety: {
                meta: { title: `Təhlükəsizlik Qaydaları - Social Coffee` },
                h1: `Təhlükəsizlik Qaydaları`, lastUpdated: `Son yenilənmə: 30 İyul 2026`,
                intro: `Social Coffee real həyatda, eyni məkanda olan insanları birləşdirmək üçün dizayn edilmişdir. Yeni insanlarla tanış olmaq hər zaman həyəcanverici olsa da, təhlükəsizlik hər şeydən önəmlidir. Tətbiqimizdən istifadə edərkən aşağıdakı qaydalara əməl etməyinizi tövsiyə edirik.`,
                highlight: `Qızıl Qayda: Həmişə öz daxili hisslərinizə etibar edin. Əgər hər hansı bir vəziyyət sizi narahat edirsə, söhbəti dayandırın və məkandan uzaqlaşın.`,
                h2_1: `Görüş Zamanı Təhlükəsizlik Məsləhətləri`,
                tip1: { title: `1. Həmişə İctimai Məkanda Qalın`, text: `Siz artıq ictimai məkandasınız (kafe, restoran və s.). Tanış olduğunuz şəxslə söhbət etmək üçün heç bir halda daha sakit, qaranlıq və ya şəxsi yerlərə (avtomobil, ev, boş ofis) getməyin. İlk görüşləri həmişə insanların əhatəsində keçirin.` },
                tip2: { title: `2. Şəxsi Məlumatlarınızı Paylaşmaqda Tələsməyin`, text: `Social Coffee-də söhbət tarixçələri avtomatik silinir. Lakin qarşı tərəflə şəxsi telefon nömrənizi, ev ünvanınızı, iş yerinizi və ya sosial şəbəkə hesablarınızı bölüşmək üçün tələsməyin. Qarşı tərəfə tam güvənənə qədər bu məlumatları gizli saxlayın.` },
                tip3: { title: `3. Dostlarınıza Məlumat Verin`, text: `Bir kafeyə gedərkən və ya orada kimsə ilə görüşərkən yaxın bir dostunuza və ya ailə üzvünüzə harada olduğunuz barədə məlumat verin. Lazım gələrsə, canlı məkanınızı (live location) onlarla paylaşın.` },
                tip4: { title: `4. Maddi Mövzularda Ehtiyatlı Olun`, text: `İlk dəfə tanış olduğunuz şəxsin borc pul istəməsinə, şübhəli investisiya təkliflərinə və ya bahalı hədiyyə tələblərinə qarşı diqqətli olun. Heç vaxt tanımadığınız birinə pul köçürməyin.` },
                tip5: { title: `5. İçkinizdən və Əşyalarınızdan Gözünüzü Ayırmayın`, text: `Kafedə olarkən telefonunuzu, cüzdanınızı və ən əsası içkinizi nəzarətsiz qoyub getməyin (məsələn, lavaboya gedərkən). Əgər içkiniz uzun müddət nəzarətsiz qalıbsa, yeni birini sifariş etmək daha təhlükəsizdir.` },
                h2_2: `Narahatlıq Yaradan Halları Bildirin`,
                p1: `Əgər digər istifadəçi sizə qarşı təhqiramiz, təqibedici və ya narahatlıq verən davranışlar nümayiş etdirirsə, lütfən dərhal tətbiq daxilində <strong>"Şikayət et" (Report)</strong> düyməsindən istifadə edərək bizə bildirin. Şikayətlər komandamız tərəfindən ciddi şəkildə araşdırılır və müvafiq tədbirlər görülür.`,
                p2: `Təcili və təhlükəli hallarda dərhal yerli hüquq-mühafizə orqanları ilə əlaqə saxlayın.`
            }
        },
        en: {
            meta: { title: `Social Coffee - Connect. Live. Forget.` },
            nav: { how: `How It Works`, app: `Mobile App`, faq: `FAQ`, contact: `Contact`, partner: `Become a Partner` },
            hero: {
                badge: `Social Coffee`,
                title: `Scan the QR code, meet real people`,
                description: `No permanent profiles, no endless messaging. Just real connections, the way they happen in real life. The moment you leave, everything disappears.`,
                ctaPrimary: `Join Early Access`,
                ctaSecondary: `How It Works?`
            },
            phone: {
                scanStatus: `Scanning QR Code...`,
                radarStatus: `Searching Nearby...`,
                matchBanner: `🎉 New Match!`,
                chatIn: `Hey! ☕ Want to chat?`,
                chatOut: `Hi! Sure, I'm by the window.`,
                chatStatus: `Active Chat`,
                resetTitle: `Session Ended`,
                resetDesc: `You left the venue. All chat history and data has been permanently deleted!`,
                resetStatus: `Data Deleted`
            },
            how: {
                title: `How Does Social Coffee Work?`,
                step1: { title: `Scan the QR Code`, text: `Every cafe, restaurant, or social venue has a unique QR code. Scan it when you arrive to join the venue's temporary community and see who else is there.` },
                step2: { title: `Set Your Status`, text: `Choose the kind of connection you're looking for: networking, friendship, studying together, or just a coffee companion. Note your interests and availability.` },
                step3: { title: `Match and Connect`, text: `Get matched with like-minded people in the same venue. Start a conversation, share experiences, and build real connections over a cup of coffee.` },
                step4: { title: `Leave and Reset`, text: `When you leave the cafe, you're automatically removed from all chats. Messages are deleted and matches end, ensuring complete privacy and encouraging real-world meetups.` }
            },
            insights: {
                title: `Why Social Coffee?`,
                card1: { title: `Real Connections`, text: `No fake profiles or endless scrolling. Connect with real people who are in the same physical place, at the same time.` },
                card2: { title: `Complete Privacy`, text: `Your conversations are deleted the moment you leave the venue. No permanent digital footprint, no data hoarding, no algorithmic manipulation. Just sincere, temporary human connection.` },
                card3: { title: `Purposeful Networking`, text: `Perfect for freelancers, remote workers, and anyone looking to expand their local connections. Professional networking that doesn't feel forced or artificial.` }
            },
            app: {
                title: `Download the App`,
                text: `Social Coffee will soon officially launch on iOS and Android. Join our early access program to be among the first to experience the temporary social network at your favorite cafes and local spots.`,
                soon: `Coming Soon`,
                appStore: `App Store`,
                googlePlay: `Google Play`,
                roadmap1: { step: `Phase 1`, status: `Active`, title: `Early Access & Sign-Up`, text: `Join the initial testing phase and be among the first to secure your spot on the platform.` },
                roadmap2: { step: `Phase 2`, status: `In Progress`, title: `Pilot Program in Baku`, text: `Rolling out QR codes at selected venues.` },
                roadmap3: { step: `Phase 3`, status: `Coming Soon`, title: `Official Launch (Fall 2026)`, text: `Full public release of the app on the App Store and Google Play.` }
            },
            faq: {
                title: `Frequently Asked Questions`,
                q1: `How does venue verification work?`, a1: `We use QR code scanning combined with GPS verification to confirm you're actually at the venue. The QR code is the primary verification method, while GPS acts as a secondary check to prevent location spoofing.`,
                q2: `What happens to my data when I leave a venue?`, a2: `When you leave a venue, all chats, matches, and venue-related data are permanently deleted. We don't keep chat history, and we don't maintain permanent profiles tied to specific venues.`,
                q3: `Can I stay in touch with someone after leaving a venue?`, a3: `No, that's the whole point! Social Coffee encourages you to connect in real life. If you want to stay in touch, exchange contact information with each other while you're both still there.`,
                q4: `How do you prevent fake profiles or harassment?`, a4: `Since users must physically be at the venue to participate, fake profiles are naturally limited. We also have a robust reporting system and can block users who violate the rules from specific venues or the platform entirely.`,
                q5: `What kinds of venues will have QR codes?`, a5: `We're starting with cafes, coworking spaces, bars, and networking events. In the future, we'll expand to gyms, libraries, parks, conferences, and anywhere people want to connect socially.`,
                q6: `Is Social Coffee free to use?`, a6: `Core features are completely free. Premium features like extended chat time, advanced filters, and business card sharing will be offered as a subscription.`
            },
            footer: {
                brandText: `We're revolutionizing social connection through location-based, temporary networking. Connect sincerely, then let go.`,
                productHeading: `Product`, linkHow: `How It Works`, linkPrivacy: `Privacy Policy`, linkTerms: `Terms of Use`, linkSafety: `Safety Guidelines`,
                contactHeading: `Contact`, supportLabel: `Support:`,
                copyright: `© 2026 Social Coffee. All rights reserved. Connect responsibly.`
            },
            common: { backHome: `← Home`, legalCopyright: `© 2026 Social Coffee. All rights reserved.` },
            privacy: {
                meta: { title: `Privacy Policy - Social Coffee` },
                h1: `Privacy Policy`, lastUpdated: `Last updated: July 30, 2026`,
                intro: `At Social Coffee, your privacy is our top priority. We embrace the concept of ephemeral communication and are fully committed to protecting the security of the information you share through our app.`,
                highlight: `Quick Summary: The conversations you have at cafes and other social venues aren't permanent. The moment you leave the venue, all messages and matches are deleted.`,
                h2_1: `1. Information We Collect`, p1: `Using our services requires only a minimal amount of information from you:`,
                li1_1: `<strong>Location Data:</strong> Your GPS coordinates are checked to confirm you're actually at the venue whose QR code you scanned. This data is only used while you remain at that venue and is never stored permanently in any database.`,
                li1_2: `<strong>Profile Preferences:</strong> Your interests and the kind of connection you're looking for (networking, friendship, conversation), shown to other users at the current venue.`,
                li1_3: `<strong>Temporary Messages:</strong> Messages you send within a venue are encrypted and only kept in memory until you leave.`,
                h2_2: `2. How We Use Your Data`, p2: `The data we collect is used for the following purposes:`,
                li2_1: `Matching you with other users at the same venue.`, li2_2: `Verifying location to prevent spam and fake location reports.`, li2_3: `Enforcing safety and community guidelines on the platform.`,
                h2_3: `3. Data Deletion and Ephemerality`, p3: `When your venue-based session ends (you leave the venue or close the app), the following data is automatically and permanently deleted:`,
                li3_1: `Your chat history at that venue (messages).`, li3_2: `Matches made during that session.`, li3_3: `Your active profile status at the venue.`,
                h2_4: `4. Sharing Data with Third Parties`, p4: `We never sell, rent, or share your personal information with advertisers or any other third parties. All data exchange happens only in real time within the app.`,
                h2_5: `5. Security`, p5: `We use industry-standard security measures (SSL encryption, temporary in-memory data handling) to protect your personal information. However, no method of transmission over the internet can be guaranteed to be 100% secure.`,
                h2_6: `6. Contact`, p6: `If you have any questions about this Privacy Policy, feel free to contact us:`, email: `Email: support@social-coffee.com`
            },
            terms: {
                meta: { title: `Terms of Use - Social Coffee` },
                h1: `Terms of Use`, lastUpdated: `Last updated: July 30, 2026`,
                intro: `Welcome to Social Coffee's app and website. By using our services, you agree to be fully bound by the following terms of use. Please read them carefully.`,
                highlight: `Note: Social Coffee is designed solely to facilitate communication in real time between users who are physically present at specific venues. Any spoofing or rule violation will result in your account being blocked.`,
                h2_1: `1. Acceptance of Terms`, p1: `By creating an account or scanning a Social Coffee QR code, you agree to these Terms of Use and any other guidelines provided within the app. If you do not agree with these terms, please do not use our services.`,
                h2_2: `2. User Eligibility and Registration`,
                li2_1: `You must be at least 18 years old (or the age of legal majority in your country of residence) to use the service.`, li2_2: `You are responsible for ensuring that the information you provide during registration is accurate and up to date.`, li2_3: `You may only act on your own behalf; creating a fake profile or impersonating someone else is strictly prohibited.`,
                h2_3: `3. Venue Verification and QR Codes`, p2: `Social Coffee is a venue-based, ephemeral social network:`,
                li3_1: `To join a session, you must be physically at the venue and scan the official QR code located there.`, li3_2: `Attempting to spoof your GPS coordinates or scan a QR code remotely without being at the venue will result in removal from the system.`,
                h2_4: `4. Prohibited Conduct`, p3: `Treating other users with respect on the platform is mandatory. The following actions are strictly prohibited:`,
                li4_1: `Stalking, threatening, or harassing other users.`, li4_2: `Sharing inappropriate, abusive, violent, or discriminatory content.`, li4_3: `Collecting or distributing other users' personal information without their consent.`, li4_4: `Distributing spam, viruses, or malicious software that could harm the system.`,
                h2_5: `5. Limitation of Liability`, p4: `Social Coffee is a platform that facilitates real-world meetups. We bear no legal or moral responsibility for users' behavior during physical meetings. Each user is responsible for protecting their own safety and exercising caution.`,
                h2_6: `6. Suspension of Service`, p5: `We reserve the right, at any time and without prior notice, to restrict or fully suspend the activity of users who violate these terms.`,
                h2_7: `7. Changes`, p6: `The Terms of Use may be updated from time to time. Changes take effect as soon as they are posted on this page. Continued use of the service means you accept the new terms.`,
                h2_8: `8. Contact`, p7: `For questions about these terms, contact us at:`, email: `Email: support@social-coffee.com`
            },
            safety: {
                meta: { title: `Safety Guidelines - Social Coffee` },
                h1: `Safety Guidelines`, lastUpdated: `Last updated: July 30, 2026`,
                intro: `Social Coffee is designed to connect people who are physically present in the same place, in real life. While meeting new people is always exciting, safety comes first. We recommend following the guidelines below while using our app.`,
                highlight: `Golden Rule: Always trust your gut. If any situation makes you uncomfortable, end the conversation and leave the venue.`,
                h2_1: `Safety Tips for Meeting Up`,
                tip1: { title: `1. Always Stay in a Public Place`, text: `You're already in a public place (a cafe, restaurant, etc.). Never move to a quieter, darker, or private location (a car, home, empty office) to talk with someone you've just met. Always keep first meetings surrounded by other people.` },
                tip2: { title: `2. Don't Rush to Share Personal Information`, text: `Chat histories on Social Coffee are deleted automatically. Still, don't rush to share your personal phone number, home address, workplace, or social media accounts with the other person. Keep this information private until you fully trust them.` },
                tip3: { title: `3. Let Your Friends Know`, text: `When heading to a cafe or meeting someone there, let a close friend or family member know where you are. If needed, share your live location with them.` },
                tip4: { title: `4. Be Cautious About Money Matters`, text: `Be wary if someone you've just met asks to borrow money, offers suspicious investment opportunities, or requests expensive gifts. Never send money to someone you don't know.` },
                tip5: { title: `5. Keep an Eye on Your Drink and Belongings`, text: `While at the cafe, don't leave your phone, wallet, or especially your drink unattended (for example, when going to the restroom). If your drink has been unattended for a while, it's safer to order a new one.` },
                h2_2: `Report Concerning Behavior`,
                p1: `If another user behaves in an abusive, stalking, or otherwise concerning way toward you, please report it immediately using the <strong>"Report"</strong> button within the app. Reports are taken seriously by our team and investigated with appropriate action taken.`,
                p2: `In urgent or dangerous situations, contact local law enforcement immediately.`
            }
        },
        tr: {
            meta: { title: `Social Coffee - Bağlan. Yaşa. Unut.` },
            nav: { how: `Nasıl Çalışır`, app: `Mobil Uygulama`, faq: `SSS`, contact: `İletişim`, partner: `Ortak Ol` },
            hero: {
                badge: `Social Coffee`,
                title: `QR kodu tara, gerçek insanlarla tanış`,
                description: `Kalıcı profiller yok, sonsuz mesajlaşmalar yok. Sadece gerçek hayatta olduğu gibi gerçek bağlantılar. Mekândan ayrıldığınız an her şey silinir.`,
                ctaPrimary: `Erken Erişime Katıl`,
                ctaSecondary: `Nasıl Çalışır?`
            },
            phone: {
                scanStatus: `QR Kod Taranıyor...`,
                radarStatus: `Yakındakiler Aranıyor...`,
                matchBanner: `🎉 Yeni Eşleşme!`,
                chatIn: `Selam! ☕ Birlikte sohbet edelim mi?`,
                chatOut: `Selam! Tabii, pencere kenarındayım.`,
                chatStatus: `Aktif Sohbet`,
                resetTitle: `Oturum Sona Erdi`,
                resetDesc: `Mekândan ayrıldınız. Tüm sohbet geçmişi ve veriler kalıcı olarak silindi!`,
                resetStatus: `Veriler Silindi`
            },
            how: {
                title: `Social Coffee Nasıl Çalışır?`,
                step1: { title: `QR Kodu Tarayın`, text: `Her kafe, restoran veya sosyal mekânda benzersiz bir QR kod bulunur. Geldiğinizde, o mekândaki geçici topluluğa katılmak ve kimlerin orada olduğunu görmek için QR kodu tarayın.` },
                step2: { title: `Durumunuzu Belirleyin`, text: `Ne tür bir bağlantı aradığınızı seçin: networking, arkadaşlık, birlikte ders çalışmak veya sadece bir kahve arkadaşı. İlgi alanlarınızı ve müsaitlik durumunuzu belirtin.` },
                step3: { title: `Eşleşin ve Bağlantı Kurun`, text: `Aynı mekândaki benzer düşünen insanlarla eşleşin. Sohbete başlayın, deneyimlerinizi paylaşın ve bir fincan kahve eşliğinde gerçek bağlantılar kurun.` },
                step4: { title: `Ayrılın ve Sıfırlayın`, text: `Kafeden ayrıldığınızda, otomatik olarak tüm sohbetlerden çıkarılırsınız. Mesajlar silinir, eşleşmeler sona erer; bu da tam gizliliği sağlar ve gerçek dünya buluşmalarını teşvik eder.` }
            },
            insights: {
                title: `Neden Social Coffee?`,
                card1: { title: `Gerçek Bağlantılar`, text: `Sahte profiller veya sonsuz kaydırmalar yok. Aynı fiziksel mekânda, aynı anda bulunan gerçek insanlarla bağlantı kurun.` },
                card2: { title: `Tam Gizlilik`, text: `Mekândan ayrıldığınızda sohbetleriniz silinir. Kalıcı dijital iz, veri toplama veya algoritma manipülasyonu yok. Sadece samimi, geçici insan bağlantısı.` },
                card3: { title: `Amaca Yönelik Networking`, text: `Serbest çalışanlar, uzaktan çalışanlar ve yerel bağlantılarını genişletmek isteyen herkes için mükemmel. Yapay veya zorlama hissi vermeyen profesyonel networking.` }
            },
            app: {
                title: `Uygulamayı İndirin`,
                text: `Social Coffee yakında iOS ve Android'de resmi olarak kullanıma sunulacak. Sevdiğiniz kafelerde ve yerel mekânlarda geçici sosyal ağı ilk deneyimleyenlerden olmak için erken erişim programımıza katılın.`,
                soon: `Yakında`,
                appStore: `App Store`,
                googlePlay: `Google Play`,
                roadmap1: { step: `Aşama 1`, status: `Aktif`, title: `Erken Erişim ve Kayıt`, text: `İlk test aşamasına katılın ve platformdaki yerinizi ilk alanlardan olun.` },
                roadmap2: { step: `Aşama 2`, status: `Hazırlanıyor`, title: `Bakü'de Pilot Proje`, text: `Seçilmiş mekânlarda QR kodların yerleştirilmesi.` },
                roadmap3: { step: `Aşama 3`, status: `Yakında`, title: `Resmi Lansman (Sonbahar 2026)`, text: `Uygulamanın App Store ve Google Play'de herkesin kullanımına tam olarak sunulması.` }
            },
            faq: {
                title: `Sıkça Sorulan Sorular`,
                q1: `Mekân doğrulaması nasıl çalışır?`, a1: `Gerçekten o mekânda olduğunuzu doğrulamak için QR kod taraması ve GPS kontrolünü birlikte kullanıyoruz. QR kod ana doğrulama yöntemidir, GPS ise konum sahteciliğini önlemek için yardımcı bir araçtır.`,
                q2: `Mekândan ayrıldığımda verilerime ne olur?`, a2: `Bir mekândan ayrıldığınızda tüm sohbetler, eşleşmeler ve mekâna ait veriler kalıcı olarak silinir. Sohbet geçmişini saklamıyoruz ve belirli mekânlara bağlı kalıcı profiller tutmuyoruz.`,
                q3: `Mekândan ayrıldıktan sonra biriyle tekrar iletişime geçebilir miyim?`, a3: `Hayır, amaç zaten bu! Social Coffee gerçek hayatta bağlantı kurmayı teşvik eder. İletişimde kalmak isterseniz, ikiniz de hâlâ oradayken iletişim bilgilerinizi paylaşın.`,
                q4: `Sahte profillerin veya tacizin önüne nasıl geçiyorsunuz?`, a4: `Kullanıcıların katılmak için fiziksel olarak mekânda bulunması gerektiğinden sahte profiller doğal olarak sınırlıdır. Ayrıca güçlü bir şikayet sistemimiz var ve kuralları ihlal eden kullanıcıları belirli mekânlardan veya tüm platformdan engelleyebiliyoruz.`,
                q5: `Hangi tür mekânlarda QR kodlar olacak?`, a5: `İlk olarak kafeler, ortak çalışma alanları, barlar ve networking etkinlikleriyle başlıyoruz. Gelecekte spor salonları, kütüphaneler, parklar, konferanslar ve insanların sosyal bağlantı kurmak isteyeceği her yere genişleyeceğiz.`,
                q6: `Social Coffee'yi kullanmak ücretsiz mi?`, a6: `Temel özellikler tamamen ücretsizdir. Sohbet süresinin uzatılması, gelişmiş filtreler ve kartvizit paylaşımı gibi premium özellikler abonelik şeklinde sunulacaktır.`
            },
            footer: {
                brandText: `Mekân tabanlı, geçici networking aracılığıyla sosyal bağlantıda devrim yaratıyoruz. Samimi bir şekilde bağlantı kurun ve bırakın.`,
                productHeading: `Ürün`, linkHow: `Nasıl Çalışır`, linkPrivacy: `Gizlilik Politikası`, linkTerms: `Kullanım Koşulları`, linkSafety: `Güvenlik Kuralları`,
                contactHeading: `İletişim`, supportLabel: `Destek:`,
                copyright: `© 2026 Social Coffee. Tüm hakları saklıdır. Sorumlu bir şekilde bağlantı kurun.`
            },
            common: { backHome: `← Ana Sayfa`, legalCopyright: `© 2026 Social Coffee. Tüm hakları saklıdır.` },
            privacy: {
                meta: { title: `Gizlilik Politikası - Social Coffee` },
                h1: `Gizlilik Politikası`, lastUpdated: `Son güncelleme: 30 Temmuz 2026`,
                intro: `Social Coffee olarak, gizliliğiniz bizim için en önemli önceliktir. Geçici (ephemeral) iletişim kavramını benimsiyoruz ve uygulamamız aracılığıyla paylaştığınız bilgilerin güvenliğini korumaya tamamen bağlıyız.`,
                highlight: `Kısa Özet: Kafelerde ve diğer sosyal mekânlarda kurduğunuz sohbetler kalıcı değildir. Mekândan ayrıldığınız an tüm mesajlar ve eşleşmeler silinir.`,
                h2_1: `1. Topladığımız Bilgiler`, p1: `Hizmetlerimizi kullanırken sizden yalnızca minimum düzeyde bilgi talep edilir:`,
                li1_1: `<strong>Konum Bilgisi:</strong> QR kodunu taradığınız mekânda gerçekten bulunduğunuzu doğrulamak için GPS koordinatlarınız kontrol edilir. Bu bilgi yalnızca o mekânda kaldığınız süre boyunca kullanılır ve hiçbir veritabanında kalıcı olarak saklanmaz.`,
                li1_2: `<strong>Profil Tercihleri:</strong> Mevcut mekândaki diğer kullanıcılara gösterilecek ilgi alanlarınız ve aradığınız bağlantı türü (networking, arkadaşlık, sohbet).`,
                li1_3: `<strong>Geçici Mesajlar:</strong> Mekân içinde gönderdiğiniz mesajlar şifrelenir ve yalnızca siz mekândan ayrılana kadar bellekte tutulur.`,
                h2_2: `2. Verilerin Kullanım Şekli`, p2: `Toplanan veriler aşağıdaki amaçlarla kullanılır:`,
                li2_1: `Sizi aynı mekândaki diğer kullanıcılarla eşleştirmek.`, li2_2: `Spam ve sahte konum bildirimlerini önlemek için mekân doğrulaması yapmak.`, li2_3: `Platformda güvenlik ve topluluk kurallarını denetlemek.`,
                h2_3: `3. Verilerin Silinmesi ve Geçicilik`, p3: `Mekân tabanlı oturumunuz sona erdiğinde (mekândan uzaklaştığınızda veya uygulamayı kapattığınızda) aşağıdaki veriler otomatik ve geri dönüşü olmayan şekilde silinir:`,
                li3_1: `O mekândaki sohbet geçmişiniz (mesajlar).`, li3_2: `O oturumda gerçekleşen eşleşmeler.`, li3_3: `Mekândaki aktif profil durumunuz.`,
                h2_4: `4. Üçüncü Taraflarla Veri Paylaşımı`, p4: `Kişisel bilgilerinizi hiçbir reklam şirketine veya başka üçüncü taraflara satmıyor, kiralamıyor veya paylaşmıyoruz. Tüm veri alışverişi yalnızca uygulama içinde gerçek zamanlı olarak gerçekleşir.`,
                h2_5: `5. Güvenlik`, p5: `Kişisel bilgilerinizi korumak için endüstri standardı güvenlik önlemlerinden (SSL şifreleme, geçici RAM bellek yönetimi) yararlanıyoruz. Ancak internet üzerinden hiçbir aktarım yönteminin %100 güvenli olduğu garanti edilemez.`,
                h2_6: `6. İletişim`, p6: `Gizlilik Politikası ile ilgili herhangi bir sorunuz olursa bizimle iletişime geçebilirsiniz:`, email: `E-posta: support@social-coffee.com`
            },
            terms: {
                meta: { title: `Kullanım Koşulları - Social Coffee` },
                h1: `Kullanım Koşulları`, lastUpdated: `Son güncelleme: 30 Temmuz 2026`,
                intro: `Social Coffee uygulamasına ve web sitesine hoş geldiniz. Hizmetlerimizi kullanarak aşağıdaki kullanım koşullarını tamamen kabul ettiğinizi beyan edersiniz. Lütfen bu koşulları dikkatlice okuyun.`,
                highlight: `Not: Social Coffee, yalnızca gerçek zamanlı olarak ve fiziksel olarak belirli mekânlarda bulunan kullanıcılar arasındaki iletişimi kolaylaştırmak için tasarlanmıştır. Herhangi bir sahtecilik veya kural ihlali hesabınızın engellenmesiyle sonuçlanacaktır.`,
                h2_1: `1. Koşulların Kabulü`, p1: `Bir hesap oluşturarak veya Social Coffee QR kodlarını tarayarak, bu Kullanım Koşulları'nı ve uygulama içinde sunulan diğer talimatları kabul etmiş olursunuz. Bu koşullarla aynı fikirde değilseniz, lütfen hizmetlerimizi kullanmayın.`,
                h2_2: `2. Kullanıcı Uygunluğu ve Kayıt`,
                li2_1: `Hizmeti kullanmak için en az 18 yaşında (veya ikamet ettiğiniz ülkenin yasalarına göre reşit yaşta) olmalısınız.`, li2_2: `Kayıt sırasında sağladığınız bilgilerin doğru ve güncel olmasından siz sorumlusunuz.`, li2_3: `Yalnızca kendi adınıza hareket edebilirsiniz; sahte profil oluşturmak veya başka birini taklit etmek kesinlikle yasaktır.`,
                h2_3: `3. Mekân Doğrulaması ve QR Kodlar`, p2: `Social Coffee mekâna bağlı, geçici bir sosyal ağdır:`,
                li3_1: `Bir oturuma katılmak için fiziksel olarak o mekânda bulunmalı ve orada yer alan resmi QR kodu taramalısınız.`, li3_2: `GPS koordinatlarınızı sahtecilik yapmaya (location spoofing) veya mekânda olmadan QR kodu uzaktan taramaya çalışmak sistemden çıkarılmanıza neden olacaktır.`,
                h2_4: `4. Yasaklı Davranışlar`, p3: `Platformda diğer kullanıcılara saygılı davranmak zorunludur. Aşağıdaki eylemler kesinlikle yasaktır:`,
                li4_1: `Diğer kullanıcıları takip etmek, tehdit etmek veya taciz etmek.`, li4_2: `Uygunsuz, hakaret içeren, şiddet içeren veya ayrımcı içerik paylaşmak.`, li4_3: `Diğer kullanıcıların kişisel bilgilerini rızaları olmadan toplamak veya yaymak.`, li4_4: `Sisteme zarar verebilecek spam, virüs veya zararlı yazılım yaymak.`,
                h2_5: `5. Sorumluluğun Sınırlandırılması`, p4: `Social Coffee, gerçek dünyada buluşmaları kolaylaştıran bir platformdur. Kullanıcıların fiziksel buluşmalar sırasındaki davranışlarından herhangi bir hukuki veya ahlaki sorumluluk taşımıyoruz. Her kullanıcı kendi güvenliğini korumalı ve dikkatli davranmalıdır.`,
                h2_6: `6. Hizmetin Durdurulması`, p5: `Bu koşulları ihlal eden kullanıcıların faaliyetlerini önceden bildirimde bulunmaksızın her zaman kısıtlama veya tamamen durdurma hakkını saklı tutuyoruz.`,
                h2_7: `7. Değişiklikler`, p6: `Kullanım Koşulları zaman zaman güncellenebilir. Değişiklikler bu sayfada yayınlandığı andan itibaren geçerli olur. Hizmeti kullanmaya devam etmeniz yeni koşulları kabul ettiğiniz anlamına gelir.`,
                h2_8: `8. İletişim`, p7: `Bu koşullarla ilgili sorularınız için bizimle iletişime geçin:`, email: `E-posta: support@social-coffee.com`
            },
            safety: {
                meta: { title: `Güvenlik Kuralları - Social Coffee` },
                h1: `Güvenlik Kuralları`, lastUpdated: `Son güncelleme: 30 Temmuz 2026`,
                intro: `Social Coffee, gerçek hayatta aynı mekânda bulunan insanları bir araya getirmek için tasarlanmıştır. Yeni insanlarla tanışmak her zaman heyecan verici olsa da güvenlik her şeyden önemlidir. Uygulamamızı kullanırken aşağıdaki kurallara uymanızı öneririz.`,
                highlight: `Altın Kural: Her zaman iç güdülerinize güvenin. Herhangi bir durum sizi rahatsız ediyorsa, sohbeti sonlandırın ve mekândan uzaklaşın.`,
                h2_1: `Buluşma Sırasında Güvenlik Tavsiyeleri`,
                tip1: { title: `1. Her Zaman Kamuya Açık Bir Yerde Kalın`, text: `Zaten kamuya açık bir mekândasınız (kafe, restoran vb.). Yeni tanıştığınız biriyle konuşmak için asla daha sessiz, karanlık veya özel yerlere (araba, ev, boş ofis) gitmeyin. İlk buluşmaları her zaman insanların arasında gerçekleştirin.` },
                tip2: { title: `2. Kişisel Bilgilerinizi Paylaşmakta Acele Etmeyin`, text: `Social Coffee'de sohbet geçmişleri otomatik olarak silinir. Ancak karşı tarafla kişisel telefon numaranızı, ev adresinizi, iş yerinizi veya sosyal medya hesaplarınızı paylaşmakta acele etmeyin. Karşı tarafa tam olarak güvenene kadar bu bilgileri gizli tutun.` },
                tip3: { title: `3. Arkadaşlarınıza Haber Verin`, text: `Bir kafeye giderken veya orada biriyle buluşurken yakın bir arkadaşınıza veya aile üyenize nerede olduğunuz hakkında bilgi verin. Gerekirse canlı konumunuzu onlarla paylaşın.` },
                tip4: { title: `4. Para Konularında Dikkatli Olun`, text: `Yeni tanıştığınız birinin borç para istemesine, şüpheli yatırım tekliflerine veya pahalı hediye taleplerine karşı dikkatli olun. Tanımadığınız birine asla para göndermeyin.` },
                tip5: { title: `5. İçeceğinizi ve Eşyalarınızı Gözünüzden Ayırmayın`, text: `Kafedeyken telefonunuzu, cüzdanınızı ve özellikle içeceğinizi gözetimsiz bırakmayın (örneğin tuvalete giderken). İçeceğiniz uzun süre gözetimsiz kaldıysa, yenisini sipariş etmek daha güvenlidir.` },
                h2_2: `Endişe Verici Durumları Bildirin`,
                p1: `Başka bir kullanıcı size karşı hakaret içeren, takip edici veya rahatsız edici davranışlar sergilerse, lütfen uygulama içindeki <strong>"Şikayet Et"</strong> düğmesini kullanarak hemen bize bildirin. Şikayetler ekibimiz tarafından ciddiyetle incelenir ve gerekli önlemler alınır.`,
                p2: `Acil ve tehlikeli durumlarda derhal yerel güvenlik güçleriyle iletişime geçin.`
            }
        },
        ru: {
            meta: { title: `Social Coffee - Общайся. Живи. Забудь.` },
            nav: { how: `Как это работает`, app: `Мобильное приложение`, faq: `Вопросы`, contact: `Контакты`, partner: `Стать партнёром` },
            hero: {
                badge: `Social Coffee`,
                title: `Сканируй QR-код, знакомься с реальными людьми`,
                description: `Никаких постоянных профилей, никакой бесконечной переписки. Только настоящие связи, как в реальной жизни. Как только вы покидаете место, всё исчезает.`,
                ctaPrimary: `Присоединиться к раннему доступу`,
                ctaSecondary: `Как это работает?`
            },
            phone: {
                scanStatus: `Сканирование QR-кода...`,
                radarStatus: `Поиск людей поблизости...`,
                matchBanner: `🎉 Новое совпадение!`,
                chatIn: `Привет! ☕ Пообщаемся?`,
                chatOut: `Привет! Конечно, я у окна.`,
                chatStatus: `Активный чат`,
                resetTitle: `Сессия завершена`,
                resetDesc: `Вы покинули заведение. Вся история переписки и данные безвозвратно удалены!`,
                resetStatus: `Данные удалены`
            },
            how: {
                title: `Как работает Social Coffee?`,
                step1: { title: `Отсканируйте QR-код`, text: `У каждого кафе, ресторана или другого социального места есть уникальный QR-код. Отсканируйте его по прибытии, чтобы присоединиться к временному сообществу этого места и узнать, кто там находится.` },
                step2: { title: `Укажите свой статус`, text: `Выберите, какое общение вы ищете: нетворкинг, дружбу, совместную учёбу или просто компанию за чашкой кофе. Укажите свои интересы и удобное время.` },
                step3: { title: `Найдите совпадение и общайтесь`, text: `Найдите единомышленников в том же месте. Начните разговор, делитесь опытом и стройте настоящие связи за чашкой кофе.` },
                step4: { title: `Уйдите и всё сбросится`, text: `Когда вы покидаете кафе, вы автоматически выходите из всех чатов. Сообщения удаляются, совпадения завершаются — это обеспечивает полную приватность и мотивирует к встречам в реальном мире.` }
            },
            insights: {
                title: `Почему Social Coffee?`,
                card1: { title: `Настоящие связи`, text: `Никаких поддельных профилей и бесконечной прокрутки. Общайтесь с реальными людьми, которые находятся в том же месте, в то же время.` },
                card2: { title: `Полная приватность`, text: `Ваши разговоры удаляются, как только вы покидаете место. Никакого постоянного цифрового следа, сбора данных или алгоритмических манипуляций. Только искренние, временные человеческие связи.` },
                card3: { title: `Целенаправленный нетворкинг`, text: `Идеально подходит для фрилансеров, удалённых сотрудников и всех, кто хочет расширить свои местные связи. Профессиональный нетворкинг без искусственности и принуждения.` }
            },
            app: {
                title: `Скачайте приложение`,
                text: `Social Coffee скоро официально запустится на iOS и Android. Присоединяйтесь к нашей программе раннего доступа, чтобы одними из первых испытать временную социальную сеть в любимых кафе и местных заведениях.`,
                soon: `Скоро`,
                appStore: `App Store`,
                googlePlay: `Google Play`,
                roadmap1: { step: `Этап 1`, status: `Активно`, title: `Ранний доступ и регистрация`, text: `Присоединяйтесь к начальному этапу тестирования и одними из первых займите своё место на платформе.` },
                roadmap2: { step: `Этап 2`, status: `В разработке`, title: `Пилотный проект в Баку`, text: `Размещение QR-кодов в выбранных заведениях.` },
                roadmap3: { step: `Этап 3`, status: `Скоро`, title: `Официальный запуск (осень 2026)`, text: `Полный публичный релиз приложения в App Store и Google Play.` }
            },
            faq: {
                title: `Часто задаваемые вопросы`,
                q1: `Как работает подтверждение местоположения?`, a1: `Мы используем сканирование QR-кода в сочетании с проверкой GPS, чтобы подтвердить, что вы действительно находитесь в этом месте. QR-код — основной способ проверки, а GPS — вспомогательный, чтобы предотвратить подделку координат.`,
                q2: `Что происходит с моими данными, когда я покидаю заведение?`, a2: `Когда вы покидаете заведение, все чаты, совпадения и связанные с этим местом данные безвозвратно удаляются. Мы не храним историю переписки и не ведём постоянные профили, привязанные к конкретным местам.`,
                q3: `Могу ли я снова связаться с кем-то после ухода из заведения?`, a3: `Нет, в этом и есть смысл! Social Coffee поощряет общение в реальной жизни. Если хотите оставаться на связи, обменяйтесь контактами, пока вы оба ещё там.`,
                q4: `Как вы предотвращаете поддельные профили и домогательства?`, a4: `Поскольку пользователи должны физически находиться в заведении, чтобы участвовать, поддельные профили естественным образом ограничены. У нас также есть надёжная система жалоб, и мы можем блокировать нарушителей правил в конкретных заведениях или на всей платформе.`,
                q5: `В каких заведениях появятся QR-коды?`, a5: `Сначала мы начинаем с кафе, коворкингов, баров и networking-мероприятий. В будущем мы расширимся на спортзалы, библиотеки, парки, конференции и любые места, где люди хотят общаться.`,
                q6: `Social Coffee бесплатен?`, a6: `Основные функции полностью бесплатны. Такие премиум-функции, как продление времени чата, расширенные фильтры и обмен визитками, будут предлагаться по подписке.`
            },
            footer: {
                brandText: `Мы совершаем революцию в социальном общении с помощью временного нетворкинга, привязанного к месту. Общайтесь искренне и отпускайте.`,
                productHeading: `Продукт`, linkHow: `Как это работает`, linkPrivacy: `Политика конфиденциальности`, linkTerms: `Условия использования`, linkSafety: `Правила безопасности`,
                contactHeading: `Контакты`, supportLabel: `Поддержка:`,
                copyright: `© 2026 Social Coffee. Все права защищены. Общайтесь ответственно.`
            },
            common: { backHome: `← На главную`, legalCopyright: `© 2026 Social Coffee. Все права защищены.` },
            privacy: {
                meta: { title: `Политика конфиденциальности - Social Coffee` },
                h1: `Политика конфиденциальности`, lastUpdated: `Последнее обновление: 30 июля 2026`,
                intro: `В Social Coffee ваша конфиденциальность — наш главный приоритет. Мы придерживаемся концепции эфемерного (временного) общения и полностью привержены защите информации, которой вы делитесь через наше приложение.`,
                highlight: `Краткое резюме: Разговоры, которые вы ведёте в кафе и других социальных местах, не являются постоянными. Как только вы покидаете место, все сообщения и совпадения удаляются.`,
                h2_1: `1. Информация, которую мы собираем`, p1: `Для использования наших услуг от вас требуется минимальный объём информации:`,
                li1_1: `<strong>Данные о местоположении:</strong> Ваши GPS-координаты проверяются, чтобы подтвердить, что вы действительно находитесь в месте, чей QR-код вы отсканировали. Эти данные используются только пока вы находитесь в этом месте и никогда не хранятся постоянно в какой-либо базе данных.`,
                li1_2: `<strong>Настройки профиля:</strong> Ваши интересы и тип общения, который вы ищете (нетворкинг, дружба, разговор), отображаемые другим пользователям в текущем заведении.`,
                li1_3: `<strong>Временные сообщения:</strong> Сообщения, которые вы отправляете в заведении, шифруются и хранятся в памяти только до вашего ухода.`,
                h2_2: `2. Как мы используем ваши данные`, p2: `Собранные данные используются в следующих целях:`,
                li2_1: `Подбор совпадений с другими пользователями в том же месте.`, li2_2: `Проверка местоположения для предотвращения спама и ложных сообщений о местонахождении.`, li2_3: `Соблюдение правил безопасности и сообщества на платформе.`,
                h2_3: `3. Удаление данных и эфемерность`, p3: `Когда ваша сессия в заведении завершается (вы покидаете место или закрываете приложение), следующие данные автоматически и безвозвратно удаляются:`,
                li3_1: `История вашей переписки в этом заведении (сообщения).`, li3_2: `Совпадения, произошедшие в течение этой сессии.`, li3_3: `Статус вашего активного профиля в заведении.`,
                h2_4: `4. Передача данных третьим лицам`, p4: `Мы никогда не продаём, не сдаём в аренду и не передаём вашу личную информацию рекламным компаниям или другим третьим лицам. Весь обмен данными происходит только в режиме реального времени внутри приложения.`,
                h2_5: `5. Безопасность`, p5: `Мы используем отраслевые стандарты безопасности (SSL-шифрование, временное управление данными в оперативной памяти) для защиты вашей личной информации. Однако ни один метод передачи данных через интернет не может быть гарантированно безопасным на 100%.`,
                h2_6: `6. Контакты`, p6: `Если у вас есть вопросы по Политике конфиденциальности, свяжитесь с нами:`, email: `Эл. почта: support@social-coffee.com`
            },
            terms: {
                meta: { title: `Условия использования - Social Coffee` },
                h1: `Условия использования`, lastUpdated: `Последнее обновление: 30 июля 2026`,
                intro: `Добро пожаловать в приложение и на сайт Social Coffee. Используя наши услуги, вы заявляете о полном согласии со следующими условиями использования. Пожалуйста, внимательно ознакомьтесь с ними.`,
                highlight: `Примечание: Social Coffee предназначен исключительно для облегчения общения в реальном времени между пользователями, физически находящимися в определённых местах. Любая подделка данных или нарушение правил приведёт к блокировке вашего аккаунта.`,
                h2_1: `1. Принятие условий`, p1: `Создавая аккаунт или сканируя QR-код Social Coffee, вы соглашаетесь с настоящими Условиями использования и другими инструкциями, представленными в приложении. Если вы не согласны с этими условиями, пожалуйста, не используйте наши услуги.`,
                h2_2: `2. Право на использование и регистрация`,
                li2_1: `Вам должно быть не менее 18 лет (или возраста совершеннолетия по законам страны вашего проживания), чтобы пользоваться услугой.`, li2_2: `Вы несёте ответственность за то, чтобы информация, предоставленная при регистрации, была точной и актуальной.`, li2_3: `Вы можете действовать только от своего имени; создание поддельного профиля или выдача себя за другого человека строго запрещены.`,
                h2_3: `3. Подтверждение местоположения и QR-коды`, p2: `Social Coffee — это привязанная к месту, эфемерная социальная сеть:`,
                li3_1: `Чтобы присоединиться к сессии, вы должны физически находиться в заведении и отсканировать официальный QR-код, размещённый там.`, li3_2: `Попытка подделать ваши GPS-координаты или отсканировать QR-код удалённо, не находясь в заведении, приведёт к удалению из системы.`,
                h2_4: `4. Запрещённое поведение`, p3: `Уважительное отношение к другим пользователям на платформе обязательно. Строго запрещены следующие действия:`,
                li4_1: `Преследование, угрозы или домогательства по отношению к другим пользователям.`, li4_2: `Публикация неуместного, оскорбительного, агрессивного или дискриминационного контента.`, li4_3: `Сбор или распространение личной информации других пользователей без их согласия.`, li4_4: `Распространение спама, вирусов или вредоносного ПО, способного нанести вред системе.`,
                h2_5: `5. Ограничение ответственности`, p4: `Social Coffee — это платформа, облегчающая встречи в реальном мире. Мы не несём юридической или моральной ответственности за поведение пользователей во время личных встреч. Каждый пользователь должен заботиться о собственной безопасности и проявлять осторожность.`,
                h2_6: `6. Приостановка обслуживания`, p5: `Мы оставляем за собой право в любое время и без предварительного уведомления ограничить или полностью приостановить деятельность пользователей, нарушающих настоящие условия.`,
                h2_7: `7. Изменения`, p6: `Условия использования могут периодически обновляться. Изменения вступают в силу с момента публикации на этой странице. Продолжение использования сервиса означает, что вы принимаете новые условия.`,
                h2_8: `8. Контакты`, p7: `По вопросам, связанным с настоящими условиями, свяжитесь с нами:`, email: `Эл. почта: support@social-coffee.com`
            },
            safety: {
                meta: { title: `Правила безопасности - Social Coffee` },
                h1: `Правила безопасности`, lastUpdated: `Последнее обновление: 30 июля 2026`,
                intro: `Social Coffee создан для того, чтобы объединять людей, находящихся физически в одном месте, в реальной жизни. Знакомиться с новыми людьми всегда увлекательно, но безопасность превыше всего. Мы рекомендуем следовать приведённым ниже правилам при использовании нашего приложения.`,
                highlight: `Золотое правило: Всегда доверяйте своей интуиции. Если какая-то ситуация вызывает у вас дискомфорт, прекратите разговор и покиньте место.`,
                h2_1: `Советы по безопасности во время встреч`,
                tip1: { title: `1. Всегда оставайтесь в общественном месте`, text: `Вы уже находитесь в общественном месте (кафе, ресторан и т.д.). Никогда не переходите в более тихое, тёмное или уединённое место (машина, дом, пустой офис), чтобы поговорить с тем, кого только что встретили. Всегда проводите первые встречи среди людей.` },
                tip2: { title: `2. Не спешите делиться личной информацией`, text: `История переписки в Social Coffee удаляется автоматически. Тем не менее не спешите делиться личным номером телефона, домашним адресом, местом работы или аккаунтами в соцсетях. Держите эту информацию в тайне, пока не будете полностью доверять собеседнику.` },
                tip3: { title: `3. Сообщите друзьям`, text: `Отправляясь в кафе или на встречу с кем-то там, сообщите близкому другу или члену семьи, где вы находитесь. При необходимости поделитесь с ними геолокацией в реальном времени.` },
                tip4: { title: `4. Будьте осторожны в денежных вопросах`, text: `Будьте осторожны, если человек, с которым вы только что познакомились, просит взаймы деньги, предлагает подозрительные инвестиции или требует дорогих подарков. Никогда не переводите деньги незнакомому человеку.` },
                tip5: { title: `5. Не выпускайте из виду напиток и вещи`, text: `Находясь в кафе, не оставляйте без присмотра телефон, кошелёк и особенно напиток (например, когда идёте в туалет). Если ваш напиток долго оставался без присмотра, безопаснее заказать новый.` },
                h2_2: `Сообщайте о тревожном поведении`,
                p1: `Если другой пользователь ведёт себя оскорбительно, преследует вас или иным образом вызывает беспокойство, пожалуйста, немедленно сообщите об этом с помощью кнопки <strong>«Пожаловаться»</strong> в приложении. Наша команда серьёзно рассматривает все жалобы и принимает соответствующие меры.`,
                p2: `В неотложных и опасных ситуациях немедленно свяжитесь с местными правоохранительными органами.`
            }
        }
    };

    const STORAGE_KEY = 'sc_lang';
    const SUPPORTED = ['az', 'en', 'tr', 'ru'];

    function getLang() {
        const saved = localStorage.getItem(STORAGE_KEY);
        return SUPPORTED.includes(saved) ? saved : 'az';
    }

    function getValue(obj, path) {
        return path.split('.').reduce((o, k) => (o && o[k] !== undefined ? o[k] : undefined), obj);
    }

    function applyLang(lang) {
        const dict = translations[lang] || translations.az;
        document.documentElement.lang = lang;

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            const value = getValue(dict, key);
            if (value === undefined) return;
            if (el.hasAttribute('data-i18n-html')) {
                el.innerHTML = value;
            } else {
                el.textContent = value;
            }
        });

        document.querySelectorAll('[data-lang-select]').forEach(sel => {
            sel.value = lang;
        });
    }

    function setLang(lang) {
        if (!SUPPORTED.includes(lang)) return;
        localStorage.setItem(STORAGE_KEY, lang);
        applyLang(lang);
    }

    window.SocialCoffeeI18n = { setLang, getLang, applyLang };

    document.addEventListener('DOMContentLoaded', () => {
        applyLang(getLang());
        document.querySelectorAll('[data-lang-select]').forEach(sel => {
            sel.addEventListener('change', (e) => setLang(e.target.value));
        });
    });
})();
