import React, { useState, useEffect,useContext } from "react";
import { VictoryLine, VictoryChart, VictoryTheme } from 'victory';
import {ContextRTC} from "../config/contextAPI"
function PeerConnectionsRTCOutboundRTPVideoStream_RTT() {
  const {
    showPeerConnectionsRTCOutboundRTPVideoStream_RTTMin,
    showPeerConnectionsRTCOutboundRTPVideoStream_RTTAvg,
    showPeerConnectionsRTCOutboundRTPVideoStream_RTTMax,
    showPeerConnectionsRTCOutboundRTPVideoStream_RTTTime,
  
  }=useContext(ContextRTC)
  const [PeerConnectionsRTCOutboundRTPVideoStream_RTTMin,setPeerConnectionsRTCOutboundRTPVideoStream_RTTMin]=showPeerConnectionsRTCOutboundRTPVideoStream_RTTMin
  const [PeerConnectionsRTCOutboundRTPVideoStream_RTTAvg,setPeerConnectionsRTCOutboundRTPVideoStream_RTTAvg]=showPeerConnectionsRTCOutboundRTPVideoStream_RTTAvg
  const [PeerConnectionsRTCOutboundRTPVideoStream_RTTMax,setPeerConnectionsRTCOutboundRTPVideoStream_RTTMax]=showPeerConnectionsRTCOutboundRTPVideoStream_RTTMax
    const [PeerConnectionsRTCOutboundRTPVideoStream_RTTTime,setPeerConnectionsRTCOutboundRTPVideoStream_RTTTime]=showPeerConnectionsRTCOutboundRTPVideoStream_RTTTime
    let MinArr=[]
    let AvgArr=[]
    let MaxArr=[]
    let index=0
    let strTag=[]
    PeerConnectionsRTCOutboundRTPVideoStream_RTTTime.map((data)=>{
      MinArr.push({x:data,y:PeerConnectionsRTCOutboundRTPVideoStream_RTTMin[index].toFixed(2)})
      AvgArr.push({x:data,y:PeerConnectionsRTCOutboundRTPVideoStream_RTTAvg[index].toFixed(2)})
      MaxArr.push({x:data,y:PeerConnectionsRTCOutboundRTPVideoStream_RTTMax[index].toFixed(2)})
      
      strTag.push(
      <tr>
        <td>{data}</td>
        <td>{PeerConnectionsRTCOutboundRTPVideoStream_RTTMax[index].toFixed(2)}</td>
        <td>{PeerConnectionsRTCOutboundRTPVideoStream_RTTAvg[index].toFixed(2)}</td>
        <td>{PeerConnectionsRTCOutboundRTPVideoStream_RTTMin[index].toFixed(2)}</td>
      </tr>)
    index++;
    })  
    
    return (
    <div>
        <h2 style={{backgroundColor:"purple",color:"white",height:"2vw"}}>PeerConnectionsRTCOutboundRTPVideoStream_RTT</h2>
        <div style={{ display: 'flex', textAlign: 'center', marginBottom:"3vw"}}>
        <div style={{"height" : "15vw", "width" : "20vw"}}>
        <VictoryChart
          theme={VictoryTheme.material}
 
        >
          <VictoryLine
            style={{
              data: { stroke: "red" },
              parent: { border: "1px solid #ccc"},
              
        
            }}
            
            data={MinArr}
          />
            <VictoryLine
            style={{
              data: { stroke: "green" },
              parent: { border: "1px solid #ccc"}
        
            }}
            data={AvgArr}
          />
              <VictoryLine
            style={{
              data: { stroke: "black" },
              parent: { border: "1px solid #ccc"}
        
            }}
            data={MaxArr}
          />
        </VictoryChart>

        </div>
        <div>                
          <table>
            <tr>
              <th>Time</th>
              <th>Max</th>
              <th>Avg</th>
              <th>Min</th>
            </tr> 
            {strTag.map((data)=>{return data})}    
          </table>
        </div>
        </div>
    </div>
    )

}
export default PeerConnectionsRTCOutboundRTPVideoStream_RTT
