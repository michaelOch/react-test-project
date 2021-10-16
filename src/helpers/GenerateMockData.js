let data = [];

function getDataFormat(name, children){

    return {
        name: name,
        children: children
    };
};

export default function createMockData(nDepth, noOfChildren){

    if (nDepth === 0) return { data };

    let format;

    if (data.length) {

        format = getDataFormat('John', []);

        for(let i = 1; i <= noOfChildren; i++) {
            format.children.push(data[0]);
        }

        data = [format];

    } else {

        format = getDataFormat('John', []);

        data.push(format);
    }

    return createMockData(nDepth - 1, noOfChildren);
};