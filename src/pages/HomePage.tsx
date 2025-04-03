import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  AlignJustify,
  ArrowRight,
  BadgeIndianRupee,
  BookOpenText,
  BriefcaseBusiness,
  ChartBar,
  CircleAlert,
  CircleCheck,
  Download,
  EllipsisVertical,
  House,
  MapPin,
  MapPinned,
  MessageCircle,
  Trophy,
  UserRound,
  UsersRound,
} from "lucide-react";
import { useNavigate } from "react-router";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

interface Tasks {
  name: string;
  status: "Completed" | "Due" | "In progress" | "To do";
  time: number;
}

const tasksList: Tasks[] = [
  {
    name: "Sangathan Yatra",
    status: "Completed",
    time: 0,
  },
  {
    name: "Sangathan Yatra",
    status: "Due",
    time: 0,
  },
  {
    name: "Sangathan Yatra",
    status: "In progress",
    time: 25,
  },
  {
    name: "Sangathan Yatra",
    status: "To do",
    time: 25,
  },
];

const bgColor = {
  Completed: "bg-green-50",
  "In progress": "bg-blue-50",
  "To do": "bg-orange-50",
  Due: "bg-red-50",
};

const borderColor = {
  Completed: "border-green-400",
  "In progress": "border-blue-400",
  "To do": "border-orange-400",
  Due: "border-red-400",
};

const shadowColor = {
  Completed: "shadow-green-200",
  "In progress": "shadow-blue-200",
  "To do": "shadow-orange-200",
  Due: "shadow-red-200",
};

const newsItemList = [
  {
    headline:
      "महातपस्वी की मंगल सन्निधि में आयोजित हुआ ज्ञानशाला दीक्षान्त समारोह",
    timeAgo: 3,
  },
  {
    headline:
      "महातपस्वी की मंगल सन्निधि में आयोजित हुआ ज्ञानशाला दीक्षान्त समारोह",
    timeAgo: 3,
  },
];

const eventsItemList = [
  {
    name: "Terapanth Sthapna Divas",
    location: "Ahmedabad",
    date: "1st Jan, 2024",
  },
  {
    name: "Terapanth Sthapna Divas",
    location: "Ahmedabad",
    date: "1st Jan, 2024",
  },
];

const updateItemList = [
  {
    title: "कार्यसमिति बैठक",
    desc: "17 अप्रैल 2024 रात्रि 8 बजे सेज़ूम लिंक कार्यसमिति ग्रुप में पोस्ट कर दिया गया है।",
    bg: "bg-[#FFB39D]",
    text: "text-[#FFB39D]",
  },
  {
    title: "कार्यसमिति बैठक",
    desc: "17 अप्रैल 2024 रात्रि 8 बजे सेज़ूम लिंक कार्यसमिति ग्रुप में पोस्ट कर दिया गया है।",
    bg: "bg-[#FFDE97]",
    text: "text-[#FFDE97]",
  },
];

const birthdayBoyList = [
  {
    name: "विक्की जैन",
    job: "Padadhukari Prabhari",
    image: "/birthday_boy.jpg",
  },
  {
    name: "विक्की जैन",
    job: "Padadhukari Prabhari",
    image: "/birthday_boy_2.jpg",
  },
];

const quickLinksList = [
  {
    name: "Poll",
    Icon: ChartBar,
  },
  {
    name: "Knowledge",
    Icon: BookOpenText,
  },
  {
    name: "Download",
    Icon: Download,
  },
  {
    name: "More",
    Icon: EllipsisVertical,
  },
];

