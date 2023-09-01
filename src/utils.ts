export const utils = {
  getClientIp: (req: { headers: { [x: string]: any; }; ip: any; connection: { remoteAddress: any; socket: { remoteAddress: any; }; }; socket: { remoteAddress: any; }; }) => {
    var ip = req.headers['x-forwarded-for'] ||
        req.ip ||
        req.connection.remoteAddress ||
        req.socket.remoteAddress ||
        req.connection.socket.remoteAddress || '';
    if(ip.split(',').length>0){
        ip = ip.split(',')[0]
    }
    return ip;
  }
}

