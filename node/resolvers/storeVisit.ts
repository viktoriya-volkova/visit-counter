export const visit = async (
    _: any,
    {domain}: { domain: string },
    {clients: {masterdata}}: Context
) => masterdata.searchDocuments({
    dataEntity: 'visit',
    fields: ['_all'],
    schema: 'v1',
    where: `domain=${domain}`,
    pagination: {
        page: 1,
        pageSize: 10
    }
})
