import React from 'react';
import {StNotificator} from '../../styles';

const Notification = ({hiddeNotification, notification:{type, message}}) => {
    React.useEffect(() => {
        if (type)  {
            setTimeout(() => {
                hiddeNotification();
            }, 2000);}
    }, [type]);
    return !!type && (<StNotificator type={type}><p>{message}</p></StNotificator>);
};

export default Notification;
