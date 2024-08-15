import React, { useEffect, useState } from 'react'
import '../../assets/css/games.css'
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom'
 const GameLists = () => {
    const navigate=useNavigate();
    const {pathname}=useLocation();
    const [searchParams]=useSearchParams();
    const [lists,setLists]=useState([]);
    const gameType=searchParams.get('type') || 'slot';
    const gameList=searchParams.get('list') || 'JILI';
    const listsData=[
      {
        gameType:'all',
        lists:[
          {id:5,name:'JILI',value:''},
          {id:1,name:'PP',value:''},
          {id:2,name:'PG',value:''},
          {id:3,name:'CQ9',value:''},
          {id:4,name:'JDB',value:''},
           {id:6,name:'JOKER',value:''},
          {id:7,name:'PS',value:''},
          {id:8,name:'KA',value:''},
       ]
      },
      {
        gameType:'hot',
        lists:[
          {id:5,name:'JILI',value:''},
          {id:1,name:'PP',value:''},
          {id:2,name:'PG',value:''},
          {id:3,name:'CQ9',value:''},
          {id:4,name:'JDB',value:''},
           {id:6,name:'JOKER',value:''},
          {id:7,name:'PS',value:''},
          {id:8,name:'KA',value:''},
       ]
      },
      {
        gameType:'slot',
        lists:[
          {id:5,name:'JILI',value:''},
          {id:1,name:'PP',value:''},
          {id:2,name:'PG',value:''},
          {id:3,name:'CQ9',value:''},
          {id:4,name:'JDB',value:''},
           {id:6,name:'JOKER',value:''},
          {id:7,name:'PS',value:''},
          {id:8,name:'KA',value:''},
       ]
      },
      {
        gameType:'fishing',
        lists:[
          {id:1,name:'JILI',value:''},
          {id:2,name:'PS',value:''},
          {id:3,name:'JOKER',value:''},
          {id:4,name:'JDB',value:''},
          {id:5,name:'CQ9',value:''},
          {id:6,name:'KA',value:''},
          {id:7,name:'YB',value:''},
        ]
      },
      {
        gameType:'live casino',
        lists:[
          {id:1,name:'JILI',value:''},
          {id:2,name:'SA',value:''},
          {id:3,name:'JOKER',value:''},
          {id:4,name:'SEXY',value:''},
          {id:5,name:'AG',value:''},
          {id:6,name:'CQ9',value:''},
         ]
      },
      {
        gameType:'sport book',
        lists:[
           ]
      }
    ]
    useEffect(()=>{
      const selectedGameType=listsData.filter((lists)=>lists.gameType===gameType)[0];
      setLists(selectedGameType?.lists);
    },[gameList,gameType])

  return (<>
    {lists?.length>0 && <div className='gameProviders py-3 px-2 px-sm-4 gap-2 gap-sm-3 gap-lg-4 gap-lg-0 d-flex algin-items-center '>
      {lists?.map((list)=>{
        return <div onClick={()=>{
          navigate(`/games?type=${searchParams.get('type')}&list=${list.name}`)
        }} key={list.id} className={`${gameList===list.name ? 'activeGameList' :''} cursor-pointer py-1 px-3 px-sm-4 rounded-2 gameProvider`}>
            {list.name}
        </div>
      })}
    </div>}
    </>
  )
}

export default GameLists