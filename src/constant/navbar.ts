import { BookOpen, BriefcaseBusiness, Clock, Home, LayoutPanelTopIcon, MessageCircleQuestionMark } from "lucide-react";
import type { NavItem } from "../type/navbar";

export const rightNavItems: NavItem[] = [
    {
        id: 1,
        icon: Home,
        name: "Home",
        tooltip: 'Home',
        isNotOnlyIcon: false
    }, {
        id: 2,
        icon: BookOpen,
        name: "Blog",
        tooltip: 'Blogs',
        isNotOnlyIcon: false
    }, {
        id: 3,
        icon: Clock,
        name: "Clock",
        tooltip: 'Current time',
        isNotOnlyIcon: true
    },
    {
        id: 4,
        icon: MessageCircleQuestionMark,
        name: "Help",
        tooltip: 'help',
        isNotOnlyIcon: false
    },

];

export const leftNavItems: NavItem[] = [
    {
        id: 1,
        icon: LayoutPanelTopIcon,
        name: "Home",
        tooltip: 'Home',
        isNotOnlyIcon: false
    }, {
        id: 2,
        icon: BriefcaseBusiness,
        name: "Blog",
        tooltip: 'Blogs',
        isNotOnlyIcon: false
    }, 
    {
        id: 4,
        icon: MessageCircleQuestionMark,
        name: "Help",
        tooltip: 'help',
        isNotOnlyIcon: false
    },

];