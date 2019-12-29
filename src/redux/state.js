let rerenderEntireTree = () => {
    console.log('Changed');
}

export let TakeEngland = 0;
export let TakeLoginID = 0;
export let TakeRoom = 0;
export let EnterChange;
export let CurrentUser = 0;

let Situation=[
    'Situation: (He enters the room and asks:)',
    'Ситуація: (П`ятачок запитав:)',
    'Ситуация: (Пятачок спросил:)'
]
let Direct=[
    'Direct speech: ("what`re you dooing here?")',
    'Пряма мова: ("Хіба я не влучив?")',
    'Прямая речь: ("Я что не попал?")'
]

let state = {
    Users : [
        {id:0, Login: "VH", Password: "123", Rate: 9999 },
        {id:1, Login: "Andrei", Password: "0000" },
    ],
    RoomsList :[
        {id:0, active: true,  styles:'Room', title:"Living room", link:"Living_room", message:[
            {nick:'VH', text:'HelloWorld'},
        ],
        },
    ],
    TextData :[
        {id:0, name: 'VH', text: "Hello", time: '12:11'}
    ],
    TextsApp:[
        {id:0, language: "En", nick: 'Nickname*', password: 'Password*', repeatpass:'Repeat password*', enter: "ENTER", registration: "Registration", nativleng: "Native language*", mail:"E-mail", year:"Born (year)*", profile:'Profile', rooms:"Rooms", addRoom:'Add my room', rules:'Rules', invite:'Invite', ignore:'Ignore', situation:Situation[0], direct:Direct[0], LH:'Look History', ff:'for fun', donate:'Donate', iif:'if it`s funny'},
        {id:1, language: "Uk", nick: 'Нікнейм*', password: 'Пароль*', repeatpass:'Повторіть пароль*', enter: "Вхід", registration: "Реєстрація", nativleng: "Рідна мова*", mail:"E-mail", year:"Народився (рік)*", profile:'Профіль', rooms:"Кімнати", addRoom:'Додати кімнату', rules:'Правила', invite:'Запросити', ignore:'Ігнор', situation:Situation[1], direct:Direct[1], LH:'Диви історію', ff:'та смійся', donate:'Донать', iif:'Якщо весело'},
        {id:2, language: "Ru", nick: 'Никнейм*', password: 'Пароль*', repeatpass:'Поворите пароль*', enter: "Вход", registration: "Регистрация", nativleng: "родной язык*", mail:"E-mail", year:"Родился (год)*", profile:'Профиль', rooms:"Комнаты", addRoom:'Добавить комнату', rules:'Правила', invite:'Пригласить', ignore:'Игнор', situation:Situation[2], direct:Direct[2], LH:'Глянь историю', ff:'и смейся', donate:'Донать', iif:'Если весело'}
    ]
}

export const sendMessage = (nick, text) =>{
    state.RoomsList[TakeRoom].message.push({nick:nick, text:text});
    rerenderEntireTree(state);
}

export const rerender = (CurentNick) =>{
    EnterChange = "chat";
    TakeLoginID = CurentNick;
    console.log(TakeLoginID);
    rerenderEntireTree(state);
}

export const registrLang = () =>{
    console.log('loxxx');
} 


export const pushMass = (login, password) =>{
    state.Users.push({Login:login, Password:password});
}

export const clickLanguage = (lang) =>{
    console.log(lang);
    TakeEngland = lang;
    rerenderEntireTree(state);
}


export const swapRoom = (side) =>{
    let k;
    if(side === 'right') 
        {k = TakeRoom + 1;}
    if(side === 'left')
        {k = TakeRoom - 1;}

    if(!state.RoomsList[k])
        {
            TakeRoom = 0;
        }
    else{
        TakeRoom = k;
    }
    rerenderEntireTree(state);
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}

export default state;


 