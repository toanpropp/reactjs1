import React, { Component } from "react";

export default class Product extends Component {
    render() {
        return (
            <div className="container mb-5">
                <div className="row">
                    <div className="col-12 col-lg-4 mt-5">
                        <div className="item text-center bg-light position-relative p-5">
                            <button className="btn btn-primary position-absolute fs-3" style={{ left: '45%', top: '-15%' }}>
                                <i className="bi bi-collection-fill text-light" />
                            </button>
                            <h3>Fresh new layout</h3>
                            <p>With Bootstrap 5, we've created a fresh new layout for this template!</p>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4 mt-5">
                        <div className="item text-center bg-light position-relative p-5">
                            <button className="btn btn-primary position-absolute fs-3" style={{ left: '45%', top: '-15%' }}>
                                <i className="bi bi-cloud-download text-light" />
                            </button>
                            <h3>Free to download</h3>
                            <p>As always, Start Bootstrap has a powerful collectin of free templates.</p>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4 mt-5">
                        <div className="item text-center bg-light position-relative p-5">
                            <button className="btn btn-primary position-absolute fs-3" style={{ left: '45%', top: '-15%' }}>
                                <i className="bi bi-card-heading text-light" />
                            </button>
                            <h3>Jumbotron hero header</h3>
                            <p>The heroic part of this template is the jumbotron hero header!</p>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4 mt-5">
                        <div className="item text-center bg-light position-relative p-5">
                            <button className="btn btn-primary position-absolute fs-3" style={{ left: '45%', top: '-15%' }}>
                                <i className="bi bi-bootstrap text-light" />
                            </button>
                            <h3>Feature boxes</h3>
                            <p>We've created some custom feature boxes using Bootstrap icons!</p>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4 mt-5">
                        <div className="item text-center bg-light position-relative p-5">
                            <button className="btn btn-primary position-absolute fs-3" style={{ left: '45%', top: '-15%' }}>
                                <i className="bi bi-code text-light" />
                            </button>
                            <h3>Simple clean code</h3>
                            <p>We keep our dependencies up to date and squash bugs as they come!</p>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4 mt-5">
                        <div className="item text-center bg-light position-relative p-5">
                            <button className="btn btn-primary position-absolute fs-3" style={{ left: '45%', top: '-15%' }}>
                                <i className="bi bi-patch-check text-light" />
                            </button>
                            <h3>A name you trust</h3>
                            <p>Start Bootstrap has been the leader in free Bootstrap templates since 2013!</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
