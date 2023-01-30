import './Home.css'

const Home = () => {
    return (
        <div className="home d-flex flex-column align-items-center mx-3">
            <h2>Usage</h2>
            <p className="text-center">Use this page to visualize, add, edit or delete quotes for the Random Quote
                Machine.</p>
            <p className="text-center">On <span className="fw-bold">Quotes</span>, you will see all the quotes and will
                be able to edit or delete it,
                clicking on <span className="fw-bold text-primary">See Quote
                    Actions</span> button.</p>
            <p className="text-center">On <span className="fw-bold">Add Quote</span>, you will be able to add a quote to
                the list.</p>
            <p className="text-center"><span className="text-danger fw-bold">BUG WARNING</span>: If you try to refresh
                the page
                on a route
                other than
                Home, the app will return a 404 error. I'm working on fix this. I hope you comprehend. Thank you!</p>
            <p className="text-center">Access the Random Quote Machine <a className="link"
                                                                          href="https://cl84dev.github.io/random/"
                                                                          target="_blank">here</a>.</p>
            <footer><a className="link" href="https://github.com/Cl84Dev" target="_blank">@Cl84Dev</a></footer>
        </div>
    )
}

export default Home