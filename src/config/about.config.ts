/**
 * About 页面配置
 * 包括个人经历、作品集和其他详细信息
 */

import { ContentBlock } from './site.config'

export interface Experience {
  id: string
  years: string
  title: string
  company: string
  location: string
  description: string
}

export interface Portfolio {
  id: string
  title: string
  description: string
  image: string
  tags: string[]
}

export interface AboutPageConfig {
  // About 页面的个人描述
  aboutMe: ContentBlock
  // 工作经历
  experiences: Experience[]
  // 作品集
  portfolio: Portfolio[]
}

// 默认配置
export const defaultAboutPageConfig: AboutPageConfig = {
  aboutMe: {
    format: 'html',
    content: 'A detailed explanation of my personal philosophy, passion for AI, and career goals. I aim to leverage technology to solve real-world challenges and contribute to the advancement of artificial intelligence. My journey began with a fascination for how machines can learn and adapt, which has driven me to explore various facets of AI, from natural language processing to computer vision. I thrive in collaborative environments where I can share ideas and build solutions that make a tangible impact.'
  },
  experiences: [
    {
      id: '1',
      years: '2021 - Present',
      title: 'Senior AI Engineer',
      company: 'TechCorp',
      location: 'San Francisco, CA',
      description: 'Lead developer on a project to create a recommendation engine, increasing user engagement by 25%. Responsible for designing, training, and deploying machine learning models at scale. Collaborated with cross-functional teams to define AI strategy and product roadmap.'
    },
    {
      id: '2',
      years: '2019 - 2021',
      title: 'Machine Learning Developer',
      company: 'Innovate Inc.',
      location: 'Boston, MA',
      description: 'Developed NLP models for sentiment analysis and text summarization. Contributed to a 15% improvement in data processing efficiency by optimizing pipelines and algorithms.'
    }
  ],
  portfolio: [
    {
      id: '1',
      title: 'Generative Art AI',
      description: 'An AI model that generates unique pieces of art based on textual descriptions, using a custom-trained GAN.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAdg_YVZg3yVNKmCZ9X3Q6jS1BX2vsYGNXbXjcJTMg0_UAGjIq2t7-cziCUVeYo3T85vCPNAMYX6BQm1LMt2iPW0ulmDNg64WFvDZyogUT4IzSnRM1cl9hu0MOm8DpFFzi5BNOEGs9WEPtbCUa6PzEzuJDabQUdwclgWUhGQvSCp8EEHVYG8d9sFmM8SQ2wXkrDiLePIj6tb9XkHIwsPydEdXLPs0B5dGBR62iMxHUAkrr5w-83INy-H2XtQv5yqBBGC6mroKwVkj0N',
      tags: ['Python', 'TensorFlow', 'GAN']
    },
    {
      id: '2',
      title: 'Real-time Object Detection API',
      description: 'A high-performance REST API that can identify and classify objects in video streams with low latency.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBBHHZ7XEit5EludUsA2EaVUudBjCv7UrsqrjFhhPARYS7WtrwAmurrAMh29olsTwQf8jF9t6H5YAhu7-GyR9s_yxDBAfYkTQEk-1i5n4cyOlLiubAJV0GuaOpNqtEDZHgY8R9UCIG38erERR2aHBzf-zQ90oPYnDITqJ4LnXCiXr4rbz2aW1ZkTFBvA1-s_nhwRqwUj2cfPg8vJD5km_vRFORGFo7uY2kaeGKGHbsF7otbHiQFV4TTkxWsrK8S2owbQvuxQljqF11_',
      tags: ['PyTorch', 'FastAPI', 'Docker']
    }
  ]
}
