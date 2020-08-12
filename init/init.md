**Initialize schema**

PUT `https://zaelab.vtexcommercestable.com.br/api/dataentities/visit/schemas/v1`
use visit_schema.json as body

**Create test document**

POST `https://zaelab.vtexcommercestable.com.br/api/dataentities/visit/documents?_schema=v1`
Body: 
`
{
    "user":"0:b8bc18c0-d8b0-11ea-839a-290f57824a56",
    "domain":"vvolkova--zaelab.myvtex.com",
    "page":"https://vvolkova--zaelab.myvtex.com/bosch-coffee-grinder/p",
    "time":"2020-08-07T13:25:28+00:00"
}
`
