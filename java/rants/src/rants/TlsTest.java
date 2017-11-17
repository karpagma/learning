package rants;

class SingletonPerThread {
	private static ThreadLocal<SingletonPerThread> singles = new ThreadLocal<SingletonPerThread>() {
		@Override
		protected SingletonPerThread initialValue() {
			return new SingletonPerThread();
		}
	};
	
	public static SingletonPerThread get() {
		return singles.get();
	}
	
	public String getYourId() {
		return String.format("I am object %d from thread %d", this.hashCode(), Thread.currentThread().getId());
	}
}

public class TlsTest {
	public static void main(String[] args) {
		Runnable task = () -> {
			System.out.println("In thread " + Thread.currentThread().getId());
			System.out.println(SingletonPerThread.get().getYourId());
			try {
				Thread.sleep(3000);
			} catch (InterruptedException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			System.out.println(SingletonPerThread.get().getYourId());
		};
		
		Thread th1 = new Thread(task);
		Thread th2 = new Thread(task);
		
		th1.start();
		th2.start();
	}
}
