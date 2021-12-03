import React , {useState}from 'react'
import Display from './Display';
 const Profile = () => {
   const [data,setData] = useState({})
   const [username, setUsername] = useState('');
   const [repositories, setRepositories] = useState([]);

  const onChangeHandler = e =>{
    setUsername(e.target.value);
  };

   const submitHandler = async e =>{
     e.preventDefault();

     const profile = await fetch(`https://api.github.com/users/${username}?client_id=77b46e8aa9adf7444e8e&client_secret=c08565bb927e6c10196af3ae89552862a2967173&sort=created`)
      const profileJson = await profile.json();
      // console.log(profileJson);


     const repositories = await fetch(profileJson.repos_url)
     const reposJson = await repositories.json();
     console.log(reposJson)


    if(profileJson){
       setData(profileJson)
       setRepositories(reposJson);
    }
   }

  return (
    <>
    <div style={{padding:20}}>
        <div className="ui search">
          <div className="ui icon input">
            <i className="search icon"></i>
            <input className="prompt"
              placeholder="Search username.."
               type='text' value={username} 
                onChange={onChangeHandler} 
                />
          </div>
        
          <button className="ui primary button" 
          type="submit" 
          onClick={submitHandler}>
            <i className="github icon"></i>
               Search
          </button>

          <Display data={data} repositories={repositories}/>
        </div>
    </div>
    </>
  )
}
export default Profile;
