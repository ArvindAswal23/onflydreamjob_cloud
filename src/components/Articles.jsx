import { React, useEffect } from 'react'
import { Article_placeholder, CloudComputing, JobTips, SoftSkill } from '../assets'
import { Link } from 'react-router-dom';

const Articles = () => {
    useEffect(() => {
        document.title = "Articles | Onfly Dream Job"
    })
    return (
        // <!-- component -->
        <div class="container my-12 mx-auto px-4 md:px-12">
            <div class="flex flex-wrap -mx-1 lg:-mx-4">

                {/* <!-- Column --> */}
                <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

                    {/* <!-- Article --> */}
                    <article class="overflow-hidden rounded-lg shadow-lg">

                        <a href="/article1">
                            <img alt="Placeholder" class="block" src={SoftSkill} width={300} height={250} />
                        </a>

                        <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                            <h1 class="text-lg">
                                <a class="no-underline hover:underline text-black" href="#">
                                Why is Soft Skills an Art? Find it out here
                                </a>
                                <div class="flex items-center justify-between">
                                    <p class="text-grey-darker text-sm">
                                        2 min read
                                    </p>
                                    <p class="text-grey-darker text-sm">
                                        9 July 2023
                                    </p>
                                </div>
                            </h1>
                        </header>

                        <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                            <a class="flex items-center no-underline hover:underline text-black" href="#">
                                <img alt="Placeholder" class="block rounded-full" src="https://picsum.photos/32/32/?random" />
                                <p class="ml-2 text-sm">
                                    Tanuj Rathi
                                </p>
                            </a>

                            {/* <a class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center" href="">
    Read more
</a> */}
                            <Link class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center" to="/article4"> Read more</Link>
                        </footer>
                    </article>
                    {/* <!-- END Article --> */}

                </div>
                {/* <!-- END Column --> */}

                {/* <!-- Column --> */}
                <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

                    {/* <!-- Article --> */}
                    <article class="overflow-hidden rounded-lg shadow-lg">

                        <a href="/article1">
                            <img alt="Placeholder" class="block" src={Article_placeholder} width={300} height={250} />
                        </a>

                        <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                            <h1 class="text-lg">
                                <a class="no-underline hover:underline text-black" href="#">
                                    How to find an off campus job as a fresher?
                                </a>
                                <div class="flex items-center justify-between">
                                    <p class="text-grey-darker text-sm">
                                        3 min read
                                    </p>
                                    <p class="text-grey-darker text-sm">
                                        2 July 2023
                                    </p>
                                </div>
                            </h1>
                        </header>

                        <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                            <a class="flex items-center no-underline hover:underline text-black" href="#">
                                <img alt="Placeholder" class="block rounded-full" src="https://picsum.photos/32/32/?random" />
                                <p class="ml-2 text-sm">
                                    Tanuj Rathi
                                </p>
                            </a>

                            {/* <a class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center" href="">
                Read more
            </a> */}
                            <Link class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center" to="/article1"> Read more</Link>
                        </footer>
                    </article>
                    {/* <!-- END Article --> */}

                </div>
                {/* <!-- END Column --> */}

                {/* <!-- Column --> */}
                <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

                    {/* <!-- Article --> */}
                    <article class="overflow-hidden rounded-lg shadow-lg">

                        <a href="/article2">
                            <img alt="Placeholder" class="block" src={CloudComputing} />
                        </a>

                        <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                            <h1 class="text-lg">
                                <a class="no-underline hover:underline text-black" href="/article2">
                                    The Evolution of Cloud Computing: Empowering the Digital Transformation
                                </a>
                                <div class="flex items-center justify-between">
                                    <p class="text-grey-darker text-sm">
                                        5 min read
                                    </p>
                                    <p class="text-grey-darker text-sm">
                                        2 July 2023
                                    </p>
                                </div>
                            </h1>
                        </header>

                        <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                            <a class="flex items-center no-underline hover:underline text-black" href="#">
                                <img alt="Placeholder" class="block rounded-full" src="https://picsum.photos/32/32/?random" />
                                <p class="ml-2 text-sm">
                                    OnflyDreamJob
                                </p>
                            </a>

                            {/* <a class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center" href="">
                Read more
            </a> */}
                            <Link class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center" to="/article2"> Read more</Link>
                        </footer>
                    </article>
                    {/* <!-- END Article --> */}

                </div>
                {/* <!-- END Column --> */}

                {/* <!-- Column --> */}
                <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

                    {/* <!-- Article --> */}
                    <article class="overflow-hidden rounded-lg shadow-lg">

                        <a href="/article3">
                            <img alt="Placeholder" class="block" src={JobTips} width={200} height={200} />
                        </a>

                        <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                            <h1 class="text-lg">
                                <a class="no-underline hover:underline text-black" href="/article3">
                                    Navigating the Evolving Job Market: Tips for Job Seekers
                                </a>
                                <div class="flex items-center justify-between">
                                    <p class="text-grey-darker text-sm">
                                        2 min read
                                    </p>
                                    <p class="text-grey-darker text-sm">
                                        2 July 2023
                                    </p>
                                </div>
                            </h1>
                        </header>

                        <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                            <a class="flex items-center no-underline hover:underline text-black" href="#">
                                <img alt="Placeholder" class="block rounded-full" src="https://picsum.photos/32/32/?random" />
                                <p class="ml-2 text-sm">
                                    OnflyDreamJob
                                </p>
                            </a>

                            {/* <a class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center" href="">
                Read more
            </a> */}
                            <Link class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center" to="/article3"> Read more</Link>
                        </footer>
                    </article>
                    {/* <!-- END Article --> */}

                </div>
                {/* <!-- END Column --> */}


            </div>
        </div>
    )
}

export default Articles