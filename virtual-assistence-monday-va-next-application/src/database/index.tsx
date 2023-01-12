export interface CardData {
    title: string;
    type: string;
    startTime: string;
    endTime: string;
    description?: string;
}

export const cardData: CardData[] = [
    {
        title: "DESING MEETING",
        type: "Work",
        startTime: "11:30",
        endTime: "12:30",
        description: "daily with team"
    },
    {
        title: "SCHEDULED CALL",
        type: "Personal",
        startTime: "13:00",
        endTime: "14:00"
    },
    {
        title: "DAILY PLAN",
        type: "Work",
        startTime: "15:30",
        endTime: "17:00",
        description: "review progress"
    },
];