import { goodbye } from "othermodule"; // OK for eslint, NOT OK for compiler
// import { goodbye } from "@shared/othermodule"; // NOT OK for eslint, OK for compiler

export function makeHello(name: string) {
	return `Hello ${name}!` + goodbye(name);
}
