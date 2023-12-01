import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios'
import useSWR, { SWRConfiguration, SWRResponse } from 'swr'

export type GetRequest = AxiosRequestConfig | null

interface Return<Data, Error>
  extends Pick<
    SWRResponse<AxiosResponse<Data>, AxiosError<Error>>,
    'isValidating' | 'error' | 'mutate'
  > {
  /** API 호출후 반환되는 모든 데이터가 담겨있습니다. */
  data: Data | undefined
  /** 응답에 포함되는 모든 정보를 포함. data, status, statusText, headers, config */
  response: AxiosResponse<Data> | undefined
}

export interface Config<Data = unknown, Error = unknown>
  extends Omit<
    SWRConfiguration<AxiosResponse<Data>, AxiosError<Error>>,
    'fallbackData'
  > {
  fallbackData?: Data
  baseUrl?: string
}

const getJwtToken = () => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('token')
  }
}

const createHeaders = () => ({
  Authorization: `Bearer ${getJwtToken()}`,
})

/**
 * @description 토큰을 내부적으로 async 를 통해 가져와 요청하도록 하니 method, url 만 넣어주세요. 그걸 통해 isValidating, data, response, error 를 가져와 사용할 수 있습니다. 사용방법은 아래 첨부한 예시를 참고해주세요. url 역시 앞에 오는 https://api.career-up.live:8080 를 useRequest 내에서 환경변수를 통해 가져오니 뒤에 바뀌는 'mypage' 부분만 변경해서 넣어주세요. 
 * @description 사용시, 리턴타입을 인터페이스 혹은 타입으로 명시해주어야 합니다. 그렇지 않으면 data 를 통째로 읽을수는 있는데 타입이 unknown 이 되어 dot 접근법으로 접근할 수 없습니다.
 * @param method - get / post / put / patch / delete 
 * @param url - '/mypage'
 * @param headers - {
 *  Authorization: `Bearer ${getJwtToken()}`
 * }
 * @returns 
 * data,
 * response,
 * error,
 * isValidating,
 * mutate
 * 
 * @example 
 *  interface UserData {
    id: null
    email: string
    password: null
    profile: null
    nickname: string
    company: null
    contents: null
    roleType: string
    fields: any[]
    skills: any[]
  }

  const { data, response, error, isValidating } = useRequest<UserData>({
    method: 'get',
    url: '/mypage',
  } as GetRequest)
 */
export default function useRequest<Data = unknown, Error = unknown>(
  request: GetRequest,
  {
    fallbackData,
    baseUrl = process.env.NEXT_PUBLIC_API_ENDPOINT,
    ...config
  }: Config<Data, Error> = {},
): Return<Data, Error> {
  const {
    data: response,
    error,
    isValidating,
    mutate,
  } = useSWR<AxiosResponse<Data>, AxiosError<Error>>(
    request,
    /**
     * NOTE: Typescript thinks `request` can be `null` here, but the fetcher function is actually only called by `useSWR` when it isn't.
     */
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    async () => {
      const headers = createHeaders()
      const url = baseUrl + (request?.url || '')
      return axios.request<Data>({ ...request!, url, headers })
    },
    {
      ...config,
      fallbackData:
        fallbackData &&
        ({
          status: 200,
          statusText: 'InitialData',
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          config: request!,
          headers: {},
          data: fallbackData,
        } as AxiosResponse<Data>),
    },
  )

  return {
    data: response && response.data,
    response,
    error,
    isValidating,
    mutate,
  }
}
