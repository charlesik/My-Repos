function Pagination(props){
    const pageNumbers=[];
    for (let index = 1; index <= Math.ceil(props.totalRepos/props.reposPerPage); index++) {
        pageNumbers.push(index);
        
    }
    const buttons=pageNumbers.map((num)=>{
       return <li className="listItem"><button onClick={()=> props.paginate(num)}  className="linkItem">{num}</button></li>
    })

    return(
        <ul className="linkButtons">
          {buttons}  
        </ul>
    )
}

export default Pagination;