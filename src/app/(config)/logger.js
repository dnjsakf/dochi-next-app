import winston from 'winston';

// Winston 설정
const logger = winston.createLogger({
  transports: [
    new winston.transports.Console(),  // 콘솔 출력
    new winston.transports.File({ filename: 'server.log' })  // 파일 출력
  ],
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.simple()
  )
});

export default logger;