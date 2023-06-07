import { Normalize } from "@/src/functions/Normalize";
import { Text } from "../Text";

interface userInfoProps {
  field: string;
  info: string;
  isHidden?: boolean;
}

export function UserInfo({
  field = "",
  info = "",
  isHidden = false,
}: userInfoProps) {
  const { hiddenText, capitalizeName } = Normalize();

  const hiddenField = isHidden ? hiddenText(info) : info;

  return (
    <div className="w-full flex gap-1 items-center">
      <Text text={`${capitalizeName(field)}:`} weigth="bold" dark />
      <Text text={`${capitalizeName(hiddenField)}`} dark />
    </div>
  );
}
