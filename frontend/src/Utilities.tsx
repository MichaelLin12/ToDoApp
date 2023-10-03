export const Colors = {
    primary: '#007BFF', // Deep Blue: This color can be used for the main headers, buttons, and important elements to make them stand out.
    secondary: '#4CAF50', // Green: This color represents positivity and can be used for checkboxes or completed tasks.
    background: '#F5F5F5', // Light Gray: This color can be used for the background of the app. It's easy on the eyes.
    text: '#333333', // Dark Gray: This color can be used for text and content. It's easy to read on a light background.
    accent: '#FF5722', // Orange: This color can be used sparingly for highlighting important information or calls to action.
    priority: {
        high: '#FF0000', // Red: This color can be used to indicate high priority tasks.
        medium: '#FFD700', // Gold: This color can be used to indicate medium priority tasks.
        low: '#808080' // Gray: This color can be used to indicate low priority tasks.
    },
    completed: '#4CAF50', // Green: This color can be used to indicate completed tasks.
    hover: '#E0E0E0', // Light Gray: This color can be used for hover or active states.
    error: '#FF3D00', // Dark Red: This color can be used for error messages or warnings.
    success: '#4CAF50' // Green: This color can be used to indicate successful actions, like saving or completing a task.
}

export const ItemTypes = {
    TASK: 0,
    ADD: 1,
    TIME: 2,
    WEATHER: 3
};

export interface Task {
    id: number,
    title: string,
    description: string,
    date: string
    start: string,
    end: string,
}
