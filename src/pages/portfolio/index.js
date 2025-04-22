import React, {useState, useEffect } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";
import Squares from '../../back/Squares/Squares';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import Loader from "../../components/Loader";

export const Portfolio = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [inView, controls]);

  const [isLoading, setIsLoading] = useState(true);
  // const [pageData, setPageData] = useState(null); // Для хранения данных

  useEffect(() => {
    setIsLoading(true); // Устанавливаем в true при монтировании
    console.log("Home page loading started...");

    // Имитация загрузки данных
    const timerId = setTimeout(() => {
      console.log("Home page data loaded (simulated).");
      // setPageData({ title: "Добро пожаловать!" }); // Устанавливаем данные (если нужно)
      setIsLoading(false); // Убираем лоадер
    }, 3000); // Задержка 1.5 секунды

    // Функция очистки для предотвращения утечек памяти, если компонент размонтируется раньше
    return () => clearTimeout(timerId);

  }, []); // Пустой массив зависимостей - запускается один раз при монтировании

  // Если идет загрузка, показываем лоадер
  if (isLoading) {
    return <Loader />;
  }

  return (
    <HelmetProvider>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: -1,
          pointerEvents: "none",
        }}
      >
        <Squares 
          speed={0.5} 
          squareSize={40}
          direction='diagonal'
          borderColor='#100f0f'
          hoverFillColor='#222'
        />
      </div>

      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Portfolio | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>

        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <motion.h1 
              className="display-4 mb-4"
              ref={ref}
              initial={{ opacity: 0, y: 50 }}
              animate={controls}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              Portfolio
            </motion.h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>

        <div className="mb-5">
  {dataportfolio.map((data, i) => (
    <motion.div
      key={i}
      className="project glowing-card"
      initial={{ opacity: 0, scale: 0.9, y: 30 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: 'easeOut', delay: i * 0.2 }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="project__img-container">
        <img className="project__img" src={data.img} alt="" />
      </div>
      <div className="project__content grid-flow">
        <h3 className="project__title gradient-text">{data.title}</h3>
        <ul className="project__tags flex-group" role="list">
          <li className="project__tag">{data.tag1}</li>
          <li className="project__tag">{data.tag2}</li>
        </ul>
        <p>{data.description}</p>
        <a className="project__cta" href={data.link}>view project</a>
      </div>
    </motion.div>
  ))}
</div>

      </Container>
    </HelmetProvider>
  );
};
