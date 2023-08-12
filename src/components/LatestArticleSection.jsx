import React from 'react'
import { Article_placeholder, CloudComputing, JobTips, SoftSkill, Rupee } from '../assets'
import { Link } from 'react-router-dom';

const LatestArticleSection = () => {
    return (
        <div>
            <aside aria-label="Latest articles" class="py-2 lg:py-4 bg-gray-700">
                <div class="px-2 mx-auto max-w-screen-lg">
                    <h2 class="mb-8 text-4xl font-bold text-white">Latest Articles</h2>
                    <div class="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
                        <article class="overflow-hidden rounded-lg shadow-lg">

                            <a href="/article5">
                                <img alt="Placeholder" class="block" src={Rupee} width={300} height={250} />
                            </a>

                            <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                                <h1 class="text-lg">
                                    <a class="no-underline hover:underline text-white" href="/article5">
                                        The Concept of 20 LPA Jobs and Why Only Tier 1 Colleges?
                                    </a>
                                    <div class="flex items-center justify-between">
                                        <p class="text-white text-sm">
                                            2 min read
                                        </p>
                                        <p class="text-white text-sm">
                                            17 July 2023
                                        </p>
                                    </div>
                                </h1>
                            </header>

                            <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                                <a class="flex items-center no-underline hover:underline text-white" href="#">
                                    <img alt="Placeholder" class="block rounded-full" src="https://picsum.photos/32/32/?random" />
                                    <p class="ml-2 text-sm">
                                        OnflyDreamJob
                                    </p>
                                </a>

                                {/* <a class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center" href="">
Read more
</a> */}
                                <Link class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center" to="/article5"> Read more</Link>
                            </footer>
                        </article>
                        <article class="overflow-hidden rounded-lg shadow-lg max-w-xs">
                            <a href="/article4">
                                <img alt="Placeholder" class="block" src={SoftSkill} width={300} height={300} />
                            </a>
                            <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                                <h1 class="text-lg">
                                    <a class="no-underline hover:underline text-white" href="/article4">
                                        Why is Soft Skills an Art? Find it out here
                                    </a>
                                    <div class="flex items-center justify-between">
                                        <p class="text-white text-sm">
                                            2 min read
                                        </p>
                                        <p class="text-white text-sm">
                                            9 July 2023
                                        </p>
                                    </div>
                                </h1>
                            </header>
                            <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                                <a class="flex items-center no-underline hover:underline text-black" href="/article4">
                                    <img alt="Placeholder" class="block rounded-full" src="https://picsum.photos/32/32/?random" />
                                    <p class="ml-2 text-sm text-white">
                                        Tanuj Rathi
                                    </p>
                                </a>

                                <Link class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center" to="/article4"> Read more</Link>
                            </footer>
                        </article>
                        <article class="overflow-hidden rounded-lg shadow-lg max-w-xs">
                            <a href="/article1">
                                <img alt="Placeholder" class="block" src={Article_placeholder} width={300} height={300} />
                            </a>
                            <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                                <h1 class="text-lg">
                                    <a class="no-underline hover:underline text-white" href="/article1">
                                        How to find an off campus job as a fresher?
                                    </a>
                                    <div class="flex items-center justify-between">
                                        <p class="text-white text-sm">
                                            3 min read
                                        </p>
                                        <p class="text-white text-sm">
                                            2 July 2023
                                        </p>
                                    </div>
                                </h1>
                            </header>
                            <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                                <a class="flex items-center no-underline hover:underline text-black" href="/article1">
                                    <img alt="Placeholder" class="block rounded-full" src="https://picsum.photos/32/32/?random" />
                                    <p class="ml-2 text-sm text-white">
                                        Tanuj Rathi
                                    </p>
                                </a>

                                <Link class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center" to="/article1"> Read more</Link>
                            </footer>
                        </article>
                        <article class="overflow-hidden rounded-lg shadow-lg max-w-xs">

                            <a href="/article3">
                                <img alt="Placeholder" class="block" src={JobTips} width={200} height={200} />
                            </a>

                            <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                                <h1 class="text-lg">
                                    <a class="no-underline hover:underline text-white" href="/article3">
                                        Navigating the Evolving Job Market: Tips for Job Seekers
                                    </a>
                                    <div class="flex items-center justify-between">
                                        <p class="text-white text-sm">
                                            2 min read
                                        </p>
                                        <p class="text-white text-sm">
                                            2 July 2023
                                        </p>
                                    </div>
                                </h1>
                            </header>

                            <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                                <a class="flex items-center no-underline hover:underline text-black" href="/article3">
                                    <img alt="Placeholder" class="block rounded-full" src="https://picsum.photos/32/32/?random" />
                                    <p class="ml-2 text-sm text-white">
                                        OnflyDreamJob
                                    </p>
                                </a>
                                <Link class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center" to="/article3"> Read more</Link>
                            </footer>
                        </article>
                    </div>
                </div>
            </aside>
        </div>
    )
}

export default LatestArticleSection