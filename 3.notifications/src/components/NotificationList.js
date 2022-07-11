import React from 'react';
import classes from '../sharedUI/notification.module.css'
import { FaRegEnvelope, FaTwitter, FaFacebookF, FaTimes} from 'react-icons/fa';
import Button from '../sharedUI/Button';
const NotificationList = ({notifyEvent, delItem}) => {   
return(   
    <article>    
        <h3 className={classes.cardMessage}>                    
          {notifyEvent.length > 0 &&
            `You have ${notifyEvent.length} new event messages.`
          }
          {notifyEvent.length === 0 &&           
           <span style={{color: '#8E8B92'}}>The user has total {notifyEvent.length} event messages.</span>
          }   
        </h3>                                
          <ul>        
              {notifyEvent.map((item)=>{   
              return (               
                <li key={item.id} className={classes.listItem}>
                 <div className={classes.deleteItemIcon}  onClick={()=> delItem(item.id)}>   
                  <FaTimes />               
                 </div>
                  <div className={classes.cardListItemEmailWrapper}>
                    <FaRegEnvelope className={classes.cardListItemsEmailIcon} color="#CC3F76"  />
                  </div> 
                  <span className={classes.emailMessageWrapper}>
                    <p className={classes.date}>{item.date}</p>
                    <p className={classes.emailMessage}>{item.text}</p>
                      <div className={classes.socialbtns}>
                      <Button href="http://www.google.com" 
                      icon={<FaTwitter cssClass={'twitter'} />} cssClass={'twitter'} 
                      text="Twitter" border={'1px solid #2994C1'} color={'#2994C1'} />

                      <Button href="http://www.google.com"
                      icon={<FaFacebookF cssClass={'facebook'} />} cssClass={'facebook'}  
                      text="Facebook" border={'1px solid #3C67A2'} color={'#3C67A2'} />                                   
                      </div>
                  </span>
                </li>
              )
              })}                                
          </ul>
      </article>      
)
}
export default NotificationList;