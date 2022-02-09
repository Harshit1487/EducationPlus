import React from 'react'

const Footer = () => {
    return (
        <div>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-12 col-lg-10 mx-auto">
                            <div className="row">
                                <div className="col-6 col-lg-3">
                                    <h3>Company</h3>
                                    <ul>
                                        <li>
                                            <a href="/">Home</a>
                                        </li>
                                        <li>
                                            <a href="/quiz">Quiz</a>
                                        </li>
                                        <li>
                                            <a href="/livechat">LiveChat</a>
                                        </li>
                                        <li>
                                            <a href="/uploadnote">Notes</a>
                                        </li>
                                        <li>
                                            <a href="/">About</a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="col-6 col-lg-3">
                                    <h3>Support</h3>
                                    <ul>
                                        <li>
                                            <a href="/">Learning</a>
                                        </li>
                                        <li>
                                            <a href="/">Technology</a>
                                        </li>
                                        <li>
                                            <a href="/">Science</a>
                                        </li>
                                        <li>
                                            <a href="/">Professional</a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="col-6 col-lg-3">
                                    <h3>Services</h3>
                                    <ul>
                                        <li>
                                            <a href="/register">Register</a>
                                        </li>
                                        <li>
                                            <a href="/login">Login</a>
                                        </li>
                                    </ul>
                                </div>
                                
                                <div className="col-6 col-lg-3">
                                    <h2>Follow Us</h2>
                                    <div className="row">
                                        <div className="col-3 mx-auto">
                                            <a href="!#">
                                                <i className="fab fa-instagram fontawesome-style"></i>
                                            </a>
                                        </div>
                                        <div className="col-3 mx-auto">
                                            <a href="!#">
                                                <i className="fab fa-facebook-f fontawesome-style"></i>
                                            </a>
                                        </div>
                                        <div className="col-3 mx-auto">
                                            <a href="!#">
                                                <i className="fab fa-twitter fontawesome-style"></i>
                                            </a>
                                        </div>
                                        <div className="col-3 mx-auto">
                                            <a href="!#">
                                                <i className="fab fa-youtube fontawesome-style"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <hr />
                            <div className="mt-3">
                                <p className="para text-center w-100"> Copyright @ 2021. All rights reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>
           
        </div>
    )
}

export default Footer
