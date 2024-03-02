import React from 'react'

function TechStack() {
    return (
        <section className="py-20 bg-transparent">
    <div className="container max-w-8xl px-10 mx-auto">
    <section className="h-auto bg-transparent">
    <div className="px-10 py-24 mx-auto max-w-8xl">
        <div className="w-full mx-auto text-left md:text-center">
            <h1 className="mb-4 text-5xl font-extrabold leading-none max-w-5xl mx-auto tracking-normal text-white sm:text-6xl md:text-6xl lg:text-7xl md:tracking-tight"> My <span className="w-full text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 lg:inline">technology stack</span> that<br className="lg:block hidden" />is all that a design needs. </h1>
            <p className="px-0 mb-6 text-lg text-gray-200 md:text-xl lg:px-24"> Being a front-end developer, I'll use my techstack to help tell your story through websites! </p>
        </div>
    </div>
</section>
        <div className="grid grid-cols-4 gap-10 mb-3 mt-10 sm:grid-cols-8 lg:grid-cols-12 sm:px-8 xl:px-0">

            <div className="relative flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 overflow-hidden bg-gray-100 sm:rounded-xl hover:scale-[102%] cursor-pointer hover:bg-gray-200 active:scale-95 rounded-md duration-300" data-rounded="rounded-xl" data-rounded-max="rounded-full">
                <div className="p-3 text-white bg-black rounded-full" data-primary="blue-500" data-rounded="rounded-full">
                    <img src="/images/icons/icons8-javascript-50.png" alt="" />
                </div>
                <h4 className="text-xl font-medium text-gray-700">JavaScript</h4>
                <p className="text-base text-center text-gray-500">Making the base of all frameworks and libraries.</p>
            </div>
           
            <div className="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 sm:rounded-xl hover:scale-[102%] cursor-pointer hover:bg-gray-200 active:scale-95 rounded-md duration-300" data-rounded="rounded-xl" data-rounded-max="rounded-full">
                <div className="p-3 text-white bg-black rounded-full" data-primary="blue-500" data-rounded="rounded-full">
                <img src="/images/icons/icons8-react-48.png" alt="" />
                </div>
                <h4 className="text-xl font-medium text-gray-700">React</h4>
                <p className="text-base text-center text-gray-500">Can you even make a good CMS without React?</p>
            </div>
            
            <div className="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 sm:rounded-xl hover:scale-[102%] cursor-pointer hover:bg-gray-200 active:scale-95 rounded-md duration-300" data-rounded="rounded-xl" data-rounded-max="rounded-full">
                <div className="p-3 text-white bg-black rounded-full" data-primary="blue-500" data-rounded="rounded-full">
                <img src="/images/icons/icons8-tailwind-css-24.png" alt="" />
                </div>
                <h4 className="text-xl font-medium text-gray-700">Tailwind CSS</h4>
                <p className="text-base text-center text-gray-500">Why not make your code production based?</p>
            </div>

            <div className="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 sm:rounded-xl hover:scale-[102%] cursor-pointer hover:bg-gray-200 active:scale-95 rounded-md duration-300" data-rounded="rounded-xl" data-rounded-max="rounded-full">
                <div className="p-3 text-white bg-black rounded-full" data-primary="blue-500" data-rounded="rounded-full">
                    <img src="/images/icons/icons8-java-50.png" alt="" />
                </div>
                <h4 className="text-xl font-medium text-gray-700">Java</h4>
                <p className="text-base text-center text-gray-500">Can't assure anyone without skills in DSA can we?</p>
            </div>

            <div className="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 sm:rounded-xl hover:scale-[102%] cursor-pointer hover:bg-gray-200 active:scale-95 rounded-md duration-300" data-rounded="rounded-xl" data-rounded-max="rounded-full">
                <div className="p-3 text-white bg-black rounded-full" data-primary="blue-500" data-rounded="rounded-full">
                    <img src="/images/icons/icons8-figma-50.png" alt="" />
                </div>
                <h4 className="text-xl font-medium text-gray-700">Figma</h4>
                <p className="text-base text-center text-gray-500">The workshop that helps me create awesome UI Designs.</p>
            </div>

            <div className="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 sm:rounded-xl hover:scale-[102%] cursor-pointer hover:bg-gray-200 active:scale-95 rounded-md duration-300" data-rounded="rounded-xl" data-rounded-max="rounded-full">
                <div className="p-3 text-white bg-black rounded-full" data-primary="blue-500" data-rounded="rounded-full">
                    <img src="/images/icons/icons8-github-50.png" alt="" />
                </div>
                <h4 className="text-xl font-medium text-gray-700">GitHub</h4>
                <p className="text-base text-center text-gray-500">You can't be a developer without merging some pull requests!</p>
            </div>

        </div>
    </div>
</section>

    )
}

export default TechStack;
