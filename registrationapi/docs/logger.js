/**
 * Configurations of logger.
 */
const winston = require('winston');
const { format, level, prettyPrint } = require('winston');

const DailyRotateFile = require('winston-daily-rotate-file');
const timezoned = () => {
    return new Date().toLocaleString('en-US', {
        timeZone: 'Asia/Mumbai'
    });
}
const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        //winston.format.timestamp(),
        winston.format.combine(format.timestamp({ format: timezoned }),format.prettyPrint()),
        winston.format.printf(({ timestamp, level, message }) => {
            return `[${timestamp}] ${level.toUpperCase()}: ${message}`;
        })
    ),
    transports: [
        new winston.transports.Console(),
        new DailyRotateFile({
            filename: 'logs/registration-%DATE%.log',
            datePattern: 'YYYY-MM-DD',
            zippedArchive: true,
            maxSize: '20m',
            maxFiles: '7d',
        }),
    ],
});

module.exports = logger;