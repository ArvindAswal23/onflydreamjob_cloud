import { React, useEffect } from 'react'
import {LatestArticleSection} from  './index'
import { Rupee } from '../assets'

const Article5 = () => {
    window.scrollTo(0, 0);
    useEffect(() => {
        document.title = "Article 5 | Onfly Dream Job"
    })
  return (
    <div>
        <main class="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white">
                <div class="flex justify-between px-4 mx-auto max-w-screen-xl ">
                    <article class="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue prose lg:prose-xl">
                        <header class="mb-4 lg:mb-6 not-format">
                            <address class="flex items-center mb-6 not-italic">
                                <div class="inline-flex items-center  text-sm text-black">
                                    <img class="mr-4 w-16 h-16 rounded-full" src="https://picsum.photos/32/32/?random" alt="Tanuj Rathi" />
                                    <div>
                                        <p class="text-xl font-bold text-black">OnflyDreamJob</p>
                                        <p class="text-base font-light text-gray-500">17 July 2023, 2 min read</p>
                                    </div>
                                </div>
                            </address>
                            <h1 class="mb-4 text-3xl font-extrabold leading-tight text-black lg:mb-6 lg:text-4xl"> The Concept of 20 LPA Jobs and Why Only Tier 1 Colleges?</h1>
                        </header>
                        <p class="lead text-justify">Every year we see and hear the news that freshers from top-tier colleges are landing up with these average high-paying 20-25 LPA jobs, but how, why, and who is paying them? Well, yes this is true that people do get these jobs, and that too at a very early stage in their life let us see the reason behind it.
                         </p>
                        <p class="lead text-justify">Hello Dreamer, today we will talk about how tier 1 and tier 2 college students get this type of placement and most importantly why and if you are planning to pursue your higher education then this might help you.
                        </p>
                        <p class="text-justify"> First, why are top-tier colleges treated differently in the Job market? If you will research a little about them, then you will find that these colleges are the leaders in their respective areas and domain.Any stream if it exists today is started by these colleges. For instance, IIMs were started back then in the early 60s with the help of Former PM Jawaharlal Nehru, Vikram Sarabhai, and Kasturbhai Lalbhai, when we as a nation were struggling with the right management students in the market was filled by these institutes. If you will pick colleges like NIFT, IITs, SRCC, AIIMS, NLU, etc. these all are the leaders and if you get into such colleges, you not only get knowledge but also get a quality factor. 
                       </p>
                        <img class="block" src={Rupee} />
                        <h4> Come let us discuss such quality factors and what can we take away from them:
                       </h4>
                        <ol>
                            <li class="text-justify"><strong>Quality</strong>:  Be a quality student, People nowadays use social media to showcase their quality in the market and build their personal brand. When you enter a tier 1 college you not only crack an entrance exam but also other human factors like entertaining pressure, maintaining your motivation level, smartness and hard work, emotional intelligence with a factor of technical soundness, problem-solving approach that determines how much you can explore with limited resources and information. If you are not from a tier 1 college then build your personal brand by taking up real-life challenges and exploring undying approaches to deal with a situation. Here, I have some homework for you people to learn about Agility or Agile thinking and try to add that one thing to your personal branding and discover many more such qualities.
                             </li>
                            <li class="text-justify"><strong>Client Requirement</strong>: The world has so many big businesses and every business is a customer of another business. Whenever a business approaches its client in the market, they keep a competitive edge in resource deployment. They onboard their client with them by selling the idea that they will deploy employees who carry a strong academic background and thus their quality of service and charges are high. Most of the bids are won on the basis that businesses have qualified and brilliant minds in the country that can give a high pace of growth to their clients. This is also a very big reason why Tier 1 colleges get such a high-paying salary in the market. This also a fact that less than 6% of the student in the top tier colleges get such a job offer not everyone in such colleges gets this.
                            </li>
                            <li class="text-justify"><strong>Networking</strong>: You must have heard about how networking helps in growth and if not let us try to understand it here. Networking is basically making connections with people not only on social media but also in person. When it comes to tier 1 colleges, they have such high-level networks already present in the market that they can bring up to groom and train their students. These sessions are so enriching that do not help in learning, training, and development but also a medium to make connections in the industry. I remember when one of my teachers explained to me the benefit of ‘developing’ networks with your knowledge and approach. Social Media could be a first step to building a network, but I will also suggest attending conferences, job fairs, and media conclaves during your college days.
                            </li>
                        </ol>
                        <p class="text-justify">These are quite popular points but not limited to which help these tier 1 students to get a high-paying job. If you find it helpful and learned something from this, then I will suggest you people use such points.
                        </p>


                    </article>
                </div>
            </main>
        <LatestArticleSection/>
    </div>
  )
}

export default Article5