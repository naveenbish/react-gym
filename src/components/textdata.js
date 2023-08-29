import Exercise from '../data/records.json'

export default function TestData() {
    return(
        <div>
            {
                Exercise.map( exercise => {
                    return(
                        <div className='box' key={exercise.id}>
                            { exercise.Title }
                        </div>
                    )
                })
            }
        </div>
    )
}