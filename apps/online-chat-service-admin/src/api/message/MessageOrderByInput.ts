import { SortOrder } from "../../util/SortOrder";

export type MessageOrderByInput = {
  chatRoomId?: SortOrder;
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
