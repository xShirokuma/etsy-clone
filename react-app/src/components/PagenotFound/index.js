import { useHistory, Link } from "react-router-dom"
import { useSelector } from "react-redux"

import "./PagenotFound.css"


function PagenotFound() {
  const user = useSelector(state => state.session.user)
  const history = useHistory()

    return (
        <div className="error-page">
            <h1>Uh oh! </h1>
            <h2>Sorry, the page you were looking for was not found.</h2>
            <div className="button-class">
                <Link className="go-back" to='/' style={{color:"black", cursor:"pointer"}}> 🔙 Go Back to Shopsy.com</Link>
            </div>
        </div>
    )
}


export default PagenotFound;
