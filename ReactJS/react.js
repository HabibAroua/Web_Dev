const name="Habib"
const ele1= <p> Hello {name} {5*2} </p>;
const ele2=
(
    <b>
        <p className="text">
            <span>Span 1</span>
            <i>Italic</i>
         </p>
    </b>
);
            
class App extends React.Component
{
    render()
    {
        return(
            <div>
                <Header />
                <Content />
                <Footer />
            </div>
        );
    }
}
            
class Header extends React.Component
{
    render()
    {
        return (
            <header>The Header</header>
        );
    }
}
            
class Content extends React.Component
{
    render()
    {
        return(
            <main>The content</main>
        );
    }
}
            
class Footer extends React.Component
{
    render()
    {
        return(
            <footer>The Footer</footer>
        );
    }
}

ReactDOM.render(<App />,document.getElementById('app'));