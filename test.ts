/**
 * IR tests
 */

 RBBit.connectIrReceiver(DigitalPin.P0, IrProtocol.NEC);
 RBBit.onIrButton(IrButton.B0_0, IrButtonAction.Pressed, () => {});
 RBBit.onIrButton(IrButton.B1_0, IrButtonAction.Released, () => {});
 RBBit.onIrDatagram(() => {});
const received: boolean = RBBit.wasIrDataReceived();
const button: number = RBBit.irButton();
const datagram: string = RBBit.irDatagram();
const buttonCode: number = RBBit.irButtonCode(IrButton.B2_2);
