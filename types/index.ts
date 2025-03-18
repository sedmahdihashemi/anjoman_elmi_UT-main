import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type TvalGetDataEvents = {
  id: number | string;
  created_at: string;
  desc: string;
  name_interviewe: string;
  name_gardanande: string;
  date_start: string;
  image: string;
  title: string;
  space: string;
}
