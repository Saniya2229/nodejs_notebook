// logger.js
import { appendFileSync } from "fs";
import os from "os";
import EventEmitter from "events";

class Logger extends EventEmitter {
  log(message) {
    this.emit("message", { message });
  }
}

const logger = new Logger();
const logFile = "./eventlog.txt";

// Correct function to log events to file
const logToFile = (event) => {
  const logMessage = `${new Date().toISOString()} - ${event.message} \n`;
  appendFileSync(logFile, logMessage);
};

// Fix: Register the logToFile function, not the filename!
logger.on("message", logToFile);

// Emit startup messages
logger.log("Application started");
logger.log("Application event occurred");

// Log memory usage every 3 seconds
setInterval(() => {
  const memoryUsage = (os.freemem() / os.totalmem()) * 100;
  logger.log(`Current memory usage: ${memoryUsage.toFixed(2)}%`);
}, 3000);
