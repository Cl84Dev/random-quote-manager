import './Home.css'

const Home = () => {
    return (
        <article className="home d-flex flex-column align-items-center m-3 p-3 rounded-2">
            <h2>Usage</h2>
            <p className="text-center">Use this page to visualize, add, edit or delete quotes for the Random Quote
                Machine.</p>
            <p className="text-center">On <span className="fw-bold">Quotes</span>, you will be able to choose how to
                show the quotes and then edit or delete them by
                click on <span className="fw-bold text-primary">See Quote
                    Actions</span> button.</p>
            <p className="text-center">On <span className="fw-bold">Add Quote</span>, you will be able to add a quote to
                the list.</p>
            <p className="text-center">Access the Random Quote Machine <a className="link"
                                                                          href="https://cl84dev.github.io/random/"
                                                                          target="_blank">here</a>.</p>
            <footer><a className="link" href="https://github.com/Cl84Dev" target="_blank">@Cl84Dev</a></footer>
        </article>
    )
}

export default Home