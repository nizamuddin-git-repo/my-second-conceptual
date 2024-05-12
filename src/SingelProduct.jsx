import PropTypes from 'prop-types';

const SingelProduct = ({product}) => {
    console.log(product);
    return (
        <div>
            <div className="w-80 space-y-4 text-center">
            <img className="w-40 ml-16" src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg" alt="" />
            <h1 className="text-3xl font-bold">Tesr Test</h1>
            <p className="text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat similique laudantium, ab dolores quasi nulla non quia quod animi iure?</p>
            <div className="flex justify-around">
              <h1 className="text-3xl font-bold">520 $</h1>
              <button>Add To Card</button>
            </div>
          </div>
        </div>
    );
};

SingelProduct.propTypes = {
    SingelProduct: PropTypes.object.isRequired
}
export default SingelProduct;