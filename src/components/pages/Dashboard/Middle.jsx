import React from 'react'
import { motion } from 'framer-motion'

import { icons } from '../../../constants'

function Middle() {
  const opacityIn = {
    whileInView: {
      opacity: [0, 1],
      transition: {
        duration: .7,
        ease: 'easeInOut'
      }
    }
  }
  return (
    <div class="grid gap-3">
      <motion.div variant={opacityIn} whileInView={opacityIn.whileInView}>
        <div class="w-screen h-auto flex justify-between pr-6 items-center">
          <span class="font-semibold text-base text-fontSecondary">Services</span>
          <span class="font-normal text-sm text-fontSecondary cursor-pointer">See All</span>
        </div>  
      </motion.div>
      <motion.div variant={opacityIn} whileInView={opacityIn.whileInView}>
        <div class="flex gap-4 pr-6">
          <div class="w-full h-full flex justify-center items-center gap-8">
            <div class="w-auto grid justify-items-center gap-2 cursor-pointer">
              <div class="w-11 h-11 relative flex justify-center items-center rounded-full bg-iconSecondary">
                <img src={icons.card} class="w-1/2 h-1/2"/>
              </div>
              <span class="font-medium text-xs">Card</span>
            </div>
          </div>
          <div class="w-full h-full flex justify-center items-center gap-8">
            <div class="w-auto grid justify-items-center gap-2 cursor-pointer">
              <div class="w-11 h-11 relative flex justify-center items-center rounded-full bg-iconSecondary">
                <img src={icons.finance} class="w-1/2 h-1/2"/>
              </div>
              <span class="font-medium text-xs">Finance</span>
            </div>
          </div>
          <div class="w-full h-full flex justify-center items-center gap-8">
            <div class="w-auto grid justify-items-center gap-2 cursor-pointer">
              <div class="w-11 h-11 relative flex justify-center items-center rounded-full bg-iconSecondary">
                <img src={icons.topup} class="w-1/2 h-1/2"/>
              </div>
              <span class="font-medium text-xs">Top Up</span>
            </div>
          </div>
          <div class="w-full h-full flex justify-center items-center gap-8">
            <div class="w-auto grid justify-items-center gap-2 cursor-pointer">
              <div class="w-11 h-11 relative flex justify-center items-center rounded-full bg-iconSecondary">
                <img src={icons.help} class="w-1/2 h-1/2"/>
              </div>
              <span class="font-medium text-xs">Help</span>
            </div>
          </div>
        </div>
      </motion.div> 
    </div>
  )
}

export default Middle