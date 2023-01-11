/**
 *
 * Uses figlet-cli to generate Asci text
 */
export default function NotFound() {
  const text: string = ` _   _       _     _____                     _ 
| \\ | | ___ | |_  |  ___|__  _   _ _ __   __| |
|  \\| |/ _ \\| __| | |_ / _ \\| | | | '_ \\ / _' |
| |\\  | (_) | |_  |  _| (_) | |_| | | | | (_| |
|_| \\_|\\___/ \\__| |_|  \\___/ \\__,_|_| |_|\\__,_|`;
  return (
    <div className="bg-black h-screen grid m-auto place-content-center overflow-auto  w-full">
      <pre>
        <code className="text-green-600">{text}</code>
      </pre>
    </div>
  );
}
