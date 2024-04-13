import { Link } from "react-router-dom"

function ErrorPage(){
    return(
        <section>
            <div className="error-center">
                <h2>Opps</h2>
                <h3>This page Not Found</h3>
                <Link to={'/'} className="btn btn-primary"> Go Back Home</Link>
            </div>
        </section>
    )
}

export default ErrorPage;