import React,{useEffect, useState} from 'react';
import {Loader} from './components/Loader';
import InfiniteScroll from 'react-infinite-scroll-component';


const App = () =>{
    const [posts,setPosts]=useState([])
    useEffect(()=>{
      fetchPosts()
    },[] )
    
    
    const fetchPosts = () =>{
      const url='https://type.fit/api/quotes';
      fetch(url).then(resp=>resp.json())
      .then(resp=>setPosts(resp))
    }
    
    
    
    
      return (
        <div className="App">
          <h1 align="center">Quotes app</h1>
          <InfiniteScroll
          dataLength = {posts.length}
          next = {fetchPosts}
          hasMore = {true}
          loader = {<Loader/>}
          >
          {
            posts.map(post=><div><p>{`${post.text}`}</p></div>)
          }
          </InfiniteScroll>
        </div>
      );
}    


export default App;
