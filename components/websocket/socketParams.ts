export interface SocketParams {
  url: string
  reconnectLimit: number
  heartBeatMsg: any
  openCallback: Function
  messageCallback: Function
  closeCallback: Function
  errorCallback: Function
}
