import { Heading } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import React from "react"

const Help = () => {
  return (
    <div className="mt-6">
      <Heading className="text-base-semi text-2xl pb-10">Need help?</Heading>
      <div className="text-base-regular my-2">
        <ul className="gap-y-2 flex flex-col text-red-200 text-md">
            <a href="mailto:admin@norelation.ca">Contact Us!</a>
          {/* <li>
            <LocalizedClientLink href="/contact">
              Returns & Exchanges
            </LocalizedClientLink>
          </li> */}
        </ul>
      </div>
    </div>
  )
}

export default Help
