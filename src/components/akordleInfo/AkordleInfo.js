import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setDifficulty, resetGame } from '../../redux/akordle'
import './AkordleInfo.scss'

const AkordleInfo = () => {
    const dispatch = useDispatch()

    const { streak } = useSelector((state) => state.akordle)

    const handleChangeDifficulty = (event) => {
        if (event.target.options.selectedIndex === 0) {
            dispatch(setDifficulty({ difficulty: 4 }))
            dispatch(resetGame())
        } else if (event.target.options.selectedIndex === 1) {
            dispatch(setDifficulty({ difficulty: 5 }))
            dispatch(resetGame())
        } else if (event.target.options.selectedIndex === 2) {
            dispatch(setDifficulty({ difficulty: 6 }))
            dispatch(resetGame())
        }
    }
    return (
        <div className="akordle-info">
            <div className="akordle-streak">Streak: {streak}</div>
            <div className="akordle-difficulty">
                <span style={{ marginRight: 15 }}>Difficulty:</span>
                <select
                    id="difficulty-levels"
                    name="difficulty-levels"
                    defaultValue={'5'}
                    onChange={handleChangeDifficulty}
                >
                    <option value="3">Easy</option>
                    <option value="5">Normal</option>
                    <option value="6">Hard</option>
                </select>
            </div>
        </div>
    )
}

export default AkordleInfo
