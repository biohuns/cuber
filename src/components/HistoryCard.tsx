import { HTMLAttributes } from "react";
import Card from "./Card";

type Props = {} & HTMLAttributes<HTMLDivElement>;

export default function HistoryCard(props: Props) {
  return (
    <Card title="History" {...props}>
      <div className="root">
        この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れ
      </div>
    </Card>
  );
}
