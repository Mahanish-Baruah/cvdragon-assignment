import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { AvatarImage } from "@radix-ui/react-avatar";
import {
  Bell,
  BriefcaseBusiness,
  ChevronLeft,
  ChevronRight,
  HandHeart,
  Headset,
  MapPinned,
  MessageSquareText,
  NotebookPen,
  Pencil,
  Phone,
  Power,
  Settings,
  Star,
  UserRound,
} from "lucide-react";
import { useNavigate } from "react-router";

const profileItems = [
  {
    name: "Profile",
    desc: "Update and modify your profile",
    Icon: UserRound,
  },
  {
    name: "My Area",
    desc: "Update and modify your profile",
    Icon: MapPinned,
  },
  {
    name: "Notification",
    desc: "Turn on or off notification",
    Icon: Bell,
  },
  {
    name: "My Contribution",
    desc: "Update and modify your profile",
    Icon: HandHeart,
  },
  {
    name: "My Notes",
    desc: "Update and modify your profile",
    Icon: NotebookPen,
  },
  {
    name: "My Scores",
    desc: "Update and modify your profile",
    Icon: Star,
  },
  {
    name: "Contact",
    desc: "Update and modify your profile",
    Icon: Phone,
  },
  {
    name: "Feedback",
    desc: "Update and modify your profile",
    Icon: MessageSquareText,
  },
  {
    name: "Support",
    desc: "Update and modify your profile",
    Icon: Headset,
  },
  {
    name: "Settings",
    desc: "Update and modify your profile",
    Icon: Settings,
  },
];

function ProfilePage() {
  const navigate = useNavigate();
  return (
    <div className="bg-gray-50">
      <div
        className="rounded-b-3xl bg-[#FEEBCA] bg-cover bg-center px-4 pt-4 pb-6"
        style={{ backgroundImage: "url(/profile_bg.png)" }}
      >
        <div className="flex items-center justify-between">
          <Button
            variant="ghost"
            size="icon"
            className="size-10 rounded-full bg-white shadow-md"
            onClick={() => navigate("/")}
          >
            <ChevronLeft className="size-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="size-10 rounded-full bg-white shadow-md"
          >
            <Power className="size-5" />
          </Button>
        </div>
        <div className="mx-auto flex flex-col items-center space-y-4">
          <div className="relative">
            <Avatar className="size-24 border-2 border-rose-200">
              <AvatarImage src="/profile_image.jpg" />
            </Avatar>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-0 bottom-0 size-7 rounded-full"
            >
              <Pencil />
            </Button>
          </div>
          <div className="flex flex-col items-center space-y-1">
            <h2 className="text-3xl font-semibold">Vikki Jain</h2>
            <div className="flex items-center space-x-2">
              <BriefcaseBusiness
                strokeWidth="1px"
                className="size-4 text-gray-500"
              />
              <p className="text-muted-foreground text-xs">
                Karyasamiti Sadasya
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-2.5 p-4">
        {profileItems.map(({ name, desc, Icon }, index) => (
          <div
            key={index}
            className="flex items-center justify-between rounded-sm border border-gray-100 bg-white p-1.5 shadow-md"
          >
            <div className="flex space-x-4">
              <div className="grid size-12 place-content-center rounded-sm bg-red-50">
                <Icon strokeWidth="1px" className="size-7 text-gray-500" />
              </div>
              <div>
                <h2 className="font-semibold text-red-600">{name}</h2>
                <p className="text-muted-foreground text-xs">{desc}</p>
              </div>
            </div>
            <Button variant="ghost" size="icon">
              <ChevronRight className="size-5 text-gray-500" />
            </Button>
          </div>
        ))}
      </div>
      <div className="px-4 pt-2 pb-8">
        <Button variant="destructive" className="w-full rounded-sm py-5">
          Log Out
        </Button>
      </div>
    </div>
  );
}

export default ProfilePage;
