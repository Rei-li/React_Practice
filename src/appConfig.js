const environment =  process.env.SUVODA_SERVER;
const getHost = () => {
    if (environment === 'dev') {
        return 'http://localhost/Suvoda.TechnicalTest.Web/api'
    }
    return 'http://tech-task.azurewebsites.net/api'
};

const ENV = {
    host: getHost(),
    baseURL: '/'
};

export default ENV;

