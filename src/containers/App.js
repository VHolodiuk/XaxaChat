import React, {Component} from 'react';
import './App.scss';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';
import Adds from '../../src/components/Adds';
import WrapLogin from '../../src/components/LogInChat/WrapLogin';
import WrapChat from '../../src/components/WindowChat/WrapChat';
import {usersFetchData, usersPushData, usersUpdateData, usersDeleteData} from '../../src/actions/users';
import {roomsFetchData, roomsPushData, roomsUpdateData, roomsDeleteData} from '../../src/actions/rooms';
//import CreateRoom from '../components/popup/CreateRoom';

class App extends Component{

  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
//    this.handleSubmit = this.handleSubmit.bind(this);
    this.enterAudit = this.enterAudit.bind(this);
    this.selectLanguage = this.selectLanguage.bind(this);
    this.createRoom = this.createRoom.bind(this);
    this.swapRoom = this.swapRoom.bind(this);
    this.SendMessage = this.SendMessage.bind(this);
    this.registrationUser = this.registrationUser.bind(this);
    this.rerender = this.rerender.bind(this);

    this.state = {
        data: {
          name: "",
          password: "",
          lang: "",
          mail: "",
          born: "",
          rate: ""
        },
        rools: 0,
        updatedData: {},
        updateRoom:{
          texts:[],
          username:[],
          name: ''
        },
        displayStyle: "",
        currentId: "",
        EnterChange: '',
        currentEn: 0,
        RoomId: 0,
        TakeRoom: 0,
        RoomBuild: "",
        TextsApp:[
          {id:0, language: "En", nick: 'Nickname*', password: 'Password*', repeatpass:'Repeat password*', enter: "ENTER", registration: "Registration", nativleng: "Native language*", mail:"E-mail", year:"Born (year)*", profile:'Profile', rooms:"Rooms", addRoom:'Add my room', rules:'Rules', invite:'Invite', ignore:'Ignore', situation:'Situation: (He enters the room and asks:)', direct:'Direct speech: ("what`re you dooing here?")', LH:'Look History', ff:'for fun', donate:'Donate', iif:'if it`s funny', rulesText:'To participate, imagine a situation with direct speech (for example: He enters the room and asks: "what are you doing here?") and write it in apropriate boxes. "Crazy Mixer" will add it to other nine and then show you a result. Resukts are summarized in the Room History. Create your own Room and invite your friends to have a fun together, when writting with them only your common Room History.'},
          {id:1, language: "Uk", nick: 'Нікнейм*', password: 'Пароль*', repeatpass:'Повторіть пароль*', enter: "Вхід", registration: "Реєстрація", nativleng: "Рідна мова*", mail:"E-mail", year:"Народився (рік)*", profile:'Профіль', rooms:"Кімнати", addRoom:'Додати кімнату', rules:'Правила', invite:'Запросити', ignore:'Ігнор', situation:'Ситуація: (П`ятачок запитав:)', direct:'Пряма мова: ("Хіба я не влучив?")', LH:'Диви історію', ff:'та смійся', donate:'Донать', iif:'Якщо весело', rulesText:'Для участі уявіть ситуацію з прямою промовою (наприклад: Він заходить до кімнати і запитує: «що ви тут робите?») І запишіть її у відповідні поля. "Божевільний змішувач" додасть його до інших девяти, а потім покаже результат. Результати резюмуються в історії кімнат. Створіть свою власну кімнату та запросіть своїх друзів весело провести час, коли ви пишете з ними лише свою загальну історію кімнат.'},
          {id:2, language: "Ru", nick: 'Никнейм*', password: 'Пароль*', repeatpass:'Поворите пароль*', enter: "Вход", registration: "Регистрация", nativleng: "родной язык*", mail:"E-mail", year:"Родился (год)*", profile:'Профиль', rooms:"Комнаты", addRoom:'Добавить комнату', rules:'Правила', invite:'Пригласить', ignore:'Игнор', situation:'Ситуация: (Пятачок спросил:)', direct:'Прямая речь: ("Я что не попал?")', LH:'Глянь историю', ff:'и смейся', donate:'Донать', iif:'Если весело', rulesText:'Чтобы принять участие, представьте ситуацию с прямой речью (например: он входит в комнату и спрашивает: «что вы здесь делаете?») И напишите ее в соответствующих клетках. «Сумасшедший миксер» добавит его к другим девяти, а затем покажет вам результат. Результаты суммированы в истории комнаты. Создайте свою собственную комнату и пригласите друзей повеселиться вместе, когда они пишут вместе с ними только вашу общую историю комнаты.'}
        ],
    };
  }

  componentDidMount(){
      this.props.fetchData('/api/users/');
      this.props.fetchRoom('/api/rooms/');
  }
  

  componentDidUpdate(prevProps) {
    if(this.props.wasUpdated !== prevProps.wasUpdated) {
        this.props.fetchData("/api/users");
        this.props.fetchRoom("/api/rooms");
    }
  }

  handleChange(e){
    let {...data} = this.state.data;
    let {...room} = this.state.room;
    data[e.target.id] = e.target.value;
    room[e.target.id] = e.target.value;
    this.setState({
        data,
        room
    });
  }

  // handleUpdate(e){
  //   e.preventDefault();
  //   this.props.updateData(`/api/users/${this.state.currentId}`, this.state.updatedData);
  //   this.setState({
  //       updatedData: {},
  //       displayStyle: ""
  //   })
  // }

  // handleSubmit(e) {
  //   e.preventDefault();
  //   this.props.pushData("/api/users", this.state.data);
  //   this.setState({
  //     data: {
  //       name: "",
  //       password: "",
  //       lang: "",
  //       mail: "",
  //       born: "",
  //       rate: "" 
  //     }
  //   })
  // }

  registrationUser(login, password, repassword, mail, year, nativLeng){
    if (!login || !password || !repassword || !year) {
      alert('input your data');    
    }
    else if(password !== repassword){
      alert('Passwords do not match');      
    }
    else{
      let nickneim;
      for (let index = 0; index < this.props.users.length; index++) {
        const element = this.props.users[index];
        if( login === element.name){
          nickneim = 'alredy';
          alert('such nickname is already registered');
        }
      }
      if (nickneim !== 'alredy') {
        // eslint-disable-next-line   
        this.state.data.name = login;
        // eslint-disable-next-line
        this.state.data.password = password;
        // eslint-disable-next-line
        this.state.data.lang = this.state.currentEn;
        // eslint-disable-next-line
        this.state.data.mail = mail;
        // eslint-disable-next-line
        this.state.data.born = year;
        this.props.pushData("/api/users", this.state.data);
        this.props.rooms[0].username.push( {name: this.state.data.name} );
        this.props.updateRoom(`/api/rooms/5e1c793a7ac2780e1acc6192`, this.props.rooms[0]);
        localStorage.setItem("nick", login);
      }
    } 
  }

  rerender(){
    this.componentDidMount();
  };

  SendMessage(message){
    var date = new Date();
    let nowTime = date.getHours() + ':' + date.getMinutes(); 
    let k = this.state.TakeRoom;
    this.props.rooms[k].texts.push(
      {nick:this.state.data.name, text:message, time: nowTime }
    );
    this.props.updateRoom(`/api/rooms/${this.props.rooms[k]._id}`, this.props.rooms[k]);
  }

  createRoom(name){
    // eslint-disable-next-line
    this.state.updateRoom.name = name;
    // eslint-disable-next-line
    this.state.updateRoom.username = {name: this.state.data.name};
    this.props.pushRoom("/api/rooms", this.state.updateRoom);
    setTimeout(() => (this.state.RoomBuild = 1), 2000);
  }

  swapRoom(side, step = 1 ){
    let k;
    if(side === 'right') 
    {
      k = +this.state.TakeRoom + step;

      if (k >= this.props.rooms.length) {
        k = 0;
        // eslint-disable-next-line
        this.state.TakeRoom = k;
        // eslint-disable-next-line
        this.state.RoomId = k;
        this.setState({
           TakeRoom: k,
           RoomId: k
        })
      }

      else{
        for (let index = 0; index < this.props.rooms[k].username.length; index++) {
          if (this.state.data.name === this.props.rooms[k].username[index].name) {
            // eslint-disable-next-line
            this.state.TakeRoom = k;
            // eslint-disable-next-line
            this.state.RoomId = k;
            this.setState({
               TakeRoom: k,
               RoomId: k
            })
          }
          else {
            this.state.TakeRoom = k;
            // eslint-disable-next-line
            this.state.RoomId = k;
            // eslint-disable-next-line
            this.setState({
               TakeRoom: k,
               RoomId: k
            })
            this.swapRoom('right', 1);
          }
        }
      }
    }

    if(side === 'left')
    {
      k = +this.state.RoomId - step;
      if (k < 0) {
        this.state.RoomId = this.props.rooms.length;
        this.setState({
          RoomId: this.props.rooms.length 
        })
        this.swapRoom('left');
      }
      else{
        for (let index = 0; index < this.props.rooms[k].username.length; index++) {
          if (this.state.data.name === this.props.rooms[k].username[index].name) {
            this.state.RoomId = k;
          }
          else {
            this.setState({
              RoomId: +k - 1 
            })
            this.state.RoomId = +k - 1; 
            this.swapRoom('left');
          }
        }
      }
      // eslint-disable-next-line
      this.state.TakeRoom = this.state.RoomId;
      this.setState({
         TakeRoom: this.state.RoomId
      })
    }
  }

  enterAudit(login, password){
    if (!login || !password) {
      alert('input nickname and password');    
    }
    else {
      for (let index = 0; index < this.props.users.length; index++) {
        const element = this.props.users[index];
        if( login === element.name && password === element.password){
          this.setState({
            data: {
                name: login,
                lang: this.state.currentEn,
                rate: element.rate,
            },
            currentEn: element.lang
          })
          // eslint-disable-next-line
          this.state.data.name = login;
          // eslint-disable-next-line
          this.state.data.lang = this.state.currentEn;
          localStorage.setItem("nick", login);
          localStorage.setItem("lang", this.state.currentEn);
        }
        else if(index === (this.props.users.length)){
          alert('wrong login or password');
        }
      }
    }
  }

  selectLanguage(language, ch=''){
      this.setState({
        currentEn: language,
        EnterChange: ch
    })
  }

  render(){

    setTimeout(() => {
      this.componentDidMount();
    }, 1000);

    return(
      <div className="App">
        <Adds styless="Adds AddsFirst"/>
        <Route path="/my-app" render = {
          () => <WrapLogin
            enterAudit={this.enterAudit}
            selectLanguage={this.selectLanguage}
            createRoom={this.createRoom}
            registrationUser={this.registrationUser}
            state={this.state}
          />
        }/>
        <Route path="/Chat" render ={
          () => <WrapChat
            swapRoom={this.swapRoom}
            createRoom={this.createRoom}
            state={this.state}
            rooms={this.props.rooms}
            SendMessage={this.SendMessage}
          />
        }/>
        <Adds styless="Adds AddsSecond"/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    users: state.users,
    rooms: state.rooms,
    hasErrored: state.usersHasErrored,
    isLoading: state.usersIsLoading,
    wasUpdated: state.usersUpdated,
    haErrored: state.roomsHasErrored,
    iLoading: state.roomsIsLoading,
    waUpdated: state.roomsUpdated,
    createRoom: state.createRoom
  };
};

const mapDispatchToProps = dispatch =>{
  return{
    fetchData: url => dispatch(usersFetchData(url)),
    pushData: (url, data) => dispatch(usersPushData(url, data)),
    updateData: (url, data) => dispatch(usersUpdateData(url, data)),
    deleteData: url => dispatch(usersDeleteData(url)),
    fetchRoom: url => dispatch(roomsFetchData(url)),
    pushRoom: (url, data) => dispatch(roomsPushData(url, data)),
    updateRoom: (url, data) => dispatch(roomsUpdateData(url, data)),
    deleteRoom: url => dispatch(roomsDeleteData(url))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)  (App);
