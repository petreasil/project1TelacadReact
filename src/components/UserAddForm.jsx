import React from 'react';
import styles from './UserAddForm.module.css';


class UserAddForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            isGoldClient: false,
            color: '',
            image:'https://picsum.photos/150',
            nameError:'',
            passwordError:''
            
        };
    }

    updateName(event) {
        this.setState({name: event.target.value});
    }

    updateEmail(event) {
        this.setState({email: event.target.value});
    }

    updateIsGoldClient(event) {
        this.setState({isGoldClient: event.target.checked});
    }

    updateColor(event) {
        this.setState({color: event.target.value});
        console.log(this.state.color);
    }

    render() {
        const {name, email, isGoldClient,color,image} = this.state;

        return (
            <form
                className={styles.useraddform}
                onSubmit={(event) => this.props.submitAddForm(event, name, email, isGoldClient, color,image)}
            >
                {this.props.counter ?<h2>UTILIZATOR ADAUGAT:</h2>: <h2>Adauga Utilizatori:</h2>}
                
                <label htmlFor="name">Nume:</label>
                <input
                    type="text"
                    name="name"
                    onChange={(event) => this.updateName(event)}
                    
                />
                
                <label htmlFor="email">Email:</label>
                <input
                    type="text"
                    name="email"
                    onChange={(event) => this.updateEmail(event)}
                    
                />
                
                <div className={styles.secondline}>
                    <div className={styles.contentColor}>
                    <label htmlFor="color">Color:</label>
                    <input 
                    type="color"
                    name="color"
                    onChange={(event) => this.updateColor(event)}
                    />
                    </div>

                    <div className={styles.contentType}>

                    
                <label htmlFor="is-gold-client">Client GOLD</label>
                <input
                    type="checkbox"
                    name="is-gold-client"
                    value="true"
                    onChange={(event) => this.updateIsGoldClient(event)}
                />
                </div>
                </div>
                <input type="submit" value="Introdu utilizatorul" className={styles.btnSubmit}/>
                
            </form>
        )
    }
}

export default UserAddForm;