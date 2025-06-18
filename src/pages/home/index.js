import React,{useState, useEffect} from "react";
import Stack from '../../back/Stack/Stack';
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { introdata, meta } from "../../content_option";
import { Link } from "react-router-dom";
import Loader from '../../components/Loader';
import  img1 from "../../assets/images/5204330517196044034.jpg"
import  img2 from "../../assets/images/5204330517196044035.jpg"
import  img3 from "../../assets/images/5204330517196044036.jpg"
import  img4 from "../../assets/images/5402234840599882543.jpg"
import Aurora from '../../back/Aurora/Aurora';
import { motion } from 'framer-motion';
export const Home = () => {

  const images = [
    { id: 1, img: img1 },
    { id: 2, img: img2 },
    { id: 3, img: img3 },
    { id: 4, img: img4 },
  ];

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
<motion.section
  id="home"
  className="home"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1.5, ease: "easeInOut" }}
>
  <div className="intro_sec d-block d-lg-flex align-items-center">

    <motion.div
      className="text h-100 d-lg-flex justify-content-center text_home"
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
    >
      <div className="align-self-center">
        <div className="intro mx-auto">
          <motion.h2
            className="mb-1x"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            {introdata.title}
          </motion.h2>

          <motion.h1
            className="fluidz-48 mb-1x"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.6 }}
          >
            <Typewriter
              options={{
                strings: [
                  introdata.animated.first,
                  introdata.animated.second,
                  introdata.animated.third,
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 10,
              }}
            />
          </motion.h1>

          <motion.p
            className="mb-1x"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 1 }}
          >
            {introdata.description}
          </motion.p>

          <motion.div
            className="intro_btn-action pb-5"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.1, duration: 0.6 }}
          >
            {/* Кнопки */}
          </motion.div>
        </div>
      </div>
    </motion.div>

    <motion.div
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2.5, duration: 1 }}
    >
      <Stack
        randomRotation={true}
        sensitivity={180}
        sendToBackOnClick={false}
        cardDimensions={{ width: 400, height: 400 }}
        cardsData={images}
      />
    </motion.div>

  </div>
</motion.section>

  );
};
