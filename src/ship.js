(function exportShip() {
    class Ship {
        constructor(itinerary) {
            this.itinerary = itinerary;
            this.currentPort = itinerary.ports[0];
            this.previousPort = null;
            if (itinerary.ports.length > 0) {
                this.currentPort = itinerary.ports[0];
                this.currentPort.addShip(this);
            } else {
                this.currentPort = null;
            }
        }
        setSail() {
            this.currentPort.removeShip(this);

            const itinerary = this.itinerary;
            const currentPortIndex = itinerary.ports.indexOf(this.currentPort);

            if (currentPortIndex === (itinerary.ports.length - 1)) {
                throw new Error('This is the end of your journey!');
            };

            this.previousPort = this.currentPort;
            this.currentPort = null;

        }

        dock() {
            const itinerary = this.itinerary;
            const previousPortIndex = itinerary.ports.indexOf(this.previousPort);

            this.currentPort = itinerary.ports[previousPortIndex + 1];
            this.currentPort.addShip(this);
        }
    };

    if (typeof module !== 'undefined' && module.exports) {
        module.exports = Ship;
    } else {
        window.Ship = Ship;
    }
}());