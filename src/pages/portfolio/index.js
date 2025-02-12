import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";

export const Portfolio = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Portfolio </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="mb-5 ">
          {dataportfolio.map((data, i) => {
            return (
                <div key={i} className="project">
                  <div className="project__img-container">

                    <img className="project__img" src={data.img} alt=""/>
                  </div>
                  <div className="project__content grid-flow">
                    <h3 className="project__title">{data.title}</h3>
                    <ul className="project__tags flex-group" role="list">
                      <li className="project__tag">{data.tag1}</li>
                      <li className="project__tag">{data.tag2}</li>
                    </ul>
                    <p>{data.description}</p>

                    <a className="project__cta" href={data.link}>view project</a>
                  </div>


                </div>
            );
          })}
        </div>
      </Container>
    </HelmetProvider>
  );
};
