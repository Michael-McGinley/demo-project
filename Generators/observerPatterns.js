//Subject notifies observers of any state changes
class Subject{
    constructor() {
        this.observers = [];
    }

    addObserver(observer){
        this.observers.push(observer)
    }

    *notify(){
        for (const observer of this.observers){
            yield observer.update();
        }
    }
}

class Observer {
    constructor(name) {
        this.name = name;
    }

    update(){
        console.log(this.name + " is notified");
    }
}

const subject = new Subject();
subject.addObserver(new Observer("Observer 1"));
subject.addObserver(new Observer("Observer 2"));

const notificationGenerator = subject.notify();

for (let notification of notificationGenerator) {
    console.log(notification);
}