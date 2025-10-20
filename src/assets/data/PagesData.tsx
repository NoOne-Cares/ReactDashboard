import AccountIcon from "../Icons/AccountIcon";
import BlogIcons from "../Icons/BlogIcons";
import PeopleIcon from "../Icons/PeopleIcon";
import SocailIcon from "../Icons/SocailIcon";
import UserIcon from "../Icons/UserIcon";

export const PagesData = [
    {
        id: 1,
        name: "User Profile",
        icon: <UserIcon />,
        subPage: [
            {
                id: 1.1,
                name: "Overview"
            },
            {
                id: 1.2,
                name: "Projcets"
            },
            {
                id: 1.3,
                name: "Campains"
            },
            {
                id: 1.4,
                name: "Documents"
            },
            {
                id: 1.5,
                name: "Followers"
            }
        ]
    },
    {
        id: 2,
        name: "Account",
        icon: <AccountIcon />,
        subPage: []
    },
    {
        id: 3,
        name: "Coorporate ",
        icon: <PeopleIcon />,
        subPage: []
    },
    {
        id: 4,
        name: "Blog",
        icon: <BlogIcons />,
        subPage: []
    },
    {
        id: 5,
        name: "Social",
        icon: <SocailIcon />,
        subPage: []
    }
]