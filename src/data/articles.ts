import { Article } from '@/components/ArticleCard';
import techImage from '@/assets/article-tech.jpg';
import designImage from '@/assets/article-design.jpg';
import businessImage from '@/assets/article-business.jpg';

export const sampleArticles: Article[] = [
  {
    id: '1',
    title: 'The Future of Web Development: Trends to Watch in 2024',
    excerpt: 'Explore the latest trends shaping web development, from AI integration to advanced frameworks that are revolutionizing how we build digital experiences.',
    author: 'Sarah Chen',
    date: 'March 15, 2024',
    category: 'Technology',
    image: techImage,
    readTime: '8 min',
  },
  {
    id: '2',
    title: 'Design Systems That Scale: Building Consistent User Experiences',
    excerpt: 'Learn how to create and maintain design systems that grow with your product, ensuring consistency and efficiency across your entire organization.',
    author: 'Marcus Rodriguez',
    date: 'March 12, 2024',
    category: 'Design',
    image: designImage,
    readTime: '12 min',
  },
  {
    id: '3',
    title: 'Bootstrapping vs. Venture Capital: Choosing Your Startup Path',
    excerpt: 'A comprehensive guide to funding options for entrepreneurs, comparing the benefits and challenges of self-funding versus seeking external investment.',
    author: 'Elena Kowalski',
    date: 'March 10, 2024',
    category: 'Business',
    image: businessImage,
    readTime: '15 min',
  },
  {
    id: '4',
    title: 'The Psychology of Color in Digital Marketing',
    excerpt: 'Discover how color choices impact user behavior and conversion rates, with practical tips for implementing effective color strategies.',
    author: 'David Park',
    date: 'March 8, 2024',
    category: 'Marketing',
    image: designImage,
    readTime: '10 min',
  },
  {
    id: '5',
    title: 'Remote Work Revolution: Building Culture Across Distance',
    excerpt: 'Strategies for maintaining team cohesion and company culture in a distributed workforce, based on real-world experiences and research.',
    author: 'Amanda Taylor',
    date: 'March 5, 2024',
    category: 'Business',
    image: businessImage,
    readTime: '7 min',
  },
  {
    id: '6',
    title: 'Machine Learning for Beginners: A Practical Introduction',
    excerpt: 'Start your journey into machine learning with this beginner-friendly guide covering essential concepts and hands-on examples.',
    author: 'Dr. James Wilson',
    date: 'March 3, 2024',
    category: 'Technology',
    image: techImage,
    readTime: '20 min',
  },
];

export const getFeaturedArticles = () => sampleArticles.slice(0, 4);
export const getAllArticles = () => sampleArticles;
export const getArticleById = (id: string) => sampleArticles.find(article => article.id === id);