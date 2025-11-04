import { Stack } from "./structures/Stack";

export function isValid(s: string): boolean {
    let stack: Stack<string> = new Stack<string>()
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(" || s[i] === "[" || s[i] === "{")
            stack.push(s[i])
        else {
            if (!(s[i] === ")" && stack.peek() === "(") &&
                !(s[i] === "]" && stack.peek() === "[") &&
                !(s[i] === "}" && stack.peek() === "{") ) {
                    return false;
            }
            if((s[i] === ")" && stack.peek() === "("))
                stack.pop()
            if((s[i] === "]" && stack.peek() === "["))
                 stack.pop()
            if((s[i] === "}" && stack.peek() === "{"))
                stack.pop()
        }

    }
      return stack.isEmpty()
    
};