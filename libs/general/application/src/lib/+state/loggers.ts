import { Observable, tap } from 'rxjs';

export function ObservableFieldLogger(text = 'Emit') {
    return (target: {} | any, name: PropertyKey): any => {
        let currentValue: any;
        const descriptor = {
            get() {
                return currentValue
            },
            set(newValue: Observable<any>) {
                currentValue = newValue.pipe(tap(x => console.log(`${text}, field name: ${(name as string)}, value :\n ${JSON.stringify(x)}`)))
            }
        }
        Object.defineProperty(target, name, descriptor);
    };

};


export function CallMethodLogger(text = 'Call') {
    return (target: any, key: any, descriptor: any) => {
        debugger;
        descriptor.value = function (paramValue: any) {
            console.log(`${text}, method name: ${key}, value : ${paramValue}`)
        }
        // ERROR dont call method
        return  descriptor;
    };
};
