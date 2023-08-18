import axios from "axios";
import { useEffect, useState } from "react";

export default function RestGetPage(): JSX.Element {
  const [dog, setDog] = useState();

  useEffect(() => {
    const onClicksync = async (): Promise<void> => {
      const result = await axios.get("https://dog.ceo/api/breeds/image/random");
      console.log(result.data.message);
      setDog(result.data.message);
    };
    void onClicksync();
  }, []);

  return (
    <div>
      <img src={dog} />
    </div>
  );
}
