// מחלקת צומת ברשימה מקושרת
export class MyListNode {
  val: number;
  next: MyListNode | null;

  constructor(val?: number, next?: MyListNode | null) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
  }
}

// פונקציה לבניית רשימה ממערך מספרים
export function buildList(values: number[]): MyListNode | null {
  if (values.length === 0) return null;
  let head = new MyListNode(values[0]);
  let current = head;
  for (let i = 1; i < values.length; i++) {
    current.next = new MyListNode(values[i]);
    current = current.next;
  }
  return head;
}

// פונקציה להוספת ערך לסוף הרשימה
function append(head: MyListNode | null, val: number): MyListNode {
  if (!head) return new MyListNode(val);
  let current = head;
  while (current.next) {
    current = current.next;
  }
  current.next = new MyListNode(val);
  return head;
}

// פונקציה להדפסת רשימה כמחרוזת
export function printList(head: MyListNode | null): string {
  let result: string[] = [];
  let current = head;
  while (current) {
    result.push(current.val.toString());
    current = current.next;
    
  }
  return result.join(" -> ");
}

