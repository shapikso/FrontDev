import React from 'react';
import {StNotificator} from '../../styles';
import {hiddeNotification} from "../../store/notify/action";
import {useDispatch, useSelector} from "react-redux";
import {selectNotify} from "../../store/notify/selectors";

const Notification = () => {
    const dispatch = useDispatch();
    const {type, message} = useSelector(selectNotify);
    React.useEffect(() => {
        if (type)  {
            setTimeout(()=> {
                dispatch(hiddeNotification());
            }, 2000);}
    }, [type]);
    return type && (<StNotificator type={type}><p> {message} </p></StNotificator>);
};

export default Notification;
