class govTransportUrls {
    public car = "https://data.gov.il/api/3/action/datastore_search?resource_id=053cea08-09bc-40ec-8f7a-156f0677aff3&q=";
    public bike = "https://data.gov.il/api/3/action/datastore_search?resource_id=bf9df4e2-d90d-4c0a-a400-19e15af8e95f&q=";
    public recall = "https://data.gov.il/api/3/action/datastore_search?resource_id=2c33523f-87aa-44ec-a736-edbb0a82975e&q=";
    public handicap = "https://data.gov.il/api/3/action/datastore_search?resource_id=c8b9f9c8-4612-4068-934f-d4acd2e3c06e&q=";
    public truck = "https://data.gov.il/api/3/action/datastore_search?resource_id=cd3acc5c-03c3-4c89-9c54-d40f93c0d790&q=";
}

const govTransport = new govTransportUrls();

export default govTransport;