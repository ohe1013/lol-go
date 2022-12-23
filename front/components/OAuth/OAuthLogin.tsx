import * as AuthSession from "expo-auth-session";
const url = AuthSession.makeRedirectUri({ useProxy: true });
export function NaverLogin() {
    const naverLogin = async () => {
        const result = await AuthSession.startAsync({
            authUrl: `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=b2K3Hn5XrSQ6kFySrkw_&redirect_uri=${url}`,
        });

        if (result.type === "success") {
            const code = result.params.code;
            console.log(code);
        }
    };
    naverLogin();
    return;
}

export default function (props) {
    const types = props;
    if (types === "naver") {
        NaverLogin();
    }
    return;
}
