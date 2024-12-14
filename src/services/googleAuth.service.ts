import axios from 'axios';
import { GoogleUserData } from '../constants/models/user.models';
import { AuthMethodEnum } from '../constants/enums/auth.enums';

export class GoogleAuthService {
  async getGoogleAuthUrl(redirect: string): Promise<string> {
    return `${process.env.GOOGLE_AUTH_URL_V2}?client_id=${process.env.GOOGLE_AUTH_CLIENT_ID}&redirect_uri=${redirect ?? `${process.env.CLIENT_HOST}/login`}&response_type=code&scope=openid%20email%20profile`;
  }

  async exchangeCodeForToken(code: string, redirectUri: string): Promise<string> {
    const { data } = await axios.post(process.env.GOOGLE_AUTH_TOKEN_ENDPOINT, {
      code,
      client_id: process.env.GOOGLE_AUTH_CLIENT_ID,
      client_secret: process.env.GOOGLE_AUTH_CLIENT_SECRET,
      redirect_uri: redirectUri,
      grant_type: 'authorization_code',
    });
    return data.access_token;
  }

  async getUserData(accessToken: string): Promise<GoogleUserData> {
    const { data } = await axios.get(
      process.env.GOOGLE_AUTH_USER_INFO_ENDPOINT,
      {
        headers: {
          Authorization: `${AuthMethodEnum.BEARER} ${accessToken}`,
        },
      },
    );
    return data;
  }
}
