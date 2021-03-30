import React from 'react';
import UserList from './components/UserItemlist/UserList';
import UserAddForm from './components/UserAddForm';
import PostItemList from "./components/PostitemList/PostItemList";
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      background: 'white',
      textcolor: 'black',
      users: [],
      posts:[],
      showhideusers: true,
      showhideposts: false,
      counter: false
    };
  }

  componentDidMount() {
    
      Promise.all([
        fetch('https://jsonplaceholder.typicode.com/users'),
        fetch('https://jsonplaceholder.typicode.com/posts')
      ]).then( (responses) => {
        // Get a JSON object from each of the responses
        return Promise.all(responses.map(function (response) {
          return response.json();
        }));
      }).then( (data) => {
        let newdata = data[0].filter(el => el.id < 6);
        let newdata2 = data[1].filter(el => el.id < 6);
        console.log(newdata2);
        newdata.forEach(user => {
          user.isGoldClient = false;
          user.image= "https://picsum.photos/200";
          user.salary= 1000;
        });

        this.setState({users: newdata,posts: newdata2});
      }).catch( (error)=> {
        
        console.log(error);
      }); 
  }

  changeColor(event) {
    this.setState({background: event.target.value});
  }

  getMaxId(users) {
    let maxId = 0;

    users.forEach(user => {
      if (user.id > maxId) {
        maxId = user.id;
      }
    });

    return maxId;
  }


  submitAddForm(event, name, email, isGoldClient,color,image) {
    event.preventDefault();
    console.log(color);
   
    if (!name || name.length === 1){
     alert("No name or you have only one character");

    }else if(!email.includes('@') || !email){
    alert("No email or email not inludes @");
   } else {

    this.setState(prevState => {

      return {
        
        users: [
          ...prevState.users,
          {
            id: this.getMaxId(prevState.users) + 1,
            name,
            email,
            isGoldClient,
            image,
          }
        ],
        textcolor: color,
        counter: true
      }
    });

   }

   setTimeout(()=>this.setState({counter:false}),2000);

   event.target.reset();
  }

  deleteItem(id){
    console.log(id);
    this.setState(prevState =>{
      return{
        users : [...prevState.users.filter(el => el.id !== id)]
      }
    })
  }
  hideComponent (name) {
    console.log(name);
    switch (name){
      case 'users':
        this.setState({showhideusers: !this.state.showhideusers});
        break;
        case 'posts':
        this.setState({showhideposts: !this.state.showhideposts});
        break;
       default:
         break; 
    }
    
   }

  render() {
    const {showhideusers,showhideposts,counter} = this.state;
  
    return(
      <div className="container" style={{background: this.state.background, color: this.state.textcolor}}>
        <div className="heading">
          <h1>Admin panel - Proiectul 1</h1>
        </div>
        <UserAddForm className="user-form" counter={counter} submitAddForm={(event, name, email, isGoldClient, color,image) => this.submitAddForm(event, name, email, isGoldClient,color,image)}/>
        
        <div className="bottom">
        <input type="color" onChange={(event) => this.changeColor(event)}/>
        <button className="btn-top" onClick={()=>this.hideComponent('users')}>Utilizatori</button>
        <button className="btn-top" onClick={()=>this.hideComponent('posts')}>Postari</button>
        </div>
        {showhideusers && <UserList users={this.state.users} deleteItem={(id)=>this.deleteItem(id)}/>}
        {showhideposts && <PostItemList posts={this.state.posts}/>}
        
      </div>
    );
  }
}

export default App;
