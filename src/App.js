
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
import {ContextRTC} from "./config/contextAPI"


function App() {
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
    showPeerConnectionsRTCInboundRTPVideoStream_BytesReceivedTime,
    showPeerConnectionsRTCInboundRTPVideoStream_BytesReceivedMin,
showPeerConnectionsRTCInboundRTPVideoStream_BytesReceivedAvg,
showPeerConnectionsRTCInboundRTPVideoStream_BytesReceivedMax
  }=useContext(ContextRTC)
  
  const [fileUploaded,setFileUploaded]=useState(false)


  const [PeerConnectionsRTCInboundRTPAudioStream_BytesReceivedTime,setPeerConnectionsRTCInboundRTPAudioStream_BytesReceivedTime]=showPeerConnectionsRTCInboundRTPAudioStream_BytesReceivedTime
  const [PeerConnectionsRTCInboundRTPAudioStream_JitterTime,setPeerConnectionsRTCInboundRTPAudioStream_JitterTime]=showPeerConnectionsRTCInboundRTPAudioStream_JitterTime
  const [PeerConnectionsRTCInboundRTPAudioStream_PacketsLostTime,setPeerConnectionsRTCInboundRTPAudioStream_PacketsLostTime]=showPeerConnectionsRTCInboundRTPAudioStream_PacketsLostTime
  const [PeerConnectionsRTCInboundRTPAudioStream_PacketsReceivedTime,setPeerConnectionsRTCInboundRTPAudioStream_PacketsReceivedTime]=showPeerConnectionsRTCInboundRTPAudioStream_PacketsReceivedTime
  const [PeerConnectionsRTCInboundRTPVideoStream_FrameHeightTime,setPeerConnectionsRTCInboundRTPVideoStream_FrameHeightTime]=showPeerConnectionsRTCInboundRTPVideoStream_FrameHeightTime
  const [PeerConnectionsRTCInboundRTPVideoStream_FramesDecodedTime,setPeerConnectionsRTCInboundRTPVideoStream_FramesDecodedTime]=showPeerConnectionsRTCInboundRTPVideoStream_FramesDecodedTime
  const [PeerConnectionsRTCInboundRTPVideoStream_FramesPerSecondTime,setPeerConnectionsRTCInboundRTPVideoStream_FramesPerSecondTime]=showPeerConnectionsRTCInboundRTPVideoStream_FramesPerSecondTime
  const [PeerConnectionsRTCInboundRTPVideoStream_FrameWidthTime,setPeerConnectionsRTCInboundRTPVideoStream_FrameWidthTime]=showPeerConnectionsRTCInboundRTPVideoStream_FrameWidthTime
  const [PeerConnectionsRTCInboundRTPVideoStream_JitterTime,setPeerConnectionsRTCInboundRTPVideoStream_JitterTime]=showPeerConnectionsRTCInboundRTPVideoStream_JitterTime
  const [PeerConnectionsRTCInboundRTPVideoStream_PacketsLostTime,setPeerConnectionsRTCInboundRTPVideoStream_PacketsLostTime]=showPeerConnectionsRTCInboundRTPVideoStream_PacketsLostTime
  const [PeerConnectionsRTCInboundRTPVideoStream_PacketsReceivedTime,setPeerConnectionsRTCInboundRTPVideoStream_PacketsReceivedTime]=showPeerConnectionsRTCInboundRTPVideoStream_PacketsReceivedTime
  const [PeerConnectionsRTCOutboundRTPAudioStream_BytesSentTime,setPeerConnectionsRTCOutboundRTPAudioStream_BytesSentTime]=showPeerConnectionsRTCOutboundRTPAudioStream_BytesSentTime
  const [PeerConnectionsRTCOutboundRTPAudioStream_PacketSentTime,setPeerConnectionsRTCOutboundRTPAudioStream_PacketSentTime]=showPeerConnectionsRTCOutboundRTPAudioStream_PacketSentTime
  const [PeerConnectionsRTCOutboundRTPAudioStream_RTTTime,setPeerConnectionsRTCOutboundRTPAudioStream_RTTTime]=showPeerConnectionsRTCOutboundRTPAudioStream_RTTTime
  const [PeerConnectionsRTCOutboundRTPVideoStream_BytesSentTime,setPeerConnectionsRTCOutboundRTPVideoStream_BytesSentTime]=showPeerConnectionsRTCOutboundRTPVideoStream_BytesSentTime
  const [PeerConnectionsRTCOutboundRTPVideoStream_FrameHeightTime,setPeerConnectionsRTCOutboundRTPVideoStream_FrameHeightTime]=showPeerConnectionsRTCOutboundRTPVideoStream_FrameHeightTime
  const [PeerConnectionsRTCOutboundRTPVideoStream_FramesEncodedTime,setPeerConnectionsRTCOutboundRTPVideoStream_FramesEncodedTime]=showPeerConnectionsRTCOutboundRTPVideoStream_FramesEncodedTime
  const [PeerConnectionsRTCOutboundRTPVideoStream_FramesPerSecondTime,setPeerConnectionsRTCOutboundRTPVideoStream_FramesPerSecondTime]=showPeerConnectionsRTCOutboundRTPVideoStream_FramesPerSecondTime
  const [PeerConnectionsRTCOutboundRTPVideoStream_FramsWidthTime,setPeerConnectionsRTCOutboundRTPVideoStream_FramsWidthTime]=showPeerConnectionsRTCOutboundRTPVideoStream_FramsWidthTime
  const [PeerConnectionsRTCOutboundRTPVideoStream_PacketSentTime,setPeerConnectionsRTCOutboundRTPVideoStream_PacketSentTime]=showPeerConnectionsRTCOutboundRTPVideoStream_PacketSentTime
  const [PeerConnectionsRTCOutboundRTPVideoStream_RTTTime,setPeerConnectionsRTCOutboundRTPVideoStream_RTTTime]=showPeerConnectionsRTCOutboundRTPVideoStream_RTTTime


  const [PeerConnectionsRTCInboundRTPAudioStream_BytesReceivedMin,setPeerConnectionsRTCInboundRTPAudioStream_BytesReceivedMin]=showPeerConnectionsRTCInboundRTPAudioStream_BytesReceivedMin
