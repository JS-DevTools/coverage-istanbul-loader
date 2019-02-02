import say from "./say";

export default function sayHello(name = "world"): string {
  return say("hello", name);
}
