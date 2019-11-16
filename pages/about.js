import Layout from '../components/MyLayout.js'
import Slider from '../components/Carousel'

// url('https://mir-s3-cdn-cf.behance.net/project_modules/fs/a24f7c70259819.5b9da86e8d4ba.png') cover no-repeat;

export default function About() {
  return (
    <Layout>
      <p>This is the Spider Man Website page</p>
      <div className="home">
      </div>
      <Slider></Slider>
      <style jsx>{`
      .menu {
        margin: 5px 0 0;
        padding: 0;
        list-style: none;
        display: flex;
      }
      .home {
        background: url('https://mir-s3-cdn-cf.behance.net/project_modules/fs/a24f7c70259819.5b9da86e8d4ba.png') center no-repeat; 
        height: 600px;
      }
      `}
      </style>
    </Layout>
  )
}