const [PeerConnectionsRTCInboundRTPAudioStream_BytesReceivedAvg,setPeerConnectionsRTCInboundRTPAudioStream_BytesReceivedAvg]=showPeerConnectionsRTCInboundRTPAudioStream_BytesReceivedAvg
const [PeerConnectionsRTCInboundRTPAudioStream_BytesReceivedMax,setPeerConnectionsRTCInboundRTPAudioStream_BytesReceivedMax]=showPeerConnectionsRTCInboundRTPAudioStream_BytesReceivedMax
const [PeerConnectionsRTCInboundRTPAudioStream_JitterMin,setPeerConnectionsRTCInboundRTPAudioStream_JitterMin]=showPeerConnectionsRTCInboundRTPAudioStream_JitterMin
const [PeerConnectionsRTCInboundRTPAudioStream_JitterAvg,setPeerConnectionsRTCInboundRTPAudioStream_JitterAvg]=showPeerConnectionsRTCInboundRTPAudioStream_JitterAvg
const [PeerConnectionsRTCInboundRTPAudioStream_JitterMax,setPeerConnectionsRTCInboundRTPAudioStream_JitterMax]=showPeerConnectionsRTCInboundRTPAudioStream_JitterMax
const [PeerConnectionsRTCInboundRTPAudioStream_PacketsLostMin,setPeerConnectionsRTCInboundRTPAudioStream_PacketsLostMin]=showPeerConnectionsRTCInboundRTPAudioStream_PacketsLostMin
const [PeerConnectionsRTCInboundRTPAudioStream_PacketsLostAvg,setPeerConnectionsRTCInboundRTPAudioStream_PacketsLostAvg]=showPeerConnectionsRTCInboundRTPAudioStream_PacketsLostAvg
const [PeerConnectionsRTCInboundRTPAudioStream_PacketsLostMax,setPeerConnectionsRTCInboundRTPAudioStream_PacketsLostMax]=showPeerConnectionsRTCInboundRTPAudioStream_PacketsLostMax
const [PeerConnectionsRTCInboundRTPAudioStream_PacketsReceivedMin,setPeerConnectionsRTCInboundRTPAudioStream_PacketsReceivedMin]=showPeerConnectionsRTCInboundRTPAudioStream_PacketsReceivedMin
const [PeerConnectionsRTCInboundRTPAudioStream_PacketsReceivedAvg,setPeerConnectionsRTCInboundRTPAudioStream_PacketsReceivedAvg]=showPeerConnectionsRTCInboundRTPAudioStream_PacketsReceivedAvg
const [PeerConnectionsRTCInboundRTPAudioStream_PacketsReceivedMax,setPeerConnectionsRTCInboundRTPAudioStream_PacketsReceivedMax]=showPeerConnectionsRTCInboundRTPAudioStream_PacketsReceivedMax
const [PeerConnectionsRTCInboundRTPVideoStream_FrameHeightMin,setPeerConnectionsRTCInboundRTPVideoStream_FrameHeightMin]=showPeerConnectionsRTCInboundRTPVideoStream_FrameHeightMin
const [PeerConnectionsRTCInboundRTPVideoStream_FrameHeightAvg,setPeerConnectionsRTCInboundRTPVideoStream_FrameHeightAvg]=showPeerConnectionsRTCInboundRTPVideoStream_FrameHeightAvg
const [PeerConnectionsRTCInboundRTPVideoStream_FrameHeightMax,setPeerConnectionsRTCInboundRTPVideoStream_FrameHeightMax]=showPeerConnectionsRTCInboundRTPVideoStream_FrameHeightMax
const [PeerConnectionsRTCInboundRTPVideoStream_FramesDecodedMin,setPeerConnectionsRTCInboundRTPVideoStream_FramesDecodedMin]=showPeerConnectionsRTCInboundRTPVideoStream_FramesDecodedMin
const [PeerConnectionsRTCInboundRTPVideoStream_FramesDecodedAvg,setPeerConnectionsRTCInboundRTPVideoStream_FramesDecodedAvg]=showPeerConnectionsRTCInboundRTPVideoStream_FramesDecodedAvg
const [PeerConnectionsRTCInboundRTPVideoStream_FramesDecodedMax,setPeerConnectionsRTCInboundRTPVideoStream_FramesDecodedMax]=showPeerConnectionsRTCInboundRTPVideoStream_FramesDecodedMax
const [PeerConnectionsRTCInboundRTPVideoStream_FramesPerSecondMin,setPeerConnectionsRTCInboundRTPVideoStream_FramesPerSecondMin]=showPeerConnectionsRTCInboundRTPVideoStream_FramesPerSecondMin
const [PeerConnectionsRTCInboundRTPVideoStream_FramesPerSecondAvg,setPeerConnectionsRTCInboundRTPVideoStream_FramesPerSecondAvg]=showPeerConnectionsRTCInboundRTPVideoStream_FramesPerSecondAvg
const [PeerConnectionsRTCInboundRTPVideoStream_FramesPerSecondMax,setPeerConnectionsRTCInboundRTPVideoStream_FramesPerSecondMax]=showPeerConnectionsRTCInboundRTPVideoStream_FramesPerSecondMax
const [PeerConnectionsRTCInboundRTPVideoStream_FrameWidthMin,setPeerConnectionsRTCInboundRTPVideoStream_FrameWidthMin]=showPeerConnectionsRTCInboundRTPVideoStream_FrameWidthMin
const [PeerConnectionsRTCInboundRTPVideoStream_FrameWidthAvg,setPeerConnectionsRTCInboundRTPVideoStream_FrameWidthAvg]
=showPeerConnectionsRTCInboundRTPVideoStream_FrameWidthAvg
const [PeerConnectionsRTCInboundRTPVideoStream_FrameWidthMax,setPeerConnectionsRTCInboundRTPVideoStream_FrameWidthMax]=showPeerConnectionsRTCInboundRTPVideoStream_FrameWidthMax
const [PeerConnectionsRTCInboundRTPVideoStream_JitterMin,setPeerConnectionsRTCInboundRTPVideoStream_JitterMin]=showPeerConnectionsRTCInboundRTPVideoStream_JitterMin
const [PeerConnectionsRTCInboundRTPVideoStream_JitterAvg,setPeerConnectionsRTCInboundRTPVideoStream_JitterAvg]=showPeerConnectionsRTCInboundRTPVideoStream_JitterAvg
const [PeerConnectionsRTCInboundRTPVideoStream_JitterMax,setPeerConnectionsRTCInboundRTPVideoStream_JitterMax]=showPeerConnectionsRTCInboundRTPVideoStream_JitterMax
const [PeerConnectionsRTCInboundRTPVideoStream_PacketsLostMin,setPeerConnectionsRTCInboundRTPVideoStream_PacketsLostMin]=showPeerConnectionsRTCInboundRTPVideoStream_PacketsLostMin
const [PeerConnectionsRTCInboundRTPVideoStream_PacketsLostAvg,setPeerConnectionsRTCInboundRTPVideoStream_PacketsLostAvg]=showPeerConnectionsRTCInboundRTPVideoStream_PacketsLostAvg
const [PeerConnectionsRTCInboundRTPVideoStream_PacketsLostMax,setPeerConnectionsRTCInboundRTPVideoStream_PacketsLostMax]=showPeerConnectionsRTCInboundRTPVideoStream_PacketsLostMax
const [PeerConnectionsRTCInboundRTPVideoStream_PacketsReceivedMin,setPeerConnectionsRTCInboundRTPVideoStream_PacketsReceivedMin]=showPeerConnectionsRTCInboundRTPVideoStream_PacketsReceivedMin
const [PeerConnectionsRTCInboundRTPVideoStream_PacketsReceivedAvg,setPeerConnectionsRTCInboundRTPVideoStream_PacketsReceivedAvg]=showPeerConnectionsRTCInboundRTPVideoStream_PacketsReceivedAvg
const [PeerConnectionsRTCInboundRTPVideoStream_PacketsReceivedMax,setPeerConnectionsRTCInboundRTPVideoStream_PacketsReceivedMax]=showPeerConnectionsRTCInboundRTPVideoStream_PacketsReceivedMax
const [PeerConnectionsRTCOutboundRTPAudioStream_BytesSentMin,setPeerConnectionsRTCOutboundRTPAudioStream_BytesSentMin]=showPeerConnectionsRTCOutboundRTPAudioStream_BytesSentMin
const [PeerConnectionsRTCOutboundRTPAudioStream_BytesSentAvg,setPeerConnectionsRTCOutboundRTPAudioStream_BytesSentAvg]=showPeerConnectionsRTCOutboundRTPAudioStream_BytesSentAvg
const [PeerConnectionsRTCOutboundRTPAudioStream_BytesSentMax,setPeerConnectionsRTCOutboundRTPAudioStream_BytesSentMax]=showPeerConnectionsRTCOutboundRTPAudioStream_BytesSentMax
const [PeerConnectionsRTCOutboundRTPAudioStream_PacketSentMin,setPeerConnectionsRTCOutboundRTPAudioStream_PacketSentMin]=showPeerConnectionsRTCOutboundRTPAudioStream_PacketSentMin
const [PeerConnectionsRTCOutboundRTPAudioStream_PacketSentAvg,setPeerConnectionsRTCOutboundRTPAudioStream_PacketSentAvg]=showPeerConnectionsRTCOutboundRTPAudioStream_PacketSentAvg
const [PeerConnectionsRTCOutboundRTPAudioStream_PacketSentMax,setPeerConnectionsRTCOutboundRTPAudioStream_PacketSentMax]=showPeerConnectionsRTCOutboundRTPAudioStream_PacketSentMax
const [PeerConnectionsRTCOutboundRTPAudioStream_RTTMin,setPeerConnectionsRTCOutboundRTPAudioStream_RTTMin]=showPeerConnectionsRTCOutboundRTPAudioStream_RTTMin
const [PeerConnectionsRTCOutboundRTPAudioStream_RTTAvg,setPeerConnectionsRTCOutboundRTPAudioStream_RTTAvg]=showPeerConnectionsRTCOutboundRTPAudioStream_RTTAvg
const [PeerConnectionsRTCOutboundRTPAudioStream_RTTMax,setPeerConnectionsRTCOutboundRTPAudioStream_RTTMax]=showPeerConnectionsRTCOutboundRTPAudioStream_RTTMax
const [PeerConnectionsRTCOutboundRTPVideoStream_BytesSentMin,setPeerConnectionsRTCOutboundRTPVideoStream_BytesSentMin]=showPeerConnectionsRTCOutboundRTPVideoStream_BytesSentMin
const [PeerConnectionsRTCOutboundRTPVideoStream_BytesSentAvg,setPeerConnectionsRTCOutboundRTPVideoStream_BytesSentAvg]=showPeerConnectionsRTCOutboundRTPVideoStream_BytesSentAvg
const [PeerConnectionsRTCOutboundRTPVideoStream_BytesSentMax,setPeerConnectionsRTCOutboundRTPVideoStream_BytesSentMax]=showPeerConnectionsRTCOutboundRTPVideoStream_BytesSentMax
const [PeerConnectionsRTCOutboundRTPVideoStream_FrameHeightMin,setPeerConnectionsRTCOutboundRTPVideoStream_FrameHeightMin]=showPeerConnectionsRTCOutboundRTPVideoStream_FrameHeightMin
const [PeerConnectionsRTCOutboundRTPVideoStream_FrameHeightAvg,setPeerConnectionsRTCOutboundRTPVideoStream_FrameHeightAvg]=showPeerConnectionsRTCOutboundRTPVideoStream_FrameHeightAvg
const [PeerConnectionsRTCOutboundRTPVideoStream_FrameHeightMax,setPeerConnectionsRTCOutboundRTPVideoStream_FrameHeightMax]=showPeerConnectionsRTCOutboundRTPVideoStream_FrameHeightMax
const [PeerConnectionsRTCOutboundRTPVideoStream_FramesEncodedMin,setPeerConnectionsRTCOutboundRTPVideoStream_FramesEncodedMin]=showPeerConnectionsRTCOutboundRTPVideoStream_FramesEncodedMin
const [PeerConnectionsRTCOutboundRTPVideoStream_FramesEncodedAvg,setPeerConnectionsRTCOutboundRTPVideoStream_FramesEncodedAvg]=showPeerConnectionsRTCOutboundRTPVideoStream_FramesEncodedAvg
const [PeerConnectionsRTCOutboundRTPVideoStream_FramesEncodedMax,setPeerConnectionsRTCOutboundRTPVideoStream_FramesEncodedMax]=showPeerConnectionsRTCOutboundRTPVideoStream_FramesEncodedMax
const [PeerConnectionsRTCOutboundRTPVideoStream_FramesPerSecondMin,setPeerConnectionsRTCOutboundRTPVideoStream_FramesPerSecondMin]=showPeerConnectionsRTCOutboundRTPVideoStream_FramesPerSecondMin
const [PeerConnectionsRTCOutboundRTPVideoStream_FramesPerSecondAvg,setPeerConnectionsRTCOutboundRTPVideoStream_FramesPerSecondAvg]=showPeerConnectionsRTCOutboundRTPVideoStream_FramesPerSecondAvg
const [PeerConnectionsRTCOutboundRTPVideoStream_FramesPerSecondMax,setPeerConnectionsRTCOutboundRTPVideoStream_FramesPerSecondMax]=showPeerConnectionsRTCOutboundRTPVideoStream_FramesPerSecondMax
const [PeerConnectionsRTCOutboundRTPVideoStream_FramsWidthMin,setPeerConnectionsRTCOutboundRTPVideoStream_FramsWidthMin]=showPeerConnectionsRTCOutboundRTPVideoStream_FramsWidthMin
const [PeerConnectionsRTCOutboundRTPVideoStream_FramsWidthAvg,setPeerConnectionsRTCOutboundRTPVideoStream_FramsWidthAvg]=showPeerConnectionsRTCOutboundRTPVideoStream_FramsWidthAvg
const [PeerConnectionsRTCOutboundRTPVideoStream_FramsWidthMax,setPeerConnectionsRTCOutboundRTPVideoStream_FramsWidthMax]=showPeerConnectionsRTCOutboundRTPVideoStream_FramsWidthMax
const [PeerConnectionsRTCOutboundRTPVideoStream_PacketSentMin,setPeerConnectionsRTCOutboundRTPVideoStream_PacketSentMin]=showPeerConnectionsRTCOutboundRTPVideoStream_PacketSentMin
const [PeerConnectionsRTCOutboundRTPVideoStream_PacketSentAvg,setPeerConnectionsRTCOutboundRTPVideoStream_PacketSentAvg]=showPeerConnectionsRTCOutboundRTPVideoStream_PacketSentAvg
const [PeerConnectionsRTCOutboundRTPVideoStream_PacketSentMax,setPeerConnectionsRTCOutboundRTPVideoStream_PacketSentMax]=showPeerConnectionsRTCOutboundRTPVideoStream_PacketSentMax
const [PeerConnectionsRTCOutboundRTPVideoStream_RTTMin,setPeerConnectionsRTCOutboundRTPVideoStream_RTTMin]=showPeerConnectionsRTCOutboundRTPVideoStream_RTTMin
const [PeerConnectionsRTCOutboundRTPVideoStream_RTTAvg,setPeerConnectionsRTCOutboundRTPVideoStream_RTTAvg]=showPeerConnectionsRTCOutboundRTPVideoStream_RTTAvg
const [PeerConnectionsRTCOutboundRTPVideoStream_RTTMax,setPeerConnectionsRTCOutboundRTPVideoStream_RTTMax]=showPeerConnectionsRTCOutboundRTPVideoStream_RTTMax
const [PeerConnectionsRTCInboundRTPVideoStream_BytesReceivedMin,setPeerConnectionsRTCInboundRTPVideoStream_BytesReceivedMin]= showPeerConnectionsRTCInboundRTPVideoStream_BytesReceivedMin
const [PeerConnectionsRTCInboundRTPVideoStream_BytesReceivedAvg,setPeerConnectionsRTCInboundRTPVideoStream_BytesReceivedAvg]=showPeerConnectionsRTCInboundRTPVideoStream_BytesReceivedAvg
const [PeerConnectionsRTCInboundRTPVideoStream_BytesReceivedMax,setPeerConnectionsRTCInboundRTPVideoStream_BytesReceivedMax]= showPeerConnectionsRTCInboundRTPVideoStream_BytesReceivedMax
const [PeerConnectionsRTCInboundRTPVideoStream_BytesReceivedTime,setPeerConnectionsRTCInboundRTPVideoStream_BytesReceivedTime]= showPeerConnectionsRTCInboundRTPVideoStream_BytesReceivedTime

