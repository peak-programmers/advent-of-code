import SimpleFactory from "../SimpleFactory.interface";

export default class NoFactory implements SimpleFactory {

    create(input: any) {
        return input;
    }
}