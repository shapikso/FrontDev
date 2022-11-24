type TPeople = { name: string, craft: string }

export const returnISSPeople = (AllPeople : TPeople[]) : string[] => AllPeople.reduce(
    (acc : string[], item) => item.craft === 'ISS' ? [...acc, item.name] : acc,[]
);