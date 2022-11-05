import { useOutletContext } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
function RepoDetails(){
    const [repos]=useOutletContext();
    const {name}=useParams();

    const repoDetails= repos.filter(repo => repo.name===name).map((repo,index)=>{
        return(
            <div className="detailsinfo" key={index}>
                <h2>{repo.name}</h2>
                <p> {repo.description}</p><br></br>
                <p> <span>Link: </span> {repo.url}</p>
                <p> <span>Visibility: </span> {repo.visibility}</p>
                <p> <span>Created: </span> {repo.created_at}</p>
                <p> <span>Pushed at: </span> {repo.pushed_at}</p>
                <p> <span>Last Update: </span> {repo.updated_at}</p>
                <p> <span>Open Issues: </span> {repo.open_issues}</p>
                <p> <span>Forked: </span> {repo.forks} times</p>
            </div>
        )
    })
    return(
        <div>
        <Helmet>
        <title>Ilo Charles Github </title>
        <meta name="description" content="List of github repositories from user charlesik. This includes the details of each repository and its information. Data is fetched from the github api "/>
        <link rel="canonical" href="/details"/>
    </Helmet>
       {repoDetails}
       </div>
    )
}
export default RepoDetails;