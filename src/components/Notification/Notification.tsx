import React from 'react';
import {StNotificator} from '../../styles';
import {TNotify} from "../../store/notify/types";

type TProps = {
    hiddeNotification: () => void,
    notification: TNotify
}

const Notification = ({hiddeNotification, notification:{type, message}}: TProps) => {
    React.useEffect(() => {
        if (type)  {
            setTimeout(() => {
                hiddeNotification();
            }, 2000);}
    }, [type]);
    return type ? (<StNotificator type={type}><p>{message}</p></StNotificator>): null;
};

export default Notification;
