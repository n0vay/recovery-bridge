import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
    UserPoolId: 'us-east-1_DcszradrQ',
    ClientId: '4i08ntkegmad71cqennk8b099h'  
}

export default new CognitoUserPool(poolData);