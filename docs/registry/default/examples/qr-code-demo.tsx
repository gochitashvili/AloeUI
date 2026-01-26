import {
  QRCode,
  QRCodeCanvas,
  QRCodeSkeleton,
} from "@/registry/default/ui/qr-code";

export default function QRCodeDemo() {
  return (
    <QRCode value="https://aloeui.com" size={200}>
      <QRCodeSkeleton />
      <QRCodeCanvas />
    </QRCode>
  );
}
