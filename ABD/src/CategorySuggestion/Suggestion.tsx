export interface CategoryItem {
    TextDisplay: string;
} 

export function Suggestion(props:CategoryItem) {
    return (
        <p className='Suggestions'>{props.TextDisplay}</p>
    )
}