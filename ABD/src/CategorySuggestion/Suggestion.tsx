export interface CategoryItem {
    TextDisplay: string;
} 

export function Suggestion(props:CategoryItem) {
    return (
        <a className='Suggestions'>{props.TextDisplay}</a>
    )
}