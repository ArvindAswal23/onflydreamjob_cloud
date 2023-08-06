import React ,{useEffect} from 'react'
import { Link } from 'react-router-dom';

const ResumeBuilder = () => {
    useEffect(() =>{
        document.title="Resume Enhancer";
    },[])
    const url = "https://d1civoyjepycei.cloudfront.net/static/img/ai_writer_features/ai_resume_showcase.ae0bb09a7667.gif";
    return (
        <div className="">
{/* Features */}
            <div class="overflow-hidden bg-white pt-24 pb-8">
                <div class="mx-auto max-w-7xl px-6 lg:px-8">
                    <div class="mx-auto grid max-w-2xl lg:grid-cols-3 sm:grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none">
{/* text */}
                        <div class="lg:pr-8 lg:pt-4 lg:col-span-2 ">
                            <div class="">
                            <h2 class="text-base font-semibold leading-7 text-sky-800">Automate your CV creation with our AI resume enhancer.</h2>
                            <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Powered by OpenAI's GPT-4 NLP model.</p>
                            <p class="mt-6 text-lg leading-8 text-gray-600">Some people simply don’t enjoy writing resumes as much as we do. That’s okay. Our AI Resume Writer is for you.</p>
                            <dl class="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                                <div class="relative pl-9">
                                <dt class="inline font-semibold text-gray-900">
                                    Unlock your career potential.
                                </dt>
                                <dd class="inline">
                                Create a powerful resume that highlights your skills and accomplishments to open doors for your dream job.</dd>
                                </div>
                                <div class="relative pl-9">
                                <dt class="inline font-semibold text-gray-900">
                                    ATS approved.
                                </dt>
                                <dd class="inline">Get an ATS approved resume in Just 48 hours.</dd>
                                </div>
                                <div class="relative pl-9">
                                <dt class="inline font-semibold text-gray-900">
                                    Blend of AI + Human.
                                </dt>
                                <dd class="inline">Not only just AI, but also get a touch of industry experts in your resume.</dd>
                                </div>
                                <div class="relative pl-9">
                                <dt class="inline font-semibold text-gray-900">
                                Customized Templates.
                                </dt>
                                <dd class="inline">Access our 5-industry accepted, professionally designed templates and stand out to match your unique style and Industry.</dd>
                                </div>
                                <div class="relative pl-9">
                                <dt class="inline font-semibold text-gray-900">
                                Carefully Designed.
                                </dt>
                                <dd class="inline">Carefully crafted and handmade resumes by industry experts that give you and your dreams a fly.</dd>
                                </div>
                                <div class="relative pl-9">
                                <dt class="inline font-semibold text-gray-900">
                                Confidence boost.
                                </dt>
                                <dd class="inline">Our Resume builder empowers you to present your skills confidently, increasing your chance of landing interviews and job opportunities.</dd>
                                </div>
                                <div class="relative pl-9">
                                <dt class="inline font-semibold text-gray-900">
                                Expert Approved.
                                </dt>
                                <dd class="inline">Get the benefit of expert curated content and Industry specific advice that aligns with current hiring trends.</dd>
                                </div>
                                <div class="relative pl-9">
                                <dt class="inline font-semibold text-gray-900">
                                    Feedback and Improvement.
                                </dt>
                                <dd class="inline">Get feedback and 2 chances to fine tune your resume and optimize the chances of winning.</dd>
                                </div>
                            </dl>
                            </div>
                        </div>
                        <div class="lg:pr-8 lg:pt-4 lg:col-span-1">
                            <img src = {`${url}`} alt="Product screenshot" class="w-[44rem] h-[840px] rounded-xl shadow-xl ring-2 ring-black-100 sm:w-[57rem] md:-ml-4 lg:-ml-0 lg:max-w-none lg:max-h-800px" width="1920" height="1113" />
                        </div>
                    </div>
                </div>
            </div>
{/* Button */}
            <div class="bg-white dark:bg-gray-900">
                <div class="px-4 mx-auto max-w-screen-xl sm:py-12 lg:px-10">
                    <div class="mx-auto max-w-screen-sm text-center">
                        <Link to="/rbform">
                            <button class="text-white bg-sky-800 hover:bg-sky-600 hover:ring-4 hover:ring-primary-300 font-bold py-3 px-6 rounded-full focus:outline-none">GET STARTED ▸</button>
                        </Link>
                        <h2 class="mt-4 text-2xl tracking-tight font-extrabold leading-tight text-gray-900 dark:text-white">Click above to generate your resume</h2>
                        <p class="my-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">We'll Take Care of Your Information.</p>
                    </div>
                </div>
            </div>
        </div> 
    );
}

export default ResumeBuilder;