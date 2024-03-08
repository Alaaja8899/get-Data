import React, { useEffect, useState } from 'react';
import { ref, query, orderByChild, get, child } from 'firebase/database';
import Box from './Box';
import { useObject } from 'react-firebase-hooks/database';
import { database } from './Database';
import { PlaySound, createNotification } from './extra';
function App() {
  const messagesRef = ref(database, `users`);
  const queryRef = query(messagesRef, orderByChild('serverTimestamp'));
  const [snapshot, loading, error] = useObject(queryRef);

  const snapshotToArray = (snapshot) => {
    const array = [];
    snapshot.forEach((childSnapshot) => {
      const item = childSnapshot.val();
      item.key = childSnapshot.key;
      array.push(item);
    });
    return array;
  };

    useEffect(()=>{
      PlaySound()
    } , [snapshot])

    return (
    <div className="p-6 container mx-auto ">   
       
      <div className="cards flex flex-wrap gap-2 scroll-smooth">
      {snapshot && snapshotToArray(snapshot).map(victim => <Box data={victim}/>)}
      </div>
    </div>
  );
}

export default App;
