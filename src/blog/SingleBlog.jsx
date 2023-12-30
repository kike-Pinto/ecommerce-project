import React, { useState } from 'react'
import blogList from '../utilis/blogdata'
import { useParams } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import Tags from '../shop/Tags'
import PopularPost from '../shop/PopularPost'

const socialList = [
  {
    iconName: 'icofont-facebook',
    siteLink: '#',
    className: 'facebook',
  },
  {
    iconName: 'icofont-twitter',
    siteLink: '#',
    className: 'twitter',
  },
  {
    iconName: 'icofont-linkedin',
    siteLink: '#',
    className: 'linkedin',
  },
  {
    iconName: 'icofont-instagram',
    siteLink: '#',
    className: 'instagram',
  },
  {
    iconName: 'icofont-pinterest',
    siteLink: '#',
    className: 'pinterest',
  },
]

const SingleBlog = () => {
  const [blog, setBlog] = useState(blogList)
  const { id } = useParams()
  // console.log(id)
  const result = blog.filter((b) => b.id === Number(id))
  console.log(result[0])

  return (
    <div>
      <PageHeader title={'Single Blog Pages'} curPage={'Blog / Blog Details'} />

      <div className='blog-section blog-single padding-tb section-bg'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-8 col-12'>
              <article>
                <div className='section-wrapper'>
                  <div className='row row-cols-1 justify-content-center g-4'>
                    <div className='col'>
                      <div className='post-item style-2'>
                        <div className='post-inner'>
                          {result.map((item) => (
                            <div key={item.id}>
                              <div className='post-thumb'>
                                <img
                                  src={item.imgUrl}
                                  alt=''
                                  className='w-100'
                                />
                              </div>
                              <div className='post-content'>
                                <h3>{item.title}</h3>
                                <div className='meta-post'>
                                  <ul className='lab-ul'>
                                    {item.metaList.map((val, i) => (
                                      <li key={i}>
                                        <i className={val.iconName}></i>
                                        {val.text}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                <p>
                                  Lorem ipsum dolor sit amet consectetur
                                  adipisicing elit. Eaque itaque maxime magnam,
                                  tenetur facilis libero nam doloribus
                                  doloremque, cumque porro fugit quis eius rerum
                                  quia? Facere, esse officiis! Quos dolore
                                  assumenda dolorem nulla a nostrum at, sit
                                  numquam voluptatem doloremque laudantium rem
                                  accusamus omnis facilis ullam autem tenetur
                                  hic veritatis harum aliquid! Laudantium
                                  officiis reiciendis explicabo veritatis et.
                                  Consectetur exercitationem dolorum rerum
                                  minima aspernatur cupiditate esse, neque ut
                                  dolore alias, molestias accusantium vero
                                  nesciunt! Eveniet, velit ab accusantium fuga
                                  debitis, voluptates commodi atque nemo fugit
                                  ducimus itaque vero, perferendis
                                  exercitationem quisquam omnis. Nesciunt
                                  distinctio illum labore cupiditate dignissimos
                                  veniam repudiandae.
                                </p>
                                <blockquote>
                                  <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Iusto labore possimus
                                    blanditiis similique quo adipisci, explicabo
                                    rem unde impedit ut laborum tenetur vero
                                    omnis nam nostrum nulla deserunt, ipsam
                                    fugiat sunt hic soluta excepturi ex modi!
                                    Eveniet laborum dolores ex.
                                  </p>
                                  <cite>
                                    <a href='#'>...Melissa Hunter</a>
                                  </cite>
                                </blockquote>
                                <p>
                                  Lorem ipsum dolor, sit amet consectetur
                                  adipisicing elit. Perferendis necessitatibus
                                  maxime numquam amet dolore. Qui, consectetur?
                                  Consectetur nulla provident nobis enim natus
                                  aspernatur perspiciatis, a ab eius, amet ea
                                  error repellendus saepe! Ea odio modi impedit
                                  aut nobis ducimus a! Illum, fugiat
                                  voluptatibus a voluptatum corporis sunt
                                  dignissimos aut dolorem ullam similique error
                                  nisi facilis tenetur nam debitis maxime quod
                                  nemo eos. Velit amet quo minima placeat
                                  excepturi. Quisquam earum recusandae quo
                                  fugiat beatae necessitatibus soluta fugit
                                  temporibus nostrum. Aspernatur, odio vero?
                                  Inventore, distinctio ullam minima cupiditate
                                  iusto delectus placeat ducimus quibusdam nulla
                                  sed ad, consectetur autem perspiciatis in
                                  corrupti.
                                </p>
                                <img
                                  src='/src/assets/images/blog/single/01.jpg'
                                  alt=''
                                />
                                <p>
                                  Lorem ipsum dolor sit amet consectetur
                                  adipisicing elit. Dolorem, tenetur id?
                                  Explicabo, ad culpa eveniet deleniti
                                  recusandae at sequi voluptatibus et soluta
                                  molestias, voluptas velit molestiae ab quidem
                                  iste porro accusantium quod veniam magni.
                                  Aliquid repellat tempore nesciunt hic, ratione
                                  eveniet modi ipsam fuga, adipisci consequuntur
                                  minima dolore atque veniam aspernatur error
                                  explicabo neque debitis mollitia quidem
                                  assumenda! Nesciunt cum voluptatibus voluptate
                                  deleniti? Fugiat adipisci, est dignissimos
                                  impedit aliquid dolore repellat vero non fugit
                                  atque accusantium, laboriosam architecto
                                  reprehenderit eius. Aut, pariatur animi.
                                  Placeat deleniti facilis magni consequatur sed
                                  facere recusandae asperiores quos
                                  perspiciatis, ratione provident repellendus
                                  nulla earum dolore?
                                </p>
                                <div className='video-thumb'>
                                  <img
                                    src='/src/assets/images/blog/single/02.jpg'
                                    alt=''
                                  />
                                  <a
                                    href='https://youtu.be/2qWo6W5Wn8Q'
                                    className='video-button popup'
                                    target='__blank'
                                  >
                                    <i className='icofont-ui-play'></i>
                                  </a>
                                </div>
                                <p>
                                  Lorem ipsum dolor sit, amet consectetur
                                  adipisicing elit. Mollitia cum amet
                                  reprehenderit voluptas at vel distinctio
                                  nostrum velit, fugiat ipsum est cupiditate
                                  eius tenetur delectus totam quae et ad
                                  perspiciatis atque autem neque? Iure ullam
                                  odio voluptate veniam, repellendus eveniet
                                  porro rerum id ut quo amet? At nisi ratione
                                  nobis pariatur totam exercitationem reiciendis
                                  nesciunt quos? Similique aliquid debitis quis
                                  cupiditate nostrum ipsam, suscipit reiciendis
                                  commodi eligendi quos laudantium
                                  necessitatibus nesciunt sequi quaerat!
                                  Asperiores officiis facilis natus velit, neque
                                  libero placeat voluptatibus magnam deleniti?
                                  Architecto aliquam consectetur, quae velit
                                  optio impedit consequuntur dolore? Maiores
                                  officiis assumenda blanditiis impedit
                                  inventore totam.
                                </p>
                                <div className='tags-section'>
                                  <ul className='tags lab-ul'>
                                    <li>
                                      <a href='#'>Agency</a>
                                    </li>
                                    <li>
                                      <a href='#'>Business</a>
                                    </li>
                                    <li>
                                      <a href='#'>Personal</a>
                                    </li>
                                  </ul>
                                  <ul className='lab-ul social-icons'>
                                    {socialList.map((val, i) => (
                                      <li key={i}>
                                        <a href='#' className={val.className}>
                                          <i className={val.iconName}></i>
                                        </a>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className='navigations-part'>
                        <div className='left'>
                          <a href='#' className='prev'>
                            <i className='icofont-double-left'></i> Previous
                            Blog
                          </a>
                          <a href='#' className='title'>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Eaque, iusto.
                          </a>
                        </div>
                        <div className='right'>
                          <a href='#' className='next'>
                            <i className='icofont-double-right'></i> Next
                          </a>
                          <a href='#' className='title'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Eaque, natus.
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>

            {/* Right Side */}
            <div className='col-lg-4 col-12'>
              <aside>
                <Tags />
                <PopularPost />
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default SingleBlog
