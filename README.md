# Magic

## Design notes

- One master
  - N readers
  - Data saved on IDB
  - New WebRTC connections are directed to master, replicated to other nodes through master
- Optional signaling server
  - Only to connect readers to master
