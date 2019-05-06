const MOCKURL = 'http://www.program.com/';//mock模拟
const SERVERURL = 'http://localhost:3000/';//真实地址

const URL = {
    getVarietyItem: MOCKURL + 'getVarietyItem',
    getHotProduct: MOCKURL + 'getHotProduct',
    registUser: SERVERURL + 'user/registUser',
    loginUser: SERVERURL + 'user/loginUser',
    getTypes: SERVERURL + 'type/getTypes',
    getProductsByType: SERVERURL + 'product/getProductsByType',
    getDetail: SERVERURL + 'product/getDetail',
    addcart: SERVERURL + 'cart/addCart',
    getCard: SERVERURL + 'cart/getCard'
};

export default URL;