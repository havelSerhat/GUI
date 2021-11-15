import React, { useState, useEffect,useContext } from "react";
import { VictoryLine, VictoryChart, VictoryTheme } from 'victory';
import {ContextRTC} from "../config/contextAPI"
function PeerConnectionsRTCInboundRTPVideoStream_Jitter() {
  const {
    showPeerConnectionsRTCInboundRTPVideoStream_JitterMin,
    showPeerConnectionsRTCInboundRTPVideoStream_JitterAvg,
    showPeerConnectionsRTCInboundRTPVideoStream_JitterMax,
    showPeerConnectionsRTCInboundRTPVideoStream_JitterTime,
  }=useContext(ContextRTC)
  const [PeerConnectionsRTCInboundRTPVideoStream_JitterMin,setPeerConnectionsRTCInboundRTPVideoStream_JitterMin]=showPeerConnectionsRTCInboundRTPVideoStream_JitterMin
  const [PeerConnectionsRTCInboundRTPVideoStream_JitterAvg,setPeerConnectionsRTCInboundRTPVideoStream_JitterAvg]=showPeerConnectionsRTCInboundRTPVideoStream_JitterAvg
  const [PeerConnectionsRTCInboundRTPVideoStream_JitterMax,setPeerConnectionsRTCInboundRTPVideoStream_JitterMax]=showPeerConnectionsRTCInboundRTPVideoStream_JitterMax
    const [PeerConnectionsRTCInboundRTPVideoStream_JitterTime,setPeerConnectionsRTCInboundRTPVideoStream_JitterTime]=showPeerConnectionsRTCInboundRTPVideoStream_JitterTime
    let MinArr=[]
    let AvgArr=[]
    let MaxArr=[]
    let index=0
    let strTag=[]
    PeerConnectionsRTCInboundRTPVideoStream_JitterTime.map((data)=>{
      MinArr.push({x:data,y:PeerConnectionsRTCInboundRTPVideoStream_JitterMin[index].toFixed(2)})
      AvgArr.push({x:data,y:PeerConnectionsRTCInboundRTPVideoStream_JitterAvg[index].toFixed(2)})
      MaxArr.push({x:data,y:PeerConnectionsRTCInboundRTPVideoStream_JitterMax[index].toFixed(2)})
      
      strTag.push(
      <tr>
        <td>{data}</td>
        <td>{PeerConnectionsRTCInboundRTPVideoStream_JitterMax[index].toFixed(2)}</td>
        <td>{PeerConnectionsRTCInboundRTPVideoStream_JitterAvg[index].toFixed(2)}</td>
        <td>{PeerConnectionsRTCInboundRTPVideoStream_JitterMin[index].toFixed(2)}</td>
      </tr>)
  index++;
    }) 
    return (
    <div>
        <h2 style={{backgroundColor:"purple",color:"white",height:"2vw"}}>PeerConnectionsRTCInboundRTPVideoStream_Jitter</h2>
        <div style={{ display: 'flex', textAlign: 'center', marginBottom:"3vw"}}>
        <div style={{"height" : "15vw", "width" : "15vw",marginLeft:"3vw"}}>
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
export default PeerConnectionsRTCInboundRTPVideoStream_Jitter