async function readFileAsData(file) {
  let result_base64 = await new Promise((resolve) => {
      let fileReader = new FileReader();
      fileReader.onload = (e) => resolve(fileReader.result);
      fileReader.readAsText(file);
  });

  return result_base64;
}

  const fileUploder = async(e)=>{
    let k=[]
  /// Bunu stajer yazdı lütfen değiştirmeden önce pis testciye sorun
   await Promise.all(Array.from(e.target.files).map (async(file) =>{
      let data=await readFileAsData(file)
      k.push(data)
    }))
    let ArrPeerConnectionsRTCInboundRTPAudioStream_BytesReceivedMin=[]
    let ArrPeerConnectionsRTCInboundRTPAudioStream_BytesReceivedAvg=[]
    let ArrPeerConnectionsRTCInboundRTPAudioStream_BytesReceivedMax=[]
    let ArrPeerConnectionsRTCInboundRTPAudioStream_BytesReceivedTime=[]
    let ArrPeerConnectionsRTCInboundRTPAudioStream_JitterMin=[]
    let ArrPeerConnectionsRTCInboundRTPAudioStream_JitterAvg=[]
    let ArrPeerConnectionsRTCInboundRTPAudioStream_JitterMax=[]
    let ArrPeerConnectionsRTCInboundRTPAudioStream_JitterTime=[]
    let ArrPeerConnectionsRTCInboundRTPAudioStream_PacketsLostMin=[]
    let ArrPeerConnectionsRTCInboundRTPAudioStream_PacketsLostAvg=[]
    let ArrPeerConnectionsRTCInboundRTPAudioStream_PacketsLostMax=[]
    let ArrPeerConnectionsRTCInboundRTPAudioStream_PacketsLostTime=[]
    let ArrPeerConnectionsRTCInboundRTPAudioStream_PacketsReceivedMin=[]
    let ArrPeerConnectionsRTCInboundRTPAudioStream_PacketsReceivedAvg=[]
    let ArrPeerConnectionsRTCInboundRTPAudioStream_PacketsReceivedMax=[]
    let ArrPeerConnectionsRTCInboundRTPAudioStream_PacketsReceivedTime=[]
    let ArrPeerConnectionsRTCInboundRTPVideoStream_FrameHeightMin=[]
    let ArrPeerConnectionsRTCInboundRTPVideoStream_FrameHeightAvg=[]
    let ArrPeerConnectionsRTCInboundRTPVideoStream_FrameHeightMax=[]
    let ArrPeerConnectionsRTCInboundRTPVideoStream_FrameHeightTime=[]
    let ArrPeerConnectionsRTCInboundRTPVideoStream_FramesDecodedMin=[]
    let ArrPeerConnectionsRTCInboundRTPVideoStream_FramesDecodedAvg=[]
    let ArrPeerConnectionsRTCInboundRTPVideoStream_FramesDecodedMax=[]
    let ArrPeerConnectionsRTCInboundRTPVideoStream_FramesDecodedTime=[]
    let ArrPeerConnectionsRTCInboundRTPVideoStream_FramesPerSecondMin=[]
    let ArrPeerConnectionsRTCInboundRTPVideoStream_FramesPerSecondAvg=[]
    let ArrPeerConnectionsRTCInboundRTPVideoStream_FramesPerSecondMax=[]
    let ArrPeerConnectionsRTCInboundRTPVideoStream_FramesPerSecondTime=[]
    let ArrPeerConnectionsRTCInboundRTPVideoStream_FrameWidthMin=[]
    let ArrPeerConnectionsRTCInboundRTPVideoStream_FrameWidthAvg=[]
    let ArrPeerConnectionsRTCInboundRTPVideoStream_FrameWidthMax=[]
    let ArrPeerConnectionsRTCInboundRTPVideoStream_FrameWidthTime=[]
    let ArrPeerConnectionsRTCInboundRTPVideoStream_JitterMin=[]
    let ArrPeerConnectionsRTCInboundRTPVideoStream_JitterAvg=[]
    let ArrPeerConnectionsRTCInboundRTPVideoStream_JitterMax=[]
    let ArrPeerConnectionsRTCInboundRTPVideoStream_JitterTime=[]
    let ArrPeerConnectionsRTCInboundRTPVideoStream_PacketsLostMin=[]
    let ArrPeerConnectionsRTCInboundRTPVideoStream_PacketsLostAvg=[]
    let ArrPeerConnectionsRTCInboundRTPVideoStream_PacketsLostMax=[]
    let ArrPeerConnectionsRTCInboundRTPVideoStream_PacketsLostTime=[]
    let ArrPeerConnectionsRTCInboundRTPVideoStream_PacketsReceivedMin=[]
    let ArrPeerConnectionsRTCInboundRTPVideoStream_PacketsReceivedAvg=[]
    let ArrPeerConnectionsRTCInboundRTPVideoStream_PacketsReceivedMax=[]
    let ArrPeerConnectionsRTCInboundRTPVideoStream_PacketsReceivedTime=[]
    let ArrPeerConnectionsRTCOutboundRTPAudioStream_BytesSentMin=[]
    let ArrPeerConnectionsRTCOutboundRTPAudioStream_BytesSentAvg=[]
    let ArrPeerConnectionsRTCOutboundRTPAudioStream_BytesSentMax=[]
    let ArrPeerConnectionsRTCOutboundRTPAudioStream_BytesSentTime=[]
    let ArrPeerConnectionsRTCOutboundRTPAudioStream_PacketSentMin=[]
    let ArrPeerConnectionsRTCOutboundRTPAudioStream_PacketSentAvg=[]
    let ArrPeerConnectionsRTCOutboundRTPAudioStream_PacketSentMax=[]
    let ArrPeerConnectionsRTCOutboundRTPAudioStream_PacketSentTime=[]
    let ArrPeerConnectionsRTCOutboundRTPAudioStream_RTTMin=[]
    let ArrPeerConnectionsRTCOutboundRTPAudioStream_RTTAvg=[]
    let ArrPeerConnectionsRTCOutboundRTPAudioStream_RTTMax=[]
    let ArrPeerConnectionsRTCOutboundRTPAudioStream_RTTTime=[]
    let ArrPeerConnectionsRTCOutboundRTPVideoStream_BytesSentMin=[]
    let ArrPeerConnectionsRTCOutboundRTPVideoStream_BytesSentAvg=[]
    let ArrPeerConnectionsRTCOutboundRTPVideoStream_BytesSentMax=[]
    let ArrPeerConnectionsRTCOutboundRTPVideoStream_BytesSentTime=[]
    let ArrPeerConnectionsRTCOutboundRTPVideoStream_FrameHeightMin=[]
    let ArrPeerConnectionsRTCOutboundRTPVideoStream_FrameHeightAvg=[]
    let ArrPeerConnectionsRTCOutboundRTPVideoStream_FrameHeightMax=[]
    let ArrPeerConnectionsRTCOutboundRTPVideoStream_FrameHeightTime=[]
    let ArrPeerConnectionsRTCOutboundRTPVideoStream_FramesEncodedMin=[]
    let ArrPeerConnectionsRTCOutboundRTPVideoStream_FramesEncodedAvg=[]
    let ArrPeerConnectionsRTCOutboundRTPVideoStream_FramesEncodedMax=[]
    let ArrPeerConnectionsRTCOutboundRTPVideoStream_FramesEncodedTime=[]
    let ArrPeerConnectionsRTCOutboundRTPVideoStream_FramesPerSecondMin=[]
    let ArrPeerConnectionsRTCOutboundRTPVideoStream_FramesPerSecondAvg=[]
    let ArrPeerConnectionsRTCOutboundRTPVideoStream_FramesPerSecondMax=[]
    let ArrPeerConnectionsRTCOutboundRTPVideoStream_FramesPerSecondTime=[]
    let ArrPeerConnectionsRTCOutboundRTPVideoStream_FramsWidthMin=[]
    let ArrPeerConnectionsRTCOutboundRTPVideoStream_FramsWidthAvg=[]
    let ArrPeerConnectionsRTCOutboundRTPVideoStream_FramsWidthMax=[]
    let ArrPeerConnectionsRTCOutboundRTPVideoStream_FramsWidthTime=[]
    let ArrPeerConnectionsRTCOutboundRTPVideoStream_PacketSentMin=[]
    let ArrPeerConnectionsRTCOutboundRTPVideoStream_PacketSentAvg=[]
    let ArrPeerConnectionsRTCOutboundRTPVideoStream_PacketSentMax=[]
    let ArrPeerConnectionsRTCOutboundRTPVideoStream_PacketSentTime=[]
    let ArrPeerConnectionsRTCOutboundRTPVideoStream_RTTMin=[]
    let ArrPeerConnectionsRTCOutboundRTPVideoStream_RTTAvg=[]
    let ArrPeerConnectionsRTCOutboundRTPVideoStream_RTTMax=[]
    let ArrPeerConnectionsRTCOutboundRTPVideoStream_RTTTime=[]
    let ArrPeerConnectionsRTCInboundRTPVideoStream_BytesReceivedMin=[]
    let ArrPeerConnectionsRTCInboundRTPVideoStream_BytesReceivedMax=[]
    let ArrPeerConnectionsRTCInboundRTPVideoStream_BytesReceivedAvg=[]
    let ArrPeerConnectionsRTCInboundRTPVideoStream_BytesReceivedTime=[]

      k.map((fileData)=>{
        const jsonValues=RTC_Parser(JSON.parse(fileData))
        ////
        ArrPeerConnectionsRTCInboundRTPAudioStream_BytesReceivedTime.push(dateFormatter(jsonValues["PeerConnectionsRTCInboundRTPAudioStream_BytesReceived"]["endTime"])[1])
        let values1=jsonValues["PeerConnectionsRTCInboundRTPAudioStream_BytesReceived"]["values"]
        values1=values1.substring(1,values1.length-1).split(",").slice(1).map((i) => Number(i))
        let maxVal1=Math.max(...values1)
        let minVal1=Math.min(...values1)
        let avgVal1=values1.reduce((a, b) => (a + b))/values1.length;
        ArrPeerConnectionsRTCInboundRTPAudioStream_BytesReceivedMin.push(minVal1)
        ArrPeerConnectionsRTCInboundRTPAudioStream_BytesReceivedAvg.push(avgVal1)
        ArrPeerConnectionsRTCInboundRTPAudioStream_BytesReceivedMax.push(maxVal1)
        
   
        ////
        ArrPeerConnectionsRTCInboundRTPAudioStream_JitterTime.push(dateFormatter(jsonValues["PeerConnectionsRTCInboundRTPAudioStream_Jitter"]["endTime"])[1])
        let values2=jsonValues["PeerConnectionsRTCInboundRTPAudioStream_Jitter"]["values"]
        values2=values2.substring(1,values2.length-1).split(",").slice(1).map((i) => Number(i))
        let maxVal2=Math.max(...values2)
        let minVal2=Math.min(...values2)
        let avgVal2=values2.reduce((a, b) => (a + b))/values2.length;
        ArrPeerConnectionsRTCInboundRTPAudioStream_JitterMin.push(minVal2)
        ArrPeerConnectionsRTCInboundRTPAudioStream_JitterAvg.push(avgVal2)
        ArrPeerConnectionsRTCInboundRTPAudioStream_JitterMax.push(maxVal2)

        ////
        ArrPeerConnectionsRTCInboundRTPAudioStream_PacketsLostTime.push(dateFormatter(jsonValues["PeerConnectionsRTCInboundRTPAudioStream_PacketsLost"]["endTime"])[1])
        let values3=jsonValues["PeerConnectionsRTCInboundRTPAudioStream_PacketsLost"]["values"]
        values3=values3.substring(1,values3.length-1).split(",").slice(1).map((i) => Number(i))
        let maxVal3=Math.max(...values3)
        let minVal3=Math.min(...values3)
        let avgVal3=values3.reduce((a, b) => (a + b))/values3.length;
        ArrPeerConnectionsRTCInboundRTPAudioStream_PacketsLostMin.push(minVal3)
        ArrPeerConnectionsRTCInboundRTPAudioStream_PacketsLostAvg.push(avgVal3)
        ArrPeerConnectionsRTCInboundRTPAudioStream_PacketsLostMax.push(maxVal3)

        ////
        ArrPeerConnectionsRTCInboundRTPAudioStream_PacketsReceivedTime.push(dateFormatter(jsonValues["PeerConnectionsRTCInboundRTPAudioStream_PacketsReceived"]["endTime"])[1])
        let values4=jsonValues["PeerConnectionsRTCInboundRTPAudioStream_PacketsReceived"]["values"]
        values4=values4.substring(1,values4.length-1).split(",").slice(1).map((i) => Number(i))
        let maxVal4=Math.max(...values4)
        let minVal4=Math.min(...values4)
        let avgVal4=values4.reduce((a, b) => (a + b))/values4.length;
        ArrPeerConnectionsRTCInboundRTPAudioStream_PacketsReceivedMin.push(minVal4)
        ArrPeerConnectionsRTCInboundRTPAudioStream_PacketsReceivedAvg.push(avgVal4)
        ArrPeerConnectionsRTCInboundRTPAudioStream_PacketsReceivedMax.push(maxVal4)

        ////
        ArrPeerConnectionsRTCInboundRTPVideoStream_FrameHeightTime.push(dateFormatter(jsonValues["PeerConnectionsRTCInboundRTPVideoStream_FrameHeight"]["endTime"])[1])
        let values5=jsonValues["PeerConnectionsRTCInboundRTPVideoStream_FrameHeight"]["values"]
        values5=values5.substring(1,values5.length-1).split(",").slice(1).map((i) => Number(i))
        let maxVal5=Math.max(...values5)
        let minVal5=Math.min(...values5)
        let avgVal5=values5.reduce((a, b) => (a + b))/values5.length;
        ArrPeerConnectionsRTCInboundRTPVideoStream_FrameHeightMin.push(minVal5)
        ArrPeerConnectionsRTCInboundRTPVideoStream_FrameHeightAvg.push(avgVal5)
        ArrPeerConnectionsRTCInboundRTPVideoStream_FrameHeightMax.push(maxVal5)

        ////
        ArrPeerConnectionsRTCInboundRTPVideoStream_FramesDecodedTime.push(dateFormatter(jsonValues["PeerConnectionsRTCInboundRTPVideoStream_FramesDecoded"]["endTime"])[1])
        let values6=jsonValues["PeerConnectionsRTCInboundRTPVideoStream_FramesDecoded"]["values"]
        values6=values6.substring(1,values6.length-1).split(",").slice(1).map((i) => Number(i))
        let maxVal6=Math.max(...values6)
        let minVal6=Math.min(...values6)
        let avgVal6=values6.reduce((a, b) => (a + b))/values6.length;
        ArrPeerConnectionsRTCInboundRTPVideoStream_FramesDecodedMin.push(minVal6)
        ArrPeerConnectionsRTCInboundRTPVideoStream_FramesDecodedAvg.push(avgVal6)
        ArrPeerConnectionsRTCInboundRTPVideoStream_FramesDecodedMax.push(maxVal6)

        ////
        ArrPeerConnectionsRTCInboundRTPVideoStream_FramesPerSecondTime.push(dateFormatter(jsonValues["PeerConnectionsRTCInboundRTPVideoStream_FramesPerSecond"]["endTime"])[1])
        let values7=jsonValues["PeerConnectionsRTCInboundRTPVideoStream_FramesPerSecond"]["values"]
        values7=values7.substring(1,values7.length-1).split(",").slice(1).map((i) => Number(i))
        let maxVal7=Math.max(...values7)
        let minVal7=Math.min(...values7)
        let avgVal7=values7.reduce((a, b) => (a + b))/values7.length;
        ArrPeerConnectionsRTCInboundRTPVideoStream_FramesPerSecondMin.push(minVal7)
        ArrPeerConnectionsRTCInboundRTPVideoStream_FramesPerSecondAvg.push(avgVal7)
        ArrPeerConnectionsRTCInboundRTPVideoStream_FramesPerSecondMax.push(maxVal7)


        ////
        ArrPeerConnectionsRTCInboundRTPVideoStream_FrameWidthTime.push(dateFormatter(jsonValues["PeerConnectionsRTCInboundRTPVideoStream_FrameWidth"]["endTime"])[1])
        let values8=jsonValues["PeerConnectionsRTCInboundRTPVideoStream_FrameWidth"]["values"]
        values8=values8.substring(1,values8.length-1).split(",").slice(1).map((i) => Number(i))
        let maxVal8=Math.max(...values8)
        let minVal8=Math.min(...values8)
        let avgVal8=values8.reduce((a, b) => (a + b))/values8.length;
        ArrPeerConnectionsRTCInboundRTPVideoStream_FrameWidthMin.push(minVal8)
        ArrPeerConnectionsRTCInboundRTPVideoStream_FrameWidthAvg.push(avgVal8)
        ArrPeerConnectionsRTCInboundRTPVideoStream_FrameWidthMax.push(maxVal8)
  
        ////
        ArrPeerConnectionsRTCInboundRTPVideoStream_JitterTime.push(dateFormatter(jsonValues["PeerConnectionsRTCInboundRTPVideoStream_Jitter"]["endTime"])[1])
        let values9=jsonValues["PeerConnectionsRTCInboundRTPVideoStream_Jitter"]["values"]
        values9=values9.substring(1,values9.length-1).split(",").slice(1).map((i) => Number(i))
        let maxVal9=Math.max(...values9)
        let minVal9=Math.min(...values9)
        let avgVal9=values9.reduce((a, b) => (a + b))/values9.length;
        ArrPeerConnectionsRTCInboundRTPVideoStream_JitterMin.push(minVal9)
        ArrPeerConnectionsRTCInboundRTPVideoStream_JitterAvg.push(avgVal9)
        ArrPeerConnectionsRTCInboundRTPVideoStream_JitterMax.push(maxVal9)
  
        ////
        ArrPeerConnectionsRTCInboundRTPVideoStream_PacketsLostTime.push(dateFormatter(jsonValues["PeerConnectionsRTCInboundRTPVideoStream_PacketsLost"]["endTime"])[1])
        let values10=jsonValues["PeerConnectionsRTCInboundRTPVideoStream_PacketsLost"]["values"]
        values10=values10.substring(1,values10.length-1).split(",").slice(1).map((i) => Number(i))
        let maxVal10=Math.max(...values10)
        let minVal10=Math.min(...values10)
        let avgVal10=values10.reduce((a, b) => (a + b))/values10.length;
        ArrPeerConnectionsRTCInboundRTPVideoStream_PacketsLostMin.push(minVal10)
        ArrPeerConnectionsRTCInboundRTPVideoStream_PacketsLostAvg.push(avgVal10)
        ArrPeerConnectionsRTCInboundRTPVideoStream_PacketsLostMax.push(maxVal10)

        ////
        ArrPeerConnectionsRTCInboundRTPVideoStream_PacketsReceivedTime.push(dateFormatter(jsonValues["PeerConnectionsRTCInboundRTPVideoStream_PacketsReceived"]["endTime"])[1])
        let values11=jsonValues["PeerConnectionsRTCInboundRTPVideoStream_PacketsReceived"]["values"]
        values11=values11.substring(1,values11.length-1).split(",").slice(1).map((i) => Number(i))
        let maxVal11=Math.max(...values11)
        let minVal11=Math.min(...values11)
        let avgVal11=values11.reduce((a, b) => (a + b))/values11.length;
        ArrPeerConnectionsRTCInboundRTPVideoStream_PacketsReceivedMin.push(minVal11)
        ArrPeerConnectionsRTCInboundRTPVideoStream_PacketsReceivedAvg.push(avgVal11)
        ArrPeerConnectionsRTCInboundRTPVideoStream_PacketsReceivedMax.push(maxVal11)

        ////
        ArrPeerConnectionsRTCOutboundRTPAudioStream_BytesSentTime.push(dateFormatter(jsonValues["PeerConnectionsRTCOutboundRTPAudioStream_BytesSent"]["endTime"])[1])
        let values12=jsonValues["PeerConnectionsRTCOutboundRTPAudioStream_BytesSent"]["values"]
        values12=values12.substring(1,values12.length-1).split(",").slice(1).map((i) => Number(i))
        let maxVal12=Math.max(...values12)
        let minVal12=Math.min(...values12)
        let avgVal12=values12.reduce((a, b) => (a + b))/values12.length;
        ArrPeerConnectionsRTCOutboundRTPAudioStream_BytesSentMin.push(minVal12)
        ArrPeerConnectionsRTCOutboundRTPAudioStream_BytesSentAvg.push(avgVal12)
        ArrPeerConnectionsRTCOutboundRTPAudioStream_BytesSentMax.push(maxVal12)

        ////
        ArrPeerConnectionsRTCOutboundRTPAudioStream_PacketSentTime.push(dateFormatter(jsonValues["PeerConnectionsRTCOutboundRTPAudioStream_PacketSent"]["endTime"])[1])
        let values13=jsonValues["PeerConnectionsRTCOutboundRTPAudioStream_PacketSent"]["values"]
        values13=values13.substring(1,values13.length-1).split(",").slice(1).map((i) => Number(i))
        let maxVal13=Math.max(...values13)
        let minVal13=Math.min(...values13)
        let avgVal13=values13.reduce((a, b) => (a + b))/values13.length;
        ArrPeerConnectionsRTCOutboundRTPAudioStream_PacketSentMin.push(minVal13)
        ArrPeerConnectionsRTCOutboundRTPAudioStream_PacketSentAvg.push(avgVal13)
        ArrPeerConnectionsRTCOutboundRTPAudioStream_PacketSentMax.push(maxVal13)

        ////
        ArrPeerConnectionsRTCOutboundRTPAudioStream_RTTTime.push(dateFormatter(jsonValues["PeerConnectionsRTCOutboundRTPAudioStream_RTT"]["endTime"])[1])
        let values14=jsonValues["PeerConnectionsRTCOutboundRTPAudioStream_RTT"]["values"]
        values14=values14.substring(1,values14.length-1).split(",").slice(1).map((i) => Number(i))
        let maxVal14=Math.max(...values14)
        let minVal14=Math.min(...values14)
        let avgVal14=values14.reduce((a, b) => (a + b))/values14.length;
        ArrPeerConnectionsRTCOutboundRTPAudioStream_RTTMin.push(minVal14)
        ArrPeerConnectionsRTCOutboundRTPAudioStream_RTTAvg.push(avgVal14)
        ArrPeerConnectionsRTCOutboundRTPAudioStream_RTTMax.push(maxVal14)

        ////
        ArrPeerConnectionsRTCOutboundRTPVideoStream_BytesSentTime.push(dateFormatter(jsonValues["PeerConnectionsRTCOutboundRTPVideoStream_BytesSent"]["endTime"])[1])
        let values15=jsonValues["PeerConnectionsRTCOutboundRTPVideoStream_BytesSent"]["values"]
        values15=values15.substring(1,values15.length-1).split(",").slice(1).map((i) => Number(i))
        let maxVal15=Math.max(...values15)
        let minVal15=Math.min(...values15)
        let avgVal15=values15.reduce((a, b) => (a + b))/values15.length;
        ArrPeerConnectionsRTCOutboundRTPVideoStream_BytesSentMin.push(minVal15)
        ArrPeerConnectionsRTCOutboundRTPVideoStream_BytesSentAvg.push(avgVal15)
        ArrPeerConnectionsRTCOutboundRTPVideoStream_BytesSentMax.push(maxVal15)

        ////
        ArrPeerConnectionsRTCOutboundRTPVideoStream_FrameHeightTime.push(dateFormatter(jsonValues["PeerConnectionsRTCOutboundRTPVideoStream_FrameHeight"]["endTime"])[1])
        let values16=jsonValues["PeerConnectionsRTCOutboundRTPVideoStream_FrameHeight"]["values"]
        values16=values16.substring(1,values16.length-1).split(",").slice(1).map((i) => Number(i))
        let maxVal16=Math.max(...values16)
        let minVal16=Math.min(...values16)
        let avgVal16=values16.reduce((a, b) => (a + b))/values16.length;
        ArrPeerConnectionsRTCOutboundRTPVideoStream_FrameHeightMin.push(minVal16)
        ArrPeerConnectionsRTCOutboundRTPVideoStream_FrameHeightAvg.push(avgVal16)
        ArrPeerConnectionsRTCOutboundRTPVideoStream_FrameHeightMax.push(maxVal16)

        ////
        ArrPeerConnectionsRTCOutboundRTPVideoStream_FramesEncodedTime.push(dateFormatter(jsonValues["PeerConnectionsRTCOutboundRTPVideoStream_FramesEncoded"]["endTime"])[1])
        let values17=jsonValues["PeerConnectionsRTCOutboundRTPVideoStream_FramesEncoded"]["values"]
        values17=values17.substring(1,values17.length-1).split(",").slice(1).map((i) => Number(i))
        let maxVal17=Math.max(...values17)
        let minVal17=Math.min(...values17)
        let avgVal17=values17.reduce((a, b) => (a + b))/values17.length;
        ArrPeerConnectionsRTCOutboundRTPVideoStream_FramesEncodedMin.push(minVal17)
        ArrPeerConnectionsRTCOutboundRTPVideoStream_FramesEncodedAvg.push(avgVal17)
        ArrPeerConnectionsRTCOutboundRTPVideoStream_FramesEncodedMax.push(maxVal17)


        ////
        ArrPeerConnectionsRTCOutboundRTPVideoStream_FramesPerSecondTime.push(dateFormatter(jsonValues["PeerConnectionsRTCOutboundRTPVideoStream_FramesPerSecond"]["endTime"])[1])
        let values18=jsonValues["PeerConnectionsRTCOutboundRTPVideoStream_FramesPerSecond"]["values"]
        values18=values18.substring(1,values18.length-1).split(",").slice(1).map((i) => Number(i))
        let maxVal18=Math.max(...values18)
        let minVal18=Math.min(...values18)
        let avgVal18=values18.reduce((a, b) => (a + b))/values18.length;
        ArrPeerConnectionsRTCOutboundRTPVideoStream_FramesPerSecondMin.push(minVal18)
        ArrPeerConnectionsRTCOutboundRTPVideoStream_FramesPerSecondAvg.push(avgVal18)
        ArrPeerConnectionsRTCOutboundRTPVideoStream_FramesPerSecondMax.push(maxVal18)


        ////
        ArrPeerConnectionsRTCOutboundRTPVideoStream_FramsWidthTime.push(dateFormatter(jsonValues["PeerConnectionsRTCOutboundRTPVideoStream_FramsWidth"]["endTime"])[1])
        let values19=jsonValues["PeerConnectionsRTCOutboundRTPVideoStream_FramsWidth"]["values"]
        values19=values19.substring(1,values19.length-1).split(",").slice(1).map((i) => Number(i))
        let maxVal19=Math.max(...values19)
        let minVal19=Math.min(...values19)
        let avgVal19=values19.reduce((a, b) => (a + b))/values19.length;
        ArrPeerConnectionsRTCOutboundRTPVideoStream_FramsWidthMin.push(minVal19)
        ArrPeerConnectionsRTCOutboundRTPVideoStream_FramsWidthAvg.push(avgVal19)
        ArrPeerConnectionsRTCOutboundRTPVideoStream_FramsWidthMax.push(maxVal19)

        ////
        ArrPeerConnectionsRTCOutboundRTPVideoStream_PacketSentTime.push(dateFormatter(jsonValues["PeerConnectionsRTCOutboundRTPVideoStream_PacketSent"]["endTime"])[1])
        let values20=jsonValues["PeerConnectionsRTCOutboundRTPVideoStream_PacketSent"]["values"]
        values20=values20.substring(1,values20.length-1).split(",").slice(1).map((i) => Number(i))
        let maxVal20=Math.max(...values20)
        let minVal20=Math.min(...values20)
        let avgVal20=values20.reduce((a, b) => (a + b))/values20.length;
        ArrPeerConnectionsRTCOutboundRTPVideoStream_PacketSentMin.push(minVal20)
        ArrPeerConnectionsRTCOutboundRTPVideoStream_PacketSentAvg.push(avgVal20)
        ArrPeerConnectionsRTCOutboundRTPVideoStream_PacketSentMax.push(maxVal20)

        ////
        ArrPeerConnectionsRTCOutboundRTPVideoStream_RTTTime.push(dateFormatter(jsonValues["PeerConnectionsRTCOutboundRTPVideoStream_RTT"]["endTime"])[1])
        let values21=jsonValues["PeerConnectionsRTCOutboundRTPVideoStream_RTT"]["values"]
        values21=values21.substring(1,values21.length-1).split(",").slice(1).map((i) => Number(i))
        let maxVal21=Math.max(...values21)
        let minVal21=Math.min(...values21)
        let avgVal21=values21.reduce((a, b) => (a + b))/values21.length;
        ArrPeerConnectionsRTCOutboundRTPVideoStream_RTTMin.push(minVal21)
        ArrPeerConnectionsRTCOutboundRTPVideoStream_RTTAvg.push(avgVal21)
        ArrPeerConnectionsRTCOutboundRTPVideoStream_RTTMax.push(maxVal21)


        ////
        ArrPeerConnectionsRTCInboundRTPVideoStream_BytesReceivedTime.push(dateFormatter(jsonValues["PeerConnectionsRTCInboundRTPVideoStream_BytesReceived"]["endTime"])[1])
        let values22=jsonValues["PeerConnectionsRTCInboundRTPVideoStream_BytesReceived"]["values"]
        values22=values22.substring(1,values1.length-1).split(",").slice(1).map((i) => Number(i))
        let maxVal22=Math.max(...values22)
        let minVal22=Math.min(...values22)
        let avgVal22=values22.reduce((a, b) => (a + b))/values22.length;
        ArrPeerConnectionsRTCInboundRTPVideoStream_BytesReceivedMin.push(minVal22)
        ArrPeerConnectionsRTCInboundRTPVideoStream_BytesReceivedAvg.push(avgVal22)
        ArrPeerConnectionsRTCInboundRTPVideoStream_BytesReceivedMax.push(maxVal22)


      })
      setFileUploaded(true)
      setPeerConnectionsRTCInboundRTPAudioStream_BytesReceivedMin(ArrPeerConnectionsRTCInboundRTPAudioStream_BytesReceivedMin)
      setPeerConnectionsRTCInboundRTPAudioStream_BytesReceivedAvg(ArrPeerConnectionsRTCInboundRTPAudioStream_BytesReceivedAvg)
      setPeerConnectionsRTCInboundRTPAudioStream_BytesReceivedMax(ArrPeerConnectionsRTCInboundRTPAudioStream_BytesReceivedMax)
      setPeerConnectionsRTCInboundRTPAudioStream_JitterMin(ArrPeerConnectionsRTCInboundRTPAudioStream_JitterMin)
      setPeerConnectionsRTCInboundRTPAudioStream_JitterAvg(ArrPeerConnectionsRTCInboundRTPAudioStream_JitterAvg)
      setPeerConnectionsRTCInboundRTPAudioStream_JitterMax(ArrPeerConnectionsRTCInboundRTPAudioStream_JitterMax)
      setPeerConnectionsRTCInboundRTPAudioStream_PacketsLostMin(ArrPeerConnectionsRTCInboundRTPAudioStream_PacketsLostMin)
      setPeerConnectionsRTCInboundRTPAudioStream_PacketsLostAvg(ArrPeerConnectionsRTCInboundRTPAudioStream_PacketsLostAvg)
      setPeerConnectionsRTCInboundRTPAudioStream_PacketsLostMax(ArrPeerConnectionsRTCInboundRTPAudioStream_PacketsLostMax)
      setPeerConnectionsRTCInboundRTPAudioStream_PacketsReceivedMin(ArrPeerConnectionsRTCInboundRTPAudioStream_PacketsReceivedMin)
      setPeerConnectionsRTCInboundRTPAudioStream_PacketsReceivedAvg(ArrPeerConnectionsRTCInboundRTPAudioStream_PacketsReceivedAvg)
      setPeerConnectionsRTCInboundRTPAudioStream_PacketsReceivedMax(ArrPeerConnectionsRTCInboundRTPAudioStream_PacketsReceivedMax)
      setPeerConnectionsRTCInboundRTPVideoStream_FrameHeightMin(ArrPeerConnectionsRTCInboundRTPVideoStream_FrameHeightMin)
      setPeerConnectionsRTCInboundRTPVideoStream_FrameHeightAvg(ArrPeerConnectionsRTCInboundRTPVideoStream_FrameHeightAvg)
      setPeerConnectionsRTCInboundRTPVideoStream_FrameHeightMax(ArrPeerConnectionsRTCInboundRTPVideoStream_FrameHeightMax)
      setPeerConnectionsRTCInboundRTPVideoStream_FramesDecodedMin(ArrPeerConnectionsRTCInboundRTPVideoStream_FramesDecodedMin)
      setPeerConnectionsRTCInboundRTPVideoStream_FramesDecodedAvg(ArrPeerConnectionsRTCInboundRTPVideoStream_FramesDecodedAvg)
      setPeerConnectionsRTCInboundRTPVideoStream_FramesDecodedMax(ArrPeerConnectionsRTCInboundRTPVideoStream_FramesDecodedMax)
      setPeerConnectionsRTCInboundRTPVideoStream_FramesPerSecondMin(ArrPeerConnectionsRTCInboundRTPVideoStream_FramesPerSecondMin)
      setPeerConnectionsRTCInboundRTPVideoStream_FramesPerSecondAvg(ArrPeerConnectionsRTCInboundRTPVideoStream_FramesPerSecondAvg)
      setPeerConnectionsRTCInboundRTPVideoStream_FramesPerSecondMax(ArrPeerConnectionsRTCInboundRTPVideoStream_FramesPerSecondMax)
      setPeerConnectionsRTCInboundRTPVideoStream_FrameWidthMin(ArrPeerConnectionsRTCInboundRTPVideoStream_FrameWidthMin)
      setPeerConnectionsRTCInboundRTPVideoStream_FrameWidthAvg(ArrPeerConnectionsRTCInboundRTPVideoStream_FrameWidthAvg)
      setPeerConnectionsRTCInboundRTPVideoStream_FrameWidthMax(ArrPeerConnectionsRTCInboundRTPVideoStream_FrameWidthMax)
      setPeerConnectionsRTCInboundRTPVideoStream_JitterMin(ArrPeerConnectionsRTCInboundRTPVideoStream_JitterMin)
      setPeerConnectionsRTCInboundRTPVideoStream_JitterAvg(ArrPeerConnectionsRTCInboundRTPVideoStream_JitterAvg)
      setPeerConnectionsRTCInboundRTPVideoStream_JitterMax(ArrPeerConnectionsRTCInboundRTPVideoStream_JitterMax)
      setPeerConnectionsRTCInboundRTPVideoStream_PacketsLostMin(ArrPeerConnectionsRTCInboundRTPVideoStream_PacketsLostMin)
      setPeerConnectionsRTCInboundRTPVideoStream_PacketsLostAvg(ArrPeerConnectionsRTCInboundRTPVideoStream_PacketsLostAvg)
      setPeerConnectionsRTCInboundRTPVideoStream_PacketsLostMax(ArrPeerConnectionsRTCInboundRTPVideoStream_PacketsLostMax)
      setPeerConnectionsRTCInboundRTPVideoStream_PacketsReceivedMin(ArrPeerConnectionsRTCInboundRTPVideoStream_PacketsReceivedMin)
      setPeerConnectionsRTCInboundRTPVideoStream_PacketsReceivedAvg(ArrPeerConnectionsRTCInboundRTPVideoStream_PacketsReceivedAvg)
      setPeerConnectionsRTCInboundRTPVideoStream_PacketsReceivedMax(ArrPeerConnectionsRTCInboundRTPVideoStream_PacketsReceivedMax)
      setPeerConnectionsRTCOutboundRTPAudioStream_BytesSentMin(ArrPeerConnectionsRTCOutboundRTPAudioStream_BytesSentMin)
      setPeerConnectionsRTCOutboundRTPAudioStream_BytesSentAvg(ArrPeerConnectionsRTCOutboundRTPAudioStream_BytesSentAvg)
      setPeerConnectionsRTCOutboundRTPAudioStream_BytesSentMax(ArrPeerConnectionsRTCOutboundRTPAudioStream_BytesSentMax)
      setPeerConnectionsRTCOutboundRTPAudioStream_PacketSentMin(ArrPeerConnectionsRTCOutboundRTPAudioStream_PacketSentMin)
      setPeerConnectionsRTCOutboundRTPAudioStream_PacketSentAvg(ArrPeerConnectionsRTCOutboundRTPAudioStream_PacketSentAvg)
      setPeerConnectionsRTCOutboundRTPAudioStream_PacketSentMax(ArrPeerConnectionsRTCOutboundRTPAudioStream_PacketSentMax)
      setPeerConnectionsRTCOutboundRTPAudioStream_RTTMin(ArrPeerConnectionsRTCOutboundRTPAudioStream_RTTMin)
      setPeerConnectionsRTCOutboundRTPAudioStream_RTTAvg(ArrPeerConnectionsRTCOutboundRTPAudioStream_RTTAvg)
      setPeerConnectionsRTCOutboundRTPAudioStream_RTTMax(ArrPeerConnectionsRTCOutboundRTPAudioStream_RTTMax)
      setPeerConnectionsRTCOutboundRTPVideoStream_BytesSentMin(ArrPeerConnectionsRTCOutboundRTPVideoStream_BytesSentMin)
      setPeerConnectionsRTCOutboundRTPVideoStream_BytesSentAvg(ArrPeerConnectionsRTCOutboundRTPVideoStream_BytesSentAvg)
      setPeerConnectionsRTCOutboundRTPVideoStream_BytesSentMax(ArrPeerConnectionsRTCOutboundRTPVideoStream_BytesSentMax)
      setPeerConnectionsRTCOutboundRTPVideoStream_FrameHeightMin(ArrPeerConnectionsRTCOutboundRTPVideoStream_FrameHeightMin)
      setPeerConnectionsRTCOutboundRTPVideoStream_FrameHeightAvg(ArrPeerConnectionsRTCOutboundRTPVideoStream_FrameHeightAvg)
      setPeerConnectionsRTCOutboundRTPVideoStream_FrameHeightMax(ArrPeerConnectionsRTCOutboundRTPVideoStream_FrameHeightMax)
      setPeerConnectionsRTCOutboundRTPVideoStream_FramesEncodedMin(ArrPeerConnectionsRTCOutboundRTPVideoStream_FramesEncodedMin)
      setPeerConnectionsRTCOutboundRTPVideoStream_FramesEncodedAvg(ArrPeerConnectionsRTCOutboundRTPVideoStream_FramesEncodedAvg)
      setPeerConnectionsRTCOutboundRTPVideoStream_FramesEncodedMax(ArrPeerConnectionsRTCOutboundRTPVideoStream_FramesEncodedMax)
      setPeerConnectionsRTCOutboundRTPVideoStream_FramesPerSecondMin(ArrPeerConnectionsRTCOutboundRTPVideoStream_FramesPerSecondMin)
      setPeerConnectionsRTCOutboundRTPVideoStream_FramesPerSecondAvg(ArrPeerConnectionsRTCOutboundRTPVideoStream_FramesPerSecondAvg)
      setPeerConnectionsRTCOutboundRTPVideoStream_FramesPerSecondMax(ArrPeerConnectionsRTCOutboundRTPVideoStream_FramesPerSecondMax)
      setPeerConnectionsRTCOutboundRTPVideoStream_FramsWidthMin(ArrPeerConnectionsRTCOutboundRTPVideoStream_FramsWidthMin)
      setPeerConnectionsRTCOutboundRTPVideoStream_FramsWidthAvg(ArrPeerConnectionsRTCOutboundRTPVideoStream_FramsWidthAvg)
      setPeerConnectionsRTCOutboundRTPVideoStream_FramsWidthMax(ArrPeerConnectionsRTCOutboundRTPVideoStream_FramsWidthMax)
      setPeerConnectionsRTCOutboundRTPVideoStream_PacketSentMin(ArrPeerConnectionsRTCOutboundRTPVideoStream_PacketSentMin)
      setPeerConnectionsRTCOutboundRTPVideoStream_PacketSentAvg(ArrPeerConnectionsRTCOutboundRTPVideoStream_PacketSentAvg)
      setPeerConnectionsRTCOutboundRTPVideoStream_PacketSentMax(ArrPeerConnectionsRTCOutboundRTPVideoStream_PacketSentMax)
      setPeerConnectionsRTCOutboundRTPVideoStream_RTTMin(ArrPeerConnectionsRTCOutboundRTPVideoStream_RTTMin)
      setPeerConnectionsRTCOutboundRTPVideoStream_RTTAvg(ArrPeerConnectionsRTCOutboundRTPVideoStream_RTTAvg)
      setPeerConnectionsRTCOutboundRTPVideoStream_RTTMax(ArrPeerConnectionsRTCOutboundRTPVideoStream_RTTMax)

      setPeerConnectionsRTCInboundRTPAudioStream_BytesReceivedTime(ArrPeerConnectionsRTCInboundRTPAudioStream_BytesReceivedTime)
      setPeerConnectionsRTCInboundRTPAudioStream_JitterTime(ArrPeerConnectionsRTCInboundRTPAudioStream_JitterTime)
      setPeerConnectionsRTCInboundRTPAudioStream_PacketsLostTime(ArrPeerConnectionsRTCInboundRTPAudioStream_PacketsLostTime)
      setPeerConnectionsRTCInboundRTPAudioStream_PacketsReceivedTime(ArrPeerConnectionsRTCInboundRTPAudioStream_PacketsReceivedTime)
      setPeerConnectionsRTCInboundRTPVideoStream_FrameHeightTime(ArrPeerConnectionsRTCInboundRTPVideoStream_FrameHeightTime)
      setPeerConnectionsRTCInboundRTPVideoStream_FramesDecodedTime(ArrPeerConnectionsRTCInboundRTPVideoStream_FramesDecodedTime)
      setPeerConnectionsRTCInboundRTPVideoStream_FramesPerSecondTime(ArrPeerConnectionsRTCInboundRTPVideoStream_FramesPerSecondTime)
      setPeerConnectionsRTCInboundRTPVideoStream_FrameWidthTime(ArrPeerConnectionsRTCInboundRTPVideoStream_FrameWidthTime)
      setPeerConnectionsRTCInboundRTPVideoStream_JitterTime(ArrPeerConnectionsRTCInboundRTPVideoStream_JitterTime)
      setPeerConnectionsRTCInboundRTPVideoStream_PacketsLostTime(ArrPeerConnectionsRTCInboundRTPVideoStream_PacketsLostTime)
      setPeerConnectionsRTCInboundRTPVideoStream_PacketsReceivedTime(ArrPeerConnectionsRTCInboundRTPVideoStream_PacketsReceivedTime)
      setPeerConnectionsRTCOutboundRTPAudioStream_BytesSentTime(ArrPeerConnectionsRTCOutboundRTPAudioStream_BytesSentTime)
      setPeerConnectionsRTCOutboundRTPAudioStream_PacketSentTime(ArrPeerConnectionsRTCOutboundRTPAudioStream_PacketSentTime)
      setPeerConnectionsRTCOutboundRTPAudioStream_RTTTime(ArrPeerConnectionsRTCOutboundRTPAudioStream_RTTTime)
      setPeerConnectionsRTCOutboundRTPVideoStream_BytesSentTime(ArrPeerConnectionsRTCOutboundRTPVideoStream_BytesSentTime)
      setPeerConnectionsRTCOutboundRTPVideoStream_FrameHeightTime(ArrPeerConnectionsRTCOutboundRTPVideoStream_FrameHeightTime)
      setPeerConnectionsRTCOutboundRTPVideoStream_FramesEncodedTime(ArrPeerConnectionsRTCOutboundRTPVideoStream_FramesEncodedTime)
      setPeerConnectionsRTCOutboundRTPVideoStream_FramesPerSecondTime(ArrPeerConnectionsRTCOutboundRTPVideoStream_FramesPerSecondTime)
      setPeerConnectionsRTCOutboundRTPVideoStream_FramsWidthTime(ArrPeerConnectionsRTCOutboundRTPVideoStream_FramsWidthTime)
      setPeerConnectionsRTCOutboundRTPVideoStream_PacketSentTime(ArrPeerConnectionsRTCOutboundRTPVideoStream_PacketSentTime)
      setPeerConnectionsRTCOutboundRTPVideoStream_RTTTime(ArrPeerConnectionsRTCOutboundRTPVideoStream_RTTTime)

      setPeerConnectionsRTCInboundRTPVideoStream_BytesReceivedMin(ArrPeerConnectionsRTCInboundRTPVideoStream_BytesReceivedMin)
      setPeerConnectionsRTCInboundRTPVideoStream_BytesReceivedAvg(ArrPeerConnectionsRTCInboundRTPVideoStream_BytesReceivedAvg)
      setPeerConnectionsRTCInboundRTPVideoStream_BytesReceivedMax(ArrPeerConnectionsRTCInboundRTPVideoStream_BytesReceivedMax)
      setPeerConnectionsRTCInboundRTPVideoStream_BytesReceivedTime(ArrPeerConnectionsRTCInboundRTPVideoStream_BytesReceivedTime)
  }
return(
  <div class="grid">
    {fileUploaded ? 
    <>
    <div class="item"><PeerConnectionsRTCInboundRTPAudioStream_BytesReceived /></div>
    <div class="item"><PeerConnectionsRTCInboundRTPAudioStream_Jitter/></div>
    <div class="item"><PeerConnectionsRTCInboundRTPAudioStream_PacketsLost/></div>
    <div class="item"><PeerConnectionsRTCInboundRTPAudioStream_PacketsReceived/></div>
    <div class="item"><PeerConnectionsRTCInboundRTPVideoStream_BytesReceived/></div>
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
    </>
  :<input onChange = {fileUploder} type = 'file' multiple/>}
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
