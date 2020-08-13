import {ClientsConfig, LRUCache, Service, ServiceContext} from '@vtex/api'

import {Clients} from './clients'
import {visit} from "./resolvers/storeVisit";
import {newVisit} from "./resolvers/newVisit";

const TIMEOUT_MS = 5000

const memoryCache = new LRUCache<string, any>({max: 5000})
metrics.trackCache('status', memoryCache)

const clients: ClientsConfig<Clients> = {
    implementation: Clients,
    options: {
        default: {
            retries: 2,
            timeout: TIMEOUT_MS,
        },
        status: {
            memoryCache,
        },
    },
}

declare global {
    type Context = ServiceContext<Clients>
}

export default new Service({
    clients,
    graphql: {
        resolvers: {
            Mutation: {
                newVisit
            },
            Query: {
                visit,
            },
        },
    }
})
