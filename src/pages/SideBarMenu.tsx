import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  BookOpenText,
  BriefcaseBusiness,
  ChartBar,
  CircleX,
  Download,
  HandHeart,
  Library,
  Megaphone,
  MessageCircle,
  MessageCircleQuestion,
  NotebookPen,
  NotepadText,
  RefreshCcw,
  Settings,
  Trophy,
  UsersRound,
} from "lucide-react";
import { useNavigate } from "react-router";

const sidebarItemList = [
  {
    name: "My Tasks",
    Icon: NotepadText,
  },
  {
    name: "My Community",
    Icon: UsersRound,
  },
  {
    name: "Leaderboard",
    Icon: Trophy,
  },
  {
    name: "Chats",
    Icon: MessageCircle,
  },
  {
    name: "Courses",
    Icon: Library,
  },
  {
    name: "Knowledge",
    Icon: BookOpenText,
  },
  {
    name: "Polls",
    Icon: ChartBar,
  },
  {
    name: "Contributions",
    Icon: HandHeart,
  },
  {
    name: "Quizzes",
    Icon: NotebookPen,
  },
  {
    name: "Updates",
    Icon: RefreshCcw,
  },
  {
    name: "Downloads",
    Icon: Download,
  },
  {
    name: "News",
    Icon: Megaphone,
  },
  {
    name: "FAQ's",
    Icon: MessageCircleQuestion,
  },
  {
    name: "Settings",
    Icon: Settings,
  },
];

function SideBarMenu() {
  const navigate = useNavigate();
  return (
    <>
      <div className="border-b border-b-gray-300 pt-4 pr-4 pb-8 pl-8">
        <div className="flex justify-end">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full shadow-lg"
            onClick={() => navigate("/")}
          >
            <CircleX />
          </Button>
        </div>
        <div className="flex space-x-4">
          <Avatar className="size-16">
            <AvatarImage src="/profile_image.jpg" />
          </Avatar>
          <div className="flex flex-col justify-center space-y-1">
            <h2 className="text-md font-semibold">Vikki Jain</h2>
            <div className="flex items-center space-x-2">
              <BriefcaseBusiness
                strokeWidth="1px"
                className="size-4 text-gray-600"
              />
              <p className="text-xs font-semibold text-gray-600">
                Karyasamiti Sadasya
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-4 p-8">
        {sidebarItemList.map(({ name, Icon }, index) => (
          <Button
            key={index}
            variant="secondary"
            className="flex justify-start space-x-4"
          >
            <Icon strokeWidth="1px" className="size-6" />
            <h2>{name}</h2>
          </Button>
        ))}
      </div>
      <p className="pb-2 text-center text-xs">Version 89799.00</p>
    </>
  );
}

export default SideBarMenu;
