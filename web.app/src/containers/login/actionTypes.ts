import * as actions from './actions';

type InferValueTypes<T> = T extends { [key: string]: infer U } ? U : never;
type ActionTypes = ReturnType<InferValueTypes<typeof actions>>;

export default ActionTypes;
