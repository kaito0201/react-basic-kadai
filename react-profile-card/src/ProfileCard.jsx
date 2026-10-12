import React from 'react';

export function ProfileCard({ index, setIndex, profiles }){

  const handleClick = () => {
    if(index < 4){
      setIndex(index + 1)
    } else {
      setIndex(0) 
    }
  };

  return (
    <main>
      <div style={{
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '16px'
      }}>
        <h2>{profiles[index].name}</h2><br/>
        <p>【年齢】{profiles[index].age}歳</p><br/>
        <p>【自己紹介】{profiles[index].bio}</p><br/>
        <button onClick={handleClick}>次のプロフィール</button>
      </div>
    </main>

  );

}