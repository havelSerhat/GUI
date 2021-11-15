import React, { useState, useEffect,useContext } from "react";
import { VictoryLine, VictoryChart, VictoryTheme } from 'victory';
import {ContextRTC} from "../config/contextAPI"
function PeerConnectionsRTCOutboundRTPAudioStream_RTT() {
  const {showPeerConnectionsRTCInboundRTPAudioStream_BytesReceivedMin,
    showPeerConnectionsRTCInboundRTPAudioStream_BytesReceivedAvg,
    showPeerConnectionsRTCInboundRTPAudioStream_BytesReceivedMax,
    showPeerConnectionsRTCInboundRTPAudioStream_JitterMin,
    showPeerConnectionsRTCInboundRTPAudioStream_JitterAvg,
    showPeerConnectionsRTCInboundRTPAudioStream_JitterMax,
    showPeerConnectionsRTCInboundRTPAudioStream_PacketsLostMin,
    showPeerConnectionsRTCInboundRTPAudioStream_PacketsLostAvg,
    showPeerConnectionsRTCInboundRTPAudioStream_PacketsLostMax,
    showPeerConnectionsRTCInboundRTPAudioStream_PacketsReceivedMin,
    showPeerConnectionsRTCInboundRTPAudioStream_PacketsReceivedAvg,
    showPeerConnectionsRTCInboundRTPAudioStream_PacketsReceivedMax,
    showPeerConnectionsRTCInboundRTPVideoStream_FrameHeightMin,
    showPeerConnectionsRTCInboundRTPVideoStream_FrameHeightAvg,
    showPeerConnectionsRTCInboundRTPVideoStream_FrameHeightMax,
    showPeerConnectionsRTCInboundRTPVideoStream_FramesDecodedMin,
    showPeerConnectionsRTCInboundRTPVideoStream_FramesDecodedAvg,
    showPeerConnectionsRTCInboundRTPVideoStream_FramesDecodedMax,
    showPeerConnectionsRTCInboundRTPVideoStream_FramesPerSecondMin,
    showPeerConnectionsRTCInboundRTPVideoStream_FramesPerSecondAvg,
    showPeerConnectionsRTCInboundRTPVideoStream_FramesPerSecondMax,
    showPeerConnectionsRTCInboundRTPVideoStream_FrameWidthMin,
    showPeerConnectionsRTCInboundRTPVideoStream_FrameWidthAvg,
    showPeerConnectionsRTCInboundRTPVideoStream_FrameWidthMax,
    showPeerConnectionsRTCInboundRTPVideoStream_JitterMin,
    showPeerConnectionsRTCInboundRTPVideoStream_JitterAvg,
    showPeerConnectionsRTCInboundRTPVideoStream_JitterMax,
    showPeerConnectionsRTCInboundRTPVideoStream_PacketsLostMin,
    showPeerConnectionsRTCInboundRTPVideoStream_PacketsLostAvg,
    showPeerConnectionsRTCInboundRTPVideoStream_PacketsLostMax,
    showPeerConnectionsRTCInboundRTPVideoStream_PacketsReceivedMin,
    showPeerConnectionsRTCInboundRTPVideoStream_PacketsReceivedAvg,
    showPeerConnectionsRTCInboundRTPVideoStream_PacketsReceivedMax,
    showPeerConnectionsRTCOutboundRTPAudioStream_BytesSentMin,
    showPeerConnectionsRTCOutboundRTPAudioStream_BytesSentAvg,
    showPeerConnectionsRTCOutboundRTPAudioStream_BytesSentMax,
    showPeerConnectionsRTCOutboundRTPAudioStream_PacketSentMin,
    showPeerConnectionsRTCOutboundRTPAudioStream_PacketSentAvg,
    showPeerConnectionsRTCOutboundRTPAudioStream_PacketSentMax,
    showPeerConnectionsRTCOutboundRTPAudioStream_RTTMin,
    showPeerConnectionsRTCOutboundRTPAudioStream_RTTAvg,
    showPeerConnectionsRTCOutboundRTPAudioStream_RTTMax,
    showPeerConnectionsRTCOutboundRTPVideoStream_BytesSentMin,
    showPeerConnectionsRTCOutboundRTPVideoStream_BytesSentAvg,
    showPeerConnectionsRTCOutboundRTPVideoStream_BytesSentMax,
    showPeerConnectionsRTCOutboundRTPVideoStream_FrameHeightMin,
    showPeerConnectionsRTCOutboundRTPVideoStream_FrameHeightAvg,
    showPeerConnectionsRTCOutboundRTPVideoStream_FrameHeightMax,
    showPeerConnectionsRTCOutboundRTPVideoStream_FramesEncodedMin,
    showPeerConnectionsRTCOutboundRTPVideoStream_FramesEncodedAvg,
    showPeerConnectionsRTCOutboundRTPVideoStream_FramesEncodedMax,
    showPeerConnectionsRTCOutboundRTPVideoStream_FramesPerSecondMin,
    showPeerConnectionsRTCOutboundRTPVideoStream_FramesPerSecondAvg,
    showPeerConnectionsRTCOutboundRTPVideoStream_FramesPerSecondMax,
    showPeerConnectionsRTCOutboundRTPVideoStream_FramsWidthMin,
    showPeerConnectionsRTCOutboundRTPVideoStream_FramsWidthAvg,
    showPeerConnectionsRTCOutboundRTPVideoStream_FramsWidthMax,
    showPeerConnectionsRTCOutboundRTPVideoStream_PacketSentMin,
    showPeerConnectionsRTCOutboundRTPVideoStream_PacketSentAvg,
    showPeerConnectionsRTCOutboundRTPVideoStream_PacketSentMax,
    showPeerConnectionsRTCOutboundRTPVideoStream_RTTMin,
    showPeerConnectionsRTCOutboundRTPVideoStream_RTTAvg,
    showPeerConnectionsRTCOutboundRTPVideoStream_RTTMax,
  
    showPeerConnectionsRTCInboundRTPAudioStream_BytesReceivedTime,
    showPeerConnectionsRTCInboundRTPAudioStream_JitterTime,
    showPeerConnectionsRTCInboundRTPAudioStream_PacketsLostTime,
    showPeerConnectionsRTCInboundRTPAudioStream_PacketsReceivedTime,
    showPeerConnectionsRTCInboundRTPVideoStream_FrameHeightTime,
    showPeerConnectionsRTCInboundRTPVideoStream_FramesDecodedTime,
    showPeerConnectionsRTCInboundRTPVideoStream_FramesPerSecondTime,
    showPeerConnectionsRTCInboundRTPVideoStream_FrameWidthTime,
    showPeerConnectionsRTCInboundRTPVideoStream_JitterTime,
    showPeerConnectionsRTCInboundRTPVideoStream_PacketsLostTime,
    showPeerConnectionsRTCInboundRTPVideoStream_PacketsReceivedTime,
    showPeerConnectionsRTCOutboundRTPAudioStream_BytesSentTime,
    showPeerConnectionsRTCOutboundRTPAudioStream_PacketSentTime,
    showPeerConnectionsRTCOutboundRTPAudioStream_RTTTime,
    showPeerConnectionsRTCOutboundRTPVideoStream_BytesSentTime,
    showPeerConnectionsRTCOutboundRTPVideoStream_FrameHeightTime,
    showPeerConnectionsRTCOutboundRTPVideoStream_FramesEncodedTime,
    showPeerConnectionsRTCOutboundRTPVideoStream_FramesPerSecondTime,
    showPeerConnectionsRTCOutboundRTPVideoStream_FramsWidthTime,
    showPeerConnectionsRTCOutboundRTPVideoStream_PacketSentTime,
    showPeerConnectionsRTCOutboundRTPVideoStream_RTTTime,
  
  }=useContext(ContextRTC)
  const [PeerConnectionsRTCOutboundRTPAudioStream_RTTMin,setPeerConnectionsRTCOutboundRTPAudioStream_RTTMin]=showPeerConnectionsRTCOutboundRTPAudioStream_RTTMin
const [PeerConnectionsRTCOutboundRTPAudioStream_RTTAvg,setPeerConnectionsRTCOutboundRTPAudioStream_RTTAvg]=showPeerConnectionsRTCOutboundRTPAudioStream_RTTAvg
const [PeerConnectionsRTCOutboundRTPAudioStream_RTTMax,setPeerConnectionsRTCOutboundRTPAudioStream_RTTMax]=showPeerConnectionsRTCOutboundRTPAudioStream_RTTMax
  const [PeerConnectionsRTCOutboundRTPAudioStream_RTTTime,setPeerConnectionsRTCOutboundRTPAudioStream_RTTTime]=showPeerConnectionsRTCOutboundRTPAudioStream_RTTTime
  let MinArr=[]
  let AvgArr=[]
  let MaxArr=[]
  let index=0
  let strTag=[]
  PeerConnectionsRTCOutboundRTPAudioStream_RTTTime.map((data)=>{
    MinArr.push({x:data,y:PeerConnectionsRTCOutboundRTPAudioStream_RTTMin[index].toFixed(2)})
    AvgArr.push({x:data,y:PeerConnectionsRTCOutboundRTPAudioStream_RTTAvg[index].toFixed(2)})
    MaxArr.push({x:data,y:PeerConnectionsRTCOutboundRTPAudioStream_RTTMax[index].toFixed(2)})
    
    strTag.push(
    <tr>
      <td>{data}</td>
      <td>{PeerConnectionsRTCOutboundRTPAudioStream_RTTMax[index].toFixed(2)}</td>
      <td>{PeerConnectionsRTCOutboundRTPAudioStream_RTTAvg[index].toFixed(2)}</td>
      <td>{PeerConnectionsRTCOutboundRTPAudioStream_RTTMin[index].toFixed(2)}</td>
    </tr>)
index++;
  }) 

    return (
    <div>
        <h2 style={{backgroundColor:"purple",color:"white",height:"2vw"}}>PeerConnectionsRTCOutboundRTPAudioStream_RTT</h2>
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
export default PeerConnectionsRTCOutboundRTPAudioStream_RTT

