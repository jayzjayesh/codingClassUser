import useUserSearch from "./useUserSearch"
import { useRef, useState ,useCallback} from 'react';
import {useHistory,Link} from "react-router-dom";

export default function Users(){

  const [pageNumber,setPageNumber] = useState(1);
  const [count,setCount] = useState(0);
  const {loading,error,users,hasMore,countUsers} = useUserSearch(pageNumber,count);
  const history = useHistory();
  const isAuth = localStorage.getItem("isAuth");


  const observer = useRef()
  const lastBookElementRef = useCallback(node => {
    if(loading) return

    if(observer.current) observer.current.disconnect()

    observer.current = new IntersectionObserver(entries => {
      if(entries[0].isIntersecting && hasMore){
        setPageNumber(prevPageNumber => prevPageNumber+1)
        console.log('Visible');
      }
    })
    if(node) observer.current.observe(node);
    console.log(node);
  },[loading,hasMore])

  function onLogOut(e){
    e.preventDefault();
    localStorage.setItem("isAuth","false");
    history.push("/");
  }


  
  return (
    <div className="App">
        <div className="Header">
            <h1 style={{color : "black"}}>Scrolling List</h1>
            <h7 style={{color : "black"}}>Infinite list of user profiles</h7>
        </div>
    <div className="Users">
      {users.map((user,index) => {
        if(users.length === index +1){
          return (
          <div key={countUsers+user.name.first} ref={lastBookElementRef} className='card' style={{width :"150px"}}>
            <img class="card-img-top" src={user.picture.thumbnail} alt="Card image cap" style={{width :"150px"}}></img>
            <div class="card-body">
            <h5 class="card-title">{user.name.first} {user.name.last}</h5>
          </div>
            
         </div>

          )
        }
        else{
          return (
            <div key={countUsers+user.name.first} className='card' style={{width :"150px"}}>
              <img class="card-img-top" src={user.picture.thumbnail} alt="Card image cap" style={{width :"150px"}}></img>
              <div class="card-body">
              <h5 class="card-title">{user.name.first} {user.name.last}</h5>
            </div>
              
           </div>
  
            )
        }
        
      })}
      <div>{loading && 'Loading..'}</div>
      <div>{error && 'Error...'}</div>
      </div>
        
    </div>
  );

}