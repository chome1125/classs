import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  ApolloLink,
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { accessTokenState } from "../../../commons/stores";
import { useRecoilState } from "recoil";

const GLOBAL_STATE = new InMemoryCache();
interface IAolloSettingProps {
  children: JSX.Element;
}

export default function ApolloSetting(props: IAolloSettingProps): JSX.Element {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const uploadLink = createUploadLink({
    uri: "http://backend-practice.codebootcamp.co.kr/graphql",
    headers: {
      Authorization: "Bearer 토큰",
    },
  });

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink]),
    cache: GLOBAL_STATE, //컴퓨터의 메모리에 백엔드에서 받아온 데이터 임시로 저장
  });

  // @ts-ignore
  // prettier-ignore
  return (
    <ApolloProvider client={client}>
        {props.children}
    </ApolloProvider>
  );
}
