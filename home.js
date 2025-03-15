import { Router } from "express";
import si, { mem } from "systeminformation";
import colors from "colors";

let response = Router();

let valueObject = {
	system: "model, manufacturer",
	osInfo: "platform, release",
	cpu: "manufacturer, brand, processors, physicalCores, speed, speedMax",
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
	free = Number((free / 1024 / 1024).toPrecision(6));
	used = Number((used / 1024 / 1024).toPrecision(6));
	let memoryTotal = { total, free, used };
	// console.log(memoryTotal);

	const memoryObject = { memory: { ...memoryTotal } };
	merged = { ...general, ...memoryObject };
	console.log(merged);

	res.json(merged);
});

export default response;
