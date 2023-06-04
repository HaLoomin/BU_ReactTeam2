import React from 'react';

import FriendHead from './FriendsListHeader'
import FriendBody from './FriendsListBody'

const FriendMain = () => {
    return (
        <div>
            <div><FriendHead/></div>
            <div><FriendBody/></div>
        </div>
    );
};

export default FriendMain;