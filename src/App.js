
import React, { useState, useEffect,useContext } from "react";
import { RTC_Parser } from './JSONParser';
import { dateFormatter } from './dateConverter';
import PeerConnectionsRTCInboundRTPAudioStream_BytesReceived from "./views/PeerConnectionsRTCInboundRTPAudioStream_BytesReceived";
import PeerConnectionsRTCInboundRTPAudioStream_Jitter from "./views/PeerConnectionsRTCInboundRTPAudioStream_Jitter";
import PeerConnectionsRTCInboundRTPAudioStream_PacketsLost from "./views/PeerConnectionsRTCInboundRTPAudioStream_PacketsLost";
import PeerConnectionsRTCInboundRTPVideoStream_PacketsReceived from "./views/PeerConnectionsRTCInboundRTPVideoStream_PacketsReceived";
import PeerConnectionsRTCInboundRTPAudioStream_PacketsReceived from "./views/PeerConnectionsRTCInboundRTPAudioStream_PacketsReceived";
import PeerConnectionsRTCInboundRTPVideoStream_BytesReceived from "./views/PeerConnectionsRTCInboundRTPVideoStream_BytesReceived";
import PeerConnectionsRTCInboundRTPVideoStream_FrameHeight from "./views/PeerConnectionsRTCInboundRTPVideoStream_FrameHeight";
import PeerConnectionsRTCInboundRTPVideoStream_FramesDecoded from "./views/PeerConnectionsRTCInboundRTPVideoStream_FramesDecoded";
import PeerConnectionsRTCInboundRTPVideoStream_FramesPerSecond from "./views/PeerConnectionsRTCInboundRTPVideoStream_FramesPerSecond";
import PeerConnectionsRTCInboundRTPVideoStream_FrameWidth from "./views/PeerConnectionsRTCInboundRTPVideoStream_FrameWidth";
import PeerConnectionsRTCInboundRTPVideoStream_Jitter from "./views/PeerConnectionsRTCInboundRTPVideoStream_Jitter";
import PeerConnectionsRTCInboundRTPVideoStream_PacketsLost from "./views/PeerConnectionsRTCInboundRTPVideoStream_PacketsLost";
import PeerConnectionsRTCOutboundRTPAudioStream_BytesSent from "./views/PeerConnectionsRTCOutboundRTPAudioStream_BytesSent";
import PeerConnectionsRTCOutboundRTPAudioStream_PacketSent from "./views/PeerConnectionsRTCOutboundRTPAudioStream_PacketSent";
import PeerConnectionsRTCOutboundRTPAudioStream_RTT from "./views/PeerConnectionsRTCOutboundRTPAudioStream_RTT";
import PeerConnectionsRTCOutboundRTPVideoStream_BytesSent from "./views/PeerConnectionsRTCOutboundRTPVideoStream_BytesSent";
import PeerConnectionsRTCOutboundRTPVideoStream_FrameHeight from "./views/PeerConnectionsRTCOutboundRTPVideoStream_FrameHeight";
import PeerConnectionsRTCOutboundRTPVideoStream_FramesEncoded from "./views/PeerConnectionsRTCOutboundRTPVideoStream_FramesEncoded";
import PeerConnectionsRTCOutboundRTPVideoStream_FramesPerSecond from "./views/PeerConnectionsRTCOutboundRTPVideoStream_FramesPerSecond";
import PeerConnectionsRTCOutboundRTPVideoStream_FramsWidth from "./views/PeerConnectionsRTCOutboundRTPVideoStream_FramsWidth";
import PeerConnectionsRTCOutboundRTPVideoStream_PacketSent from "./views/PeerConnectionsRTCOutboundRTPVideoStream_PacketSent";
import PeerConnectionsRTCOutboundRTPVideoStream_RTT from "./views/PeerConnectionsRTCOutboundRTPVideoStream_RTT";
import "./AppCSS.css"
import {RTCContextAPI} from "./config/contextAPI"


