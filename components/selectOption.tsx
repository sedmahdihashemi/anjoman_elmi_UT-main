import { Avatar } from "@nextui-org/avatar";
import { Select, SelectItem } from "@nextui-org/select";

export default function SelectOption() {
  function handellang(e: any) {
    console.log("Select Option", e.target.value);
  }
  return (
    <Select className="w-64 max-w-xs" label="انتخاب زبان" onChange={handellang}>
      <SelectItem
        key="iran"
        startContent={
          <Avatar
            alt="Iran"
            className="w-6 h-6"
            src="https://flagcdn.com/ir.svg"
          />
        }
      >
        فارسی
      </SelectItem>
      <SelectItem
        key="England"
        startContent={
          <Avatar
            alt="England"
            className="w-6 h-6"
            src="https://upload.wikimedia.org/wikipedia/en/thumb/b/be/Flag_of_England.svg/1200px-Flag_of_England.svg.png?20111003040319"
          />
        }
      >
        English
      </SelectItem>
    </Select>
  );
}
