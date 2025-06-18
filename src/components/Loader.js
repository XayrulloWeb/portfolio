import React from 'react';
import { motion } from 'framer-motion';

// --- Анимация для контейнера точек ---
const loadingContainerVariants = {
  start: {
    transition: {
      staggerChildren: 0.3, // Задержка 0.3с между анимациями точек
    },
  },
  end: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

// --- Анимация для каждой точки ---
const loadingDotVariants = {
  start: {
    scale: 0.7, // Начальная точка будет чуть меньше
    opacity: 0.5, // Слабая прозрачность в начале
  },
  end: {
    scale: 1.2, // Конечный размер увеличится
    opacity: 1,  // Точка станет полностью видимой
    rotate: [0, 360], // Поворот для эффекта
  },
};

// --- Параметры перехода для анимации точек ---
const loadingDotTransition = {
  duration: 0.7, // Длительность одного "прыжка"
  repeat: Infinity, // Повторять бесконечно
  repeatType: "reverse", // Двигаться обратно после достижения end
  ease: "easeInOut", // Плавность анимации
};

const Loader = () => {
  return (
    // Внешний контейнер - затемнение и центрирование
    <motion.div // Можно добавить плавное появление/исчезание самого лоадера
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }} // Плавность появления/исчезания фона
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "#000", // Чуть темнее и непрозрачнее фон
        color: "#f0f0f0", // Светлый цвет текста и точек
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
        backdropFilter: 'blur(10px)', // Легкий блур фона
        WebkitBackdropFilter: 'blur(10px)', // Поддержка для старых браузеров
      }}
    >
      {/* Внутренний контейнер для точек и текста */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '20px', // Расстояние между точками и текстом
      }}>

        {/* Анимированные точки */}
        <motion.div
          style={{
            width: "8rem", // Ширина контейнера для точек
            height: "1.5rem", // Высота для "прыжка"
            display: "flex",
            justifyContent: "space-around", // Равномерное распределение точек
            alignItems: "flex-end", // Выравнивание по низу
          }}
          variants={loadingContainerVariants}
          initial="start"
          animate="end"
        >
          {/* Генерация 3 точек */}
          {[...Array(3)].map((_, index) => (
            <motion.span
              key={index} // Ключ для React
              style={{
                display: "block",
                width: "1.4rem", // Размер точки
                height: "1.4rem", // Размер точки
                backgroundColor: "#6c63ff", // Цвет точек
                borderRadius: "50%", // Делаем круглыми
              }}
              variants={loadingDotVariants}
              transition={loadingDotTransition}
            />
          ))}
        </motion.div>

        {/* Текст с анимацией пульсации и плавным цветом */}
        <motion.h2
          initial={{ opacity: 0.5 }}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{
            duration: 1.5, // Пульсация длится 1.5с
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            fontWeight: 400,
            letterSpacing: '2px',
            textTransform: 'uppercase',
            fontSize: '1.2rem',
            color: "#6c63ff", // Цвет текста будет тот же, что и у точек
            textShadow: "0px 0px 10px rgba(108, 99, 255, 0.6)", // Светящийся эффект текста
          }}
        >
          Загрузка...
        </motion.h2>

      </div>
    </motion.div>
  );
};

export default Loader;
