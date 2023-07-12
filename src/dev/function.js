import $ from "jquery";

let url;
let domain = window.location.hostname;

if(domain == 'plan-react.localhost' || domain == 'localhost')
{
    url = 'http://plan-center.localhost';
}
else
{
    url = 'https://center.plansys.kr';
}

/**
 * @description 공용 ajax 함수
 */
const fncAjax = (url, type, data, async, dataType='json') => {
    return $.ajax({
        url : url,
        type : type,
        data : data,
        async : async,
        dataType : dataType
    });
};

/**
 * @description 공용 ajax error 불러올 함수
 */
const fncAjaxFail = (request, status, error) => {
    console.log(request);
    console.log(status);
    console.log(error);
};

export { fncAjax, fncAjaxFail, url };