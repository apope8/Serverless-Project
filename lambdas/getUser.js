const Responses = require('./API_Responses')

exports.handler = async event => {
    console.log('event', event)

    if(!event.pathParameters || !event.pathParameters.ID){
        // failed without Id
        return Responses._400({message: 'missing the ID from the path'})

        let ID = event.pathParameters.ID;

        if(data[ID]){
            // return the data

            return Responses._200(data[ID])
        }

        // failed as id not in the data

        return Responses._400({message: 'No ID in data'})
    }

}

const data = {
    1234: {name: 'Aaron Pope', age: 34, job: 'software developer'}
    5678: {name: 'Sharon Pope', age: 33, job: 'occupational therapist'}
    9012: {name: 'Sadie Pope', age: 1.5, job: 'dosser'}
}