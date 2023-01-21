import { useEffect, useState, useContext } from "react";
import { getAllAccounts } from "../services/LeaderBoardApi";
import { HomeStateContext } from "../States/HomeState";

export const useLeaderBoard = () => {
  const [users, setUsers] = useState([]);
  const [rank, setRank] = useState(0);
  const [HomeState] = useContext(HomeStateContext);
  const { publicKey } = HomeState;

  useEffect(() => {
    const getLeaderBoard = async () => {
      const data = await getAllAccounts();
      setUsers(data);
    };
    getLeaderBoard();
  }, []);

  useEffect(() => {
    const getRank = () => {
      users.find((user, index) => {
        if (user.publicKey === publicKey.toString()) setRank(index + 1);
      });
    };
    if (publicKey && users) getRank();
  }, [users, publicKey]);

  return { users, rank };
};
