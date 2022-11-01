import { useOutletContext } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
function RepoDetails(){
    const [repos]=useOutletContext();
    const {name}=useParams();

    const repoDetails= repos.filter(repo => repo.name===name).map((repo,index)=>{
        return(
            <div>
                <h2>{repo.name}</h2>
                <p> {repo.description}</p>
                <p>Link: {repo.url}</p>
                <p>Visibility: {repo.visibility}</p>
                <p>Created: {repo.created_at}</p>
                <p>Pushed at: {repo.pushed_at}</p>
                <p>Last Update: {repo.updated_at}</p>
                <p>Open Issues: {repo.open_issues}</p>
                <p>Forked: {repo.forks} times</p>
            </div>
        )
    })
    console.log(repos)
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