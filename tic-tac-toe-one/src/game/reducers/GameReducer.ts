import { IGameDto } from '../dtos/IGameDto'

const INITIAL_STATE = { name: "nothing", progress: [] };



export function gameReducer (state : IGameDto = INITIAL_STATE, action: { type: string, payload: { id: number }}) : IGameDto {

    if (action.type === 'Clicky') {
        return { ...state, name : state.name + "s" + action.payload.id } as IGameDto;
        // jamaca time! make a new version of IGameDto and return it!
    }

    return state;
}