// sanity.io
export interface ISanityImage {
  asset: {
    _id: string;
    url: string;
  };
  alt: string;
}

export interface IPost {
  title: string;
  _id: string;
  slug: {
    current: string;
  };
  mainImage: ISanityImage;
}

export interface ISinglePost extends IPost {
  body: unknown;
  name: string; // author name
  authorImage: ISanityImage;
}

export interface IProject {
  title: string;
  date: string;
  place: string;
  description: string;
  projectType: string;
  link: string;
  tags: string[];
}
