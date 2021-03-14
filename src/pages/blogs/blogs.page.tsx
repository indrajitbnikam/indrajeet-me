import axios from "axios";
import { useEffect, useState } from "react";
import Layout from "../../components/layout/layout.component";
import './blogs.scss'

const BlogsPage = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get('https://fullyunderstood.com/wp-json/wp/v2/posts?author=3&per_page=100&_embed');
        if (result.status === 200 && result.data) {
          setBlogs(result.data);
        }
      } catch (error) {

      }
    }
    fetchData();
  }, []);

  const openBlog = (link: string) => {
    window.open(link, '_blank')
  }

  return (
    <Layout title='Blogs'>
      <div className='blogs-container'>
        {
          blogs.map(({ id, date, title: { rendered }, link, _embedded }: any) => (
            <div key={id} className='blog-card' onClick={() => openBlog(link)}>
              <img src={_embedded['wp:featuredmedia'][0].link} alt={rendered} className='blog-image'/>
              <div className='image-overlay'>
                <p className='blog-title'>{rendered}</p>
                <p className='blog-date'>{(new Date(date)).toLocaleDateString('in')}</p>
              </div>
            </div>
          ))
        }
      </div>
    </Layout>
  )
};

export default BlogsPage;