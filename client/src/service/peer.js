class PeerService {
    constructor() {
        if (!this.peer) {
            this.peer = new RTCPeerConnection({
                iceServers: [
                    {
                        urls: [
                            "stun:stun.l.google.com:19302",
                            "stun:global.stun.twilio.com:3478",
                        ],
                    },
                ],
            });
        }
    }

    // GENERATE ANSWER FOR AN INCOMING CALL/WEBRTC OFFER
    async getAnswer(offer) {
        if (this.peer) {
            await this.peer.setRemoteDescription(offer);
            const ans = await this.peer.createAnswer();
            await this.peer.setLocalDescription(new RTCSessionDescription(ans));
            return ans;
        }
    }

    // SET LOCAL DESCRIOTION AFTER RECEIVING AN ANSWER
    async setLocalDescription(ans) {
        if (this.peer) {
            await this.peer.setRemoteDescription(
                new RTCSessionDescription(ans)
            );
        }
    }

    // GENERATE AN OFFER TO INITIATE A WEBRTC CONNECTION
    async getOffer() {
        if (this.peer) {
            const offer = await this.peer.createOffer();
            await this.peer.setLocalDescription(
                new RTCSessionDescription(offer)
            );
            return offer;
        }
    }
}

export default new PeerService();
