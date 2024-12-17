let olen =  [
    {title: '"Абай жолы" - Мухтар Әуезов', description: 'Абайдың өмірі мен қазақ қоғамының тарихи шежіресі.'},
    {title: '"Қан мен тер" - Эбдіжаміл Нұрпейісов', description: 'Қазақ халқының қиын кезеңдерінің эпикалық баяны.'},
    {title: '"Көшпенділер" - Ілияс Есенберлин', description: 'Қазақ хандығының қалыптасу тарихы.'},
    {title: '"За нами Москва" - Александр Бек', description: 'Панфиловшылардың ержүректігі туралы тарихи деректі роман.'}
];

let container = document.getElementById('container')

function createCard(item){
    let card = document.createElement('div')
    
    let title = document.createElement('h3')

    title.textContent=item.title;

    let description = document.createElement('p')

    description.textContent = item.description;

    let button = document.createElement('button');
    
    button.textContent = 'Delate';

    button.onclick=function(){
        container.removeChild(card)
    }

    card.appendChild(title);
    card.appendChild(description);
    card.appendChild(button);

    return card;
}

for(let i =0;i<olen.length;i++){
    let card = createCard(olen[i]) 
    container.appendChild(card)
}