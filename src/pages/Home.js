import Header from "../components/Header.js"
import CurrentList from "../components/CurrentList"
import { Helmet } from "react-helmet-async";

function Home(){
    return(
      
        <div>
        <Helmet>
            <title>Ilo Charles Github </title>
            <meta name="description" content="List of github repositories from user charlesik. This includes the details of each repository and its information. Data is fetched from the github api "/>
            <link rel="canonical" href="/"/>
        </Helmet>
        <Header/>
        <CurrentList/>
        
        </div>
    )

}
export default Home;