const bottomNavbarList = [
  {
    name: "Home",
    Icon: House,
  },
  {
    name: "Leaderboard",
    Icon: Trophy,
  },
  {
    name: "Community",
    Icon: UsersRound,
  },
  {
    name: "My Area",
    Icon: MapPinned,
  },
  {
    name: "Chat",
    Icon: MessageCircle,
  },
];

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="relative h-dvh overflow-auto">
      <div className="flex flex-col space-y-4 bg-gray-50">
        {/* Banner */}

        <div
          className="rounded-b-3xl bg-[#FEEBCA] bg-cover bg-center p-4"
          style={{ backgroundImage: "url(/profile_bg.png)" }}
        >
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              size="icon"
              className="size-10 rounded-full bg-white shadow-md"
              onClick={() => navigate("/sidebar")}
            >
              <AlignJustify className="size-5" />
            </Button>
            <Avatar className="h-[50px] w-[45px]">
              <AvatarImage src="/logo.png" />
            </Avatar>
            <Button
              variant="ghost"
              size="icon"
              className="size-10 rounded-full bg-white shadow-md"
              onClick={() => navigate("/profile")}
            >
              <UserRound className="size-5" />
            </Button>
          </div>
          <div className="mt-10 mb-2 flex items-center justify-between">
            <div className="flex space-x-4">
              <Avatar className="size-16">
                <AvatarImage src="/profile_image.jpg" />
              </Avatar>
              <div className="flex flex-col justify-center space-y-1">
                <h2 className="text-md font-semibold text-red-600">
                  विक्की जैन
                </h2>
                <div className="flex items-center space-x-2">
                  <BriefcaseBusiness
                    strokeWidth="1px"
                    className="size-4 text-gray-600"
                  />
                  <p className="text-xs font-semibold text-gray-600">
                    कार्यसमिति सदस्य
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2 rounded-lg bg-white px-3.5 py-1.5 text-red-600">
              <BadgeIndianRupee className="size-5" strokeWidth="2px" />
              <p>4000</p>
            </div>
          </div>
        </div>

        {/* Tasks */}

        <div className="mt-2 flex items-center justify-between px-4 pl-6">
          <div className="flex items-center space-x-4">
            <img src="lotus.png" alt="lotus" className="w-8" />
            <h2 className="text-xl font-semibold text-red-600">Tasks</h2>
          </div>
          <Button
            variant="outline"
            size="sm"
            className="h-7 rounded-sm text-xs text-red-600"
          >
            View All
          </Button>
        </div>
        <div className="flex flex-col space-y-2.5 px-4">
          {tasksList.map(({ name, status, time }, index) => (
            <div
              key={index}
              className="flex items-center justify-between rounded-lg border border-gray-100 bg-white p-2 shadow-md"
            >
              <div className="flex space-x-3">
                <div
                  className={`grid size-14 place-content-center rounded-md shadow ${shadowColor[status]}`}
                >
                  {status === "Completed" ? (
                    <CircleCheck />
                  ) : status === "Due" ? (
                    <CircleAlert />
                  ) : (
                    <div className="text-center font-semibold">
                      <p>{time}</p>
                      <p className="text-[0.6rem]">Days Left</p>
                    </div>
                  )}
                </div>
                <div className="flex flex-col space-y-1">
                  <h2 className="font-semibold">{name}</h2>
                  <div
                    className={`border ${borderColor[status]} ${bgColor[status]} w-20 rounded-full px-2 py-0.5 text-center text-[0.6rem] font-semibold`}
                  >
                    {status}
                  </div>
                </div>
              </div>
              <Button variant="ghost" size="icon">
                <EllipsisVertical className="size-5 text-gray-500" />
              </Button>
            </div>
          ))}
        </div>

        {/* News */}

        <div className="mt-2 flex items-center space-x-4 px-4 pl-6">
          <img src="lotus.png" alt="lotus" />
          <h2 className="text-xl font-semibold text-red-600">News</h2>
        </div>
        <div className="px-4">
          <Carousel
            opts={{
              align: "start",
              loop: false,
              watchDrag: true,
              skipSnaps: false,
              containScroll: "keepSnaps",
            }}
            plugins={[Autoplay({ delay: 3000 })]} // Auto-play every 3s
            className="w-full max-w-2xl"
          >
            <CarouselContent className="-ml-2">
              {newsItemList.map(({ headline, timeAgo }, index) => (
                <CarouselItem key={index} className="basis-[65%] pl-2">
                  <div
                    className="flex h-64 flex-col items-end justify-between rounded-lg bg-cover bg-center p-4"
                    style={{ backgroundImage: "url(/news_bg.png)" }}
                  >
                    <div className="w-fit rounded-xs bg-white px-1 text-xs text-red-600">
                      {timeAgo} mins ago
                    </div>
                    <h2 className="text-xs text-white">{headline}</h2>
                  </div>
                </CarouselItem>
              ))}
              <CarouselItem className="basis-[65%] pl-2">
                <div
                  className="flex h-64 flex-col items-center justify-center space-y-4 rounded-lg bg-cover bg-center p-4"
                  style={{ backgroundImage: "url(/news_bg_dark.png)" }}
                >
                  <h2 className="text-xl font-semibold text-white">View All</h2>
                  <Button variant="destructive" size="icon">
                    <ArrowRight className="size-5" />
                  </Button>
                </div>
              </CarouselItem>
            </CarouselContent>
          </Carousel>
        </div>

        {/* Events */}

        <div className="mt-2 flex items-center space-x-4 px-4 pl-6">
          <img src="lotus.png" alt="lotus" />
          <h2 className="text-xl font-semibold text-red-600">Events</h2>
        </div>
        <div className="px-4">
          <Carousel
            opts={{
              align: "start",
              loop: false,
              watchDrag: true,
              skipSnaps: false,
              containScroll: "keepSnaps",
            }}
            plugins={[Autoplay({ delay: 3000 })]} // Auto-play every 3s
            className="w-full max-w-2xl"
          >
            <CarouselContent className="-ml-2">
              {eventsItemList.map(({ name, location, date }, index) => (
                <CarouselItem key={index} className="basis-[70%] pl-2">
                  <div
                    className="flex h-44 flex-col items-end justify-between rounded-lg bg-cover bg-center p-4"
                    style={{ backgroundImage: "url(/event_bg.png)" }}
                  >
                    <div className="flex flex-col items-center rounded-sm bg-red-700 px-2 py-1 text-[0.6rem] text-white">
                      <p>Register</p>
                      <p>Now</p>
                    </div>
                  </div>
                  <h2 className="mt-2 text-lg font-semibold">{name}</h2>
                  <div className="mt-1 flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      <MapPin className="size-4" />{" "}
                      <h3 className="text-sm">{location}</h3>
                    </div>
                    <p className="mr-2 text-sm">{date}</p>
                  </div>
                </CarouselItem>
              ))}
              <CarouselItem className="basis-[70%] pl-2">
                <div
                  className="flex h-44 flex-col items-center justify-center space-y-4 rounded-lg bg-cover bg-center p-4"
                  style={{ backgroundImage: "url(/event_bg.png)" }}
                >
                  <h2 className="text-xl font-semibold text-white">View All</h2>
                  <Button variant="destructive" size="icon">
                    <ArrowRight className="size-5" />
                  </Button>
                </div>
              </CarouselItem>
            </CarouselContent>
          </Carousel>
        </div>

        {/* Updates */}

        <div className="mt-2 flex items-center space-x-4 px-4 pl-6">
          <img src="lotus.png" alt="lotus" />
          <h2 className="text-xl font-semibold text-red-600">Updates</h2>
        </div>
        <div className="px-4">
          <Carousel
            opts={{
              align: "start",
              loop: false,
              watchDrag: true,
              skipSnaps: false,
              containScroll: "keepSnaps",
            }}
            plugins={[Autoplay({ delay: 3000 })]} // Auto-play every 3s
            className="w-full max-w-2xl"
          >
            <CarouselContent className="-ml-2">
              <CarouselItem className="basis-[55%] pl-2">
                <div
                  className="flex h-56 flex-col items-start justify-between rounded-lg bg-cover bg-center px-4 pt-8 pb-6 text-white"
                  style={{ backgroundImage: "url(/news_bg_dark.png)" }}
                >
                  <div className="flex flex-col space-y-6">
                    <h2 className="text-xl font-semibold">कार्यसमिति बैठक</h2>
                    <p className="text-xs font-light">
                      17 अप्रैल 2024 रात्रि 8 बजे सेज़ूम लिंक कार्यसमिति ग्रुप
                      में पोस्ट कर दिया गया है।
                    </p>
                  </div>
                  <div className="flex w-full items-center justify-between">
                    <h2>More Info</h2>
                    <Button variant="secondary" size="icon">
                      <ArrowRight className="text-red-700" strokeWidth="3px" />
                    </Button>
                  </div>
                </div>
              </CarouselItem>
              {updateItemList.map(({ title, desc, bg, text }, index) => (
                <CarouselItem key={index} className="basis-[55%] pl-2">
                  <div
                    className={`flex h-56 flex-col items-end justify-between rounded-lg bg-cover bg-center p-4 pt-8 pb-6 ${bg}`}
                  >
                    <div className="flex flex-col space-y-6">
                      <h2 className="text-xl font-semibold">{title}</h2>
                      <p className="text-xs font-light">{desc}</p>
                    </div>
                    <div className="flex w-full items-center justify-between">
                      <h2>More Info</h2>
                      <Button variant="secondary" size="icon">
                        <ArrowRight className={text} strokeWidth="3px" />
                      </Button>
                    </div>
                  </div>
                </CarouselItem>
              ))}
              <CarouselItem className="basis-[70%] pl-2">
                <div className="flex h-56 flex-col items-start justify-between rounded-lg bg-[#FFB39D] bg-cover bg-center p-4 pt-8 pb-6">
                  <h2 className="text-xl font-semibold">View All</h2>
                  <Button variant="secondary" size="icon">
                    <ArrowRight className="size-5 text-[#FFB39D]" />
                  </Button>
                </div>
              </CarouselItem>
            </CarouselContent>
          </Carousel>
        </div>

        {/* Birthdays */}

        <div className="mt-2 flex items-center space-x-4 px-4 pl-6">
          <img src="lotus.png" alt="lotus" />
          <h2 className="text-xl font-semibold text-red-600">Birthdays</h2>
        </div>
        <div className="px-4">
          <Carousel
            opts={{
              align: "start",
              loop: false,
              watchDrag: true,
              skipSnaps: false,
              containScroll: "keepSnaps",
            }}
            plugins={[Autoplay({ delay: 3000 })]} // Auto-play every 3s
            className="w-full max-w-2xl"
          >
            <CarouselContent className="-ml-2">
              {birthdayBoyList.map(({ name, job, image }, index) => (
                <CarouselItem key={index} className="basis-[70%] pl-2">
                  <div
                    className="flex h-80 flex-col items-center justify-center rounded-lg bg-repeat-space p-4"
                    style={{ backgroundImage: "url(/confetti.png)" }}
                  >
                    <div
                      className="flex size-full flex-col justify-end rounded-lg bg-cover bg-center p-2"
                      style={{ backgroundImage: `url(${image})` }}
                    >
                      <div className="flex flex-col items-center rounded-md bg-white p-2">
                        <h2 className="font-semibold">{name}</h2>
                        <div className="flex space-x-2">
                          <BriefcaseBusiness
                            strokeWidth="1px"
                            className="size-4 text-gray-600"
                          />
                          <p className="text-xs font-extralight">{job}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
        <div className="px-4">
          <Button className="h-12 w-full rounded-sm border-2 border-red-600 bg-white text-red-600">
            Upcoming Birthdays
          </Button>
        </div>

        {/* Quick Links */}

        <div className="mt-2 flex items-center space-x-4 px-4 pl-6">
          <img src="lotus.png" alt="lotus" />
          <h2 className="text-xl font-semibold text-red-600">Quick Links</h2>
        </div>
        <div className="mb-6 px-4">
          <div className="flex justify-evenly rounded-lg bg-white p-4 shadow-md">
            {quickLinksList.map(({ name, Icon }, index) => (
              <div key={index} className="flex flex-col items-center space-y-1">
                <Button
                  variant="outline"
                  size="icon"
                  className="size-12 rounded-full"
                >
                  <Icon className="size-6" strokeWidth="1px" />
                </Button>
                <h3 className="text-xs">{name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Navbar */}

      <div className="sticky bottom-0 flex w-full justify-between rounded-t-3xl border-t-2 border-t-gray-200 bg-white px-4 py-2.5">
        {bottomNavbarList.map(({ name, Icon }, index) => (
          <div key={index} className="flex flex-col items-center">
            <Button variant="ghost" size="icon" className="rounded-full">
              <Icon className="size-5" />
            </Button>
            <h2 className="text-xs">{name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
