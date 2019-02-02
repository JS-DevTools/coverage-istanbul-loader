import say from "./say";

export default function sayHello (name = "world") {
  return say("hello", name);
}
