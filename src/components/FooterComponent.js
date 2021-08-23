import { Link } from 'react-router-dom';

function Footer(props) {
    return(
    <div className="footer rounded">
        <div className="container">
        <hr />
            <div className="row justify-content-center">             
                <div className="col-4 offset-1 col-sm-4">
                    <h5>Links</h5>
                    <ul className="list-unstyled">
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/about">About me</Link></li>
                        <li><Link to="/projects">Projects</Link></li>
                        <li><Link to="/contact">Contact me</Link></li>
                    </ul>
                </div>
                <div className="col-7 col-sm-5 align-self-center">
                    <div className="text-center">
                        <a className="btn btn-social-icon btn-github" href="https://github.com/johnhtml"><i className="fa fa-github"></i></a>
                        <a className="btn btn-social-icon" href="mailto:"><i className="fa fa-envelope-o"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Footer;