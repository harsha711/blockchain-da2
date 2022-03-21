import { Typography } from "@mui/material";
import React from "react";
import purchases from "../../purchases";
import "./Transactions.css";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";

export default function Transactions() {
  // fetching the transactions details from the JSON dataset and displaying it through mapping along with other metrics such as
  // Revenue, sales, costs
  const data = purchases;
  return (
    <div className="featured" style={{ margin: "2em 7em" }}>
      <div className="featured2">
        <div className="featuredItem2">
          <span className="featuredTitle">Revenue</span>
          <div className="featuredMoneyContainer">
            <span className="featuredMoney">$2569</span>
            <span className="featuredMoneyRate">
              -12.5 <ArrowDownward className="featuredIcon negative" />
            </span>
          </div>
          <span className="featuredSub">Compared to last month</span>
        </div>
        <div className="featuredItem2">
          <span className="featuredTitle">Sales</span>
          <div className="featuredMoneyContainer">
            <span className="featuredMoney">$4569</span>
            <span className="featuredMoneyRate">
              -1.5 <ArrowDownward className="featuredIcon negative" />
            </span>
          </div>
          <span className="featuredSub">Compared to last month</span>
        </div>
        <div className="featuredItem2">
          <span className="featuredTitle">Cost</span>
          <div className="featuredMoneyContainer">
            <span className="featuredMoney">$1569</span>
            <span className="featuredMoneyRate">
              +9.5 <ArrowUpward className="featuredIcon" />
            </span>
          </div>
          <span className="featuredSub">Compared to last month</span>
        </div>
      </div>
      <div style={{ marginTop: "3em" }}>
        <Typography variant="h4">Transaction History</Typography>
        {data.map((temp) => (
          <div className="featuredItem" style={{ margin: "2em 0" }}>
            <div className="featuredMoneyContainer">
              <span className="featuredTitle">{temp.name}</span>
              <span className="featuredMoney">$ {temp.total}</span>
            </div>
            <div>
              {temp.items.map((item) => (
                <span className="featuredSub" key={item}>
                  {item},&nbsp;
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
