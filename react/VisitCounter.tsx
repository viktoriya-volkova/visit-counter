import React, {useEffect, useState} from 'react'
import {useCssHandles} from "vtex.css-handles"
import {useMutation, useQuery} from "@apollo/react-hooks";
import storeVisits from "./graphql/storeVisits.graphql"
import newVisit from "./graphql/newVisit.graphql"

const CSS_HANDLES = ["VisitCounter"]

const VisitCounter: StorefrontFunctionComponent = (props) => {
    const [siteVisitsCount] = useState(0)

    console.log(props);
    const handles = useCssHandles(CSS_HANDLES)
    const {data, loading, error} = useQuery(storeVisits, {
        variables: {
            domain: 'vvolkova--zaelab.myvtex.com'
        },
        ssr: false
    })

    if (loading) {
        return (
            <div>
                <span>Loading...</span>
            </div>
        )
    }
    if (error) {
        return (
            <div>
                <span>Error!</span>
            </div>
        )
    }

    if (data) {
        useEffect(() => {
            console.log(props)
            console.log(data)
            useMutation(newVisit, {
                variables: {
                    visit: {
                        user: "0:b8bc18c0-d8b0-11ea-839a-290f57824a88",
                        domain: "vvolkova--zaelab.myvtex.com",
                        page: "https://vvolkova--zaelab.myvtex.com/bosch-coffee-grinder/p",
                        time: "2020-08-13T15:25:28+00:00"
                    }
                }
            })
            // saveSiteVisit(ctx)
            //setSiteVisitsCount(data?.length + 1)
        }, []);
    }

    return (
        <div className={`${handles.container} fw3 w-100 c-muted-1`}>
            <div className={`${handles.visitCount} db tc`}>
                Visits count: {`${siteVisitsCount}`}
            </div>
        </div>
    )
}

VisitCounter.schema = {
    title: 'editor.visitCounter.title',
    description: 'editor.visitCounter.description',
    type: 'object'
}

export default VisitCounter
