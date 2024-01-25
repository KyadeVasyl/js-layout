import {
    createElement,
    createHeader,
} from "../../script/layout";

const page = document.querySelector('.page')
const header = createHeader();

page.append(header);
const title = createElement('h1', 'title', 'Коммьюніті')

page.append(title);

const CHANGE_LIST = [
    {
        text: 'База знань',
        isActive: false,
    },
    {
        text: 'Інформація',
        isActive: true,
    }
]


const MAIN_INFO = {
    img: '/img/welcome.png',
    title: 'Що таке база знань?',
    text: 'База знаний — база даних, що містить правила виводу та інформацію про людський досвід і знання в певній предметній області. В самоосвітніх системах база знань також містить інформацію, яка є результатом вирішення попередніх завдань.',
    button: `Перейти до ком'юніті у Телеграм`,
}



const joinCommunity = () => {
    const main = createElement('main', 'main');
    const change = createElement('div', 'change')


    const changeItem = CHANGE_LIST.map((elem) => {
        return createElement(
            'span',
            elem.isActive
                ? 'change__title'
                : 'change__title title--unactive',
            elem.text
        )
    })

    const mainContent = createElement('div', 'main__content')

    const infoBlock = createElement('div', 'info__block')


    const img = createElement('img', '');
    img.src = MAIN_INFO.img;
    const infoTitle = createElement('h2', 'info__title', MAIN_INFO.title)

    const info = createElement('p', 'info', MAIN_INFO.text)

    const button = createElement('button', 'button submit__button', MAIN_INFO.button)

    main.append(change, mainContent);
    change.append(...changeItem);
    mainContent.append(img, infoBlock, button)

    infoBlock.append(infoTitle, info)

    return main;
}

const community = joinCommunity();
page.append(community);