import { Heading, Text } from "@medusajs/ui"

import InteractiveLink from "@modules/common/components/interactive-link"

const EmptyCartMessage = () => {
  return (
    <div className="py-48 px-2 flex flex-col justify-center items-start">
      <Heading
        level="h1"
        className="flex flex-row text-3xl text-white gap-x-2 items-baseline"
      >
        Cart
      </Heading>
      <Text className="text-sm text-white mt-4 mb-6 max-w-[32rem]">
        Nothing to see here...
      </Text>
      <div>
        <InteractiveLink href="/">HOME</InteractiveLink>
      </div>
    </div>
  )
}

export default EmptyCartMessage
