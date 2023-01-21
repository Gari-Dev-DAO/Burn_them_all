import { useLeaderBoard } from "../hooks/useLeaderBoard";
import User from "./User";
import UserRank from "./UserRank";

const LeaderBoard = ({ setIsLeaderBoardDisplay }) => {
  const { users } = useLeaderBoard();
  return (
    <div className="leaderBoard">
      <UserRank
       {...{setIsLeaderBoardDisplay}}
      />
      <div className="userContainer">
        {users?.map((user, index) => {
          const { publicKey, noOfTimes } = user ||{};
          return (
            <User
              {...{publicKey,noOfTimes,key:index,rank:index+1}}
            />
          );
        })}
      </div>
    </div>
  );
};

export default LeaderBoard;
