"use client"
import React from "react";
import ReactDOMServer from "react-dom/server";

import { Order } from "@medusajs/medusa";
import OrderCompletedTemplate from "./templates/order-completed-template";

export const renderToHtmlString = (order: Order): string => {
  const component = <OrderCompletedTemplate order={order} />;
  return ReactDOMServer.renderToStaticMarkup(component);
};
