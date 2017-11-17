import java.util.ArrayList;
import java.util.List;

class Queue<T> {
    private List<T> items = new ArrayList<>();

    public void enqueue(T t) {
        items.add(t);
    }

    public T dequeue() {
        T item = items.get(0);
        List<T> newitems = new ArrayList<>();
        for (int i=1; i<this.items.size(); i++) {
            newitems.add(this.items.get(i));
        }
        this.items = newitems;
        return item;
    }

    public int size() {
        return this.items.size();
    }
}

class QueueMain {
    public static void main(String[] args) {
        Queue<Integer> queue = new Queue<>();
        queue.enqueue(100);
        queue.enqueue(99);

        System.out.println(queue.size());

        System.out.println(queue.dequeue());
        System.out.println(queue.dequeue());

        System.out.println(queue.size());

    }
}