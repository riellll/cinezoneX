import React from 'react'
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";

const ReviewCard = () => {
  return (
     <div>
        <div className='mb-4'>
        <ul className="flex flex-wrap -mb-px items-center  text-sm font-medium text-center" id="default-tab" data-tabs-toggle="#default-tab-content" role="tablist">
        <li className="me-2 mr-10" role="presentation">
        <h1 className="text-xl font-bold leading-none tracking-tight text-gray-300 md:text-lg lg:text-2xl dark:text-white">Social</h1>
        </li>
        <li className="me-2" role="presentation">
            <button className="inline-block p-4 border-b-2 rounded-t-lg text-gray-300 hover:border-gray-300 dark:hover:text-gray-300" id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false">Reviews</button>
        </li>
        <li className="me-2" role="presentation">
            <button className="inline-block p-4 border-b-2 rounded-t-lg text-gray-300 hover:border-gray-300 dark:hover:text-gray-300" id="settings-tab" data-tabs-target="#settings" type="button" role="tab" aria-controls="settings" aria-selected="false">Discussions</button>
        </li>
    </ul>
        </div>
    <Card className="max-w-full">
    <CardHeader className="flex gap-3">
      <Image
        alt="nextui logo"
        height={40}
        radius="sm"
        src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
        width={40}
      />
      <div className="flex flex-col">
        <p className="text-md">NextUI</p>
        <p className="text-small text-default-500">nextui.org</p>
      </div>
    </CardHeader>
    <Divider/>
    <CardBody>
      <p>Make beautiful websites regardless of your design experience.</p>
    </CardBody>
    <Divider/>
    <CardFooter>
      <Link
        isExternal
        showAnchorIcon
        href="https://github.com/nextui-org/nextui"
      >
        Visit source code on GitHub.
      </Link>
    </CardFooter>
  </Card>
   </div>
  )
}

export default ReviewCard