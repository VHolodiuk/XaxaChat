import React, {Component} from 'react';
import './App.scss';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';
import Adds from './../components/Adds';
import WrapLogin from './../components/LogInChat/WrapLogin';
import WrapChat from './../components/WindowChat/WrapChat';
import {usersFetchData, usersPushData, usersUpdateData, usersDeleteData} from '../actions/users';
import {roomsFetchData, roomsPushData, roomsUpdateData, roomsDeleteData} from '../actions/rooms';

class App extends Component{

  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
//    this.handleSubmit = this.handleSubmit.bind(this);
    this.enterAudit = this.enterAudit.bind(this);
    this.selectLanguage = this.selectLanguage.bind(this);
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
          texts:[
                        
          ],
          name: 'Random'
        },
        displayStyle: "",
        currentId: "",
        EnterChange: '',
        currentEn: 0,
        TakeRoom: 0,
        TextsApp:[
          {id:0, language: "En", nick: 'Nickname*', password: 'Password*', repeatpass:'Repeat password*', enter: "ENTER", registration: "Registration", nativleng: "Native language*", mail:"E-mail", year:"Born (year)*", profile:'Profile', rooms:"Rooms", addRoom:'Add my room', rules:'Rules', invite:'Invite', ignore:'Ignore', situation:'Situation: (He enters the room and asks:)', direct:'Direct speech: ("what`re you dooing here?")', LH:'Look History', ff:'for fun', donate:'Donate', iif:'if it`s funny'},
          {id:1, language: "Uk", nick: 'Нікнейм*', password: 'Пароль*', repeatpass:'Повторіть пароль*', enter: "Вхід", registration: "Реєстрація", nativleng: "Рідна мова*", mail:"E-mail", year:"Народився (рік)*", profile:'Профіль', rooms:"Кімнати", addRoom:'Додати кімнату', rules:'Правила', invite:'Запросити', ignore:'Ігнор', situation:'Ситуація: (П`ятачок запитав:)', direct:'Пряма мова: ("Хіба я не влучив?")', LH:'Диви історію', ff:'та смійся', donate:'Донать', iif:'Якщо весело'},
          {id:2, language: "Ru", nick: 'Никнейм*', password: 'Пароль*', repeatpass:'Поворите пароль*', enter: "Вход", registration: "Регистрация", nativleng: "родной язык*", mail:"E-mail", year:"Родился (год)*", profile:'Профиль', rooms:"Комнаты", addRoom:'Добавить комнату', rules:'Правила', invite:'Пригласить', ignore:'Игнор', situation:'Ситуация: (Пятачок спросил:)', direct:'Прямая речь: ("Я что не попал?")', LH:'Глянь историю', ff:'и смейся', donate:'Донать', iif:'Если весело'}
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

  registrationUser(login, password, repassword, mail, year){
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
        console.log(this.state.data);
      }
    } 
  }

  rerender(){
    this.componentDidMount();
  };

  SendMessage(message){
    // let exts = {
    //   nick:this.state.data.name,
    //   text:message,
    //   time:"14:30"
    // }; 
    // eslint-disable-next-line
    let k = this.state.TakeRoom;
    console.log(this.state.currentId);
    this.props.rooms[k].texts.push(
      {nick:this.state.data.name, text:message, time:"14:30"}
    );
//    this.state.updateRoom.name = this.props.rooms[k].name;
    // this.setState({
    //   name: this.props.rooms[0].name
    // });
    this.props.updateRoom(`/api/rooms/${this.props.rooms[k]._id}`, this.props.rooms[k]);
    // console.log(this.state.updateRoom); 
    console.log(this.props.rooms[k]._id);
   // this.rerender();
  }

  swapRoom(side){
    let k;
    if(side === 'right') 
    {
      k = +this.state.TakeRoom + 1;
      if (k === this.props.rooms.length) {
        k = 0;
      }
      if (k < 0){
        k = this.props.rooms.length;
      }
      this.setState({
        TakeRoom: k
      })
    }

    if(side === 'left')
    {
      k = +this.state.TakeRoom + 1;
      if (k === this.props.rooms.length) {
        k = 0;
      }
      if (k < 0){
        k = this.props.rooms.length;
      }
      this.setState({
        TakeRoom: k,
        currentId: this.props.rooms[k]._id
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
    }, 3000);

    return(
      <div className="App">
        <Adds styless="Adds AddsFirst"/>
        <Route path="/my-app" render = {
          () => <WrapLogin
            enterAudit={this.enterAudit}
            selectLanguage={this.selectLanguage}
            registrationUser={this.registrationUser}
            state={this.state}
          />
        }/>
        <Route path="/Chat" render ={
          () => <WrapChat
            swapRoom={this.swapRoom}
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
    waUpdated: state.roomsUpdated
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