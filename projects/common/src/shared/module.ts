import { goodbye } from "common/shared/othermodule";

export function makeHello(name: string) {
	return `Hello ${name}!` + goodbye(name);
}
