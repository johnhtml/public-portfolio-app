import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader } from 'reactstrap';
import { Link } from 'react-router-dom';

function About() {
    return(
        <div className="container">
            <div className="row no-gutters">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>About Me</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>About Me</h3>
                    <hr />
                </div>                
            </div>
            <div className="row row-content no-gutters">
                <div className="col-12 col-md-12">
                    <h2>My History</h2>
                    <p>Civil engineer, <em>appassionate about Learning new technologies</em>, lover of maths and a bit of science.</p>
                </div>
                <div className="col-12 col-md-12">
                    <Card>
                        <CardHeader className="bg-primary text-white">Some facts about me</CardHeader>
                        <CardBody>
                            <dl className="row p-1 no-gutters">
                                <dt className="col-6">Bachelor Graduation date</dt>
                                <dd className="col-6">12 Sep. 2017</dd>
                                <dt className="col-6">Master Graduation date</dt>
                                <dd className="col-6">26 Feb. 2021</dd>
                                <dt className="col-6">Master's program</dt>
                                <dd className="col-6">Geotechnical Engineering</dd>
                                <dt className="col-6">University</dt>
                                <dd className="col-6">Universidad Nacional de Colombia</dd>
                            </dl>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12">
                    <Card>
                        <CardBody className="bg-faded">
                            <blockquote className="blockquote">
                                <p className="mb-0">“He who hasn't tasted bitter things hasn't earned sweet things”.</p>
                                <footer className="blockquote-footer">Gottfried Wilhelm Leibniz, 
                                <cite title="Source Title"> Discourse on Metaphysics and Other Essays</cite>
                                </footer>
                            </blockquote>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default About;