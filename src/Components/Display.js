import React from 'react'

const Display =({data,repositories}) => {
  return (
      <table className="ui celled table">
          <thead>
              <tr>
                  <th>Avatar</th>  
                  <th>Fullname</th>
                  <th>Username</th>
                  <th>Email</th>
                  <th>Location</th>
                  <th>Repositories</th>
              </tr></thead>
          <tbody>
              <tr>
                  <td >{!data.avatar_url ? (
                      " "
                  ):(
                      <img
                       className="ui small circular image"
                        src={data.avatar_url}
                        alt={data.avatar_url}
                       />
                  )}</td>
                  <td >{data.name}</td>
                  <td >{data.login}</td>
                  <td >{data.email}</td>
                  <td >{data.location}</td>
                  <td >{repositories.map(repo => (
                      <div className={"ui relaxed divided list"} key={repo.name}>
                          <div className ="item">
                              <i className= "large github middle aligned icon">

                              </i>
                              <div className="content">
                                  <a href={repo.html_url} className="header" target="blank">{repo.name}</a>
                              </div>
                          </div>
                      </div>
                ))}</td>
              </tr>
           
          </tbody>
      </table>
  )
}

export default Display;
