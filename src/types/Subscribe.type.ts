export interface ISubscribeResponse {
  statusCode: number;
  data: {
    subscriber: string;
    channel: string;
    _id: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
  };
  message: string;
  success: boolean;
}

interface Subscriber {
  subscriberId: string;
  name: string;
  email: string;
}

export interface GetUserChannelSubscribersResponse {
  statusCode: number;
  data: Subscriber[];
  message: string;
  success: boolean;
}
