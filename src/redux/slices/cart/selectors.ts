import { RootState } from '../../store';

export const selectCart = (state: RootState) => state.cart;
export const selectTotalPrice = (state: RootState) => state.cart.totalPrice;
export const selectCartItemById = (id: string) => (state: RootState) =>
  state.cart.items.find((obj) => obj.id == id);
