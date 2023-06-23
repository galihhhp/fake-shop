import { useEffect, useState } from "react";

import Layout from "components/layout";
import { getCarts } from "utils/query/carts";
import { Cart } from "types/index";

const Cart = () => {
  const [carts, setCarts] = useState<Cart[] | undefined>([]);

  useEffect(() => {
    getCarts()
      .then((data) => {
        setCarts(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(carts);
  return (
    <Layout>
      <div className="my-10 container">
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {carts?.map((cart) => {
              return (
                <tr className="w-[20%]" key={cart.id}>
                  <td>{cart.id}</td>
                  <td>{cart.id}</td>
                  <td>{cart.id}</td>
                  <td>{cart.id}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default Cart;
