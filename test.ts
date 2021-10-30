/**
 * IR tests
 */

makerbit.connectIrReceiver(DigitalPin.P0, IrProtocol.NEC);
makerbit.onIrButton(IrButton.B0_0, IrButtonAction.Pressed, () => {});
makerbit.onIrButton(IrButton.B1_0, IrButtonAction.Released, () => {});
makerbit.onIrDatagram(() => {});
const received: boolean = makerbit.wasIrDataReceived();
const button: number = makerbit.irButton();
const datagram: string = makerbit.irDatagram();
const buttonCode: number = makerbit.irButtonCode(IrButton.B2_2);
