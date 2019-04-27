import { Socket, createServer } from "net";
import { INETProtocol, Peer, V1ProxyProtocol } from "proxy-protocol-js";

const dstAddress = '127.0.0.1';
const dstPort = 5963;

createServer(conn => {
  conn.on('data', data => {
    const proxyConn = new Socket();

    const proxyProtocolHeader = new V1ProxyProtocol(
      INETProtocol.TCP4,
      new Peer(conn.remoteAddress || '0.0.0.0', conn.remotePort || 0),
      new Peer(dstAddress, dstPort),
    ).build();

    proxyConn.connect(dstPort, dstAddress, () => {
      proxyConn.write(Buffer.concat([Buffer.from(proxyProtocolHeader), data]));
    });
    proxyConn.pipe(conn);
  });

  // TODO: handle other events here
}).listen(4649, () => {
  console.log('launched: 0.0.0.0:4649');
});
