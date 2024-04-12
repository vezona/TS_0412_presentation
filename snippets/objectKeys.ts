export const objectKeys = <T extends object>(obj: T): (keyof T)[] => {
    return Object.keys(obj) as (keyof T)[];
  };

interface test{
    a: string,
    b: string|null,
    c: number|null
}

const test = (obj) => test{
    return {
        a:'name'
    }
}