import React from 'react'
import { Box,Stack,Cluster } from '../../assets/CSS/StylesMain'

export default function Income(){
  const transactionsData = [
    { amount: 720, date: "May 12, 2024", id: "1"},
    { amount: 540, date: "May 12, 2024", id: "2"},
    { amount: 420, date: "May 12, 2024", id: "3"}
  ]
  return(
    <box-l>
      <stack-l>
        <box-l>
        <h1>Income</h1>
        <p>Last <span>30 days</span></p>
        <h2>$1,680</h2>
        </box-l>
        <box-l padding="var(--s3)">
          <img src="https://silver-bird.static.domains/income-graph.png" />
        </box-l>
        <box-l>
          <div>
            <cluster-l>
              <h3>Your transactions (3)</h3>
              <p>Last <span>30 days</span></p>
            </cluster-l>
            <stack-l>
              
               {transactionsData.map((item) => (
                <div key={item.id} className="transaction">
                  <cluster-l justify="space-between" align="center">
                    <box-l><h3>${item.amount}</h3></box-l>
                    <box-l><p>{item.date}</p></box-l>
                  </cluster-l>
                </div>
               ))}
              
            </stack-l>
          </div>
        </box-l>
      </stack-l>
    </box-l>
  )
}