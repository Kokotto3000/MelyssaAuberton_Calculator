import { FORM } from "./models/globals.js";
import EventManager from "./models/EventManager.js";

const events= new EventManager(FORM);
events.init();