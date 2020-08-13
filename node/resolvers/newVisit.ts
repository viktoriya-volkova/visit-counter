import {VisitInput} from '../typings/custom'

interface Args {
    visit: VisitInput
}

export const newVisit = async (_: any, {visit}: Args, {clients: {masterdata}}: Context) =>
    masterdata.createDocument({
        dataEntity: 'visit',
        schema: 'v1',
        fields: visit
    })
