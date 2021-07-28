import { IGatsbyImageData } from 'gatsby-plugin-image';

export type SingleProjectProps = {
  next: {
    fields: {
      slug: string
    }
    frontmatter: {
      title: string
    }
  }
  markdownRemark: {
    frontmatter: {
      title: string
      link: null | string
      description: string
      contributors: string[]
      role: string
      year: number
      excerpt: string
      image1: IGatsbyImageData
      image2: IGatsbyImageData
      title1: string
      content1: string
      title2: string
      content2: string
      image3: IGatsbyImageData
      title3: string
      content3: string
      image4: IGatsbyImageData
      image5: IGatsbyImageData
    }
    id: string
    html: string
  }
}


export type ProjectProps = {
  fields: {
    slug: string
  }
  id?: string,
  frontmatter: {
    title: string
    featuredImage: IGatsbyImageData
    excerpt?: string
    color?: string
  }
}[];

export type VideoProps = {
  snippet: {
    title: string;
    publishedAt: string;
    resourceId: {
      videoId: string;
    };
    thumbnails: {
      high: {
        url: string;
      };
    };
  };
  image: IGatsbyImageData;
}[];

export type PostsProps = {
  id: string;
  fields: {
    slug: string;
  };
  excerpt: string;
  frontmatter: {
    title: string;
    date: string;
    description: string;
    category: string;
  };
}[];

export type ProjectsProps = {
  projects: {
    nodes: ProjectProps;
  };
  videos: {
    nodes: VideoProps;
  };
  posts: {
    nodes: PostsProps;
  };
};
