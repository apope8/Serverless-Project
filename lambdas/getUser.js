
exports.handler = async event => {
    console.log('event', event)

    if(!event.pathParameters || !event.pathParameters.ID){
        // failed without Id

        let ID = event.pathParameters.ID;

        if(data[ID]){
            // return the data
        }

        // failed as id not in the data
    }

}

const data = {
    1234: {name: 'Aaron Pope', age: 34, job: 'software developer'}
    5678: {name: 'Sharon Pope', age: 33, job: 'occupational therapist'}
    9012: {name: 'Sadie Pope', age: 1.5, job: 'dosser'}
}