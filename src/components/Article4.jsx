import { React, useEffect } from 'react'
import {LatestArticleSection} from  './index'
import { SoftSkill } from '../assets'

const Article4 = () => {
    window.scrollTo(0, 0);
    useEffect(() => {
        document.title = "Article 4 | Onfly Dream Job"
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
                                        <p class="text-xl font-bold text-black">Tanuj Rathi</p>
                                        <p class="text-base font-light text-gray-500">9 July 2023, 2 min read</p>
                                    </div>
                                </div>
                            </address>
                            <h1 class="mb-4 text-3xl font-extrabold leading-tight text-black lg:mb-6 lg:text-4xl"> Why is Soft Skills an Art?</h1>
                        </header>
                        <p class="lead text-justify">Soft Skill, An Art what am I trying to say here? Let us try to understand the importance of having soft skills, how we can develop them and how we can reflect it in our resume to get more job opportunities.
                        </p>
                        <p class="lead text-justify">Hello Dreamers, we welcome you again in our blog section where we talk about tips, tricks, and a little bit of gyaan to get into our dream jobs.
                        So first, what is a soft skill? In simple terms any non-technical skill is a soft skill, if I elaborate, then it means if we are even walking and not using any car or bike to move then we have a soft skill but if we know how to ride a bike in that case, we call it a technical skill. In our day-to-day life, we use a lot of soft skills but those who use this practice to express, and give meaning to their act to get social output is the meaning of art. For instance, we all know how to speak, but we can’t influence or convince our audience.
                        </p>
                        <p> I hope till now we all must have got a rough idea about how soft skill works with art.
                       </p>
                        <img class="block" src={SoftSkill} />
                        <h4>
                        Now we will talk about some soft skills that we can use in our resume; how can we develop and justify them by just having our college experience.
                        </h4>
                        <ol>
                            <li class="text-justify"><strong>Skill in Communication</strong>: Communication is one of the most common skill sets which any employer will look into a candidate and it is not about knowing English. English is one of the most spoken languages and is used by many of the clients of the corporations. That is why an employer prefers you to know English, plus you cannot write any mail in your local language. To develop communication skills, I suggest people develop a practice of anecdotes, write what they feel, what they learned today, what they are suffering from, and any emotion they are going through, and observe themselves. In this manner, you will be able to understand yourself more clearly and how you are conveying your thoughts in a paper. Slowly you will analyze what is important to mention and what can be skipped, parallelly also train yourself how to convey things formally wherever required. Read articles and listen to some conversations like any podcast, interview, a meaning show and try to catch how people in the limelight are conveying their thoughts. I feel this much is enough become you will slowly find out the way ahead.
                            </li>
                            <li class="text-justify"><strong>Skill of Leadership</strong>: Does leadership sound you something that only an experienced employee can have, well no this is not true. Without even having a corporate experience you can still learn and prove it. Have you ever thought about why government jobs, organizations, or colleges have sports quotas? Well, the reason is the qualities that these people bring to the table like Leadership, Team building qualities, being a good team player, Goal oriented approach, Motivation, etc. Knowledge is good but developing soft skills and consistently working on it is what the world needs right now. To develop and gain these skills, there are multiple free courses available over coursera, LinkedIn learning, Alison. If you are a college student you can take up many projects, club activities, or curricular activities to learn and develop qualities in yourself and put into your resume.
                            </li>
                            <li class="text-justify"><strong>Problem-solving ability</strong>: I believe this skillset is attitude based and doesn’t require any hard work or effort but gives you an edge if you can prove it in front of a recruiter or your resume. Opportunity is a by-product of any problem we see, and organizations look for individuals who can deal with problem cases, and who can approach a problem from a different angle. None of the problems have a wrong or right answer like we have in our mathematics class, but it is the approach an individual uses to tackle it and that is why we have case competitions while shortlisting any candidates. To build such a niche skill, you can go through a lot of corporate case studies and how leadership tackled it with some simple solutions and once you will get into such studies you will realize it is just a matter of attitude and approach to what they follow. I remember in one of my interviews where the recruiter was just trying to understand how I will approach any problem that I might face in a work environment. A few of the case studies which I like are How Henry Ford came up with the idea of building a car, how Indigo Aviation is profitable in a loss-making aviation industry, and How Unilever or Asian Paints is a logistic and data-based company, not a consumer durable or paint company. Try to read rather than just watch videos about these case studies and you will learn the approach to solving any problem.
                                </li>
                        </ol>
                        <p class="text-justify"> Well, I hope you must have found our blog series informative; these are some of the skills but not limited to which any fresher can focus upon and develop. Don’t forget to look at our website which has some amazing job opportunities for you, you can also follow us on Instagram, LinkedIn, and Telegram where we constantly post such opportunities.
                        </p>


                    </article>
                </div>
            </main>
        <LatestArticleSection/>
        </div>
  )
}

export default Article4