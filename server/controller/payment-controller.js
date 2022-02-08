import PaytmChecksum from '../paytm/PaytmChecksum.js'
import { paytmParams,paytmMerchantkey } from '../index.js'
export const addPaymentGateway = async(request,response)=>{

   let paytmChecksum= await PaytmChecksum.generateSignature(paytmParams,paytmMerchantkey);

   try{
        let params = {
            ...paytmParams, 'CHECKSUMHASH':paytmChecksum
        }
        response.json(params);
   }
   catch(error){
       console.log(error);
   }

}











