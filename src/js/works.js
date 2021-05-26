import Swiper from 'swiper/bundle'

export function Works() {

    // Generate works

    const worksList = [
        {
            id: `11744`,
            title: `African American Lack of Oppurtunity`,
            html: `The Effect of Sesame Street on Children (1970-1990) Student Name Institutional Affiliation Date of Submission Introduction The educational television program Sesame Street premiered in the year 1969. The production of the children-focused TV program still continues and will be showing the forty sixth season in the year 2016. During the period 1970-1990 the TV program aired episodes aimed at promoting children’s education and social skills. While the content of the TV show was considered to be for entertainment purposes by most audiences others had different perceptions of the show. A section of the show’s audience perceived the show as educational to the children. However with regard to the content that was being aired during this period the show allegedly did not have the qualities to suit academic use. The analysis of the effects of Sesame Street on the audience that is children indicates that the TV show had more significant educational impacts on children than it did as a source o...`,
            category: `History`,
            pages: `63 pages`
        },
        {
            id: `11720`,
            title: `Research paper`,
            html: `Running Head: Dissociative Identity Disorder Dissociative Identity Disorder Name Institution Dissociative Identity Disorder Dissociative Identity Disorder (DID) Dissociative identity disorder refers to a mental condition whereby the individual exhibits two rather diverse and opposite mental states that are otherwise known to occur singly in individuals. The two states are referred to as alters and are characterized by the display of completely different emotions body functioning as well as emotions (Dryden 2016). The condition which was formerly known as multiple personality disorder has proven rather difficult for scientists to exhaustively elaborate due to conflicting views and theories among them. The major contention issues arise about its diagnosis clinical manifestations a well as an assessment of the condition. The major limitation to understanding the dissociative identity disorder is because it involves mental states some of which may not be so distinct as to be easily identi...`,
            category: `Psychology`,
            pages: `64 pages`
        },
        {
            id: `8871`,
            title: `British Petroleum Company`,
            html: `British Petroleum Company (BP) Student's Name Professor's Name Course Name Due Date BRITISH PETROLEUM COMPANY (BP) BACKGROUND AND HISTORY The course project organization I focused on in week 2 and the one I am going to shine a light on is British Petroleum Company (BP). The company’s website is www.bp.com and it operates in the oil and gas industry. The London-based British Petroleum Company (BP) operates across the globe in over 80 countries and it ranks third globally in energy supply. On a daily basis 3.8 million barrels of oil are supplied by the Company to over 20 000 stations. Additionally the Company serves over 100 countries across the world with retails services and petrochemical products. In 1909 the Company was founded by William Knox D’Arcy and named Anglo-Persian Oil before its name change in 1954 to BP. Solar panels Aral service stations ARCO gas stations BP petroleum products AIR BP aviation fuels BP service stations and Castrol motor oil are among BP Company products.`,
            category: `Case Study`,
            pages: `7 pages`
        },
        {
            id: `8943`,
            title: `Dementia Centre-St. Vincent De Paul hospital`,
            html: `Marine Land Park Hot Air Balloon Ride and Camping Student Name Institutional Affiliation Date Part A: Proposal Description of Proposal: The ecotourism services I plan to develop in Marine Land Park is hot air balloon aerial visits and camping services to tourists in the Marine Land Park. Although many eco-tourists would like to enjoy each spot of the park they usually tire walking from one site to another. Moreover paths within the park are confusing and tourists quickly lose their way hampering them from enjoying all the services and spots that draw them to the park. Hot air balloon service will help the visitors catch aerial views take photos from above access all spots that are usually inaccessible on foot capture fond memories that the park offers without going through the annoyance of walking too much tiring or losing direction which often limits tourists’ from enjoying the park. Justification: The marine land park is located in a serene environment next to Niagara Falls and peop...`,
            category: `Other`,
            pages: `72 pages`
        },
        {
            id: `11783`,
            title: `Marketing`,
            html: `Course code Professor’s name Institution Date SUN BUCKETS INC. MARKET PLAN Sun Buckets Inc. is a social enterprise with a diverse international team aiming to deal with the global cooking crisis. SBI aims to offer fire-free cooking alternatives that protect the traditions and cultures of cooking minimizing the user's spending. SBI's vision is to maximize access to free fuel enhancing freedom in the economy to impoverished energy. Digital marketing uses websites and blot attending conferences and demonstrating to local events strategies will be used to achieve this objective. In the next five years the global solar cooking market is aimed to rise at a makeable rate. By 2016 the global demand for solar cookers is aimed to generate 3 209.3 million which is an 8.7% growth rate from 2020 to 2026. What drives market growth is increasing the non-renewable energy costs and rising awareness of solar cooking as a renewable energy source. Customer value proposition The benefit of a product is th...`,
            category: `Business`,
            pages: `625 pages`
        },
        {
            id: `11786`,
            title: `Design Science Research Artifact`,
            html: `Chapter One: IntroductionBackground of studyVirtual Reality is a computer technology that generally immerses its users into a virtual environment. However augmented reality is slightly different.AR users can interact and see the real world while some digital content is added into it. These two technologies are used to enhance the experience of a world through digital components by an individual. When it comes to the VR the user has the freedom to move around and hear sounds experiencing the digital world. There is a spec...`,
            category: `Business`,
            pages: `41 pages`
        },
        {
            id: `11781`,
            title: `Intertextual Issues Essay`,
            html: `Name Course Tutor Date Comparison between “The Lives of a Cell” and “The Way to Rainy Mountain” The Lives of a Cell by Lewis Thomas is a composition of short insightful stories which allows the reader to view the world and ourselves in a different perspective. One stunning aspect is that the essays are all connected by two themes. First does the interconnectedness exist between all the living organisms. Plants animals and humans are all connected to another in extremely very complex ways. Secondly is the aspect of existence of the balance and order in nature. Lewis draws the two themes are based on three claims. First we have the claim that the cells of living organisms are complex ecosystems. Secondly is the uniformity of life on earth such uniformity is a consequence of living organisms’ derivation from a single cell. Finally there is the aspect of complexity and interaction of living organism. Thomas is fascinated by the communication that not only takes place at the cellular level...`,
            category: `English Language`,
            pages: `55 pages`
        },
        {
            id: `11768`,
            title: `Smoking should be banned in Public Places`,
            html: `Name: Professor: Class: Date: Cyber Bullying and how it can have Bad Effects on the Youth Cyber bullying involves using electronic technology and digital media to disseminate false or hostile information about another individual. Those can consist of mean text messages spreading false rumors hurtful posts on social media sites chat and other websites. Therefore cyber bullying is mistreatment or harassment conducted on a victim by an offender who is physically distant (Tokunaga 277). The term has become so familiar with our society that it is now considered a terrible threat. Despite the fact that there is no personal contact between the victim and the offender cyber bullying damages the young generation physically and mentally. Cyber bullying has recently become one of the most serious types of bullying in the schools and the community. The other bullying that is the traditional bullying. While many young people in schools deny that activity like name-calling and teasing to be harmful...`,
            category: `Research Paper`,
            pages: `55 pages`
        },
        {
            id: `11474`,
            title: `How woman's roles have changed since the civil war`,
            html: `First Name Last Name Instructor Course 12 May 2016 Barbara Jordan Introduction. Barbara was an inspirational figure in the 1960s and the 1970s. She was born it Houston Texas in 1933 to a humble family that was God-fearing (Blue and Naden). Jordan had three sisters of whom decided to become musicians while Barbara became a Lawyer. Her charisma and oratory skills moved and inspired the masses. During her period racial profiling and discrimination were an adverse effect and it was all over the country. Thus her rising like a black woman to become a Senate and eventually a Congresswoman was a great achievement. Her will to do well and act as a voice for the less fortunate and minority in the country was a stronghold of hers. Her efforts and skills did not go unrecognized in addition to achieving great fame and popularity she also received several medals from honorary people such as the next President of the United States President Bill Clinton. Barbara Jordan was a prominent figure of the...`,
            category: `History`,
            pages: `2078 pages`
        }
    ]

    const workTemplate = document.getElementById('work-template')
    const workRoot = document.getElementById('works-inner')
    if (!workTemplate || !workRoot) return

    const reference = workTemplate.cloneNode(true)
    workTemplate.remove()

    const hydrateWork = (root, content) => {
        const titleNode = root.querySelector('.work__title')
        const categoryNode = root.querySelector('.work__category')
        const pagesNode = root.querySelector('.work__pages')
        const sampleButtonNode = root.querySelector('[data-hook="open-modal"]')
        const fastregButtonNode = root.querySelector('[data-hook="order-fastreg"]')

        const title = content.title
        let slicedTitle = title.slice(0, 45)
        if (slicedTitle.length < title.length) slicedTitle += '...'

        titleNode.innerHTML = slicedTitle
        categoryNode.innerHTML = content.category
        pagesNode.innerHTML = content.pages
        sampleButtonNode.setAttribute("data-work-id", content.id)
        fastregButtonNode.setAttribute("data-title", content.title)
    }

    worksList.forEach(work => {
        const newWork = reference.cloneNode(true)
        hydrateWork(newWork, work)
        workRoot.appendChild(newWork)
    })

    const sliderWorks = new Swiper('.works__slider', {
        navigation: {
            nextEl: '.works__slider .slider-nav__control--right',
            prevEl: '.works__slider .slider-nav__control--left',
        },
        slidesPerView: 3,
        spaceBetween: 16,
        breakpoints: {
            0: {slidesPerView: 1},
            640: {slidesPerView: 2},
            992: {slidesPerView: 3}
        }
    })

    // "Order" button in work for "Fast registration" form

    const buttonsOrder = document.querySelectorAll('[data-hook="order-fastreg"]')
    const feedbackProjectInput = document.getElementById('feedback-project-name')
    if (!buttonsOrder && !feedbackProjectInput) return

    buttonsOrder.forEach(buttonOrder => {
        const workTitle = buttonOrder.getAttribute('data-title')
        buttonOrder.addEventListener('click', () => {
            feedbackProjectInput.value = workTitle
        })
    })

    // Open modal with preview

    const formPreview = document.getElementById('modal-preview')
    if (!formPreview) return

    const previewTitleBlock = formPreview.querySelector('[data-hook="preview-title"]')
    const previewTextBlock = formPreview.querySelector('[data-hook="preview-text"]')

    const buttonsPreview = document.querySelectorAll('[data-work-id]')
    buttonsPreview.forEach(buttonPreview => {
        const previewID = buttonPreview.getAttribute('data-work-id')
        const workInfo = worksList.find(({id}) => id == previewID )

        buttonPreview.addEventListener('click', () => {
            previewTitleBlock.innerText = workInfo.title
            previewTextBlock.innerHTML = workInfo.html
        })

    })

}