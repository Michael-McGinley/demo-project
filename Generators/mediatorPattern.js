//Used to control and manage communication between objects
//Reduces coupling between classes and objects

class Mediator{
    constructor() {
        this.componants = [];
    }

    addComponent(component){
        this.componants.push(component);
        component.setMediator(this);
    }

    *communicate(initiator){
        for (const component of this.componants) {
            if(component !== initiator){
                yield component.receive();
            }
        }
    }
}

class Component {
    constructor(name) {
        this.name = name;
        this.mediator = null;
    }

    setMediator(mediator){
        this.mediator = mediator;
    }

    send(){
        const communicationGenerator = this.mediator.communicate(this);
        console.log(this.name + " sends a message");
        for (let message of communicationGenerator){
            //Process the communications
        }
    }

    receive(){
        console.log(this.name + " received a message");
    }
}

const mediator = new Mediator();
const component1 = new Component("Component 1");
const component2 = new Component("Component 2");
const component3 = new Component("Component 3");

mediator.addComponent(component1)
mediator.addComponent(component2)
mediator.addComponent(component3)

component1.send();