import { Divider } from "@material-ui/core";
import Content from "../pages/Content";

const GetId = (contentId) => {
  return(
    <div>
      <Content contentId={contentId} />
    </div>
  );
};

export default GetId;