function App() {
  const {myFile}=useContext(RTCContextAPI)
  const [myFileContent, setMyFileContent]=myFile
return(
  <div class="grid">
    
      <div class="item"><PeerConnectionsRTCInboundRTPAudioStream_BytesReceived/></div>
      <div class="item"><PeerConnectionsRTCInboundRTPAudioStream_Jitter/></div>
      <div class="item"><PeerConnectionsRTCInboundRTPAudioStream_PacketsLost/></div>
      <div class="item"><PeerConnectionsRTCInboundRTPAudioStream_PacketsReceived/></div>
      <div class="item"><PeerConnectionsRTCInboundRTPVideoStream_FrameHeight/></div>
      <div class="item"><PeerConnectionsRTCInboundRTPVideoStream_FramesDecoded/></div>
      <div class="item"><PeerConnectionsRTCInboundRTPVideoStream_FramesPerSecond/></div>
      <div class="item"><PeerConnectionsRTCInboundRTPVideoStream_FrameWidth/></div>
      <div class="item"><PeerConnectionsRTCInboundRTPVideoStream_Jitter/></div>
      <div class="item"><PeerConnectionsRTCInboundRTPVideoStream_PacketsLost/></div>
      <div class="item"><PeerConnectionsRTCInboundRTPVideoStream_PacketsReceived/></div>
      <div class="item"><PeerConnectionsRTCOutboundRTPAudioStream_BytesSent/></div>
      <div class="item"><PeerConnectionsRTCOutboundRTPAudioStream_PacketSent/></div>
      <div class="item"><PeerConnectionsRTCOutboundRTPAudioStream_RTT/></div>
      <div class="item"><PeerConnectionsRTCOutboundRTPVideoStream_BytesSent/></div>
      <div class="item"><PeerConnectionsRTCOutboundRTPVideoStream_FrameHeight/></div>
      <div class="item"><PeerConnectionsRTCOutboundRTPVideoStream_FramesEncoded/></div>
      <div class="item"><PeerConnectionsRTCOutboundRTPVideoStream_FramesPerSecond/></div>
      <div class="item"><PeerConnectionsRTCOutboundRTPVideoStream_FramsWidth/></div>
      <div class="item"><PeerConnectionsRTCOutboundRTPVideoStream_PacketSent/></div>
      <div class="item"><PeerConnectionsRTCOutboundRTPVideoStream_RTT/></div>



  </div>
);


//   const showFile = () => {
//     if (window.File && window.FileReader && window.FileList && window.Blob) {
//          var file = document.querySelector('input[type=file]').files[0];
//          var reader = new FileReader()

//          var textFile = /text.*/;

//          if (file.type.match(textFile)) {
//             reader.onload = function (event) {    
//               let myStr = JSON.parse(event.target.result)
//               let obj=RTC_Parser(myStr)
//               let myArr=obj["PeerConnectionsRTCOutboundRTPVideoStream_RTT"]["values"].substring(1,obj["PeerConnectionsRTCOutboundRTPVideoStream_RTT"]["values"].length-1).split(",").slice(1).map((i) => Number(i))
//               let maxVal=Math.max(...myArr)
//               let minVal=Math.min(...myArr)
//               let avgVal=myArr.reduce((a, b) => (a + b))/myArr.length;
//               let dateHours=dateFormatter(obj["PeerConnectionsRTCOutboundRTPVideoStream_RTT"]["startTime"])
//               let data=[]

            
//               let obj2={}
//               obj2["x"]=dateHours[1]
//               obj2["y"]=maxVal+""
//               let obj3={}
//               obj3["x"]=dateHours[1]
//               obj3["y"]=(maxVal+1)+""
              
//               let data2=[]
//               data2.push(obj3)
//               data.push(obj2)
//               setGraphStateRTTAvg(data2)
//               setGraphStateRTTMin(data)
//               setGraphStateRTTMax(data)
//               console.log(data)
//               // preview.innerHTML = "xzcs"
//             }
//          }
//          reader.readAsText(file);

//    } else {
//       alert("Your browser is too old to support HTML5 File API");
//    }
//   }
//   return (
// <div style={{"height" : "15vw", "width" : "15vw"}}>
// <VictoryChart
//   theme={VictoryTheme.material}
// >
//   <VictoryLine
//     style={{
//       data: { stroke: "#c43a31" },
//       parent: { border: "1px solid #ccc"}

//     }}
//     data={graphStateRTTAvg}
//   />
//     <VictoryLine
//     style={{
//       data: { stroke: "#c43a31" },
//       parent: { border: "1px solid #ccc"}

//     }}
//     data={graphStateRTTMin}
//   />
//       <VictoryLine
//     style={{
//       data: { stroke: "#c43a31" },
//       parent: { border: "1px solid #ccc"}

//     }}
//     data={graphStateRTTMax}
//   />
// </VictoryChart>
// <input type="file" onChange={()=>upload()} multiple/>
//         <div id="show-text">Choose text File</div>
// </div>
//   );
// }
}


export default App;
