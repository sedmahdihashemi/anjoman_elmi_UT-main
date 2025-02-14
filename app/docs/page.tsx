import { title } from "@/components/primitives";
import { Alert } from "@nextui-org/alert";

export default function DocsPage() {
  return (
    <div>
       <Alert
          
          color="secondary"
          title={`This is a  variant alert`}
          variant={'bordered'}
          
        />
      <h1 className={title()}>Docs</h1>
    </div>
  );
}
