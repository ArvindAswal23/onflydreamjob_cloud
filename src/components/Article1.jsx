import { React, useEffect } from 'react'
import {LatestArticleSection} from  './index'
import { Article_placeholder} from '../assets'
const Article1 = () => {
     window.scrollTo(0, 0);
    useEffect(() => {
        document.title = "Article 1 | Onfly Dream Job"
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
                                        <p class="text-base font-light text-gray-500">2 July 2023, 3 min read</p>
                                    </div>
                                </div>
                            </address>
                            <h1 class="mb-4 text-3xl font-extrabold leading-tight text-black lg:mb-6 lg:text-4xl">  How to find an off campus job as a fresher?</h1>
                        </header>
                        <p class="lead"> Hello Dreamers, do you also belong from a tier 2, tier 3 or tier 4 college and there are very few opportunities that you have got during your college placement? This is a very common problem that every student faces during their initial career days. Eventually the only option that remains with us is the off-campus opportunities available in the market.
                            First, let me welcome you people to our website onfly dream jobs which is designed in such a manner to provide the right information about the fresher jobs in the market.</p>
                        <p>
                            Targeting off-campus jobs in the market is a smart work which needs guidance over networking and job search techniques. To get into the corporate world first, we need to understand the problem here. Why do corporates reject any of the applications whether it is a fresher or an experienced folk? If any of the recruiter finds out that this resource is not going to add on anything, then in a very simple manner they will reject you. If we talk about the freshers here, how can you become a resourceful candidate when you have almost nothing to offer and especially when a candidate belongs from a tier 2, tier 3 or tier 4 college.
                        </p>
                        <img class="block" src={Article_placeholder} />
                        <h4>Let us discuss some of the points which we as a fresher can use to increase our chances to become a right fit and land up to our dream job.
                        </h4>
                        <ol>
                            <li><strong>Skillset</strong>: Currently I am working as a business excellence associate, where one of my domains is resourcing candidates in the project and getting them evaluated. The major issue we have encountered is the right skillset of a candidate. Recruiters always cry for quality resources and trust me once you are even providing 50% 60% of quality with your skills you have a high chance to get in.
                                Now how to get a skill? Commonly we have two types of skill sets Technical and Soft skill, if you are planning to get into an area where you will be going to need a lot of technical usage over software and support systems, you just can’t grab an online certificate and put it on your resume. Make sure to build up a portfolio with sample datasets or problem equations. So, if you want to enter as a Data Analyst, work on some sample data and build a portfolio to prove that yes you have the skill set of preparing dashboards.
                                Recruiters not only look for technical areas, but also check your soft skill area where communication as skill is very important, especially when you are in a client facing business. Communication is not about which language you know; it is just about how fairly and rightly you can convey or understand the deliverables or tasks.</li>
                            <li><strong>College Projects (Majors and Minors)</strong>:
                                The final year project which we feel is just a formality can act as a game changer for you. If you have missed this opportunity and have passed out from your college, you can skip this point but if you still have time, I will suggest, show some passion over it. Any opportunity is created when we have a problem around us. So, choose a problem, build your major project over it, do some primary research, interact with people, check-on with their feedback and get it done on a very serious note. This one simple thing can be highlighted as a good achievement on your resume and show the recruiter about your skill set in different areas.
                            </li>
                            <li><strong>Internships</strong>:
                                Internship, not only during college but also after college is one of the best ways to start your career. I will suggest choosing a paid internship over an unpaid one where you will have a sense of motivation to work, and employers will also take the best out of you. Try to choose an internship for a tenure of 3-6 months and build your contacts, network, and skill from there, always keep yourself up for ideas, participation in activities and keep a learning attitude. Internship is an area where recruiters generally don’t look at your college grades and tier of college, all they need is a cover letter to convince them where you can show your skill set. As a beginner work on Communication skill, be a good listener, always be adaptable and flexible.</li>
                        </ol>
                        <p>Now you have reached here, I believe you are struggling to get a right job for you. I will suggest you look at our other blogs, job postings, read out their JDs, spend some time on other job fields and understand what recruiters need. Meanwhile, we will meet again with new writing and guidance, we are open for your doubts, questions and suggestion don’t forget to leave a comment.</p>


                    </article>
                </div>
            </main>
        <LatestArticleSection/>
        </div>
    )
}

export default Article1