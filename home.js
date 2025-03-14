import { Router } from "express";
import si, { mem } from "systeminformation";
import colors from "colors";

let response = Router();

let valueObject = {
  cpu: "manufacturer, brand, processors, physicalCores, speed, speedMax",
  osInfo: "platform, release",
  system: "model, manufacturer",
};

const general = await si
  .get(valueObject)
  .then((data) => {
    return data;
  })
  .catch((error) => {
    console.log(error);
  });

const memory = await si
  .mem()
  .then((data) => {
    return data;
  })
  .catch((error) => {
    console.log(error);
  });

response.get("/", (req, res) => {
  //   console.log(general);
  //   const { cpu } = general;
  //   console.log(cpu);
  //   console.log(memory);

  let merged = { ...general, ...memory };

  let { total, free, used } = memory;
  total = total / 1024 / 1024;
  free = (free / 1024 / 1024).toFixed(1);
  used = (used / 1024 / 1024).toFixed(1);
  let memoryTotal = { total, free, used };
  console.log(memoryTotal);

  //   console.log(merged);
});

export default response;
