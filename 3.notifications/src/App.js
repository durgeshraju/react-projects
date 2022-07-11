import React, { useState, useEffect } from 'react';
import NotificationList from './components/NotificationList';
import data from './data/NotificationsData';
import Card from './sharedUI/Card';
import Spinner from './sharedUI/Spinner';
import "./App.css";
const App = () =>{
  const [notifyEvents, setNotifyEvents] = useState(data);
  const [spinner, setSpinner] = useState(true);

  useEffect(() => {
    if (spinner) {
      setTimeout(() => {
        setSpinner(false);
      },2000);
    }
  }, [spinner]);
 
    const deleteHandler = (id) => {
      let delItemConfrimation = window.confirm("Are you sure you would like to delete this notification message?");
      if(delItemConfrimation){
        setNotifyEvents(
         notifyEvents.filter((item)=> item.id !== id)
        )
      }      
    }
    return (
    <main className="appBody">  
    <div className="cardBackdrop"></div>        
    <Card>
      {spinner ? <Spinner/> :    
        <NotificationList notifyEvent={notifyEvents} delItem={deleteHandler} />
      }      
      </Card>      
    </main>
  );
}
export default App;
