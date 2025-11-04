export class Stack<T> {
  private items: T[] = [];

  push(element: T): void {
    this.items.push(element);
  }

  pop(): T | undefined {
    return this.items.pop();
  }

  // צפייה באלמנט העליון (peek)
  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  size(): number {
    return this.items.length;
  }

  clear(): void {
    this.items = [];
  }

  // להדפסה נוחה / בדיקות
  toArray(): T[] {
    return [...this.items];
  }
}

// // דוגמת שימוש
// const stack = new Stack<number>();
// stack.push(10);
// stack.push(20);
// console.log(stack.peek()); // 20
// console.log(stack.pop());  // 20
// console.log(stack.isEmpty()); // false
