
//let rttArr=PeerConnectionsOutbound[PeerConnectionsRTCOutboundRTPVideoStream_RTT]["values"].substring(1,PeerConnectionsOutbound[PeerConnectionsRTCOutboundRTPVideoStream_RTT]["values"].length-1).split(",");

export const RTC_Parser=(myStr)=>{

let PeerConnectionsFirst= Object.keys(myStr["PeerConnections"])[0]
let PeerConnectionsSecond= Object.keys(myStr["PeerConnections"])[1] 
let PeerConnectionsOutbound=myStr["PeerConnections"][PeerConnectionsFirst]["stats"]
let PeerConnectionsInbound=myStr["PeerConnections"][PeerConnectionsFirst]["stats"]
let jsonRTCValue={}

//Video Stream Outbound
let PeerConnectionsRTCOutboundRTPVideoStream_BytesSent=Object.keys(PeerConnectionsOutbound).filter((value)=>/^RTCOutboundRTPVideoStream_.*-bytesSent/.test(value))[0]
jsonRTCValue["PeerConnectionsRTCOutboundRTPVideoStream_BytesSent"]=PeerConnectionsOutbound[PeerConnectionsRTCOutboundRTPVideoStream_BytesSent]
let PeerConnectionsRTCOutboundRTPVideoStream_PacketSent=Object.keys(PeerConnectionsOutbound).filter((value)=>/^RTCOutboundRTPVideoStream_.*-packetsSent/.test(value))[0]
jsonRTCValue["PeerConnectionsRTCOutboundRTPVideoStream_PacketSent"]=PeerConnectionsOutbound[PeerConnectionsRTCOutboundRTPVideoStream_PacketSent]
let PeerConnectionsRTCOutboundRTPVideoStream_FramesEncoded=Object.keys(PeerConnectionsOutbound).filter((value)=>/^RTCOutboundRTPVideoStream_.*-framesEncoded/.test(value))[0]
jsonRTCValue["PeerConnectionsRTCOutboundRTPVideoStream_FramesEncoded"]=PeerConnectionsOutbound[PeerConnectionsRTCOutboundRTPVideoStream_FramesEncoded]
let PeerConnectionsRTCOutboundRTPVideoStream_FramsWidth=Object.keys(PeerConnectionsOutbound).filter((value)=>/^RTCOutboundRTPVideoStream_.*-frameWidth/.test(value))[0]
jsonRTCValue["PeerConnectionsRTCOutboundRTPVideoStream_FramsWidth"]=PeerConnectionsOutbound[PeerConnectionsRTCOutboundRTPVideoStream_FramsWidth]
let PeerConnectionsRTCOutboundRTPVideoStream_FrameHeight=Object.keys(PeerConnectionsOutbound).filter((value)=>/^RTCOutboundRTPVideoStream_.*-frameHeight/.test(value))[0]
jsonRTCValue["PeerConnectionsRTCOutboundRTPVideoStream_FrameHeight"]=PeerConnectionsOutbound[PeerConnectionsRTCOutboundRTPVideoStream_FrameHeight]
let PeerConnectionsRTCOutboundRTPVideoStream_FramesPerSecond=Object.keys(PeerConnectionsOutbound).filter((value)=>/^RTCOutboundRTPVideoStream_.*-framesPerSecond/.test(value))[0]
jsonRTCValue["PeerConnectionsRTCOutboundRTPVideoStream_FramesPerSecond"]=PeerConnectionsOutbound[PeerConnectionsRTCOutboundRTPVideoStream_FramesPerSecond]
//Video Stream Inbound
let PeerConnectionsRTCInboundRTPVideoStream_BytesReceived=Object.keys(PeerConnectionsInbound).filter((value)=>/^RTCInboundRTPVideoStream_.*-bytesReceived/.test(value))[Object.keys(PeerConnectionsInbound).filter((value)=>/^RTCInboundRTPVideoStream_.*-bytesReceived/.test(value)).length-1]
jsonRTCValue["PeerConnectionsRTCInboundRTPVideoStream_BytesReceived"]=PeerConnectionsInbound[PeerConnectionsRTCInboundRTPVideoStream_BytesReceived]
let PeerConnectionsRTCInboundRTPVideoStream_PacketsReceived=Object.keys(PeerConnectionsInbound).filter((value)=>/^RTCInboundRTPVideoStream_.*-packetsReceived/.test(value))[Object.keys(PeerConnectionsInbound).filter((value)=>/^RTCInboundRTPVideoStream_.*-packetsReceived/.test(value)).length-1]
jsonRTCValue["PeerConnectionsRTCInboundRTPVideoStream_PacketsReceived"]=PeerConnectionsInbound[PeerConnectionsRTCInboundRTPVideoStream_PacketsReceived]
let PeerConnectionsRTCInboundRTPVideoStream_Jitter=Object.keys(PeerConnectionsInbound).filter((value)=>/^RTCInboundRTPVideoStream_.*-\bjitter\b/.test(value))[Object.keys(PeerConnectionsInbound).filter((value)=>/^RTCInboundRTPVideoStream_.*-\bjitter\b/.test(value)).length-1]
jsonRTCValue["PeerConnectionsRTCInboundRTPVideoStream_Jitter"]=PeerConnectionsInbound[PeerConnectionsRTCInboundRTPVideoStream_Jitter]
let PeerConnectionsRTCInboundRTPVideoStream_FrameWidth=Object.keys(PeerConnectionsInbound).filter((value)=>/^RTCInboundRTPVideoStream_.*-frameWidth/.test(value))[Object.keys(PeerConnectionsInbound).filter((value)=>/^RTCInboundRTPVideoStream_.*-frameWidth/.test(value)).length-1]
jsonRTCValue["PeerConnectionsRTCInboundRTPVideoStream_FrameWidth"]=PeerConnectionsInbound[PeerConnectionsRTCInboundRTPVideoStream_FrameWidth]
let PeerConnectionsRTCInboundRTPVideoStream_FrameHeight=Object.keys(PeerConnectionsInbound).filter((value)=>/^RTCInboundRTPVideoStream_.*-frameHeight/.test(value))[Object.keys(PeerConnectionsInbound).filter((value)=>/^RTCInboundRTPVideoStream_.*-frameHeight/.test(value)).length-1]
jsonRTCValue["PeerConnectionsRTCInboundRTPVideoStream_FrameHeight"]=PeerConnectionsInbound[PeerConnectionsRTCInboundRTPVideoStream_FrameHeight]
let PeerConnectionsRTCInboundRTPVideoStream_FramesPerSecond=Object.keys(PeerConnectionsInbound).filter((value)=>/^RTCInboundRTPVideoStream_.*-framesPerSecond/.test(value))[Object.keys(PeerConnectionsInbound).filter((value)=>/^RTCInboundRTPVideoStream_.*-framesPerSecond/.test(value)).length-1]
jsonRTCValue["PeerConnectionsRTCInboundRTPVideoStream_FramesPerSecond"]=PeerConnectionsInbound[PeerConnectionsRTCInboundRTPVideoStream_FramesPerSecond]
let PeerConnectionsRTCInboundRTPVideoStream_FramesDecoded=Object.keys(PeerConnectionsInbound).filter((value)=>/^RTCInboundRTPVideoStream_.*-\bframesDecoded\b/.test(value))[Object.keys(PeerConnectionsInbound).filter((value)=>/^RTCInboundRTPVideoStream_.*-\bframesDecoded\b/.test(value)).length-1]
jsonRTCValue["PeerConnectionsRTCInboundRTPVideoStream_FramesDecoded"]=PeerConnectionsInbound[PeerConnectionsRTCInboundRTPVideoStream_FramesDecoded]
let PeerConnectionsRTCInboundRTPVideoStream_PacketsLost=Object.keys(PeerConnectionsInbound).filter((value)=>/^RTCInboundRTPVideoStream_.*-packetsLost/.test(value))[Object.keys(PeerConnectionsInbound).filter((value)=>/^RTCInboundRTPVideoStream_.*-packetsLost/.test(value)).length-1]
jsonRTCValue["PeerConnectionsRTCInboundRTPVideoStream_PacketsLost"]=PeerConnectionsInbound[PeerConnectionsRTCInboundRTPVideoStream_PacketsLost]

//Audio Stream Outbound
let PeerConnectionsRTCOutboundRTPAudioStream_BytesSent=Object.keys(PeerConnectionsOutbound).filter((value)=>/^RTCOutboundRTPAudioStream_.*-bytesSent/.test(value))[0]
jsonRTCValue["PeerConnectionsRTCOutboundRTPAudioStream_BytesSent"]=PeerConnectionsOutbound[PeerConnectionsRTCOutboundRTPAudioStream_BytesSent]
let PeerConnectionsRTCOutboundRTPAudioStream_PacketSent=Object.keys(PeerConnectionsOutbound).filter((value)=>/^RTCOutboundRTPAudioStream_.*-packetsSent/.test(value))[0]
jsonRTCValue["PeerConnectionsRTCOutboundRTPAudioStream_PacketSent"]=PeerConnectionsOutbound[PeerConnectionsRTCOutboundRTPAudioStream_PacketSent]

//Audio Stream Inbound
let PeerConnectionsRTCInboundRTPAudioStream_BytesReceived=Object.keys(PeerConnectionsInbound).filter((value)=>/^RTCInboundRTPAudioStream_.*-bytesReceived/.test(value))[Object.keys(PeerConnectionsInbound).filter((value)=>/^RTCInboundRTPAudioStream_.*-bytesReceived/.test(value)).length-1]
jsonRTCValue["PeerConnectionsRTCInboundRTPAudioStream_BytesReceived"]=PeerConnectionsInbound[PeerConnectionsRTCInboundRTPAudioStream_BytesReceived]
let PeerConnectionsRTCInboundRTPAudioStream_PacketsReceived=Object.keys(PeerConnectionsInbound).filter((value)=>/^RTCInboundRTPAudioStream_.*-packetsReceived/.test(value))[Object.keys(PeerConnectionsInbound).filter((value)=>/^RTCInboundRTPAudioStream_.*-packetsReceived/.test(value)).length-1]
jsonRTCValue["PeerConnectionsRTCInboundRTPAudioStream_PacketsReceived"]=PeerConnectionsInbound[PeerConnectionsRTCInboundRTPAudioStream_PacketsReceived]
let PeerConnectionsRTCInboundRTPAudioStream_PacketsLost=Object.keys(PeerConnectionsInbound).filter((value)=>/^RTCInboundRTPAudioStream_.*-packetsLost/.test(value))[Object.keys(PeerConnectionsInbound).filter((value)=>/^RTCInboundRTPAudioStream_.*-packetsLost/.test(value)).length-1]
jsonRTCValue["PeerConnectionsRTCInboundRTPAudioStream_PacketsLost"]=PeerConnectionsInbound[PeerConnectionsRTCInboundRTPAudioStream_PacketsLost]
let PeerConnectionsRTCInboundRTPAudioStream_Jitter=Object.keys(PeerConnectionsInbound).filter((value)=>/^RTCInboundRTPAudioStream_.*-\bjitter\b/.test(value))[Object.keys(PeerConnectionsInbound).filter((value)=>/^RTCInboundRTPAudioStream_.*-\bjitter\b/.test(value)).length-1]
jsonRTCValue["PeerConnectionsRTCInboundRTPAudioStream_Jitter"]=PeerConnectionsInbound[PeerConnectionsRTCInboundRTPAudioStream_Jitter]

//RTT Video and Audio Stream
let PeerConnectionsRTCOutboundRTPAudioStream_RTT=Object.keys(PeerConnectionsOutbound).filter((value)=>/^RTCRemoteInboundRtpAudioStream_.*-roundTripTime/.test(value))[0]
jsonRTCValue["PeerConnectionsRTCOutboundRTPAudioStream_RTT"]=PeerConnectionsOutbound[PeerConnectionsRTCOutboundRTPAudioStream_RTT]
let PeerConnectionsRTCOutboundRTPVideoStream_RTT=Object.keys(PeerConnectionsOutbound).filter((value)=>/^RTCRemoteInboundRtpVideoStream_.*-roundTripTime/.test(value))[0]
jsonRTCValue["PeerConnectionsRTCOutboundRTPVideoStream_RTT"]=PeerConnectionsOutbound[PeerConnectionsRTCOutboundRTPVideoStream_RTT]
return jsonRTCValue
}
