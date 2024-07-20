import { LineItem, Region } from "@medusajs/medusa"
import { Heading, Table } from "@medusajs/ui"
import Divider from "@modules/common/components/divider"
import Item from "@modules/cart/components/item"
import SkeletonLineItem from "@modules/skeletons/components/skeleton-line-item"

type ItemsTemplateProps = {
  items?: Omit<LineItem, "beforeInsert">[]
  region?: Region
}


const ItemsTemplate = ({ items, region }: ItemsTemplateProps) => {
  return (
    <div className="">
      <div className="pb-3 flex items-center">
        <Heading className="text-[2rem] leading-[2.75rem] text-white">Cart</Heading>
        
      </div>
      <Divider/>
      <Table>
        <Table.Header className="">
          {/* <Table.Row className="text-gray-400 txt-medium-plus bg-stone hover:bg-stone">
            <Table.HeaderCell className="!pl-0 ">Item</Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
            <Table.HeaderCell>Quantity</Table.HeaderCell>
            <Table.HeaderCell className="hidden small:table-cell">
              Price
            </Table.HeaderCell>
            <Table.HeaderCell className="!pr-0 text-right">
              Total
            </Table.HeaderCell>
          </Table.Row> */}
        </Table.Header>
        <Table.Body>
          {items && region
            ? items
                .sort((a, b) => {
                  return a.created_at > b.created_at ? -1 : 1
                })
                .map((item) => {
                  return <Item key={item.id} item={item} region={region} />
                })
            : Array.from(Array(5).keys()).map((i) => {
                return <SkeletonLineItem key={i} />
              })}
        </Table.Body>
      </Table>
    </div>
  )
}

export default ItemsTemplate
