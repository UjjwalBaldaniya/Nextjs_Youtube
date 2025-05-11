export interface ICreateVideoInputs {
  title: string;
  description: string;
  videoFile: FileList;
  thumbnail: FileList;
}

export interface IVideo {
  videoFile: string;
  thumbnail: string;
  title: string;
  description: string;
  duration: number;
  views: number;
  isPublished: boolean;
  owner: string;
  _id: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface ICreateVideoResponse {
  statusCode: number;
  data: IVideo;
  message: string;
  success: boolean;
}

export interface OwnerDetails {
  _id: string;
  username: string;
  email: string;
  avatar: string;
}

export interface IGetVideo {
  _id: string;
  videoFile: string;
  thumbnail: string;
  title: string;
  description: string;
  duration: number;
  views: number;
  createdAt: string;
  updatedAt: string;
  ownerDetails: OwnerDetails;
}

export interface IPaginationDetails {
  currentPage: number;
  totalPages: number;
  totalVideos: number;
  limit: number;
}

interface IPaginatedResponse<T> {
  videos: T[];
  pagination: IPaginationDetails;
}

export interface IApiResponse<T> {
  statusCode: number;
  data: T;
  message: string;
  success: boolean;
}

export type IGetVideoResponse = IApiResponse<IPaginatedResponse<IGetVideo>>;

export type IGetVideoByIdResponse = IApiResponse<IGetVideo>;
