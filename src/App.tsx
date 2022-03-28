import React from 'react';
import './App.scss';
import {Information} from "./Components/Information";
import {FeedbackForm} from "./Components/FeedbackForm";



function App() {
    return (
        <div className="content">
            <div className="container">
                <div className="content__items">
                   <Information/>
                    <FeedbackForm/>
                </div>

            </div>
        </div>
    );
}

export default App;



/*const [name, setName] = React.useState('')*/
/* const [nameError, setNameError] = React.useState('Обязательное поле')
 const [nameDirty, setNameDirty] = React.useState(false)

 const [email, setEmail] = React.useState('')
 const [emailError, setEmailError] = React.useState('Обязательное поле')
 const [emailDirty, setEmailDirty] = React.useState(false)*/

// const [profile, setProfile] = React.useState('')
/*const [profileError, setProfileError] = React.useState('Обязательное поле')
const [profileDirty, setProfileDirty] = React.useState(false)*/


/*const [eror, setEror] = React.useState('Обязательное поле')*/



/* const emailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
     setEmail(e.target.value)
     const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
     if (!re.test(String(e.target.value).toLowerCase())) {
         setEmailError('Некорректный email')
     } else {
         setEmailError('')
     }
 }*/

/*const nameHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
    if (e.target.value.length < 3) {
        setNameError('Слишком короткое имя')
        if (!e.target.value) {
            setEmailError('Обязательное поле')
        }
    } else {
        setNameError('')
    }
}
*/




/*const blurHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    switch (e.target.name) {
        case 'email':
            setEmailDirty(true)
            break
        case 'name':
            setNameDirty(true)

    }
}*/
