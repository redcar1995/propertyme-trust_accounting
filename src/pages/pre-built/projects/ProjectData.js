import TeamImg from "../../../images/avatar/b-sm.jpg";
import TeamImg2 from "../../../images/avatar/c-sm.jpg";
import TeamImg3 from "../../../images/avatar/a-sm.jpg";
import TeamImg4 from "../../../images/avatar/d-sm.jpg";

import { setDeadline } from "../../../utils/Utils";

export const projectData = [
  {
    id: 1,
    avatarClass: "primary",
    title: "Dashlite Development",
    subtitle: "Softnio",
    desc: "Design and develop the DashLite template for Envato Marketplace",
    lead: "Abu Bin",
    tasks: "3",
    totalTask: "93",
    checked: false,
    deadline: setDeadline(20), // Format ** mm/dd/yyyy
    team: [
      {
        value: "Abu Bin",
        label: "Abu Bin",
        image: null,
        theme: "primary",
      },
      { value: "Milagros Betts", label: "Milagros Betts", theme: "pink" },
      { value: "Ryu Duke", label: "Ryu Duke", theme: "orange" },
    ],
  },
  {
    id: 2,
    avatarClass: "warning",
    title: "Redesign Website",
    subtitle: "Runnergy",
    desc: "Design the website for Runnergy main website including their user dashboard.",
    tasks: "25",
    totalTask: "230",
    lead: "Newman John",
    checked: false,
    deadline: setDeadline(5), // Format ** mm/dd/yyyy
    team: [
      {
        value: "Abu Bin",
        label: "Abu Bin",
        image: TeamImg2,
        theme: "primary",
      },
      {
        value: "Newman John",
        label: "Newman John",
        image: null,
        theme: "primary",
      },
    ],
  },
  {
    id: 3,
    avatarClass: "info",
    title: "Keyword Research for SEO",
    subtitle: "Techyspec",
    desc: "Improve SEO keyword research, A/B testing, Local market improvement",
    tasks: "2",
    totalTask: "15",
    lead: "Abu Bin",
    checked: false,
    deadline: setDeadline(1), // Format ** mm/dd/yyyy
    team: [
      {
        value: "Abu Bin",
        label: "Abu Bin",
        image: TeamImg3,
        theme: "primary",
      },
    ],
  },
  {
    id: 4,
    avatarClass: "danger",
    title: "Website Development",
    subtitle: "Fitness Next",
    desc: "Develop the website using WordPree for the Fitness Next client.",
    tasks: "44",
    totalTask: "65",
    lead: "Newman John",
    checked: false,
    deadline: setDeadline(5), // Format ** mm/dd/yyyy
    team: [
      {
        value: "Newman John",
        label: "Newman John",
        theme: "primary",
      },
      {
        value: "Abu Bin",
        label: "Abu Bin",
        image: TeamImg2,
        theme: "primary",
      },
    ],
  },
  {
    id: 5,
    avatarClass: "info",
    title: "Website Keyword Research for SEO",
    subtitle: "Techyspec",
    desc: "Improve SEO keyword research, A/B testing, Local market improvement.",
    tasks: "8",
    totalTask: "100",
    lead: "Joshua Wilson",
    checked: false,
    deadline: setDeadline(11), // Format ** mm/dd/yyyy
    team: [
      { value: "Joshua Wilson", label: "Joshua Wilson", theme: "pink" },
      {
        value: "Abu Bin",
        label: "Abu Bin",
        image: TeamImg4,
        theme: "primary",
      },
    ],
  },
  {
    id: 6,
    avatarClass: "primary",
    title: "Dashlite Development",
    subtitle: "Softnio",
    desc: "Design and develop the DashLite template for Envato Marketplace",
    tasks: "3",
    totalTask: "25",
    lead: "Milagros Betts",
    checked: false,
    deadline: setDeadline(15), // Format ** mm/dd/yyyy
    team: [
      { value: "Joshua Wilson", label: "Joshua Wilson", theme: "pink" },
      { value: "Milagros Betts", label: "Milagros Betts", theme: "primary" },
      { value: "Ryu Duke", label: "Ryu Duke", theme: "orange" },
      {
        value: "Abu Bin",
        label: "Abu Bin",
        theme: "primary",
      },
      { value: "Aliah Pitts", label: "Aliah Pitts", theme: "blue" },
    ],
  },
  {
    id: 7,
    avatarClass: "danger",
    title: "Website Development",
    subtitle: "Fitness Next",
    desc: "Develop the website using WordPree for the Fitness Next client.",
    tasks: "44",
    totalTask: "65",
    lead: "Newman John",
    checked: false,
    deadline: setDeadline(5), // Format ** mm/dd/yyyy
    team: [
      {
        value: "Newman John",
        label: "Newman John",
        theme: "primary",
      },
      {
        value: "Abu Bin",
        label: "Abu Bin",
        image: TeamImg2,
        theme: "primary",
      },
    ],
  },
  {
    id: 8,
    avatarClass: "warning",
    title: "Redesign Website",
    subtitle: "Runnergy",
    desc: "Design the website for Runnergy main website including their user dashboard.",
    tasks: "25",
    totalTask: "30",
    lead: "Ryu Duke",
    checked: false,
    deadline: setDeadline(25), // Format ** mm/dd/yyyy
    team: [
      {
        value: "Abu Bin",
        label: "Abu Bin",
        image: TeamImg2,
        theme: "primary",
      },
      { value: "Ryu Duke", label: "Ryu Duke", theme: "orange" },
    ],
  },
  {
    id: 9,
    avatarClass: "warning",
    title: "Redesign Logo",
    subtitle: "Runnergy",
    desc: "Design the logo for Runnergy main website including their user dashboard logos.",
    tasks: "5",
    totalTask: "15",
    lead: "Aliah Pitts",
    checked: false,
    deadline: setDeadline(2), // Format ** mm/dd/yyyy
    team: [{ value: "Aliah Pitts", label: "Aliah Pitts", theme: "blue" }],
  },
  {
    id: 10,
    avatarClass: "danger",
    title: "Convert to React",
    subtitle: "Softnio",
    desc: "Convert existing project to a react application",
    tasks: "500",
    totalTask: "2005",
    lead: "Joshua Wilson",
    checked: false,
    deadline: setDeadline(45), // Format ** mm/dd/yyyy
    team: [
      {
        value: "Abu Bin",
        label: "Abu Bin",
        image: TeamImg4,
        theme: "primary",
      },
      {
        value: "Newman John",
        label: "Newman John",
        theme: "primary",
      },
      {
        value: "Joshua Wilson",
        label: "Joshua Wilson",
        image: TeamImg,
        theme: "primary",
      },
    ],
  },
  {
    id: 11,
    avatarClass: "blue",
    title: "Redesign Website",
    subtitle: "Techyspeck",
    desc: "Design the websites for Runnergy main website including their user dashboard logos.",
    tasks: "14",
    totalTask: "15",
    lead: "Abu Bin",
    checked: false,
    deadline: setDeadline(10), // Format ** mm/dd/yyyy
    team: [
      {
        value: "Abu Bin",
        label: "Abu Bin",
        image: TeamImg2,
        theme: "primary",
      },
    ],
  },
  {
    id: 12,
    avatarClass: "pink",
    title: "Create an Vue Application",
    subtitle: "MightyPhillipes",
    desc: "Create a Vue application, with the designs given",
    tasks: "1",
    totalTask: "15",
    lead: "Newman John",
    checked: false,
    deadline: setDeadline(46), // Format ** mm/dd/yyyy
    team: [
      {
        value: "Newman John",
        label: "Newman John",
        theme: "primary",
      },
      {
        value: "Abu Bin",
        label: "Abu Bin",
        image: TeamImg,
        theme: "primary",
      },
    ],
  },
  {
    id: 13,
    avatarClass: "Secondary",
    title: "Host a website in AWS",
    subtitle: "MightyPhillipes",
    desc: "Host a created website using AWS web services",
    tasks: "50",
    totalTask: "70",
    lead: "Newman John",
    checked: false,
    deadline: setDeadline(90), // Format ** mm/dd/yyyy
    team: [
      {
        value: "Newman John",
        label: "Newman John",
        theme: "primary",
      },
    ],
  },
  {
    id: 14,
    avatarClass: "danger",
    title: "Website Development",
    subtitle: "Fitness Next",
    desc: "Develop the website using WordPree for the Fitness Next client.",
    tasks: "44",
    totalTask: "65",
    lead: "Ryu Duke",
    checked: false,
    deadline: setDeadline(5), // Format ** mm/dd/yyyy
    team: [
      { value: "Ryu Duke", label: "Ryu Duke", theme: "orange" },
      {
        value: "Abu Bin",
        label: "Abu Bin",
        image: TeamImg3,
        theme: "primary",
      },
    ],
  },
  {
    id: 15,
    avatarClass: "info",
    title: "Website Keyword Research for SEO",
    subtitle: "Techyspec",
    desc: "Improve SEO keyword research, A/B testing, Local market improvement.",
    tasks: "8",
    totalTask: "100",
    lead: "Abu Bin",
    checked: false,
    deadline: setDeadline(11), // Format ** mm/dd/yyyy
    team: [
      {
        value: "Newman John",
        label: "Newman John",
        image: TeamImg3,
        theme: "primary",
      },
      {
        value: "Abu Bin",
        label: "Abu Bin",
        image: TeamImg4,
        theme: "primary",
      },
    ],
  },
  {
    id: 16,
    avatarClass: "primary",
    title: "Dashlite Development",
    subtitle: "Softnio",
    desc: "Design and develop the DashLite template for Envato Marketplace",
    tasks: "3",
    totalTask: "25",
    lead: "Milagros Betts",
    checked: false,
    deadline: setDeadline(15), // Format ** mm/dd/yyyy
    team: [
      {
        value: "Abu Bin",
        label: "Abu Bin",
        theme: "primary",
      },
      {
        value: "Milagros Betts",
        label: "Milagros Betts",
        image: TeamImg,
        theme: "primary",
      },
      {
        value: "Joshua Wilson",
        label: "Joshua Wilson",
        image: TeamImg,
        theme: "primary",
      },
    ],
  },
  {
    id: 17,
    avatarClass: "danger",
    title: "Website Development",
    subtitle: "Fitness Next",
    desc: "Develop the website using WordPree for the Fitness Next client.",
    tasks: "44",
    totalTask: "65",
    lead: "Joshua Wilson",
    checked: false,
    deadline: setDeadline(5), // Format ** mm/dd/yyyy
    team: [
      { value: "Joshua Wilson", label: "Joshua Wilson", theme: "pink" },
      {
        value: "Abu Bin",
        label: "Abu Bin",
        image: TeamImg2,
        theme: "primary",
      },
    ],
  },
  {
    id: 18,
    avatarClass: "warning",
    title: "Redesign Website",
    subtitle: "Runnergy",
    desc: "Design the website for Runnergy main website including their user dashboard.",
    tasks: "25",
    totalTask: "30",
    lead: "Newman John",
    checked: false,
    deadline: setDeadline(25), // Format ** mm/dd/yyyy
    team: [
      {
        value: "Abu Bin",
        label: "Abu Bin",
        image: TeamImg2,
        theme: "primary",
      },
      {
        value: "Newman John",
        label: "Newman John",
        image: null,
        theme: "primary",
      },
    ],
  },
  {
    id: 19,
    avatarClass: "warning",
    title: "Redesign Logo",
    subtitle: "Runnergy",
    desc: "Design the logo for Runnergy main website including their user dashboard logos.",
    tasks: "5",
    totalTask: "15",
    lead: "Milagros Betts",
    checked: false,
    deadline: setDeadline(2), // Format ** mm/dd/yyyy
    team: [{ value: "Milagros Betts", label: "Milagros Betts", theme: "primary" }],
  },
];

export const teamList = [
  { value: "Abu Bin", label: "Abu Bin", theme: "primary" },
  { value: "Newman John", label: "Newman John", theme: "primary" },
  { value: "Milagros Betts", label: "Milagros Betts", theme: "primary" },
  { value: "Joshua Wilson", label: "Joshua Wilson", theme: "pink" },
  { value: "Ryu Duke", label: "Ryu Duke", theme: "orange" },
  { value: "Aliah Pitts", label: "Aliah Pitts", theme: "blue" },
];
