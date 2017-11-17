import java.util.ArrayList;
import java.util.List;

class Stack<T> {
    private List<T> items = new ArrayList<>();
    public void push(T t) {
        items.add(t);
    }

    public T pop() {
        T item = items.get(this.items.size() - 1);
        List<T> newitems = new ArrayList<>();
        for (int i=0; i<this.items.size()-1; i++) {
            newitems.add(this.items.get(i));
        }
        this.items = newitems;
        return item;
    }

    public int size() {
        return this.items.size();
    }
}

class StackMain {
    public static void main(String[] args) {
        Stack<Integer> stack = new Stack<>();
        stack.push(100);
        stack.push(99);

        System.out.println(stack.size());

        System.out.println(stack.pop());
        System.out.println(stack.pop());

        System.out.println(stack.size());

    }
}