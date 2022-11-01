import Pagination from "./Pagination";
import { useState } from 'react';
import { useEffect } from 'react';
import { Link, Outlet} from "react-router-dom";


function CurrentList(props) {
  const [profile,setProfile]=useState();
  const [repos,setRepos]=useState([]);
  const [currentRepos,setCurrentRepos]=useState(1);
  const [reposPerPage]=useState(5);
  useEffect(()=>{
    fetch(
      'https://api.github.com/users/charlesik'
    )
      .then((res) => res.json())
      .then((data) => setProfile(data));
  },[])
  useEffect(()=>{
    fetch("https://api.github.com/users/charlesik/repos")
    .then((res) => res.json())
    .then((data) => setRepos(data));
  },[])
  console.log(profile)
  console.log(repos)
  const lastRepo= currentRepos*reposPerPage;
  const firstRepo= lastRepo-reposPerPage;
  const currentPage= repos.slice(firstRepo,lastRepo)

  const paginate= pageNumber => setCurrentRepos(pageNumber);

 


  const repoList = currentPage.map((repo) => {
    return (
      <div className="repo" key={repo.name}>
        <p>{repo.name}</p>
        <Link to={`details/${repo.name}`}>View Details</Link>
      </div>
    );
  });
  return (
    <div className="main">
      <div className="sidebar">
      <h2>My Github Repositories</h2>
      {repoList}
      <Pagination
        reposPerPage={reposPerPage}
        totalRepos={repos.length}
        paginate={paginate}
      />
    </div>
      <div className="repodetails">
      <Outlet context={[repos,setRepos]}/>
      </div>
    </div>
    
  );
}

export default CurrentList;
