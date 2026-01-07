import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <footer>
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <span>
                                    React Password Manager -
                                    Desenvolvido por {" "}
                                    <Link
                                        to="https://www.linkedin.com/in/aldhemir-macedo-2076a8170/"
                                        target="_blank"
                                        className="text-decoration-none text-dark"
                                    >
                                        Aldhe Macedo
                                    </Link>
                                </span>
                            </div>
                        </div>
                    </div>
                </section>
            </footer>
        </>
    );
};

export default Footer;
